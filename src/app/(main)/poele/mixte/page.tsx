import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { WhatIsSection } from "./WhatIsSection";
import { BenefitsSection } from "./BenefitsSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { AidsSection } from "./AidsSection";
import { WhyUsSection } from "./WhyUsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Poele Mixte Bois et Granules : Guide, Aides et Installation",
  description:
    "Decouvrez le poele mixte bois et granules : fonctionnement, avantages, aides financieres (MaPrimeRenov', CEE) et installation par des artisans RGE. Estimez votre projet gratuitement.",
  keywords: [
    "poele mixte bois granules",
    "poele mixte",
    "poele bois et granules",
    "poele hybride",
    "chauffage bois granules",
    "poele mixte aides",
    "installation poele mixte",
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
      <HowItWorksSection />
      <AidsSection />
      <TestimonialsSection />
      <WhyUsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
