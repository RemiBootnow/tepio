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
  title: "Poêle à bois : le charme du feu, la performance en plus",
  description:
    "Découvrez le poêle à bois : flamme authentique, combustible économique et aides MaPrimeRénov' 2026. Installation par un artisan RGE. Estimez votre projet.",
  keywords: [
    "poêle à bois",
    "poêle bois bûches",
    "installation poêle à bois",
    "aide poêle à bois",
    "MaPrimeRénov poêle bois",
    "chauffage bois",
  ],
  canonical: "/poele/bois",
});

export default function PoeleBoisPage() {
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
