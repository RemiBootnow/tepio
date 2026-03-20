import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

export function TypesSection() {
  return (
    <CenterCarouselSection
      title="Quel type de poêle à bois choisir ?"
      subtitle="Chaque modele repond a des besoins differents. Decouvrez les principales familles de poeles a bois pour trouver celui qui correspond a votre interieur."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    >
      {/* @IMAGE type-classique.jpg
          CONTEXT: Carousel card showing a classic cast-iron wood stove. Part of a 4-card series on stove types.
          PROMPT: A traditional cast-iron wood stove with ornate details and visible orange flame behind glass door, set against a stone wall in a rustic French farmhouse, warm evening light, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/poele/bois/type-classique.jpg"
        imageAlt="Poele a bois classique en fonte"
        title="Poele classique en fonte"
      />
      {/* @IMAGE type-contemporain.jpg
          CONTEXT: Carousel card showing a modern contemporary wood stove. Same visual series.
          PROMPT: A sleek modern cylindrical steel wood stove with large panoramic glass door showing burning logs, minimalist white wall background, light oak floor, contemporary living room, warm ambient light, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/poele/bois/type-contemporain.jpg"
        imageAlt="Poele a bois contemporain en acier"
        title="Poele contemporain en acier"
      />
      {/* @IMAGE type-double-combustion.jpg
          CONTEXT: Carousel card showing a double combustion stove. Same visual series.
          PROMPT: A high-efficiency double combustion wood stove with tall vertical design, intense clean flame visible through large glass window, installed in a bright modern French apartment, natural daylight, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/poele/bois/type-double-combustion.jpg"
        imageAlt="Poele a bois a double combustion"
        title="Poele a double combustion"
      />
      {/* @IMAGE type-insert.jpg
          CONTEXT: Carousel card showing a fireplace insert. Same visual series.
          PROMPT: A modern wood stove insert built into an existing stone fireplace mantel, clean contemporary lines, bright flames behind glass, cozy French living room with bookshelves, warm tones, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/poele/bois/type-insert.jpg"
        imageAlt="Insert a bois dans une cheminee"
        title="Insert encastrable cheminee"
      />
    </CenterCarouselSection>
  );
}
