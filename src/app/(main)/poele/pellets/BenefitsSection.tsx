import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Pourquoi choisir un poêle à pellets"
      colorMode="dark"
    >
      <FeatureCard
        icon="lightning"
        title="Rendement supérieur à 90 %"
        description="Les pellets brûlent presque intégralement, ce qui maximise la chaleur produite et réduit votre consommation."
        colorMode="dark"
      />
      <FeatureCard
        icon="shield-check"
        title="Combustible certifié et naturel"
        description="Les pellets sont fabriqués à partir de résidus de scierie, sans additif chimique. Un choix écologique et responsable."
        colorMode="dark"
      />
      <FeatureCard
        icon="clock"
        title="Autonomie de 24 à 72 h"
        description="Un réservoir plein vous offre plusieurs jours de chauffage continu sans intervention de votre part."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-verified"
        title="Programmation automatique"
        description="Réglez la température et les plages horaires depuis le panneau de commande ou votre smartphone."
        colorMode="dark"
      />
      <FeatureCard
        icon="building"
        title="Compatible toutes surfaces"
        description="Du studio à la maison de 120 m², il existe un poêle à pellets adapté à chaque configuration."
        colorMode="dark"
      />
      <FeatureCard
        icon="map-pin"
        title="Approvisionnement local garanti"
        description="Les pellets sont produits en France et disponibles en grande surface, en palette ou en vrac toute l'année."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
