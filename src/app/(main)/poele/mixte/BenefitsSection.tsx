import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Pourquoi choisir un poele mixte ?"
      subtitle="Un appareil qui s'adapte a votre quotidien et vous fait gagner en confort comme en economies."
      colorMode="dark"
    >
      <FeatureCard
        icon="lightning"
        title="Double combustible"
        description="Passez du bois aux granules en un geste. Vous n'etes jamais dependant d'un seul approvisionnement."
        colorMode="dark"
      />
      <FeatureCard
        icon="shield-check"
        title="Rendement eleve"
        description="Jusqu'a 93 % de rendement energetique. Chaque buche et chaque granule produit un maximum de chaleur utile."
        colorMode="dark"
      />
      <FeatureCard
        icon="clock"
        title="Chauffage programmable"
        description="En mode granules, programmez vos heures de chauffe. Le poele demarre et s'arrete automatiquement."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-verified"
        title="Eligible aux aides"
        description="MaPrimeRenov', prime CEE, TVA a 5,5 % : le poele mixte est eligible aux principales aides a la renovation."
        colorMode="dark"
      />
      <FeatureCard
        icon="building"
        title="Chauffe jusqu'a 120 m2"
        description="Selon le modele, un poele mixte peut chauffer de 40 a 120 m2, en chauffage principal ou en complement."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-circle"
        title="Energie renouvelable"
        description="Bois et granules sont des combustibles biosources et neutres en carbone. Vous reduisez votre empreinte ecologique."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
