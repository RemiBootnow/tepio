import { SplitSection } from "@/components/sections/split-section";

// @IMAGE aides.jpg (3:4, 1K)
//   CONTEXT: SplitSection right image — financial aids reduce costs. One central subject: a family in a warm living room near a stove.
//   PROMPT: A young couple sitting on a light linen sofa in a bright Scandinavian living room, smiling and relaxed. A modern pellet stove with a warm amber flame is visible in the background, slightly out of focus. The couple is the single central subject, centered in the frame. Soft natural light from a window on the right. Light oak parquet floor. Shallow depth of field — couple sharp, background soft. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function AidesSection() {
  return (
    <SplitSection
      imageSrc="/prix/aides.jpg"
      imageAlt="Famille profitant de la chaleur d'un poêle"
      imagePosition="right"
      eyebrow="Aides financières"
      title="Les aides réduisent votre reste à charge"
      subtitle="Plusieurs dispositifs vous permettent de financer une partie de votre poêle. MaPrimeRénov' 2026 offre jusqu'à 1 250 € pour l'installation d'un poêle à bois ou à granulés. Les Certificats d'Économies d'Énergie (CEE) complètent cette aide. La TVA est réduite à 5,5 % sur l'équipement et la pose. Enfin, l'éco-prêt à taux zéro permet de financer le reste sans intérêts, jusqu'à 50 000 €."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
    />
  );
}
