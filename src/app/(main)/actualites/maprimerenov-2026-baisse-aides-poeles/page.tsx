import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { ArticleLayout } from "@/components/layout/ArticleLayout";

export const metadata: Metadata = generatePageMetadata({
  title:
    "MaPrimeRénov' 2026 : baisse des aides pour les poêles à granulés ?",
  description:
    "Les aides MaPrimeRénov' pour les poêles à granulés ont baissé de 30 % en deux ans. Montants 2026, comparatif, prime CEE : tout ce qu'il faut savoir avant d'investir.",
  keywords: [
    "MaPrimeRénov 2026",
    "aide poêle à granulés 2026",
    "baisse aides poêle granulés",
    "prime CEE poêle granulés",
    "MaPrimeRénov poêle à granulés montant",
    "rénovation énergétique 2026",
    "aides chauffage bois 2026",
  ],
  canonical: "/actualites/maprimerenov-2026-baisse-aides-poeles",
  ogType: "article",
  publishedTime: "2026-03-13",
});

export default function ArticlePage() {
  return (
    <ArticleLayout
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Actualités", href: "/actualites" },
        { label: "MaPrimeRénov' 2026 : poêles à granulés" },
      ]}
      title="MaPrimeRénov' 2026 : baisse des aides pour les poêles à granulés ?"
      subtitle="Depuis 2024, les aides publiques au chauffage bois fondent comme neige au soleil. Le poêle à granulés est-il encore un investissement intéressant en 2026 ? On fait le point sur les montants, les alternatives et la meilleure stratégie à adopter."
      date="13 mars 2026"
      readTime="8 min de lecture"
      imageSrc="/actualites/maprimerenov-2026-baisse-aides-poeles/thumbnail.jpg"
      imageAlt="Poêle à granulés dans un intérieur moderne avec des pellets de bois en premier plan"
      ctaTitle="Votre poêle à granulés au meilleur prix"
      ctaDescription="Estimez le coût de votre installation, les aides disponibles et le reste à charge en moins de 2 minutes."
      ctaLabel="Estimer mon projet"
      ctaHref="/estimation"
    >
      <h2>Un contexte de baisse continue depuis 2024</h2>
      <p>
        Le poêle à granulés a longtemps été l'un des grands gagnants de
        MaPrimeRénov'. Jusqu'en mars 2024, un ménage aux revenus très modestes
        pouvait toucher jusqu'à <strong>2 500 €</strong> de prime pour
        l'installation d'un poêle à pellets. Mais depuis, la tendance est
        clairement à la baisse.
      </p>
      <p>
        Au <strong>1er avril 2024</strong>, une première coupe de{" "}
        <strong>30 %</strong> a été appliquée sur l'ensemble des aides au
        chauffage bois. Puis en 2025, une deuxième réduction d'environ{" "}
        <strong>30 %</strong> est venue s'ajouter. Résultat : en deux ans, les
        montants de MaPrimeRénov' pour un poêle à granulés ont été{" "}
        <strong>divisés par près de deux</strong>.
      </p>
      <p>
        L'explication avancée par le gouvernement : la préservation de la
        ressource forestière et la volonté de réorienter les financements vers
        des rénovations plus globales. Mais concrètement, qu'est-ce que cela
        change pour votre projet ?
      </p>

      <h2>Les montants MaPrimeRénov' en 2026 : ce qui reste</h2>
      <p>
        En 2026, le poêle à granulés reste éligible au{" "}
        <strong>parcours « par geste »</strong> de MaPrimeRénov'. C'est une
        bonne nouvelle, car d'autres équipements — comme les chaudières biomasse
        et l'isolation des murs — en ont été exclus depuis le 1er janvier 2026.
      </p>
      <p>
        Voici les montants actuellement en vigueur, selon votre catégorie de
        revenus :
      </p>
      <ul>
        <li>
          <strong>Ménages très modestes</strong> (catégorie bleue) :{" "}
          <strong>1 250 €</strong>
        </li>
        <li>
          <strong>Ménages modestes</strong> (catégorie jaune) :{" "}
          <strong>1 000 €</strong>
        </li>
        <li>
          <strong>Ménages intermédiaires</strong> (catégorie violet) :{" "}
          <strong>750 €</strong>
        </li>
        <li>
          <strong>Ménages aisés</strong> (catégorie rose) : non éligibles
        </li>
      </ul>
      <p>
        À titre de comparaison, un ménage très modeste touchait{" "}
        <strong>2 500 € début 2024</strong>, puis environ{" "}
        <strong>1 750 € fin 2024</strong>, et{" "}
        <strong>1 250 € aujourd'hui</strong>. La baisse cumulée atteint{" "}
        <strong>50 %</strong> en deux ans.
      </p>

      <h2>La prime CEE : un complément toujours disponible</h2>
      <p>
        La bonne nouvelle, c'est que la prime CEE (Certificats d'Économies
        d'Énergie) vient compenser partiellement cette baisse. Contrairement à
        MaPrimeRénov', elle est <strong>accessible sans condition de revenus</strong> et
        reste cumulable avec la prime de l'État.
      </p>
      <p>Les montants pour un poêle à granulés en 2026 :</p>
      <ul>
        <li>
          <strong>Ménages modestes et très modestes</strong> : de{" "}
          <strong>500 à 800 €</strong>, selon la zone géographique et le
          rendement de l'appareil
        </li>
        <li>
          <strong>Autres ménages</strong> : de <strong>150 à 500 €</strong>
        </li>
      </ul>
      <p>
        Certains opérateurs comme Effy proposent des primes bonifiées pouvant
        aller jusqu'à <strong>1 147 €</strong>. Au total, en cumulant
        MaPrimeRénov' et la prime CEE, un ménage aux revenus très modestes peut
        encore obtenir jusqu'à <strong>2 050 €</strong> d'aides pour
        l'installation d'un poêle à granulés.
      </p>

      <h2>
        Rénovation d'ampleur vs. geste par geste : ce que prépare le
        gouvernement
      </h2>
      <p>
        La baisse des aides « par geste » n'est pas un hasard. Le gouvernement
        affiche clairement sa stratégie : <strong>pousser les ménages vers la
        rénovation d'ampleur</strong>, c'est-à-dire des bouquets de travaux
        combinant isolation, ventilation et changement de chauffage.
      </p>
      <p>
        Plusieurs signaux confirment cette orientation en 2026 :
      </p>
      <ul>
        <li>
          L'<strong>isolation des murs</strong> (intérieure et extérieure) et
          les <strong>chaudières biomasse</strong> ne sont plus éligibles au
          parcours par geste depuis le 1er janvier 2026
        </li>
        <li>
          Le parcours « rénovation d'ampleur » est recentré sur les logements
          classés <strong>E, F et G</strong> au DPE
        </li>
        <li>
          À partir de <strong>2027</strong>, les maisons classées F ou G ne
          pourront plus bénéficier du parcours par geste — seul le parcours
          d'ampleur leur sera accessible
        </li>
      </ul>
      <p>
        Autrement dit, si votre logement est une passoire thermique, le
        gouvernement vous oriente vers une rénovation globale plutôt que vers un
        simple remplacement de chauffage. Pour les logements classés A à D, le
        geste unitaire reste possible — mais avec des montants en baisse.
      </p>

      <h2>Comparatif : combien touche-t-on vraiment en 2026 ?</h2>
      <p>
        Pour un ménage aux <strong>revenus modestes</strong> souhaitant installer
        un poêle à granulés milieu de gamme dans une maison de 100 m², voici le
        récapitulatif :
      </p>
      <ul>
        <li>
          <strong>Coût du poêle posé</strong> : 4 500 à 6 000 €
        </li>
        <li>
          <strong>MaPrimeRénov'</strong> : 1 000 €
        </li>
        <li>
          <strong>Prime CEE</strong> : 500 à 800 €
        </li>
        <li>
          <strong>Total des aides</strong> : 1 500 à 1 800 €
        </li>
        <li>
          <strong>Reste à charge</strong> : 3 000 à 4 200 €
        </li>
      </ul>
      <p>
        En 2023, ce même ménage aurait touché environ <strong>3 500 €</strong>{" "}
        d'aides cumulées, soit un reste à charge inférieur de près de{" "}
        <strong>2 000 €</strong>. La différence est significative, mais le poêle
        à granulés reste un investissement rentable grâce aux économies de
        chauffage générées (entre <strong>600 et 900 € par an</strong> par
        rapport à l'électricité).
      </p>
      <p>
        Par ailleurs, la <strong>TVA réduite à 5,5 %</strong> s'applique
        toujours sur la fourniture et la pose, et vous pouvez financer le reste
        à charge via un{" "}
        <strong>éco-prêt à taux zéro</strong> (jusqu'à 15 000 € sur 20 ans,
        sans intérêts).
      </p>

      <h2>Faut-il encore investir dans un poêle à granulés en 2026 ?</h2>
      <p>
        Malgré la baisse des aides, plusieurs facteurs jouent en faveur d'un
        investissement rapide :
      </p>
      <ul>
        <li>
          Les montants MaPrimeRénov' sont <strong>confirmés jusqu'à fin 2026</strong>,
          mais rien ne garantit leur maintien en 2027 — surtout avec le
          recentrage sur la rénovation d'ampleur
        </li>
        <li>
          Le prix des granulés s'est <strong>stabilisé autour de 350 à 430 €
          la tonne</strong>, bien loin des pics de 2022-2023 (plus de 700 €)
        </li>
        <li>
          Un poêle à granulés affiche un{" "}
          <strong>rendement de 85 à 95 %</strong> et améliore le DPE de votre
          logement, un critère devenu incontournable pour la revente
        </li>
        <li>
          La prime CEE reste <strong>cumulable et sans condition de revenus</strong>,
          ce qui compense partiellement la baisse de MaPrimeRénov'
        </li>
      </ul>
      <p>
        En résumé : les aides ont baissé, mais le poêle à granulés reste
        pertinent sur le plan économique. L'amortissement se fait en{" "}
        <strong>4 à 6 ans</strong> selon votre énergie actuelle, pour un appareil
        qui dure <strong>15 à 20 ans</strong>.
      </p>

      <h2>Agir avant que les aides ne baissent encore</h2>
      <p>
        La tendance est claire : chaque année, les aides au geste unitaire se
        réduisent. Si vous envisagez l'installation d'un poêle à granulés, le
        moment est stratégiquement favorable — les primes sont encore là, les
        prix des pellets sont bas, et les artisans RGE sont disponibles hors
        période de rush hivernal.
      </p>
      <p>
        Pour connaître précisément le montant des aides auxquelles vous avez
        droit et le coût réel de votre projet, le plus simple est de faire une
        estimation personnalisée avec un professionnel certifié de votre région.
      </p>
    </ArticleLayout>
  );
}
