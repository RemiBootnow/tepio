import { APP_NAME } from "@/lib/constants";
import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function WhyUsSection() {
  return (
    <FeaturesSection
      title={`Pourquoi choisir ${APP_NAME} pour votre poêle à bois ?`}
    >
      <FeatureCard
        icon="check-verified"
        title="Artisans certifies RGE"
        description="Tous nos installateurs sont qualifies RGE, condition indispensable pour beneficier des aides de l'Etat."
      />
      <FeatureCard
        icon="user-circle"
        title="Accompagnement complet"
        description="De la visite technique au suivi apres installation, un conseiller dedie vous guide a chaque etape de votre projet."
      />
      <FeatureCard
        icon="map-pin"
        title="Reseau local partout en France"
        description="Nos artisans partenaires interviennent pres de chez vous pour une installation rapide et un SAV reactif."
      />
    </FeaturesSection>
  );
}
