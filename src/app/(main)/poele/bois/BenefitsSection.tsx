import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Les avantages du poêle à bois"
      subtitle="Un chauffage authentique qui conjugue économies, durabilité et plaisir du feu."
    >
      <FeatureCard
        icon="lightning"
        title="Le combustible le moins cher"
        description="Le bois bûche est l'énergie de chauffage la plus économique en France. Il permet de réduire significativement votre facture par rapport au gaz ou à l'électricité."
      />
      <FeatureCard
        icon="shield-check"
        title="Aucune dépendance électrique"
        description="Le poêle à bois fonctionne sans électricité. En cas de coupure de courant, vous conservez votre chauffage — un atout précieux en hiver."
      />
      <FeatureCard
        icon="check-circle"
        title="Flamme authentique et chaleur rayonnante"
        description="Rien ne remplace le spectacle d'un vrai feu de bois. La chaleur rayonnante du poêle crée une ambiance chaleureuse et réconfortante dans votre intérieur."
      />
      <FeatureCard
        icon="clock"
        title="Durée de vie exceptionnelle"
        description="Un poêle à bois en fonte ou en acier de qualité dure 20 à 30 ans avec un entretien régulier. C'est un investissement durable pour votre logement."
      />
      <FeatureCard
        icon="building"
        title="Éligible aux aides de l'État"
        description="MaPrimeRénov', prime CEE, TVA à 5,5 % : plusieurs dispositifs cumulables réduisent significativement le coût de votre projet."
      />
      <FeatureCard
        icon="map-pin"
        title="Installé en 1 journée"
        description="Nos artisans RGE réalisent la pose et le raccordement en une seule intervention, sans gros travaux dans votre logement."
      />
    </FeaturesSection>
  );
}
