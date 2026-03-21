import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg (16:9, 2K)
//   CONTEXT: Hero section for the hybrid stove page. BLACK wall (#000000), modern hybrid stove showing both log fire and pellet hopper.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty pure black wall (#000000) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (a compact vertical zone around 65–85% from the left edge), a modern hybrid stove with a visible warm orange flame behind the glass door and a black flue pipe going straight up from the top, standing naturally on the floor. A small basket of split logs and a bag of wood pellets sit beside it on the floor. Light oak parquet floor running across the entire image with a dark baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/poele/mixte/hero-poster.jpg"
      posterMobileSrc="/poele/mixte/hero-poster-mobile.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="dark" />
      }
      title="Poêle mixte : la polyvalence bois et granulés en un seul appareil"
      subtitle="Brûlez des bûches ou des granulés selon vos envies. Un appareil deux-en-un performant, éligible aux aides de l'État, installé par un artisan RGE."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      gradientColor="black"
      colorMode="dark"
    />
  );
}
