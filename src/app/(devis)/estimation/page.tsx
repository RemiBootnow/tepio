import { Metadata } from "next";
import Link from "next/link";
import { Flame, Thermometer, Wind, ChevronRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { Heading } from "@/components/ui/typography";
import { Logo } from "@/components/ui/logo";
import { TrustSection } from "@/components/forms/lead-form/TrustSection";
import { serviceLabels, serviceDescriptions, ServiceType } from "@/types/lead-form";

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
  canonical: "/estimation",
});

const serviceOptions: {
  value: ServiceType;
  label: string;
  description: string;
  icon: typeof Flame;
}[] = [
  {
    value: "poele-insert",
    label: serviceLabels["poele-insert"],
    description: serviceDescriptions["poele-insert"],
    icon: Flame,
  },
  {
    value: "pompe-a-chaleur",
    label: serviceLabels["pompe-a-chaleur"],
    description: serviceDescriptions["pompe-a-chaleur"],
    icon: Thermometer,
  },
  {
    value: "climatisation",
    label: serviceLabels["climatisation"],
    description: serviceDescriptions["climatisation"],
    icon: Wind,
  },
];

export default function DevisGratuitPage() {
  return (
    <div className="flex flex-col px-3 pb-3 pt-4 md:p-4 min-h-dvh">
      {/* Header with logo */}
      <header className="relative flex h-9 items-center justify-center mb-4 px-2 shrink-0">
        <Logo height={28} />
      </header>

      {/* White card container */}
      <div className="flex-1 rounded-3xl bg-background px-5 py-10 md:px-10 md:pb-12 md:pt-15 flex flex-col">
        <div className="w-full max-w-110 mx-auto flex-1">
          <div className="space-y-6">
            <div className="text-center">
              <Heading as="h2" className="mb-2">
                Que recherchez-vous ?
              </Heading>
              <p className="text-muted-foreground">
                Sélectionnez le type d&apos;installation
              </p>
            </div>

            <div className="space-y-3">
              {serviceOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <Link
                    key={option.value}
                    href={`/estimation/${option.value}`}
                    className="flex w-full items-center gap-4 rounded-3xl border border-border bg-background p-4 text-left transition-all hover:border-border-hover hover:shadow-sm active:scale-[0.99]"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block font-medium text-foreground">
                        {option.label}
                      </span>
                      <span className="block text-sm text-muted-foreground">
                        {option.description}
                      </span>
                    </div>
                    <ChevronRight className="size-5 text-muted-foreground shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <TrustSection />
      </div>
    </div>
  );
}
