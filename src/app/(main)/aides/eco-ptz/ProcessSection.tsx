import { SplitSection } from "@/components/sections/split-section";

// @IMAGE process.jpg (3:4, 1K)
//   CONTEXT: SplitSection showing how to apply for éco-PTZ. One central subject, realistic environment.
//   PROMPT: A man and a woman sitting at a light oak dining table in a modern kitchen, looking at a laptop screen together with interested expressions. The laptop screen is not visible to the camera. Behind them, a deep dark green wall. On the table, two ceramic mugs. The couple is the central subject, positioned in the center of the frame. Soft natural light comes from a window on the right. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function ProcessSection() {
  return (
    <SplitSection
      imageSrc="/aides/eco-ptz/process.jpg"
      imageAlt="Couple consultant un projet de rénovation ensemble"
      imagePosition="right"
      eyebrow="Comment en bénéficier"
      title="3 étapes pour obtenir votre éco-PTZ"
      subtitle="1. Faites réaliser un devis par un artisan certifié RGE pour l'installation de votre poêle — nous nous en chargeons. 2. Rendez-vous dans une banque partenaire avec le devis et le formulaire emprunteur pour monter votre dossier de prêt. 3. Une fois le prêt accordé, les travaux sont réalisés et la banque verse les fonds directement."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
