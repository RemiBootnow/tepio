import { SplitSection } from "@/components/sections/split-section";

// @IMAGE price-factors.jpg (3:4, 1K)
//   CONTEXT: SplitSection left image — what affects stove pricing. One central subject: a modern stove in a realistic living room.
//   PROMPT: A modern matte-black pellet stove with a visible warm orange flame behind its glass door, standing on a light oak parquet floor in a bright Scandinavian living room. The stove is the single central subject, surrounded by breathing room. A light grey linen sofa is partially visible in the background, slightly out of focus. Soft natural light from a window on the left. Shallow depth of field — stove sharp, background soft. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function PriceFactorsSection() {
  return (
    <SplitSection
      imageSrc="/prix/price-factors.jpg"
      imageAlt="Poêle moderne dans un salon"
      imagePosition="left"
      eyebrow="Comprendre les prix"
      title="De quoi dépend le prix d'un poêle ?"
      subtitle="Le prix d'un poêle varie selon plusieurs critères : la puissance nécessaire pour chauffer votre logement, le type d'appareil (granulés, bois, mixte ou insert), la marque et la gamme choisie, ainsi que la complexité de l'installation (création de conduit, distance de fumisterie, raccordements). Chaque projet est unique — c'est pourquoi une estimation personnalisée est indispensable."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
