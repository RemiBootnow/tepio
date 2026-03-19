"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu01, X, ChevronDown } from "@untitledui-pro/icons/line";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

// Pages where the header starts in dark/transparent mode
const darkModeRoutes = ["/"];

const HIDE_THRESHOLD = 50;

type NavChild = { href: string; label: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navItems: NavItem[] = [
  {
    label: "Poêles",
    href: "/poele",
    children: [
      { href: "/poele", label: "Tous nos poêles" },
      { href: "/poele/granules", label: "Poêle à granulés" },
      { href: "/poele/bois", label: "Poêle à bois" },
      { href: "/poele/mixte", label: "Poêle mixte" },
      { href: "/poele/insert-cheminee", label: "Insert cheminée" },
      { href: "/poele/hydro", label: "Poêle hydro" },
    ],
  },
  {
    label: "Guides",
    href: "/guide",
    children: [
      { href: "/guide", label: "Guide complet" },
      { href: "/guide/comparatif-bois-granules", label: "Bois vs granulés" },
      { href: "/guide/calculer-puissance-poele", label: "Calculer la puissance" },
      { href: "/guide/rendement-poele", label: "Rendement" },
      { href: "/guide/entretien-ramonage", label: "Entretien & ramonage" },
    ],
  },
  {
    label: "Aides",
    href: "/aides",
    children: [
      { href: "/aides", label: "Toutes les aides" },
      { href: "/aides/ma-prime-renov-poele", label: "MaPrimeRénov'" },
      { href: "/aides/prime-energie-poele", label: "Prime énergie (CEE)" },
      { href: "/aides/eco-ptz", label: "Éco-PTZ" },
      { href: "/aides/simulateur", label: "Simulateur d'aides" },
    ],
  },
  {
    label: "Prix & Installation",
    href: "/prix",
    children: [
      { href: "/prix", label: "Prix d'un poêle" },
      { href: "/prix/poele-granules", label: "Prix granulés" },
      { href: "/prix/poele-bois", label: "Prix bois" },
      { href: "/devis", label: "Devis gratuit" },
      { href: "/installation", label: "Installation" },
      { href: "/installation/installateur-rge", label: "Installateur RGE" },
    ],
  },
  {
    label: "Actualités",
    href: "/actualites",
  },
];

const ctaLinks = [
  { href: "/espace-pro", label: "Espace Pro" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const isDarkRoute = darkModeRoutes.includes(pathname);
  const [isVisible, setIsVisible] = useState(true);
  const [isCurrentlyDark, setIsCurrentlyDark] = useState(isDarkRoute);
  const prevScrollY = useRef(0);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsCurrentlyDark(isDarkRoute);
    setIsVisible(true);
  }, [pathname, isDarkRoute]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > HIDE_THRESHOLD;

      if (!scrolled) {
        setIsVisible(true);
        setIsCurrentlyDark(isDarkRoute);
      } else if (currentScrollY > prevScrollY.current) {
        setIsVisible(false);
        if (isMenuOpen) setIsMenuOpen(false);
        setActiveDropdown(null);
      } else {
        setIsVisible(true);
        setIsCurrentlyDark(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkRoute, isMenuOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Section
          as="header"
          className="flex h-17 items-center justify-between"
          wrapperClassName={`transition-colors duration-300 ${
            isCurrentlyDark ? "bg-transparent" : "bg-background"
          }`}
        >
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Logo color={isCurrentlyDark ? "white" : "default"} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.children ? (
                    <button
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isCurrentlyDark
                          ? "text-white hover:bg-white/10"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`size-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="default"
                      className={isCurrentlyDark ? "text-white hover:bg-white/10 hover:text-white" : ""}
                      asChild
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  )}

                  {/* Dropdown panel */}
                  {item.children && (
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-150 ${
                        activeDropdown === item.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="bg-background rounded-xl border border-border shadow-lg py-1.5 min-w-52">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right: CTAs */}
          <div className="flex items-center gap-3">
            {ctaLinks.map((link) => (
              <Button
                key={link.href}
                variant={isCurrentlyDark ? "ghost" : "neutral-soft"}
                size="default"
                className={`hidden lg:inline-flex ${
                  isCurrentlyDark ? "text-white hover:bg-white/10 hover:text-white" : ""
                }`}
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}

            <Button
              variant={isCurrentlyDark ? "ghost" : "neutral"}
              size="default"
              className={isCurrentlyDark ? "bg-white text-foreground hover:bg-white/90" : ""}
              asChild
            >
              <Link href="/estimation">Estimer</Link>
            </Button>

            {/* Mobile menu toggle */}
            <Button
              variant={isCurrentlyDark ? "ghost" : "neutral-soft"}
              size="default"
              className={`lg:hidden ${
                isCurrentlyDark ? "bg-white/15 text-white hover:bg-white/20 hover:text-white" : ""
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menu
              <span className="relative size-4">
                <Menu01
                  className={`absolute inset-0 size-4 transition-all duration-200 ${
                    isMenuOpen ? "opacity-0 blur-[2px]" : "opacity-100 blur-0"
                  }`}
                />
                <X
                  className={`absolute inset-0 size-4 transition-all duration-200 ${
                    isMenuOpen ? "opacity-100 blur-0" : "opacity-0 blur-[2px]"
                  }`}
                />
              </span>
            </Button>
          </div>
        </Section>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-17 z-40 bg-background transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ height: "calc(100dvh - 68px)" }}
      >
        <nav className="flex flex-col overflow-y-auto h-full divide-y divide-border">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMobileSection(
                        openMobileSection === item.label ? null : item.label
                      )
                    }
                    className="flex items-center justify-between w-full px-6 py-4 text-lg font-semibold text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        openMobileSection === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openMobileSection === item.label ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col pb-3 px-6">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="py-2.5 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-4 text-lg font-semibold text-foreground"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {ctaLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-lg font-semibold text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
