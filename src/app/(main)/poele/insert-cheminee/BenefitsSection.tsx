import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Les avantages de l'insert cheminée"
      subtitle="Transformez votre cheminée ouverte en un chauffage performant sans perdre son cachet."
    >
      <FeatureCard
        icon="lightning"
        title="Rendement multiplié par 5"
        description="Passez de 10-15 % de rendement avec un foyer ouvert à 70-85 % avec un insert. La chaleur reste dans votre maison au lieu de s'échapper par le conduit."
      />
      <FeatureCard
        icon="check-circle"
        title="Conservez le charme de votre cheminée"
        description="L'insert s'intègre dans votre foyer existant et conserve l'esthétique de votre cheminée. Profitez de la flamme visible derrière la vitre."
      />
      <FeatureCard
        icon="shield-check"
        title="Sécurité renforcée"
        description="Le foyer fermé élimine les risques de projection de braises et de refoulement de fumée. Un chauffage plus sûr, surtout en présence d'enfants."
      />
      <FeatureCard
        icon="clock"
        title="Autonomie de chauffe prolongée"
        description="La combustion contrôlée d'un insert permet une autonomie de 6 à 10 heures par chargement, bien supérieure à celle d'un foyer ouvert."
      />
      <FeatureCard
        icon="building"
        title="Éligible aux aides de l'État"
        description="MaPrimeRénov', prime CEE, TVA à 5,5 % : plusieurs dispositifs cumulables réduisent significativement le coût de votre projet."
      />
      <FeatureCard
        icon="map-pin"
        title="Installation dans votre cheminée existante"
        description="Nos artisans RGE encastrent l'insert dans votre foyer actuel et adaptent le conduit. Pas besoin de gros travaux de maçonnerie."
      />
    </FeaturesSection>
  );
}
