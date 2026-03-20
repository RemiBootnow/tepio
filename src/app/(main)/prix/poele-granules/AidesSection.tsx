import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

// @IMAGE aide-maprimenrenov.jpg
//   CONTEXT: Carousel card showing MaPrimeRénov' aid for pellet stoves. Should feel official and trustworthy.
//   PROMPT: French government building facade with tricolor flag, warm morning light, slightly low angle, clean architectural photography, 4:3 aspect ratio

// @IMAGE aide-cee.jpg
//   CONTEXT: Carousel card showing CEE energy savings certificate aid. Should evoke energy savings.
//   PROMPT: Modern smart home energy meter on a wall showing low consumption, warm interior background, soft natural light, product photography style, 4:3 aspect ratio

// @IMAGE aide-tva.jpg
//   CONTEXT: Carousel card showing reduced VAT at 5.5%. Should evoke financial benefit.
//   PROMPT: Close-up of a French artisan hands signing an installation invoice on a clipboard, pellet stove visible in background, warm interior light, documentary photography, 4:3 aspect ratio

// @IMAGE aide-eco-ptz.jpg
//   CONTEXT: Carousel card showing Eco-PTZ zero-interest loan. Should evoke accessible financing.
//   PROMPT: Young French couple reviewing renovation documents at a kitchen table, laptop open, warm natural light from window, lifestyle photography, 4:3 aspect ratio

export function AidesSection() {
  return (
    <CenterCarouselSection
      title="Des aides pour réduire le prix de votre poêle à granulés"
      subtitle="Plusieurs dispositifs permettent de financer jusqu'à 90 % de votre projet. Vérifiez vos droits en 2 minutes."
      primaryButtonLabel="Simuler mes aides"
      primaryButtonLink="/estimation"
    >
      <FeatureCardImage
        imageSrc="/prix/poele-granules/aide-maprimenrenov.jpg"
        imageAlt="MaPrimeRénov'"
        title="MaPrimeRénov' : jusqu'à 2 500 €"
      />
      <FeatureCardImage
        imageSrc="/prix/poele-granules/aide-cee.jpg"
        imageAlt="Prime CEE"
        title="Prime CEE : jusqu'à 800 €"
      />
      <FeatureCardImage
        imageSrc="/prix/poele-granules/aide-tva.jpg"
        imageAlt="TVA réduite"
        title="TVA réduite à 5,5 % sur la pose"
      />
      <FeatureCardImage
        imageSrc="/prix/poele-granules/aide-eco-ptz.jpg"
        imageAlt="Éco-PTZ"
        title="Éco-PTZ : prêt à taux zéro"
      />
    </CenterCarouselSection>
  );
}
