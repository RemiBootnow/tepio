import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Quel est le montant de la prime énergie pour un poêle ?",
    answer:
      "Le montant de la prime CEE pour un poêle est d'environ 250 €. Il varie selon l'organisme, la zone géographique et le type d'appareil installé. Certains fournisseurs proposent des montants bonifiés pour les ménages modestes.",
  },
  {
    question: "Qui finance la prime énergie ?",
    answer:
      "La prime énergie est financée par les fournisseurs d'énergie (EDF, Engie, TotalEnergies, etc.) dans le cadre de leur obligation légale de promouvoir les économies d'énergie. Ce n'est pas une aide de l'État à proprement parler.",
  },
  {
    question: "Peut-on cumuler la prime CEE avec MaPrimeRénov' ?",
    answer:
      "Oui, la prime énergie est parfaitement cumulable avec MaPrimeRénov', l'éco-PTZ et la TVA réduite à 5,5 %. C'est même recommandé pour réduire au maximum votre reste à charge.",
  },
  {
    question: "Faut-il s'inscrire avant de signer le devis ?",
    answer:
      "Oui, c'est une condition essentielle. Vous devez vous inscrire auprès de l'organisme délivrant la prime CEE avant de signer le devis avec l'artisan. Toute demande postérieure à la signature du devis sera refusée.",
  },
  {
    question: "Quels poêles sont éligibles à la prime CEE ?",
    answer:
      "Les poêles à bois (bûches) et les poêles à granulés (pellets) sont éligibles, à condition de respecter des seuils de rendement énergétique et d'émissions. Les appareils labellisés Flamme Verte 7 étoiles remplissent généralement ces critères.",
  },
  {
    question: "La prime énergie est-elle soumise à des conditions de revenus ?",
    answer:
      "Non, la prime CEE est accessible à tous les ménages sans condition de revenus. Cependant, certains organismes proposent des montants bonifiés (« coup de pouce ») pour les ménages aux revenus modestes ou très modestes.",
  },
  {
    question: "Combien de temps faut-il pour recevoir la prime ?",
    answer:
      "Le délai de versement varie selon l'organisme, mais il faut généralement compter entre 4 et 8 semaines après la transmission de la facture et de l'attestation sur l'honneur. Le versement se fait par virement ou par chèque.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur la prime énergie"
      items={faqItems}
    />
  );
}
