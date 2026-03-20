import { Check } from "@untitledui-pro/icons/line";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroSection as HeroSectionBase } from "@/components/sections/hero-section";

// @IMAGE hero-poster.jpg
//   CONTEXT: Hero section for MaPrimeRénov stove aid page. Beige wall, woman reviewing aid documents on laptop.
//   PROMPT: A minimalist Scandinavian living room, camera facing the wall straight-on at low height. The left 60% of the frame is an empty warm beige wall (similar to #FAF6F1) with nothing on it — just a clean bare surface seen head-on. In the center-right area of the frame (not filling the entire right half, but a compact vertical zone around 65–85% from the left edge), a young woman in casual clothes sitting on a light wooden chair at a small desk, reviewing official documents on a MacBook laptop, a few printed forms and a coffee cup beside her on the desk. She is surrounded by breathing room on both sides — she does not touch the right edge. Light oak parquet floor running across the entire image with a white baseboard between the floor and the wall. The wall extends beyond the left edge and top of the frame — no window, no corner, no side wall on the left, no ceiling visible. Soft natural light from both sides. The room is spacious and uncluttered. Photorealistic, editorial lifestyle photography, 16:9 landscape format, shallow depth of field, no diagonal perspective.

const checkItems = [
  "Jusqu'à 2 500 € pour un poêle à granulés",
  "Cumulable avec la prime CEE",
  "Artisan RGE certifié obligatoire",
];

export function HeroSection() {
  return (
    <HeroSectionBase
      posterSrc="/aides/ma-prime-renov-poele/hero-poster.jpg"
      posterMobileSrc="/aides/ma-prime-renov-poele/hero-poster-mobile.jpg"
      eyebrow={
        <Eyebrow variant="rating" rating={4.7} reviewCount={255} colorMode="light" />
      }
      title="MaPrimeRénov' poêle : montants, conditions et démarches"
      titleLevel={1}
      subtitle="Découvrez combien vous pouvez recevoir de l'État pour installer un poêle à bois ou à granulés chez vous."
      colorMode="light"
      gradientColor="beige"
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
    >
      <ul className="flex flex-col gap-2">
        {checkItems.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="size-5 text-primary shrink-0" />
            <span className="text-foreground text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </HeroSectionBase>
  );
}
