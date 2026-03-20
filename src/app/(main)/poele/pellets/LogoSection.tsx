import { LogoSection as LogoSectionComponent } from "@/components/sections/logo-section";

export function LogoSection() {
  return (
    <LogoSectionComponent
      logos={[
        { src: "/icons/logo-rge.png", alt: "Certification RGE", width: 100 },
        { src: "/icons/logo-maprimerenov.png", alt: "MaPrimeRénov'", width: 160 },
        { src: "/icons/logo-france-renov.png", alt: "France Rénov'", width: 130 },
        { src: "/icons/logo-qualibois.png", alt: "Qualibois", width: 100 },
      ]}
    />
  );
}
