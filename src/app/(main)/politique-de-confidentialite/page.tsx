import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { APP_NAME } from "@/lib/constants";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = generatePageMetadata({
  title: "Politique de Confidentialité",
  description: `Politique de confidentialité de ${APP_NAME}. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.`,
  canonical: "/politique-de-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageLayout title="Politique de confidentialité" lastUpdated="20 mars 2026">
      <h2>Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données collectées sur le site <strong>{APP_NAME}</strong> est :
      </p>
      <ul>
        <li><strong>Opla</strong>, SAS</li>
        <li>9 rue des primevères, 68120 Richwiller</li>
        <li>RCS de Mulhouse sous le numéro 84221927100017</li>
        <li>N° TVA intracommunautaire : FR79842219271</li>
        <li>Contact : <a href="mailto:contact@tepio.fr">contact@tepio.fr</a> — Tél : <a href="tel:+33783708347">+33 7 83 70 83 47</a></li>
      </ul>

      <h2>Données collectées</h2>
      <p>
        Nous collectons les données suivantes lorsque vous utilisez notre simulateur d'estimation :
      </p>

      <h3>Informations sur votre projet</h3>
      <ul>
        <li>Type de logement (maison ou appartement)</li>
        <li>Statut de propriété (propriétaire ou locataire)</li>
        <li>Âge du logement</li>
        <li>Type de chauffage actuel</li>
        <li>Service souhaité (type de travaux envisagé)</li>
        <li>Dépenses mensuelles de chauffage</li>
      </ul>

      <h3>Informations personnelles</h3>
      <ul>
        <li>Prénom et nom</li>
        <li>Adresse email</li>
        <li>Numéro de téléphone</li>
        <li>Code postal et ville</li>
      </ul>

      <h3>Données de navigation</h3>
      <ul>
        <li>Données de fréquentation du site (pages visitées, durée des visites) via Vercel Analytics</li>
        <li>Données de suivi publicitaire via Meta Pixel et Google Ads (si vous avez accepté les cookies marketing)</li>
      </ul>

      <h2>Finalités du traitement</h2>
      <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
      <ul>
        <li><strong>Mise en relation :</strong> transmettre votre demande à un artisan partenaire certifié RGE correspondant à votre projet et votre zone géographique</li>
        <li><strong>Suivi de votre projet :</strong> vous recontacter pour assurer le suivi de votre demande d'estimation</li>
        <li><strong>Amélioration du service :</strong> analyser la fréquentation du site pour améliorer l'expérience utilisateur</li>
        <li><strong>Publicité ciblée :</strong> afficher des publicités pertinentes sur les réseaux sociaux et moteurs de recherche (uniquement avec votre consentement)</li>
      </ul>

      <h2>Base légale</h2>
      <p>Le traitement de vos données repose sur :</p>
      <ul>
        <li><strong>Votre consentement</strong> (article 6.1.a du RGPD) — vous cochez une case de consentement explicite avant l'envoi du formulaire</li>
        <li><strong>L'intérêt légitime</strong> (article 6.1.f du RGPD) — pour les données de navigation anonymisées (Vercel Analytics)</li>
        <li><strong>Votre consentement</strong> — pour les cookies marketing (Meta Pixel, Google Ads), recueilli via le bandeau cookies</li>
      </ul>

      <h2>Destinataires des données</h2>
      <p>Vos données personnelles sont transmises aux destinataires suivants :</p>
      <ul>
        <li><strong>Notre équipe interne</strong> — pour le traitement et le suivi de votre demande via notre CRM</li>
        <li><strong>Nos artisans partenaires</strong> — les informations relatives à votre projet et vos coordonnées sont transmises à l'artisan sélectionné pour votre zone géographique afin qu'il puisse vous recontacter</li>
        <li><strong>Vercel Inc.</strong> — hébergement du site et données analytics anonymisées</li>
        <li><strong>Meta Platforms Inc.</strong> — données de suivi publicitaire (si consentement cookies)</li>
        <li><strong>Google LLC</strong> — données de suivi publicitaire (si consentement cookies)</li>
      </ul>
      <p>
        Certains de ces destinataires (Vercel, Meta, Google) sont situés aux États-Unis. Le transfert est encadré par les clauses contractuelles types de la Commission européenne et/ou le Data Privacy Framework.
      </p>

      <h2>Durée de conservation</h2>
      <ul>
        <li><strong>Données de contact et projet :</strong> 3 ans à compter du dernier contact</li>
        <li><strong>Données de navigation :</strong> 13 mois maximum (cookies)</li>
        <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
      </ul>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
      </p>
      <ul>
        <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
        <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
        <li><strong>Droit de suppression :</strong> demander l'effacement de vos données</li>
        <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
        <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
        <li><strong>Droit de retirer votre consentement :</strong> à tout moment, sans affecter la licéité du traitement antérieur</li>
      </ul>
      <p>
        Pour exercer ces droits, envoyez un email à <a href="mailto:contact@tepio.fr">contact@tepio.fr</a> en précisant votre nom, prénom et l'objet de votre demande. Nous vous répondrons dans un délai de 30 jours.
      </p>
      <p>
        En cas de réponse insatisfaisante, vous pouvez déposer une réclamation auprès de la <a href="https://www.cnil.fr">CNIL</a> (Commission Nationale de l'Informatique et des Libertés).
      </p>

      <h2>Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre l'accès non autorisé, la perte, la destruction ou l'altération. Le site est servi en HTTPS et les données sont hébergées sur une infrastructure sécurisée (Vercel).
      </p>

      <h2>Modifications</h2>
      <p>
        Nous nous réservons le droit de modifier la présente politique à tout moment. La date de dernière mise à jour est indiquée en haut de cette page. Nous vous invitons à la consulter régulièrement.
      </p>
    </LegalPageLayout>
  );
}
