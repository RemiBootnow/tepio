import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { ArticleLayout } from "@/components/layout/ArticleLayout";

export const metadata: Metadata = generatePageMetadata({
  title: "MaPrimeRénov' 2025 : bilan chiffré et ce qui change en 2026",
  description:
    "L'Anah publie son bilan 2025 : 120 306 rénovations d'ampleur, 3,81 milliards d'euros distribués. Objectifs manqués sur les monogestes, nouvelles règles en 2026.",
  keywords: [
    "MaPrimeRénov bilan 2025",
    "résultats MaPrimeRénov 2025",
    "Anah 2025",
    "rénovation énergétique bilan",
    "aides rénovation 2025",
    "MaPrimeRénov 2026 nouveautés",
    "rénovation d'ampleur",
  ],
  canonical: "/actualites/maprimerenov-bilan-2025",
});

export default function ArticlePage() {
  return (
    <ArticleLayout
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Actualités", href: "/actualites" },
        { label: "MaPrimeRénov' : bilan 2025" },
      ]}
      title="MaPrimeRénov' 2025 : bilan chiffré et ce qui change en 2026"
      subtitle="120 000 rénovations d'ampleur réalisées, 3,81 milliards distribués — mais les rénovations par geste en chute de 25 %. L'Anah dresse un bilan contrasté et annonce de nouvelles règles pour 2026."
      date="9 janvier 2026"
      readTime="6 min de lecture"
      imageSrc="/actualites/maprimerenov-bilan-2025/thumbnail.jpg"
      imageAlt="Couple français examinant des dossiers de rénovation et des factures d'énergie à leur table de cuisine"
      ctaTitle="Profitez des aides 2026"
      ctaDescription="Estimez vos aides MaPrimeRénov' en 1 minute. Nos experts RGE vous accompagnent de A à Z, du dossier jusqu'aux travaux."
      ctaLabel="Estimer mon projet"
      ctaHref="/estimation"
    >
      <h2>Un bilan en demi-teinte pour MaPrimeRénov' en 2025</h2>
      <p>
        L'Agence nationale de l'habitat (Anah) a publié début 2026 son bilan annuel de MaPrimeRénov'. Les chiffres sont
        contrastés : <strong>307 731 logements rénovés</strong> en 2025, contre 340 801 en 2024 — soit un recul de 11 %.
        Pourtant, le montant total des aides versées a lui progressé de 16 %, pour atteindre{" "}
        <strong>3,81 milliards d'euros</strong>.
      </p>
      <p>
        Ce paradoxe s'explique par une montée en puissance des rénovations globales, plus coûteuses mais plus efficaces.
        Les ménages qui ont bénéficié du dispositif en 2025 ont réalisé des travaux plus ambitieux — et ont touché des
        aides plus élevées en conséquence.
      </p>

      <h2>Rénovations d'ampleur : un objectif dépassé de 20 %</h2>
      <p>
        La grande victoire de l'année est le « Parcours Accompagné ». L'objectif fixé pour 2025 était de 100 000
        rénovations d'ampleur — des projets associant au moins deux gestes de travaux, encadrés par un accompagnateur
        agréé (Mon Accompagnateur Rénov'). Résultat :{" "}
        <strong>120 306 rénovations d'ampleur financées</strong>, soit 20 % au-dessus de la cible.
      </p>
      <p>
        Ces projets représentent désormais <strong>39 % de l'ensemble des dossiers</strong>, contre 27 % en 2024 et
        seulement 11 % en 2023. La trajectoire est nette. Parmi les logements rénovés,{" "}
        <strong>59 708 ont progressé de 3 classes énergétiques ou plus</strong> après travaux.
      </p>
      <p>
        Côté financement, l'aide MaPrimeRénov' prend en charge en moyenne{" "}
        <strong>40 429 € sur un coût total de 59 474 €</strong>, soit près de 68 % du montant des travaux. Pour les
        ménages très modestes, cette couverture peut monter jusqu'à 90 %.
      </p>

      <h2>Rénovations monogestes : une chute de 25 %</h2>
      <p>
        Le tableau est moins favorable pour les gestes uniques — remplacement d'un poêle, isolation des combles,
        installation d'une pompe à chaleur. L'objectif pour 2025 était de 250 000 projets aidés. Le bilan s'arrête à
        <strong> 187 425</strong>, en recul de 25 %.
      </p>
      <p>
        Les travaux de chauffage dominent très largement ce segment avec{" "}
        <strong>76 % des parcours monogestes</strong>. L'installation d'un poêle à granulés ou d'une pompe à chaleur
        reste le premier réflexe des Français qui sollicitent le dispositif pour un geste unique.
      </p>

      <h2>86 % des aides distribuées à des ménages modestes</h2>
      <p>
        Un indicateur positif : le recentrage social du dispositif fonctionne.{" "}
        <strong>86 % des aides versées</strong> ont bénéficié à des ménages aux revenus modestes ou très modestes.
        À l'inverse, les foyers aux revenus supérieurs ne captent que <strong>2 % du total distribué</strong>.
      </p>
      <p>
        Ce résultat traduit les ajustements opérés depuis 2023 : taux d'aide plus élevés pour les bas revenus,
        plafonds de ressources durcis pour les catégories supérieures. Le dispositif atteint ainsi davantage ceux
        qui en ont le plus besoin, mais qui peinent à financer des travaux par leurs propres moyens.
      </p>

      <h2>Une année marquée par des suspensions répétées</h2>
      <p>
        La baisse du volume global de rénovations s'explique en grande partie par les interruptions du guichet en
        2025. Le dispositif a été <strong>suspendu pour les rénovations d'ampleur de juin à septembre</strong> — quatre
        mois perdus — dans le cadre d'un plan de lutte contre la fraude aux aides publiques.
      </p>
      <p>
        Ces suspensions ont provoqué des délais en cascade : dans certaines régions, les ménages ont attendu{" "}
        <strong>trois fois plus longtemps qu'en 2024</strong> pour obtenir une décision sur leur dossier. Le
        déséquilibre territorial est devenu l'un des points de friction majeurs du dispositif.
      </p>

      <h2>Ce qui change avec MaPrimeRénov' en 2026</h2>
      <p>
        L'année 2026 débute sous contrainte. En raison de l'adoption tardive de la loi de finances, tous les guichets
        de l'Anah sont restés <strong>fermés du 31 décembre 2025 au 23 février 2026</strong>. Depuis la réouverture,
        plusieurs règles nouvelles s'appliquent :
      </p>
      <ul>
        <li>
          <strong>Rendez-vous France Rénov' obligatoire</strong> avant tout dépôt de dossier monogeste — pour mieux
          orienter les ménages et limiter les dossiers mal montés.
        </li>
        <li>
          <strong>Monogestes plus restreints</strong> : certains gestes isolés sont moins bien pris en charge, pour
          inciter aux projets plus globaux et plus efficaces énergétiquement.
        </li>
        <li>
          <strong>Budget stabilisé à 3,6 milliards d'euros</strong> pour accompagner environ 350 000 rénovations en
          2026.
        </li>
      </ul>

      <h2>Comment profiter des aides en 2026 ?</h2>
      <p>
        Malgré les nouvelles contraintes, les opportunités restent significatives pour les ménages qui veulent
        améliorer leur confort thermique. L'installation d'un <strong>poêle à granulés ou d'un poêle à bois</strong>{" "}
        reste éligible à MaPrimeRénov', et peut être combinée avec d'autres gestes pour accéder au parcours accompagné.
      </p>
      <p>
        Pour déposer un dossier en 2026, voici les étapes à suivre :
      </p>
      <ol>
        <li>
          Prendre rendez-vous avec un <strong>conseiller France Rénov'</strong> — désormais obligatoire avant tout
          dépôt de dossier monogeste.
        </li>
        <li>
          Faire réaliser un <strong>devis par un artisan RGE</strong> (Reconnu Garant de l'Environnement) — condition
          indispensable pour accéder aux aides.
        </li>
        <li>
          Déposer le dossier sur <strong>maprimerenov.gouv.fr</strong> avant le démarrage des travaux.
        </li>
        <li>
          Conserver toutes les factures pour déclencher le versement de l'aide après réception des travaux.
        </li>
      </ol>
      <p>
        Nos installateurs sont certifiés RGE et nous vous accompagnons dans toutes vos démarches administratives —
        du premier devis jusqu'au versement de votre aide. Estimez votre projet en ligne pour connaître le montant
        exact auquel vous avez droit.
      </p>
    </ArticleLayout>
  );
}
