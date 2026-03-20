import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function EligibilitySection() {
  return (
    <FeaturesSection
      title="3 conditions pour être éligible"
      subtitle="La prime énergie CEE est accessible à tous les ménages, sans plafond de revenus. Vérifiez simplement ces critères."
    >
      <FeatureCard
        icon="building"
        title="Logement de plus de 2 ans"
        description="Votre maison ou appartement doit être construit depuis au moins 2 ans et être votre résidence principale ou secondaire."
      />
      <FeatureCard
        icon="check-verified"
        title="Artisan certifié RGE"
        description="L'installation doit être réalisée par un professionnel RGE (Reconnu Garant de l'Environnement) pour valider votre dossier."
      />
      <FeatureCard
        icon="shield-check"
        title="Équipement performant"
        description="Le poêle doit afficher un rendement énergétique supérieur ou égal à 75 % et respecter les seuils d'émissions de particules."
      />
    </FeaturesSection>
  );
}
