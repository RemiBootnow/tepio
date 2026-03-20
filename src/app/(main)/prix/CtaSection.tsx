import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

// @IMAGE cta-background.jpg
//   CONTEXT: Final CTA section. The visitor has read all the pricing info and is ready to act. The image should evoke warmth, comfort, and the result of a completed project.
//   PROMPT: Wide-angle photo of a cozy modern French living room in the evening, warm glow from a stove visible in the background, a family relaxing on a comfortable sofa, soft ambient lighting, warm color temperature, aspirational lifestyle photography, 16:9 landscape format, soft focus

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/prix/cta-background.jpg"
      backgroundAlt="Salon chaleureux avec un poêle"
      title="Prêt à connaître le prix de votre poêle ?"
      subtitle="Estimez le coût de votre projet et découvrez les aides auxquelles vous avez droit, en 2 minutes."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
    />
  );
}
