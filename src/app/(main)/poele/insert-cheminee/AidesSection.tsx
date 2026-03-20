import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function AidesSection() {
  return (
    <FeaturesSection
      title="Des aides pour financer votre insert cheminée"
      subtitle="Plusieurs dispositifs réduisent le coût de votre projet. Un artisan RGE est indispensable pour en bénéficier."
      colorMode="dark"
    >
      <FeatureCard
        icon="check-verified"
        title="MaPrimeRénov'"
        description="Une aide de l'État calculée selon vos revenus et le gain énergétique. Elle couvre une part importante du coût de l'insert et de la pose."
        colorMode="dark"
      />
      <FeatureCard
        icon="lightning"
        title="Prime CEE"
        description="Les fournisseurs d'énergie financent une partie de vos travaux via les Certificats d'Économies d'Énergie. Cumulable avec MaPrimeRénov'."
        colorMode="dark"
      />
      <FeatureCard
        icon="building"
        title="TVA réduite à 5,5 %"
        description="La fourniture et la pose d'un insert par un professionnel RGE bénéficient d'une TVA à taux réduit, appliquée directement sur la facture."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
