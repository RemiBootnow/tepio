import Link from "next/link";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/config/site";
import { APP_NAME } from "@/lib/constants";
import { HeroSection } from "@/components/blocks/HeroSection";
import { LogoSection } from "@/components/blocks/LogoSection";
import { StatsSection } from "@/components/blocks/StatsSection";
import { ProcessSection } from "@/components/blocks/ProcessSection";
import { WhyUsSection } from "@/components/blocks/WhyUsSection";
import { NetworkSection } from "@/components/blocks/NetworkSection";
import { ZigZagSection } from "@/components/ui/zig-zag-section";
import { ServiceSection } from "@/components/blocks/ServiceSection";
import { HeatSaveSection } from "@/components/blocks/HeatSaveSection";
import { FaqSection } from "@/components/blocks/FaqSection";
import { TestimonialsSection } from "@/components/blocks/TestimonialsSection";
import { ArrowRight, Phone } from "lucide-react";

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
      <ZigZagSection
        imageSrc="/home/help.png"
        imageAlt="Illustration des aides pour votre projet"
        imagePosition="left"
        imageBg="bg-primary"
        title="Jusqu'à 2050€ d'aides cumulés"
        description="MaPrimeRénov', Certificats d'Économie d'Énergie (CEE) et aides locales. Profitez des aides pour financer jusqu'à 50% de votre projet."
        cta={{ label: "Estimer mon projet", href: "/estimation" }}
      />

      {/* Rentabilité Section */}
      <ZigZagSection
        imageSrc="/home/edf-invoices.png"
        imageAlt="Factures EDF avant et après installation"
        imagePosition="right"
        imageBg="bg-[#d4eef0]"
        title="Rentabilité immédiate"
        description="Dans 80% des cas, les économies sur vos factures d'énergie couvrent le montant des mensualités de votre installation."
        cta={{ label: "Estimer mon projet", href: "/estimation" }}
      />

      {/* Service Section */}
      <ServiceSection />

      {/* Heat Save Section */}
      <HeatSaveSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <Section background="bg-primary" className="py-20 text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-medium mb-4">
              Prêt à réduire votre facture énergétique ?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Obtenez un devis gratuit en 2 minutes et découvrez les aides
              auxquelles vous avez droit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-primary hover:bg-background/90"
                asChild
              >
                <Link href="/estimation">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href={`tel:${siteConfig.business.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Nous appeler
                </a>
              </Button>
            </div>
          </div>
      </Section>
    </>
  );
}
