import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg (16:9, 2K)
//   CONTEXT: Hero section for the éco-PTZ poêle SEO page. Green wall, man standing near a wood stove holding a coffee mug.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty deep dark green wall (similar to #01322D) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (a compact vertical zone around 65–85% from the left edge), a man in his 30s wearing a relaxed linen shirt standing next to a modern matte-black wood stove with a visible warm orange flame behind the glass door and a black flue pipe going straight up. He holds a ceramic coffee mug in one hand and looks relaxed. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. No visible text, no documents, no writing of any kind. 16:9 landscape format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/aides/eco-ptz/hero-poster.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="dark" />
      }
      title="Éco-PTZ : financez votre poêle sans intérêts"
      subtitle="L'éco-prêt à taux zéro vous permet de financer l'installation de votre poêle sans payer d'intérêts. Jusqu'à 50 000 € remboursables sur 20 ans."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
      gradientColor="green"
    />
  );
}
