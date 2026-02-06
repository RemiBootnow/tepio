"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

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

  return (
    <>
    <Section
      as="header"
      className="flex h-17 items-center justify-between"
      wrapperClassName="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      {/* Left side: Logo + Navigation (desktop) */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Navigation - Desktop only */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
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
        {/* Estimer button - always neutral (dark) */}
        <Button variant="neutral" size="default" asChild>
          <Link href="/devis-gratuit">Estimer</Link>
        </Button>

        {/* Menu button - Mobile only */}
        <Button
          variant="neutral-soft"
          size="default"
          className="lg:hidden"
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

        {/* CTA Links - Desktop only */}
        {ctaLinks.map((link) => (
          <Button
            key={link.href}
            variant="neutral-soft"
            size="default"
            asChild
            className="hidden lg:inline-flex"
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>
    </Section>

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
