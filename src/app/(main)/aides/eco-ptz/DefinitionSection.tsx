import { SplitSection } from "@/components/sections/split-section";

export function DefinitionSection() {
  return (
    // @IMAGE definition.jpg
    //   CONTEXT: Split section explaining what eco-PTZ is. Should feel educational and trustworthy — a homeowner learning about financing options.
    //   PROMPT: A French homeowner couple sitting at a kitchen table reviewing renovation documents with a financial advisor, natural daylight from a window, modern bright kitchen interior, warm and professional atmosphere, documentary photography style, 3:4 aspect ratio portrait orientation, warm tones
    <SplitSection
      imagePosition="left"
      title="Qu'est-ce que l'éco-prêt à taux zéro ?"
      subtitle="L'éco-PTZ est un prêt bancaire sans intérêts, garanti par l'État, destiné à financer vos travaux de rénovation énergétique. Ouvert à tous les propriétaires sans condition de revenus, il couvre l'installation de poêles à granulés, pompes à chaleur, isolation et bien d'autres travaux. Vous remboursez uniquement le capital emprunté, sans aucun frais supplémentaire."
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
      imageSrc="/aides/eco-ptz/definition.jpg"
      imageAlt="Couple étudiant un dossier éco-PTZ avec un conseiller"
    />
  );
}
