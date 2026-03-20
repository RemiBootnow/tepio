import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { APP_NAME } from "@/lib/constants";

export function WhyUsSection() {
  return (
    <FeaturesSection
      title={`Votre poêle à bois installé par ${APP_NAME}`}
      subtitle="Un accompagnement complet, de l'estimation à la pose par un artisan certifié RGE."
    >
      <FeatureCard
        icon="user-circle"
        title="Conseiller dédié"
        description="Un expert étudie votre logement, vos besoins et votre budget pour vous recommander le poêle adapté."
      />
      <FeatureCard
        icon="check-verified"
        title="Artisan RGE certifié"
        description="Nos installateurs sont qualifiés RGE Qualibois, condition indispensable pour bénéficier des aides de l'État."
      />
      <FeatureCard
        icon="shield-check"
        title="Aides déduites du devis"
        description="Nous avançons vos aides MaPrimeRénov' et CEE : vous ne payez que le reste à charge, sans avance de trésorerie."
      />
    </FeaturesSection>
  );
}
