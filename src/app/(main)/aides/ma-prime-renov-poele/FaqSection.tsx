import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Quel est le montant de MaPrimeRénov' pour un poêle en 2026 ?",
    answer:
      "Le montant dépend de vos revenus : jusqu'à 1 250 € pour les ménages très modestes, 1 000 € pour les ménages modestes et 750 € pour les revenus intermédiaires. Les ménages aux revenus supérieurs ne sont pas éligibles à cette aide pour l'installation d'un poêle.",
  },
  {
    question: "Quelles sont les conditions pour bénéficier de MaPrimeRénov' ?",
    answer:
      "Vous devez être propriétaire du logement (occupant ou bailleur), le logement doit avoir plus de 15 ans, et les travaux doivent être réalisés par un artisan certifié RGE. L'appareil installé doit respecter des critères de performance énergétique (label Flamme Verte 7 étoiles ou équivalent).",
  },
  {
    question: "Peut-on cumuler MaPrimeRénov' avec d'autres aides ?",
    answer:
      "Oui, MaPrimeRénov' est cumulable avec la prime énergie (CEE), l'éco-prêt à taux zéro (éco-PTZ) et la TVA réduite à 5,5 %. En cumulant ces dispositifs, votre reste à charge peut être considérablement réduit.",
  },
  {
    question: "Faut-il faire la demande avant ou après les travaux ?",
    answer:
      "La demande doit impérativement être déposée avant le début des travaux. Vous créez votre compte sur maprimerenov.gouv.fr, déposez votre dossier avec le devis de l'artisan RGE, puis attendez l'accord avant de lancer l'installation.",
  },
  {
    question: "Quand reçoit-on le versement de MaPrimeRénov' ?",
    answer:
      "Le versement intervient après la fin des travaux. Une fois la facture et les justificatifs transmis sur votre espace en ligne, le virement est effectué sous quelques semaines directement sur votre compte bancaire.",
  },
  {
    question: "Les locataires peuvent-ils bénéficier de MaPrimeRénov' ?",
    answer:
      "Non, MaPrimeRénov' est réservée aux propriétaires occupants et aux propriétaires bailleurs. Les locataires ne peuvent pas déposer de demande, mais le propriétaire peut le faire pour le logement qu'il met en location.",
  },
  {
    question: "Quel type de poêle est éligible à MaPrimeRénov' ?",
    answer:
      "Les poêles à bois (bûches) et les poêles à granulés (pellets) sont éligibles, à condition de respecter les critères de performance énergétique définis par l'ANAH. En pratique, la plupart des appareils récents labellisés Flamme Verte 7 étoiles remplissent ces conditions.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur MaPrimeRénov' poêle"
      items={faqItems}
    />
  );
}
