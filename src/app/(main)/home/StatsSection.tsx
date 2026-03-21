import Image from "next/image";
import { CenterCarouselSection } from "@/components/sections/center-carousel-section";

function StatCardYellow() {
  return (
    <div className="bg-primary rounded-3xl p-8 flex flex-col gap-4 w-full h-full text-foreground justify-center items-center text-center">
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
    <div className="bg-[#d4eef0] rounded-3xl p-8 flex flex-col gap-4 w-full h-full text-foreground justify-center items-center text-center">
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
      <Image
        src="/home/mom-and-son.jpg"
        alt="Famille heureuse dans leur maison rénovée"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 340px"
      />
    </div>
  );
}

const desktopGrid = (
  <div className="flex gap-5 items-stretch w-full max-w-5xl mx-auto px-6">
    <div className="flex-1 flex items-center py-10">
      <StatCardYellow />
    </div>
    <div className="relative h-125 w-85 shrink-0 rounded-3xl overflow-hidden bg-foreground">
      <Image
        src="/home/mom-and-son.jpg"
        alt="Famille heureuse dans leur maison rénovée"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 340px"
      />
    </div>
    <div className="flex-1 flex items-center py-10">
      <StatCardBlue />
    </div>
  </div>
);

export function StatsSection() {
  return (
    <CenterCarouselSection
      title="Chauffez mieux, payez moins. C'est possible."
      subtitle="Profitez d'équipements haut de gamme, livrés et installés chez vous, avec garantie incluse."
      primaryButtonLabel="Estimer mes économies"
      primaryButtonLink="/estimation"
      desktopLayout={desktopGrid}
    >
      <PhotoCard />
      <StatCardYellow />
      <StatCardBlue />
    </CenterCarouselSection>
  );
}
