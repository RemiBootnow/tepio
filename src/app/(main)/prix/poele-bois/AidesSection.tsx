import { SplitSection } from "@/components/sections/split-section";

/* @IMAGE aides-financieres.jpg
   CONTEXT: Split section about financial aids for wood stoves. The visitor needs to understand they can reduce the cost significantly.
   PROMPT: A French couple in their 30s sitting at a kitchen table reviewing documents with a financial advisor, laptop open showing a calculator app, natural window light, warm welcoming atmosphere, the couple looks relieved and happy, documentary photography style, 3:4 aspect ratio portrait orientation, soft warm tones */

export function AidesSection() {
  return (
    <SplitSection
      imageSrc="/prix/poele-bois/aides-financieres.jpg"
      imageAlt="Couple consultant les aides financières pour leur poêle à bois"
      imagePosition="right"
      imageBg="bg-primary"
      title="Jusqu'à 4 000 € d'aides pour votre poêle à bois"
      subtitle="MaPrimeRénov' finance jusqu'à 2 500 € de votre poêle à bois. Ajoutez la prime CEE (jusqu'à 800 €), la TVA réduite à 5,5 % et l'éco-prêt à taux zéro. Dans de nombreux cas, les aides couvrent plus de 50 % du coût total de votre installation."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
