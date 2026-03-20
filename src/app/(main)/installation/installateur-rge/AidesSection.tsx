import { SplitSection } from "@/components/sections/split-section";
import { APP_NAME } from "@/lib/constants";

export function AidesSection() {
  return (
    <>
      {/* @IMAGE aides-financieres.jpg
          CONTEXT: Split section about financial aids requiring RGE. Should evoke savings and a positive financial outcome.
          PROMPT: A smiling French couple in their 40s sitting on a sofa reviewing documents with a calculator and laptop, bright living room with a pellet stove in the background, natural light, lifestyle photography, 3:4 aspect ratio portrait orientation, warm optimistic tones */}
      <SplitSection
        imageSrc="/installation/installateur-rge/aides-financieres.jpg"
        imageAlt="Couple consultant les aides financières pour un poêle"
        imagePosition="right"
        title="Jusqu'à 90 % du coût pris en charge grâce au label RGE"
        subtitle={`En passant par un installateur RGE, vous pouvez cumuler MaPrimeRénov' (jusqu'à 2 500 €), la prime CEE (jusqu'à 800 €) et la TVA réduite à 5,5 %. ${APP_NAME} vous aide à estimer précisément le montant de vos aides selon votre situation.`}
        primaryButtonLabel="Estimer mes aides"
        primaryButtonLink="/estimation"
      />
    </>
  );
}
