import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { UserCircle, MapPin, CheckCircle, Zap, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: UserCircle,
    title: "Un expert dédié",
    description:
      "Un interlocuteur unique qui vous guide et s'occupe de toutes les démarches, sans aucun frais.",
  },
  {
    icon: MapPin,
    title: "L'excellence locale",
    description:
      "Un réseau d'installateurs RGE triés sur le volet, posant exclusivement du matériel haut de gamme.",
  },
  {
    icon: CheckCircle,
    title: "Zéro avance de frais",
    description:
      "Un devis clair et les aides de l'État directement déduites du montant à payer.",
  },
  {
    icon: Zap,
    title: "Installation express",
    description:
      "Une intervention propre et rapide, réalisée en 1 à 2 jours seulement.",
  },
  {
    icon: ShieldCheck,
    title: "SAV et entretien",
    description:
      "Jusqu'à 10 ans de garantie sur le matériel et la pose. De quoi dormir sur vos deux oreilles.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/5 rounded-3xl p-6 flex flex-col gap-6 h-full">
      <Icon className="w-6 h-6 text-white shrink-0" />
      <div className="flex flex-col gap-2">
        <p className="font-medium text-[22px] leading-8 text-white">{title}</p>
        <p className="text-base leading-6 text-white">{description}</p>
      </div>
    </div>
  );
}

export function WhyUsSection() {
  return (
    <section className="relative bg-[#01322d] py-16 md:py-30 overflow-hidden">
      {/* Subtle radial glow decoration */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1331px] h-[425px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(4,100,80,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 min-[395px]:px-6 flex flex-col gap-10 md:gap-20 items-center">

        {/* Header */}
        <div className="flex flex-col gap-8 items-start md:items-center md:text-center w-full">
          <div className="flex flex-col gap-4 md:max-w-[600px]">
            <Heading as="h2" className="text-white">
              Votre poêle, bien choisi, bien installé
            </Heading>
            <p className="text-base text-white leading-6">
              Vous avez peur des devis incompréhensibles, des artisans qui ne
              rappellent pas ou des dossiers d&apos;aides rejetés&nbsp;? Du jargon
              technique.. On vous vend des kW sans vous écouter.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/estimation">Estimer mon projet</Link>
          </Button>
        </div>

        {/* Feature cards */}
        <div className="flex flex-col gap-5 w-full">
          {/* Row 1: 3 cards */}
          <div className="flex flex-col md:flex-row gap-5">
            {features.slice(0, 3).map((f) => (
              <div key={f.title} className="flex-1">
                <FeatureCard {...f} />
              </div>
            ))}
          </div>
          {/* Row 2: 2 cards (wider since only 2 in a row) */}
          <div className="flex flex-col md:flex-row gap-5">
            {features.slice(3).map((f) => (
              <div key={f.title} className="flex-1">
                <FeatureCard {...f} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
