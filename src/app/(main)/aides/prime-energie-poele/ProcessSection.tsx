import { SplitSection } from "@/components/sections/split-section";

// @IMAGE process.jpg (3:4, 1K)
//   CONTEXT: SplitSection showing how the CEE prime works. One central subject, realistic environment.
//   PROMPT: A professional installer in a navy blue work jacket crouching next to a modern pellet stove in a living room with a matte black wall, carefully connecting the flue pipe at the top. The stove has a warm amber flame visible through its glass door. The installer is the central subject, positioned in the center of the frame. A toolbox sits open on the light oak parquet floor beside them. Soft natural light from a window on the left. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function ProcessSection() {
  return (
    <SplitSection
      imageSrc="/aides/prime-energie-poele/process.jpg"
      imageAlt="Artisan RGE installant un poêle à granulés"
      imagePosition="right"
      eyebrow="Comment ça marche"
      title="3 étapes pour obtenir votre prime énergie"
      subtitle="1. Avant de signer votre devis, inscrivez-vous auprès d'un organisme délivrant les primes CEE — nous pouvons vous accompagner dans cette étape. 2. Faites installer votre poêle par un artisan certifié RGE et signez l'attestation sur l'honneur de fin de travaux. 3. Transmettez la facture et l'attestation à l'organisme : la prime est versée sous quelques semaines."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
    />
  );
}
