import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Les avantages d'un installateur RGE"
      subtitle="Choisir un artisan certifié RGE, c'est garantir la qualité de votre installation et l'accès aux aides."
    >
      <FeatureCard
        icon="lightning"
        title="Accès aux aides"
        description="La certification RGE est obligatoire pour bénéficier de MaPrimeRénov', des CEE, de la TVA à 5,5 % et de l'éco-prêt à taux zéro. Sans artisan RGE, aucune aide n'est accessible."
      />
      <FeatureCard
        icon="shield-check"
        title="Qualité garantie"
        description="L'artisan RGE est formé et évalué régulièrement. Sa certification atteste de ses compétences en efficacité énergétique et en installation de poêles conformes aux normes."
      />
      <FeatureCard
        icon="check-circle"
        title="Visite technique incluse"
        description="Avant toute installation, l'artisan RGE réalise une visite technique pour évaluer la faisabilité, dimensionner le poêle et planifier les travaux de fumisterie."
      />
      <FeatureCard
        icon="clock"
        title="Garantie décennale"
        description="Un installateur RGE dispose d'une assurance décennale qui couvre les éventuels défauts de l'installation pendant 10 ans, vous protégeant durablement."
      />
      <FeatureCard
        icon="map-pin"
        title="Réseau local"
        description="Nos artisans RGE interviennent dans votre région. Ils connaissent les spécificités locales et sont disponibles pour le suivi de votre installation."
      />
      <FeatureCard
        icon="building"
        title="Démarches administratives"
        description="L'artisan RGE vous accompagne dans le montage des dossiers d'aides. Les subventions sont directement déduites de votre devis pour simplifier la démarche."
      />
    </FeaturesSection>
  );
}
