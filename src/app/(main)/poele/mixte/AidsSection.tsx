import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

// @IMAGE aide-maprimenrenov.jpg
//   CONTEXT: Carousel card showing MaPrimeRenov aid for mixed stoves. Needs dark top area for white text.
//   PROMPT: Close-up of official French government documents and a calculator on a wooden desk, a pen resting on paperwork with euro amounts visible, warm office light, soft focus background, product photography style, 4:3 aspect ratio

// @IMAGE aide-cee.jpg
//   CONTEXT: Carousel card showing CEE energy savings certificates. Needs dark top area for white text.
//   PROMPT: A French homeowner reviewing energy bills at a kitchen table, papers and a laptop visible, warm morning light through a window, lifestyle photography, 4:3 aspect ratio

// @IMAGE aide-tva.jpg
//   CONTEXT: Carousel card showing reduced VAT benefit. Needs dark top area for white text.
//   PROMPT: Close-up of a French artisan handing a quote document to a homeowner in a living room, both hands visible in the frame, warm natural light, documentary photography, 4:3 aspect ratio

// @IMAGE aide-eco-ptz.jpg
//   CONTEXT: Carousel card showing eco-PTZ zero-interest loan. Needs dark top area for white text.
//   PROMPT: A smiling couple sitting on a sofa in a warm living room with a modern stove visible in the background, reviewing documents together, lifestyle photography, warm tones, 4:3 aspect ratio

export function AidsSection() {
  return (
    <CenterCarouselSection
      title="Des aides financieres pour reduire votre investissement"
      subtitle="Le poele mixte bois et granules est eligible a plusieurs dispositifs de financement. Decouvrez ceux auxquels vous avez droit."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
    >
      <FeatureCardImage
        imageSrc="/poele/mixte/aide-maprimenrenov.jpg"
        imageAlt="MaPrimeRenov'"
        title="MaPrimeRenov' : jusqu'a 2 500 euros"
      />
      <FeatureCardImage
        imageSrc="/poele/mixte/aide-cee.jpg"
        imageAlt="Prime CEE"
        title="Prime CEE : des centaines d'euros en plus"
      />
      <FeatureCardImage
        imageSrc="/poele/mixte/aide-tva.jpg"
        imageAlt="TVA reduite"
        title="TVA reduite a 5,5 % sur l'installation"
      />
      <FeatureCardImage
        imageSrc="/poele/mixte/aide-eco-ptz.jpg"
        imageAlt="Eco-PTZ"
        title="Eco-PTZ : un pret a taux zero dedie"
      />
    </CenterCarouselSection>
  );
}
