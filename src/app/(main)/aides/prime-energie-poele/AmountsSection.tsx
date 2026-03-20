import { SplitSection } from "@/components/sections/split-section";

export function AmountsSection() {
  return (
    <SplitSection
      /* @IMAGE amounts.jpg
         CONTEXT: Split section about CEE prime amounts. Visitor wants to know how much money they can get. Should feel reassuring and concrete.
         PROMPT: A French couple sitting at a kitchen table reviewing renovation quotes and financial documents, a laptop open showing a calculator, warm natural light from a nearby window, cozy modern kitchen background, lifestyle documentary photography, 3:4 aspect ratio portrait orientation, warm tones */
      imageSrc="/aides/prime-energie-poele/amounts.jpg"
      imageAlt="Couple consultant les montants des aides pour leur poêle"
      imagePosition="right"
      title="Combien toucher grâce à la prime CEE poêle ?"
      subtitle="Le montant de la prime énergie varie selon vos revenus et votre zone géographique. Pour un poêle à granulés, comptez entre 250 € et 800 € de prime CEE. Ce montant se cumule avec MaPrimeRénov' et la TVA réduite à 5,5 %, pour un reste à charge minimal."
      primaryButtonLabel="Calculer mon montant"
      primaryButtonLink="/estimation"
    />
  );
}
