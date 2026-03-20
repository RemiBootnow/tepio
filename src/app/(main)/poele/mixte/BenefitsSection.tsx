import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Les avantages du poêle mixte"
      subtitle="Un appareil deux-en-un qui combine le meilleur du bois et des granulés."
    >
      <FeatureCard
        icon="lightning"
        title="Polyvalence bois et granulés"
        description="Passez des bûches aux granulés selon vos envies ou la disponibilité du combustible. L'appareil gère la transition automatiquement."
      />
      <FeatureCard
        icon="clock"
        title="Autonomie granulés"
        description="Quand les bûches se consument, le poêle bascule sur les granulés et maintient la température souhaitée jusqu'à 48 h sans intervention."
      />
      <FeatureCard
        icon="shield-check"
        title="Sécurité bois en cas de coupure"
        description="En cas de coupure d'électricité, le mode bûches fonctionne sans alimentation. Vous conservez votre chauffage en toute circonstance."
      />
      <FeatureCard
        icon="check-circle"
        title="Éligible aux aides de l'État"
        description="MaPrimeRénov', prime CEE, TVA à 5,5 % : plusieurs dispositifs cumulables réduisent significativement le coût de votre projet."
      />
      <FeatureCard
        icon="building"
        title="S'adapte à toutes les surfaces"
        description="De 60 à 150 m², il existe un modèle adapté à chaque configuration. Le poêle mixte convient aux maisons individuelles comme aux grands espaces ouverts."
      />
      <FeatureCard
        icon="map-pin"
        title="Installation en 1 journée"
        description="Nos artisans RGE réalisent la pose et le raccordement en une seule intervention, sans gros travaux dans votre logement."
      />
    </FeaturesSection>
  );
}
