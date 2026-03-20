import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { APP_NAME } from "@/lib/constants";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = generatePageMetadata({
  title: "Conditions Générales de Vente",
  description: `Conditions générales de vente de ${APP_NAME}. Informations sur notre service de mise en relation avec des artisans certifiés RGE.`,
  canonical: "/cgv",
});

export default function CgvPage() {
  return (
    <LegalPageLayout title="Conditions générales de vente" lastUpdated="20 mars 2026">
      <h2>Objet</h2>
      <p>
        Les présentes conditions générales de vente (CGV) définissent les droits et obligations des parties dans le cadre du service de mise en relation proposé par la société Bootnow, SAS au capital de 10 000 €, dont le siège social est situé au 6 rue Aegerter, 68120 Pfastatt, immatriculée au RCS de Mulhouse sous le numéro 845 205 194, ci-après dénommée « <strong>{APP_NAME}</strong> ».
      </p>

      <h2>Description du service</h2>
      <p>
        {APP_NAME} propose un service gratuit de mise en relation entre des particuliers souhaitant réaliser des travaux de rénovation énergétique et des artisans partenaires certifiés RGE (Reconnu Garant de l'Environnement).
      </p>
      <p>
        Le service comprend :
      </p>
      <ul>
        <li>Un simulateur en ligne permettant d'estimer le coût d'un projet de rénovation énergétique et les aides financières disponibles</li>
        <li>La transmission de la demande du particulier à un artisan partenaire correspondant à son projet et sa zone géographique</li>
        <li>Un suivi de la mise en relation</li>
      </ul>
      <p>
        {APP_NAME} agit exclusivement en tant qu'intermédiaire. {APP_NAME} n'est pas partie au contrat de travaux conclu entre le particulier et l'artisan, et ne réalise aucune prestation de travaux.
      </p>

      <h2>Gratuité pour le particulier</h2>
      <p>
        Le service de mise en relation est entièrement gratuit pour le particulier. Aucun frais ne lui est facturé, ni par {APP_NAME}, ni par l'artisan au titre de la mise en relation.
      </p>
      <p>
        Le devis et les travaux éventuellement réalisés par l'artisan font l'objet d'un contrat distinct entre le particulier et l'artisan, aux conditions propres de ce dernier.
      </p>

      <h2>Inscription et engagement</h2>
      <p>
        L'utilisation du simulateur et l'envoi d'une demande de mise en relation n'engagent le particulier à aucun achat, abonnement ou engagement financier.
      </p>
      <p>
        Le particulier est libre d'accepter ou de refuser le devis proposé par l'artisan, sans pénalité ni justification.
      </p>

      <h2>Obligations de {APP_NAME}</h2>
      <p>{APP_NAME} s'engage à :</p>
      <ul>
        <li>Transmettre la demande du particulier à un artisan partenaire qualifié dans les meilleurs délais</li>
        <li>Sélectionner des artisans partenaires disposant de la certification RGE en cours de validité</li>
        <li>Protéger les données personnelles du particulier conformément à notre <a href="/politique-de-confidentialite">Politique de confidentialité</a></li>
      </ul>

      <h2>Limites de responsabilité</h2>
      <p>
        {APP_NAME} ne saurait être tenu responsable :
      </p>
      <ul>
        <li>De la qualité, du prix ou des délais des travaux réalisés par l'artisan</li>
        <li>Du contenu du devis ou du contrat de travaux conclu entre le particulier et l'artisan</li>
        <li>De tout litige survenant entre le particulier et l'artisan</li>
        <li>De l'exactitude des estimations fournies par le simulateur, celles-ci étant données à titre indicatif et ne constituant pas un engagement contractuel</li>
      </ul>
      <p>
        Les estimations d'aides financières (MaPrimeRénov', prime CEE, etc.) sont calculées sur la base des barèmes en vigueur au moment de la simulation. Les montants réels peuvent varier en fonction de l'évolution des dispositifs et de l'éligibilité du dossier.
      </p>

      <h2>Droit de rétractation</h2>
      <p>
        Le service de mise en relation étant gratuit et ne constituant pas une vente de bien ou de prestation payante, le droit de rétractation prévu par le Code de la consommation ne s'applique pas au service de {APP_NAME}.
      </p>
      <p>
        Toutefois, le particulier peut à tout moment demander la suppression de ses données personnelles et l'arrêt de tout contact en envoyant un email à <a href="mailto:contact@tepio.fr">contact@tepio.fr</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments du site {APP_NAME} (textes, images, logo, graphismes, logiciels) sont la propriété exclusive de Bootnow et sont protégés par le droit de la propriété intellectuelle. Toute reproduction sans autorisation est interdite.
      </p>

      {/* TODO: Désigner un médiateur de la consommation (obligatoire B2C, ~50-200€/an)
           Voir : https://www.economie.gouv.fr/mediation-conso */}
      <h2>Médiation</h2>
      <p>
        Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, en cas de litige non résolu, vous pouvez recourir gratuitement à un médiateur de la consommation. Les coordonnées du médiateur seront communiquées prochainement.
      </p>
      <p>
        Vous pouvez également déposer votre réclamation sur la plateforme européenne de règlement des litiges en ligne : <a href="https://ec.europa.eu/consumers/odr">ec.europa.eu/consumers/odr</a>.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Les présentes CGV sont régies par le droit français. En cas de litige, et à défaut de résolution amiable ou de médiation, les tribunaux français seront seuls compétents.
      </p>
    </LegalPageLayout>
  );
}
