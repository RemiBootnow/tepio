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
  title: "Prix d'un poêle à granulés : coût, installation et aides",
  description:
    "Le prix d'un poêle à granulés dépend du modèle et de la pose. Découvrez les facteurs de coût, les aides MaPrimeRénov' 2026 et estimez votre projet.",
  keywords: [
    "prix poêle à granulés",
    "coût poêle granulés",
    "tarif poêle pellets",
    "prix installation poêle",
    "aide poêle granulés",
    "devis poêle granulés",
  ],
  canonical: "/prix/poele-granules",
});

export default function PrixPoeleGranulesPage() {
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
