import { CtaSection as CtaSectionComponent } from "@/components/sections/cta-section";
import { APP_NAME } from "@/lib/constants";

export function CtaSection() {
  return (
    <>
      {/* @IMAGE cta-bg.jpg
          CONTEXT: Final CTA section, full-screen background. Should create aspiration — a warm, renovated home.
          PROMPT: Wide-angle photo of a cozy modern French living room at dusk, warm ambient light from a pellet stove with visible orange flame, a family relaxing on a large sofa, soft blankets, large windows showing a winter garden outside, hygge atmosphere, editorial interior photography, 16:9 landscape format, warm golden tones */}
      <CtaSectionComponent
        backgroundSrc="/installation/installateur-rge/cta-bg.jpg"
        backgroundAlt="Salon chaleureux avec un poêle à granulés"
        title="Trouvez votre installateur RGE en 2 minutes"
        subtitle={`${APP_NAME} vous met en relation avec des artisans certifiés près de chez vous. Estimation gratuite et sans engagement.`}
        primaryButtonLabel="Trouver un installateur"
        primaryButtonLink="/estimation"
        primaryButtonColor="primary"
      />
    </>
  );
}
