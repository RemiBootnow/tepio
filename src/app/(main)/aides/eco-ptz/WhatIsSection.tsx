import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is.jpg (3:4, 1K)
//   CONTEXT: SplitSection explaining what éco-PTZ is. One central subject, realistic environment.
//   PROMPT: A close-up view of a modern wood stove with a bright amber flame visible through the glass door, set in a cozy living room with a deep dark green wall behind it. The stove is the central subject, positioned in the center of the frame. A stack of neatly piled birch logs sits beside the stove on the oak parquet floor. Soft natural light comes from the left side. Shallow depth of field with the flame in sharp focus. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function WhatIsSection() {
  return (
    <SplitSection
      imageSrc="/aides/eco-ptz/what-is.jpg"
      imageAlt="Poêle à bois avec une flamme chaleureuse"
      imagePosition="left"
      eyebrow="Comprendre l'aide"
      title="L'éco-PTZ, c'est quoi ?"
      subtitle="L'éco-prêt à taux zéro (éco-PTZ) est un prêt bancaire sans intérêts, garanti par l'État, destiné à financer des travaux de rénovation énergétique. Il vous permet de financer l'installation d'un poêle à bois ou à granulés sans avancer la totalité du montant et sans payer d'intérêts. Le prêt est accessible sans condition de revenus auprès des banques partenaires."
      primaryButtonLabel="Vérifier mon éligibilité"
      primaryButtonLink="/estimation"
    />
  );
}
