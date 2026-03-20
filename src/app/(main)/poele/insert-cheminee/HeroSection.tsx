import { HeroSection as HeroSectionComponent } from "@/components/sections/hero-section";
import { Eyebrow } from "@/components/ui/eyebrow";

// @IMAGE hero-poster.jpg
//   CONTEXT: Hero section for an insert cheminee SEO page. Dark green wall, modern fireplace insert built into concrete surround.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty deep dark green wall (similar to #01322D) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a modern fireplace insert built into the wall with visible bright orange flames behind tempered glass, clean stone or concrete surround flush with the wall surface. The insert is surrounded by breathing room on both sides — it does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. Photorealistic, editorial interior photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.

export function HeroSection() {
  return (
    <HeroSectionComponent
      eyebrow={<Eyebrow variant="rating" colorMode="dark" rating={4.8} reviewCount={237} />}
      title="Installez un insert cheminée et chauffez vraiment votre maison"
      subtitle="Transformez votre cheminée ouverte en un chauffage performant. Jusqu'à 5 fois plus de rendement, moins de bois consommé, et des aides financières pour alléger la facture."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      posterSrc="/poele/insert-cheminee/hero-poster.jpg"
      posterMobileSrc="/poele/insert-cheminee/hero-poster-mobile.jpg"
    />
  );
}
