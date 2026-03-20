import { LogoSection as LogoSectionBase, type LogoItem } from "@/components/sections/logo-section";

const logos: LogoItem[] = [
  { src: "/logo/logo-eco-pret-full-size.png", alt: "Éco-prêt à taux zéro", width: 169 },
  { src: "/logo/logo-republique-francaise-full-sie.png", alt: "République Française", width: 108 },
  { src: "/logo/logo-cee-full-size.png", alt: "CEE — Les certificats d'économies d'énergie", width: 138 },
  { src: "/logo/logo-ma-prime-renov-full-size.png", alt: "MaPrimeRénov'", width: 206 },
];

export function LogoSection() {
  return <LogoSectionBase logos={logos} />;
}
