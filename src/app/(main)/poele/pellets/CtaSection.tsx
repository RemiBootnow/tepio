import { CtaSection as CtaSectionComponent } from "@/components/sections/cta-section";

export function CtaSection() {
  return (
    <CtaSectionComponent
      title="Prêt à passer au chauffage aux pellets ?"
      subtitle="Estimez le coût de votre poêle à pellets et les aides disponibles en 2 minutes."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      /* @IMAGE cta-background.jpg
         CONTEXT: Final CTA section with background image. The visitor has read everything and is ready to convert. The image should evoke warmth and a completed project.
         PROMPT: Wide-angle photo of a cozy French living room at dusk, a modern pellet stove glowing with warm orange light in the center-right, a family relaxing on a sofa in the background, soft warm lighting, large windows showing a winter garden outside, aspirational lifestyle photography, 16:9 landscape format, shallow depth of field */
      backgroundSrc="/poele/pellets/cta-background.jpg"
      backgroundAlt="Salon chaleureux avec un poêle à pellets"
    />
  );
}
