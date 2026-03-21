import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg (16:9, 2K)
//   CONTEXT: Hero section for the wood stove SEO page. Beige wall, classic cast-iron wood stove with visible flames and log pile.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty warm beige wall (similar to #FAF6F1) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (a compact vertical zone around 65–85% from the left edge), a classic cast-iron wood stove with visible bright orange flames behind the glass door and a black flue pipe going straight up, standing naturally on the floor. A small neat pile of split birch logs stacked beside the stove on the right. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/poele/bois/hero-poster.jpg"
      posterMobileSrc="/poele/bois/hero-poster-mobile.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="light" />
      }
      title="Poêle à bois : le charme du feu, la performance en plus"
      subtitle="Le poêle à bois offre une flamme authentique et une chaleur enveloppante. Le combustible le moins cher du marché, avec des aides pour réduire votre investissement."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      gradientColor="beige"
      colorMode="light"
    />
  );
}
