import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function AvantagesSection() {
  return (
    <FeaturesSection
      title="Pourquoi choisir l'éco-PTZ pour vos travaux ?"
      subtitle="Un financement avantageux conçu pour rendre la rénovation énergétique accessible à tous les propriétaires."
      colorMode="dark"
    >
      <FeatureCard
        icon="lightning"
        title="0 % d'intérêts"
        description="Aucun intérêt à payer : vous remboursez uniquement le montant emprunté, sans frais bancaires supplémentaires."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-verified"
        title="Jusqu'à 50 000 €"
        description="Empruntez jusqu'à 50 000 € pour un bouquet de travaux ambitieux, de quoi couvrir l'essentiel de votre projet."
        colorMode="dark"
      />
      <FeatureCard
        icon="user-circle"
        title="Sans condition de revenus"
        description="Tous les propriétaires y ont droit, qu'ils soient occupants ou bailleurs, sans plafond de ressources."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-circle"
        title="Cumulable avec MaPrimeRénov'"
        description="Combinez l'éco-PTZ avec MaPrimeRénov', les primes CEE et la TVA réduite pour réduire votre reste à charge."
        colorMode="dark"
      />
      <FeatureCard
        icon="clock"
        title="Jusqu'à 20 ans pour rembourser"
        description="Étalez vos remboursements sur 20 ans maximum pour des mensualités adaptées à votre budget."
        colorMode="dark"
      />
      <FeatureCard
        icon="shield-check"
        title="Garanti par l'État"
        description="L'éco-PTZ est un dispositif public encadré par l'État, proposé par les banques partenaires conventionnées."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
