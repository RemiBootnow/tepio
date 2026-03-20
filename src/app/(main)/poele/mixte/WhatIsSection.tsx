import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is.jpg (3:4, 1K)
//   CONTEXT: Comprehension section explaining what a hybrid stove is. Show the product in a real living room.
//   PROMPT: A modern hybrid stove (poêle mixte) with a visible warm orange flame behind the glass door, placed in a cozy Scandinavian living room with light oak parquet floor. The stove has a black flue pipe going up. On one side, a basket of split birch logs; on the other, a small container of wood pellets. The background is softly blurred with creamy bokeh. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft natural window light. Photorealistic.

export function WhatIsSection() {
  return (
    <SplitSection
      imageSrc="/poele/mixte/what-is.jpg"
      imageAlt="Poêle mixte bois-granulés dans un salon moderne"
      imagePosition="left"
      title="Qu'est-ce qu'un poêle mixte ?"
      subtitle="Le poêle mixte (ou poêle hybride) combine deux modes de combustion : bûches et granulés. Vous chargez des bûches pour profiter de la flamme authentique, puis l'appareil bascule automatiquement sur les granulés pour maintenir la chaleur sans intervention. C'est la solution idéale pour allier plaisir du feu de bois et confort d'un chauffage autonome."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
