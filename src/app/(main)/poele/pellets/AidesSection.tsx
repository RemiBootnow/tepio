import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

// @IMAGE aide-maprime.jpg (3:4, 1K)
//   CONTEXT: Card image for MaPrimeRénov' aid. Solid green background, no documents.
//   PROMPT: A close-up of a small stack of euro coins and a miniature wooden house model on a deep dark green surface (similar to #01322D), photographed from slightly above. The subject is composed in the lower two-thirds of the frame, leaving the upper third as empty dark green background. The background color is continuous and fills the entire image — the objects rest naturally on it. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Photorealistic, editorial product photography, shallow depth of field, warm studio lighting, no text, no watermarks.

// @IMAGE aide-cee.jpg (3:4, 1K)
//   CONTEXT: Card image for CEE energy savings prime. Solid black background, no documents.
//   PROMPT: A close-up of a ceramic piggy bank next to a small pile of wood pellets on a pure black surface, photographed from slightly above. The subject is composed in the lower two-thirds of the frame, leaving the upper third as empty black background. The background color is continuous and fills the entire image — the objects rest naturally on it. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Photorealistic, editorial product photography, shallow depth of field, warm studio lighting, no text, no watermarks.

// @IMAGE aide-tva.jpg (3:4, 1K)
//   CONTEXT: Card image for reduced VAT. Solid white background, no documents.
//   PROMPT: A close-up of a modern pellet stove thermostat dial and a small potted plant on a pure white surface, photographed from slightly above. The subject is composed in the lower two-thirds of the frame, leaving the upper third as empty white background. The background color is continuous and fills the entire image — the objects rest naturally on it. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Photorealistic, editorial product photography, shallow depth of field, warm studio lighting, no text, no watermarks.

export function AidesSection() {
  return (
    <CenterCarouselSection
      title="Des aides pour réduire le coût de votre poêle à pellets"
      subtitle="Plusieurs dispositifs cumulables financent une partie de votre projet. Découvrez ceux auxquels vous avez droit."
      primaryButtonLabel="Simuler mes aides"
      primaryButtonLink="/estimation"
    >
      <FeatureCardImage
        imageSrc="/poele/pellets/aide-maprime.jpg"
        imageAlt="MaPrimeRénov' pour poêle à pellets"
        title="MaPrimeRénov' : jusqu'à 1 250 €"
        colorMode="dark"
      />
      <FeatureCardImage
        imageSrc="/poele/pellets/aide-cee.jpg"
        imageAlt="Prime CEE pour poêle à pellets"
        title="Prime CEE : jusqu'à 250 €"
        colorMode="dark"
      />
      <FeatureCardImage
        imageSrc="/poele/pellets/aide-tva.jpg"
        imageAlt="TVA réduite pour poêle à pellets"
        title="TVA réduite à 5,5 % sur la pose"
        colorMode="light"
      />
    </CenterCarouselSection>
  );
}
