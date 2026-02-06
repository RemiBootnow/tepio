import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-medium">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">
              Experts en rénovation énergétique. Pompes à chaleur, poêles et
              climatisation.
            </p>
            <p className="text-sm text-muted-foreground">
              <a
                href={`tel:${siteConfig.business.phone.replace(/\s/g, "")}`}
                className="hover:text-primary"
              >
                {siteConfig.business.phone}
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="hover:text-primary"
              >
                {siteConfig.business.email}
              </a>
            </p>
          </div>

          {/* Services - placeholder for future */}
          <div className="space-y-4">
            <h3 className="font-heading font-medium">Nos Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/pompe-a-chaleur" className="hover:text-primary">
                  Pompe à Chaleur
                </Link>
              </li>
              <li>
                <Link href="/poele-a-bois" className="hover:text-primary">
                  Poêle à Bois
                </Link>
              </li>
              <li>
                <Link href="/poele-a-granules" className="hover:text-primary">
                  Poêle à Granulés
                </Link>
              </li>
              <li>
                <Link href="/climatisation" className="hover:text-primary">
                  Climatisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources - placeholder for future */}
          <div className="space-y-4">
            <h3 className="font-heading font-medium">Ressources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/aides-financieres" className="hover:text-primary">
                  Aides Financières
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-heading font-medium">Informations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/mentions-legales" className="hover:text-primary">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="hover:text-primary"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="hover:text-primary">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.business.legalName}. Tous droits
              réservés.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
