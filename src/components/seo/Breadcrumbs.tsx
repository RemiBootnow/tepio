import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schemas";
import { siteConfig } from "@/config/site";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumbs component with structured data
 *
 * Usage:
 * ```tsx
 * <Breadcrumbs
 *   items={[
 *     { label: "Pompe à Chaleur", href: "/pompe-a-chaleur" },
 *     { label: "Air-Eau", href: "/pompe-a-chaleur/air-eau" },
 *   ]}
 * />
 * ```
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Accueil", href: "/" }, ...items];

  const schemaItems = allItems.map((item) => ({
    name: item.label,
    url: `${siteConfig.url}${item.href}`,
  }));

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Fil d'Ariane" className="py-4">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="mx-2 h-4 w-4" aria-hidden="true" />
              )}
              {index === allItems.length - 1 ? (
                <span
                  className="font-medium text-foreground"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {index === 0 ? (
                    <span className="flex items-center">
                      <Home className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">{item.label}</span>
                    </span>
                  ) : (
                    item.label
                  )}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
