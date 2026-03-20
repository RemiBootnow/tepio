import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function StepsSection() {
  return (
    <FeaturesSection
      title="Comment obtenir votre prime CEE en 3 étapes"
      subtitle="La démarche est simple. Voici les étapes pour toucher votre prime énergie poêle."
      colorMode="dark"
    >
      <FeatureCard
        icon="lightning"
        title="1. Faites votre demande avant les travaux"
        description="Inscrivez-vous auprès d'un obligé (fournisseur d'énergie) ou via notre simulateur avant de signer votre devis. C'est obligatoire."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-circle"
        title="2. Faites installer par un artisan RGE"
        description="Choisissez un professionnel certifié RGE. Nous vous mettons en relation avec des installateurs qualifiés de votre région."
        colorMode="dark"
      />
      <FeatureCard
        icon="clock"
        title="3. Recevez votre prime sous 4 semaines"
        description="Après réception de la facture et des attestations, la prime vous est versée par virement ou déduite de votre devis."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
