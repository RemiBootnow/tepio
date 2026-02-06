import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, Home, Clock } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/typography";
import { siteConfig } from "@/config/site";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Demande Envoyée",
  description: "Votre demande de devis a été envoyée avec succès.",
  noIndex: true,
});

const nextSteps = [
  {
    icon: Clock,
    title: "Réponse sous 48h",
    description: "Un conseiller analyse votre demande et prépare une réponse personnalisée.",
  },
  {
    icon: Phone,
    title: "Appel de qualification",
    description: "Nous vous appelons pour affiner votre projet et répondre à vos questions.",
  },
  {
    icon: Home,
    title: "Visite technique",
    description: "Un technicien se déplace gratuitement pour évaluer votre installation.",
  },
];

export default function ConfirmationPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success message */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <Heading as="h1" className="mb-4">
              Demande envoyée avec succès !
            </Heading>
            <p className="text-lg text-muted-foreground">
              Merci pour votre confiance. Votre demande a bien été enregistrée
              et un conseiller {APP_NAME} vous contactera très prochainement.
            </p>
          </div>

          {/* Next steps */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="font-medium text-lg mb-6">Prochaines étapes</h2>
              <div className="space-y-6">
                {nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 text-left">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact options */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="font-medium text-lg mb-4">Une question urgente ?</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1" asChild>
                  <a href={`tel:${siteConfig.business.phone.replace(/\s/g, "")}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {siteConfig.business.phone}
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href={`mailto:${siteConfig.business.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {siteConfig.business.email}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Back to home */}
          <Button size="lg" asChild>
            <Link href="/">
              Retour à l&apos;accueil
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
