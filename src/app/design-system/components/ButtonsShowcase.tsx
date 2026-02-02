"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowRight, Download, Loader2, Mail } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

export function ButtonsShowcase() {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Variantes</CardTitle>
          <CardDescription>
            Différentes variantes de boutons pour différents contextes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Par défaut</Button>
            <Button variant="secondary">Secondaire</Button>
            <Button variant="destructive">Destructif</Button>
            <Button variant="outline">Contour</Button>
            <Button variant="ghost">Fantôme</Button>
            <Button variant="link">Lien</Button>
          </div>
          <CodeBlock
            code={`<Button variant="default">Par défaut</Button>
<Button variant="secondary">Secondaire</Button>
<Button variant="destructive">Destructif</Button>
<Button variant="outline">Contour</Button>
<Button variant="ghost">Fantôme</Button>
<Button variant="link">Lien</Button>`}
          />
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card>
        <CardHeader>
          <CardTitle>Tailles</CardTitle>
          <CardDescription>Tailles disponibles pour les boutons</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Petit</Button>
            <Button size="default">Normal</Button>
            <Button size="lg">Grand</Button>
            <Button size="icon">
              <Phone className="h-4 w-4" />
            </Button>
          </div>
          <CodeBlock
            code={`<Button size="sm">Petit</Button>
<Button size="default">Normal</Button>
<Button size="lg">Grand</Button>
<Button size="icon"><Phone className="h-4 w-4" /></Button>`}
          />
        </CardContent>
      </Card>

      {/* With Icons */}
      <Card>
        <CardHeader>
          <CardTitle>Avec icônes</CardTitle>
          <CardDescription>
            Boutons avec icônes pour plus de clarté
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>
              <Phone className="mr-2 h-4 w-4" />
              Nous appeler
            </Button>
            <Button variant="outline">
              En savoir plus
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary">
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Nous contacter
            </Button>
          </div>
          <CodeBlock
            code={`<Button>
  <Phone className="mr-2 h-4 w-4" />
  Nous appeler
</Button>
<Button variant="outline">
  En savoir plus
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>`}
          />
        </CardContent>
      </Card>

      {/* States */}
      <Card>
        <CardHeader>
          <CardTitle>États</CardTitle>
          <CardDescription>États désactivé et chargement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button disabled>Désactivé</Button>
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Chargement...
            </Button>
          </div>
          <CodeBlock
            code={`<Button disabled>Désactivé</Button>
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Chargement...
</Button>`}
          />
        </CardContent>
      </Card>

      {/* CTA Specific */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Boutons CTA
            <Badge variant="secondary">Lead Gen</Badge>
          </CardTitle>
          <CardDescription>
            Boutons d&apos;action principale optimisés pour la conversion
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-green-50"
            >
              <Phone className="mr-2 h-5 w-5" />
              01 23 45 67 89
            </Button>
          </div>
          <CodeBlock
            code={`<Button size="lg" className="bg-green-700 hover:bg-green-800">
  Demander un devis gratuit
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>
<Button
  size="lg"
  variant="outline"
  className="border-green-700 text-green-700 hover:bg-green-50"
>
  <Phone className="mr-2 h-5 w-5" />
  01 23 45 67 89
</Button>`}
          />
        </CardContent>
      </Card>
    </div>
  );
}
