import { SplitSection } from "@/components/sections/split-section";

export function CumulAidesSection() {
  return (
    // @IMAGE cumul-aides.jpg
    //   CONTEXT: Transformation section showing financial savings from stacking multiple aids. Should feel empowering.
    //   PROMPT: Overhead view of a French homeowner's hands on a desk organizing renovation aid documents, a calculator showing a positive number, MaPrimeRénov letter visible, natural daylight, clean modern desk with a plant, documentary photography style, 3:4 aspect ratio portrait orientation, warm natural tones
    <SplitSection
      imageSrc="/aides/ma-prime-renov-poele/cumul-aides.jpg"
      imageAlt="Cumul des aides financières pour un poêle"
      imagePosition="right"
      title="Cumulez les aides pour réduire votre reste à charge"
      subtitle="MaPrimeRénov' est cumulable avec la prime CEE (Certificats d'Économies d'Énergie), la TVA réduite à 5,5 % et certaines aides locales. En combinant ces dispositifs, votre reste à charge peut descendre sous les 1 000 € pour un poêle à granulés."
      primaryButtonLabel="Calculer mon reste à charge"
      primaryButtonLink="/estimation"
    />
  );
}
