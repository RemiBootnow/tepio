import { SplitSection } from "@/components/sections/split-section";

// @IMAGE price-factors.jpg (3:4, 1K)
//   CONTEXT: SplitSection left image — factors affecting pellet stove price. One central subject: a pellet stove in a realistic environment.
//   PROMPT: A modern cylindrical pellet stove with a visible warm amber flame behind its glass door, standing on a light oak parquet floor in a cozy Scandinavian living room. The stove is the single central subject, centered in the frame. A light grey wool rug is partially visible at the base. Soft natural light from a window on the left. Shallow depth of field — stove sharp, background soft. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function PriceFactorsSection() {
  return (
    <SplitSection
      imageSrc="/prix/poele-granules/price-factors.jpg"
      imageAlt="Poêle à granulés dans un salon moderne"
      imagePosition="left"
      eyebrow="Comprendre les prix"
      title="Ce qui influence le prix d'un poêle à granulés"
      subtitle="Plusieurs facteurs déterminent le prix de votre poêle à granulés : la puissance nécessaire pour votre surface habitable, la marque et la gamme (entrée de gamme ou premium), les options de programmation et de connectivité, ainsi que la complexité de l'installation (création de conduit, tubage, raccordements). Le prix dépend du modèle, de la puissance et de la complexité d'installation — un devis personnalisé est la meilleure approche."
      primaryButtonLabel="Demander un devis"
      primaryButtonLink="/estimation"
    />
  );
}
