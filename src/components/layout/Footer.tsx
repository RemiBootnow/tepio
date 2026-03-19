import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const footerColumns = [
  {
    title: "Poêles",
    links: [
      { href: "/poele", label: "Tous nos poêles" },
      { href: "/poele/granules", label: "Poêle à granulés" },
      { href: "/poele/bois", label: "Poêle à bois" },
      { href: "/poele/mixte", label: "Poêle mixte" },
      { href: "/poele/insert-cheminee", label: "Insert cheminée" },
      { href: "/poele/hydro", label: "Poêle hydro" },
    ],
  },
  {
    title: "Aides & Guides",
    links: [
      { href: "/aides", label: "Toutes les aides" },
      { href: "/aides/ma-prime-renov-poele", label: "MaPrimeRénov'" },
      { href: "/aides/simulateur", label: "Simulateur d'aides" },
      { href: "/guide", label: "Guide complet" },
      { href: "/guide/comparatif-bois-granules", label: "Bois vs granulés" },
      { href: "/guide/entretien-ramonage", label: "Entretien & ramonage" },
    ],
  },
  {
    title: "Prix & Installation",
    links: [
      { href: "/prix", label: "Prix d'un poêle" },
      { href: "/devis", label: "Devis gratuit" },
      { href: "/installation", label: "Installation" },
      { href: "/installation/installateur-rge", label: "Installateur RGE" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

const legalLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Section as="footer" background="bg-neutral" className="py-16">
      {/* Main grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div className="flex flex-col gap-6">
          <Logo color="white" />
          <p className="text-sm text-white/60 leading-relaxed">
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
            <p className="text-sm font-semibold text-white">{col.title}</p>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
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
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/40">
          © {currentYear} {APP_NAME}. Tous droits réservés.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
