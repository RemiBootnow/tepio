import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is.jpg
//   CONTEXT: Comprehension section explaining what a mixed stove is. The visitor needs to see the product clearly in a home context.
//   PROMPT: Medium shot of a modern dual-fuel stove in a French living room, glass door showing gentle flames, a bag of wood pellets and two split logs placed beside the stove on a stone hearth, light-colored wall behind, natural daylight from a side window, product-in-context photography, 3:4 aspect ratio portrait orientation, warm tones

export function WhatIsSection() {
  return (
    <SplitSection
      imageSrc="/poele/mixte/what-is.jpg"
      imageAlt="Poele mixte bois et granules dans un salon"
      imagePosition="left"
      title="Qu'est-ce qu'un poele mixte bois et granules ?"
      subtitle="Le poele mixte combine deux foyers ou un foyer hybride capable de bruler du bois buche et des granules de bois (pellets). Vous basculez d'un combustible a l'autre selon vos besoins : la flamme genereuse du bois le week-end, et le chauffage automatique aux granules en semaine."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
