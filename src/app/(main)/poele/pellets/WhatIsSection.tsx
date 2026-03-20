import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is.jpg (3:4, 1K)
//   CONTEXT: Comprehension section explaining what a pellet stove is. Show the product in a real living room.
//   PROMPT: A modern matte-black pellet stove with a visible warm orange flame behind the glass door, placed in a cozy Scandinavian living room with light oak parquet floor. The stove has a black flue pipe going up. A small woven basket of wood pellets sits beside it on the floor. The background is softly blurred with creamy bokeh. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft natural window light. Photorealistic.

export function WhatIsSection() {
  return (
    <SplitSection
      imageSrc="/poele/pellets/what-is.jpg"
      imageAlt="Poêle à pellets dans un salon moderne"
      imagePosition="left"
      title="Qu'est-ce qu'un poêle à pellets ?"
      subtitle="Le poêle à pellets fonctionne exactement comme un poêle à granulés — pellets et granulés désignent le même combustible. Cet appareil automatisé brûle de petits cylindres de bois compressé pour chauffer votre logement avec un rendement de 85 à 95 %."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
