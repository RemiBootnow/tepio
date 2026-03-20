import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function WhyRgeSection() {
  return (
    <FeaturesSection
      eyebrow="Pourquoi RGE"
      title="Les avantages d'un installateur RGE"
      subtitle="Choisir un artisan certifié RGE, c'est garantir la qualité de votre installation et l'accès aux aides."
    >
      <FeatureCard
        icon="check-verified"
        title="Accès aux aides de l'État"
        description="La certification RGE est obligatoire pour bénéficier de MaPrimeRénov', des CEE, de la TVA à 5,5 % et de l'éco-prêt à taux zéro."
      />
      <FeatureCard
        icon="shield-check"
        title="Garantie de qualité"
        description="L'artisan RGE est formé et évalué régulièrement. Sa certification atteste de ses compétences en efficacité énergétique et en installation de poêles."
      />
      <FeatureCard
        icon="check-circle"
        title="Installation conforme"
        description="Un installateur RGE respecte les normes en vigueur (DTU 24.1, NF) et garantit une pose sécurisée avec un conduit de fumée conforme."
      />
      <FeatureCard
        icon="clock"
        title="Service après-vente"
        description="Les artisans RGE assurent la mise en service, le premier allumage et vous accompagnent pour l'entretien et le suivi de votre installation."
      />
      <FeatureCard
        icon="building"
        title="Assurance décennale"
        description="Un installateur RGE dispose d'une assurance décennale qui couvre les éventuels défauts de l'installation pendant 10 ans."
      />
      <FeatureCard
        icon="map-pin"
        title="Proximité locale"
        description="Nos artisans RGE interviennent dans votre région. Ils connaissent les spécificités locales et sont disponibles pour le suivi de votre installation."
      />
    </FeaturesSection>
  );
}
