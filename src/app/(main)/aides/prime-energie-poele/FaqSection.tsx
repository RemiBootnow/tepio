import { FaqSection as FaqSectionBase, type FaqItem } from "@/components/sections/faq-section";

const faqItems: FaqItem[] = [
  {
    question: "Peut-on cumuler la prime CEE avec MaPrimeRénov' pour un poêle ?",
    answer: "Oui, la prime énergie CEE est cumulable avec MaPrimeRénov', la TVA réduite à 5,5 % et l'éco-prêt à taux zéro. Ces aides combinées peuvent couvrir jusqu'à 90 % du coût de votre poêle.",
  },
  {
    question: "Quel est le montant de la prime CEE pour un poêle à granulés ?",
    answer: "Le montant varie entre 250 € et 800 € selon vos revenus et votre zone géographique. Les ménages aux revenus modestes bénéficient des montants les plus élevés grâce au dispositif Coup de Pouce Chauffage.",
  },
  {
    question: "Faut-il demander la prime CEE avant ou après l'installation ?",
    answer: "La demande doit impérativement être faite avant la signature du devis. Si vous signez votre devis avant d'avoir constitué votre dossier CEE, vous perdez votre droit à la prime.",
  },
  {
    question: "Quels poêles sont éligibles à la prime énergie ?",
    answer: "Tous les poêles à bois, à granulés, hybrides et de masse sont éligibles, à condition d'afficher un rendement supérieur ou égal à 75 % et de respecter les seuils d'émission de particules fines.",
  },
  {
    question: "Qui verse la prime CEE pour un poêle ?",
    answer: "La prime est versée par un fournisseur d'énergie (EDF, Engie, TotalEnergies, etc.) ou un délégataire. Elle peut être versée par virement, chèque, ou déduite directement de votre facture d'installation.",
  },
  {
    question: "Combien de temps faut-il pour recevoir la prime CEE ?",
    answer: "Une fois votre dossier complet (facture, attestation sur l'honneur, certificat RGE), la prime est généralement versée sous 4 à 8 semaines selon l'organisme.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur la prime énergie poêle"
      items={faqItems}
    />
  );
}
