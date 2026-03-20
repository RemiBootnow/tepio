import { HeroSection as HeroSectionComponent } from "@/components/sections/hero-section";
import { Eyebrow } from "@/components/ui/eyebrow";

export function HeroSection() {
  return (
    <HeroSectionComponent
      eyebrow={<Eyebrow variant="rating" colorMode="light" rating={4.8} reviewCount={237} />}
      title="Votre poêle à pellets installé par des experts certifiés"
      subtitle="Chauffez votre intérieur avec un combustible naturel et économique. Estimez votre projet en 2 minutes et découvrez les aides disponibles."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="light"
      gradientColor="beige"
      /* @IMAGE hero-poster.jpg
         CONTEXT: Hero section for a pellet stove SEO page. Beige wall, pellet stove with wicker basket.
         PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty warm beige wall (similar to #FAF6F1) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a modern cylindrical matte-black pellet stove with a visible warm orange flame behind the glass door and a black flue pipe going straight up from the top, a small wicker basket of wood pellets beside it on the floor. The stove is surrounded by breathing room on both sides — it does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. Soft natural light from both sides. The room is spacious and uncluttered. Photorealistic, editorial interior photography, 16:9 landscape format, shallow depth of field, no diagonal perspective. */
      posterSrc="/poele/pellets/hero-poster.jpg"
      posterMobileSrc="/poele/pellets/hero-poster-mobile.jpg"
    />
  );
}
