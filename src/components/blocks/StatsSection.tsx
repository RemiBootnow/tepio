import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { Carousel } from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";

export function StatsSection() {
  return (
    <section className="bg-background py-20 md:pt-20 md:pb-30 flex flex-col gap-10">

      {/* Header — standard container */}
      <div className="mx-auto w-full max-w-5xl px-4 min-[375px]:px-5 min-[395px]:px-6">
        <div className="flex flex-col gap-4 items-center text-center max-w-lg mx-auto">
          <Heading as="h2">
            Chauffez mieux, payez moins. C&apos;est possible.
          </Heading>
          <p className="text-base text-muted-foreground leading-6">
            Profitez d&apos;équipements haut de gamme, livrés et installés chez
            vous, avec garantie incluse.
          </p>
          <Button asChild className="mt-2 rounded-full" size="lg">
            <Link href="/estimation">Estimer mes économies</Link>
          </Button>
        </div>
      </div>

      {/* Cards — center */}
      <div className="w-full">
        <Carousel>
          <div className="bg-red-400 rounded-3xl w-full h-full" />
          <div className="bg-blue-400 rounded-3xl w-full h-full" />
          <div className="bg-green-400 rounded-3xl w-full h-full" />
          <div className="bg-yellow-400 rounded-3xl w-full h-full" />
          <div className="bg-purple-400 rounded-3xl w-full h-full" />
        </Carousel>
      </div>

      {/* Cards — left-aligned */}
      <div className="w-full">
        <Carousel variant="left-aligned">
          <div className="bg-red-400 rounded-3xl w-full h-full" />
          <div className="bg-blue-400 rounded-3xl w-full h-full" />
          <div className="bg-green-400 rounded-3xl w-full h-full" />
          <div className="bg-yellow-400 rounded-3xl w-full h-full" />
          <div className="bg-purple-400 rounded-3xl w-full h-full" />
        </Carousel>
      </div>

      {/* Cards — left-aligned, 3 cards */}
      <div className="w-full">
        <Carousel variant="left-aligned">
          <div className="bg-red-400 rounded-3xl w-full h-full" />
          <div className="bg-blue-400 rounded-3xl w-full h-full" />
          <div className="bg-green-400 rounded-3xl w-full h-full" />
        </Carousel>
      </div>

      {/* Slider — CSS scroll snap on mobile */}
      <div className="w-full">
        <Slider variant="left-aligned">
          <div className="bg-red-400 rounded-3xl w-full h-full" />
          <div className="bg-blue-400 rounded-3xl w-full h-full" />
          <div className="bg-green-400 rounded-3xl w-full h-full" />
          <div className="bg-yellow-400 rounded-3xl w-full h-full" />
          <div className="bg-purple-400 rounded-3xl w-full h-full" />
        </Slider>
      </div>

    </section>
  );
}
