import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

/* @IMAGE cta-bg.jpg
   CONTEXT: Final CTA section closing the wood stove pricing page. The visitor has read all pricing info and is ready to act. The image should evoke warmth and a completed project.
   PROMPT: Wide panoramic photo of a cozy French living room in the evening, warm orange glow from a wood stove visible on the left, a family relaxed on a comfortable sofa, soft blankets, warm wood tones throughout, winter evening atmosphere seen through large windows, lifestyle photography, 16:9 landscape format, soft warm color grading */

export function CtaSection() {
  return (
    <CtaSectionBase
      backgroundSrc="/prix/poele-bois/cta-bg.jpg"
      backgroundAlt="Salon chaleureux avec poêle à bois"
      title="Estimez le prix de votre poêle à bois en 2 minutes"
      subtitle="Recevez une estimation personnalisée avec les aides déduites, sans engagement."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
    />
  );
}
