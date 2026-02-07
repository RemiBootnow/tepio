import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, Home, Clock } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/typography";
import { siteConfig } from "@/config/site";
import { APP_NAME } from "@/lib/constants";
import { ServiceType, serviceLabels } from "@/types/lead-form";

const validServices: ServiceType[] = [
  "pompe-a-chaleur",
  "poele-insert",
  "climatisation",
];

function isValidService(service: string): service is ServiceType {
  return validServices.includes(service as ServiceType);
}

interface ConfirmationPageProps {
  params: Promise<{
    service: string;
  }>;
}

export async function generateMetadata({
  params,
}: ConfirmationPageProps): Promise<Metadata> {
  const { service } = await params;

  if (!isValidService(service)) {
    return generatePageMetadata({
      title: "Page non trouvée",
      description: "Cette page n'existe pas.",
      noIndex: true,
    });
  }

  return generatePageMetadata({
    title: `Demande Envoyée - ${serviceLabels[service]}`,
    description: "Votre demande de devis a été envoyée avec succès.",
    noIndex: true,
  });
}

const nextSteps = [
  {
    icon: Clock,
    title: "Réponse sous 48h",
    description:
      "Un conseiller analyse votre demande et prépare une réponse personnalisée.",
  },
  {
    icon: Phone,
    title: "Appel de qualification",
    description:
      "Nous vous appelons pour affiner votre projet et répondre à vos questions.",
  },
  {
    icon: Home,
    title: "Visite technique",
    description:
      "Un technicien se déplace gratuitement pour évaluer votre installation.",
  },
];

export default async function ConfirmationPage({
  params,
}: ConfirmationPageProps) {
  const { service } = await params;

  if (!isValidService(service)) {
    notFound();
  }

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
              Merci pour votre confiance. Votre demande de devis{" "}
              <strong>{serviceLabels[service].toLowerCase()}</strong> a bien été
              enregistrée et un conseiller {APP_NAME} vous contactera très
              prochainement.
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
                  <a
                    href={`tel:${siteConfig.business.phone.replace(/\s/g, "")}`}
                  >
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
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
