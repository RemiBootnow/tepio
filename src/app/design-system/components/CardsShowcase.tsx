import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Thermometer, Leaf, Euro, CheckCircle } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

export function CardsShowcase() {
  return (
    <div className="space-y-8">
      {/* Basic Card */}
      <Card>
        <CardHeader>
          <CardTitle>Carte basique</CardTitle>
          <CardDescription>Structure de base d&apos;une carte</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Titre de la carte</CardTitle>
                <CardDescription>Description courte</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Contenu de la carte avec du texte explicatif.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Action</Button>
              </CardFooter>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Populaire</Badge>
                <CardTitle>Carte mise en avant</CardTitle>
                <CardDescription>Avec bordure colorée</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Contenu mis en avant pour les offres spéciales.</p>
              </CardContent>
              <CardFooter>
                <Button>Action principale</Button>
              </CardFooter>
            </Card>
          </div>
          <CodeBlock
            code={`<Card>
  <CardHeader>
    <CardTitle>Titre</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Contenu</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
          />
        </CardContent>
      </Card>

      {/* Service Cards */}
      <Card>
        <CardHeader>
          <CardTitle>Cartes de service</CardTitle>
          <CardDescription>Pour présenter les services</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Pompe à Chaleur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Installation de PAC air-air et air-eau par des artisans RGE.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-primary">
                  En savoir plus
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-2">
                  <Leaf className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Poêle à Bois</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Poêles à bois performants pour un chauffage économique.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-primary">
                  En savoir plus
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                  <Euro className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Aides Financières</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  MaPrimeRénov&apos;, CEE et autres aides pour votre projet.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-primary">
                  En savoir plus
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Feature Cards */}
      <Card>
        <CardHeader>
          <CardTitle>Cartes d&apos;avantages</CardTitle>
          <CardDescription>Pour lister les bénéfices</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-4 p-4 rounded-lg border">
              <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
              <div>
                <h4 className="font-semibold">Économies d&apos;énergie</h4>
                <p className="text-sm text-muted-foreground">
                  Réduisez votre facture de chauffage jusqu&apos;à 70%.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg border">
              <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
              <div>
                <h4 className="font-semibold">Artisans RGE</h4>
                <p className="text-sm text-muted-foreground">
                  Installation par des professionnels certifiés.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg border">
              <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
              <div>
                <h4 className="font-semibold">Aides financières</h4>
                <p className="text-sm text-muted-foreground">
                  Accompagnement pour vos dossiers de subventions.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg border">
              <CheckCircle className="h-6 w-6 text-green-600 shrink-0" />
              <div>
                <h4 className="font-semibold">Garantie 10 ans</h4>
                <p className="text-sm text-muted-foreground">
                  Tranquillité d&apos;esprit avec notre garantie décennale.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badge Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>Pour les labels et tags</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge>Par défaut</Badge>
            <Badge variant="secondary">Secondaire</Badge>
            <Badge variant="outline">Contour</Badge>
            <Badge variant="destructive">Destructif</Badge>
            <Badge className="bg-green-600">RGE</Badge>
            <Badge className="bg-blue-600">MaPrimeRénov&apos;</Badge>
            <Badge className="bg-orange-500">Promo</Badge>
          </div>
          <CodeBlock
            code={`<Badge>Par défaut</Badge>
<Badge variant="secondary">Secondaire</Badge>
<Badge variant="outline">Contour</Badge>
<Badge className="bg-green-600">RGE</Badge>`}
          />
        </CardContent>
      </Card>
    </div>
  );
}
