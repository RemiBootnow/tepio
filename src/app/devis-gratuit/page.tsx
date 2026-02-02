import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Devis Gratuit",
  description:
    "Demandez votre devis gratuit pour l'installation de pompe à chaleur, poêle à bois, poêle à granulés ou climatisation. Réponse sous 48h.",
  keywords: [
    "devis gratuit",
    "devis pompe à chaleur",
    "devis poêle à bois",
    "devis climatisation",
    "estimation travaux",
  ],
  canonical: "/devis-gratuit",
});

export default function DevisGratuitPage() {
  return (
    <div className="container py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-heading font-bold mb-6">
          Demandez votre devis gratuit
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Le formulaire de demande de devis sera bientôt disponible. En
          attendant, vous pouvez nous contacter directement.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contactez-nous</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button size="lg" className="w-full" asChild>
              <a href={`tel:${siteConfig.business.phone.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                {siteConfig.business.phone}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full" asChild>
              <a href={`mailto:${siteConfig.business.email}`}>
                {siteConfig.business.email}
              </a>
            </Button>
          </CardContent>
        </Card>

        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
        </Button>
      </div>
    </div>
  );
}
