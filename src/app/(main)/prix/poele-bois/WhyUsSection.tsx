import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function WhyUsSection() {
  return (
    <FeaturesSection
      eyebrow="Pourquoi nous choisir"
      title="Un accompagnement de A à Z"
      colorMode="dark"
    >
      <FeatureCard
        icon="user-circle"
        title="Un conseiller dédié"
        description="Un interlocuteur unique vous guide du premier contact jusqu'à la mise en service de votre poêle à bois."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-verified"
        title="Artisans RGE certifiés"
        description="Nos installateurs sont tous Reconnus Garants de l'Environnement, garantissant l'accès aux aides et une pose conforme."
        colorMode="dark"
      />
      <FeatureCard
        icon="shield-check"
        title="Aides déduites du devis"
        description="Les aides sont directement déduites de votre devis. Nous nous occupons des démarches administratives pour vous."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
