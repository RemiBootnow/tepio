#!/bin/bash
# Regenerate ALL images for poele, aides, prix, installation pages
# Uses Gemini 3.1 Flash Image Preview API via generate-image.py

set -e

SCRIPT="/Users/remimaringer/.claude/plugins/cache/claude-plugins-official/skill-creator/205b6e0b3036/skills/marketing-page/scripts/generate-image.py"
PUBLIC="/Users/remimaringer/dev/MonExpertRenov/public"
export GEMINI_API_KEY=$(grep '^GEMINI_API_KEY=' /Users/remimaringer/dev/MonExpertRenov/.env.local | cut -d'=' -f2)

STYLE="Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic."
FRENCH="All visible text must be written in French."

gen() {
  local prompt="$1"
  local output="$2"
  local ratio="${3:-16:9}"
  local res="${4:-1K}"
  echo ""
  echo "━━━ Generating: $(basename "$output") ($ratio, $res) ━━━"
  python3 "$SCRIPT" "$prompt" "$output" --aspect-ratio "$ratio" --resolution "$res"
}

COUNT=0
total_images=62

log_progress() {
  COUNT=$((COUNT + 1))
  echo ""
  echo "✓ [$COUNT/$total_images] Done"
  echo ""
}

# ════════════════════════════════════════════
# POELE / GRANULES — wall: dark green #01322D
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% of the frame is an empty deep dark green wall (#01322D) — just a clean bare surface, no shelves, no art. In the center-right area (around 65-85% from left edge), a modern sleek black cylindrical pellet stove with a visible warm orange flame and a black flue pipe going up. The stove sits naturally on the floor. Breathing room on both sides. Light oak parquet floor with a white baseboard between floor and wall. Wall extends beyond left edge and top — no ceiling visible, no window or corner on the left. Soft directional light from the right. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/poele/granules/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A modern sleek black cylindrical pellet stove with a visible warm orange flame and black flue pipe, standing on light oak parquet floor against a deep dark green wall (#01322D). The stove is centered in the frame. White baseboard visible. Minimalist Scandinavian room. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/granules/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "A contemporary pellet stove with visible orange flame in a cozy Scandinavian living room, centered in the frame. A glass jar of wood pellets sits beside the stove. The background shows a realistic living room with a sofa and bookshelf, softly blurred (shallow depth of field). Light oak parquet floor. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/granules/what-is.jpg" "3:4"
log_progress

gen "A certified French artisan in navy work clothes installing a stainless steel flue pipe on a pellet stove in a bright Scandinavian living room. He faces the camera but looks at his work, not into the lens. Professional tools on the floor beside him. Background softly blurred. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/granules/installation.jpg" "3:4"
log_progress

gen "A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is deep dark green (#01322D). In the lower two-thirds of the frame, a young couple sitting on a light sofa, centered horizontally, enjoying the warmth of a modern pellet stove with a visible amber flame and flue pipe. They face the camera but do not look into the lens. The upper third shows only the dark green wall — empty. Light oak parquet floor with white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/poele/granules/cta-bg.jpg" "16:9" "2K"
log_progress

# ════════════════════════════════════════════
# POELE / PELLETS — wall: black #000000
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% is an empty matte black wall — clean bare surface. In the center-right area (65-85% from left), a modern black cylindrical pellet stove with warm orange flame and black flue pipe. A wicker basket of wood pellets beside it. Light oak parquet floor with white baseboard. Wall extends beyond left edge and top. No ceiling, no window on left. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/poele/pellets/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A modern black cylindrical pellet stove with warm orange flame and flue pipe, standing on light oak parquet against a matte black wall. Wicker basket of pellets beside it. Centered in frame. White baseboard. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/pellets/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "Close-up of a hand pouring golden wood pellets from a paper bag into a modern pellet stove hopper. Warm amber light from the stove. A cozy Scandinavian living room in the background, softly blurred. The focus is entirely on the hands and pellets. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/pellets/pellet-combustible.jpg" "3:4"
log_progress

gen "A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is matte black (#000000). In the lower two-thirds, a young woman relaxing on a light sofa centered horizontally, a modern pellet stove glowing with warm light nearby. She faces the camera but looks at a book, not into the lens. Upper third shows only the black wall. Light oak parquet, white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/poele/pellets/cta-background.jpg" "16:9" "2K"
log_progress

# ════════════════════════════════════════════
# POELE / BOIS — wall: beige #FAF6F1
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% is an empty warm beige wall (#FAF6F1) — clean bare surface. In the center-right area (65-85% from left), a contemporary cast-iron wood stove with dancing orange flames and a black flue pipe. Split birch logs on a metal holder beside it. Light oak parquet floor with white baseboard. Wall extends beyond left edge and top. Light from both sides. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/poele/bois/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A contemporary cast-iron wood stove with dancing orange flames and black flue pipe, on light oak parquet against a warm beige wall (#FAF6F1). Split birch logs on metal holder beside it. Centered. White baseboard. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/bois/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "A modern steel wood stove with large glass door showing burning logs, in a cozy Scandinavian living room. A woven basket of firewood sits beside the stove. The background is realistic with a sofa and side table, softly blurred. Light oak parquet floor. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/bois/overview.jpg" "3:4"
log_progress

gen "A traditional cast-iron wood stove with ornate details, visible orange flame through glass door, on a deep dark green surface (#01322D). The stove is composed in the lower two-thirds, upper third is empty dark green background. The background color fills the entire image continuously. 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/bois/type-classique.jpg" "3:4"
log_progress

gen "A sleek modern cylindrical steel wood stove with panoramic glass door showing bright flames, on a warm beige surface (#FAF6F1). The stove is composed in the lower two-thirds, upper third is empty beige background. The background color fills the entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/bois/type-contemporain.jpg" "3:4"
log_progress

gen "A high-efficiency double combustion wood stove with tall vertical design and clean intense flame, on a matte black surface (#000000). The stove is composed in the lower two-thirds, upper third is empty black background. The background color fills the entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/bois/type-double-combustion.jpg" "3:4"
log_progress

gen "A modern wood stove insert in a clean stone surround, bright flames visible through the glass, on a white surface (#FFFFFF). The insert is composed in the lower two-thirds, upper third is empty white background. The background color fills the entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/bois/type-insert.jpg" "3:4"
log_progress

gen "A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is warm beige (#FAF6F1). In the lower two-thirds, a man relaxing on a sofa centered horizontally, a wood stove glowing with warm flames nearby. He faces the camera but looks at the fire, not into the lens. Upper third shows only the beige wall. Light oak parquet, white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/poele/bois/cta-bg.jpg" "16:9" "2K"
log_progress

# ════════════════════════════════════════════
# POELE / MIXTE — wall: white #FFFFFF
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% is an empty pure white wall — clean bare surface. In the center-right area (65-85% from left), a modern dual-fuel stove with visible flame, split logs and a bag of pellets beside it. Black flue pipe going up. Light oak parquet floor with white baseboard. Wall extends beyond left edge and top. Light from both sides. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/poele/mixte/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A modern dual-fuel stove with visible flame, split logs and pellet bag beside it, black flue pipe. Standing on light oak parquet against a pure white wall. Centered in frame. White baseboard. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/mixte/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "A modern dual-fuel stove in a Scandinavian living room, glass door showing gentle flames. A bag of pellets and split logs are arranged beside the stove. The background is realistic with furniture softly blurred. Light oak parquet floor. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/mixte/what-is.jpg" "3:4"
log_progress

gen "A certified French artisan in navy work clothes adjusting settings on a dual-fuel stove. The stove door is slightly open, the hopper visible at top. He faces the camera but focuses on his work. Background is a bright Scandinavian living room, softly blurred. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/mixte/how-it-works.jpg" "3:4"
log_progress

gen "A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is pure white (#FFFFFF). In the lower two-thirds, a couple on a sofa centered horizontally, a modern dual-fuel stove glowing nearby. They face the camera but chat together, not looking into the lens. Upper third shows only the white wall. Light oak parquet, white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/poele/mixte/cta-bg.jpg" "16:9" "2K"
log_progress

# ════════════════════════════════════════════
# POELE / INSERT-CHEMINEE — wall: dark green #01322D
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% is an empty deep dark green wall (#01322D). In the center-right area (65-85% from left), a modern fireplace insert with bright orange flames set in a clean stone surround. Light oak parquet floor with white baseboard. Wall extends beyond left edge and top. No ceiling. Light from the right only. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/poele/insert-cheminee/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A modern fireplace insert with bright orange flames in a clean stone surround, against a deep dark green wall (#01322D). Centered in frame. Light oak parquet, white baseboard. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/insert-cheminee/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "A modern cast-iron fireplace insert with large glass door showing bright burning logs, installed in a traditional stone fireplace surround. The focus is on the insert. Background is a cozy living room, softly blurred. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/insert-cheminee/what-is-insert.jpg" "3:4"
log_progress

gen "A modern wood-burning fireplace insert with large glass door and bright burning oak logs, dark cast iron frame. On a deep dark green surface (#01322D). Composed in lower two-thirds, upper third empty green. Background color fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/insert-cheminee/type-insert-bois.jpg" "3:4"
log_progress

gen "A sleek pellet fireplace insert with modern steel frame and small visible pellet flame, contemporary grey stone surround. On a warm beige surface (#FAF6F1). Composed in lower two-thirds, upper third empty beige. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/insert-cheminee/type-insert-granules.jpg" "3:4"
log_progress

gen "A hybrid wood and pellet fireplace insert with contemporary dark metal frame and glass door, in a modern setting. On a matte black surface (#000000). Composed in lower two-thirds, upper third empty black. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/insert-cheminee/type-insert-mixte.jpg" "3:4"
log_progress

gen "A double-sided see-through fireplace insert visible from one side, modern minimalist design with clean flames. On a white surface (#FFFFFF). Composed in lower two-thirds, upper third empty white. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/poele/insert-cheminee/type-insert-double-face.jpg" "3:4"
log_progress

gen "A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is deep dark green (#01322D). In the lower two-thirds, a family relaxing on a large sofa centered horizontally, a modern fireplace insert glowing behind glass in the wall. They face the camera but look at each other. Upper third shows only the green wall. Light oak parquet, white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/poele/insert-cheminee/cta-insert.jpg" "16:9" "2K"
log_progress

# ════════════════════════════════════════════
# AIDES / MA-PRIME-RENOV-POELE — wall: beige #FAF6F1
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% is an empty warm beige wall (#FAF6F1). In the center-right area (65-85% from left), a young woman sitting at a small wooden desk reviewing official documents on a MacBook. Printed forms and a coffee cup on the desk. She faces the camera but looks at her screen, not into the lens. Light oak parquet, white baseboard. Light from both sides. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/aides/ma-prime-renov-poele/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A young woman sitting at a small wooden desk reviewing official documents on a MacBook, against a warm beige wall (#FAF6F1). Printed forms and coffee cup. She faces the camera but looks at her screen. Centered in frame. Light oak parquet, white baseboard. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/ma-prime-renov-poele/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "A French couple in their 40s at a kitchen table reviewing renovation aid documents. A tablet and papers spread on the table. They face the camera but look at the documents. The background is a modern Scandinavian kitchen, softly blurred. Natural window light. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/ma-prime-renov-poele/what-is-mpr.jpg" "3:4"
log_progress

gen "A close-up of a modern cylindrical pellet stove with visible orange flame, resting naturally on a deep dark green surface (#01322D). The stove is in the lower two-thirds, upper third is empty dark green background. Background color fills the entire image as one cohesive scene. 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/ma-prime-renov-poele/poele-granules.jpg" "3:4"
log_progress

gen "A freestanding modern log-burning stove with visible flame and glass door, resting on a warm beige surface (#FAF6F1). The stove is in the lower two-thirds, upper third is empty beige background. Background color fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/ma-prime-renov-poele/poele-buches.jpg" "3:4"
log_progress

gen "A built-in fireplace insert with clean modern lines and visible flame, contemporary dark surround, on a matte black background (#000000). In the lower two-thirds, upper third is empty black. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/ma-prime-renov-poele/insert-cheminee.jpg" "3:4"
log_progress

gen "A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is warm beige (#FAF6F1). In the lower two-thirds, a young couple on a light sofa centered horizontally, a pellet stove with amber flame and flue pipe nearby. They face the camera but look at each other. Upper third shows only the beige wall. Light oak parquet, white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/aides/ma-prime-renov-poele/cta-bg.jpg" "16:9" "2K"
log_progress

# ════════════════════════════════════════════
# AIDES / ECO-PTZ — wall: dark green #01322D
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% is an empty deep dark green wall (#01322D). In the center-right area (65-85% from left), a young man in casual clothes sitting on a light grey armchair, consulting his smartphone. A tea cup on the side table. He faces the camera but looks at his phone. Light oak parquet, white baseboard. Light from right only. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/aides/eco-ptz/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A young man in casual clothes sitting on a light grey armchair consulting his smartphone, against a deep dark green wall (#01322D). Tea cup on side table. Centered in frame. Light oak parquet, white baseboard. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/eco-ptz/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "A modern pellet stove with visible warm orange flame in a contemporary Scandinavian living room. On a deep dark green surface (#01322D). Composed in lower two-thirds, upper third empty green. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/eco-ptz/travaux-chauffage.jpg" "3:4"
log_progress

gen "A professional artisan installing interior wall insulation panels in a French home. He wears protective work gear. On a warm beige surface (#FAF6F1). Composed in lower two-thirds, upper third empty beige. Background fills entire image. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/eco-ptz/travaux-isolation-murs.jpg" "3:4"
log_progress

gen "A new triple-glazed window being installed in a French home, artisan hands adjusting the frame, bright outdoor light through glass. On a matte black surface (#000000). Composed in lower two-thirds, upper third empty black. Background fills entire image. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/eco-ptz/travaux-fenetres.jpg" "3:4"
log_progress

gen "A modern thermodynamic water heater in a clean utility room, professional installation with visible piping. On a white surface (#FFFFFF). Composed in lower two-thirds, upper third empty white. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/eco-ptz/travaux-eau-chaude.jpg" "3:4"
log_progress

gen "An artisan rolling out thick mineral wool insulation in an attic space, wooden roof beams visible. On a deep dark green surface (#01322D). Composed in lower two-thirds, upper third empty green. Background fills entire image. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/eco-ptz/travaux-isolation-toiture.jpg" "3:4"
log_progress

gen "A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is deep dark green (#01322D). In the lower two-thirds, a family of four on a large sofa centered horizontally, warm ambient light from a pellet stove. They face the camera but interact with each other. Upper third shows only the green wall. Light oak parquet, white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/aides/eco-ptz/cta.jpg" "16:9" "2K"
log_progress

# ════════════════════════════════════════════
# AIDES / PRIME-ENERGIE-POELE — wall: black #000000
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% is an empty matte black wall. In the center-right area (65-85% from left), a middle-aged man standing near a small console table, reviewing a paper folder of energy documents. He faces the camera but reads his documents. Light oak parquet, white baseboard. Light from right only. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/aides/prime-energie-poele/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A middle-aged man near a console table reviewing a paper folder of energy documents, against a matte black wall. Centered in frame. Light oak parquet, white baseboard. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/prime-energie-poele/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "Close-up of official French energy savings certificate documents on a wooden desk, a small pellet stove model visible in the background. Warm natural office light. The focus is on the documents. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/prime-energie-poele/definition.jpg" "3:4"
log_progress

gen "A modern matte-black pellet stove with visible orange flame, on a deep dark green surface (#01322D). Composed in lower two-thirds, upper third empty green. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/prime-energie-poele/stove-granules.jpg" "3:4"
log_progress

gen "A classic cast-iron wood-burning stove with roaring fire and glass door, on a warm beige surface (#FAF6F1). Composed in lower two-thirds, upper third empty beige. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/prime-energie-poele/stove-buches.jpg" "3:4"
log_progress

gen "A sleek modern hybrid wood and pellet stove with dual fuel compartments visible, on a matte black surface (#000000). Composed in lower two-thirds, upper third empty black. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/prime-energie-poele/stove-hybride.jpg" "3:4"
log_progress

gen "A large thermal mass stove (poele de masse) made of soapstone, tall cylindrical design with warm radiant glow, on a white surface (#FFFFFF). Composed in lower two-thirds, upper third empty white. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/aides/prime-energie-poele/stove-masse.jpg" "3:4"
log_progress

gen "A wide panoramic view of a Scandinavian living room, camera facing the wall straight-on. The back wall is matte black (#000000). In the lower two-thirds, a happy couple on a sofa centered horizontally, a glowing pellet stove nearby. They face the camera but look at each other. Upper third shows only the black wall. Light oak parquet, white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/aides/prime-energie-poele/cta-image.jpg" "16:9" "2K"
log_progress

# ════════════════════════════════════════════
# PRIX — wall: black #000000
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% is an empty matte black wall. In the center-right area (65-85% from left), a modern freestanding pellet stove in matte anthracite grey with visible warm orange flame and black flue pipe. Light oak parquet, white baseboard. Light from right only. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/prix/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A modern freestanding pellet stove in matte anthracite grey with warm orange flame and flue pipe, against a matte black wall. Centered. Light oak parquet, white baseboard. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/prix/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "A certified French artisan in navy work clothes installing a pellet stove flue pipe in a bright Scandinavian living room. Tools on the floor. A homeowner watches from behind. The artisan faces the camera but focuses on the installation. Background softly blurred. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/prix/installation.jpg" "3:4"
log_progress

gen "A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is matte black (#000000). In the lower two-thirds, a family relaxing on a sofa centered horizontally, warm glow from a stove. Upper third shows only the black wall. Light oak parquet, white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/prix/cta-background.jpg" "16:9" "2K"
log_progress

# ════════════════════════════════════════════
# PRIX / POELE-GRANULES — wall: dark green #01322D
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% is an empty deep dark green wall (#01322D). In the center-right area (65-85%), a sleek modern cylindrical matte-black pellet stove with warm orange flame and flue pipe. Light oak parquet, white baseboard. Light from right. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/prix/poele-granules/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A sleek cylindrical matte-black pellet stove with warm orange flame and flue pipe, against a deep dark green wall (#01322D). Centered. Light oak parquet, white baseboard. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/prix/poele-granules/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "Three different pellet stove models side by side in a bright showroom, ranging from a simple compact model to an elegant designer model. The focus is on the stoves. Background softly blurred. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/prix/poele-granules/pricing-stove.jpg" "3:4"
log_progress

gen "Close-up of hands pouring golden wood pellets from a paper bag into a pellet stove hopper. Warm amber tones. A cozy Scandinavian living room in the background, softly blurred. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/prix/poele-granules/running-costs.jpg" "3:4"
log_progress

gen "A wide panoramic view of a Scandinavian living room, camera facing the wall straight-on. The back wall is deep dark green (#01322D). In the lower two-thirds, a couple on a sofa centered, pellet stove glowing. Upper third shows only the green wall. Light oak parquet, white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/prix/poele-granules/cta-background.jpg" "16:9" "2K"
log_progress

# ════════════════════════════════════════════
# PRIX / POELE-BOIS — wall: white #FFFFFF
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% is an empty pure white wall. In the center-right area (65-85%), a contemporary cast-iron wood stove with dancing orange flames and flue pipe. Split birch logs on metal holder. Light oak parquet, white baseboard. Light from both sides. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/prix/poele-bois/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A contemporary cast-iron wood stove with dancing flames and flue pipe, against a pure white wall. Split logs on holder beside it. Centered. Light oak parquet, white baseboard. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/prix/poele-bois/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "Three different wood stoves in a showroom: a simple matte black steel stove on the left, a mid-range cast iron one in the center, and a premium soapstone model on the right. Bright showroom lighting. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/prix/poele-bois/pricing-ranges.jpg" "3:4"
log_progress

gen "A modern minimalist matte black steel wood stove with visible orange flame, on a deep dark green surface (#01322D). Composed in lower two-thirds, upper third empty green. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/prix/poele-bois/type-acier.jpg" "3:4"
log_progress

gen "A traditional cast iron wood stove with ornate details and glass door showing burning logs, on a warm beige surface (#FAF6F1). Composed in lower two-thirds, upper third empty beige. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/prix/poele-bois/type-fonte.jpg" "3:4"
log_progress

gen "A premium tall soapstone wood stove with natural grey stone finish and large glass door with bright flames, on a matte black surface (#000000). Composed in lower two-thirds, upper third empty black. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/prix/poele-bois/type-pierre-ollaire.jpg" "3:4"
log_progress

gen "A modern wood-burning fireplace insert built into a clean white mantel surround, panoramic glass front with crackling fire, on a white surface (#FFFFFF). Composed in lower two-thirds, upper third empty white. Background fills entire image. 3:4 portrait. $STYLE" \
  "$PUBLIC/prix/poele-bois/type-insert.jpg" "3:4"
log_progress

gen "A wide panoramic view of a Scandinavian living room, camera facing the wall straight-on. The back wall is pure white (#FFFFFF). In the lower two-thirds, a man on a sofa centered, wood stove glowing with warm flames. Upper third shows only the white wall. Light oak parquet, white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/prix/poele-bois/cta-bg.jpg" "16:9" "2K"
log_progress

# ════════════════════════════════════════════
# INSTALLATION / INSTALLATEUR-RGE — wall: beige #FAF6F1
# ════════════════════════════════════════════

gen "A minimalist Scandinavian living room, camera facing the wall straight-on at hip height. The left 60% is an empty warm beige wall (#FAF6F1). In the center-right area (65-85%), a professional French RGE-certified artisan in clean navy work clothes with tool belt, standing next to a modern cylindrical pellet stove with black flue pipe. He holds a clipboard and faces the camera but reads his notes. Light oak parquet, white baseboard. Light from both sides. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/installation/installateur-rge/hero-poster.jpg" "16:9" "2K"
log_progress

gen "A professional French artisan in navy work clothes with tool belt, standing next to a pellet stove with flue pipe, against a warm beige wall (#FAF6F1). He holds a clipboard. Centered. Light oak parquet, white baseboard. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/installation/installateur-rge/hero-poster-mobile.jpg" "3:4" "2K"
log_progress

gen "Close-up of French artisan hands holding an official RGE certification document with green logo and stamp. Clean navy work clothes visible. Background is a Scandinavian workshop, softly blurred. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/installation/installateur-rge/certification-rge.jpg" "3:4"
log_progress

gen "A person at a Scandinavian desk browsing a website on a silver laptop, on a deep dark green surface (#01322D). The scene is in the lower two-thirds, upper third is empty green background. Background fills entire image. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/installation/installateur-rge/demarche-annuaire.jpg" "3:4"
log_progress

gen "A homeowner and a professional installer at a light oak table reviewing printed quote documents and a tablet, on a warm beige surface (#FAF6F1). In the lower two-thirds, upper third empty beige. Background fills entire image. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/installation/installateur-rge/demarche-devis.jpg" "3:4"
log_progress

gen "A friendly female advisor on a phone call at a modern Scandinavian desk, computer screen blurred in background, on a matte black surface (#000000). In the lower two-thirds, upper third empty black. Background fills entire image. $FRENCH 3:4 portrait. $STYLE" \
  "$PUBLIC/installation/installateur-rge/demarche-accompagnement.jpg" "3:4"
log_progress

gen "A wide panoramic view of a Scandinavian living room, camera facing the wall straight-on. The back wall is warm beige (#FAF6F1). In the lower two-thirds, a family on a large sofa centered, a pellet stove with visible orange flame. Upper third shows only the beige wall. Light oak parquet, white baseboard. $FRENCH 16:9 landscape. $STYLE" \
  "$PUBLIC/installation/installateur-rge/cta-bg.jpg" "16:9" "2K"
log_progress

echo ""
echo "════════════════════════════════════════════"
echo "✅ All $total_images images generated!"
echo "════════════════════════════════════════════"
