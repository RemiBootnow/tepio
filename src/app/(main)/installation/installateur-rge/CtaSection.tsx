import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

// @IMAGE cta-bg.jpg (16:9, 2K)
//   CONTEXT: Final CTA section for RGE installer page. Interior scene, WHITE wall (matches gradientColor="white"), artisan and homeowner centered in lower 2/3.
//   PROMPT: A wide panoramic view of a bright Scandinavian living room, camera facing the wall straight-on. The back wall is clean white (#FFFFFF). In the lower two-thirds of the frame, a professional artisan in navy blue work clothes standing beside a homeowner, both centered horizontally, next to a freshly installed modern pellet stove with a visible amber flame and a flue pipe going up. They face the camera. The upper third shows only the white wall — empty, no decoration. Light oak parquet floor with a white baseboard. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light from the right. Photorealistic.

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/installation/installateur-rge/cta-bg.jpg"
      backgroundAlt="Artisan RGE et client devant un poêle installé"
      gradientColor="green"
      title="Trouvez votre installateur RGE"
      subtitle="Décrivez votre projet et recevez une mise en relation avec un artisan certifié dans votre région."
      primaryButtonLabel="Trouver un installateur"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
    />
  );
}
