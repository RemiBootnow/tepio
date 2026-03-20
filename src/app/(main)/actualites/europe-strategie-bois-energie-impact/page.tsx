import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { ArticleLayout } from "@/components/layout/ArticleLayout";

export const metadata: Metadata = generatePageMetadata({
  title:
    "L'Europe renforce sa stratégie bois-énergie : quel impact pour les particuliers ?",
  description:
    "RED III, normes Ecodesign 2027, aides MaPrimeRénov' 2026 : décryptage de la stratégie européenne sur le bois-énergie et ses conséquences pour les ménages français.",
  keywords: [
    "bois énergie Europe",
    "RED III biomasse",
    "directive européenne chauffage bois",
    "Ecodesign 2027 poêle bois",
    "réglementation bois énergie 2026",
    "chauffage bois renouvelable",
    "impact RED III particuliers",
  ],
  canonical: "/actualites/europe-strategie-bois-energie-impact",
});

export default function ArticlePage() {
  return (
    <ArticleLayout
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Actualités", href: "/actualites" },
        { label: "Europe et bois-énergie : l'impact" },
      ]}
      title="L'Europe renforce sa stratégie bois-énergie : quel impact pour les particuliers ?"
      subtitle="Entre directive RED III, futures normes Ecodesign et évolution des aides, le cadre européen du chauffage au bois se transforme. Voici ce que cela change concrètement pour votre projet."
      date="17 mars 2026"
      readTime="8 min de lecture"
      imageSrc="/actualites/europe-strategie-bois-energie-impact/thumbnail.jpg"
      imageAlt="Parlement européen de Strasbourg avec le drapeau de l'Union européenne"
      ctaTitle="Votre projet chauffage bois est-il encore rentable ?"
      ctaDescription="Simulez le coût de votre installation et découvrez les aides disponibles en 2026, avant les nouvelles normes européennes."
      ctaLabel="Estimer mon projet"
      ctaHref="/estimation"
    >
      <h2>RED III : ce que dit la nouvelle directive européenne sur le bois-énergie</h2>
      <p>
        Adoptée en 2023, la directive européenne sur les énergies renouvelables RED III
        (EU/2023/2413) devait être transposée dans le droit national de chaque État membre
        avant le <strong>30 avril 2025</strong>. En pratique, la Commission européenne a ouvert
        en juillet 2025 des procédures d'infraction contre la quasi-totalité des pays de l'UE
        — seuls le Danemark et l'Irlande avaient notifié une transposition complète à cette date.
      </p>
      <p>
        Sur le volet biomasse, RED III maintient le bois comme source d'énergie renouvelable,
        mais durcit significativement les critères. Les installations biomasse doivent désormais
        démontrer des <strong>économies d'émissions de gaz à effet de serre d'au moins 80 %</strong> par
        rapport aux combustibles fossiles, un seuil en vigueur depuis le <strong>1er janvier 2026</strong>.
        L'objectif est clair : s'assurer que seul le bois issu de filières durables et performantes
        continue à bénéficier du statut d'énergie verte.
      </p>

      <h2>Biomasse forestière : des critères de durabilité renforcés</h2>
      <p>
        La directive RED III élargit les critères de durabilité applicables à la biomasse forestière.
        Concrètement, le bois utilisé pour le chauffage doit provenir de forêts gérées de manière
        à minimiser les risques de production non durable : respect de la biodiversité, préservation
        des sols, et régénération des zones de coupe.
      </p>
      <p>
        Une clause de transition permet cependant aux installations existantes de continuer à
        fonctionner sous les anciens critères de la directive RED II
        jusqu'au <strong>31 décembre 2030</strong>. Les particuliers équipés d'un poêle à bois ou à
        granulés ne sont pas directement visés par ces obligations — elles concernent principalement
        les centrales biomasse industrielles et les chaufferies collectives. Mais les effets en cascade
        sur les filières d'approvisionnement et les prix du combustible peuvent toucher tout le monde.
      </p>

      <h2>Ecodesign 2027 : les nouvelles normes pour les appareils domestiques</h2>
      <p>
        En parallèle de RED III, la Commission européenne prépare un renforcement de la
        réglementation Ecodesign pour les appareils de chauffage au bois domestiques. Les nouvelles
        exigences, prévues pour le <strong>1er janvier 2027</strong>, imposeraient :
      </p>
      <ul>
        <li>
          Un <strong>rendement énergétique supérieur à 75 %</strong> pour tous les poêles et inserts
          vendus neufs sur le marché européen.
        </li>
        <li>
          Une réduction des émissions de particules fines à <strong>30 mg/m³</strong> maximum pour
          les systèmes de chauffage indépendants — contre environ 40 mg/m³ dans la norme actuelle.
        </li>
        <li>
          Des limites renforcées sur les émissions de monoxyde de carbone et de composés organiques
          volatils.
        </li>
      </ul>
      <p>
        Ce durcissement ne signifie pas l'interdiction du chauffage au bois. Il vise à retirer
        du marché les appareils les plus polluants — notamment les cheminées à foyer ouvert et
        les vieux poêles dépourvus du label Flamme Verte 7 étoiles. Les appareils modernes,
        labellisés Flamme Verte ou certifiés Ecodesign, respectent déjà largement ces seuils.
      </p>

      <h2>Quel impact sur le marché français du chauffage au bois ?</h2>
      <p>
        La France est le premier pays consommateur de bois-énergie en Europe, avec plus
        de <strong>7 millions de ménages</strong> utilisant le bois comme source de chauffage
        principale ou d'appoint. Le marché des poêles à bois et à granulés représente environ
        500 000 ventes par an, un chiffre stable malgré les incertitudes réglementaires.
      </p>
      <p>
        L'impact concret de la stratégie européenne se manifeste à plusieurs niveaux :
      </p>
      <ul>
        <li>
          <strong>Montée en gamme des équipements</strong> — les fabricants français (Invicta,
          Supra, Godin) ont déjà aligné leurs nouvelles gammes sur les futures normes Ecodesign.
          Les consommateurs qui achètent un appareil en 2026 sont donc protégés.
        </li>
        <li>
          <strong>Structuration des filières bois</strong> — les critères de durabilité RED III
          favorisent le bois certifié PEFC ou FSC, ce qui peut légèrement augmenter le prix du
          combustible mais garantit un approvisionnement responsable.
        </li>
        <li>
          <strong>Évolution des aides publiques</strong> — à partir du 1er janvier 2026, les
          forfaits MaPrimeRénov' pour les chaudières biomasse ont été supprimés dans le parcours
          par geste. En revanche, les poêles à bois et les inserts restent pleinement éligibles.
        </li>
      </ul>

      <h2>MaPrimeRénov' 2026 : ce qui reste disponible pour le bois</h2>
      <p>
        Malgré le retrait des chaudières biomasse du parcours par geste, les aides pour
        les poêles à bois et à granulés sont maintenues en 2026. Les montants de MaPrimeRénov'
        varient selon les revenus du ménage :
      </p>
      <ul>
        <li><strong>Ménages très modestes</strong> : jusqu'à 1 250 € pour un poêle à granulés</li>
        <li><strong>Ménages modestes</strong> : jusqu'à 1 000 €</li>
        <li><strong>Ménages intermédiaires</strong> : jusqu'à 750 €</li>
      </ul>
      <p>
        La <strong>prime CEE</strong> (Certificats d'Économies d'Énergie) complète le dispositif
        avec <strong>150 à 500 €</strong> supplémentaires, accessibles sans condition de revenus.
        La TVA réduite à <strong>5,5 %</strong> s'applique toujours sur la fourniture et
        l'installation par un professionnel RGE.
      </p>
      <p>
        En cumulant l'ensemble des dispositifs, un ménage aux revenus modestes peut réduire le coût
        de son installation de <strong>1 500 à 2 050 €</strong>. C'est un levier décisif pour
        investir dans un appareil performant, conforme aux futures exigences européennes.
      </p>

      <h2>2026-2027 : un calendrier à connaître</h2>
      <p>
        Plusieurs échéances s'enchaînent dans les prochains mois et doivent guider votre décision :
      </p>
      <ul>
        <li>
          <strong>2026 (en cours)</strong> — seuil de 80 % d'économies d'émissions GES pour les
          installations biomasse sous RED III. MaPrimeRénov' maintenue pour les poêles à bois et
          granulés.
        </li>
        <li>
          <strong>1er janvier 2027</strong> — entrée en vigueur prévue des nouvelles normes Ecodesign
          avec des critères renforcés sur le rendement et les émissions. Les appareils non conformes
          ne pourront plus être commercialisés.
        </li>
        <li>
          <strong>Fin 2026</strong> — la Commission européenne doit publier une proposition
          législative pour la révision de RED post-2030, dans le cadre d'une refonte globale de
          son paquet climat-énergie.
        </li>
      </ul>

      <h2>Agir maintenant : pourquoi c'est le bon moment</h2>
      <p>
        La stratégie européenne va dans un sens clair : encourager le chauffage au bois performant
        et décourager les installations obsolètes. Pour les particuliers, cela signifie que les
        appareils modernes — poêles à granulés, poêles à bûches labellisés Flamme Verte, inserts
        à haut rendement — sont non seulement conformes aux futures réglementations, mais aussi
        valorisés par les aides actuelles.
      </p>
      <p>
        Le calendrier joue en votre faveur en 2026 : les aides MaPrimeRénov' et la prime CEE sont
        cumulables, les prix des appareils sont stabilisés, et les professionnels RGE maîtrisent
        les nouvelles gammes. Rien ne garantit que ces conditions seront aussi favorables après
        l'entrée en vigueur des normes Ecodesign 2027.
      </p>
      <p>
        Pour savoir quel appareil correspond à votre logement, estimer le coût réel après aides et
        vérifier votre éligibilité, le plus simple est de faire le point avec un expert certifié
        de votre région.
      </p>
    </ArticleLayout>
  );
}
