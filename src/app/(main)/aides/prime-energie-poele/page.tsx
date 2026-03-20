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
  title: "Prime énergie (CEE) : une aide pour votre poêle à bois ou granulés",
  description:
    "Prime énergie CEE pour poêle à bois ou granulés : environ 250 € d'aide, versée rapidement et cumulable avec MaPrimeRénov'. Conditions et simulation gratuite.",
  keywords: [
    "prime énergie poêle",
    "prime CEE poêle",
    "certificats d'économies d'énergie",
    "aide poêle à bois",
    "prime énergie 2026",
    "CEE poêle à granulés",
  ],
  canonical: "/aides/prime-energie-poele",
});

export default function PrimeEnergiePoelePage() {
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
