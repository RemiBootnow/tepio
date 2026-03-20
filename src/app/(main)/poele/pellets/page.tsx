import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { PelletExplainerSection } from "./PelletExplainerSection";
import { BenefitsSection } from "./BenefitsSection";
import { InstallationSection } from "./InstallationSection";
import { AidesSection } from "./AidesSection";
import { WhyUsSection } from "./WhyUsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Poêle à pellets : fonctionnement, aides et installation",
  description:
    "Découvrez le poêle à pellets : rendement supérieur à 90 %, aides MaPrimeRénov' et CEE, installation par un artisan certifié RGE. Estimez votre projet gratuitement.",
  keywords: [
    "poêle à pellets",
    "poêle pellets",
    "chauffage pellets",
    "installation poêle pellets",
    "aide poêle pellets",
    "pellets de bois",
    "prix pellets",
  ],
  canonical: "/poele/pellets",
});

export default function PoelePelletsPage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <PelletExplainerSection />
      <BenefitsSection />
      <InstallationSection />
      <AidesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
