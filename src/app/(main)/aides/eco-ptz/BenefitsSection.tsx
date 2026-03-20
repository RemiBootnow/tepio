import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Les avantages de l'éco-PTZ pour votre poêle"
      subtitle="Un financement accessible et avantageux pour concrétiser votre projet de chauffage."
      colorMode="dark"
    >
      <FeatureCard
        icon="check-circle"
        title="0 % d'intérêts"
        description="L'éco-PTZ est un prêt à taux zéro : vous ne remboursez que le capital emprunté, sans aucun intérêt ni frais de dossier."
        colorMode="dark"
      />
      <FeatureCard
        icon="lightning"
        title="Jusqu'à 50 000 €"
        description="Le montant maximal du prêt peut atteindre 50 000 € pour un bouquet de travaux, largement suffisant pour financer votre poêle et d'autres rénovations."
        colorMode="dark"
      />
      <FeatureCard
        icon="clock"
        title="Jusqu'à 20 ans pour rembourser"
        description="La durée de remboursement peut aller jusqu'à 20 ans, vous permettant d'adapter les mensualités à votre budget."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-verified"
        title="Cumulable avec MaPrimeRénov'"
        description="L'éco-PTZ se cumule avec MaPrimeRénov', la prime CEE et la TVA à 5,5 %. Vous pouvez emprunter uniquement votre reste à charge."
        colorMode="dark"
      />
      <FeatureCard
        icon="user-circle"
        title="Sans condition de revenus"
        description="Contrairement à d'autres aides, l'éco-PTZ est accessible à tous les propriétaires, quels que soient leurs revenus."
        colorMode="dark"
      />
      <FeatureCard
        icon="building"
        title="Disponible en banque partenaire"
        description="Le prêt est proposé par les banques ayant signé une convention avec l'État. Votre artisan RGE vous fournit les justificatifs nécessaires."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
