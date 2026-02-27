import Link from "next/link";
import { Star, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";

const HERO_IMAGE_URL = "/home/hero/hero-poster.jpg";
const HERO_IMAGE_MOBILE_URL = "/home/hero/hero-poster-mobile.jpg";

const checkItems = [
  "Jusqu'à 2050€ d'aides de l'Etat",
  "L'hiver au chaud, à moins de 50€/mois",
  "Installé en 1 jour",
];

export function HeroSection() {
  return (
    <section className="relative w-full h-[120vh] md:h-screen -mt-17 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Desktop video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_IMAGE_URL}
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home/hero/hero.mp4" type="video/mp4" />
        </video>
        {/* Mobile video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_IMAGE_MOBILE_URL}
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home/hero/hero-mobile.mp4" type="video/mp4" />
        </video>
        {/* Desktop gradient: left to right */}
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background:
              "linear-gradient(89deg, rgba(1,50,45,0.85) 0%, rgba(1,50,45,0.7) 37%, rgba(1,50,45,0.1) 65%, rgba(1,50,45,0) 80%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-5xl px-4 min-[375px]:px-5 min-[395px]:px-6 h-full flex items-start md:items-center">
        <div className="flex flex-col gap-10 max-w-130 pt-22 md:py-24">

          <div className="flex flex-col gap-6">
            {/* Stars + rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-white text-lg">4,7 sur 255 avis</span>
            </div>

            {/* Headline */}
            <Heading as="h1" className="text-white">
              Améliorez votre confort et faites des économies
            </Heading>

            {/* Checklist */}
            <ul className="flex flex-col gap-2">
              {checkItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-5 text-primary shrink-0" />
                  <span className="text-white text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-2 items-start">
            <Button size="lg" asChild>
              <Link href="/estimation">Estimer mon projet</Link>
            </Button>
            <div className="flex items-center gap-1.5 text-white/70">
              <Clock className="size-3.5 shrink-0" />
              <span className="text-sm">
                Env. <span className="font-medium">1min</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
