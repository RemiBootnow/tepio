import { SplitSection } from "@/components/sections/split-section";

// @IMAGE aides-financieres.jpg
//   CONTEXT: SplitSection about financial aids that reduce the cost. The visitor should feel reassured that the investment is supported by public subsidies.
//   PROMPT: A French couple sitting at a kitchen table reviewing paperwork with a smiling energy advisor, laptop open showing a calculator, bright modern kitchen in the background, natural daylight, lifestyle documentary photography, 3:4 aspect ratio portrait orientation, warm optimistic tones

export function AidesSection() {
  return (
    <SplitSection
      imageSrc="/prix/aides-financieres.jpg"
      imageAlt="Couple étudiant les aides financières"
      imagePosition="right"
      title="Des aides pour réduire le prix de votre poêle"
      subtitle="MaPrimeRénov' finance jusqu'à 2 500 € de votre poêle selon vos revenus. La prime CEE ajoute 200 à 800 € supplémentaires. La TVA réduite à 5,5 % s'applique automatiquement. Au total, vous pouvez économiser jusqu'à 50 % du coût de votre projet."
      primaryButtonLabel="Simuler mes aides"
      primaryButtonLink="/estimation"
    />
  );
}
