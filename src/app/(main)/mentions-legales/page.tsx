import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { APP_NAME } from "@/lib/constants";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = generatePageMetadata({
  title: "Mentions Légales",
  description: `Mentions légales du site ${APP_NAME}. Informations sur l'éditeur, l'hébergeur, la propriété intellectuelle et les conditions d'utilisation.`,
  canonical: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout title="Mentions légales" lastUpdated="20 mars 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>{APP_NAME}</strong> est édité par :
      </p>
      <ul>
        <li><strong>Raison sociale :</strong> Bootnow</li>
        <li><strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)</li>
        <li><strong>Capital social :</strong> 10 000 €</li>
        <li><strong>Siège social :</strong> 6 rue Aegerter, 68120 Pfastatt</li>
        <li><strong>SIRET :</strong> 845 205 194 00044</li>
        <li><strong>RCS :</strong> Mulhouse B 845 205 194</li>
        <li><strong>N° TVA intracommunautaire :</strong> FR92845205194</li>
        <li><strong>Directeur de la publication :</strong> Rémi Maringer</li>
        <li><strong>Email :</strong> <a href="mailto:contact@tepio.fr">contact@tepio.fr</a></li>
      </ul>

      <h2>Hébergeur</h2>
      <p>Le site est hébergé par :</p>
      <ul>
        <li><strong>Raison sociale :</strong> Vercel Inc.</li>
        <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
        <li><strong>Site web :</strong> <a href="https://vercel.com">vercel.com</a></li>
      </ul>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur le site {APP_NAME} (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de l'éditeur.
      </p>
      <p>
        Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux articles L.335-2 et suivants du Code de Propriété Intellectuelle.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Les informations relatives au traitement de vos données personnelles sont détaillées dans notre{" "}
        <a href="/politique-de-confidentialite">Politique de confidentialité</a>.
      </p>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition sur vos données personnelles.
      </p>

      <h2>Cookies</h2>
      <p>
        Le site utilise des cookies pour améliorer l'expérience utilisateur et mesurer l'audience. Pour en savoir plus, consultez notre{" "}
        <a href="/politique-cookies">Politique de cookies</a>.
      </p>

      <h2>Limitation de responsabilité</h2>
      <p>
        Les informations fournies sur le site {APP_NAME} le sont à titre indicatif et sont susceptibles d'évoluer. Elles ne constituent en aucun cas un engagement contractuel.
      </p>
      <p>
        L'éditeur ne saurait être tenu responsable des erreurs, omissions ou des résultats qui pourraient être obtenus par un mauvais usage de ces informations.
      </p>
      <p>
        L'éditeur ne pourra être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, détériorations ou virus qui pourraient affecter l'équipement informatique de l'utilisateur.
      </p>

      <h2>Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens vers d'autres sites internet. L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
      </p>

      {/* TODO: Ajouter la section Médiation une fois le médiateur de la consommation désigné */}

      <h2>Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
      </p>
    </LegalPageLayout>
  );
}
