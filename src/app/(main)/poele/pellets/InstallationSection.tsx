import { SplitSection } from "@/components/sections/split-section";

// @IMAGE installation.jpg (3:4, 1K)
//   CONTEXT: Comprehension section showing the installation process. Documentary style to build trust.
//   PROMPT: A certified French artisan in navy work clothes kneeling beside a modern pellet stove, adjusting a black flue pipe connection in a bright Scandinavian living room with light oak parquet floor. His toolbox is open on the floor beside him. Soft natural window light from the right. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function InstallationSection() {
  return (
    <SplitSection
      imageSrc="/poele/pellets/installation.jpg"
      imageAlt="Artisan RGE installant un poêle à pellets"
      imagePosition="right"
      title="Une installation simple par un artisan certifié RGE"
      subtitle="Votre artisan RGE réalise une visite technique, puis installe votre poêle à pellets en une journée. Raccordement au conduit de fumée, réglages et mise en service : tout est pris en charge. La certification RGE est indispensable pour bénéficier des aides de l'État."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
