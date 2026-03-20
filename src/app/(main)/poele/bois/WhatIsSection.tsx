import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is.jpg (3:4, 1K)
//   CONTEXT: Comprehension section explaining what a wood stove is. Show a cast-iron wood stove in a real living room.
//   PROMPT: A classic cast-iron wood stove with visible bright orange flames behind the glass door, placed in a cozy Scandinavian living room with light oak parquet floor. The stove has a black flue pipe going up. A neat stack of split birch logs sits on the floor beside it. The background is softly blurred with creamy bokeh. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft natural window light. Photorealistic.

export function WhatIsSection() {
  return (
    <SplitSection
      imageSrc="/poele/bois/what-is.jpg"
      imageAlt="Poêle à bois dans un salon chaleureux"
      imagePosition="left"
      title="Qu'est-ce qu'un poêle à bois ?"
      subtitle="Le poêle à bois fonctionne avec des bûches de bois, le combustible de chauffage le moins cher en France. Il offre une flamme visible et une chaleur rayonnante incomparable. Les modèles récents atteignent un rendement de 75 à 85 %, bien supérieur aux cheminées ouvertes, et ne nécessitent aucune alimentation électrique."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
