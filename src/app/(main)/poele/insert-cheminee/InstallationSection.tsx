import { SplitSection } from "@/components/sections/split-section";

// @IMAGE installation.jpg (3:4, 1K)
//   CONTEXT: Comprehension section showing the installation process of a fireplace insert. Documentary style.
//   PROMPT: A certified French artisan in navy work clothes kneeling inside a stone fireplace opening, installing a modern fireplace insert with a black metal frame into the existing hearth. His toolbox is on the floor beside the fireplace. A bright Scandinavian living room with light oak parquet floor surrounds the scene. Soft natural window light from the right. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function InstallationSection() {
  return (
    <SplitSection
      imageSrc="/poele/insert-cheminee/installation.jpg"
      imageAlt="Artisan RGE installant un insert cheminée"
      imagePosition="right"
      title="Une installation sur mesure dans votre cheminée existante"
      subtitle="Votre artisan RGE inspecte votre foyer et votre conduit, puis encastre l'insert dans la cheminée existante. Il réalise le tubage du conduit, les raccordements et la mise en service en une journée. La certification RGE est indispensable pour bénéficier des aides de l'État."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
