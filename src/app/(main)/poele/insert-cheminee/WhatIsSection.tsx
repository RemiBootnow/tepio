import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is.jpg (3:4, 1K)
//   CONTEXT: Comprehension section explaining what a fireplace insert is. Show the product in a real living room.
//   PROMPT: A modern fireplace insert with a wide rectangular glass front showing bright orange flames, built into a stone mantelpiece in a cozy Scandinavian living room with light oak parquet floor. The insert has a clean black metal frame. The background is softly blurred with creamy bokeh. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft natural window light. Photorealistic.

export function WhatIsSection() {
  return (
    <SplitSection
      imageSrc="/poele/insert-cheminee/what-is.jpg"
      imageAlt="Insert cheminée encastré dans un foyer existant"
      imagePosition="left"
      title="Qu'est-ce qu'un insert cheminée ?"
      subtitle="L'insert cheminée est un appareil de chauffage à foyer fermé qui s'encastre dans une cheminée existante. Il transforme un foyer ouvert — dont le rendement ne dépasse pas 10-15 % — en un système de chauffage performant atteignant 70 à 85 % de rendement. Vous conservez le charme de votre cheminée tout en multipliant par cinq son efficacité énergétique."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
