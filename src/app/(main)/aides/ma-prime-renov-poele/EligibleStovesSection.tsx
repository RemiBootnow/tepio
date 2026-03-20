import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

export function EligibleStovesSection() {
  return (
    <CenterCarouselSection
      title="Quels poêles sont éligibles ?"
      subtitle="MaPrimeRénov' couvre les poêles à bois et à granulés labellisés Flamme Verte 7 étoiles ou équivalent, avec un rendement minimum de 75 %."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
    >
      {/* @IMAGE poele-granules.jpg
          CONTEXT: Carousel card showing a pellet stove eligible for MaPrimeRénov. Part of a 3-card series.
          PROMPT: Close-up of a modern cylindrical pellet stove with visible orange flame behind glass door, minimalist white wall behind, warm ambient light, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/ma-prime-renov-poele/poele-granules.jpg"
        imageAlt="Poêle à granulés éligible MaPrimeRénov'"
        title="Poêle à granulés (pellets)"
      />
      {/* @IMAGE poele-buches.jpg
          CONTEXT: Carousel card showing a log stove eligible for MaPrimeRénov. Part of a 3-card series.
          PROMPT: A freestanding modern log-burning stove with visible flame in a rustic-modern French living room, stone accent wall behind, warm evening light, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/ma-prime-renov-poele/poele-buches.jpg"
        imageAlt="Poêle à bûches éligible MaPrimeRénov'"
        title="Poêle à bûches haute performance"
      />
      {/* @IMAGE insert-cheminee.jpg
          CONTEXT: Carousel card showing a fireplace insert eligible for MaPrimeRénov. Part of a 3-card series.
          PROMPT: A built-in fireplace insert with clean modern lines and visible flame, set in a contemporary mantel, soft natural light from a nearby window, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/ma-prime-renov-poele/insert-cheminee.jpg"
        imageAlt="Insert de cheminée éligible MaPrimeRénov'"
        title="Insert et foyer fermé"
      />
    </CenterCarouselSection>
  );
}
