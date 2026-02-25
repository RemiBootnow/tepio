"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

// Pages where the header starts in dark/transparent mode
const darkModeRoutes = ["/"];

const HIDE_THRESHOLD = 50;

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/pompe-a-chaleur", label: "Pompe à Chaleur" },
  { href: "/poele-a-bois", label: "Poêle à Bois" },
  { href: "/climatisation", label: "Climatisation" },
];

const ctaLinks = [
  { href: "/espace-pro", label: "Espace Pro" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDarkRoute = darkModeRoutes.includes(pathname);

  const [isVisible, setIsVisible] = useState(true);
  const [isCurrentlyDark, setIsCurrentlyDark] = useState(isDarkRoute);

  const prevScrollY = useRef(0);

  useEffect(() => {
    // Sync dark mode when route changes
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
        // Scrolling down
        setIsVisible(false);
        if (isMenuOpen) setIsMenuOpen(false);
      } else {
        // Scrolling up
        setIsVisible(true);
        setIsCurrentlyDark(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkRoute, isMenuOpen]);

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
            isCurrentlyDark
              ? "bg-transparent"
              : "bg-background"
          }`}
        >
          {/* Left side: Logo + Navigation (desktop) */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo color={isCurrentlyDark ? "white" : "default"} />
            </Link>

            {/* Navigation - Desktop only */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                if (isCurrentlyDark) {
                  return (
                    <Button
                      key={link.href}
                      variant="ghost"
                      size="default"
                      className={isActive ? "bg-white/15 text-white hover:bg-white/20 hover:text-white" : "text-white hover:bg-white/10 hover:text-white"}
                      asChild
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  );
                }
                return (
                  <Button
                    key={link.href}
                    variant={isActive ? "neutral-soft" : "ghost"}
                    size="default"
                    asChild
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                );
              })}
            </nav>
          </div>

          {/* Right side: CTAs */}
          <div className="flex items-center gap-3">
            {/* CTA Links - Desktop only */}
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

            {/* Estimer button */}
            <Button
              variant={isCurrentlyDark ? "ghost" : "neutral"}
              size="default"
              className={isCurrentlyDark ? "bg-white text-foreground hover:bg-white/90" : ""}
              asChild
            >
              <Link href="/estimation">Estimer</Link>
            </Button>

            {/* Menu button - Mobile only */}
            <Button
              variant={isCurrentlyDark ? "ghost" : "neutral-soft"}
              size="default"
              className={`lg:hidden ${isCurrentlyDark ? "bg-white/15 text-white hover:bg-white/20 hover:text-white" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menu
              <span className="relative size-4">
                <Menu
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
        <nav className="flex flex-col p-6">
          {[...navLinks, ...ctaLinks].map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`py-4 text-lg font-semibold ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
