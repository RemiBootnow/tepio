import { FaqSection as FaqSectionBase } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Quelle est la difference entre un poele mixte et un poele a granules ?",
    answer:
      "Un poele a granules ne fonctionne qu'avec des pellets. Le poele mixte accepte aussi les buches de bois, ce qui vous offre plus de flexibilite d'approvisionnement et le plaisir d'une vraie flamme de bois.",
  },
  {
    question: "Un poele mixte peut-il chauffer toute une maison ?",
    answer:
      "Selon la puissance du modele (6 a 14 kW) et l'isolation de votre logement, un poele mixte peut chauffer de 40 a 120 m2. Pour une maison entiere, il peut etre utilise en complement d'un systeme central.",
  },
  {
    question: "Quelles aides financieres existent pour un poele mixte bois granules ?",
    answer:
      "Vous pouvez beneficier de MaPrimeRenov' (jusqu'a 2 500 euros), de la prime CEE, de la TVA a 5,5 % et de l'eco-PTZ. Ces aides sont cumulables et soumises a des conditions de revenus et de performance de l'appareil.",
  },
  {
    question: "Quel entretien necessite un poele mixte ?",
    answer:
      "Un ramonage obligatoire deux fois par an (dont une en periode de chauffe), un nettoyage regulier du cendrier et de la vitre, et une revision annuelle du systeme d'alimentation en granules par un professionnel.",
  },
  {
    question: "Le poele mixte est-il bruyant ?",
    answer:
      "En mode buches, le poele est totalement silencieux. En mode granules, le ventilateur de convection produit un leger souffle (35 a 45 dB selon les modeles), comparable a un refrigerateur.",
  },
  {
    question: "Faut-il un conduit de cheminee existant pour installer un poele mixte ?",
    answer:
      "Pas necessairement. Si votre logement ne dispose pas de conduit, un tubage exterieur peut etre installe le long de la facade. Notre technicien evalue la meilleure solution lors de la visite technique gratuite.",
  },
  {
    question: "Combien de temps dure l'installation d'un poele mixte ?",
    answer:
      "L'installation est generalement realisee en une journee par nos artisans RGE. Si un conduit doit etre cree, prevoyez un a deux jours de travaux supplementaires.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionBase
      title="Vos questions sur le poele mixte bois et granules"
      items={faqItems}
    />
  );
}
