import { SplitSection } from "@/components/sections/split-section";

// @IMAGE what-is.jpg (3:4, 1K)
//   CONTEXT: SplitSection explaining what the CEE prime is. One central subject, realistic environment.
//   PROMPT: A close-up view of a modern pellet stove with a warm amber flame visible through the glass door, set against a matte black wall in a contemporary living room. The stove is the central subject, positioned in the center of the frame. Warm light from the flame casts a soft golden glow on the surrounding floor. A small woven basket with wood pellets sits beside the stove. Light oak parquet floor. Shallow depth of field with the flame in sharp focus. No visible text, no documents, no writing of any kind. 3:4 portrait format. Shot on full-frame 50mm f/1.8, shallow depth of field, warm editorial color grading, slightly lifted blacks, subtle film grain, soft directional light. Photorealistic.

export function WhatIsSection() {
  return (
    <SplitSection
      imageSrc="/aides/prime-energie-poele/what-is.jpg"
      imageAlt="Poêle à granulés avec une flamme chaleureuse"
      imagePosition="left"
      eyebrow="Comprendre l'aide"
      title="La prime énergie, c'est quoi ?"
      subtitle="La prime énergie (ou prime CEE) est une aide financée par les fournisseurs d'énergie (EDF, Engie, TotalEnergies…) dans le cadre du dispositif des Certificats d'Économies d'Énergie. Contrairement à MaPrimeRénov', elle n'est pas versée par l'État mais par les obligés du dispositif. Elle est accessible à tous les ménages, sans condition de revenus, pour l'installation d'un poêle performant."
      primaryButtonLabel="Vérifier mon éligibilité"
      primaryButtonLink="/estimation"
    />
  );
}
