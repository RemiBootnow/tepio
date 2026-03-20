import { FaqSection as FaqSectionComponent } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Quel est le prix moyen d'un poêle à granulés en 2026 ?",
    answer:
      "Le prix moyen d'un poêle à granulés se situe entre 2 500 € et 4 000 € hors pose. Les modèles entrée de gamme démarrent à 1 500 € et les modèles haut de gamme peuvent atteindre 6 000 €.",
  },
  {
    question: "Combien coûte l'installation d'un poêle à granulés ?",
    answer:
      "L'installation par un artisan RGE coûte entre 500 € et 1 500 € selon la complexité du chantier : création ou tubage du conduit, distance entre le poêle et la sortie de toit, accessibilité du logement.",
  },
  {
    question: "Quelles aides financières pour un poêle à granulés ?",
    answer:
      "Vous pouvez cumuler MaPrimeRénov' (jusqu'à 2 500 €), la prime CEE (jusqu'à 800 €), la TVA à 5,5 % et l'éco-PTZ. Le montant dépend de vos revenus et de la zone géographique.",
  },
  {
    question: "Combien consomme un poêle à granulés par an ?",
    answer:
      "Pour un logement de 100 m², comptez 1,5 à 2 tonnes de granulés par an, soit 600 € à 1 000 € de combustible. C'est 30 à 50 % moins cher qu'un chauffage électrique.",
  },
  {
    question: "Un poêle à granulés peut-il chauffer toute la maison ?",
    answer:
      "Un poêle à granulés standard chauffe efficacement 80 à 120 m². Pour une surface plus grande, un modèle canalisable diffuse la chaleur dans plusieurs pièces via des gaines.",
  },
  {
    question: "Quelle est la durée de vie d'un poêle à granulés ?",
    answer:
      "Un poêle à granulés bien entretenu dure 15 à 20 ans. L'entretien annuel (ramonage + nettoyage) est obligatoire et coûte entre 150 € et 250 €.",
  },
  {
    question: "Faut-il un conduit de cheminée pour installer un poêle à granulés ?",
    answer:
      "Un conduit est nécessaire mais peut être créé lors de l'installation. Le tubage d'un conduit existant coûte 500 € à 1 000 €, la création d'un conduit ventouse est aussi possible.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionComponent
      title="Vos questions sur le prix d'un poêle à granulés"
      items={faqItems}
    />
  );
}
