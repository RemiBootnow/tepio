import { SplitSection } from "@/components/sections/split-section";

export function WhatIsMprSection() {
  return (
    // @IMAGE what-is-mpr.jpg
    //   CONTEXT: Comprehension section explaining what MaPrimeRénov is. Should feel official yet accessible.
    //   PROMPT: A French couple in their 40s sitting at a kitchen table reviewing renovation aid documents together, warm natural light from a window, modern bright kitchen, papers and a tablet on the table showing charts, hopeful and focused expressions, documentary photography style, 3:4 aspect ratio portrait orientation, warm tones
    <SplitSection
      imageSrc="/aides/ma-prime-renov-poele/what-is-mpr.jpg"
      imageAlt="Couple consultant les aides MaPrimeRénov'"
      imagePosition="left"
      title="MaPrimeRénov', c'est quoi exactement ?"
      subtitle="MaPrimeRénov' est une aide de l'État versée par l'ANAH pour financer vos travaux de rénovation énergétique. Elle remplace l'ancien crédit d'impôt CITE et s'adresse à tous les propriétaires, sans condition de revenus. Pour l'installation d'un poêle à bois ou à granulés, elle peut couvrir une part importante du coût total."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
    />
  );
}
