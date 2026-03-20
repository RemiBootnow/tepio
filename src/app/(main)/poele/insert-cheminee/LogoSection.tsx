import { LogoSection as LogoSectionComponent } from "@/components/sections/logo-section";

const logos = [
  { src: "/logo/logo-ma-prime-renov-full-size.png", alt: "MaPrimeRénov'", width: 206 },
  { src: "/icons/logo-rge.png", alt: "RGE – Reconnu Garant de l'Environnement", width: 100 },
  { src: "/logo/logo-cee-full-size.png", alt: "Certificats d'Économies d'Énergie", width: 138 },
  { src: "/logo/logo-republique-francaise-full-sie.png", alt: "République Française", width: 108 },
];

export function LogoSection() {
  return <LogoSectionComponent logos={logos} />;
}
