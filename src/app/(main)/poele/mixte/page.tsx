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
  title: "Poêle mixte : la polyvalence bois et granulés",
  description:
    "Découvrez le poêle mixte bois-granulés : deux combustibles en un seul appareil, aides MaPrimeRénov' 2026 et installation par un artisan RGE. Estimez votre projet.",
  keywords: [
    "poêle mixte",
    "poêle mixte bois granulés",
    "poêle hybride",
    "installation poêle mixte",
    "aide poêle mixte",
    "MaPrimeRénov poêle mixte",
  ],
  canonical: "/poele/mixte",
});

export default function PoeleMixtePage() {
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
