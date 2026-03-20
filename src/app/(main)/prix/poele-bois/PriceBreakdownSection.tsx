import { SplitSection } from "@/components/sections/split-section";

// @IMAGE price-breakdown.jpg (3:4, 1K)
//   CONTEXT: SplitSection left image — factors affecting wood stove price. One central subject: a wood stove with logs in a realistic environment.
//   PROMPT: A traditional cast-iron wood-burning stove with a visible warm orange flame behind its glass door, standing on a stone hearth in a cozy Scandinavian living room. A neat pile of birch firewood logs sits beside the stove. The stove is the single central subject, centered in the frame. Soft natural light from a window on the left. Shallow depth of field — stove sharp, background soft. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function PriceBreakdownSection() {
  return (
    <SplitSection
      imageSrc="/prix/poele-bois/price-breakdown.jpg"
      imageAlt="Poêle à bois dans un salon chaleureux"
      imagePosition="left"
      title="Ce qui influence le prix de votre poêle à bois"
      subtitle="Le prix d'un poêle à bois varie selon la puissance de chauffe, le matériau (fonte, acier ou pierre ollaire), le design choisi, la marque et la complexité de l'installation. La création ou le tubage d'un conduit de cheminée impacte également le budget. Chaque projet est unique — un devis personnalisé vous donnera une estimation précise."
      primaryButtonLabel="Demander un devis"
      primaryButtonLink="/estimation"
    />
  );
}
