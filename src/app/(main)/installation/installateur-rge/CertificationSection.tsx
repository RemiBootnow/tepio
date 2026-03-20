import { SplitSection } from "@/components/sections/split-section";

export function CertificationSection() {
  return (
    <>
      {/* @IMAGE certification-rge.jpg
          CONTEXT: Split section explaining what RGE certification is. The visitor should understand this is an official, serious qualification.
          PROMPT: Close-up of a French artisan's hands holding an official RGE certification document with a visible green logo, workshop tools blurred in the background, natural daylight, documentary photography style, 3:4 aspect ratio portrait orientation, warm tones */}
      <SplitSection
        imageSrc="/installation/installateur-rge/certification-rge.jpg"
        imageAlt="Document de certification RGE"
        imagePosition="left"
        title="La certification RGE, qu'est-ce que c'est ?"
        subtitle="RGE signifie « Reconnu Garant de l'Environnement ». C'est un label délivré par des organismes accrédités (Qualibois, Qualit'EnR, Qualibat) qui atteste de la compétence d'un artisan en matière de travaux de rénovation énergétique. Depuis 2014, faire appel à un professionnel RGE est obligatoire pour bénéficier des aides publiques comme MaPrimeRénov' ou les primes CEE."
        primaryButtonLabel="Trouver un installateur"
        primaryButtonLink="/estimation"
      />
    </>
  );
}
