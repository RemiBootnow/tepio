import { HeroSection as HeroSectionComponent } from "@/components/sections/hero-section";
import { Eyebrow } from "@/components/ui/eyebrow";

// @IMAGE hero-poster.jpg
//   CONTEXT: Hero section for pellet stove pricing page. Beige wall, sleek pellet stove.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty warm beige wall (similar to #FAF6F1) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a sleek modern cylindrical matte-black pellet stove with a visible warm orange flame behind the glass door and a black flue pipe going straight up from the top of the stove, standing naturally on the floor. The stove is surrounded by breathing room on both sides — it does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. Soft natural light from both sides. The room is spacious and uncluttered. Photorealistic, editorial interior photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.

export function HeroSection() {
  return (
    <HeroSectionComponent
      eyebrow={
        <Eyebrow variant="rating" rating={4.8} reviewCount={350} colorMode="light" />
      }
      title="Prix d'un poêle à granulés : tarifs, installation et aides en 2026"
      subtitle="De 1 500 € à 6 000 € selon le modèle, pose comprise entre 500 € et 1 500 €. Découvrez les prix réels et les aides pour financer votre projet."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      colorMode="light"
      gradientColor="beige"
      posterSrc="/prix/poele-granules/hero-poster.jpg"
      posterMobileSrc="/prix/poele-granules/hero-poster-mobile.jpg"
    />
  );
}
