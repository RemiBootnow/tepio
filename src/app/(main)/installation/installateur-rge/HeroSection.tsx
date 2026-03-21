import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg (16:9, 2K)
//   CONTEXT: Hero section for the RGE installer page. WHITE wall, artisan beside a stove.
//   PROMPT: A minimalist modern interior, camera facing the wall straight-on at low height. The left 60% of the frame is a clean white wall (#FFFFFF) with nothing on it — just a bare surface seen head-on. In the center-right area of the frame (a compact vertical zone around 65–85% from the left edge), a professional artisan in clean navy blue work clothes, standing confidently beside a freshly installed modern pellet stove with a flue pipe going straight up. He holds a tool bag at his side. Light oak parquet floor with a white baseboard. The wall extends beyond the left edge and top of the frame — no ceiling visible. Soft natural light from a window on the far right. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/installation/installateur-rge/hero-poster.jpg"
      posterMobileSrc="/installation/installateur-rge/hero-poster-mobile.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="light" />
      }
      title="Installateur RGE poêle : trouvez un artisan certifié près de chez vous"
      subtitle="Un installateur RGE (Reconnu Garant de l'Environnement) est obligatoire pour bénéficier des aides de l'État. Nous vous mettons en relation avec des artisans certifiés dans votre région."
      primaryButtonLabel="Trouver un installateur"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      gradientColor="white"
      colorMode="light"
    />
  );
}
