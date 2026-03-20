import { SplitSection } from "@/components/sections/split-section";

// @IMAGE installation.jpg
//   CONTEXT: Comprehension section showing the installation process. Documentary style to build trust in the artisan's work.
//   PROMPT: A certified French artisan in navy work clothes installing a modern pellet stove flue pipe in a bright living room, tools visible on the floor, homeowner watching with a smile in the background, natural window light, documentary reportage photography style, 3:4 aspect ratio portrait orientation, warm tones

export function InstallationSection() {
  return (
    <SplitSection
      imageSrc="/poele/granules/installation.jpg"
      imageAlt="Artisan RGE installant un poêle à granulés"
      imagePosition="right"
      title="Une installation simple, réalisée par un artisan RGE"
      subtitle="Votre artisan certifié RGE se déplace pour une visite technique, puis installe votre poêle à granulés en une journée. Il s'occupe du raccordement au conduit de fumée, des réglages et de la mise en service. Vous n'avez rien à prévoir : tout est pris en charge."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
