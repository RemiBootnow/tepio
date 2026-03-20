import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg (16:9, 2K)
//   CONTEXT: Hero section for the wood stove pricing page. BEIGE wall, classic cast-iron wood stove.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty warm beige wall (similar to #FAF6F1) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (a compact vertical zone around 65–85% from the left edge), a classic cast-iron wood-burning stove with a visible warm orange flame behind the glass door and a black flue pipe going straight up, standing naturally on the floor. A small stack of split birch logs beside the stove. Light oak parquet floor running across the entire image with a white baseboard. The wall extends beyond the left edge and top of the frame — no ceiling visible. A tall window on the far right lets in soft natural light. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/prix/poele-bois/hero-poster.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="light" />
      }
      title="Prix d'un poêle à bois : coût, installation et aides"
      subtitle="Le prix d'un poêle à bois dépend du modèle, du matériau et de la complexité d'installation. Découvrez les critères qui influencent le coût et les aides pour financer votre projet."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      gradientColor="beige"
      colorMode="light"
    />
  );
}
