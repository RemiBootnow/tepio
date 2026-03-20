import { FaqSection as FaqSectionComponent } from "@/components/sections/faq-section";

const faqItems = [
  {
    question: "Quelle est la différence entre un insert et un foyer fermé ?",
    answer:
      "L'insert s'encastre dans une cheminée existante, tandis que le foyer fermé est conçu pour une installation neuve. En rénovation, l'insert est la solution la plus courante car il s'adapte à votre conduit et habillage actuels.",
  },
  {
    question: "Mon conduit de cheminée est-il compatible avec un insert ?",
    answer:
      "Dans la grande majorité des cas, oui. Un artisan RGE réalise un diagnostic préalable pour vérifier l'état du conduit. Si nécessaire, un tubage inox est posé pour garantir l'étanchéité et la sécurité.",
  },
  {
    question: "Combien de temps dure l'installation d'un insert cheminée ?",
    answer:
      "L'installation prend généralement une journée, tubage compris. Les travaux sont peu invasifs : pas besoin de casser de murs ni de gros travaux de maçonnerie dans la plupart des cas.",
  },
  {
    question: "Un insert cheminée chauffe-t-il toute la maison ?",
    answer:
      "Un insert chauffe efficacement la pièce principale et les espaces ouverts adjacents. Pour diffuser la chaleur dans d'autres pièces, un système de distribution d'air chaud par gainages peut être ajouté.",
  },
  {
    question: "Quelles aides financières pour l'installation d'un insert ?",
    answer:
      "Vous pouvez bénéficier de MaPrimeRénov', de la prime CEE et de la TVA à 5,5 %. Ces aides sont cumulables et conditionnées à l'intervention d'un artisan certifié RGE.",
  },
  {
    question: "Quel entretien pour un insert cheminée ?",
    answer:
      "Un ramonage obligatoire deux fois par an (dont une en période de chauffe), un nettoyage régulier de la vitre et une vérification annuelle des joints. Un insert bien entretenu dure plus de 20 ans.",
  },
  {
    question: "Insert à bûches ou insert à granulés : lequel choisir ?",
    answer:
      "L'insert à bûches offre le plaisir du feu traditionnel et un coût de combustible faible. L'insert à granulés apporte un confort d'utilisation supérieur avec un chargement automatique et une programmation de la température.",
  },
];

export function FaqSection() {
  return (
    <FaqSectionComponent
      title="Vos questions sur l'insert cheminée"
      items={faqItems}
    />
  );
}
