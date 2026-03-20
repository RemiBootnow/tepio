import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Qui peut bénéficier de MaPrimeRénov' pour un poêle ?",
    answer:
      "Tous les propriétaires occupants, bailleurs et copropriétaires peuvent en bénéficier, sans condition de revenus. Le logement doit être construit depuis plus de 15 ans et être votre résidence principale.",
  },
  {
    question: "Quel est le montant de MaPrimeRénov' pour un poêle à granulés ?",
    answer:
      "Le montant varie selon vos revenus : jusqu'à 2 500 € pour les ménages très modestes, 2 000 € pour les modestes et 1 500 € pour les revenus intermédiaires. Les ménages aisés ne sont pas éligibles pour cet équipement seul.",
  },
  {
    question: "Faut-il obligatoirement un artisan RGE ?",
    answer:
      "Oui, c'est une condition indispensable. Seuls les travaux réalisés par un professionnel certifié RGE (Reconnu Garant de l'Environnement) sont éligibles à MaPrimeRénov'.",
  },
  {
    question: "Peut-on cumuler MaPrimeRénov' avec d'autres aides ?",
    answer:
      "Oui, MaPrimeRénov' est cumulable avec la prime CEE, la TVA à 5,5 %, l'éco-prêt à taux zéro et certaines aides locales. Le cumul peut réduire votre reste à charge de 60 à 80 %.",
  },
  {
    question: "Combien de temps faut-il pour recevoir MaPrimeRénov' ?",
    answer:
      "Après dépôt du dossier complet avec les factures, le versement intervient généralement sous 2 à 4 semaines. Le dépôt de la demande doit être fait avant le début des travaux.",
  },
  {
    question: "MaPrimeRénov' est-elle versée avant ou après les travaux ?",
    answer:
      "L'aide est versée après la fin des travaux et l'envoi des factures sur la plateforme maprimerenov.gouv.fr. Certains ménages très modestes peuvent demander une avance.",
  },
  {
    question: "Quels poêles à bois sont éligibles à MaPrimeRénov' ?",
    answer:
      "Les poêles à bûches et à granulés doivent avoir un rendement énergétique d'au moins 75 % et respecter les seuils d'émissions de particules. Le label Flamme Verte 7 étoiles garantit l'éligibilité.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur MaPrimeRénov' et les poêles"
      items={faqItems}
    />
  );
}
