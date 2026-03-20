import { FaqSection as FaqSectionBase, type FaqItem } from "@/components/sections/faq-section";

const faqItems: FaqItem[] = [
  {
    question: "Quels sont les principaux facteurs qui influencent le prix d'un poêle à granulés ?",
    answer:
      "Le prix dépend de la puissance de chauffe, de la marque et de la gamme, du type de conduit de fumée à installer, des options de confort (programmation, connectivité) et de la complexité de la pose. Un devis personnalisé permet d'estimer précisément votre budget.",
  },
  {
    question: "L'installation est-elle comprise dans le prix ?",
    answer:
      "Oui, nos devis incluent la fourniture du poêle, l'installation complète par un artisan RGE, la fumisterie (création ou tubage du conduit) et la mise en service. Tout est détaillé pour une transparence totale.",
  },
  {
    question: "Les aides sont-elles cumulables ?",
    answer:
      "Oui, MaPrimeRénov' (jusqu'à 1 250 €), la prime CEE (jusqu'à 250 €), la TVA réduite à 5,5 % et l'éco-prêt à taux zéro sont cumulables. Le montant des aides dépend de vos revenus et de votre situation.",
  },
  {
    question: "Le devis est-il gratuit et sans engagement ?",
    answer:
      "Oui, l'estimation en ligne et le devis détaillé établi après la visite technique sont entièrement gratuits et sans engagement. Vous décidez en toute liberté.",
  },
  {
    question: "Un poêle à granulés est-il rentable ?",
    answer:
      "Oui. Le granulé de bois est l'un des combustibles les moins chers du marché. Avec un rendement pouvant atteindre 95 %, le poêle à granulés permet de réaliser des économies significatives sur votre facture de chauffage dès la première année.",
  },
  {
    question: "Combien coûte l'entretien annuel d'un poêle à granulés ?",
    answer:
      "L'entretien annuel par un professionnel et les deux ramonages obligatoires représentent un budget modéré. Cet investissement garantit la sécurité, maintient les performances et prolonge la durée de vie de votre appareil.",
  },
  {
    question: "Existe-t-il des solutions de financement ?",
    answer:
      "Oui, l'éco-prêt à taux zéro permet de financer le reste à charge sans intérêts, sur une durée pouvant aller jusqu'à 20 ans. Certaines banques proposent également des prêts verts à taux avantageux.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur le prix d'un poêle à granulés"
      items={faqItems}
    />
  );
}
