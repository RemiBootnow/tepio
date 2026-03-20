import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";
import { Eyebrow } from "@/components/ui/eyebrow";

// @IMAGE hero-poster.jpg
//   CONTEXT: Hero section for wood stove pricing page. Dark green wall, cast-iron wood stove with logs.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty deep dark green wall (similar to #01322D) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a contemporary cast-iron wood stove with visible dancing orange flames behind the glass door and a black flue pipe going straight up from the top, a neat stack of split birch logs beside it on a black metal log holder. The stove is surrounded by breathing room on both sides — it does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. Photorealistic, editorial interior photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.

export function HeroSection() {
  return (
    <HeroSectionBase
      eyebrow={
        <Eyebrow variant="rating" rating={4.8} reviewCount={342} colorMode="dark" />
      }
      title="Prix d'un poêle à bois : coûts, installation et aides en 2026"
      subtitle="De 500 à 7 000 € selon le modèle, plus 1 000 à 3 000 € de pose. Découvrez les tarifs détaillés et les aides pour financer votre projet."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      colorMode="dark"
      posterSrc="/prix/poele-bois/hero-poster.jpg"
      posterMobileSrc="/prix/poele-bois/hero-poster-mobile.jpg"
    />
  );
}
