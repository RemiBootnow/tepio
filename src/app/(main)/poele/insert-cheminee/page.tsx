import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { WhatIsSection } from "./WhatIsSection";
import { BenefitsSection } from "./BenefitsSection";
import { TypesSection } from "./TypesSection";
import { InstallationSection } from "./InstallationSection";
import { AidesSection } from "./AidesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Insert cheminée : transformez votre foyer ouvert en chauffage performant",
  description:
    "Découvrez l'insert cheminée : rendement jusqu'à 85 %, économies de bois et aides financières. Estimez votre projet avec un artisan RGE certifié.",
  keywords: [
    "insert cheminée",
    "insert foyer",
    "insert bois",
    "insert granulés",
    "remplacement cheminée ouverte",
    "chauffage bois",
    "MaPrimeRénov insert",
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
      <TypesSection />
      <InstallationSection />
      <AidesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
