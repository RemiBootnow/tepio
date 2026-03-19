import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Est-ce vraiment gratuit de vous consulter ?",
    answer:
      "Oui, à 100%. Vous ne nous payez rien. Nous sommes rémunérés par nos partenaires artisans (qui choisissent de travailler avec nous). Zéro frais cachés, zéro engagement de votre part.",
  },
  {
    question: "Qui sont vos artisans partenaires ?",
    answer:
      "Des professionnels RGE certifiés (Reconnu Garant de l'Environnement), locaux, avec un historique prouvé et des produits de marques reconnues (Daikin, Atlantic, Bosch, etc.). Nous les sélectionnons sur leur sérieux, leur réactivité et leur SAV.",
  },
  {
    question: "Comment être sûr que je bénéficie de toutes les aides ?",
    answer:
      "Nos artisans sont experts en montage de dossiers d'aides. Ils vérifient votre éligibilité, constituent votre dossier MaPrimeRénov' et CEE, et déduisent les montants directement de votre facture. Vous n'avez rien à faire.",
  },
  {
    question: "Et si je change d'avis ?",
    answer:
      "Tant que vous n'avez pas signé de devis avec l'artisan, vous êtes libre. Aucun engagement avec Mon Expert Renov'. Et même après signature, vous bénéficiez d'un délai de rétractation légal de 14 jours.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Questions posées régulièrement"
      items={faqItems}
    />
  );
}
