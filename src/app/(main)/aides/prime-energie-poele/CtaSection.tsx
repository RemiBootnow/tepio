import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

// @IMAGE cta-bg.jpg (16:9, 2K)
//   CONTEXT: Final CTA section for prime énergie page. Interior scene, black wall, couple by a pellet stove, centered.
//   PROMPT: A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is matte black (#000000). In the lower two-thirds of the frame, a couple in their 30s sitting on a dark charcoal sofa, centered horizontally, enjoying the warmth of a modern pellet stove with a visible amber flame. The stove has a flue pipe going up. They face the camera but do not look into the lens. The upper third shows only the black wall — empty, no decoration. Light oak parquet floor with a white baseboard. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light from the right. Photorealistic.

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/aides/prime-energie-poele/cta-bg.jpg"
      backgroundAlt="Couple dans un salon avec un poêle à granulés"
      gradientColor="black"
      title="Estimez votre prime énergie"
      subtitle="Découvrez en 2 minutes le montant de votre prime CEE et les autres aides cumulables pour votre projet de poêle."
      primaryButtonLabel="Estimer mon aide"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
    />
  );
}
