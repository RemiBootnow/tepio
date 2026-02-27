import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { BadgeCheck, Building2, MapPin } from "lucide-react";

export function NetworkSection() {
  return (
    <section className="bg-background py-16 md:py-30">
      <div className="w-full max-w-5xl mx-auto px-5 min-[395px]:px-6 flex flex-col gap-8 items-center">

        {/* Header — left on mobile, centered on desktop */}
        <div className="flex flex-col gap-8 items-start md:items-center md:text-center w-full">
          <div className="flex flex-col gap-4 md:max-w-150">
            <Heading as="h2">
              Un réseau d&apos;entreprises locales ultra-qualifiés
            </Heading>
            <p className="text-base md:text-xl text-[#678481] leading-6 md:leading-7">
              Une fois votre projet défini, nous vous mettons en relation avec 2 à
              3 artisans RGE certifiés, sélectionnés dans votre région, pour
              obtenir des devis adaptés et comparables.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/estimation">Devenir partenaire</Link>
          </Button>
        </div>

        {/* Photo with bottom white fade — bottom corners rounded only */}
        <div className="relative w-full h-65.25 md:h-100 overflow-hidden rounded-b-3xl">
          <Image
            src="/home/companies-network/handshake.jpg"
            alt="Artisan RGE certifié rencontrant ses clients"
            fill
            className="object-cover object-center"
          />

        </div>

        {/* Feature cards — stacked on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row gap-5 w-full">

          {/* Card 1 — Yellow */}
          <div className="flex-1 bg-primary rounded-3xl p-6 flex flex-col gap-6">
            <BadgeCheck className="w-6 h-6 text-foreground shrink-0" />
            <div className="flex flex-col gap-4">
              <p className="font-medium text-[22px] leading-7 text-foreground">
                Certification RGE
              </p>
              <p className="text-base leading-6 text-foreground">
                Nous garantissons que notre certification RGE est à jour pour
                assurer des travaux de qualité.
              </p>
            </div>
          </div>

          {/* Card 2 — Light blue */}
          <div className="flex-1 bg-[#d4eef0] rounded-3xl p-6 flex flex-col gap-6">
            <Building2 className="w-6 h-6 text-foreground shrink-0" />
            <div className="flex flex-col gap-2">
              <p className="font-medium text-[22px] leading-7 text-foreground">
                Produits de qualité
              </p>
              <p className="text-base leading-6 text-foreground">
                Nous sélectionnons uniquement des entreprises qui utilisent des
                équipements de qualité, facile d&apos;entretien et réparation.
              </p>
            </div>
          </div>

          {/* Card 3 — Dark green */}
          <div className="flex-1 bg-[#01322d] rounded-3xl p-6 flex flex-col gap-6">
            <MapPin className="w-6 h-6 text-white shrink-0" />
            <div className="flex flex-col gap-2">
              <p className="font-medium text-[22px] leading-7 text-white">
                Réactivité
              </p>
              <p className="text-base leading-6 text-white">
                Nous valorisons la réactivité des artisans pour un service rapide
                et efficace lors de la pose.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
