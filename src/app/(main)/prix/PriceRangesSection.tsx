import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function PriceRangesSection() {
  return (
    <FeaturesSection
      title="Combien coûte un poêle ? Les fourchettes de prix"
      subtitle="Le prix d'un poêle varie selon le type de combustible, la puissance et la gamme. Voici les tarifs moyens constatés en 2026, pose comprise."
    >
      <FeatureCard
        icon="lightning"
        title="Poêle à granulés"
        description="De 3 000 € à 7 000 € pose comprise. Un rendement de 85 à 95 % pour un chauffage économique et programmable."
      />
      <FeatureCard
        icon="building"
        title="Poêle à bois (bûches)"
        description="De 2 500 € à 6 000 € pose comprise. Le combustible le moins cher du marché, idéal en chauffage d'appoint ou principal."
      />
      <FeatureCard
        icon="shield-check"
        title="Poêle mixte (bois + granulés)"
        description="De 4 000 € à 8 000 € pose comprise. La polyvalence de deux combustibles pour ne jamais manquer de chaleur."
      />
      <FeatureCard
        icon="check-verified"
        title="Insert de cheminée"
        description="De 2 000 € à 5 500 € pose comprise. Transformez votre cheminée ouverte en chauffage performant avec 70 à 85 % de rendement."
      />
      <FeatureCard
        icon="clock"
        title="Fumisterie et conduit"
        description="De 1 000 € à 3 000 € selon la configuration. Création ou tubage du conduit, indispensable pour une installation conforme."
      />
      <FeatureCard
        icon="map-pin"
        title="Coût du combustible / an"
        description="Granulés : 600 à 1 000 €/an. Bûches : 400 à 800 €/an. Un poste de dépense réduit comparé au gaz ou à l'électricité."
      />
    </FeaturesSection>
  );
}
