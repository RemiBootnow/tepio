import { CtaSection as CtaSectionComponent } from "@/components/sections/cta-section";

// @IMAGE cta-insert.jpg
//   CONTEXT: Final CTA section closing the page. Should evoke the result — a warm, comfortable home after installation.
//   PROMPT: Wide panoramic photo of a cozy French family living room in winter evening, a modern fireplace insert glowing with warm fire behind glass in the background, a family relaxing on a large sofa with warm blankets, soft warm lighting from table lamps, holiday atmosphere, lifestyle photography, 16:9 wide aspect ratio, warm golden tones, shallow depth of field

export function CtaSection() {
  return (
    <CtaSectionComponent
      imageSrc="/poele/insert-cheminee/cta-insert.jpg"
      imageAlt="Famille profitant de la chaleur d'un insert cheminée dans leur salon"
      title="Prêt à transformer votre cheminée ?"
      subtitle="Estimez le coût de votre insert cheminée et les aides disponibles en 2 minutes."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="light"
    />
  );
}
