import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Les avantages de MaPrimeRénov' pour votre poêle"
      subtitle="Une aide accessible, cumulable et conçue pour réduire le coût de votre projet de chauffage."
    >
      <FeatureCard
        icon="lightning"
        title="Jusqu'à 1 250 € d'aide"
        description="Les ménages aux revenus très modestes peuvent bénéficier de 1 250 €, les revenus modestes de 1 000 € et les revenus intermédiaires de 750 €."
      />
      <FeatureCard
        icon="check-circle"
        title="Cumulable avec d'autres aides"
        description="MaPrimeRénov' se cumule avec la prime CEE, l'éco-PTZ et la TVA à 5,5 % pour réduire encore davantage votre reste à charge."
      />
      <FeatureCard
        icon="building"
        title="Tous types de poêles éligibles"
        description="Poêle à bois, à granulés ou à pellets : tous les appareils labellisés Flamme Verte 7 étoiles ou équivalent sont éligibles à l'aide."
      />
      <FeatureCard
        icon="shield-check"
        title="Artisan RGE obligatoire"
        description="L'installation doit être réalisée par un professionnel certifié RGE (Reconnu Garant de l'Environnement) pour bénéficier de la prime."
      />
      <FeatureCard
        icon="user-circle"
        title="Demande en ligne simplifiée"
        description="La demande se fait directement sur le site officiel de MaPrimeRénov'. Créez votre compte, déposez votre dossier et suivez son avancement en ligne."
      />
      <FeatureCard
        icon="clock"
        title="Versée après les travaux"
        description="Le montant de l'aide est versé directement sur votre compte bancaire une fois les travaux terminés et la facture transmise."
      />
    </FeaturesSection>
  );
}
