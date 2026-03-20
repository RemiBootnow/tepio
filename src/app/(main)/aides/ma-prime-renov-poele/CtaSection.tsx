import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

export function CtaSection() {
  return (
    // @IMAGE cta-bg.jpg
    //   CONTEXT: Final CTA section closing the page. Should evoke the aspiration — a warm renovated home with a stove.
    //   PROMPT: Wide panoramic photo of a cozy French family living room in winter evening, a modern pellet stove glowing with warm light in the center, a family silhouette relaxing on a sofa, soft warm lighting, snow visible through large windows, aspirational lifestyle photography, 16:9 landscape format, warm golden tones, shallow depth of field
    <CtaSectionBase
      backgroundSrc="/aides/ma-prime-renov-poele/cta-bg.jpg"
      backgroundAlt="Salon chaleureux avec poêle à granulés"
      title="Estimez vos aides MaPrimeRénov' en 2 minutes"
      subtitle="Simulez gratuitement le montant de vos aides et le coût de votre poêle, accompagné par nos experts."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
    />
  );
}
