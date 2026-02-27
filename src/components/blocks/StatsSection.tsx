import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { Carousel } from "@/components/ui/carousel";

function StatCardYellow() {
  return (
    <div className="bg-primary rounded-3xl p-8 flex flex-col gap-4 w-full h-full text-foreground">
      <div className="flex flex-col gap-4">
        <p className="font-heading font-bold tracking-[-1px]">
          <span className="text-[80px] leading-none">50€</span>
          <span className="text-2xl leading-none">/mois</span>
        </p>
        <p className="font-heading font-medium text-xl leading-6 tracking-[-0.5px]">
          Montant moyen de votre facture de chauffage.
        </p>
      </div>
    </div>
  );
}

function StatCardBlue() {
  return (
    <div className="bg-[#d4eef0] rounded-3xl p-8 flex flex-col gap-4 w-full h-full text-foreground">
      <div className="flex flex-col gap-4">
        <p className="font-heading font-bold text-[80px] leading-none tracking-[-1px]">
          850€
        </p>
        <p className="font-heading font-medium text-xl leading-6 tracking-[-0.5px]">
          D&apos;aides en moyenne sur l&apos;installation.
        </p>
      </div>
    </div>
  );
}

function PhotoCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden w-full h-full bg-foreground">
      {/* Replace /stats/family.jpg with the actual photo */}
      <img
        src="/stats/family.jpg"
        alt="Famille heureuse dans leur maison rénovée"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-background pt-16 pb-16 md:pt-20 md:pb-30">

      {/* Header — left on mobile, centered on desktop */}
      <div className="px-5 min-[395px]:px-6 md:px-0 flex flex-col gap-8 items-start md:items-center">
        <div className="flex flex-col gap-4 w-full md:max-w-180 md:mx-auto md:text-center">
          <Heading as="h2">
            Chauffez mieux, payez moins. C&apos;est possible.
          </Heading>
          <p className="text-base text-muted-foreground leading-6">
            Profitez d&apos;équipements haut de gamme, livrés et installés chez
            vous, avec garantie incluse.
          </p>
        </div>
        <Button asChild variant="neutral" className="rounded-full" size="lg">
          <Link href="/estimation">Estimer mes économies</Link>
        </Button>
      </div>

      {/* Mobile + tablet (< 1024px): carousel */}
      <div className="mt-10 lg:hidden">
        <Carousel variant="left-aligned">
          <PhotoCard />
          <StatCardYellow />
          <StatCardBlue />
        </Carousel>
      </div>

      {/* Desktop (≥ 1024px): static 3-column layout, centered */}
      {/*
        Center card: 500px × 340px photo
        Side cards: stretch to full row height (500px), then py-10 makes inner card 420px
      */}
      <div className="hidden lg:flex gap-5 items-stretch mt-10 w-full max-w-5xl mx-auto px-6">

        <div className="flex-1 flex items-center py-10">
          <StatCardYellow />
        </div>

        <div className="relative h-125 w-85 shrink-0 rounded-3xl overflow-hidden bg-foreground">
          <img
            src="/stats/family.jpg"
            alt="Famille heureuse dans leur maison rénovée"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex items-center py-10">
          <StatCardBlue />
        </div>

      </div>

    </section>
  );
}
