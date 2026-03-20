import { HeroSection as HeroSectionComponent } from "@/components/sections/hero-section";
import { Eyebrow } from "@/components/ui/eyebrow";

// @IMAGE hero-poster.jpg
//   CONTEXT: Hero section for RGE installer page. Black wall, artisan in professional work clothes.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty matte black wall with nothing on it — just a clean bare dark surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a professional French artisan in clean navy blue work clothes and a tool belt, standing confidently near a freshly installed modern pellet stove with a black flue pipe, holding a clipboard, looking professional and trustworthy. He is surrounded by breathing room on both sides — he does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. A tall window on the far right lets in soft natural light from the right only. The room is spacious and uncluttered. Photorealistic, editorial lifestyle photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.

export function HeroSection() {
  return (
    <HeroSectionComponent
      eyebrow={<Eyebrow variant="rating" rating={4.8} reviewCount={412} colorMode="dark" />}
      title="Trouvez un installateur RGE pour votre poêle"
      subtitle="La certification RGE est indispensable pour bénéficier des aides à la rénovation énergétique. Nous vous mettons en relation avec des artisans qualifiés près de chez vous."
      primaryButtonLabel="Trouver un installateur"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
      gradientColor="black"
      posterSrc="/installation/installateur-rge/hero-poster.jpg"
      posterMobileSrc="/installation/installateur-rge/hero-poster-mobile.jpg"
    />
  );
}
