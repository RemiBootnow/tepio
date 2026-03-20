import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function PriceDetailsSection() {
  return (
    <FeaturesSection
      eyebrow="Critères de prix"
      title="Les éléments qui composent votre budget"
      subtitle="Chaque critère influence le coût final de votre projet de poêle à granulés."
    >
      <FeatureCard
        icon="lightning"
        title="La puissance"
        description="Un poêle plus puissant chauffe une plus grande surface, mais coûte plus cher. Le dimensionnement dépend de l'isolation de votre logement et de la surface à chauffer."
      />
      <FeatureCard
        icon="check-verified"
        title="La marque et la gamme"
        description="Les fabricants premium proposent des finitions supérieures, une meilleure insonorisation et des garanties étendues. L'entrée de gamme reste performante pour les budgets maîtrisés."
      />
      <FeatureCard
        icon="clock"
        title="Les options de confort"
        description="Programmation horaire, pilotage à distance via smartphone, ventilation canalisable : ces options ajoutent du confort au quotidien mais influencent le prix."
      />
      <FeatureCard
        icon="building"
        title="La fumisterie"
        description="La création ou le tubage d'un conduit de cheminée représente une part variable du budget. La distance entre le poêle et la sortie de toit et le nombre de coudes influencent le coût."
      />
      <FeatureCard
        icon="map-pin"
        title="La configuration du logement"
        description="L'accessibilité du lieu d'installation, la distance de raccordement et la nécessité de travaux préparatoires impactent le coût global de la pose."
      />
      <FeatureCard
        icon="shield-check"
        title="L'installateur RGE"
        description="Faire appel à un artisan Reconnu Garant de l'Environnement est obligatoire pour bénéficier des aides. Son expertise garantit une installation conforme et sécurisée."
      />
    </FeaturesSection>
  );
}
