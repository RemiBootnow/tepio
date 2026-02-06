import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "./CodeBlock";

export function TypographyShowcase() {
  return (
    <div className="space-y-8">
      {/* Headings */}
      <Card>
        <CardHeader>
          <CardTitle>Titres</CardTitle>
          <CardDescription>
            Hiérarchie des titres avec la police Outfit
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-heading font-medium">
              Titre H1 - Installation Pompe à Chaleur
            </h1>
            <h2 className="text-3xl font-heading font-medium">
              Titre H2 - Nos Services
            </h2>
            <h3 className="text-2xl font-heading font-medium">
              Titre H3 - Avantages
            </h3>
            <h4 className="text-xl font-heading font-medium">
              Titre H4 - Détails
            </h4>
          </div>
          <CodeBlock
            code={`<h1 className="text-4xl font-heading font-medium">Titre H1</h1>
<h2 className="text-3xl font-heading font-medium">Titre H2</h2>
<h3 className="text-2xl font-heading font-medium">Titre H3</h3>
<h4 className="text-xl font-heading font-medium">Titre H4</h4>`}
          />
        </CardContent>
      </Card>

      {/* Body Text */}
      <Card>
        <CardHeader>
          <CardTitle>Corps de texte</CardTitle>
          <CardDescription>
            Texte courant avec la police Inter
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-lg">
              Texte large (text-lg) - Idéal pour les introductions et les
              paragraphes importants.
            </p>
            <p className="text-base">
              Texte normal (text-base) - Utilisé pour le contenu principal de la
              page. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-sm text-muted-foreground">
              Texte petit (text-sm) - Pour les informations secondaires et les
              légendes.
            </p>
            <p className="text-xs text-muted-foreground">
              Texte très petit (text-xs) - Pour les mentions légales et notes de
              bas de page.
            </p>
          </div>
          <CodeBlock
            code={`<p className="text-lg">Texte large</p>
<p className="text-base">Texte normal</p>
<p className="text-sm text-muted-foreground">Texte petit</p>
<p className="text-xs text-muted-foreground">Texte très petit</p>`}
          />
        </CardContent>
      </Card>

      {/* Text Styles */}
      <Card>
        <CardHeader>
          <CardTitle>Styles de texte</CardTitle>
          <CardDescription>Variations et emphases</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <p className="font-bold">Texte en gras (font-bold)</p>
            <p className="font-semibold">Texte semi-gras (font-semibold)</p>
            <p className="font-medium">Texte medium (font-medium)</p>
            <p className="italic">Texte italique (italic)</p>
            <p className="underline">Texte souligné (underline)</p>
            <p className="text-primary">Texte couleur primaire (text-primary)</p>
            <p className="text-muted-foreground">
              Texte atténué (text-muted-foreground)
            </p>
          </div>
          <CodeBlock
            code={`<p className="font-bold">Texte en gras</p>
<p className="font-semibold">Texte semi-gras</p>
<p className="italic">Texte italique</p>
<p className="text-primary">Texte couleur primaire</p>
<p className="text-muted-foreground">Texte atténué</p>`}
          />
        </CardContent>
      </Card>

      {/* Font Families */}
      <Card>
        <CardHeader>
          <CardTitle>Familles de polices</CardTitle>
          <CardDescription>Inter (sans) et Outfit (heading)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                font-sans (Inter)
              </p>
              <p className="font-sans text-2xl">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                font-heading (Outfit)
              </p>
              <p className="font-heading text-2xl">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn
              </p>
            </div>
          </div>
          <CodeBlock
            code={`<p className="font-sans">Police Inter pour le corps</p>
<p className="font-heading">Police Outfit pour les titres</p>`}
          />
        </CardContent>
      </Card>
    </div>
  );
}
