import { SplitSection } from "@/components/sections/split-section";

export function InstallationSection() {
  return (
    <SplitSection
      title="Une installation encadrée, du diagnostic à la mise en service"
      subtitle="Un technicien certifié RGE se déplace chez vous pour évaluer l'emplacement, le conduit de fumée et la ventilation. L'installation de votre poêle à pellets est réalisée en une journée, raccordement et essais inclus. Vous repartez avec toutes les explications pour une utilisation sereine."
      imagePosition="right"
      /* @IMAGE installation-pellets.jpg
         CONTEXT: Split section about the installation process. The visitor should see a professional, trustworthy installation scene.
         PROMPT: A certified French artisan in navy work clothes installing a modern pellet stove flue pipe in a bright living room, professional tools visible, homeowner watching in the background, natural window light, documentary photography style, warm tones, 3:4 aspect ratio portrait orientation */
      imageSrc="/poele/pellets/installation-pellets.jpg"
      imageAlt="Artisan installant un poêle à pellets"
    />
  );
}
