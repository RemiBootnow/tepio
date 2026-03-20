import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";
import { Eyebrow } from "@/components/ui/eyebrow";

// @IMAGE hero-poster.jpg
//   CONTEXT: Hero section for CEE prime énergie stove page. Dark green wall, man reviewing paper documents.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty deep dark green wall (similar to #01322D) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a middle-aged man in a casual sweater standing near a small console table, reviewing a paper folder of official energy documents, looking focused and engaged. He is surrounded by breathing room on both sides — he does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. Photorealistic, editorial lifestyle photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.

export function HeroSection() {
  return (
    <HeroSectionBase
      eyebrow={<Eyebrow variant="rating" rating={4.8} reviewCount={437} colorMode="dark" />}
      title="Prime énergie CEE pour votre poêle à bois ou à granulés"
      subtitle="Les certificats d'économies d'énergie financent une partie de votre installation. Découvrez les montants, conditions et démarches pour en bénéficier."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      secondaryButtonLabel="Comment ça marche ?"
      secondaryButtonLink="#fonctionnement"
      colorMode="dark"
      posterSrc="/aides/prime-energie-poele/hero-poster.jpg"
      posterMobileSrc="/aides/prime-energie-poele/hero-poster-mobile.jpg"
    />
  );
}
