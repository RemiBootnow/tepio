import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";
import type { FaqItem } from "@/components/sections/faq-section";

const faqItems: FaqItem[] = [
  {
    question: "Quel type de bois utiliser dans un poêle à bois ?",
    answer:
      "Privilégiez les bois durs et secs (chêne, hêtre, charme) avec un taux d'humidité inférieur à 20 %. Un bois bien sec assure un meilleur rendement, moins de fumée et réduit l'encrassement du conduit.",
  },
  {
    question: "Quelle est la durée de vie d'un poêle à bois ?",
    answer:
      "Un poêle à bois en fonte ou en acier de qualité dure 20 à 30 ans avec un entretien régulier. Le ramonage deux fois par an et un entretien annuel par un professionnel sont recommandés.",
  },
  {
    question: "Un poêle à bois peut-il chauffer toute la maison ?",
    answer:
      "Un poêle à bois peut chauffer 80 à 120 m² selon sa puissance. Pour les grandes maisons, il est souvent utilisé en chauffage principal dans les pièces de vie, complété par un autre système dans les chambres.",
  },
  {
    question: "Faut-il un conduit de cheminée existant pour installer un poêle à bois ?",
    answer:
      "Un conduit de fumée est indispensable pour un poêle à bois. Si votre logement n'en possède pas, un conduit peut être créé en toiture par votre artisan RGE lors de l'installation.",
  },
  {
    question: "Quelles aides pour un poêle à bois en 2026 ?",
    answer:
      "En 2026, vous pouvez bénéficier de MaPrimeRénov' (jusqu'à 1 250 €), de la prime CEE, de la TVA réduite à 5,5 % et de l'éco-prêt à taux zéro. Ces aides sont cumulables et le montant dépend de vos revenus.",
  },
  {
    question: "Quelle puissance choisir pour mon poêle à bois ?",
    answer:
      "Comptez environ 1 kW pour 10 m² dans un logement bien isolé. Pour une pièce de vie de 40 m², un poêle de 4 à 6 kW suffit généralement. Votre artisan RGE dimensionne le poêle lors de la visite technique.",
  },
  {
    question: "Un poêle à bois fonctionne-t-il sans électricité ?",
    answer:
      "Oui, c'est l'un de ses principaux atouts. Un poêle à bois n'a besoin d'aucune alimentation électrique pour fonctionner. En cas de coupure de courant, vous conservez votre chauffage.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur le poêle à bois"
      items={faqItems}
    />
  );
}
