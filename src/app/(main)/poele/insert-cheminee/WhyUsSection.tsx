import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { APP_NAME } from "@/lib/constants";

export function WhyUsSection() {
  return (
    <FeaturesSection
      title={`Pourquoi choisir ${APP_NAME} pour votre insert cheminée ?`}
      colorMode="dark"
    >
      <FeatureCard
        icon="check-verified"
        title="Artisans certifiés RGE"
        description="Tous nos installateurs sont qualifiés RGE, condition indispensable pour bénéficier des aides de l'État."
        colorMode="dark"
      />
      <FeatureCard
        icon="user-circle"
        title="Un conseiller dédié"
        description="De la simulation à la mise en service, un interlocuteur unique vous accompagne à chaque étape de votre projet."
        colorMode="dark"
      />
      <FeatureCard
        icon="shield-check"
        title="Garantie et SAV inclus"
        description="Votre insert est garanti par le fabricant et notre SAV reste disponible après l'installation."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
