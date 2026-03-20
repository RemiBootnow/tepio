import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

// @IMAGE cta-bg.jpg
//   CONTEXT: Final CTA section. The visitor has read everything and is ready to convert. Show the aspirational result — a warm, comfortable home.
//   PROMPT: Wide-angle photo of a happy French family relaxing in a warm modern living room, a pellet stove glowing softly in the background, evening light, cozy blankets on the sofa, children playing on the floor, lifestyle photography, warm golden tones, 16:9 landscape format, soft bokeh

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/poele/granules/cta-bg.jpg"
      backgroundAlt="Famille dans un salon chauffé par un poêle à granulés"
      title="Prêt à passer au poêle à granulés ?"
      subtitle="Estimez le coût de votre projet et découvrez les aides auxquelles vous avez droit en 2 minutes."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
    />
  );
}
