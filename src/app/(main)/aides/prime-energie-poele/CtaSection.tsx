import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

export function CtaSection() {
  return (
    <CtaSectionBase
      title="Estimez votre prime énergie en 2 minutes"
      subtitle="Simulez gratuitement le montant de vos aides CEE et MaPrimeRénov' pour l'installation de votre poêle."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="light"
      /* @IMAGE cta-image.jpg
         CONTEXT: Final CTA section, image below text. Should evoke the result — a warm, comfortable home after renovation. Aspirational, wide panoramic.
         PROMPT: Wide panoramic photo of a happy French family relaxing in a bright modern living room with a pellet stove glowing warmly in the corner, children playing on the floor, natural afternoon light through large windows, warm cozy lifestyle photography, 16:9 wide aspect ratio, soft warm tones */
      imageSrc="/aides/prime-energie-poele/cta-image.jpg"
      imageAlt="Famille profitant de la chaleur de leur poêle à granulés"
    />
  );
}
