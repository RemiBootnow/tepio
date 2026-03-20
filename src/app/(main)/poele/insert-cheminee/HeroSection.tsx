import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg (16:9, 2K)
//   CONTEXT: Hero section for the fireplace insert page. Dark green wall, modern fireplace insert with visible flames.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty warm beige wall (#FAF6F1) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (a compact vertical zone around 65–85% from the left edge), a modern fireplace insert with a wide rectangular glass front showing bright orange flames, built into the wall at a comfortable viewing height. The insert has a clean black metal frame flush with the wall. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/poele/insert-cheminee/hero-poster.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="dark" />
      }
      title="Insert cheminée : modernisez votre foyer ouvert"
      subtitle="Transformez votre cheminée ouverte en un chauffage performant. Un rendement multiplié par 5, des aides de l'État et une installation par un artisan RGE."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      gradientColor="green"
      colorMode="dark"
    />
  );
}
