import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

// @IMAGE aide-maprime.jpg (3:4)
//   CONTEXT: Card image for MaPrimeRénov' aid. No documents — tangible objects evoking financial aid.
//   PROMPT: A close-up of a small stack of euro coins and a miniature wooden house model on a warm beige surface (similar to #FAF6F1), photographed from slightly above. The subject is composed in the lower two-thirds of the frame, leaving the upper third as empty beige background. The background color is continuous and fills the entire image — the objects rest naturally on it. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Photorealistic, editorial product photography, shallow depth of field, warm studio lighting, no text, no watermarks.

// @IMAGE aide-cee.jpg (3:4)
//   CONTEXT: Card image for CEE energy savings prime. No documents — objects evoking savings.
//   PROMPT: A close-up of a ceramic piggy bank next to a small pile of split firewood on a pure black surface, photographed from slightly above. The subject is composed in the lower two-thirds of the frame, leaving the upper third as empty black background. The background color is continuous and fills the entire image — the objects rest naturally on it. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Photorealistic, editorial product photography, shallow depth of field, warm studio lighting, no text, no watermarks.

// @IMAGE aide-tva.jpg (3:4)
//   CONTEXT: Card image for reduced VAT. No documents — objects evoking affordable installation.
//   PROMPT: A close-up of a cast-iron wood stove door handle and a small potted plant on a light grey surface, photographed from slightly above. The subject is composed in the lower two-thirds of the frame, leaving the upper third as empty light grey background. The background color is continuous and fills the entire image — the objects rest naturally on it. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Photorealistic, editorial product photography, shallow depth of field, warm studio lighting, no text, no watermarks.

export function AidesSection() {
  return (
    <CenterCarouselSection
      title="Des aides pour réduire le coût de votre poêle"
      subtitle="Plusieurs dispositifs cumulables financent une partie de votre projet. Découvrez ceux auxquels vous avez droit."
      primaryButtonLabel="Simuler mes aides"
      primaryButtonLink="/estimation"
    >
      <FeatureCardImage
        imageSrc="/prix/poele-bois/aide-maprime.jpg"
        imageAlt="MaPrimeRénov' pour poêle à bois"
        title="MaPrimeRénov' : jusqu'à 1 250 €"
        colorMode="light"
      />
      <FeatureCardImage
        imageSrc="/prix/poele-bois/aide-cee.jpg"
        imageAlt="Prime CEE pour poêle à bois"
        title="Prime CEE : jusqu'à 250 €"
        colorMode="dark"
      />
      <FeatureCardImage
        imageSrc="/prix/poele-bois/aide-tva.jpg"
        imageAlt="TVA réduite pour poêle à bois"
        title="TVA réduite à 5,5 % sur la pose"
        colorMode="light"
      />
    </CenterCarouselSection>
  );
}
