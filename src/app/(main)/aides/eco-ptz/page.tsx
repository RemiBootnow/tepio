import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { DefinitionSection } from "./DefinitionSection";
import { AvantagesSection } from "./AvantagesSection";
import { MontantsSection } from "./MontantsSection";
import { TravauxSection } from "./TravauxSection";
import { DemarchesSection } from "./DemarchesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Éco-PTZ : financer vos travaux de rénovation à taux zéro",
  description:
    "Découvrez l'éco-prêt à taux zéro (éco-PTZ) : conditions, montants jusqu'à 50 000 €, travaux éligibles et cumul avec MaPrimeRénov'. Estimez vos aides en ligne.",
  keywords: [
    "éco-PTZ",
    "éco-PTZ poêle",
    "éco prêt à taux zéro",
    "éco-PTZ 2026",
    "éco-PTZ montant",
    "éco-PTZ conditions",
    "éco-PTZ MaPrimeRénov",
    "financement rénovation énergétique",
  ],
  canonical: "/aides/eco-ptz",
});

export default function EcoPtzPage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <DefinitionSection />
      <AvantagesSection />
      <MontantsSection />
      <TravauxSection />
      <DemarchesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
