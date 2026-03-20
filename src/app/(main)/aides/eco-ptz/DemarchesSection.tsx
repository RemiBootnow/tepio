import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function DemarchesSection() {
  return (
    <section id="demarches">
      <FeaturesSection
        title="Comment obtenir votre éco-PTZ en 3 étapes"
        subtitle="Une démarche simple, accompagnée de A à Z par nos conseillers et votre banque."
      >
        <FeatureCard
          icon="check-circle"
          title="1. Estimez vos travaux"
          description="Réalisez une estimation en ligne ou contactez-nous pour définir les travaux éligibles et le montant de votre éco-PTZ."
        />
        <FeatureCard
          icon="building"
          title="2. Choisissez un artisan RGE"
          description="Les travaux doivent être réalisés par un professionnel certifié RGE. Nous vous mettons en relation avec notre réseau d'artisans qualifiés."
        />
        <FeatureCard
          icon="shield-check"
          title="3. Déposez votre dossier en banque"
          description="Présentez votre devis et le formulaire « emprunteur » à une banque partenaire. Le prêt est accordé sous 30 jours en moyenne."
        />
      </FeaturesSection>
    </section>
  );
}
