import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { APP_NAME } from "@/lib/constants";

export function ServiceSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="w-full max-w-5xl mx-auto px-5 min-[395px]:px-6">

        {/* Mobile: text on top, image below */}
        <div className="flex flex-col gap-10 md:hidden">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Heading as="h2">Le service {APP_NAME}</Heading>
              <p className="text-base text-[#678481] leading-6">
                Pas de multiples appels. Un conseiller analyse votre situation,
                vous explique les options disponibles et calcule les aides
                auxquelles vous avez droit. Entièrement gratuit.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full w-fit">
              <Link href="/estimation">Estimer mon projet</Link>
            </Button>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/home/Worker.jpg"
              alt={`Conseiller ${APP_NAME} à son bureau`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Desktop/Tablet: side by side */}
        <div className="hidden md:flex h-130 my-8">
          {/* Left: yellow accent bar + image */}
          <div className="flex items-center w-[48%] shrink-0">
            {/* Accent bar wrapper: full height, py-8 gives 32px inset top/bottom */}
            <div className="h-full py-16">
              <div className="bg-primary w-12 h-full rounded-l-3xl shrink-0" />
            </div>
            {/* Image: fills remaining width, full height */}
            <div className="relative flex-1 h-full rounded-3xl overflow-hidden">
              <Image
                src="/home/Worker.jpg"
                alt={`Conseiller ${APP_NAME} à son bureau`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right: yellow content panel */}
          <div className="flex-1 h-full py-16">
            <div className="bg-primary h-full rounded-r-3xl flex flex-col justify-center gap-8 px-12 py-16">
              <div className="flex flex-col gap-4">
                <Heading as="h2">Le service {APP_NAME}</Heading>
                <p className="text-base text-foreground leading-6">
                  Pas de multiples appels. Un conseiller analyse votre situation,
                  vous explique les options disponibles et calcule les aides
                  auxquelles vous avez droit. Entièrement gratuit.
                </p>
              </div>
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full w-fit">
                <Link href="/estimation">Estimer mon projet</Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
