import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-xl font-bold">
            {siteConfig.name}
          </span>
        </Link>

        {/* Navigation - will be expanded later */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Accueil
          </Link>
          <Link
            href="/design-system"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Design System
          </Link>
          {/* Future navigation items:
          <Link href="/pompe-a-chaleur">Pompe à Chaleur</Link>
          <Link href="/poele-a-bois">Poêle à Bois</Link>
          <Link href="/climatisation">Climatisation</Link>
          */}
        </nav>

        {/* CTA */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild className="hidden sm:flex">
            <a href={`tel:${siteConfig.business.phone.replace(/\s/g, "")}`}>
              <Phone className="mr-2 h-4 w-4" />
              {siteConfig.business.phone}
            </a>
          </Button>
          <Button size="sm" asChild>
            <Link href="/devis-gratuit">Devis gratuit</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
