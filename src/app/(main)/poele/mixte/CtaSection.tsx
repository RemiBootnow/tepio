import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

// @IMAGE cta-bg.jpg
//   CONTEXT: Final CTA section to convert visitors who scrolled the entire page. Should evoke warmth, comfort, and a completed renovation project.
//   PROMPT: Wide panoramic photo of a cozy French family home interior at dusk, warm light glowing from a modern stove in the background, a family silhouette relaxing on a sofa, hygge atmosphere with blankets and soft lighting, aspirational lifestyle photography, 16:9 wide landscape format, warm golden tones

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/poele/mixte/cta-bg.jpg"
      backgroundAlt="Famille profitant de la chaleur d'un poele mixte"
      title="Pret a profiter du meilleur des deux combustibles ?"
      subtitle="Estimez le cout de votre poele mixte et decouvrez les aides disponibles pour votre foyer. Simulation gratuite en 2 minutes."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
    />
  );
}
