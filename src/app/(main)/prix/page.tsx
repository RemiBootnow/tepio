import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { PriceRangesSection } from "./PriceRangesSection";
import { StoveTypesSection } from "./StoveTypesSection";
import { InstallationSection } from "./InstallationSection";
import { AidesSection } from "./AidesSection";
import { WhyUsSection } from "./WhyUsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Prix d'un poêle : tarifs, installation et aides 2026",
  description:
    "Combien coûte un poêle à granulés, à bois, mixte ou un insert ? Découvrez les prix moyens, le coût d'installation et les aides financières disponibles en 2026.",
  keywords: [
    "prix poêle",
    "prix poêle à granulés",
    "prix poêle à bois",
    "coût installation poêle",
    "prix insert cheminée",
    "aide poêle à granulés",
    "MaPrimeRénov poêle",
    "prix poêle mixte",
  ],
  canonical: "/prix",
});

export default function PrixPage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <PriceRangesSection />
      <InstallationSection />
      <StoveTypesSection />
      <AidesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
