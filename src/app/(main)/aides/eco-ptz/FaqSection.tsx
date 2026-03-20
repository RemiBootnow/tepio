import { FaqSection as FaqSectionBase, type FaqItem } from "@/components/sections/faq-section";

const faqItems: FaqItem[] = [
  {
    question: "Peut-on utiliser l'éco-PTZ pour installer un poêle à granulés ?",
    answer:
      "Oui, l'installation d'un poêle à granulés fait partie des travaux éligibles à l'éco-PTZ, à condition qu'elle soit réalisée par un artisan certifié RGE. Vous pouvez emprunter jusqu'à 15 000 € pour cette seule action.",
  },
  {
    question: "L'éco-PTZ est-il cumulable avec MaPrimeRénov' ?",
    answer:
      "Oui, depuis 2022 l'éco-PTZ est pleinement cumulable avec MaPrimeRénov'. Vous pouvez même utiliser l'éco-PTZ pour financer votre reste à charge après déduction de MaPrimeRénov' et des primes CEE.",
  },
  {
    question: "Quelles sont les conditions d'éligibilité de l'éco-PTZ ?",
    answer:
      "Vous devez être propriétaire (occupant ou bailleur) d'un logement construit depuis plus de 2 ans, utilisé comme résidence principale. Aucune condition de revenus n'est exigée. Les travaux doivent être réalisés par un professionnel RGE.",
  },
  {
    question: "Quelle est la durée maximale de remboursement ?",
    answer:
      "La durée de remboursement est de 15 ans pour la plupart des travaux, et peut aller jusqu'à 20 ans pour les bouquets de travaux ambitieux visant une performance énergétique globale.",
  },
  {
    question: "Comment demander un éco-PTZ auprès de ma banque ?",
    answer:
      "Munissez-vous du devis de votre artisan RGE et du formulaire « emprunteur » (disponible en ligne). Présentez-les à une banque ayant signé une convention avec l'État. La réponse arrive généralement sous 30 jours.",
  },
  {
    question: "Peut-on obtenir un deuxième éco-PTZ pour le même logement ?",
    answer:
      "Oui, un éco-PTZ complémentaire est possible si le montant cumulé des deux prêts ne dépasse pas 50 000 €. Il faut que le premier prêt ait été émis depuis au moins un an pour pouvoir en solliciter un second.",
  },
  {
    question: "L'éco-PTZ est-il disponible en 2026 ?",
    answer:
      "Oui, l'éco-PTZ a été prolongé jusqu'au 31 décembre 2027. Vous pouvez en faire la demande dès maintenant auprès d'une banque partenaire pour tous travaux éligibles.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur l'éco-prêt à taux zéro"
      items={faqItems}
    />
  );
}
