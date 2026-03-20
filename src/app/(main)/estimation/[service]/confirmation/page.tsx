import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Mail01 } from "@untitledui-pro/icons/line";
import { CheckCircle } from "@untitledui-pro/icons/solid";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { siteConfig } from "@/config/site";
import { APP_NAME } from "@/lib/constants";
import type { ServiceType } from "@/types/lead-form";
import { serviceLabels } from "@/types/lead-form";

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

export default async function ConfirmationPage({
  params,
}: ConfirmationPageProps) {
  const { service } = await params;

  if (!isValidService(service)) {
    notFound();
  }

  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success icon */}
        <CheckCircle className="size-12 text-foreground mx-auto mb-6" />

        <Heading as="h1" className="mb-4">
          Vous êtes éligibles aux aides de l&apos;état !
        </Heading>
        <p className="text-lg text-muted-foreground mb-12">
          Merci pour votre confiance. Votre demande de devis{" "}
          <strong>{serviceLabels[service].toLowerCase()}</strong> a bien été
          enregistrée et un conseiller {APP_NAME} vous contactera très
          prochainement.
        </p>

        {/* Contact + CTA */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">Une question urgente ?</p>
          <Button variant="neutral-soft" asChild>
            <a href={`mailto:${siteConfig.business.email}`}>
              <Mail01 className="size-4" />
              {siteConfig.business.email}
            </a>
          </Button>
          <Button variant="primary" size="lg" className="mt-4" asChild>
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
