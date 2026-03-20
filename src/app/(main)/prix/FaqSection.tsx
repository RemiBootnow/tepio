import { FaqSection as FaqSectionBase, type FaqItem } from "@/components/sections/faq-section";

const faqItems: FaqItem[] = [
  {
    question: "Quel est le prix moyen d'un poêle ?",
    answer: "Le prix dépend du modèle, de la puissance et de la complexité d'installation. Un devis personnalisé est la meilleure façon d'obtenir une estimation précise adaptée à votre logement.",
  },
  {
    question: "Le prix du poêle inclut-il l'installation ?",
    answer: "Cela dépend du devis. Chez nous, le prix inclut toujours la fourniture de l'appareil, la pose par un artisan RGE certifié et la mise en service. Les travaux de fumisterie sont également compris.",
  },
  {
    question: "Quelles aides puis-je obtenir pour réduire le coût ?",
    answer: "Vous pouvez bénéficier de MaPrimeRénov' (jusqu'à 1 250 € en 2026), des Certificats d'Économies d'Énergie (CEE), de la TVA à 5,5 % et de l'éco-prêt à taux zéro. Ces aides sont cumulables.",
  },
  {
    question: "Un poêle à granulés coûte-t-il plus cher qu'un poêle à bois ?",
    answer: "En règle générale, un poêle à granulés représente un investissement initial plus élevé qu'un poêle à bois, en raison de sa technologie de programmation et d'alimentation automatique. Cependant, il offre un meilleur rendement et un confort d'utilisation supérieur.",
  },
  {
    question: "Le conduit de cheminée est-il inclus dans le prix ?",
    answer: "Les travaux de fumisterie (création ou tubage du conduit) sont inclus dans nos devis. Le coût varie selon la configuration de votre logement : distance entre le poêle et la sortie de toit, nombre de coudes nécessaires, etc.",
  },
  {
    question: "Peut-on payer un poêle en plusieurs fois ?",
    answer: "Oui, l'éco-prêt à taux zéro vous permet de financer votre projet sans intérêts, jusqu'à 50 000 €. Nous vous accompagnons dans le montage de votre dossier de financement.",
  },
  {
    question: "Combien de temps faut-il pour rentabiliser l'investissement ?",
    answer: "La rentabilité dépend de votre consommation actuelle et du type de poêle choisi. En moyenne, les économies d'énergie permettent de rentabiliser l'investissement en quelques années, d'autant plus que les aides réduisent significativement le reste à charge.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur le prix d'un poêle"
      items={faqItems}
    />
  );
}
