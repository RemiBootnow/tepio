import { CtaSection as CtaSectionBase } from "@/components/sections/cta-section";

export function CtaSection() {
  return (
    <CtaSectionBase
      title="Pret a installer votre poêle à bois ?"
      subtitle="Estimez le cout de votre projet et decouvrez les aides auxquelles vous avez droit en quelques minutes."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      // @IMAGE cta-bg.jpg
      // CONTEXT: Final CTA section. The visitor has read the full page and is ready to convert. The image should evoke warmth, comfort, and the result of having a wood stove.
      // PROMPT: Wide panoramic photo of a warm cozy French living room at dusk, a modern wood stove with glowing embers visible through glass door, a family relaxing on a comfortable sofa, soft warm lighting from table lamps, winter evening atmosphere outside the large windows, aspirational lifestyle photography, 16:9 landscape format, warm color temperature, soft focus background
      backgroundSrc="/poele/bois/cta-bg.jpg"
      backgroundAlt="Famille profitant de la chaleur d'un poele a bois"
    />
  );
}
