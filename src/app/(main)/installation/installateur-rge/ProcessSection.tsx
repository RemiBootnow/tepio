import { SplitSection } from "@/components/sections/split-section";

// @IMAGE process.jpg (3:4, 1K)
//   CONTEXT: SplitSection right image — how the installation process works. One central subject: a homeowner and artisan meeting near a stove.
//   PROMPT: A professional artisan in navy blue work clothes shaking hands with a smiling homeowner in a bright Scandinavian living room. A modern pellet stove is visible in the background, slightly out of focus. The two people are the central subject, centered in the frame. Soft natural light from a window on the right. Light oak parquet floor. Shallow depth of field. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function ProcessSection() {
  return (
    <SplitSection
      imageSrc="/installation/installateur-rge/process.jpg"
      imageAlt="Artisan RGE rencontrant un client pour l'installation d'un poêle"
      imagePosition="right"
      title="Comment se déroule l'installation de votre poêle ?"
      subtitle="Le processus se déroule en quatre étapes simples. D'abord, une visite technique gratuite pour évaluer la faisabilité et dimensionner le poêle. Ensuite, un devis détaillé avec les aides déduites. Puis l'installation complète par l'artisan RGE, généralement en une journée. Enfin, la mise en service avec un premier allumage accompagné et les conseils d'utilisation."
      primaryButtonLabel="Démarrer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
