import { FaqSection as FaqSectionComponent } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Qu'est-ce qu'un installateur RGE pour poêle à granulés ?",
    answer:
      "C'est un artisan chauffagiste qui détient la certification Qualibois, délivrée par Qualit'EnR. Elle atteste de sa compétence pour installer des appareils de chauffage au bois et aux granulés dans le respect des normes en vigueur.",
  },
  {
    question: "Est-il obligatoire de passer par un artisan RGE ?",
    answer:
      "Oui, si vous souhaitez bénéficier des aides publiques (MaPrimeRénov', prime CEE, TVA à 5,5 %). Sans artisan RGE, l'installation reste légale mais vous ne pourrez prétendre à aucun financement.",
  },
  {
    question: "Comment vérifier qu'un artisan est bien certifié RGE ?",
    answer:
      "Consultez l'annuaire officiel France Rénov' sur france-renov.gouv.fr. Vous pouvez y rechercher un professionnel par code postal et vérifier la validité de sa certification en temps réel.",
  },
  {
    question: "Quelle est la différence entre Qualibois et Qualibat RGE ?",
    answer:
      "Qualibois est spécifique aux appareils de chauffage au bois (poêles, inserts, chaudières bois). Qualibat RGE couvre un champ plus large (isolation, ventilation, etc.). Pour un poêle, vérifiez la mention Qualibois.",
  },
  {
    question: "Combien coûte l'installation d'un poêle par un artisan RGE ?",
    answer:
      "Le coût d'installation varie entre 500 € et 1 500 € selon la complexité du chantier (création de conduit, tubage existant, raccordement). Ce montant est généralement inclus dans le devis global du poêle.",
  },
  {
    question: "Quelles aides peut-on obtenir avec un installateur RGE ?",
    answer:
      "Vous pouvez cumuler MaPrimeRénov' (jusqu'à 2 500 €), la prime CEE (jusqu'à 800 €), la TVA réduite à 5,5 % et parfois des aides locales. Le montant dépend de vos revenus et de votre zone géographique.",
  },
  {
    question: "Quel délai pour trouver un installateur RGE disponible ?",
    answer:
      "Les délais varient selon la saison et votre région. En moyenne, comptez 2 à 6 semaines entre la demande de devis et le début des travaux. Anticiper avant l'hiver est recommandé.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionComponent
      title="Questions fréquentes sur les installateurs RGE"
      items={faqItems}
    />
  );
}
