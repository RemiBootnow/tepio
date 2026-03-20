import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Les éléments qui composent votre budget"
      subtitle="Chaque critère influence le coût final de votre projet de poêle à bois."
    >
      <FeatureCard
        icon="lightning"
        title="La puissance de chauffe"
        description="La puissance se détermine en fonction de la surface à chauffer et de l'isolation de votre logement. Un poêle plus puissant représente un investissement plus important."
      />
      <FeatureCard
        icon="building"
        title="Le matériau"
        description="Fonte, acier ou pierre ollaire : chaque matériau a ses avantages. La pierre ollaire stocke la chaleur plus longtemps, la fonte offre une excellente durabilité, l'acier chauffe rapidement."
      />
      <FeatureCard
        icon="check-verified"
        title="La marque et le design"
        description="Les poêles design et les marques haut de gamme proposent des finitions soignées et des performances supérieures. Les modèles classiques restent accessibles et fiables."
      />
      <FeatureCard
        icon="clock"
        title="Le type de combustion"
        description="Les poêles à double combustion ou à postcombustion offrent un meilleur rendement et consomment moins de bois. Cette technologie influence le prix à l'achat mais réduit les coûts à l'usage."
      />
      <FeatureCard
        icon="map-pin"
        title="Le conduit de fumée"
        description="La création ou le tubage d'un conduit de cheminée représente une part variable du budget. La hauteur du conduit et le nombre de coudes impactent le coût des travaux."
      />
      <FeatureCard
        icon="shield-check"
        title="L'entretien annuel"
        description="Un ramonage obligatoire deux fois par an et un nettoyage régulier du cendrier garantissent la sécurité et les performances de votre poêle à bois dans la durée."
      />
    </FeaturesSection>
  );
}
