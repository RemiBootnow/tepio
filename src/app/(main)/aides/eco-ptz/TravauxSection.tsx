import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

export function TravauxSection() {
  return (
    <CenterCarouselSection
      title="Quels travaux sont éligibles à l'éco-PTZ ?"
      subtitle="L'éco-prêt à taux zéro finance un large éventail de travaux de rénovation énergétique. Voici les principales catégories."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
    >
      {/* @IMAGE travaux-chauffage.jpg
          CONTEXT: Carousel card showing heating installation as eligible eco-PTZ work. Part of a 5-card series on eligible renovations.
          PROMPT: A modern pellet stove with visible warm orange flame installed in a contemporary French living room, soft ambient lighting, clean minimalist interior, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/eco-ptz/travaux-chauffage.jpg"
        imageAlt="Poêle à granulés installé dans un salon"
        title="Chauffage performant"
      />
      {/* @IMAGE travaux-isolation-murs.jpg
          CONTEXT: Carousel card showing wall insulation as eligible eco-PTZ work.
          PROMPT: Professional artisan installing interior wall insulation panels in a French home, visible insulation material, protective work gear, natural daylight, documentary photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/eco-ptz/travaux-isolation-murs.jpg"
        imageAlt="Isolation des murs par l'intérieur"
        title="Isolation des murs"
      />
      {/* @IMAGE travaux-fenetres.jpg
          CONTEXT: Carousel card showing window replacement as eligible eco-PTZ work.
          PROMPT: Close-up of a new triple-glazed window being installed in a French stone house, artisan hands adjusting the frame, bright outdoor light visible through the glass, warm tones, documentary photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/eco-ptz/travaux-fenetres.jpg"
        imageAlt="Remplacement de fenêtres double vitrage"
        title="Fenêtres et vitrages"
      />
      {/* @IMAGE travaux-eau-chaude.jpg
          CONTEXT: Carousel card showing hot water system upgrade.
          PROMPT: A modern thermodynamic water heater installed in a clean utility room, white walls, professional installation with visible piping, bright even lighting, product photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/eco-ptz/travaux-eau-chaude.jpg"
        imageAlt="Chauffe-eau thermodynamique"
        title="Eau chaude solaire ou thermodynamique"
      />
      {/* @IMAGE travaux-isolation-toiture.jpg
          CONTEXT: Carousel card showing roof insulation as eligible eco-PTZ work.
          PROMPT: Artisan rolling out thick mineral wool insulation in an attic space of a French house, wooden roof beams visible, work light illuminating the space, documentary photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/aides/eco-ptz/travaux-isolation-toiture.jpg"
        imageAlt="Isolation de la toiture"
        title="Isolation de la toiture"
      />
    </CenterCarouselSection>
  );
}
