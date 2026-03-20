import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { WhatIsSection } from "./WhatIsSection";
import { BenefitsSection } from "./BenefitsSection";
import { InstallationSection } from "./InstallationSection";
import { AidesSection } from "./AidesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { WhyUsSection } from "./WhyUsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Insert cheminée : transformez votre foyer ouvert en chauffage performant",
  description:
    "Découvrez l'insert cheminée : transformez votre cheminée ouverte en chauffage efficace. Aides MaPrimeRénov' 2026, installation RGE. Estimez votre projet.",
  keywords: [
    "insert cheminée",
    "insert de cheminée",
    "installation insert cheminée",
    "aide insert cheminée",
    "MaPrimeRénov insert",
    "remplacer cheminée ouverte",
  ],
  canonical: "/poele/insert-cheminee",
});

export default function InsertChemineePage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <WhatIsSection />
      <BenefitsSection />
      <InstallationSection />
      <AidesSection />
      <TestimonialsSection />
      <WhyUsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
