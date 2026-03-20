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
  title: "Éco-PTZ : financez votre poêle sans intérêts",
  description:
    "Éco-prêt à taux zéro pour poêle à bois ou granulés : jusqu'à 50 000 € sur 20 ans, sans intérêts. Conditions, démarches et simulation gratuite.",
  keywords: [
    "éco-PTZ poêle",
    "éco-prêt à taux zéro",
    "financement poêle à granulés",
    "prêt travaux poêle",
    "éco-PTZ 2026",
    "prêt sans intérêts rénovation",
  ],
  canonical: "/aides/eco-ptz",
});

export default function EcoPtzPage() {
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
