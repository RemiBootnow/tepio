import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Les avantages du poêle à granulés"
      subtitle="Un chauffage qui allie performance, économies et respect de l'environnement."
    >
      <FeatureCard
        icon="lightning"
        title="Jusqu'à 90 % de rendement"
        description="Les granulés brûlent de manière optimale grâce à une combustion contrôlée par électronique, limitant les pertes d'énergie."
      />
      <FeatureCard
        icon="clock"
        title="Autonomie jusqu'à 72 h"
        description="Un réservoir de granulés alimente automatiquement le foyer. Vous programmez la température et le poêle gère le reste."
      />
      <FeatureCard
        icon="shield-check"
        title="Énergie renouvelable et locale"
        description="Les granulés sont fabriqués à partir de résidus de scierie français. Une ressource renouvelable, à faible empreinte carbone."
      />
      <FeatureCard
        icon="check-circle"
        title="Éligible aux aides de l'État"
        description="MaPrimeRénov', prime CEE, TVA réduite à 5,5 % : plusieurs dispositifs réduisent significativement le coût de votre projet."
      />
      <FeatureCard
        icon="building"
        title="S'adapte à tout type de logement"
        description="Maison individuelle, appartement, neuf ou rénovation : il existe un modèle de poêle à granulés adapté à chaque configuration."
      />
      <FeatureCard
        icon="map-pin"
        title="Installé en 1 journée"
        description="Nos artisans RGE réalisent la pose et le raccordement en une seule intervention, sans gros travaux dans votre logement."
      />
    </FeaturesSection>
  );
}
