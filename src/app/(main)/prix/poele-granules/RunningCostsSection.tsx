import { SplitSection } from "@/components/sections/split-section";

// @IMAGE running-costs.jpg
//   CONTEXT: Split section explaining ongoing costs (pellets, maintenance). The visitor wants to know the total cost of ownership beyond purchase price.
//   PROMPT: Close-up of hands pouring wood pellets from a paper bag into a pellet stove hopper, warm amber tones, cozy living room background blurred, natural window light, documentary photography style, 3:4 aspect ratio portrait orientation

export function RunningCostsSection() {
  return (
    <SplitSection
      imageSrc="/prix/poele-granules/running-costs.jpg"
      imageAlt="Remplissage d'un poêle à granulés"
      imagePosition="right"
      title="Coûts d'utilisation : granulés et entretien"
      subtitle="Un sac de 15 kg de granulés coûte entre 5 € et 7 €, soit environ 350 € à 550 € par tonne. Pour un logement de 100 m², comptez 1,5 à 2 tonnes par an, soit 600 € à 1 000 € de combustible. L'entretien annuel obligatoire (ramonage inclus) revient à 150 € à 250 €. Au total, un poêle à granulés coûte 30 à 50 % moins cher qu'un chauffage électrique."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
