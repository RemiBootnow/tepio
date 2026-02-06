import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypographyShowcase } from "./components/TypographyShowcase";
import { ColorsShowcase } from "./components/ColorsShowcase";
import { ButtonsShowcase } from "./components/ButtonsShowcase";
import { FormsShowcase } from "./components/FormsShowcase";
import { CardsShowcase } from "./components/CardsShowcase";

export const metadata: Metadata = generatePageMetadata({
  title: "Design System",
  description: "Composants et patterns du design system MonExpertRenov",
  noIndex: true, // Don't index design system
});

export default function DesignSystemPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-heading font-medium mb-4">Design System</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Bibliothèque de composants réutilisables pour MonExpertRenov. Tous les
          composants sont construits avec shadcn/ui et Tailwind CSS.
        </p>
      </div>

      <Tabs defaultValue="typography" className="w-full">
        <TabsList className="mb-8 flex-wrap h-auto gap-2">
          <TabsTrigger value="typography">Typographie</TabsTrigger>
          <TabsTrigger value="colors">Couleurs</TabsTrigger>
          <TabsTrigger value="buttons">Boutons</TabsTrigger>
          <TabsTrigger value="forms">Formulaires</TabsTrigger>
          <TabsTrigger value="cards">Cartes</TabsTrigger>
        </TabsList>

        <TabsContent value="typography">
          <TypographyShowcase />
        </TabsContent>

        <TabsContent value="colors">
          <ColorsShowcase />
        </TabsContent>

        <TabsContent value="buttons">
          <ButtonsShowcase />
        </TabsContent>

        <TabsContent value="forms">
          <FormsShowcase />
        </TabsContent>

        <TabsContent value="cards">
          <CardsShowcase />
        </TabsContent>
      </Tabs>
    </div>
  );
}
