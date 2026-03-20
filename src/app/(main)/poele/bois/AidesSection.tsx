import { SplitSection } from "@/components/sections/split-section";

export function AidesSection() {
  return (
    <SplitSection
      imagePosition="right"
      title="Des aides financieres pour reduire le cout"
      subtitle="L'installation d'un poele a bois est eligible a plusieurs dispositifs d'aide : MaPrimeRenov', les Certificats d'Economies d'Energie (CEE), la TVA reduite a 5,5 % et l'eco-pret a taux zero. Ces aides sont cumulables et peuvent couvrir une part importante de votre investissement."
      primaryButtonLabel="Simuler mes aides"
      primaryButtonLink="/estimation"
      // @IMAGE aides.jpg
      // CONTEXT: Split section about financial aids. The visitor needs to feel reassured that the investment is supported by government aids.
      // PROMPT: A French couple in their 40s sitting at a kitchen table reviewing documents with a smiling energy advisor, laptop open showing a simulation form, bright modern kitchen with a wood stove visible in the adjacent living room, natural daylight, documentary photography style, 3:4 aspect ratio portrait orientation, warm tones
      imageSrc="/poele/bois/aides.jpg"
      imageAlt="Couple consultant les aides financieres pour un poele a bois"
    />
  );
}
