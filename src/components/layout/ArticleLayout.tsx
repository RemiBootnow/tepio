import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Heading } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Clock } from "@untitledui-pro/icons/line";

interface ArticleLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  subtitle?: string;
  date?: string;
  readTime?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** CTA sidebar customization */
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
  children: React.ReactNode;
}

export function ArticleLayout({
  breadcrumbs,
  title,
  subtitle,
  date,
  readTime,
  imageSrc,
  imageAlt,
  ctaTitle = "Votre projet en 1 minute",
  ctaDescription = "Estimez vos aides et obtenez un devis gratuit. Nos experts vous rappellent sous 24h.",
  ctaLabel = "Estimer mon projet",
  ctaHref = "/estimation",
  children,
}: ArticleLayoutProps) {
  return (
    <article>
      {/* Article header */}
      <Section as="div" className="pt-10 pb-8 md:pt-14 md:pb-10">
        <div className="max-w-2xl">
          <Breadcrumb items={breadcrumbs} className="mb-6" />

          <Heading as="h1" className="mb-4">
            {title}
          </Heading>

          {subtitle && (
            <p className="text-lg text-muted-foreground leading-7 mb-6">
              {subtitle}
            </p>
          )}

          {(date || readTime) && (
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {date && <span>{date}</span>}
              {date && readTime && <span>·</span>}
              {readTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {readTime}
                </span>
              )}
            </div>
          )}
        </div>
      </Section>

      {/* Hero image */}
      {imageSrc && (
        <Section as="div" className="pb-10 md:pb-12">
          <div className="rounded-2xl overflow-hidden bg-muted aspect-[16/7]">
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 80vw"
              className="w-full h-full object-cover"
            />
          </div>
        </Section>
      )}

      {/* Body + sticky sidebar */}
      <Section as="div" className="pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">
          {/* Article prose */}
          <div
            className={[
              // Headings
              "[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:leading-snug",
              "[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3",
              "[&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-foreground [&_h4]:mt-6 [&_h4]:mb-2",
              // Paragraphs
              "[&_p]:text-base [&_p]:leading-7 [&_p]:text-muted-foreground [&_p]:mb-5",
              // Lists
              "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ul]:space-y-2",
              "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5 [&_ol]:space-y-2",
              "[&_li]:text-base [&_li]:leading-7 [&_li]:text-muted-foreground",
              // Blockquote
              "[&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-5 [&_blockquote]:my-8 [&_blockquote]:text-muted-foreground [&_blockquote]:italic",
              // Images
              "[&_img]:rounded-xl [&_img]:w-full [&_img]:my-8",
              // Strong / em
              "[&_strong]:font-semibold [&_strong]:text-foreground",
              // Links
              "[&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary",
            ].join(" ")}
          >
            {children}
          </div>

          {/* Sticky CTA sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl bg-neutral p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Heading as="h3" className="text-white text-lg leading-snug">
                  {ctaTitle}
                </Heading>
                <p className="text-white text-sm leading-6">
                  {ctaDescription}
                </p>
              </div>
              <Button asChild size="lg" variant="default">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {/* Mobile CTA banner (shown below content on small screens) */}
      <Section as="div" className="pb-16 lg:hidden">
        <div className="rounded-2xl bg-neutral p-6 flex flex-col gap-4">
          <Heading as="h3" className="text-white text-lg">
            {ctaTitle}
          </Heading>
          <p className="text-white text-sm leading-6">{ctaDescription}</p>
          <Button asChild size="lg" variant="default">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </Section>
    </article>
  );
}
