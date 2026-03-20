import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";
import type { FaqItem } from "@/components/sections/faq-section";

const faqItems: FaqItem[] = [
  {
    question: "Combien consomme un poêle à granulés par mois ?",
    answer:
      "En moyenne, un poêle à granulés consomme entre 1 et 2 sacs de 15 kg par jour en plein hiver, soit environ 40 à 80 euros par mois selon la surface à chauffer et l'isolation du logement.",
  },
  {
    question: "Quelle est la durée de vie d'un poêle à granulés ?",
    answer:
      "Un poêle à granulés bien entretenu a une durée de vie de 15 à 20 ans. Un entretien annuel par un professionnel et un ramonage deux fois par an sont recommandés pour maintenir ses performances.",
  },
  {
    question: "Peut-on installer un poêle à granulés en appartement ?",
    answer:
      "Oui, c'est possible sous certaines conditions : un conduit de fumée conforme, l'accord de la copropriété et une arrivée d'air frais. Un professionnel RGE évalue la faisabilité lors de la visite technique.",
  },
  {
    question: "Faut-il un conduit de cheminée existant ?",
    answer:
      "Non, un conduit existant n'est pas obligatoire. Si votre logement n'en possède pas, un conduit concentrique en ventouse peut être installé en façade ou en toiture par votre artisan.",
  },
  {
    question: "Quelles aides pour un poêle à granulés en 2026 ?",
    answer:
      "En 2026, vous pouvez bénéficier de MaPrimeRénov' (jusqu'à 1 800 €), de la prime CEE, de la TVA réduite à 5,5 % et éventuellement de l'éco-prêt à taux zéro. Le montant dépend de vos revenus.",
  },
  {
    question: "Un poêle à granulés peut-il chauffer toute la maison ?",
    answer:
      "Un poêle à granulés peut chauffer une surface de 80 à 120 m² selon sa puissance. Pour les grandes maisons, il est souvent utilisé en chauffage principal dans les pièces de vie, complété par un autre système dans les chambres.",
  },
  {
    question: "Un poêle à granulés est-il bruyant ?",
    answer:
      "Les modèles récents fonctionnent à un niveau sonore de 30 à 40 dB, comparable à un réfrigérateur. Certains modèles à convection naturelle sont quasi silencieux, sans ventilateur.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur le poêle à granulés"
      items={faqItems}
    />
  );
}
