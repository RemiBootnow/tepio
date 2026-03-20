import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Pourquoi chauffer au bois en 2026 ?"
      subtitle="Le bois reste l'énergie de chauffage la moins chère en France. Un poêle à bois performant réduit vos factures tout en valorisant votre logement."
      colorMode="dark"
    >
      <FeatureCard
        icon="lightning"
        title="Rendement jusqu'à 85 %"
        description="Les poêles modernes à double combustion extraient un maximum de chaleur de chaque bûche, pour un confort optimal."
        colorMode="dark"
      />
      <FeatureCard
        icon="shield-check"
        title="Énergie la moins chère"
        description="Le bois-bûche coûte entre 70 et 100 € le stère. Comptez 500 à 1 000 € par an pour chauffer votre maison."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-verified"
        title="Éligible aux aides"
        description="MaPrimeRénov', CEE, TVA à 5,5 % et éco-PTZ : jusqu'à 4 000 € d'aides cumulées pour réduire votre investissement."
        colorMode="dark"
      />
      <FeatureCard
        icon="building"
        title="Valorise votre bien"
        description="Un poêle à bois améliore votre DPE et augmente la valeur de votre logement à la revente."
        colorMode="dark"
      />
      <FeatureCard
        icon="clock"
        title="Installation en 1 journée"
        description="Un artisan RGE installe votre poêle et réalise le tubage en une seule journée, sans travaux lourds."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-circle"
        title="Énergie renouvelable"
        description="Le bois est une ressource renouvelable et neutre en carbone. Vous chauffez votre maison sans alourdir votre empreinte."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
