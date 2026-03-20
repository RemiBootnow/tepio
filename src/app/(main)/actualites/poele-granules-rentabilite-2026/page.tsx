import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { ArticleLayout } from "@/components/layout/ArticleLayout";

export const metadata: Metadata = generatePageMetadata({
  title: "Poêle à granulés : est-ce encore rentable en 2026 ?",
  description:
    "Prix des granulés en baisse, aides MaPrimeRénov' maintenues : on fait le calcul complet de la rentabilité d'un poêle à granulés en 2026, avec retour sur investissement.",
  keywords: [
    "poêle à granulés rentabilité",
    "poêle granulés 2026",
    "prix granulés bois 2026",
    "retour investissement poêle granulés",
    "aides poêle à granulés",
    "MaPrimeRénov poêle granulés",
  ],
  canonical: "/actualites/poele-granules-rentabilite-2026",
});

export default function ArticlePage() {
  return (
    <ArticleLayout
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Actualités", href: "/actualites" },
        { label: "Poêle à granulés : rentable en 2026 ?" },
      ]}
      title="Poêle à granulés : est-ce encore rentable en 2026 ?"
      subtitle="Prix des granulés en baisse, aides toujours disponibles, rendement supérieur à 90 % — on pose les chiffres et on fait le calcul du retour sur investissement réel."
      date="18 février 2026"
      readTime="7 min de lecture"
      imageSrc="/actualites/poele-granules-rentabilite-2026/thumbnail.jpg"
      imageAlt="Poêle à granulés moderne dans un salon, avec granulés de bois au premier plan"
      ctaTitle="Estimez votre projet poêle à granulés"
      ctaDescription="Simulez le coût de votre installation et découvrez les aides auxquelles vous avez droit en 2026."
      ctaLabel="Estimer mon projet"
      ctaHref="/estimation"
    >
      <h2>Le prix des granulés en 2026 : enfin la stabilité</h2>
      <p>
        Après la flambée de 2022-2023 où la tonne de pellets avait dépassé les 700 €, le marché s'est
        progressivement normalisé. En mars 2026, le prix moyen d'une tonne de granulés en vrac se situe
        entre <strong>350 et 430 € TTC</strong> selon la région et le format d'achat.
      </p>
      <p>
        Les prévisions pour le reste de l'année sont rassurantes : les analystes tablent sur une
        stabilisation autour de <strong>345 à 390 €/tonne</strong>, portée par l'augmentation des capacités
        de production en France. L'Est du pays reste la zone la plus compétitive avec des tarifs
        autour de 318 €/tonne, tandis que le Nord-Ouest affiche les prix les plus élevés, jusqu'à 360 €/tonne.
      </p>
      <p>
        Concrètement, pour une maison de 100 m² correctement isolée, la consommation annuelle tourne
        autour de <strong>2 tonnes de granulés</strong>, soit un budget chauffage
        de <strong>700 à 860 € par an</strong>. C'est nettement moins que l'électricité (1 200 à 1 800 €/an)
        ou le fioul (1 500 à 2 000 €/an) pour une surface équivalente.
      </p>

      <h2>Combien coûte un poêle à granulés en 2026 ?</h2>
      <p>
        Le prix d'un poêle à granulés varie selon la puissance, la marque et les fonctionnalités
        (programmation, Wi-Fi, canalisable). Voici les fourchettes constatées, <strong>pose incluse</strong> :
      </p>
      <ul>
        <li><strong>Entrée de gamme</strong> (6-8 kW) : 3 500 à 4 500 €</li>
        <li><strong>Milieu de gamme</strong> (8-11 kW) : 4 500 à 6 000 €</li>
        <li><strong>Haut de gamme / canalisable</strong> (10-14 kW) : 6 000 à 7 500 €</li>
      </ul>
      <p>
        À ces prix, il faut ajouter le conduit de fumée si votre logement n'en possède pas
        (comptez 1 000 à 2 500 € supplémentaires). Mais la bonne nouvelle, c'est que les aides
        viennent considérablement réduire la facture.
      </p>

      <h2>Les aides disponibles en 2026</h2>
      <p>
        Le poêle à granulés reste éligible à <strong>MaPrimeRénov' par geste</strong> jusqu'à
        fin 2026. Les montants dépendent de vos revenus :
      </p>
      <ul>
        <li><strong>Ménages très modestes</strong> (catégorie bleue) : 1 250 €</li>
        <li><strong>Ménages modestes</strong> (catégorie jaune) : 1 000 €</li>
        <li><strong>Ménages intermédiaires</strong> (catégorie violet) : 750 €</li>
      </ul>
      <p>
        À cela s'ajoute la <strong>prime CEE</strong> (Certificats d'Économies d'Énergie), comprise
        entre <strong>150 et 500 €</strong> selon votre zone géographique et le type d'installation.
        Contrairement à MaPrimeRénov', elle est accessible sans condition de revenus.
      </p>
      <p>
        En cumulant les deux, un ménage aux revenus modestes peut obtenir
        jusqu'à <strong>2 050 € d'aides</strong>. Et ce n'est pas tout : la TVA est réduite
        à <strong>5,5 %</strong> sur la fourniture et la pose, et vous pouvez financer le reste à
        charge via un <strong>éco-prêt à taux zéro</strong> (jusqu'à 15 000 € sur 20 ans).
      </p>

      <h2>Le calcul : retour sur investissement réel</h2>
      <p>
        Prenons un exemple concret. Un couple avec des revenus modestes souhaite remplacer
        son chauffage électrique par un poêle à granulés milieu de gamme dans une maison de 100 m² :
      </p>
      <ul>
        <li><strong>Coût du poêle posé</strong> : 5 000 €</li>
        <li><strong>MaPrimeRénov'</strong> : -1 000 €</li>
        <li><strong>Prime CEE</strong> : -300 €</li>
        <li><strong>Reste à charge</strong> : 3 700 €</li>
      </ul>
      <p>
        Côté économies, le passage de l'électricité aux granulés représente une réduction d'environ
        <strong>600 à 900 € par an</strong> sur la facture de chauffage. En prenant une économie
        moyenne de 750 €/an, le retour sur investissement se fait en <strong>5 ans</strong>.
      </p>
      <p>
        Pour un foyer chauffé au fioul, les économies annuelles peuvent atteindre 800 à 1 100 €,
        ce qui ramène l'amortissement à <strong>4 ans</strong>. Pour un foyer déjà au gaz,
        le gain est plus modeste (300 à 500 €/an), mais reste intéressant sur la durée de vie
        d'un poêle, estimée à <strong>15 à 20 ans</strong>.
      </p>

      <h2>Pourquoi le poêle à granulés reste compétitif</h2>
      <p>
        Au-delà du calcul brut, plusieurs facteurs jouent en faveur du poêle à granulés en 2026 :
      </p>
      <ul>
        <li>
          <strong>Un rendement de 85 à 95 %</strong> — c'est l'un des systèmes de chauffage au bois
          les plus performants. Presque toute l'énergie du granulé est convertie en chaleur.
        </li>
        <li>
          <strong>Une énergie renouvelable et locale</strong> — les granulés sont fabriqués à partir
          de résidus de scierie français. Le prix est moins exposé aux tensions géopolitiques que le
          gaz ou le fioul.
        </li>
        <li>
          <strong>Un confort d'utilisation</strong> — programmation horaire, chargement automatique,
          pilotage à distance par smartphone. Le poêle à granulés a abandonné l'image rustique du
          chauffage au bois.
        </li>
        <li>
          <strong>Une valorisation du bien immobilier</strong> — un chauffage performant améliore le
          DPE (Diagnostic de Performance Énergétique) de votre logement, un critère devenu déterminant
          pour la revente.
        </li>
      </ul>

      <h2>Comment en profiter dès maintenant</h2>
      <p>
        La fenêtre est favorable : les prix des granulés sont stabilisés, les aides MaPrimeRénov'
        sont confirmées jusqu'à fin 2026, et la prime CEE est cumulable sans condition de revenus.
        Rien ne garantit que ces dispositifs seront reconduits aux mêmes niveaux en 2027.
      </p>
      <p>
        Pour savoir précisément combien vous coûterait l'installation d'un poêle à granulés — et
        combien vous économiseriez chaque année — le plus simple est de faire estimer votre projet
        par un professionnel certifié RGE de votre région.
      </p>
    </ArticleLayout>
  );
}
