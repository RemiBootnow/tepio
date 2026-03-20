import { FaqSection as FaqSectionComponent } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Quelle est la différence entre pellets et granulés de bois ?",
    answer: "Aucune : « pellets » et « granulés de bois » désignent exactement le même combustible. Le terme « pellet » vient de l'anglais et est couramment utilisé en France aux côtés de « granulé ».",
  },
  {
    question: "Combien coûte une tonne de pellets en France ?",
    answer: "Le prix varie selon la saison et le mode de livraison. En moyenne, comptez entre 280 et 400 € la tonne. Acheter en palette hors saison de chauffe permet souvent de bénéficier de tarifs plus avantageux.",
  },
  {
    question: "Quelle puissance de poêle à pellets pour ma surface ?",
    answer: "En règle générale, comptez 1 kW pour 10 m² dans une maison bien isolée. Un conseiller évalue précisément vos besoins lors de la visite technique, en tenant compte de l'isolation et du climat local.",
  },
  {
    question: "L'installation d'un poêle à pellets nécessite-t-elle un conduit de cheminée ?",
    answer: "Oui, un conduit d'évacuation des fumées est indispensable. Si votre logement n'en possède pas, un conduit ventouse en façade ou en toiture peut être installé par nos techniciens.",
  },
  {
    question: "Quelles aides financières pour un poêle à pellets en 2026 ?",
    answer: "Vous pouvez cumuler MaPrimeRénov', la prime CEE et la TVA à 5,5 %. L'éco-prêt à taux zéro permet de financer le reste à charge sans intérêts. Nos conseillers vous aident à constituer les dossiers.",
  },
  {
    question: "À quelle fréquence faut-il entretenir un poêle à pellets ?",
    answer: "Un nettoyage du creuset et du cendrier est recommandé chaque semaine. Un entretien annuel par un professionnel qualifié est obligatoire et inclut le ramonage du conduit de fumée.",
  },
  {
    question: "Un poêle à pellets peut-il chauffer toute une maison ?",
    answer: "Un poêle à pellets chauffe efficacement la pièce où il est installé et les espaces ouverts adjacents. Pour une maison entière, un modèle canalisable ou un système de distribution d'air chaud peut être envisagé.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionComponent
      title="Questions fréquentes sur le poêle à pellets"
      items={faqItems}
    />
  );
}
