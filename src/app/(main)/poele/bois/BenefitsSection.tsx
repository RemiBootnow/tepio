import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";

export function BenefitsSection() {
  return (
    <FeaturesSection
      title="Les avantages du chauffage au bois"
      subtitle="Le poele a bois combine performance, economie et respect de l'environnement pour votre confort quotidien."
      colorMode="dark"
    >
      <FeatureCard
        icon="lightning"
        title="Rendement jusqu'a 85 %"
        description="Les poeles a bois modernes convertissent la quasi-totalite de l'energie du bois en chaleur utile pour votre logement."
        colorMode="dark"
      />
      <FeatureCard
        icon="shield-check"
        title="Energie la moins chere"
        description="Le bois buche reste le combustible le plus economique en France, avec un cout au kWh nettement inferieur au gaz ou a l'electricite."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-circle"
        title="Chauffage ecologique"
        description="Le bois est une energie renouvelable et neutre en carbone. Vous chauffez votre maison sans alourdir votre empreinte environnementale."
        colorMode="dark"
      />
      <FeatureCard
        icon="clock"
        title="Autonomie de 6 a 10 heures"
        description="Une seule charge de buches suffit pour chauffer votre piece principale pendant une soiree entiere, sans intervention."
        colorMode="dark"
      />
      <FeatureCard
        icon="building"
        title="Compatible tout logement"
        description="Maison ancienne, renovation ou construction neuve : le poele a bois s'adapte a toutes les configurations avec un conduit adapte."
        colorMode="dark"
      />
      <FeatureCard
        icon="check-verified"
        title="Valorise votre bien"
        description="L'installation d'un poele a bois ameliore votre DPE et augmente la valeur de revente de votre logement."
        colorMode="dark"
      />
    </FeaturesSection>
  );
}
