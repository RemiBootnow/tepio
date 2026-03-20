import { SplitSection } from "@/components/sections/split-section";

export function DefinitionSection() {
  return (
    <SplitSection
      /* @IMAGE definition.jpg
         CONTEXT: Split section explaining what the CEE prime energie is. The visitor needs to understand the concept clearly.
         PROMPT: Close-up of official French energy savings certificates documents on a wooden desk, with a small pellet stove model visible in the background, warm natural office light from a side window, soft bokeh, editorial documentary photography, 3:4 aspect ratio portrait orientation, warm neutral tones */
      imageSrc="/aides/prime-energie-poele/definition.jpg"
      imageAlt="Documents de certificats d'économies d'énergie"
      imagePosition="left"
      title="La prime CEE, qu'est-ce que c'est ?"
      subtitle="Les certificats d'économies d'énergie (CEE) obligent les fournisseurs d'énergie à financer des travaux de rénovation chez les particuliers. En installant un poêle à bois ou à granulés performant, vous bénéficiez d'une prime versée directement par ces fournisseurs — sans condition de ressources."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
    />
  );
}
