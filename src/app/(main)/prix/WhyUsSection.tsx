import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { APP_NAME } from "@/lib/constants";

export function WhyUsSection() {
  return (
    <FeaturesSection
      title={`Pourquoi estimer votre projet avec ${APP_NAME} ?`}
      colorMode="dark"
    >
      <FeatureCard
        icon="check-verified"
        title="Artisans RGE certifiés"
        description="Tous nos installateurs sont qualifiés RGE, condition indispensable pour bénéficier des aides de l'État."
        colorMode="dark"
      />
      <FeatureCard
        icon="shield-check"
        title="Prix transparent, sans surprise"
        description="Un devis détaillé avec le prix du matériel, de la pose et des aides déduites. Aucun frais caché."
        colorMode="dark"
      />
      <FeatureCard
        icon="lightning"
        title="Estimation en 2 minutes"
        description="Répondez à quelques questions sur votre logement et recevez une estimation personnalisée du coût de votre poêle."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
