import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

/* @IMAGE type-acier.jpg
   CONTEXT: Carousel card showing an entry-level steel wood stove. Part of a 4-card series on stove types.
   PROMPT: Close-up of a modern minimalist matte black steel wood stove with visible orange flame behind tempered glass door, simple cylindrical design, set against a white wall, warm ambient light, product photography, 4:3 aspect ratio */

/* @IMAGE type-fonte.jpg
   CONTEXT: Carousel card showing a mid-range cast iron wood stove. Part of a 4-card series on stove types.
   PROMPT: A traditional cast iron wood stove with ornate details and glass door showing burning logs, dark anthracite finish, placed in a cozy living room with exposed brick wall, warm evening light, product photography, 4:3 aspect ratio */

/* @IMAGE type-pierre-ollaire.jpg
   CONTEXT: Carousel card showing a high-end soapstone wood stove. Part of a 4-card series on stove types.
   PROMPT: A premium tall soapstone wood stove with natural grey stone finish and large glass door showing bright flames, set in a modern Scandinavian-style living room, natural daylight, product photography, 4:3 aspect ratio */

/* @IMAGE type-insert.jpg
   CONTEXT: Carousel card showing a fireplace insert. Part of a 4-card series on stove types.
   PROMPT: A modern wood-burning fireplace insert built into a clean white mantel surround, large panoramic glass front with crackling fire visible, contemporary living room setting, soft warm lighting, product photography, 4:3 aspect ratio */

export function StoveTypesSection() {
  return (
    <CenterCarouselSection
      title="Quel type de poêle à bois choisir ?"
      subtitle="Chaque type de poêle a ses avantages en termes de prix, de performance et de design. Trouvez celui qui correspond à votre projet."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    >
      <FeatureCardImage
        imageSrc="/prix/poele-bois/type-acier.jpg"
        imageAlt="Poêle à bois en acier"
        title="Acier : 500 à 1 500 €"
      />
      <FeatureCardImage
        imageSrc="/prix/poele-bois/type-fonte.jpg"
        imageAlt="Poêle à bois en fonte"
        title="Fonte : 1 500 à 3 500 €"
      />
      <FeatureCardImage
        imageSrc="/prix/poele-bois/type-pierre-ollaire.jpg"
        imageAlt="Poêle à bois en pierre ollaire"
        title="Pierre ollaire : 3 000 à 7 000 €"
      />
      <FeatureCardImage
        imageSrc="/prix/poele-bois/type-insert.jpg"
        imageAlt="Insert de cheminée à bois"
        title="Insert : 1 000 à 5 000 €"
      />
    </CenterCarouselSection>
  );
}
