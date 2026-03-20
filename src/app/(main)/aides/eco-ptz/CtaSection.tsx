import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

// @IMAGE cta-bg.jpg (16:9, 2K)
//   CONTEXT: Final CTA section for éco-PTZ page. Interior scene, green wall, man by a wood stove, centered.
//   PROMPT: A wide panoramic view of a cozy Scandinavian living room, camera facing the wall straight-on. The back wall is deep dark green (similar to #01322D). In the lower two-thirds of the frame, a man in his 30s sitting on a leather armchair, centered horizontally, enjoying the warmth of a modern wood stove with a visible amber flame. The stove has a flue pipe going up. He faces the camera but does not look into the lens, holding a book on his lap. The upper third shows only the dark green wall — empty, no decoration. Light oak parquet floor with a white baseboard. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light from the right. Photorealistic.

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/aides/eco-ptz/cta-bg.jpg"
      backgroundAlt="Salon avec un poêle à bois et une ambiance chaleureuse"
      gradientColor="green"
      title="Financez votre poêle à taux zéro"
      subtitle="Estimez le coût de votre projet et découvrez comment l'éco-PTZ peut financer votre installation sans intérêts."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
    />
  );
}
