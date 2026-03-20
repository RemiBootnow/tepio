import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection title="Pourquoi passer à un insert cheminée ?">
      <FeatureCard
        icon="lightning"
        title="Rendement jusqu'à 85 %"
        description="Un insert récupère et redistribue la chaleur au lieu de la laisser filer dans le conduit. Vous chauffez plus avec moins de bois."
      />
      <FeatureCard
        icon="building"
        title="Économies sur le chauffage"
        description="Moins de bois consommé pour plus de chaleur : votre facture de chauffage baisse sensiblement dès le premier hiver."
      />
      <FeatureCard
        icon="shield-check"
        title="Sécurité renforcée"
        description="La vitre fermée supprime les risques de projections de braises et limite les émissions de fumée dans votre pièce de vie."
      />
      <FeatureCard
        icon="check-verified"
        title="Respect de l'environnement"
        description="Une combustion complète réduit les particules fines de 80 % par rapport à un foyer ouvert. Le bois reste une énergie renouvelable."
      />
      <FeatureCard
        icon="clock"
        title="Autonomie prolongée"
        description="Un chargement de bûches dure plusieurs heures grâce à la combustion contrôlée. Moins de rechargements, plus de confort."
      />
      <FeatureCard
        icon="check-circle"
        title="Valorisation de votre bien"
        description="Un insert moderne améliore le DPE de votre logement et le rend plus attractif à la revente ou à la location."
      />
    </FeaturesSection>
  );
}
