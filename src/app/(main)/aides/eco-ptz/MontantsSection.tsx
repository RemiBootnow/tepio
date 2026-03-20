import { SplitSection } from "@/components/sections/split-section";

export function MontantsSection() {
  return (
    // @IMAGE montants.jpg
    //   CONTEXT: Split section about eco-PTZ amounts. Should convey value and financial planning — a homeowner feeling confident about their budget.
    //   PROMPT: Close-up of a French homeowner's hands reviewing an energy renovation quote on a tablet screen at a wooden desk, calculator and documents nearby, bright natural light from a side window, clean modern home office, warm professional atmosphere, editorial photography, 3:4 aspect ratio portrait orientation
    <SplitSection
      imagePosition="right"
      title="Quel montant pouvez-vous emprunter ?"
      subtitle="Le plafond de l'éco-PTZ dépend du nombre d'actions réalisées. Pour une action seule (ex. : pose d'un poêle à granulés), vous pouvez emprunter jusqu'à 15 000 €. Pour deux travaux combinés, le plafond monte à 25 000 €. Et pour un bouquet de trois actions ou plus, vous accédez au maximum de 50 000 €. Un éco-PTZ spécifique « Performance énergétique globale » permet aussi d'emprunter jusqu'à 50 000 € si votre logement atteint un gain énergétique de 35 % minimum."
      primaryButtonLabel="Simuler mon éco-PTZ"
      primaryButtonLink="/estimation"
      imageSrc="/aides/eco-ptz/montants.jpg"
      imageAlt="Propriétaire consultant un devis de rénovation énergétique"
    />
  );
}
