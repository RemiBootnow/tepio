import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const footerColumns = [
  {
    title: "Poêles",
    links: [
      { href: "/poele/granules", label: "Poêle à granulés" },
      { href: "/poele/pellets", label: "Poêle à pellets" },
      { href: "/poele/bois", label: "Poêle à bois" },
      { href: "/poele/mixte", label: "Poêle mixte" },
      { href: "/poele/insert-cheminee", label: "Insert cheminée" },
    ],
  },
  {
    title: "Aides",
    links: [
      { href: "/aides/ma-prime-renov-poele", label: "MaPrimeRénov'" },
      { href: "/aides/prime-energie-poele", label: "Prime énergie (CEE)" },
      { href: "/aides/eco-ptz", label: "Éco-PTZ" },
      { href: "/aides/simulateur", label: "Simulateur d'aides" },
    ],
  },
  {
    title: "Prix & Installation",
    links: [
      { href: "/prix", label: "Prix d'un poêle" },
      { href: "/prix/poele-granules", label: "Prix granulés" },
      { href: "/prix/poele-bois", label: "Prix bois" },
      { href: "/devis", label: "Devis gratuit" },
      { href: "/installation/installateur-rge", label: "Installateur RGE" },
      { href: "/actualites", label: "Actualités" },
    ],
  },
];

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  { href: "/politique-cookies", label: "Politique de cookies" },
  { href: "/cgv", label: "CGV" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Section as="footer" background="bg-background" className="py-16">
      {/* Main grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div className="flex flex-col gap-6">
          <Logo color="default" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Trouvez l'installateur RGE certifié QualiBois le plus proche pour
            votre poêle à bois ou à granulés.
          </p>
          <Button variant="primary" size="default" className="self-start" asChild>
            <Link href="/devis">Devis gratuit</Link>
          </Button>
        </div>

        {/* Nav columns */}
        {footerColumns.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-foreground">{col.title}</p>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-8 border-t border-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {APP_NAME}. Tous droits réservés.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
