import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { PricingSection } from "./PricingSection";
import { BenefitsSection } from "./BenefitsSection";
import { StoveTypesSection } from "./StoveTypesSection";
import { AidesSection } from "./AidesSection";
import { WhyUsSection } from "./WhyUsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Prix d'un poêle à bois : tarifs, installation et aides 2026",
  description:
    "Quel est le prix d'un poêle à bois ? De 500 à 7 000 € selon le modèle, plus 1 000 à 3 000 € de pose. Découvrez les tarifs par gamme, les coûts d'installation et les aides disponibles.",
  keywords: [
    "prix poêle à bois",
    "coût poêle à bois",
    "tarif poêle à bois",
    "prix installation poêle à bois",
    "aide poêle à bois",
    "MaPrimeRénov poêle à bois",
    "poêle à bois pas cher",
    "poêle à bois fonte prix",
    "poêle à bois pierre ollaire prix",
  ],
  canonical: "/prix/poele-bois",
});

export default function PrixPoeleBoisPage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <PricingSection />
      <BenefitsSection />
      <StoveTypesSection />
      <AidesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
