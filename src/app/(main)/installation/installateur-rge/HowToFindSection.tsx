import { SplitSection } from "@/components/sections/split-section";

// @IMAGE how-to-find.jpg (3:4, 1K)
//   CONTEXT: SplitSection right image — how to find your RGE installer. One central subject: a homeowner and artisan meeting near a stove.
//   PROMPT: A professional artisan in navy blue work clothes shaking hands with a smiling homeowner in a bright Scandinavian living room. A modern pellet stove is visible in the background, slightly out of focus. The two people are the central subject, centered in the frame. Soft natural light from a window on the right. Light oak parquet floor. Shallow depth of field. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function HowToFindSection() {
  return (
    <SplitSection
      imageSrc="/installation/installateur-rge/how-to-find.jpg"
      imageAlt="Artisan RGE rencontrant un client"
      imagePosition="right"
      eyebrow="Votre projet"
      title="Comment trouver votre installateur RGE"
      subtitle="Nous simplifions votre recherche d'installateur certifié. Décrivez votre projet en quelques clics, recevez une estimation personnalisée et nous vous mettons en relation avec un artisan RGE qualifié dans votre secteur. Il réalise une visite technique gratuite, vous propose un devis détaillé avec les aides déduites, puis assure l'installation et la mise en service de votre poêle."
      primaryButtonLabel="Démarrer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
