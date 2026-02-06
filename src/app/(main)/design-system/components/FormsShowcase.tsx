"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "./CodeBlock";

export function FormsShowcase() {
  return (
    <div className="space-y-8">
      {/* Input */}
      <Card>
        <CardHeader>
          <CardTitle>Champs de texte</CardTitle>
          <CardDescription>Différents types d&apos;inputs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="06 12 34 56 78"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled">Champ désactivé</Label>
              <Input
                id="disabled"
                disabled
                placeholder="Non modifiable"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="error">Champ avec erreur</Label>
              <Input
                id="error"
                className="border-destructive focus-visible:ring-destructive"
                defaultValue="email-invalide"
              />
              <p className="text-sm text-destructive">
                Veuillez entrer un email valide.
              </p>
            </div>
          </div>
          <CodeBlock
            code={`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="votre@email.com" />
</div>

{/* With error */}
<div className="space-y-2">
  <Label htmlFor="error">Champ avec erreur</Label>
  <Input
    id="error"
    className="border-destructive focus-visible:ring-destructive"
  />
  <p className="text-sm text-destructive">Message d'erreur</p>
</div>`}
          />
        </CardContent>
      </Card>

      {/* Select */}
      <Card>
        <CardHeader>
          <CardTitle>Sélecteurs</CardTitle>
          <CardDescription>Menus déroulants</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Type de projet</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pac">Pompe à Chaleur</SelectItem>
                  <SelectItem value="poele-bois">Poêle à Bois</SelectItem>
                  <SelectItem value="poele-granules">Poêle à Granulés</SelectItem>
                  <SelectItem value="clim">Climatisation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Urgence</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Quand souhaitez-vous réaliser ?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">Dès que possible</SelectItem>
                  <SelectItem value="1-month">Dans le mois</SelectItem>
                  <SelectItem value="3-months">Dans les 3 mois</SelectItem>
                  <SelectItem value="exploring">Je me renseigne</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <CodeBlock
            code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Sélectionner un type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="pac">Pompe à Chaleur</SelectItem>
    <SelectItem value="poele-bois">Poêle à Bois</SelectItem>
  </SelectContent>
</Select>`}
          />
        </CardContent>
      </Card>

      {/* Textarea */}
      <Card>
        <CardHeader>
          <CardTitle>Zone de texte</CardTitle>
          <CardDescription>Pour les messages longs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="message">Votre message</Label>
            <Textarea
              id="message"
              placeholder="Décrivez votre projet..."
              rows={4}
            />
          </div>
          <CodeBlock
            code={`<div className="space-y-2">
  <Label htmlFor="message">Votre message</Label>
  <Textarea
    id="message"
    placeholder="Décrivez votre projet..."
    rows={4}
  />
</div>`}
          />
        </CardContent>
      </Card>

      {/* Example Form */}
      <Card>
        <CardHeader>
          <CardTitle>Exemple de formulaire</CardTitle>
          <CardDescription>
            Formulaire de contact complet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" placeholder="Jean" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" placeholder="Dupont" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email</Label>
              <Input
                id="contactEmail"
                type="email"
                placeholder="jean.dupont@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Type de projet</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pac">Pompe à Chaleur</SelectItem>
                  <SelectItem value="poele">Poêle</SelectItem>
                  <SelectItem value="clim">Climatisation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectMessage">Message</Label>
              <Textarea
                id="projectMessage"
                placeholder="Décrivez votre projet..."
                rows={3}
              />
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Envoyer ma demande
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
