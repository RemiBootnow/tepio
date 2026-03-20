import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function WhyUsSection() {
  return (
    <FeaturesSection
      title="Un accompagnement complet pour votre projet"
    >
      <FeatureCard
        icon="check-circle"
        title="Artisans certifiés RGE"
        description="Tous nos installateurs sont qualifiés RGE Qualibois, condition indispensable pour bénéficier des aides de l'État."
      />
      <FeatureCard
        icon="user-circle"
        title="Un conseiller dédié"
        description="Votre interlocuteur unique vous guide de l'estimation des aides jusqu'à la mise en service de votre poêle à pellets."
      />
      <FeatureCard
        icon="shield-check"
        title="Garantie et suivi"
        description="Garantie constructeur, SAV réactif et contrat d'entretien annuel pour un fonctionnement optimal sur le long terme."
      />
    </FeaturesSection>
  );
}
