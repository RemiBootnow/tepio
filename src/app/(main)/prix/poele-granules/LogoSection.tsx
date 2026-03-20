import { LogoSection as LogoSectionComponent } from "@/components/sections/logo-section";

const logos = [
  { src: "/icons/logo-maprimenrenov.svg", alt: "MaPrimeRénov'", width: 160 },
  { src: "/icons/logo-rge.svg", alt: "Certification RGE", width: 80 },
  { src: "/icons/logo-cee.svg", alt: "Prime CEE", width: 120 },
  { src: "/icons/logo-flamme-verte.svg", alt: "Label Flamme Verte", width: 100 },
];

export function LogoSection() {
  return <LogoSectionComponent logos={logos} />;
}
