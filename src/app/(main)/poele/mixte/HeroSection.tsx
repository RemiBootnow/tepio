import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg
//   CONTEXT: Hero section for a mixed wood and pellet stove SEO page. White wall, dual-fuel stove with logs and pellet bag.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty pure white wall with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a modern dual-fuel mixed stove (wood and pellets) with a visible warm orange flame behind the glass door and a black flue pipe going straight up from the top, a few split logs and a small bag of wood pellets arranged neatly beside it on the floor. The stove is surrounded by breathing room on both sides — it does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. Soft natural light from both sides. The room is spacious and uncluttered. Photorealistic, editorial interior photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/poele/mixte/hero-poster.jpg"
      posterMobileSrc="/poele/mixte/hero-poster-mobile.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.8} reviewCount={237} colorMode="light" />
      }
      title="Poele mixte bois et granules : le chauffage polyvalent pour votre maison"
      subtitle="Un seul appareil, deux combustibles. Profitez de la flamme chaleureuse du bois et du confort automatise des granules, selon vos envies et la saison."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="light"
      gradientColor="white"
    />
  );
}
