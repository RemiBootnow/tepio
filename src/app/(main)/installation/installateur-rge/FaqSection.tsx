import { FaqSection as FaqSectionBase, type FaqItem } from "@/components/sections/faq-section";

const faqItems: FaqItem[] = [
  {
    question: "Qu'est-ce que la certification RGE ?",
    answer:
      "RGE signifie Reconnu Garant de l'Environnement. C'est une certification délivrée par des organismes accrédités (comme Qualibois) qui atteste des compétences d'un artisan en matière d'efficacité énergétique et d'installation d'équipements de chauffage.",
  },
  {
    question: "Est-il obligatoire de faire appel à un installateur RGE ?",
    answer:
      "Oui, c'est obligatoire pour bénéficier de MaPrimeRénov', des CEE, de la TVA à 5,5 % et de l'éco-prêt à taux zéro. Au-delà des aides, un artisan RGE garantit une installation conforme aux normes et sécurisée.",
  },
  {
    question: "Comment vérifier qu'un artisan est bien certifié RGE ?",
    answer:
      "Vous pouvez vérifier la certification d'un artisan sur le site officiel de France Rénov' ou demander son certificat RGE. Tous nos artisans partenaires sont certifiés et nous vérifions régulièrement leur qualification.",
  },
  {
    question: "Quelles garanties offre un installateur RGE ?",
    answer:
      "Un installateur RGE dispose d'une assurance décennale couvrant les défauts d'installation pendant 10 ans. Il garantit aussi une pose conforme aux normes DTU 24.1 et NF, ainsi qu'une mise en service sécurisée.",
  },
  {
    question: "Combien de temps dure l'installation d'un poêle ?",
    answer:
      "L'installation prend généralement une journée. Si des travaux de fumisterie importants sont nécessaires (création de conduit), cela peut prendre deux jours. L'artisan vous informe du planning lors de la visite technique.",
  },
  {
    question: "Que comprend le devis d'un installateur RGE ?",
    answer:
      "Le devis détaille la fourniture du poêle, les travaux de fumisterie, la main-d'œuvre, la mise en service et les aides déduites. Tout est transparent pour que vous connaissiez précisément votre reste à charge.",
  },
  {
    question: "L'installateur assure-t-il un service après-vente ?",
    answer:
      "Oui, nos artisans RGE assurent la mise en service, le premier allumage et vous accompagnent pour l'entretien et le suivi de votre installation. Ils restent disponibles en cas de besoin après la pose.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur les installateurs RGE"
      items={faqItems}
    />
  );
}
