#!/usr/bin/env python3
"""Scan all TSX files for @IMAGE + PROMPT comments and generate images via Gemini."""

import os
import re
import subprocess
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = PROJECT_ROOT / "src" / "app" / "(main)"
PUBLIC_DIR = PROJECT_ROOT / "public"
GENERATE_SCRIPT = Path(
    os.path.expanduser(
        "~/.claude/plugins/cache/claude-plugins-official/skill-creator/205b6e0b3036/skills/news-article/scripts/generate-image.py"
    )
)

# Directories to scan
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


def extract_images_from_file(filepath: Path, route: str) -> list[dict]:
    """Extract @IMAGE filename and PROMPT from a TSX file."""
    content = filepath.read_text(encoding="utf-8")
    images = []
    seen = set()

    # Find all @IMAGE occurrences and extract the prompt that follows
    # Handles multiple formats:
    #   // @IMAGE file.jpg
    #   //   CONTEXT: ...
    #   //   PROMPT: the prompt text
    #
    #   {/* @IMAGE file.jpg
    #       PROMPT: the prompt text */}
    #
    #   // @IMAGE file.jpg
    #   // PROMPT: the prompt text
    for match in re.finditer(r"@IMAGE\s+([\w\-\.]+)", content):
        filename = match.group(1)
        if filename in seen:
            continue

        # Look for PROMPT: in the next ~500 chars after @IMAGE
        after = content[match.end():match.end() + 500]
        prompt_match = re.search(r"PROMPT:\s*(.+?)(?:\n|\*/|$)", after)
        if prompt_match:
            prompt = prompt_match.group(1).strip()
            images.append({"filename": filename, "prompt": prompt, "route": route})
            seen.add(filename)

    return images


def main():
    if not os.environ.get("GEMINI_API_KEY"):
        print("Error: GEMINI_API_KEY not set. Run:")
        print('  export $(grep GEMINI_API_KEY .env.local | xargs)')
        sys.exit(1)

    all_images = []

    for scan_dir in SCAN_DIRS:
        dir_path = SRC_DIR / scan_dir
        if not dir_path.exists():
            print(f"SKIP: {scan_dir} (not found)")
            continue

        for tsx_file in sorted(dir_path.glob("*.tsx")):
            images = extract_images_from_file(tsx_file, scan_dir)
            all_images.extend(images)

    print(f"\nFound {len(all_images)} images to generate.\n")

    generated = 0
    skipped = 0
    failed = 0

    for i, img in enumerate(all_images, 1):
        output_path = PUBLIC_DIR / img["route"] / img["filename"]
        output_path.parent.mkdir(parents=True, exist_ok=True)

        if output_path.exists():
            print(f"[{i}/{len(all_images)}] SKIP (exists): {img['route']}/{img['filename']}")
            skipped += 1
            continue

        print(f"[{i}/{len(all_images)}] Generating: {img['route']}/{img['filename']}")
        try:
            result = subprocess.run(
                [sys.executable, str(GENERATE_SCRIPT), img["prompt"], str(output_path)],
                capture_output=True,
                text=True,
                timeout=120,
            )
            if result.returncode == 0:
                generated += 1
                print(f"  OK")
            else:
                failed += 1
                print(f"  FAIL: {result.stderr.strip()[:200]}")
        except subprocess.TimeoutExpired:
            failed += 1
            print(f"  TIMEOUT")
        except Exception as e:
            failed += 1
            print(f"  ERROR: {e}")

    print(f"\nDone: {generated} generated, {skipped} skipped, {failed} failed.")


if __name__ == "__main__":
    main()
