#!/usr/bin/env python3
"""
Extract @IMAGE prompts from TSX files and generate missing images.

Usage:
    python3 scripts/extract-and-generate-images.py <page-dir> [--dry-run]

Example:
    python3 scripts/extract-and-generate-images.py src/app/\\(main\\)/poele/bois
"""

import os
import re
import sys
import json
import base64
import urllib.request
import urllib.error
import argparse
import shutil
from datetime import datetime
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
PUBLIC_DIR = PROJECT_ROOT / "public"

MODEL = "gemini-3.1-flash-image-preview"
API_BASE = "https://generativelanguage.googleapis.com/v1beta"


def extract_images_from_tsx(tsx_path):
    """Extract @IMAGE blocks from a TSX file. Returns list of dicts."""
    with open(tsx_path) as f:
        content = f.read()

    images = []
    # Match @IMAGE blocks: filename (aspect-ratio, resolution)
    # Then capture PROMPT line(s) until end of comment
    pattern = r'@IMAGE\s+(\S+\.jpg)\s+\(([^)]+)\)\s*\n(?:.*?CONTEXT:.*?\n)?.*?PROMPT:\s*(.*?)(?:\n\s*\n|\n\s*(?:export|import|//\s*@IMAGE))'

    for match in re.finditer(pattern, content, re.DOTALL):
        filename = match.group(1)
        specs = match.group(2)
        prompt = match.group(3).strip()

        # Clean up prompt: join multi-line, remove comment markers
        prompt = re.sub(r'\n\s*//\s*', ' ', prompt)
        prompt = re.sub(r'\s+', ' ', prompt).strip()

        # Parse specs
        aspect_ratio = "16:9"
        resolution = "1K"
        for spec in specs.split(","):
            spec = spec.strip()
            if ":" in spec and any(c.isdigit() for c in spec):
                if spec in ("16:9", "3:4", "4:3", "9:16", "1:1"):
                    aspect_ratio = spec
            elif spec in ("1K", "2K", "4K", "512"):
                resolution = spec

        # Determine output path from the TSX file's imageSrc references
        # Search for the filename in imageSrc/posterSrc/backgroundSrc
        src_pattern = rf'(?:imageSrc|posterSrc|posterMobileSrc|backgroundSrc)="(/[^"]*{re.escape(filename)})"'
        src_match = re.search(src_pattern, content)
        if src_match:
            img_path = src_match.group(1)
        else:
            # Fallback: derive from the page directory
            img_path = None

        images.append({
            "filename": filename,
            "aspect_ratio": aspect_ratio,
            "resolution": resolution,
            "prompt": prompt,
            "img_path": img_path,
            "source_file": str(tsx_path),
        })

    return images


def generate_image(prompt, api_key, aspect_ratio="16:9", resolution="1K"):
    """Call Gemini API."""
    url = f"{API_BASE}/models/{MODEL}:generateContent?key={api_key}"
    payload = {
        "contents": [{"parts": [{"text": f"Generate an image: {prompt}"}]}],
        "generationConfig": {
            "responseModalities": ["image", "text"],
            "imageConfig": {"aspectRatio": aspect_ratio, "imageSize": resolution},
        },
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(req, timeout=180) as response:
        result = json.loads(response.read().decode("utf-8"))

    for candidate in result.get("candidates", []):
        for part in candidate.get("content", {}).get("parts", []):
            if "inlineData" in part:
                return base64.b64decode(part["inlineData"]["data"])

    raise ValueError(f"No image in response: {json.dumps(result, indent=2)[:300]}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("page_dir", help="Page directory to scan for TSX files")
    parser.add_argument("--dry-run", action="store_true", help="Print what would be generated without calling the API")
    args = parser.parse_args()

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key and not args.dry_run:
        print("Error: GEMINI_API_KEY not set. Use --dry-run to preview.")
        sys.exit(1)

    page_dir = Path(args.page_dir)
    if not page_dir.exists():
        print(f"Error: {page_dir} does not exist")
        sys.exit(1)

    # Collect all images from all TSX files in the directory
    all_images = []
    for tsx_file in sorted(page_dir.glob("*.tsx")):
        images = extract_images_from_tsx(tsx_file)
        all_images.extend(images)

    if not all_images:
        print(f"No @IMAGE blocks found in {page_dir}")
        return

    # Filter to only missing images
    missing = []
    for img in all_images:
        if img["img_path"]:
            full_path = PUBLIC_DIR / img["img_path"].lstrip("/")
            if not full_path.exists():
                img["full_path"] = str(full_path)
                missing.append(img)
            else:
                print(f"  EXISTS: {img['img_path']}")

    if not missing:
        print(f"All {len(all_images)} images already exist for {page_dir}")
        return

    print(f"\n=== {len(missing)} images to generate for {page_dir} ===\n")

    for i, img in enumerate(missing, 1):
        print(f">>> [{i}/{len(missing)}] {img['img_path']}")

        if args.dry_run:
            print(f"  Ratio: {img['aspect_ratio']}, Res: {img['resolution']}")
            print(f"  Prompt: {img['prompt'][:100]}...")
            print()
            continue

        print(f"  Generating ({img['aspect_ratio']}, {img['resolution']}): {img['prompt'][:80]}...")

        try:
            image_data = generate_image(img["prompt"], api_key, img["aspect_ratio"], img["resolution"])
        except Exception as e:
            print(f"  ERROR: {e}")
            continue

        output_path = img["full_path"]
        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        # Archive if exists
        if os.path.exists(output_path):
            archive_dir = os.path.join(os.path.dirname(output_path), "_archive")
            os.makedirs(archive_dir, exist_ok=True)
            basename = os.path.splitext(os.path.basename(output_path))
            timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
            shutil.copy2(output_path, os.path.join(archive_dir, f"{basename[0]}_{timestamp}{basename[1]}"))

        with open(output_path, "wb") as f:
            f.write(image_data)

        size_kb = len(image_data) // 1024
        print(f"  OK ({size_kb} KB)")

    print(f"\n=== Done ===")


if __name__ == "__main__":
    main()
