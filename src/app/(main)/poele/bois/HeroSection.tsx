import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";
import { Eyebrow } from "@/components/ui/eyebrow";

export function HeroSection() {
  return (
    <HeroSectionBase
      eyebrow={
        <Eyebrow variant="rating" rating={4.8} reviewCount={500} colorMode="dark" />
      }
      title="Poêle à bois : chauffez votre maison avec une énergie naturelle"
      subtitle="Le bois est l'énergie de chauffage la moins chère de France. Installez un poêle à bois performant et réduisez vos factures tout en profitant d'une chaleur agréable."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      gradientColor="black"
      // @IMAGE hero-poster.jpg
      // CONTEXT: Hero section for a wood stove SEO page. Black wall, cast-iron stove with birch logs.
      // PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty matte black wall with nothing on it — just a clean bare dark surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a contemporary cast-iron wood stove with visible dancing orange flames behind the glass door and a black flue pipe going straight up from the top, a neat stack of split birch logs beside it on a black metal log holder. The stove is surrounded by breathing room on both sides — it does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. Photorealistic, editorial interior photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.
      posterSrc="/poele/bois/hero-poster.jpg"
      posterMobileSrc="/poele/bois/hero-poster-mobile.jpg"
    />
  );
}
