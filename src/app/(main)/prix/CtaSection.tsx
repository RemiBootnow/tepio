import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

// @IMAGE cta-bg.jpg (16:9, 2K)
//   CONTEXT: Final CTA section for pricing page. Interior scene, BLACK wall (matches gradientColor="black"), people centered in lower 2/3.
//   PROMPT: A wide panoramic view of a cozy modern living room, camera facing the wall straight-on. The back wall is matte black. In the lower two-thirds of the frame, a young couple sitting on a light grey sofa, centered horizontally, enjoying the warmth of a modern pellet stove with a visible amber flame. The stove stands to their right with a flue pipe going up. They face the camera but do not look into the lens. The upper third shows only the black wall — empty, no decoration. Light oak parquet floor with a dark baseboard. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light from the right. Photorealistic.

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/prix/cta-bg.jpg"
      backgroundAlt="Salon chaleureux avec un poêle moderne"
      gradientColor="black"
      title="Estimez le prix de votre poêle"
      subtitle="Recevez une estimation personnalisée et découvrez les aides auxquelles vous avez droit en 2 minutes."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
    />
  );
}
