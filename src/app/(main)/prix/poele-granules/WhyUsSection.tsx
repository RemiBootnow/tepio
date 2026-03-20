import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function WhyUsSection() {
  return (
    <FeaturesSection
      eyebrow="Pourquoi nous choisir"
      title="Un accompagnement complet pour votre projet"
      colorMode="dark"
    >
      <FeatureCard
        icon="user-circle"
        title="Un conseiller dédié"
        description="Un interlocuteur unique vous accompagne de la première estimation jusqu'à la mise en service de votre poêle à granulés."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-verified"
        title="Artisans RGE certifiés"
        description="Tous nos installateurs sont Reconnus Garants de l'Environnement, condition indispensable pour bénéficier des aides de l'État."
        colorMode="dark"
      />
      <FeatureCard
        icon="shield-check"
        title="Aides incluses dans le devis"
        description="Nous déduisons directement les aides de votre devis et nous occupons des démarches administratives à votre place."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
