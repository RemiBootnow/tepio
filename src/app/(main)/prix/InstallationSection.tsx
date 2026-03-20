import { SplitSection } from "@/components/sections/split-section";

// @IMAGE installation.jpg
//   CONTEXT: SplitSection explaining installation costs. The visitor needs to understand what's included in the price of installation.
//   PROMPT: A certified French artisan in navy blue work clothes installing a modern pellet stove flue pipe in a bright living room, tools organized on the floor, homeowner watching approvingly in the background, natural window light, documentary photography style, 3:4 aspect ratio portrait orientation, warm tones

export function InstallationSection() {
  return (
    <SplitSection
      imageSrc="/prix/installation.jpg"
      imageAlt="Artisan installant un poêle"
      imagePosition="left"
      title="Ce que comprend le coût d'installation"
      subtitle="Le prix de la pose inclut la mise en place du poêle, le raccordement au conduit de fumée (tubage ou création), les finitions et la mise en service. Un artisan RGE garantit une installation conforme aux normes DTU 24.1 et vous donne accès aux aides de l'État."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
