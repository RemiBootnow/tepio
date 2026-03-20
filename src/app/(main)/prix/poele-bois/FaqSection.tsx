import { FaqSection as FaqSectionBase, type FaqItem } from "@/components/sections/faq-section";

const faqItems: FaqItem[] = [
  {
    question: "Quels sont les principaux facteurs qui influencent le prix d'un poêle à bois ?",
    answer:
      "Le prix dépend de la puissance, du matériau (fonte, acier, pierre ollaire), du design, de la marque et de la complexité d'installation (conduit de fumée, accessibilité). Un devis personnalisé permet d'estimer précisément votre budget.",
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
    question: "Un poêle à bois est-il rentable ?",
    answer:
      "Oui. Le bois bûche est le combustible le moins cher du marché. Avec un rendement de 70 à 85 % pour les modèles modernes, le poêle à bois permet de réduire significativement votre facture de chauffage.",
  },
  {
    question: "Combien coûte l'entretien annuel d'un poêle à bois ?",
    answer:
      "Un ramonage obligatoire deux fois par an et un nettoyage régulier du cendrier suffisent. C'est un entretien simple et peu coûteux qui garantit la sécurité et les performances de votre appareil.",
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
      title="Vos questions sur le prix d'un poêle à bois"
      items={faqItems}
    />
  );
}
