import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is.jpg (3:4, 1K)
//   CONTEXT: SplitSection explaining what MaPrimeRénov' is. One central subject, realistic environment.
//   PROMPT: A close-up view of a modern pellet stove with a bright amber flame visible through the glass door, set against a warm beige wall in a cozy living room. The stove is the central subject, positioned in the center of the frame. A person's hand rests gently on top of the stove, feeling the warmth. Soft natural light comes from the left. Light oak parquet floor. Shallow depth of field with the flame in sharp focus. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function WhatIsSection() {
  return (
    <SplitSection
      imageSrc="/aides/ma-prime-renov-poele/what-is.jpg"
      imageAlt="Poêle à granulés avec une flamme chaleureuse"
      imagePosition="left"
      eyebrow="Comprendre l'aide"
      title="MaPrimeRénov', c'est quoi ?"
      subtitle="MaPrimeRénov' est une aide financière de l'État, gérée par l'Agence nationale de l'habitat (ANAH). Elle est destinée aux propriétaires qui souhaitent améliorer la performance énergétique de leur logement. L'installation d'un poêle à bois ou à granulés fait partie des travaux éligibles, à condition de faire appel à un artisan certifié RGE."
      primaryButtonLabel="Vérifier mon éligibilité"
      primaryButtonLink="/estimation"
    />
  );
}
