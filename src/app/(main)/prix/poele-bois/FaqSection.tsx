import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Quel est le prix moyen d'un poêle à bois en 2026 ?",
    answer:
      "Le prix d'un poêle à bois varie de 500 € pour un modèle en acier d'entrée de gamme à plus de 7 000 € pour un poêle en pierre ollaire haut de gamme. Le budget moyen constaté se situe entre 1 500 et 3 500 €, hors pose.",
  },
  {
    question: "Combien coûte l'installation d'un poêle à bois ?",
    answer:
      "La pose par un artisan RGE coûte entre 1 000 et 3 000 €. Ce tarif inclut le raccordement au conduit, le tubage éventuel et la mise en service. Un conduit existant réduit le coût de pose.",
  },
  {
    question: "Quelles aides pour l'achat d'un poêle à bois ?",
    answer:
      "Vous pouvez cumuler MaPrimeRénov' (jusqu'à 2 500 €), la prime CEE (jusqu'à 800 €), la TVA à 5,5 % et l'éco-prêt à taux zéro. L'installation doit être réalisée par un artisan certifié RGE.",
  },
  {
    question: "Quel est le coût annuel de chauffage au bois-bûche ?",
    answer:
      "Le bois-bûche coûte entre 70 et 100 € le stère. Pour une maison de 100 m², comptez 4 à 6 stères par hiver, soit 500 à 1 000 € par an. C'est l'énergie de chauffage la moins chère du marché.",
  },
  {
    question: "Quelle puissance de poêle à bois choisir ?",
    answer:
      "Comptez environ 1 kW pour 10 m² dans un logement bien isolé. Pour une pièce de vie de 40 m², un poêle de 4 à 6 kW suffit. Un conseiller peut dimensionner le poêle selon votre isolation et votre surface.",
  },
  {
    question: "Poêle à bois ou poêle à granulés : lequel est le moins cher ?",
    answer:
      "Le poêle à bois-bûche est moins cher à l'achat (à partir de 500 €) et le combustible est plus économique. Le poêle à granulés coûte plus cher mais offre un fonctionnement automatisé et une régulation de température plus précise.",
  },
  {
    question: "Faut-il un conduit de cheminée pour installer un poêle à bois ?",
    answer:
      "Un conduit est indispensable. S'il n'existe pas, un tubage inox sera créé à travers le toit (1 500 à 3 000 € supplémentaires). Si un conduit maçonné existe déjà, un simple tubage suffit (500 à 1 000 €).",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur le prix d'un poêle à bois"
      items={faqItems}
    />
  );
}
