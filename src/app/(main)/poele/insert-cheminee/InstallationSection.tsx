import { SplitSection } from "@/components/sections/split-section";

// @IMAGE installation-insert.jpg
//   CONTEXT: Split section explaining the installation process. Documentary style showing a real artisan at work.
//   PROMPT: A certified French artisan in navy blue work clothes installing a modern fireplace insert into an existing stone chimney opening, tools visible on the floor, stainless steel flue liner being connected, homeowner watching from the background, natural window light, documentary reportage photography style, 3:4 aspect ratio portrait orientation, warm tones

export function InstallationSection() {
  return (
    <SplitSection
      imageSrc="/poele/insert-cheminee/installation-insert.jpg"
      imageAlt="Artisan RGE installant un insert dans une cheminée existante"
      imagePosition="right"
      title="Comment se déroule l'installation d'un insert ?"
      subtitle="Un artisan RGE intervient chez vous en une journée. Il prépare le foyer existant, installe l'insert, raccorde le conduit et réalise les finitions. Un tubage du conduit est souvent nécessaire pour garantir sécurité et performance."
    />
  );
}
