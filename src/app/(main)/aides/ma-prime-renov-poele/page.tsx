import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { WhatIsSection } from "./WhatIsSection";
import { BenefitsSection } from "./BenefitsSection";
import { ProcessSection } from "./ProcessSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "MaPrimeRénov' poêle : montants et conditions en 2026",
  description:
    "MaPrimeRénov' 2026 pour poêle à bois ou granulés : jusqu'à 1 250 € d'aide. Conditions, montants par revenus et démarches. Estimez votre projet gratuitement.",
  keywords: [
    "MaPrimeRénov' poêle",
    "aide poêle à granulés",
    "MaPrimeRénov' 2026",
    "prime poêle à bois",
    "aide installation poêle",
    "ANAH poêle",
  ],
  canonical: "/aides/ma-prime-renov-poele",
});

export default function MaPrimeRenovPoelePage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <WhatIsSection />
      <BenefitsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
