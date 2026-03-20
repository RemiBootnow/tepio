import { FaqSection as FaqSectionBase, type FaqItem } from "@/components/sections/faq-section";

const faqItems: FaqItem[] = [
  {
    question: "Quel est le prix moyen d'un poêle à granulés avec installation ?",
    answer: "Le prix moyen d'un poêle à granulés installé se situe entre 3 000 € et 7 000 €, selon la puissance, la marque et la complexité de l'installation (conduit existant ou à créer).",
  },
  {
    question: "Un poêle à bois coûte-t-il moins cher qu'un poêle à granulés ?",
    answer: "En général oui. Un poêle à bois coûte entre 2 500 € et 6 000 € posé, contre 3 000 € à 7 000 € pour un poêle à granulés. Le combustible bûches est aussi moins cher que les granulés.",
  },
  {
    question: "Quelles aides financières pour l'achat d'un poêle ?",
    answer: "MaPrimeRénov' peut financer jusqu'à 2 500 €, la prime CEE de 200 à 800 €, et la TVA est réduite à 5,5 %. Ces aides sont cumulables et réservées aux installations par un artisan RGE.",
  },
  {
    question: "Combien coûte la création d'un conduit de cheminée ?",
    answer: "La création d'un conduit de fumée coûte entre 1 500 € et 3 000 € selon la hauteur et la configuration. Le tubage d'un conduit existant revient entre 1 000 € et 2 000 €.",
  },
  {
    question: "Le prix d'un insert est-il plus avantageux qu'un poêle ?",
    answer: "Un insert coûte entre 2 000 € et 5 500 € posé, souvent moins cher qu'un poêle car il utilise le conduit existant de votre cheminée. C'est une option économique pour valoriser un foyer ouvert.",
  },
  {
    question: "Quel est le coût annuel de chauffage avec un poêle ?",
    answer: "Comptez 600 à 1 000 €/an en granulés et 400 à 800 €/an en bûches pour une maison de 100 m². C'est 2 à 3 fois moins cher que le chauffage électrique.",
  },
  {
    question: "Un poêle mixte vaut-il son prix plus élevé ?",
    answer: "Le poêle mixte (4 000 à 8 000 €) offre la flexibilité de deux combustibles. Il est rentable si vous souhaitez alterner entre bûches (moins chères) et granulés (plus pratiques, programmables).",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur le prix des poêles"
      items={faqItems}
    />
  );
}
