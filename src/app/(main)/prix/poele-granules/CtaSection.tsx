import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

// @IMAGE cta-bg.jpg (16:9, 2K)
//   CONTEXT: Final CTA section for pellet stove pricing page. Interior scene, GREEN wall (matches gradientColor="green"), people centered in lower 2/3.
//   PROMPT: A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is deep dark green (similar to #01322D). In the lower two-thirds of the frame, a young couple sitting on a light linen sofa, centered horizontally, enjoying the warmth of a modern pellet stove with a visible amber flame. The stove has a flue pipe going up. They face the camera but do not look into the lens. The upper third shows only the dark green wall — empty, no decoration. Light oak parquet floor with a white baseboard. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light from the right. Photorealistic.

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/prix/poele-granules/cta-bg.jpg"
      backgroundAlt="Salon chaleureux avec un poêle à granulés"
      gradientColor="green"
      title="Estimez le prix de votre poêle à granulés"
      subtitle="Recevez une estimation personnalisée et découvrez les aides auxquelles vous avez droit en 2 minutes."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
    />
  );
}
