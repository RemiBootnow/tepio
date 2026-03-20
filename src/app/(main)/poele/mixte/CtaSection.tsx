import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

// @IMAGE cta-bg.jpg (16:9, 2K)
//   CONTEXT: CTA for hybrid stove page. BLACK wall (#000000). Subject in lower 2/3.
//   PROMPT: A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is pure black (#000000). In the lower two-thirds of the frame, a young couple sitting on a grey linen sofa, centered horizontally, enjoying the warmth of a modern hybrid stove with a visible amber flame and a black flue pipe going up. A basket of logs sits beside the stove. They face the camera but do not look into the lens. The upper third shows only the black wall — empty, no decoration. Light oak parquet floor with a dark baseboard. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light from the right. Photorealistic.

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/poele/mixte/cta-bg.jpg"
      backgroundAlt="Couple dans un salon chauffé par un poêle mixte"
      gradientColor="black"
      title="Prêt à installer votre poêle mixte ?"
      subtitle="Estimez le coût de votre projet et découvrez les aides auxquelles vous avez droit en 2 minutes."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
    />
  );
}
