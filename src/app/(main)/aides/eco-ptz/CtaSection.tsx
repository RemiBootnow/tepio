import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

export function CtaSection() {
  return (
    // @IMAGE cta.jpg
    //   CONTEXT: Final CTA section closing the eco-PTZ page. Should evoke the result — a warm, renovated home, the aspiration of completing the project.
    //   PROMPT: Panoramic photo of a cozy modern French family home interior after renovation, warm ambient lighting from a pellet stove glow in the background, a family of four relaxing together on a large sofa, large windows showing a winter garden outside, lifestyle photography, warm golden tones, 16:9 wide aspect ratio
    <CtaSectionBase
      title="Estimez votre éco-PTZ en 2 minutes"
      subtitle="Découvrez le montant que vous pouvez emprunter à taux zéro et les aides cumulables pour votre projet de rénovation énergétique."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      imageSrc="/aides/eco-ptz/cta.jpg"
      imageAlt="Famille dans un salon rénové et chaleureux"
      colorMode="light"
    />
  );
}
