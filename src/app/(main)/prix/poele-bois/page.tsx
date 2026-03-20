import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { PriceBreakdownSection } from "./PriceBreakdownSection";
import { BenefitsSection } from "./BenefitsSection";
import { AidesSection } from "./AidesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Prix d'un poêle à bois : coût, installation et aides",
  description:
    "Le prix d'un poêle à bois dépend du modèle et de la pose. Découvrez les facteurs de coût, les aides MaPrimeRénov' 2026 et estimez votre projet.",
  keywords: [
    "prix poêle à bois",
    "coût poêle bois",
    "tarif poêle à bûches",
    "prix installation poêle bois",
    "aide poêle bois",
    "devis poêle bois",
  ],
  canonical: "/prix/poele-bois",
});

export default function PrixPoeleBoisPage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <PriceBreakdownSection />
      <BenefitsSection />
      <AidesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
