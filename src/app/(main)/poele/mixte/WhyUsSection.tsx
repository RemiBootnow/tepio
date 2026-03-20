import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { APP_NAME } from "@/lib/constants";

export function WhyUsSection() {
  return (
    <FeaturesSection
      title={`Pourquoi installer votre poele mixte avec ${APP_NAME} ?`}
      subtitle="Un accompagnement complet, de la premiere visite a la mise en service."
    >
      <FeatureCard
        icon="user-circle"
        title="Visite technique gratuite"
        description="Un technicien se deplace chez vous pour evaluer la faisabilite et dimensionner le poele adapte a votre logement."
      />
      <FeatureCard
        icon="check-verified"
        title="Artisans certifies RGE"
        description="Tous nos installateurs sont qualifies RGE, condition indispensable pour beneficier des aides de l'Etat."
      />
      <FeatureCard
        icon="shield-check"
        title="Aides deduites directement"
        description="Nous deduisons MaPrimeRenov' et la prime CEE de votre facture. Vous ne payez que le reste a charge."
      />
    </FeaturesSection>
  );
}
