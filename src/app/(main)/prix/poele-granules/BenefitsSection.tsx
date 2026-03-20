import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Pourquoi choisir un poêle à granulés ?"
      subtitle="Un chauffage performant, économique et écologique pour votre logement."
      colorMode="dark"
    >
      <FeatureCard
        icon="lightning"
        title="Rendement supérieur à 90 %"
        description="Les poêles à granulés modernes atteignent un rendement de 90 à 95 %, bien au-dessus des cheminées traditionnelles."
        colorMode="dark"
      />
      <FeatureCard
        icon="shield-check"
        title="Énergie renouvelable et locale"
        description="Les granulés de bois sont fabriqués à partir de résidus de scierie français. Vous chauffez propre tout en soutenant la filière locale."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-verified"
        title="Éligible aux aides de l'État"
        description="MaPrimeRénov', prime CEE, TVA réduite à 5,5 % : jusqu'à 4 000 € d'aides cumulables pour réduire votre investissement."
        colorMode="dark"
      />
      <FeatureCard
        icon="clock"
        title="Programmable et autonome"
        description="Programmez vos horaires de chauffe et profitez d'une autonomie de 24 à 72 heures selon le réservoir."
        colorMode="dark"
      />
      <FeatureCard
        icon="building"
        title="Compatible avec tout logement"
        description="Maison ancienne ou construction récente, le poêle à granulés s'adapte à tous les types de logements et conduits."
        colorMode="dark"
      />
      <FeatureCard
        icon="map-pin"
        title="Installation rapide par un artisan RGE"
        description="Nos artisans certifiés RGE installent votre poêle en une journée, avec mise en service et accompagnement inclus."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
