#!/usr/bin/env python3
"""Generate remaining images using Gemini 3.1 Flash Image Preview."""

import os
import re
import sys
import json
import base64
import urllib.request
import urllib.error
import time
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = PROJECT_ROOT / "src" / "app" / "(main)"
PUBLIC_DIR = PROJECT_ROOT / "public"

MODEL = "gemini-3.1-flash-image-preview"
API_BASE = "https://generativelanguage.googleapis.com/v1beta"

SCAN_DIRS = [
    "poele/granules",
    "poele/pellets",
    "poele/bois",
    "poele/mixte",
    "poele/insert-cheminee",
    "aides/ma-prime-renov-poele",
    "aides/prime-energie-poele",
    "aides/eco-ptz",
    "prix",
    "prix/poele-granules",
    "prix/poele-bois",
    "installation/installateur-rge",
]


def generate_image(prompt: str, api_key: str) -> bytes:
    url = f"{API_BASE}/models/{MODEL}:generateContent?key={api_key}"
    payload = {
        "contents": [{"parts": [{"text": f"Generate an image: {prompt}"}]}],
        "generationConfig": {"responseModalities": ["image", "text"]},
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url, data=data, headers={"Content-Type": "application/json"}, method="POST"
    )
    with urllib.request.urlopen(req, timeout=120) as response:
        result = json.loads(response.read().decode("utf-8"))

    for candidate in result.get("candidates", []):
        for part in candidate.get("content", {}).get("parts", []):
            if "inlineData" in part:
                return base64.b64decode(part["inlineData"]["data"])

    raise ValueError(f"No image in response: {json.dumps(result, indent=2)[:300]}")


def extract_images_from_file(filepath: Path, route: str) -> list[dict]:
    content = filepath.read_text(encoding="utf-8")
    images = []
    seen = set()
    for match in re.finditer(r"@IMAGE\s+([\w\-\.]+)", content):
        filename = match.group(1)
        if filename in seen:
            continue
        after = content[match.end() : match.end() + 500]
        prompt_match = re.search(r"PROMPT:\s*(.+?)(?:\n|\*/|$)", after)
        if prompt_match:
            prompt = prompt_match.group(1).strip()
            images.append({"filename": filename, "prompt": prompt, "route": route})
            seen.add(filename)
    return images


def main():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY not set.")
        sys.exit(1)

    all_images = []
    for scan_dir in SCAN_DIRS:
        dir_path = SRC_DIR / scan_dir
        if not dir_path.exists():
            continue
        for tsx_file in sorted(dir_path.glob("*.tsx")):
            all_images.extend(extract_images_from_file(tsx_file, scan_dir))

    # Filter to only missing images
    missing = []
    for img in all_images:
        output_path = PUBLIC_DIR / img["route"] / img["filename"]
        if not output_path.exists():
            missing.append(img)

    print(f"Found {len(missing)} missing images to generate.\n")

    generated = 0
    failed = 0

    for i, img in enumerate(missing, 1):
        output_path = PUBLIC_DIR / img["route"] / img["filename"]
        output_path.parent.mkdir(parents=True, exist_ok=True)

        print(f"[{i}/{len(missing)}] Generating: {img['route']}/{img['filename']}")
        try:
            image_data = generate_image(img["prompt"], api_key)
            with open(output_path, "wb") as f:
                f.write(image_data)
            generated += 1
            print(f"  OK ({len(image_data) // 1024} KB)")
            # Small delay to avoid rate limiting
            time.sleep(1)
        except urllib.error.HTTPError as e:
            error_body = e.read().decode("utf-8")[:200]
            failed += 1
            print(f"  FAIL: HTTP {e.code}: {error_body}")
        except Exception as e:
            failed += 1
            print(f"  FAIL: {e}")

    print(f"\nDone: {generated} generated, {failed} failed.")


if __name__ == "__main__":
    main()
