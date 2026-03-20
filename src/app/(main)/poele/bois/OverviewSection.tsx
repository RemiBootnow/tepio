import { SplitSection } from "@/components/sections/split-section";

export function OverviewSection() {
  return (
    <SplitSection
      imagePosition="left"
      title="Qu'est-ce qu'un poêle à bois ?"
      subtitle="Le poêle à bois est un appareil de chauffage qui utilise des buches pour produire une chaleur douce et enveloppante. Avec un rendement pouvant atteindre 85 %, les modeles actuels offrent une combustion propre et une autonomie de plusieurs heures. C'est une solution de chauffage economique, ecologique et independante des fluctuations du prix de l'electricite."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      // @IMAGE overview.jpg
      // CONTEXT: Split section explaining what a wood stove is. The visitor needs to see a real wood stove up close in a home setting.
      // PROMPT: Close-up medium shot of a modern steel wood stove with a large glass door showing burning logs with bright orange flames inside, set in a cozy French living room with light wood flooring, a woven basket of firewood logs beside it, warm ambient light, lifestyle interior photography, 3:4 aspect ratio portrait orientation, shallow depth of field
      imageSrc="/poele/bois/overview.jpg"
      imageAlt="Poele a bois moderne avec flammes visibles dans un salon"
    />
  );
}
