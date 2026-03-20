import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is-insert.jpg
//   CONTEXT: Split section explaining what a fireplace insert is. The visitor should see the product in a real home context.
//   PROMPT: Close-up medium shot of a modern cast-iron fireplace insert with a large glass door showing bright burning logs inside, installed in a traditional stone fireplace surround, warm light reflecting on nearby wall, a few split logs stacked beside it, cozy French country home interior, editorial product photography, 3:4 aspect ratio portrait orientation, warm tones, soft natural light

export function WhatIsSection() {
  return (
    <SplitSection
      imageSrc="/poele/insert-cheminee/what-is-insert.jpg"
      imageAlt="Insert cheminée encastré dans un foyer en pierre avec flammes visibles"
      imagePosition="left"
      title="Qu'est-ce qu'un insert cheminée ?"
      subtitle="Un insert est un appareil de chauffage encastré dans votre cheminée existante. Il remplace le foyer ouvert par une chambre de combustion fermée et vitrée, qui récupère et diffuse la chaleur au lieu de la laisser s'échapper par le conduit. Résultat : un rendement qui passe de 10-15 % à plus de 70 %."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
