"use client";

import { useEffect, useState, useRef } from "react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

function TableOfContents({ contentRef }: { contentRef: React.RefObject<HTMLDivElement | null> }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Extract headings from content
  useEffect(() => {
    if (!contentRef.current) return;
    const headings = contentRef.current.querySelectorAll("h2, h3");
    const tocItems: TocItem[] = [];

    headings.forEach((heading) => {
      // Generate ID if missing
      if (!heading.id) {
        heading.id = heading.textContent
          ?.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") ?? "";
      }
      tocItems.push({
        id: heading.id,
        text: heading.textContent ?? "",
        level: heading.tagName === "H2" ? 2 : 3,
      });
    });

    setItems(tocItems);
  }, [contentRef]);

  // Track active heading with IntersectionObserver
  useEffect(() => {
    if (!contentRef.current || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first visible heading
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items, contentRef]);

  if (items.length === 0) return null;

  return (
    <nav className="flex flex-col gap-1">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
          }}
          className={cn(
            "text-sm leading-6 py-1 border-l-2 transition-colors",
            item.level === 2 ? "pl-4" : "pl-7",
            activeId === item.id
              ? "border-foreground text-foreground font-medium"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
          )}
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
}

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Section as="article" className="pt-10 pb-20 md:pt-14 md:pb-28">
      {/* Header */}
      <div className="max-w-[600px] mb-10 md:mb-14">
        <Heading as="h1" className="mb-3">
          {title}
        </Heading>
        {lastUpdated && (
          <p className="text-sm text-muted-foreground">
            Dernière mise à jour : {lastUpdated}
          </p>
        )}
      </div>

      {/* Body + TOC sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr] gap-12 lg:gap-16">
        {/* Content */}
        <div
          ref={contentRef}
          className={[
            // Headings
            "[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:leading-snug",
            "[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3",
            // Paragraphs
            "[&_p]:text-sm [&_p]:leading-7 [&_p]:text-muted-foreground [&_p]:mb-4",
            // Lists
            "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-1.5",
            "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:space-y-1.5",
            "[&_li]:text-sm [&_li]:leading-7 [&_li]:text-muted-foreground",
            // Strong
            "[&_strong]:font-semibold [&_strong]:text-foreground",
            // Links
            "[&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary",
          ].join(" ")}
        >
          {children}
        </div>

        {/* Sticky TOC sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Sur cette page
            </p>
            <TableOfContents contentRef={contentRef} />
          </div>
        </aside>
      </div>
    </Section>
  );
}
