import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { PriceFactorsSection } from "./PriceFactorsSection";
import { StoveTypesSection } from "./StoveTypesSection";
import { AidesSection } from "./AidesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Prix d'un poêle : ce qui influence le coût de votre projet",
  description:
    "Découvrez les facteurs qui influencent le prix d'un poêle à granulés, à bois ou mixte. Aides MaPrimeRénov' 2026, CEE, TVA réduite. Estimation gratuite.",
  keywords: [
    "prix poêle",
    "prix poêle à granulés",
    "prix poêle à bois",
    "coût installation poêle",
    "aide poêle",
    "MaPrimeRénov poêle",
  ],
  canonical: "/prix",
});

export default function PrixPage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <PriceFactorsSection />
      <StoveTypesSection />
      <AidesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
