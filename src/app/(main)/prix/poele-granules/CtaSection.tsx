import { CtaSection as CtaSectionComponent } from "@/components/sections/cta-section";
import { APP_NAME } from "@/lib/constants";

// @IMAGE cta-background.jpg
//   CONTEXT: Final CTA section closing the pricing page. Should evoke warmth, comfort, and the result of installing a pellet stove.
//   PROMPT: Wide-angle photo of a cozy French living room in the evening, a pellet stove glowing with warm orange light in the center-right, a family blanket on a sofa, soft warm ambient lighting, large window showing winter dusk outside, aspirational lifestyle photography, 16:9 landscape format, warm color temperature

export function CtaSection() {
  return (
    <CtaSectionComponent
      backgroundSrc="/prix/poele-granules/cta-background.jpg"
      backgroundAlt="Salon chaleureux avec poêle à granulés"
      title={`Estimez le prix de votre poêle à granulés avec ${APP_NAME}`}
      subtitle="Recevez une estimation personnalisée en 2 minutes, aides déduites. Nos conseillers vous accompagnent de A à Z."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
    />
  );
}
