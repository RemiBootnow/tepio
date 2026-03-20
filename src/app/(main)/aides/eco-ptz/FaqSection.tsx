import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Quel montant peut-on emprunter avec l'éco-PTZ pour un poêle ?",
    answer:
      "Pour une action simple comme l'installation d'un poêle, le montant maximal est de 15 000 €. Si vous combinez plusieurs travaux de rénovation énergétique, le plafond peut atteindre 50 000 €.",
  },
  {
    question: "L'éco-PTZ est-il accessible sans condition de revenus ?",
    answer:
      "Oui, l'éco-PTZ est ouvert à tous les propriétaires (occupants ou bailleurs) sans aucune condition de ressources. C'est l'un de ses principaux avantages par rapport à d'autres aides.",
  },
  {
    question: "Peut-on cumuler l'éco-PTZ avec MaPrimeRénov' ?",
    answer:
      "Absolument. L'éco-PTZ est cumulable avec MaPrimeRénov', la prime énergie (CEE) et la TVA réduite à 5,5 %. Vous pouvez emprunter via l'éco-PTZ uniquement le reste à charge après déduction des autres aides.",
  },
  {
    question: "Quelle est la durée maximale de remboursement ?",
    answer:
      "La durée maximale de remboursement est de 20 ans. Vous pouvez choisir une durée plus courte selon vos capacités de remboursement, en accord avec votre banque.",
  },
  {
    question: "Quelles banques proposent l'éco-PTZ ?",
    answer:
      "L'éco-PTZ est disponible dans les banques ayant signé une convention avec l'État : Crédit Agricole, BNP Paribas, Banque Populaire, Caisse d'Épargne, Société Générale, Crédit Mutuel, entre autres.",
  },
  {
    question: "Faut-il un artisan RGE pour bénéficier de l'éco-PTZ ?",
    answer:
      "Oui, les travaux doivent obligatoirement être réalisés par un professionnel certifié RGE (Reconnu Garant de l'Environnement). C'est une condition indispensable pour obtenir le prêt.",
  },
  {
    question: "Peut-on demander un éco-PTZ si on a déjà un crédit immobilier ?",
    answer:
      "Oui, l'éco-PTZ est indépendant de votre crédit immobilier. Il s'agit d'un prêt complémentaire spécifiquement dédié aux travaux de rénovation énergétique. Votre banque évaluera simplement votre capacité d'endettement globale.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur l'éco-PTZ"
      items={faqItems}
    />
  );
}
