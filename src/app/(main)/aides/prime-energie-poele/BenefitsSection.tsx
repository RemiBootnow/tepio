import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Les avantages de la prime énergie pour votre poêle"
      subtitle="Une aide simple, rapide et cumulable pour réduire le coût de votre installation."
      colorMode="dark"
    >
      <FeatureCard
        icon="lightning"
        title="Remise immédiate possible"
        description="Dans de nombreux cas, la prime énergie peut être déduite directement de votre facture, réduisant votre reste à charge dès le départ."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-circle"
        title="Cumulable avec toutes les aides"
        description="La prime CEE se cumule avec MaPrimeRénov', l'éco-PTZ et la TVA à 5,5 %. Combinez les dispositifs pour minimiser votre investissement."
        colorMode="dark"
      />
      <FeatureCard
        icon="building"
        title="Tous types de poêles éligibles"
        description="Poêle à bois, à granulés ou à pellets : tous les appareils respectant les critères de performance énergétique sont éligibles à la prime CEE."
        colorMode="dark"
      />
      <FeatureCard
        icon="user-circle"
        title="Sans condition de revenus"
        description="La prime énergie est ouverte à tous les ménages, propriétaires comme locataires (avec accord du propriétaire), sans plafond de ressources."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-verified"
        title="Démarches simplifiées"
        description="Votre artisan RGE s'occupe de la constitution du dossier CEE. Vous n'avez qu'à signer l'attestation sur l'honneur avant le début des travaux."
        colorMode="dark"
      />
      <FeatureCard
        icon="clock"
        title="Versement rapide"
        description="La prime est versée sous quelques semaines après la fin des travaux, par virement bancaire ou par chèque selon l'organisme."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
