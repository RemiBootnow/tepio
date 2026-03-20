import { SplitSection } from "@/components/sections/split-section";

// @IMAGE installation.jpg (3:4, 1K)
//   CONTEXT: Comprehension section showing the installation process of a wood stove. Documentary style.
//   PROMPT: A certified French artisan in navy work clothes kneeling beside a cast-iron wood stove, adjusting a black flue pipe connection in a bright Scandinavian living room with light oak parquet floor. His toolbox is open on the floor beside him. Soft natural window light from the right. No visible text, no documents, no writing of any kind. 3:4 portrait aspect ratio. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function InstallationSection() {
  return (
    <SplitSection
      imageSrc="/poele/bois/installation.jpg"
      imageAlt="Artisan RGE installant un poêle à bois"
      imagePosition="right"
      title="Une installation soignée par un artisan certifié RGE"
      subtitle="Votre artisan RGE réalise une visite technique pour vérifier le conduit de fumée et la ventilation, puis installe votre poêle à bois en une journée. Raccordement, réglages et premier allumage : tout est inclus. La certification RGE vous ouvre le droit aux aides de l'État."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
