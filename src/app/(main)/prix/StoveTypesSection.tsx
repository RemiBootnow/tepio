import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

export function StoveTypesSection() {
  return (
    <CenterCarouselSection
      title="Quel type de poêle choisir selon votre budget ?"
      subtitle="Chaque type de poêle offre un rapport qualité-prix différent. Comparez les options pour trouver celle qui correspond à votre logement et à votre budget."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    >
      {/* @IMAGE poele-granules.jpg
          CONTEXT: Carousel card showing a pellet stove. Part of a 4-card series comparing stove types by price.
          PROMPT: Close-up of a modern cylindrical pellet stove with visible orange flame behind glass door, minimalist white wall behind, warm ambient light from the fire, product photography style, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/prix/poele-granules.jpg"
        imageAlt="Poêle à granulés moderne"
        title="Poêle à granulés : 3 000 – 7 000 €"
      />
      {/* @IMAGE poele-bois.jpg
          CONTEXT: Carousel card showing a wood stove. Part of a 4-card series comparing stove types by price.
          PROMPT: A freestanding cast-iron wood stove with visible dancing flames, rustic-modern living room with stone accent wall, warm evening light, product photography style, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/prix/poele-bois.jpg"
        imageAlt="Poêle à bois traditionnel"
        title="Poêle à bois : 2 500 – 6 000 €"
      />
      {/* @IMAGE poele-mixte.jpg
          CONTEXT: Carousel card showing a mixed stove. Part of a 4-card series comparing stove types by price.
          PROMPT: A modern dual-fuel wood and pellet stove in a contemporary French living room, sleek dark metal design with glass front showing flames, light wood floor, natural daylight, product photography style, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/prix/poele-mixte.jpg"
        imageAlt="Poêle mixte bois et granulés"
        title="Poêle mixte : 4 000 – 8 000 €"
      />
      {/* @IMAGE insert-cheminee.jpg
          CONTEXT: Carousel card showing a fireplace insert. Part of a 4-card series comparing stove types by price.
          PROMPT: A built-in fireplace insert with visible warm flames set into a contemporary white mantel surround, clean minimalist lines, soft natural light from nearby window, product photography style, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/prix/insert-cheminee.jpg"
        imageAlt="Insert de cheminée encastré"
        title="Insert cheminée : 2 000 – 5 500 €"
      />
    </CenterCarouselSection>
  );
}
