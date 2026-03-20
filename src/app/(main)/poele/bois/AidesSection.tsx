import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

// @IMAGE aide-maprime.jpg (3:4, 1K)
//   CONTEXT: Card image for MaPrimeRénov'. No documents.
//   PROMPT: Euro coins and a miniature wooden house on a deep dark green surface (#01322D), lower two-thirds of frame, upper third empty dark green. No text, no documents. 3:4 portrait. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

// @IMAGE aide-cee.jpg (3:4, 1K)
//   CONTEXT: Card image for CEE energy savings prime. No documents.
//   PROMPT: A ceramic piggy bank next to split birch logs on a pure black surface, lower two-thirds of frame, upper third empty black. No text, no documents. 3:4 portrait. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

// @IMAGE aide-tva.jpg (3:4, 1K)
//   CONTEXT: Card image for reduced VAT. No documents.
//   PROMPT: A cast-iron stove handle detail and a small potted plant on a warm beige surface (#FAF6F1), lower two-thirds of frame, upper third empty beige. No text, no documents. 3:4 portrait. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function AidesSection() {
  return (
    <CenterCarouselSection
      title="Des aides pour réduire le coût de votre poêle à bois"
      subtitle="Plusieurs dispositifs cumulables financent une partie de votre projet."
      primaryButtonLabel="Simuler mes aides"
      primaryButtonLink="/estimation"
    >
      <FeatureCardImage
        imageSrc="/poele/bois/aide-maprime.jpg"
        imageAlt="MaPrimeRénov' pour poêle à bois"
        title="MaPrimeRénov' : jusqu'à 1 250 €"
        colorMode="dark"
      />
      <FeatureCardImage
        imageSrc="/poele/bois/aide-cee.jpg"
        imageAlt="Prime CEE pour poêle à bois"
        title="Prime CEE : jusqu'à 250 €"
        colorMode="dark"
      />
      <FeatureCardImage
        imageSrc="/poele/bois/aide-tva.jpg"
        imageAlt="TVA réduite pour poêle à bois"
        title="TVA réduite à 5,5 % sur la pose"
        colorMode="light"
      />
    </CenterCarouselSection>
  );
}
