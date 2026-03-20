import { LogoSection as LogoSectionBase, type LogoItem } from "@/components/sections/logo-section";

const logos: LogoItem[] = [
  { src: "/logo/logo-eco-pret-full-size.png", alt: "Eco-pret a taux zero", width: 169 },
  { src: "/logo/logo-republique-francaise-full-sie.png", alt: "Republique Francaise", width: 108 },
  { src: "/logo/logo-cee-full-size.png", alt: "CEE - Les certificats d'economies d'energie", width: 138 },
  { src: "/logo/logo-ma-prime-renov-full-size.png", alt: "MaPrimeRenov'", width: 206 },
];

export function LogoSection() {
  return <LogoSectionBase logos={logos} />;
}
