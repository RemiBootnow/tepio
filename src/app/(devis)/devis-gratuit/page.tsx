import { Metadata } from "next";
import { Suspense } from "react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { LeadForm } from "@/components/forms/lead-form";

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

function LeadFormSkeleton() {
  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-[440px] mx-auto">
      <div className="space-y-3 w-full text-center">
        <div className="h-6 bg-muted rounded w-24 mx-auto" />
        <div className="h-10 bg-muted rounded w-3/4 mx-auto" />
      </div>
      <div className="space-y-3 w-full">
        <div className="h-[68px] bg-muted rounded-3xl" />
        <div className="h-[68px] bg-muted rounded-3xl" />
        <div className="h-[68px] bg-muted rounded-3xl" />
      </div>
    </div>
  );
}

export default function DevisGratuitPage() {
  return (
    <Suspense fallback={<LeadFormSkeleton />}>
      <LeadForm />
    </Suspense>
  );
}
