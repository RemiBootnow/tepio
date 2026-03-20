import { SplitSection } from "@/components/sections/split-section";

// @IMAGE process.jpg (3:4, 1K)
//   CONTEXT: SplitSection showing the process to get MaPrimeRénov'. One central subject, realistic environment.
//   PROMPT: A professional installer in a navy blue work jacket crouching next to a modern pellet stove, adjusting the flue pipe connection at the base. The stove has a warm amber flame visible through its glass door. The setting is a bright, clean living room with a warm beige wall behind. The installer is the central subject, positioned in the center of the frame. Tools are neatly placed on the floor beside them. Light oak parquet floor. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function ProcessSection() {
  return (
    <SplitSection
      imageSrc="/aides/ma-prime-renov-poele/process.jpg"
      imageAlt="Artisan RGE installant un poêle à granulés"
      imagePosition="right"
      eyebrow="Comment en bénéficier"
      title="3 étapes pour obtenir MaPrimeRénov'"
      subtitle="1. Créez votre compte sur maprimerenov.gouv.fr et déposez votre demande avant le début des travaux. 2. Faites installer votre poêle par un artisan certifié RGE — nous nous occupons de tout. 3. Transmettez la facture sur votre espace et recevez le virement sous quelques semaines."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
