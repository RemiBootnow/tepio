import { LogoSection as LogoSectionComponent } from "@/components/sections/logo-section";

const logos = [
  { src: "/icons/logo-rge.png", alt: "Certification RGE", width: 100 },
  { src: "/icons/logo-qualibois.png", alt: "Qualibois", width: 120 },
  { src: "/icons/logo-maprimerrenov.png", alt: "MaPrimeRénov'", width: 140 },
  { src: "/icons/logo-cee.png", alt: "Certificats d'Économies d'Énergie", width: 100 },
];

export function LogoSection() {
  return <LogoSectionComponent logos={logos} />;
}
