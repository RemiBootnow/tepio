import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Les avantages du poêle à pellets"
      subtitle="Un chauffage automatisé qui allie performance, économies et respect de l'environnement."
    >
      <FeatureCard
        icon="lightning"
        title="Rendement de 85 à 95 %"
        description="La combustion contrôlée électroniquement des pellets limite les pertes d'énergie au strict minimum, garantissant un chauffage hautement efficace."
      />
      <FeatureCard
        icon="clock"
        title="Autonomie jusqu'à 72 h"
        description="Le réservoir alimente automatiquement le foyer. Programmez la température souhaitée et le poêle gère le reste, même la nuit."
      />
      <FeatureCard
        icon="shield-check"
        title="Combustible renouvelable et local"
        description="Les pellets sont fabriqués à partir de résidus de scierie français. Une ressource renouvelable, à faible empreinte carbone."
      />
      <FeatureCard
        icon="check-circle"
        title="Éligible aux aides de l'État"
        description="MaPrimeRénov', prime CEE, TVA à 5,5 % : plusieurs dispositifs cumulables réduisent significativement le coût de votre projet."
      />
      <FeatureCard
        icon="building"
        title="S'adapte à tout logement"
        description="Maison individuelle, appartement, neuf ou rénovation : il existe un modèle de poêle à pellets adapté à chaque configuration."
      />
      <FeatureCard
        icon="map-pin"
        title="Installé en 1 journée"
        description="Nos artisans RGE réalisent la pose et le raccordement en une seule intervention, sans gros travaux dans votre logement."
      />
    </FeaturesSection>
  );
}
