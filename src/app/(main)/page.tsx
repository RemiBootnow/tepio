import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { APP_NAME } from "@/lib/constants";
import { HeroSection } from "./home/HeroSection";
import { LogoSection } from "./home/LogoSection";
import { StatsSection } from "./home/StatsSection";
import { ProcessSection } from "./home/ProcessSection";
import { WhyUsSection } from "./home/WhyUsSection";
import { NetworkSection } from "./home/NetworkSection";
import { SplitSection } from "@/components/sections/split-section";
import { HeatSaveSection } from "./home/HeatSaveSection";
import { FaqSection } from "./home/FaqSection";
import { TestimonialsSection } from "./home/TestimonialsSection";

export const metadata: Metadata = generatePageMetadata({
  title: APP_NAME,
  description:
    "Experts en rénovation énergétique : pompes à chaleur, poêles à bois et granulés, climatisation. Devis gratuit et accompagnement personnalisé.",
  keywords: [
    "rénovation énergétique",
    "pompe à chaleur",
    "poêle à bois",
    "poêle à granulés",
    "climatisation",
    "MaPrimeRénov",
    "CEE",
    "devis gratuit",
  ],
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Logo Section */}
      <LogoSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* Network Section */}
      <NetworkSection />

      {/* Aides Section */}
      <SplitSection
        imageSrc="/home/help.png"
        imageAlt="Illustration des aides pour votre projet"
        imagePosition="left"
        imageBg="bg-primary"
        title="Jusqu'à 2050€ d'aides cumulés"
        subtitle="MaPrimeRénov', Certificats d'Économie d'Énergie (CEE) et aides locales. Profitez des aides pour financer jusqu'à 50% de votre projet."
        primaryButtonLabel="Estimer mon projet"
        primaryButtonLink="/estimation"
      />

      {/* Rentabilité Section */}
      <SplitSection
        imageSrc="/home/edf-invoices.png"
        imageAlt="Factures EDF avant et après installation"
        imagePosition="right"
        imageBg="bg-[#d4eef0]"
        title="Rentabilité immédiate"
        subtitle="Dans 80% des cas, les économies sur vos factures d'énergie couvrent le montant des mensualités de votre installation."
        primaryButtonLabel="Estimer mon projet"
        primaryButtonLink="/estimation"
      />

      {/* Heat Save Section */}
      <HeatSaveSection />

      {/* FAQ Section */}
      <FaqSection />

    </>
  );
}
