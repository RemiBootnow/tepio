import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

// @IMAGE cta-bg.jpg (16:9, 2K)
//   CONTEXT: Final CTA section for MaPrimeRénov' poêle page. Interior scene, beige wall, person by a pellet stove, centered.
//   PROMPT: A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is warm beige (similar to #FAF6F1). In the lower two-thirds of the frame, a young woman sitting on a light linen armchair, centered horizontally, enjoying the warmth of a modern pellet stove with a visible amber flame. The stove has a flue pipe going up. She faces the camera but does not look into the lens, holding a mug of tea. The upper third shows only the beige wall — empty, no decoration. Light oak parquet floor with a white baseboard. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light from the right. Photorealistic.

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/aides/ma-prime-renov-poele/cta-bg.jpg"
      backgroundAlt="Salon chaleureux avec un poêle à granulés"
      gradientColor="beige"
      title="Estimez votre aide MaPrimeRénov'"
      subtitle="Découvrez en 2 minutes le montant de votre aide et votre reste à charge pour l'installation d'un poêle."
      primaryButtonLabel="Estimer mon aide"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="light"
    />
  );
}
