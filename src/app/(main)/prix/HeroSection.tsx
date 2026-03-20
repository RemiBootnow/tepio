import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg
//   CONTEXT: Hero section for stove pricing overview page. Black wall, modern pellet stove.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty matte black wall with nothing on it — just a clean bare dark surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a modern freestanding pellet stove in matte anthracite grey with a visible warm orange flame behind the glass door and a black flue pipe going straight up from the top of the stove, standing naturally on the floor. The stove is surrounded by breathing room on both sides — it does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. Photorealistic, editorial interior photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/prix/hero-poster.jpg"
      posterMobileSrc="/prix/hero-poster-mobile.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="dark" />
      }
      title="Prix d'un poêle : tarifs, installation et aides en 2026"
      subtitle="Poêle à granulés, à bois, mixte ou insert : découvrez combien coûte votre projet et les aides qui réduisent la facture."
      colorMode="dark"
      gradientColor="black"
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
    />
  );
}
