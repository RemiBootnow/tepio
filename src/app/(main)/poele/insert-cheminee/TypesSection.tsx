import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

// @IMAGE type-insert-bois.jpg
//   CONTEXT: Carousel card showing a classic wood-burning fireplace insert. Part of a series of 4 cards about insert types.
//   PROMPT: Close-up of a modern wood-burning fireplace insert with large glass door showing burning oak logs with bright orange flames, dark cast iron frame, minimalist stone surround, warm ambient light, product photography, 4:3 aspect ratio

// @IMAGE type-insert-granules.jpg
//   CONTEXT: Carousel card showing a pellet fireplace insert. Cohesive series with the other type cards.
//   PROMPT: A sleek pellet fireplace insert with a modern steel frame, small visible pellet flame behind glass, contemporary grey stone surround, clean minimal interior background, warm tones, product photography, 4:3 aspect ratio

// @IMAGE type-insert-mixte.jpg
//   CONTEXT: Carousel card showing a hybrid insert (wood + pellet). Cohesive series with the other type cards.
//   PROMPT: A hybrid wood and pellet fireplace insert in a modern living room setting, dual fuel system visible, contemporary dark metal frame with glass door showing gentle flames, light wood mantel above, warm natural light, product photography, 4:3 aspect ratio

// @IMAGE type-insert-double-face.jpg
//   CONTEXT: Carousel card showing a double-sided fireplace insert. Cohesive series with the other type cards.
//   PROMPT: A double-sided see-through fireplace insert installed in a room divider wall, visible flames from both sides, modern minimalist interior with light walls, warm evening ambiance, architectural interior photography, 4:3 aspect ratio

export function TypesSection() {
  return (
    <CenterCarouselSection
      title="Quel type d'insert choisir ?"
      subtitle="Bois ou granulés, chaque technologie a ses atouts. Trouvez celle qui correspond à votre usage et à votre budget."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    >
      <FeatureCardImage
        imageSrc="/poele/insert-cheminee/type-insert-bois.jpg"
        imageAlt="Insert cheminée à bûches"
        title="Insert à bûches : le charme du feu de bois"
      />
      <FeatureCardImage
        imageSrc="/poele/insert-cheminee/type-insert-granules.jpg"
        imageAlt="Insert cheminée à granulés"
        title="Insert à granulés : confort automatisé"
      />
      <FeatureCardImage
        imageSrc="/poele/insert-cheminee/type-insert-mixte.jpg"
        imageAlt="Insert cheminée mixte bois et granulés"
        title="Insert mixte : la polyvalence"
      />
      <FeatureCardImage
        imageSrc="/poele/insert-cheminee/type-insert-double-face.jpg"
        imageAlt="Insert cheminée double face"
        title="Insert double face : deux pièces chauffées"
      />
    </CenterCarouselSection>
  );
}
