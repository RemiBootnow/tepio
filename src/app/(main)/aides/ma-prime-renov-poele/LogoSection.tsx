import { LogoSection as LogoSectionBase } from "@/components/sections/logo-section";

const logos = [
  { src: "/icons/logo-maprimerénov.png", alt: "MaPrimeRénov'", width: 160 },
  { src: "/icons/logo-rge.png", alt: "Certification RGE", width: 80 },
  { src: "/icons/logo-cee.png", alt: "Prime CEE", width: 120 },
  { src: "/icons/logo-anah.png", alt: "ANAH", width: 120 },
];

export function LogoSection() {
  return <LogoSectionBase logos={logos} />;
}
