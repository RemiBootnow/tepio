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
  title: "Poêle à granulés : avantages, aides et installation",
  description:
    "Découvrez le poêle à granulés : rendement jusqu'à 95 %, aides MaPrimeRénov' 2026 et installation par un artisan RGE. Estimez votre projet gratuitement.",
  keywords: [
    "poêle à granulés",
    "poêle à pellets",
    "installation poêle à granulés",
    "aide poêle à granulés",
    "MaPrimeRénov poêle",
    "chauffage granulés bois",
  ],
  canonical: "/poele/granules",
});

export default function PoeleGranulesPage() {
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
