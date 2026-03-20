import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { DefinitionSection } from "./DefinitionSection";
import { EligibilitySection } from "./EligibilitySection";
import { AmountsSection } from "./AmountsSection";
import { StoveTypesSection } from "./StoveTypesSection";
import { StepsSection } from "./StepsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Prime énergie CEE pour poêle à bois et granulés",
  description:
    "Découvrez la prime énergie (CEE) pour l'installation d'un poêle à bois ou à granulés : montants, conditions d'éligibilité, démarches. Estimez vos aides gratuitement.",
  keywords: [
    "prime énergie poêle",
    "prime CEE poêle",
    "prime énergie poêle à granulés",
    "prime CEE poêle à bois",
    "certificats économies énergie poêle",
    "aide poêle à granulés",
    "prime énergie chauffage bois",
  ],
  canonical: "/aides/prime-energie-poele",
});

export default function PrimeEnergiePoelePage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <DefinitionSection />
      <EligibilitySection />
      <AmountsSection />
      <StoveTypesSection />
      <TestimonialsSection />
      <StepsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
