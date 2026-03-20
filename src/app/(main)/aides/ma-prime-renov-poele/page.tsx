import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { WhatIsMprSection } from "./WhatIsMprSection";
import { AmountsSection } from "./AmountsSection";
import { EligibleStovesSection } from "./EligibleStovesSection";
import { CumulAidesSection } from "./CumulAidesSection";
import { ProcessSection } from "./ProcessSection";
import { WhyUsSection } from "./WhyUsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "MaPrimeRénov' Poêle : Montants, Conditions et Démarches",
  description:
    "Découvrez les montants MaPrimeRénov' pour un poêle à bois ou à granulés selon vos revenus. Conditions d'éligibilité, démarches et cumul des aides expliqués.",
  keywords: [
    "MaPrimeRénov poêle",
    "MaPrimeRénov poêle à granulés",
    "aide poêle à bois",
    "prime poêle à granulés",
    "MaPrimeRénov 2026",
    "montant MaPrimeRénov poêle",
    "aide installation poêle",
  ],
  canonical: "/aides/ma-prime-renov-poele",
});

export default function MaPrimeRenovPoelePage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <WhatIsMprSection />
      <AmountsSection />
      <EligibleStovesSection />
      <CumulAidesSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
