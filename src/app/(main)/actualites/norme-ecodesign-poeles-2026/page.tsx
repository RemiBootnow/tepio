import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { ArticleLayout } from "@/components/layout/ArticleLayout";

export const metadata: Metadata = generatePageMetadata({
  title: "Norme EcoDesign : ce qui devient obligatoire pour les nouveaux poêles",
  description:
    "Rendement minimal de 75 %, seuils d'émissions renforcés, norme EN 16510 : tout ce que la réglementation EcoDesign impose aux poêles à bois et granulés en 2026.",
  keywords: [
    "norme EcoDesign poêle",
    "EcoDesign 2022 poêle à bois",
    "réglementation poêle bois 2026",
    "EN 16510 poêle",
    "émissions poêle bois norme",
    "rendement poêle EcoDesign",
    "Flamme Verte 7 étoiles",
  ],
  canonical: "/actualites/norme-ecodesign-poeles-2026",
});

export default function ArticlePage() {
  return (
    <ArticleLayout
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Actualités", href: "/actualites" },
        { label: "Norme EcoDesign : les obligations" },
      ]}
      title="Norme EcoDesign : ce qui devient obligatoire pour les nouveaux poêles"
      subtitle="Depuis janvier 2022, la directive européenne EcoDesign impose des seuils stricts de rendement et d'émissions à tous les poêles neufs vendus en Europe. Voici ce que cela change concrètement pour votre projet de chauffage."
      date="6 février 2026"
      readTime="8 min de lecture"
      imageSrc="/actualites/norme-ecodesign-poeles-2026/thumbnail.jpg"
      imageAlt="Poêle à bois moderne certifié EcoDesign dans un intérieur contemporain"
      ctaTitle="Votre poêle conforme, au meilleur prix"
      ctaDescription="Estimez le coût d'un poêle EcoDesign adapté à votre logement et découvrez les aides disponibles en 2026."
      ctaLabel="Estimer mon projet"
      ctaHref="/estimation"
    >
      <h2>EcoDesign : de quoi parle-t-on exactement ?</h2>
      <p>
        Le règlement européen EcoDesign (Commission Regulation EU 2015/1185 et 2015/1188)
        est entré en vigueur le <strong>1er janvier 2022</strong> dans toute l'Union européenne.
        Son objectif : imposer des exigences minimales de performance énergétique et de limitation
        des émissions polluantes à tous les appareils de chauffage au bois et combustibles solides
        mis sur le marché.
      </p>
      <p>
        Concrètement, depuis cette date, aucun fabricant ne peut commercialiser en Europe un poêle
        à bûches, un poêle à granulés ou un insert qui ne respecte pas les seuils fixés par la
        directive. Il ne s'agit pas d'un label volontaire — c'est une <strong>obligation
        réglementaire</strong> applicable à l'ensemble du marché européen.
      </p>

      <h2>Les seuils d'émissions imposés par EcoDesign</h2>
      <p>
        La directive fixe des plafonds précis pour quatre types de polluants, mesurés à 13 % d'oxygène :
      </p>
      <ul>
        <li>
          <strong>Particules fines (PM)</strong> : maximum <strong>40 mg/m³</strong> pour les poêles
          à granulés, <strong>50 mg/m³</strong> pour les poêles à bûches — soit une réduction
          de plus de <strong>55 %</strong> par rapport aux anciennes normes.
        </li>
        <li>
          <strong>Monoxyde de carbone (CO)</strong> : maximum <strong>1 500 mg/m³</strong> pour
          les poêles à bûches, <strong>300 mg/m³</strong> pour les poêles à granulés.
        </li>
        <li>
          <strong>Composés organiques gazeux (COG/OGC)</strong> : maximum <strong>120 mg/m³</strong> pour
          les bûches, <strong>60 mg/m³</strong> pour les granulés.
        </li>
        <li>
          <strong>Oxydes d'azote (NOx)</strong> : maximum <strong>200 mg/m³</strong> pour les
          combustibles bois, exprimés en NO₂.
        </li>
      </ul>
      <p>
        Avant EcoDesign, les tests de NOx, de COG et de particules fines n'étaient pas obligatoires.
        La norme EN 13240, qui encadrait les poêles à bûches, se limitait essentiellement au rendement
        et au CO. La directive européenne a donc considérablement élargi le périmètre de contrôle.
      </p>

      <h2>Un rendement minimal de 75 %</h2>
      <p>
        Au-delà des émissions, EcoDesign impose un <strong>rendement énergétique saisonnier
        minimal</strong>. Pour les poêles à foyer fermé utilisant des bûches, ce rendement doit
        atteindre au moins <strong>65 %</strong> (efficacité saisonnière), ce qui correspond en
        pratique à un rendement nominal d'environ <strong>75 %</strong>. Pour les poêles à granulés,
        le seuil est encore plus exigeant : <strong>79 % d'efficacité saisonnière</strong>, soit
        un rendement nominal d'environ <strong>87 %</strong>.
      </p>
      <p>
        À titre de comparaison, un ancien poêle à bois d'avant 2010 affiche souvent un rendement
        de <strong>40 à 50 %</strong>. Cela signifie que plus de la moitié de l'énergie du bois
        partait en fumée — littéralement. Avec un appareil EcoDesign, la quasi-totalité de la chaleur
        est restituée dans votre intérieur, ce qui réduit votre consommation de combustible
        de <strong>30 à 50 %</strong>.
      </p>

      <h2>La norme EN 16510 : le durcissement de 2025-2027</h2>
      <p>
        En parallèle d'EcoDesign, une autre évolution majeure est en cours : la norme
        européenne <strong>EN 16510</strong> remplace progressivement les anciennes normes produit
        (EN 13240 pour les poêles à bûches, EN 13229 pour les inserts, EN 14785 pour les
        poêles à granulés).
      </p>
      <p>
        Depuis le <strong>9 novembre 2025</strong>, la norme EN 16510 est devenue la référence
        obligatoire pour le marquage CE des appareils de chauffage au bois neufs vendus en Europe.
        Les fabricants ne peuvent plus mettre sur le marché des produits certifiés uniquement
        selon les anciennes normes.
      </p>
      <p>
        Ce que cela change concrètement :
      </p>
      <ul>
        <li>
          Des <strong>méthodes d'essai harmonisées</strong> à l'échelle européenne, plus proches
          des conditions réelles d'utilisation.
        </li>
        <li>
          Des <strong>seuils d'émissions alignés</strong> sur EcoDesign, rendant les deux
          réglementations cohérentes.
        </li>
        <li>
          Des exigences renforcées sur l'<strong>étanchéité</strong> des appareils et la sécurité
          des conduits.
        </li>
      </ul>
      <p>
        En janvier 2027, une nouvelle phase de durcissement est prévue avec des critères encore
        plus stricts sur les émissions de particules fines, visant un plafond
        de <strong>30 mg/m³</strong> pour les appareils indépendants.
      </p>

      <h2>Le label Flamme Verte : un repère fiable pour les consommateurs</h2>
      <p>
        En France, le label <strong>Flamme Verte</strong> reste le repère de qualité pour les
        appareils de chauffage au bois. Depuis 2025, seuls les appareils classés <strong>7
        étoiles</strong> peuvent obtenir le label, ce qui implique :
      </p>
      <ul>
        <li>Un rendement énergétique <strong>supérieur ou égal à 75 %</strong> pour les poêles à bûches.</li>
        <li>Des émissions de particules fines <strong>inférieures à 40 mg/Nm³</strong>.</li>
        <li>Des émissions de CO <strong>inférieures à 1 500 mg/Nm³</strong>.</li>
      </ul>
      <p>
        Le label Flamme Verte 7 étoiles est également une <strong>condition d'éligibilité</strong> pour
        les aides financières : MaPrimeRénov', prime CEE et TVA à 5,5 %. Choisir un appareil labellisé,
        c'est donc s'assurer à la fois de la conformité réglementaire et de l'accès aux aides.
      </p>

      <h2>Quel impact sur les prix et les aides ?</h2>
      <p>
        La montée en gamme imposée par EcoDesign a logiquement fait évoluer les prix des poêles neufs.
        En 2026, il faut compter :
      </p>
      <ul>
        <li><strong>Poêle à bûches EcoDesign</strong> (pose incluse) : 2 500 à 5 000 €</li>
        <li><strong>Poêle à granulés EcoDesign</strong> (pose incluse) : 3 500 à 7 500 €</li>
        <li><strong>Insert EcoDesign</strong> (pose incluse) : 3 000 à 6 500 €</li>
      </ul>
      <p>
        La bonne nouvelle : les aides compensent une part significative de l'investissement.
        En cumulant <strong>MaPrimeRénov'</strong> (jusqu'à 1 800 € pour un poêle à bûches, 1 250 €
        pour un poêle à granulés selon les revenus) et la <strong>prime CEE</strong> (150 à 500 €),
        le reste à charge peut descendre de <strong>30 à 50 %</strong>. La TVA réduite à 5,5 %
        et l'éco-prêt à taux zéro complètent le dispositif.
      </p>
      <p>
        Attention toutefois : le poêle doit être installé par un professionnel <strong>certifié
        RGE</strong> (Reconnu Garant de l'Environnement) pour ouvrir droit aux aides. C'est une
        condition non négociable depuis 2015.
      </p>

      <h2>Comment choisir le bon poêle en 2026</h2>
      <p>
        Face à ces évolutions réglementaires, voici les points à vérifier avant tout achat :
      </p>
      <ul>
        <li>
          Exigez la <strong>certification EcoDesign</strong> et le <strong>label Flamme Verte
          7 étoiles</strong>. C'est la garantie d'un appareil conforme et éligible aux aides.
        </li>
        <li>
          Vérifiez le <strong>marquage CE selon EN 16510</strong>. Les appareils encore certifiés
          sous l'ancienne norme EN 13240 ne peuvent plus être mis sur le marché depuis novembre 2025.
        </li>
        <li>
          Faites <strong>dimensionner la puissance</strong> par un professionnel. Un poêle
          surdimensionné fonctionne au ralenti, ce qui dégrade ses performances et augmente les
          émissions — exactement ce que la norme cherche à éviter.
        </li>
        <li>
          Privilégiez un <strong>installateur RGE</strong> pour bénéficier de l'ensemble des aides
          et garantir une pose conforme aux DTU en vigueur.
        </li>
      </ul>
      <p>
        Le plus simple pour y voir clair ? Faites estimer votre projet gratuitement : un expert
        de votre région vous orientera vers l'appareil adapté à votre logement et calculera
        précisément les aides auxquelles vous avez droit.
      </p>
    </ArticleLayout>
  );
}
