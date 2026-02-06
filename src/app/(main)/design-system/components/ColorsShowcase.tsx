import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";

const semanticColors = [
  {
    name: "Background",
    variable: "bg-background",
    textClass: "text-foreground",
    description: "Arrière-plan principal",
  },
  {
    name: "Foreground",
    variable: "bg-foreground",
    textClass: "text-background",
    description: "Texte principal",
  },
  {
    name: "Primary",
    variable: "bg-primary",
    textClass: "text-primary-foreground",
    description: "Actions principales, CTA",
  },
  {
    name: "Secondary",
    variable: "bg-secondary",
    textClass: "text-secondary-foreground",
    description: "Actions secondaires",
  },
  {
    name: "Muted",
    variable: "bg-muted",
    textClass: "text-muted-foreground",
    description: "Arrière-plans subtils",
  },
  {
    name: "Accent",
    variable: "bg-accent",
    textClass: "text-accent-foreground",
    description: "Mise en évidence",
  },
  {
    name: "Destructive",
    variable: "bg-destructive",
    textClass: "text-destructive-foreground",
    description: "Actions destructrices",
  },
];

const brandColors = [
  {
    name: "Vert succès",
    class: "bg-green-600",
    hex: "#16a34a",
    usage: "Validations, économies",
  },
  {
    name: "Vert clair",
    class: "bg-green-100",
    hex: "#dcfce7",
    usage: "Fonds légers positifs",
  },
  {
    name: "Bleu info",
    class: "bg-blue-600",
    hex: "#2563eb",
    usage: "Informations, liens",
  },
  {
    name: "Orange attention",
    class: "bg-orange-500",
    hex: "#f97316",
    usage: "Avertissements, promotions",
  },
];

export function ColorsShowcase() {
  return (
    <div className="space-y-8">
      {/* Semantic Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Couleurs sémantiques</CardTitle>
          <CardDescription>
            Couleurs du système de design shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {semanticColors.map((color) => (
              <div
                key={color.name}
                className="rounded-lg border overflow-hidden"
              >
                <div
                  className={`${color.variable} ${color.textClass} p-6 font-medium`}
                >
                  {color.name}
                </div>
                <div className="p-3 text-sm">
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">
                    {color.variable}
                  </code>
                  <p className="text-muted-foreground mt-1">
                    {color.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Brand Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Couleurs de marque</CardTitle>
          <CardDescription>
            Couleurs additionnelles pour {APP_NAME}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {brandColors.map((color) => (
              <div
                key={color.name}
                className="rounded-lg border overflow-hidden"
              >
                <div className={`${color.class} h-20`} />
                <div className="p-3">
                  <p className="font-medium text-sm">{color.name}</p>
                  <code className="text-xs text-muted-foreground">
                    {color.hex}
                  </code>
                  <p className="text-xs text-muted-foreground mt-1">
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Exemples d&apos;utilisation</CardTitle>
          <CardDescription>
            Comment utiliser les couleurs dans le code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">Message de succès</p>
              <p className="text-green-700 text-sm">
                Votre demande a bien été envoyée.
              </p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 font-medium">Information</p>
              <p className="text-blue-700 text-sm">
                Les aides MaPrimeRénov&apos; peuvent couvrir jusqu&apos;à 90% du
                coût.
              </p>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-orange-800 font-medium">Attention</p>
              <p className="text-orange-700 text-sm">
                Offre valable jusqu&apos;au 31 décembre.
              </p>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">Erreur</p>
              <p className="text-red-700 text-sm">
                Veuillez vérifier votre adresse email.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
