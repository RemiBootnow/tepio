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
  title: "Poêle à pellets : chaleur douce, automatisée et économique",
  description:
    "Découvrez le poêle à pellets : rendement jusqu'à 95 %, aides MaPrimeRénov' 2026 et installation par un artisan RGE. Estimez votre projet gratuitement.",
  keywords: [
    "poêle à pellets",
    "poêle pellets",
    "installation poêle à pellets",
    "aide poêle à pellets",
    "MaPrimeRénov poêle pellets",
    "chauffage pellets",
  ],
  canonical: "/poele/pellets",
});

export default function PoelePelletsPage() {
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
