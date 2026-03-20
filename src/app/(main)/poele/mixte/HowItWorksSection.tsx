import { SplitSection } from "@/components/sections/split-section";

// @IMAGE how-it-works.jpg
//   CONTEXT: Comprehension section about how the mixed stove works technically. The visitor needs to understand the dual-fuel mechanism.
//   PROMPT: Close-up photo of a certified French artisan in navy work clothes adjusting the settings panel on a modern dual-fuel stove, the stove door slightly open revealing the combustion chamber, a hopper visible at the top for pellets, warm ambient lighting, documentary photography style, 3:4 aspect ratio portrait orientation, warm natural tones

export function HowItWorksSection() {
  return (
    <SplitSection
      imageSrc="/poele/mixte/how-it-works.jpg"
      imageAlt="Fonctionnement d'un poele mixte"
      imagePosition="right"
      title="Comment fonctionne un poele mixte ?"
      subtitle="Le poele mixte dispose d'un foyer concu pour accueillir des buches et d'un reservoir integre pour les granules. Un systeme automatique alimente le foyer en pellets lorsque vous choisissez ce mode. Certains modeles detectent meme la fin de combustion du bois pour basculer automatiquement sur les granules."
    />
  );
}
