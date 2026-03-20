import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Quel est le prix d'installation d'un poele a bois ?",
    answer:
      "Le cout depend du modele choisi, de la complexite de l'installation et du conduit existant. Contactez-nous pour obtenir une estimation personnalisee adaptee a votre logement.",
  },
  {
    question: "Faut-il un conduit de cheminee pour installer un poele a bois ?",
    answer:
      "Un conduit conforme est necessaire, mais s'il n'existe pas, nos artisans peuvent en creer un. Un tubage en inox est installe pour garantir la securite et le tirage optimal.",
  },
  {
    question: "Quelles sont les aides pour un poele a bois en 2026 ?",
    answer:
      "Vous pouvez beneficier de MaPrimeRenov', de la prime CEE, de la TVA a 5,5 % et de l'eco-pret a taux zero. Ces aides sont cumulables et soumises a des conditions de ressources.",
  },
  {
    question: "Quelle puissance de poele a bois choisir pour ma maison ?",
    answer:
      "La puissance depend de la surface a chauffer et de l'isolation de votre logement. En general, comptez 1 kW pour 10 m² bien isoles. Un bilan thermique permet de determiner la puissance ideale.",
  },
  {
    question: "Combien de bois consomme un poele a bois par hiver ?",
    answer:
      "Pour une maison de 100 m², la consommation moyenne se situe entre 4 et 8 steres de bois par saison de chauffe, selon l'isolation et l'usage en chauffage principal ou d'appoint.",
  },
  {
    question: "Le poele a bois peut-il chauffer toute la maison ?",
    answer:
      "Un poele a bois peut servir de chauffage principal pour un espace ouvert ou de complement dans une maison bien isolee. Pour diffuser la chaleur dans les pieces eloignees, un systeme de distribution d'air est possible.",
  },
  {
    question: "Quel entretien necessite un poele a bois ?",
    answer:
      "Un ramonage du conduit est obligatoire deux fois par an (dont une en periode de chauffe). Le vidage regulier du cendrier et le nettoyage de la vitre completent l'entretien courant.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur le poêle à bois"
      items={faqItems}
    />
  );
}
