import { SplitSection } from "@/components/sections/split-section";

/* @IMAGE pricing-ranges.jpg
   CONTEXT: Split section explaining wood stove price ranges. The visitor needs to see different stove styles to understand the price tiers.
   PROMPT: Three different wood stoves arranged in a showroom setting, from left a simple matte black steel stove, center a mid-range cast iron stove with glass door showing flames, right a premium soapstone stove with elegant design, warm showroom lighting, clean white background, product photography style, 3:4 aspect ratio portrait orientation */

export function PricingSection() {
  return (
    <SplitSection
      imageSrc="/prix/poele-bois/pricing-ranges.jpg"
      imageAlt="Différentes gammes de poêles à bois"
      imagePosition="left"
      title="De 500 à 7 000 € : un poêle à bois pour chaque budget"
      subtitle="Le prix d'un poêle à bois varie selon le matériau (acier, fonte, pierre ollaire), la puissance et le design. Un modèle en acier d'entrée de gamme démarre à 500 €, tandis qu'un poêle en pierre ollaire à double combustion peut atteindre 7 000 €. La pose et le tubage ajoutent 1 000 à 3 000 € selon la configuration de votre logement."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
