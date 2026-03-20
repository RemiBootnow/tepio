import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

// @IMAGE cta-bg.jpg (16:9, 2K)
//   CONTEXT: Final CTA section. Interior scene, beige wall (matches gradientColor="beige"), couple by a wood stove, centered.
//   PROMPT: A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is warm beige (similar to #FAF6F1). In the lower two-thirds of the frame, a young couple sitting on a dark linen sofa, centered horizontally, enjoying the warmth of a classic cast-iron wood stove with visible bright orange flames. The stove has a flue pipe going up. They face the camera but do not look into the lens. The upper third shows only the beige wall — empty, no decoration. Light oak parquet floor with a white baseboard. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light from the right. Photorealistic.

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/poele/bois/cta-bg.jpg"
      backgroundAlt="Couple dans un salon chauffé par un poêle à bois"
      gradientColor="beige"
      title="Prêt à installer votre poêle à bois ?"
      subtitle="Estimez le coût de votre projet et découvrez les aides auxquelles vous avez droit en 2 minutes."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="light"
    />
  );
}
