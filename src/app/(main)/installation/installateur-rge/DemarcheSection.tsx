import { CenterCarouselSection } from "@/components/sections/center-carousel-section";
import { FeatureCardImage } from "@/components/ui/feature-card-image";

export function DemarcheSection() {
  return (
    <CenterCarouselSection
      title="Comment trouver un installateur RGE près de chez vous ?"
      subtitle="Plusieurs options existent pour identifier un artisan certifié. Voici les démarches les plus fiables."
      primaryButtonLabel="Trouver un installateur"
      primaryButtonLink="/estimation"
    >
      {/* @IMAGE demarche-annuaire.jpg
          CONTEXT: Carousel card about checking the official RGE directory. Should feel modern and digital.
          PROMPT: Over-the-shoulder view of a person browsing a professional website on a laptop in a bright kitchen, screen showing a list interface, natural daylight, lifestyle photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/installation/installateur-rge/demarche-annuaire.jpg"
        imageAlt="Consultation de l'annuaire RGE"
        title="Vérifier sur l'annuaire officiel France Rénov'"
      />
      {/* @IMAGE demarche-devis.jpg
          CONTEXT: Carousel card about requesting quotes. Should feel personal and reassuring.
          PROMPT: A homeowner and a professional installer reviewing documents together at a dining table, paperwork and tablet visible, warm interior lighting, lifestyle documentary photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/installation/installateur-rge/demarche-devis.jpg"
        imageAlt="Demande de devis à un artisan RGE"
        title="Demander plusieurs devis comparatifs"
      />
      {/* @IMAGE demarche-accompagnement.jpg
          CONTEXT: Carousel card about using a service like Tepio to be matched with an RGE installer. Should feel supportive.
          PROMPT: A friendly advisor on a phone call at a modern desk, smiling, computer screen in background showing a dashboard, bright office with plants, professional lifestyle photography, 4:3 aspect ratio */}
      <FeatureCardImage
        imageSrc="/installation/installateur-rge/demarche-accompagnement.jpg"
        imageAlt="Accompagnement pour trouver un installateur RGE"
        title="Se faire accompagner par un service spécialisé"
      />
    </CenterCarouselSection>
  );
}
