import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function ProcessSection() {
  return (
    <FeaturesSection
      title="Comment obtenir MaPrimeRénov' pour votre poêle ?"
      subtitle="Les démarches sont simples. Suivez ces étapes pour bénéficier de l'aide."
    >
      <FeatureCard
        icon="user-circle"
        title="1. Créez votre compte"
        description="Inscrivez-vous sur maprimerenov.gouv.fr avec votre numéro fiscal et vos informations personnelles."
      />
      <FeatureCard
        icon="check-verified"
        title="2. Choisissez un artisan RGE"
        description="Faites réaliser un devis par un professionnel certifié RGE. C'est une condition obligatoire pour toucher l'aide."
      />
      <FeatureCard
        icon="clock"
        title="3. Déposez et recevez l'aide"
        description="Soumettez votre dossier en ligne avant les travaux. L'aide est versée après installation, sous 2 à 4 semaines."
      />
    </FeaturesSection>
  );
}
