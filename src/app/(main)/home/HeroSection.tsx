import { Check } from "@untitledui-pro/icons/line";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

const checkItems = [
  "Jusqu'à 2050€ d'aides de l'Etat",
  "L'hiver au chaud, à moins de 50€/mois",
  "Installé en 1 jour",
];

export function HeroSection() {
  return (
    <HeroSectionBase
      videoSrc="/home/hero/hero.mp4"
      videoMobileSrc="/home/hero/hero-mobile.mp4"
      posterSrc="/home/hero/hero-poster.jpg"
      posterMobileSrc="/home/hero/hero-poster-mobile.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="dark" />
      }
      title="Améliorez votre confort et faites des économies"
      titleLevel={1}
      colorMode="dark"
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
    >
      <ul className="flex flex-col gap-2">
        {checkItems.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="size-5 text-primary shrink-0" />
            <span className="text-white text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </HeroSectionBase>
  );
}
