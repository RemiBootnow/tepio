import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is.jpg
//   CONTEXT: Comprehension section explaining what a pellet stove is. Show the product in a real setting so the visitor can picture it in their home.
//   PROMPT: Medium shot of a contemporary pellet stove with a visible orange flame behind the glass door, placed in a cozy French living room with white walls and wooden shelves, a small pile of wood pellets in a glass jar beside it, warm natural light from a nearby window, lifestyle interior photography, 3:4 aspect ratio portrait orientation, warm color tones

export function WhatIsSection() {
  return (
    <SplitSection
      imageSrc="/poele/granules/what-is.jpg"
      imageAlt="Poêle à granulés dans un salon moderne"
      imagePosition="left"
      title="Qu'est-ce qu'un poêle à granulés ?"
      subtitle="Le poêle à granulés (ou poêle à pellets) est un appareil de chauffage qui brûle des granulés de bois compressé. Programmable, silencieux et autonome jusqu'à 72 heures, il chauffe efficacement votre logement avec un rendement allant jusqu'à 90 %. C'est aujourd'hui l'une des solutions de chauffage les plus plébiscitées en France."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
