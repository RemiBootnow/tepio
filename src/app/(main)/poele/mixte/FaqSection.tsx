import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";
import type { FaqItem } from "@/components/sections/faq-section";

const faqItems: FaqItem[] = [
  {
    question: "Comment fonctionne un poêle mixte bois-granulés ?",
    answer:
      "Le poêle mixte dispose de deux foyers ou d'un foyer polyvalent. Vous chargez des bûches manuellement pour profiter de la flamme, puis l'appareil bascule automatiquement sur les granulés lorsque les bûches se consument, maintenant la température sans intervention.",
  },
  {
    question: "Quelle est la durée de vie d'un poêle mixte ?",
    answer:
      "Un poêle mixte bien entretenu a une durée de vie de 15 à 25 ans. Un entretien annuel par un professionnel et un ramonage deux fois par an sont recommandés pour maintenir ses performances.",
  },
  {
    question: "Faut-il un conduit de cheminée pour installer un poêle mixte ?",
    answer:
      "Oui, un conduit de fumée est nécessaire. Si votre logement n'en possède pas, un conduit peut être créé en toiture par votre artisan RGE lors de l'installation. Le conduit doit être compatible avec les deux modes de combustion.",
  },
  {
    question: "Quelles aides pour un poêle mixte en 2026 ?",
    answer:
      "En 2026, vous pouvez bénéficier de MaPrimeRénov' (jusqu'à 1 250 €), de la prime CEE, de la TVA réduite à 5,5 % et de l'éco-prêt à taux zéro. Ces aides sont cumulables et le montant dépend de vos revenus.",
  },
  {
    question: "Quel est l'avantage d'un poêle mixte par rapport à un poêle à granulés ?",
    answer:
      "Le poêle mixte offre la sécurité de pouvoir fonctionner au bois en cas de coupure d'électricité, le plaisir visuel de la flamme de bûches, et la possibilité de choisir le combustible le moins cher selon la saison.",
  },
  {
    question: "Un poêle mixte est-il bruyant ?",
    answer:
      "En mode granulés, le niveau sonore est de 30 à 45 dB selon les modèles, comparable à un réfrigérateur. En mode bûches, le poêle est totalement silencieux, seul le crépitement du feu est perceptible.",
  },
  {
    question: "Quelle surface peut chauffer un poêle mixte ?",
    answer:
      "Un poêle mixte peut chauffer de 60 à 150 m² selon sa puissance (6 à 14 kW). Il est souvent utilisé comme chauffage principal dans les pièces de vie, complété par un autre système dans les chambres pour les grandes surfaces.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur le poêle mixte"
      items={faqItems}
    />
  );
}
