import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { APP_NAME } from "@/lib/constants";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = generatePageMetadata({
  title: "Politique de Cookies",
  description: `Politique de cookies de ${APP_NAME}. Découvrez quels cookies nous utilisons et comment les gérer.`,
  canonical: "/politique-cookies",
});

export default function PolitiqueCookiesPage() {
  return (
    <LegalPageLayout title="Politique de cookies" lastUpdated="20 mars 2026">
      <h2>Qu'est-ce qu'un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet au site de mémoriser des informations sur votre visite, comme vos préférences, afin de faciliter votre navigation ultérieure.
      </p>

      <h2>Les cookies que nous utilisons</h2>

      <h3>Cookies strictement nécessaires</h3>
      <p>
        Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés. Ils ne stockent aucune donnée personnelle identifiable.
      </p>
      <ul>
        <li><strong>Préférences de cookies :</strong> mémorise votre choix d'acceptation ou de refus des cookies</li>
      </ul>

      <h3>Cookies analytiques (Vercel Analytics)</h3>
      <p>
        Nous utilisons <strong>Vercel Analytics</strong> pour comprendre comment les visiteurs utilisent notre site. Ces données sont anonymisées et agrégées — aucune donnée personnelle identifiable n'est collectée.
      </p>
      <ul>
        <li><strong>Finalité :</strong> mesure d'audience (pages vues, durée de visite, taux de rebond)</li>
        <li><strong>Durée :</strong> données de session uniquement</li>
        <li><strong>Données collectées :</strong> URL visitée, référent, type d'appareil, pays (pas d'adresse IP stockée)</li>
      </ul>

      <h3>Cookies marketing</h3>
      <p>
        Ces cookies sont déposés uniquement si vous les acceptez via le bandeau cookies. Ils permettent de mesurer l'efficacité de nos campagnes publicitaires et de vous proposer des annonces pertinentes.
      </p>

      <p><strong>Meta Pixel (Facebook / Instagram)</strong></p>
      <ul>
        <li><strong>Finalité :</strong> suivi des conversions, création d'audiences publicitaires, remarketing</li>
        <li><strong>Durée :</strong> 13 mois maximum</li>
        <li><strong>Responsable :</strong> Meta Platforms Inc., États-Unis</li>
        <li><strong>Politique de confidentialité :</strong> <a href="https://www.facebook.com/privacy/policy/">facebook.com/privacy/policy</a></li>
      </ul>

      <p><strong>Google Ads</strong></p>
      <ul>
        <li><strong>Finalité :</strong> suivi des conversions, remarketing, mesure de performance des annonces</li>
        <li><strong>Durée :</strong> 13 mois maximum</li>
        <li><strong>Responsable :</strong> Google LLC, États-Unis</li>
        <li><strong>Politique de confidentialité :</strong> <a href="https://policies.google.com/privacy">policies.google.com/privacy</a></li>
      </ul>

      <h2>Gestion de vos préférences</h2>
      <p>
        Lors de votre première visite, un bandeau cookies vous permet d'accepter ou de refuser les cookies non essentiels. Vous pouvez modifier vos choix à tout moment en cliquant sur le lien « Gérer les cookies » en bas de chaque page du site.
      </p>
      <p>
        Vous pouvez également configurer votre navigateur pour accepter ou refuser les cookies :
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac">Safari</a></li>
        <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">Microsoft Edge</a></li>
      </ul>

      <h2>Conséquences du refus</h2>
      <p>
        Le refus des cookies analytiques et marketing n'affecte pas le fonctionnement du site. Vous pourrez continuer à naviguer et utiliser le simulateur d'estimation normalement.
      </p>

      <h2>Modifications</h2>
      <p>
        Nous nous réservons le droit de modifier la présente politique à tout moment. La date de dernière mise à jour est indiquée en haut de cette page.
      </p>
    </LegalPageLayout>
  );
}
