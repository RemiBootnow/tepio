import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

// @IMAGE aide-maprime.jpg
//   CONTEXT: Card image for MaPrimeRénov' aid. Part of a 3-card carousel about financial aids.
//   PROMPT: Close-up of a French government document with the MaPrimeRénov logo, placed on a wooden desk next to a pen and reading glasses, soft natural light, clean and official atmosphere, product photography, 4:3 aspect ratio

// @IMAGE aide-cee.jpg
//   CONTEXT: Card image for CEE prime. Part of a 3-card carousel about financial aids.
//   PROMPT: A person holding a utility bill showing energy savings next to a calculator on a kitchen table, warm indoor lighting, lifestyle photography, 4:3 aspect ratio

// @IMAGE aide-tva.jpg
//   CONTEXT: Card image for reduced VAT. Part of a 3-card carousel about financial aids.
//   PROMPT: Close-up of a professional invoice on a desk showing a line item with reduced pricing, next to a cup of coffee, clean minimalist setting, warm soft light, documentary photography, 4:3 aspect ratio

export function AidesSection() {
  return (
    <CenterCarouselSection
      title="Des aides pour réduire le coût de votre poêle à granulés"
      subtitle="Plusieurs dispositifs de l'État et des fournisseurs d'énergie financent une partie de votre projet. Découvrez ceux auxquels vous avez droit."
      primaryButtonLabel="Simuler mes aides"
      primaryButtonLink="/estimation"
    >
      <FeatureCardImage
        imageSrc="/poele/granules/aide-maprime.jpg"
        imageAlt="MaPrimeRénov' pour poêle à granulés"
        title="MaPrimeRénov' : jusqu'à 1 800 €"
      />
      <FeatureCardImage
        imageSrc="/poele/granules/aide-cee.jpg"
        imageAlt="Prime CEE pour poêle à granulés"
        title="Prime CEE : jusqu'à 250 €"
      />
      <FeatureCardImage
        imageSrc="/poele/granules/aide-tva.jpg"
        imageAlt="TVA réduite pour poêle à granulés"
        title="TVA réduite à 5,5 % sur la pose"
      />
    </CenterCarouselSection>
  );
}
