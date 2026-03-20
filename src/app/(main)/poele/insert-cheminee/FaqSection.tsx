import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";
import type { FaqItem } from "@/components/sections/faq-section";

const faqItems: FaqItem[] = [
  {
    question: "Peut-on installer un insert dans n'importe quelle cheminée ?",
    answer:
      "La plupart des cheminées à foyer ouvert peuvent accueillir un insert, à condition que le conduit soit en bon état et aux normes. Votre artisan RGE vérifie la faisabilité lors de la visite technique et adapte le tubage si nécessaire.",
  },
  {
    question: "Quelle est la différence entre un insert et un foyer fermé ?",
    answer:
      "L'insert s'encastre dans une cheminée existante, tandis que le foyer fermé est un appareil neuf intégré dans un habillage de cheminée construit sur mesure. L'insert est la solution idéale si vous avez déjà une cheminée ouverte.",
  },
  {
    question: "Quel est le rendement d'un insert cheminée ?",
    answer:
      "Un insert cheminée moderne atteint un rendement de 70 à 85 %, contre seulement 10 à 15 % pour une cheminée ouverte. Vous utilisez donc 5 à 6 fois moins de bois pour la même chaleur.",
  },
  {
    question: "Un insert peut-il chauffer toute la maison ?",
    answer:
      "Un insert peut chauffer 60 à 120 m² selon sa puissance. Pour diffuser la chaleur dans les pièces éloignées, des gaines de distribution d'air chaud peuvent être ajoutées lors de l'installation.",
  },
  {
    question: "Quelles aides pour un insert cheminée en 2026 ?",
    answer:
      "En 2026, vous pouvez bénéficier de MaPrimeRénov' (jusqu'à 1 250 €), de la prime CEE, de la TVA réduite à 5,5 % et de l'éco-prêt à taux zéro. Ces aides sont cumulables et le montant dépend de vos revenus.",
  },
  {
    question: "Faut-il tuber le conduit de cheminée ?",
    answer:
      "Oui, le tubage du conduit est obligatoire lors de l'installation d'un insert. Il garantit l'étanchéité et la sécurité du système. Votre artisan RGE réalise le tubage le jour de la pose.",
  },
  {
    question: "Quelle est la durée de vie d'un insert cheminée ?",
    answer:
      "Un insert cheminée de qualité dure 20 à 30 ans avec un entretien régulier. Le ramonage deux fois par an et un entretien annuel par un professionnel sont recommandés pour maintenir ses performances et sa sécurité.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur l'insert cheminée"
      items={faqItems}
    />
  );
}
