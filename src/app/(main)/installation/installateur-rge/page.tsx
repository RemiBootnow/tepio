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
  title: "Installateur RGE poêle : trouvez un artisan certifié",
  description:
    "Un installateur RGE est indispensable pour bénéficier des aides. Découvrez la certification RGE, les garanties et trouvez votre artisan pour l'installation de votre poêle.",
  keywords: [
    "installateur RGE",
    "artisan RGE poêle",
    "certification RGE",
    "installateur poêle granulés",
    "artisan certifié",
    "RGE Qualibois",
  ],
  canonical: "/installation/installateur-rge",
});

export default function InstallateurRgePage() {
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
