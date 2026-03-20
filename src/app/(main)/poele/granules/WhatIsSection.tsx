import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is.jpg (3:4)
//   CONTEXT: Comprehension section explaining what a pellet stove is. Show the product in a real living room.
//   PROMPT: A modern matte-black pellet stove with a visible warm orange flame behind the glass door, placed in a cozy Scandinavian living room with light oak parquet floor. The stove has a black flue pipe going up. A small woven basket of wood pellets sits beside it on the floor. The background is softly blurred with creamy bokeh. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft natural window light. Photorealistic.

export function WhatIsSection() {
  return (
    <SplitSection
      imageSrc="/poele/granules/what-is.jpg"
      imageAlt="Poêle à granulés dans un salon moderne"
      imagePosition="left"
      title="Qu'est-ce qu'un poêle à granulés ?"
      subtitle="Le poêle à granulés (ou poêle à pellets) brûle des granulés de bois compressé pour chauffer votre logement. Programmable et autonome jusqu'à 72 heures, il offre un rendement de 85 à 95 % — bien supérieur à un poêle à bois classique. C'est aujourd'hui le mode de chauffage au bois le plus plébiscité en France."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
