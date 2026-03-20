import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { OverviewSection } from "./OverviewSection";
import { BenefitsSection } from "./BenefitsSection";
import { TypesSection } from "./TypesSection";
import { AidesSection } from "./AidesSection";
import { WhyUsSection } from "./WhyUsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Poêle à bois : guide complet et installation",
  description:
    "Decouvrez tout sur le poele a bois : fonctionnement, avantages, types de poeles, aides financieres et installation par des artisans RGE. Estimez votre projet gratuitement.",
  keywords: [
    "poele a bois",
    "poele a bois prix",
    "installation poele a bois",
    "poele a bois buches",
    "chauffage bois",
    "aide poele a bois",
    "poele a bois RGE",
  ],
  canonical: "/poele/bois",
});

export default function PoeleABoisPage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <OverviewSection />
      <BenefitsSection />
      <TypesSection />
      <AidesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
