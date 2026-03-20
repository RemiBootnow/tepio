import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { PricingSection } from "./PricingSection";
import { BenefitsSection } from "./BenefitsSection";
import { RunningCostsSection } from "./RunningCostsSection";
import { AidesSection } from "./AidesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Prix d'un poêle à granulés en 2026 : tarifs, pose et aides",
  description:
    "Découvrez le prix d'un poêle à granulés en 2026 : de 1 500 € à 6 000 € selon le modèle, coût d'installation, aides MaPrimeRénov' et CEE. Estimez votre projet gratuitement.",
  keywords: [
    "prix poêle à granulés",
    "poêle à granulés prix",
    "coût poêle à granulés",
    "prix installation poêle à granulés",
    "aide poêle à granulés",
    "poêle à pellets prix",
    "MaPrimeRénov poêle à granulés",
  ],
  canonical: "/prix/poele-granules",
});

export default function PrixPoeleGranulesPage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <PricingSection />
      <BenefitsSection />
      <RunningCostsSection />
      <AidesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
