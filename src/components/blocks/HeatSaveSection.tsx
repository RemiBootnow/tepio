import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";

export function HeatSaveSection() {
  return (
    <section className="bg-[#FAF6F1] overflow-hidden">

      {/* Text content — centered, negative margin pulls it over the image */}
      <div className="relative z-10 pt-16 md:pt-24 pb-10 md:pb-14 md:-mb-30">
        <div className="w-full max-w-3xl mx-auto px-5 min-[395px]:px-6 text-center flex flex-col items-center gap-6">
          <div className="flex flex-col gap-4">
            <Heading as="h2">
              Chauffez mieux.<br />Dépensez moins.
            </Heading>
            <p className="text-base text-[#678481] leading-6">
              Dans 80% des cas, les économies sur vos factures d&apos;énergie
              couvrent le montant des mensualités de votre installation.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/estimation">Estimer mon projet</Link>
          </Button>
        </div>
      </div>

      {/* Full-width image with gradient fades — desktop/tablet only */}
      <div className="relative hidden md:block">
        <Image
          src="/home/family.jpg"
          alt="Famille profitant de leur installation de chauffage"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
        {/* Top fade — blends image into section bg */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#FAF6F1] to-transparent pointer-events-none" />
        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-1/5 bg-linear-to-r from-[#FAF6F1] to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-1/5 bg-linear-to-l from-[#FAF6F1] to-transparent pointer-events-none" />
      </div>

    </section>
  );
}
