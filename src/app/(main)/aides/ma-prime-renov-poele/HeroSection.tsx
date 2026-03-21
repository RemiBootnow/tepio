import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg (16:9, 2K)
//   CONTEXT: Hero section for the MaPrimeRénov' poêle SEO page. Beige wall, woman sitting by a pellet stove looking at her phone.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty warm beige wall (similar to #FAF6F1) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (a compact vertical zone around 65–85% from the left edge), a young woman in a cozy cream knit sweater sitting on the floor beside a modern matte-black pellet stove with a visible warm orange flame behind the glass door and a black flue pipe going straight up. She holds a smartphone but the screen faces away from the camera, not visible. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/aides/ma-prime-renov-poele/hero-poster.jpg"
      posterMobileSrc="/aides/ma-prime-renov-poele/hero-poster-mobile.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="light" />
      }
      title="MaPrimeRénov' poêle : montants et conditions en 2026"
      subtitle="Profitez d'une aide de l'État allant jusqu'à 1 250 € pour l'installation de votre poêle à bois ou à granulés. Découvrez les conditions et estimez votre reste à charge."
      primaryButtonLabel="Estimer mon aide"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="light"
      gradientColor="beige"
    />
  );
}
