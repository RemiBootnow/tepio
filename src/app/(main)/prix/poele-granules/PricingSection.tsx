import { SplitSection } from "@/components/sections/split-section";

// @IMAGE pricing-stove.jpg
//   CONTEXT: Split section showing pricing tiers for pellet stoves. The visitor wants to understand how much a pellet stove costs by category.
//   PROMPT: Three different pellet stoves side by side in a showroom setting, ranging from a simple compact model on the left to an elegant designer model on the right, warm showroom lighting, clean white background wall, product photography style, 3:4 aspect ratio portrait orientation, neutral tones

export function PricingSection() {
  return (
    <SplitSection
      imageSrc="/prix/poele-granules/pricing-stove.jpg"
      imageAlt="Différents modèles de poêles à granulés"
      imagePosition="left"
      title="Quel budget prévoir pour un poêle à granulés ?"
      subtitle="Le prix d'un poêle à granulés varie de 1 500 € à 6 000 € hors pose. Un modèle entrée de gamme coûte entre 1 500 € et 2 500 €, un milieu de gamme entre 2 500 € et 4 000 €, et un haut de gamme entre 4 000 € et 6 000 €. Le prix dépend de la puissance, du rendement, du design et des fonctionnalités (programmation, Wi-Fi, système canalisable)."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
