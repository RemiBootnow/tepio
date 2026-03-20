import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is-rge.jpg (3:4, 1K)
//   CONTEXT: SplitSection left image — what is an RGE installer. One central subject: an artisan working on a stove installation.
//   PROMPT: A professional artisan in clean navy blue work clothes carefully connecting a flue pipe to a modern pellet stove in a bright Scandinavian living room. He is the single central subject, centered in the frame, focused on his work. Tools are neatly laid out beside him. Soft natural light from a window on the left. Light oak parquet floor. Shallow depth of field — artisan sharp, background soft. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function WhatIsRgeSection() {
  return (
    <SplitSection
      imageSrc="/installation/installateur-rge/what-is-rge.jpg"
      imageAlt="Artisan RGE installant un poêle"
      imagePosition="left"
      eyebrow="Certification RGE"
      title="Qu'est-ce qu'un installateur RGE ?"
      subtitle="Un installateur RGE est un artisan Reconnu Garant de l'Environnement par l'État. Cette certification atteste de sa compétence en matière d'efficacité énergétique et d'installation d'équipements de chauffage. Faire appel à un artisan RGE est obligatoire pour bénéficier de MaPrimeRénov', des CEE et de l'éco-prêt à taux zéro. C'est aussi l'assurance d'une installation conforme aux normes, sécurisée et performante."
      primaryButtonLabel="Trouver un installateur RGE"
      primaryButtonLink="/estimation"
    />
  );
}
