import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg (16:9, 2K)
//   CONTEXT: Hero section for the general stove pricing page. BLACK wall, modern stove showroom display.
//   PROMPT: A minimalist modern stove showroom, camera facing the wall straight-on at low height. The left 60% of the frame is a clean matte black wall with nothing on it — just a bare dark surface seen head-on. In the center-right area of the frame (a compact vertical zone around 65–85% from the left edge), a modern cylindrical pellet stove with a warm amber flame visible through its glass door, standing naturally on the polished concrete floor. A second stove is partially visible further right. Light oak parquet floor with a subtle matte finish. The wall extends beyond the left edge and top of the frame — no ceiling visible, no window on the left. Soft natural light enters from a large window on the far right. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/prix/hero-poster.jpg"
      posterMobileSrc="/prix/hero-poster-mobile.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="dark" />
      }
      title="Prix d'un poêle : ce qui influence le coût de votre projet"
      subtitle="Le prix dépend du modèle, de la puissance et de la complexité d'installation. Découvrez les facteurs clés et les aides disponibles pour financer votre poêle."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      gradientColor="black"
      colorMode="dark"
    />
  );
}
