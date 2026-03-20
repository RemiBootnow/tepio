import { SplitSection } from "@/components/sections/split-section";

export function PelletExplainerSection() {
  return (
    <SplitSection
      title="Le pellet, un combustible bois haute performance"
      subtitle="Les pellets — aussi appelés granulés de bois — sont de petits cylindres de sciure compressée. Leur faible taux d'humidité (moins de 10 %) garantit une combustion propre et un rendement supérieur à 90 %. Votre poêle à pellets régule automatiquement l'alimentation en combustible pour maintenir la température idéale."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      imagePosition="left"
      /* @IMAGE pellet-combustible.jpg
         CONTEXT: Split section explaining what pellets are and how the stove works. The visitor should understand this is a modern, clean heating solution.
         PROMPT: Close-up photo of a hand pouring golden wood pellets from a paper bag into a modern pellet stove hopper, warm ambient light, clean minimalist interior background, shallow depth of field focused on the pellets, documentary photography style, 3:4 aspect ratio portrait orientation */
      imageSrc="/poele/pellets/pellet-combustible.jpg"
      imageAlt="Pellets de bois versés dans un poêle"
    />
  );
}
