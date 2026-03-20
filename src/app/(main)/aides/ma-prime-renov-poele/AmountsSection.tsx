import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function AmountsSection() {
  return (
    <FeaturesSection
      title="Montants MaPrimeRénov' selon vos revenus"
      subtitle="Le montant de l'aide dépend de votre catégorie de revenus fiscaux. Voici les plafonds pour l'installation d'un poêle."
      colorMode="dark"
    >
      <FeatureCard
        icon="lightning"
        title="MaPrimeRénov' Bleu"
        description="Ménages très modestes : jusqu'à 2 500 € pour un poêle à granulés, 2 500 € pour un poêle à bûches."
        colorMode="dark"
      />
      <FeatureCard
        icon="lightning"
        title="MaPrimeRénov' Jaune"
        description="Ménages modestes : jusqu'à 2 000 € pour un poêle à granulés, 2 000 € pour un poêle à bûches."
        colorMode="dark"
      />
      <FeatureCard
        icon="lightning"
        title="MaPrimeRénov' Violet"
        description="Ménages intermédiaires : jusqu'à 1 500 € pour un poêle à granulés, 1 000 € pour un poêle à bûches."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
