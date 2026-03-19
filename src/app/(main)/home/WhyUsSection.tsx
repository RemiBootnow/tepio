import { FeaturesSection } from "@/components/sections/features-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { type IconName } from "@/components/ui/icons";

const features: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "user-circle",
    title: "Un expert dédié",
    description:
      "Un interlocuteur unique qui vous guide et s'occupe de toutes les démarches, sans aucun frais.",
  },
  {
    icon: "map-pin",
    title: "L'excellence locale",
    description:
      "Un réseau d'installateurs RGE triés sur le volet, posant exclusivement du matériel haut de gamme.",
  },
  {
    icon: "check-circle",
    title: "Zéro avance de frais",
    description:
      "Un devis clair et les aides de l'État directement déduites du montant à payer.",
  },
  {
    icon: "lightning",
    title: "Installation express",
    description:
      "Une intervention propre et rapide, réalisée en 1 à 2 jours seulement.",
  },
  {
    icon: "shield-check",
    title: "SAV et entretien",
    description:
      "Jusqu'à 10 ans de garantie sur le matériel et la pose. De quoi dormir sur vos deux oreilles.",
  },
];

export function WhyUsSection() {
  return (
    <FeaturesSection
      title="Votre poêle, bien choisi, bien installé"
      subtitle="Vous avez peur des devis incompréhensibles, des artisans qui ne rappellent pas ou des dossiers d'aides rejetés\u00a0? Du jargon technique.. On vous vend des kW sans vous écouter."
      primaryButtonLabel="Estimer mon projet"
      primaryButtonLink="/estimation"
      primaryButtonColor="primary"
      colorMode="dark"
    >
      {features.map((f) => (
        <FeatureCard key={f.title} {...f} colorMode="dark" />
      ))}
    </FeaturesSection>
  );
}
