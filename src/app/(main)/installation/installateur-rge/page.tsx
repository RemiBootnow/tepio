import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";
import { CertificationSection } from "./CertificationSection";
import { GarantiesSection } from "./GarantiesSection";
import { DemarcheSection } from "./DemarcheSection";
import { AidesSection } from "./AidesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";

export const metadata: Metadata = generatePageMetadata({
  title: "Installateur RGE Poêle : Trouvez un Artisan Certifié",
  description:
    "Trouvez un installateur RGE qualifié pour votre poêle à granulés. Certification Qualibois, aides MaPrimeRénov' et CEE garanties. Devis gratuit et mise en relation rapide.",
  keywords: [
    "installateur RGE poêle",
    "artisan RGE poêle à granulés",
    "certification RGE",
    "Qualibois",
    "installateur poêle certifié",
    "poêle à granulés RGE",
    "trouver artisan RGE",
  ],
  canonical: "/installation/installateur-rge",
});

export default function InstallateurRgePage() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <CertificationSection />
      <GarantiesSection />
      <DemarcheSection />
      <AidesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
