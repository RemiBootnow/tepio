#!/usr/bin/env python3
"""Generate all hero images using Gemini 3.1 Flash Image Preview at 2K resolution."""

import os
import sys
import json
import base64
import urllib.request
import urllib.error
import subprocess
import time
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
PUBLIC_DIR = PROJECT_ROOT / "public"

MODEL = "gemini-3.1-flash-image-preview"
API_BASE = "https://generativelanguage.googleapis.com/v1beta"

HEROES = [
    # ── Aides pages ──
    {
        "route": "aides/ma-prime-renov-poele",
        "filename": "hero-poster.jpg",
        "prompt": "A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty warm beige wall (similar to #FAF6F1) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a young woman in casual clothes sitting on a light wooden chair at a small desk, reviewing official documents on a MacBook laptop, a few printed forms and a coffee cup beside her on the desk. She is surrounded by breathing room on both sides — she does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. Soft natural light from both sides. The room is spacious and uncluttered. Photorealistic, editorial lifestyle photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.",
    },
    {
        "route": "aides/prime-energie-poele",
        "filename": "hero-poster.jpg",
        "prompt": "A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty deep dark green wall (similar to #01322D) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a middle-aged man in a casual sweater standing near a small console table, reviewing a paper folder of official energy documents, looking focused and engaged. He is surrounded by breathing room on both sides — he does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. Photorealistic, editorial lifestyle photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.",
    },
    {
        "route": "aides/eco-ptz",
        "filename": "hero-poster.jpg",
        "prompt": "A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty pure white wall with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a young woman in casual chic clothes sitting on a modern light grey armchair, looking at her smartphone with a relaxed expression, a small side table with a cup of tea beside her. She is surrounded by breathing room on both sides — she does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. Soft natural light from both sides. The room is spacious and uncluttered. Photorealistic, editorial lifestyle photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.",
    },
    # ── Prix pages ──
    {
        "route": "prix",
        "filename": "hero-poster.jpg",
        "prompt": "A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty matte black wall with nothing on it — just a clean bare dark surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a modern freestanding pellet stove in matte anthracite grey with a visible warm orange flame behind the glass door and a black flue pipe going straight up from the top of the stove, standing naturally on the floor. The stove is surrounded by breathing room on both sides — it does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. Photorealistic, editorial interior photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.",
    },
    {
        "route": "prix/poele-granules",
        "filename": "hero-poster.jpg",
        "prompt": "A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty warm beige wall (similar to #FAF6F1) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a sleek modern cylindrical matte-black pellet stove with a visible warm orange flame behind the glass door and a black flue pipe going straight up from the top of the stove, standing naturally on the floor. The stove is surrounded by breathing room on both sides — it does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. Soft natural light from both sides. The room is spacious and uncluttered. Photorealistic, editorial interior photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.",
    },
    {
        "route": "prix/poele-bois",
        "filename": "hero-poster.jpg",
        "prompt": "A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty deep dark green wall (similar to #01322D) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a contemporary cast-iron wood stove with visible dancing orange flames behind the glass door and a black flue pipe going straight up from the top, a neat stack of split birch logs beside it on a black metal log holder. The stove is surrounded by breathing room on both sides — it does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. Photorealistic, editorial interior photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.",
    },
    # ── Installation page ──
    {
        "route": "installation/installateur-rge",
        "filename": "hero-poster.jpg",
        "prompt": "A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty matte black wall with nothing on it — just a clean bare dark surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a professional French artisan in clean navy blue work clothes and a tool belt, standing confidently near a freshly installed modern pellet stove with a black flue pipe, holding a clipboard, looking professional and trustworthy. He is surrounded by breathing room on both sides — he does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. Photorealistic, editorial lifestyle photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.",
    },
]


def generate_image(prompt: str, api_key: str) -> bytes:
    url = f"{API_BASE}/models/{MODEL}:generateContent?key={api_key}"
    payload = {
        "contents": [{"parts": [{"text": f"Generate an image: {prompt}"}]}],
        "generationConfig": {
            "responseModalities": ["image", "text"],
            "imageConfig": {"imageSize": "2K", "aspectRatio": "16:9"},
        },
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url, data=data, headers={"Content-Type": "application/json"}, method="POST"
    )
    with urllib.request.urlopen(req, timeout=180) as response:
        result = json.loads(response.read().decode("utf-8"))

    for candidate in result.get("candidates", []):
        for part in candidate.get("content", {}).get("parts", []):
            if "inlineData" in part:
                return base64.b64decode(part["inlineData"]["data"])

    raise ValueError(f"No image in response: {json.dumps(result, indent=2)[:300]}")


def main():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY not set.")
        sys.exit(1)

    generated = 0
    failed = 0

    for i, hero in enumerate(HEROES, 1):
        output_path = PUBLIC_DIR / hero["route"] / hero["filename"]
        output_path.parent.mkdir(parents=True, exist_ok=True)

        print(f"\n[{i}/{len(HEROES)}] Generating: {hero['route']}/{hero['filename']}")
        try:
            image_data = generate_image(hero["prompt"], api_key)
            with open(output_path, "wb") as f:
                f.write(image_data)
            generated += 1
            print(f"  OK ({len(image_data) // 1024} KB)")

            # Create mobile version by cropping the right half
            mobile_path = output_path.with_stem(output_path.stem + "-mobile")
            import shutil
            shutil.copy2(output_path, mobile_path)
            subprocess.run(
                ["sips", "--cropToHeightWidth", "1536", "1376", "--cropOffset", "0", "1376", str(mobile_path)],
                capture_output=True,
            )
            print(f"  Mobile crop OK → {mobile_path.name}")

            if i < len(HEROES):
                time.sleep(2)
        except urllib.error.HTTPError as e:
            error_body = e.read().decode("utf-8")[:300]
            failed += 1
            print(f"  FAIL: HTTP {e.code}: {error_body}")
        except Exception as e:
            failed += 1
            print(f"  FAIL: {e}")

    print(f"\nDone: {generated} generated, {failed} failed.")


if __name__ == "__main__":
    main()
