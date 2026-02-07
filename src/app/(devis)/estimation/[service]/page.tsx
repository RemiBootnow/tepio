import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { LeadForm } from "@/components/forms/lead-form";
import { ServiceType, serviceLabels } from "@/types/lead-form";

const validServices: ServiceType[] = [
  "pompe-a-chaleur",
  "poele-insert",
  "climatisation",
];

function isValidService(service: string): service is ServiceType {
  return validServices.includes(service as ServiceType);
}

const serviceMetadata: Record<ServiceType, { title: string; description: string }> = {
  "pompe-a-chaleur": {
    title: "Devis Pompe à Chaleur",
    description: "Demandez votre devis gratuit pour l'installation d'une pompe à chaleur. Économisez jusqu'à 70% sur votre facture de chauffage. Réponse sous 48h.",
  },
  "poele-insert": {
    title: "Devis Poêle à Bois ou Insert",
    description: "Demandez votre devis gratuit pour l'installation d'un poêle à bois, poêle à granulés ou insert. Chauffage écologique et économique. Réponse sous 48h.",
  },
  "climatisation": {
    title: "Devis Climatisation",
    description: "Demandez votre devis gratuit pour l'installation d'une climatisation réversible. Confort été comme hiver. Réponse sous 48h.",
  },
};

interface ServiceFormPageProps {
  params: Promise<{
    service: string;
  }>;
}

export async function generateMetadata({
  params,
}: ServiceFormPageProps): Promise<Metadata> {
  const { service } = await params;

  if (!isValidService(service)) {
    return generatePageMetadata({
      title: "Page non trouvée",
      description: "Cette page n'existe pas.",
      noIndex: true,
    });
  }

  return generatePageMetadata({
    title: serviceMetadata[service].title,
    description: serviceMetadata[service].description,
    canonical: `/estimation/${service}`,
  });
}

function LeadFormSkeleton() {
  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-110 mx-auto pt-20">
      <div className="space-y-3 w-full text-center">
        <div className="h-6 bg-muted rounded w-24 mx-auto" />
        <div className="h-10 bg-muted rounded w-3/4 mx-auto" />
      </div>
      <div className="space-y-3 w-full">
        <div className="h-17 bg-muted rounded-3xl" />
        <div className="h-17 bg-muted rounded-3xl" />
        <div className="h-17 bg-muted rounded-3xl" />
      </div>
    </div>
  );
}

export default async function ServiceFormPage({ params }: ServiceFormPageProps) {
  const { service } = await params;

  if (!isValidService(service)) {
    notFound();
  }

  return (
    <Suspense fallback={<LeadFormSkeleton />}>
      <LeadForm service={service} />
    </Suspense>
  );
}
