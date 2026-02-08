import Link from "next/link";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/typography";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/config/site";
import { APP_NAME } from "@/lib/constants";
import {
  ArrowRight,
  Phone,
  Thermometer,
  Flame,
  Wind,
  CheckCircle,
  Euro,
} from "lucide-react";

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
      <Section background="bg-muted" className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            Artisans RGE certifiés
          </Badge>
          <Heading as="h1" className="mb-6">
            Votre projet commence ici
          </Heading>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pompes à chaleur, poêles à bois et granulés, climatisation.
            Obtenez un devis gratuit et bénéficiez des aides MaPrimeRénov&apos;.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/estimation">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${siteConfig.business.phone.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                {siteConfig.business.phone}
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-medium mb-4">
              Nos Solutions de Chauffage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des solutions adaptées à votre logement et votre budget, installées
              par des artisans RGE qualifiés.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pompe à Chaleur */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-medium text-lg mb-2">
                  Pompe à Chaleur
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Air-air ou air-eau, économisez jusqu&apos;à 70% sur votre
                  facture de chauffage.
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary" asChild>
                  <Link href="/pompe-a-chaleur">
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Poêle à Bois */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-medium text-lg mb-2">
                  Poêle à Bois
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Chauffage économique et écologique avec une ambiance
                  chaleureuse.
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary" asChild>
                  <Link href="/poele-a-bois">
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Poêle à Granulés */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-medium text-lg mb-2">
                  Poêle à Granulés
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Automatique et performant, le confort du bois sans
                  contraintes.
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary" asChild>
                  <Link href="/poele-a-granules">
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Climatisation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-medium text-lg mb-2">
                  Climatisation
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Systèmes réversibles pour votre confort été comme hiver.
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary" asChild>
                  <Link href="/climatisation">
                    En savoir plus
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
      </Section>

      {/* Benefits Section */}
      <Section background="bg-muted" className="py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-medium mb-4">
              Pourquoi choisir {APP_NAME} ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un accompagnement complet pour votre projet de rénovation
              énergétique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-heading font-medium mb-2">Artisans RGE</h3>
              <p className="text-muted-foreground text-sm">
                Tous nos installateurs sont certifiés RGE pour garantir la
                qualité.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Euro className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-heading font-medium mb-2">
                Aides financières
              </h3>
              <p className="text-muted-foreground text-sm">
                Accompagnement pour MaPrimeRénov&apos;, CEE et autres
                subventions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-heading font-medium mb-2">Devis gratuit</h3>
              <p className="text-muted-foreground text-sm">
                Étude personnalisée sans engagement en moins de 48h.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-heading font-medium mb-2">Garantie 10 ans</h3>
              <p className="text-muted-foreground text-sm">
                Tranquillité d&apos;esprit avec notre garantie décennale.
              </p>
            </div>
          </div>
      </Section>

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
