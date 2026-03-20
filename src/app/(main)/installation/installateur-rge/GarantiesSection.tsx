import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function GarantiesSection() {
  return (
    <FeaturesSection
      title="Pourquoi choisir un installateur RGE pour votre poêle ?"
      subtitle="Un artisan certifié RGE vous apporte des garanties concrètes à chaque étape de votre projet."
      colorMode="dark"
    >
      <FeatureCard
        icon="shield-check"
        title="Accès aux aides financières"
        description="MaPrimeRénov', prime CEE, TVA à 5,5 % : sans installateur RGE, vous ne pouvez prétendre à aucune de ces aides."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-verified"
        title="Compétences vérifiées"
        description="La certification impose une formation régulière et des audits de chantier. Vous avez l'assurance d'un travail conforme aux normes."
        colorMode="dark"
      />
      <FeatureCard
        icon="building"
        title="Assurance décennale"
        description="Un professionnel RGE est couvert par une assurance décennale qui protège votre installation pendant 10 ans."
        colorMode="dark"
      />
      <FeatureCard
        icon="lightning"
        title="Performance garantie"
        description="Un poêle mal installé peut perdre jusqu'à 30 % de rendement. Un artisan RGE assure une mise en service optimale."
        colorMode="dark"
      />
      <FeatureCard
        icon="clock"
        title="Conformité réglementaire"
        description="Votre installateur connaît les DTU, les distances de sécurité et les normes de fumisterie en vigueur."
        colorMode="dark"
      />
      <FeatureCard
        icon="user-circle"
        title="Accompagnement personnalisé"
        description="Dimensionnement, choix du modèle, emplacement : un artisan RGE vous conseille à chaque étape de votre projet."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
