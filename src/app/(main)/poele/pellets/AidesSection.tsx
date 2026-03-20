import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

export function AidesSection() {
  return (
    <CenterCarouselSection
      title="Des aides pour financer votre poêle à pellets"
      subtitle="Plusieurs dispositifs réduisent le coût de votre projet. Découvrez ceux auxquels vous êtes éligible."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    >
      {/* @IMAGE aide-maprimerenov.jpg
          CONTEXT: Carousel card about MaPrimeRénov' financial aid for pellet stoves.
          PROMPT: An official French government document with a euro symbol and a modern pellet stove silhouette, warm natural light on a wooden desk, clean minimal composition, soft focus background, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/poele/pellets/aide-maprimerenov.jpg"
        imageAlt="MaPrimeRénov'"
        title="MaPrimeRénov' : jusqu'à 2 500 €"
      />
      {/* @IMAGE aide-cee.jpg
          CONTEXT: Carousel card about CEE energy savings certificates for pellet stoves.
          PROMPT: Stack of euro banknotes next to a small pellet stove model on a clean white surface, warm studio lighting, minimal composition, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/poele/pellets/aide-cee.jpg"
        imageAlt="Prime CEE"
        title="Prime CEE : bonus énergie"
      />
      {/* @IMAGE aide-tva.jpg
          CONTEXT: Carousel card about reduced VAT rate for pellet stove installation.
          PROMPT: Close-up of a French invoice showing a 5.5% VAT line item next to a calculator on a light oak desk, warm natural light from a window, documentary style, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/poele/pellets/aide-tva.jpg"
        imageAlt="TVA réduite"
        title="TVA réduite à 5,5 %"
      />
      {/* @IMAGE aide-eco-ptz.jpg
          CONTEXT: Carousel card about zero-interest eco-loan for pellet stove financing.
          PROMPT: A couple reviewing renovation loan documents at a kitchen table with a laptop, warm interior light, comfortable French home setting, lifestyle photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/poele/pellets/aide-eco-ptz.jpg"
        imageAlt="Éco-prêt à taux zéro"
        title="Éco-prêt à taux zéro"
      />
    </CenterCarouselSection>
  );
}
