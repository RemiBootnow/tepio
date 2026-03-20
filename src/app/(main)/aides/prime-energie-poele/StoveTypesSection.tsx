import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

export function StoveTypesSection() {
  return (
    <CenterCarouselSection
      title="Quels poêles sont éligibles à la prime CEE ?"
      subtitle="Tous les poêles à bois et à granulés certifiés Flamme Verte 7 étoiles ou équivalent sont éligibles à la prime énergie."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
    >
      {/* @IMAGE stove-granules.jpg
          CONTEXT: Carousel card showing a pellet stove. Part of a 4-card series. Dark top area for white text.
          PROMPT: A modern matte-black pellet stove with visible orange flame behind glass door in a contemporary living room, dark upper portion of frame, warm ambient light, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/prime-energie-poele/stove-granules.jpg"
        imageAlt="Poêle à granulés moderne"
        title="Poêle à granulés (pellets)"
      />
      {/* @IMAGE stove-buches.jpg
          CONTEXT: Carousel card showing a log stove. Part of a 4-card series. Dark top area for white text.
          PROMPT: A classic cast-iron wood-burning log stove with roaring fire visible through the glass, rustic-modern living room with stone accent wall, dark tones at the top, warm firelight, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/prime-energie-poele/stove-buches.jpg"
        imageAlt="Poêle à bûches traditionnel"
        title="Poêle à bûches"
      />
      {/* @IMAGE stove-hybride.jpg
          CONTEXT: Carousel card showing a hybrid stove. Part of a 4-card series. Dark top area for white text.
          PROMPT: A sleek modern hybrid wood and pellet stove in a Scandinavian-style living room, dual fuel compartments visible, minimalist decor, dark upper area, warm soft lighting, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/prime-energie-poele/stove-hybride.jpg"
        imageAlt="Poêle hybride bois et granulés"
        title="Poêle hybride bois-granulés"
      />
      {/* @IMAGE stove-masse.jpg
          CONTEXT: Carousel card showing a mass stove (poele de masse). Part of a 4-card series. Dark top area for white text.
          PROMPT: A large thermal mass stove (poele de masse) made of soapstone in a spacious modern French home, tall cylindrical design, warm radiant glow, dark ceiling area, architectural interior photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/prime-energie-poele/stove-masse.jpg"
        imageAlt="Poêle de masse en pierre ollaire"
        title="Poêle de masse"
      />
    </CenterCarouselSection>
  );
}
