import { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/typography";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Clock, ArrowRight } from "@untitledui-pro/icons/line";

export const metadata: Metadata = generatePageMetadata({
  title: "Actualités",
  description:
    "Suivez les dernières actualités sur la rénovation énergétique, MaPrimeRénov', les aides de l'État et les tendances du marché des poêles à bois et granulés.",
  keywords: ["actualités rénovation énergétique", "MaPrimeRénov", "aides énergie", "poêle à bois"],
  canonical: "/actualites",
});

const articles = [
  {
    slug: "fin-bouclier-tarifaire-prix-electricite-2026",
    title: "Fin du bouclier tarifaire : combien va vraiment coûter l'électricité en 2026 ?",
    excerpt:
      "Le bouclier tarifaire a disparu, l'ARENH n'existe plus et le TURPE continue d'augmenter. Décryptage des vrais chiffres du prix de l'électricité en 2026 et des alternatives pour réduire sa facture.",
    date: "20 mars 2026",
    readTime: "8 min de lecture",
    category: "Aides & financement",
    thumbnail: "/actualites/fin-bouclier-tarifaire-prix-electricite-2026/thumbnail.jpg",
  },
  {
    slug: "europe-strategie-bois-energie-impact",
    title: "L'Europe renforce sa stratégie bois-énergie : quel impact pour les particuliers ?",
    excerpt:
      "L'Europe durcit ses exigences sur le bois-énergie avec la directive RED III et les futures normes Ecodesign 2027. Décryptage des impacts concrets pour les ménages français et des aides encore disponibles en 2026.",
    date: "17 mars 2026",
    readTime: "8 min de lecture",
    category: "Réglementation",
    thumbnail: "/actualites/europe-strategie-bois-energie-impact/thumbnail.jpg",
  },
  {
    slug: "production-granules-bois-record-2026",
    title: "Granulés de bois : la production française atteint un record en 2026",
    excerpt:
      "La France produit désormais 2,2 millions de tonnes de granulés de bois par an, un record historique porté par 135 sites de production. Cette montée en puissance stabilise les prix autour de 360-430 €/tonne.",
    date: "6 mars 2026",
    readTime: "6 min de lecture",
    category: "Marché",
    thumbnail: "/actualites/production-granules-bois-record-2026/thumbnail.jpg",
  },
  {
    slug: "maprimerenov-2026-baisse-aides-poeles",
    title: "MaPrimeRénov' 2026 : baisse des aides pour les poêles à granulés ?",
    excerpt:
      "Les aides MaPrimeRénov' pour les poêles à granulés ont été divisées par deux en deux ans. Montants 2026, prime CEE, stratégie gouvernementale : tout ce qu'il faut savoir pour investir au bon moment.",
    date: "13 mars 2026",
    readTime: "8 min de lecture",
    category: "Aides & financement",
    thumbnail: "/actualites/maprimerenov-2026-baisse-aides-poeles/thumbnail.jpg",
  },
  {
    slug: "manque-artisans-rge-2026-delais",
    title: "Manque d'artisans RGE en 2026 : pourquoi les délais explosent",
    excerpt:
      "Avec seulement 62 000 entreprises certifiées RGE pour un objectif de 113 000, la France fait face à une pénurie structurelle d'artisans qualifiés. Résultat : les délais s'allongent de 9 à 14 mois.",
    date: "27 février 2026",
    readTime: "8 min de lecture",
    category: "Marché",
    thumbnail: "/actualites/manque-artisans-rge-2026-delais/thumbnail.jpg",
  },
  {
    slug: "norme-ecodesign-poeles-2026",
    title: "Norme EcoDesign : ce qui devient obligatoire pour les nouveaux poêles",
    excerpt:
      "La directive européenne EcoDesign impose des seuils stricts de rendement (75 % minimum) et d'émissions pour tous les poêles neufs. Avec la norme EN 16510, les exigences se durcissent encore.",
    date: "6 février 2026",
    readTime: "8 min de lecture",
    category: "Réglementation",
    thumbnail: "/actualites/norme-ecodesign-poeles-2026/thumbnail.jpg",
  },
  {
    slug: "prix-electricite-2026-retour-bois",
    title: "Prix de l'électricité en 2026 : pourquoi les Français reviennent au bois",
    excerpt:
      "Avec un kWh électrique à 0,19 € contre 0,07 € pour les granulés de bois, l'écart n'a jamais été aussi marqué. En 2026, de plus en plus de ménages français font le calcul et reviennent au chauffage bois.",
    date: "23 janvier 2026",
    readTime: "8 min de lecture",
    category: "Marché",
    thumbnail: "/actualites/prix-electricite-2026-retour-bois/thumbnail.jpg",
  },
  {
    slug: "poele-granules-rentabilite-2026",
    title: "Poêle à granulés : est-ce encore rentable en 2026 ?",
    excerpt:
      "Prix des granulés stabilisés autour de 350-430 €/tonne, aides MaPrimeRénov' maintenues — on fait le calcul complet du retour sur investissement en 2026.",
    date: "18 février 2026",
    readTime: "7 min de lecture",
    category: "Installation",
    thumbnail: "/actualites/poele-granules-rentabilite-2026/thumbnail.jpg",
  },
  {
    slug: "maprimerenov-bilan-2025",
    title: "MaPrimeRénov' 2025 : bilan chiffré et ce qui change en 2026",
    excerpt:
      "120 306 rénovations d'ampleur réalisées, un budget de 3,81 milliards d'euros distribué… L'Anah dresse un bilan contrasté pour 2025 et annonce de nouvelles règles pour 2026.",
    date: "9 janvier 2026",
    readTime: "6 min de lecture",
    category: "Aides & financement",
    thumbnail: "/actualites/maprimerenov-bilan-2025/thumbnail.jpg",
  },
];

export default function ActualitesPage() {
  return (
    <div>
      <Section as="div" className="pt-10 pb-8 md:pt-14 md:pb-10">
        <Breadcrumb
          items={[{ label: "Accueil", href: "/" }, { label: "Actualités" }]}
          className="mb-6"
        />
        <Heading as="h1" className="mb-3">Actualités</Heading>
        <p className="text-muted-foreground text-lg">
          Rénovation énergétique, aides de l'État, poêles à bois et granulés — toute l'actu du secteur.
        </p>
      </Section>

      <Section as="div" className="pb-20">
        <div className="flex flex-col divide-y divide-border">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/actualites/${article.slug}`}
              className="group py-8 flex flex-col sm:flex-row gap-5 hover:opacity-80 transition-opacity"
            >
              {article.thumbnail && (
                <div className="relative w-full sm:w-48 md:w-56 shrink-0 aspect-16/10 rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 224px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {article.category}
                </span>
                <Heading as="h3" className="text-xl transition-colors">
                  {article.title}
                </Heading>
                <p className="text-muted-foreground leading-6">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1 ml-auto text-foreground font-medium">
                    Lire l'article <ArrowRight className="size-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
