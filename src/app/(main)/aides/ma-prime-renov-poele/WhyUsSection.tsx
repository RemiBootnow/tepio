import { APP_NAME } from "@/lib/constants";
import { SplitSection } from "@/components/sections/split-section";

export function WhyUsSection() {
  return (
    // @IMAGE why-us.jpg
    //   CONTEXT: Differentiation section explaining why choose this company. Should feel trustworthy and professional.
    //   PROMPT: A certified French artisan in navy work clothes installing a modern pellet stove flue pipe in a bright living room, tools neatly arranged nearby, homeowner smiling in the background, natural window light, documentary photography style, 3:4 aspect ratio portrait orientation, warm professional tones
    <SplitSection
      imageSrc="/aides/ma-prime-renov-poele/why-us.jpg"
      imageAlt={`Artisan ${APP_NAME} installant un poêle`}
      imagePosition="left"
      title={`${APP_NAME} s'occupe de vos démarches MaPrimeRénov'`}
      subtitle={`Nos conseillers ${APP_NAME} vous accompagnent de A à Z : estimation des aides, montage du dossier MaPrimeRénov' et installation par un artisan RGE certifié. Vous n'avez qu'une chose à faire : profiter de votre nouveau poêle.`}
      primaryButtonLabel="Estimer mes aides"
      primaryButtonLink="/estimation"
    />
  );
}
