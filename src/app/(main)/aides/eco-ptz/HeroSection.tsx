import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";
import { Eyebrow } from "@/components/ui/eyebrow";

// @IMAGE hero-poster.jpg
//   CONTEXT: Hero section for eco-PTZ educational page. White wall, woman consulting smartphone about financing.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty pure white wall with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a young woman in casual chic clothes sitting on a modern light grey armchair, looking at her smartphone with a relaxed expression, a small side table with a cup of tea beside her. She is surrounded by breathing room on both sides — she does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. Soft natural light from both sides. The room is spacious and uncluttered. Photorealistic, editorial lifestyle photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.

export function HeroSection() {
  return (
    <HeroSectionBase
      eyebrow={<Eyebrow variant="rating" rating={4.8} reviewCount={350} colorMode="light" />}
      title="Éco-PTZ : financez vos travaux de rénovation à taux zéro"
      subtitle="L'éco-prêt à taux zéro vous permet d'emprunter jusqu'à 50 000 € sans intérêts pour vos travaux de rénovation énergétique. Découvrez si vous êtes éligible."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
      secondaryButtonLabel="Comment ça marche ?"
      secondaryButtonLink="#demarches"
      colorMode="light"
      gradientColor="white"
      posterSrc="/aides/eco-ptz/hero-poster.jpg"
      posterMobileSrc="/aides/eco-ptz/hero-poster-mobile.jpg"
    />
  );
}
