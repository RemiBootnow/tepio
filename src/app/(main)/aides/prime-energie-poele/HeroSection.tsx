import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg (16:9, 2K)
//   CONTEXT: Hero section for the prime énergie (CEE) poêle SEO page. Black wall, couple warming hands by a modern pellet stove.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty matte black wall (#000000) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (a compact vertical zone around 65–85% from the left edge), a couple in their 30s standing close together, warming their hands near a modern matte-black cylindrical pellet stove with a visible warm orange flame behind the glass door and a black flue pipe going straight up. They look relaxed and happy. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/aides/prime-energie-poele/hero-poster.jpg"
      posterMobileSrc="/aides/prime-energie-poele/hero-poster-mobile.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="dark" />
      }
      title="Prime énergie (CEE) : une aide pour votre poêle à bois ou granulés"
      subtitle="La prime énergie, financée par les fournisseurs d'énergie, vous aide à réduire le coût de votre poêle. Environ 250 € d'aide, versée rapidement et cumulable avec les autres dispositifs."
      primaryButtonLabel="Estimer mon aide"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
      gradientColor="black"
    />
  );
}
