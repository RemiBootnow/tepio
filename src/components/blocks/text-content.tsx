import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

interface TextContentProps {
  eyebrow?: string;
  title: string;
  titleLevel?: 1 | 2;
  subtitle?: string;
  primaryButtonLabel?: string;
  primaryButtonLink?: string;
  primaryButtonColor?: "neutral" | "primary";
  secondaryButtonLabel?: string;
  secondaryButtonLink?: string;
  align?: "left" | "center";
  colorMode?: "light" | "dark";
  className?: string;
  subtitleClassName?: string;
  /** Optional slot rendered between the text group and the buttons. */
  children?: React.ReactNode;
}

export function TextContent({
  eyebrow,
  title,
  titleLevel = 2,
  subtitle,
  primaryButtonLabel,
  primaryButtonLink,
  primaryButtonColor = "neutral",
  secondaryButtonLabel,
  secondaryButtonLink,
  align = "left",
  colorMode = "light",
  className,
  subtitleClassName,
  children,
}: TextContentProps) {
  const isCenter = align === "center";
  const isDark = colorMode === "dark";
  const hasPrimary = !!primaryButtonLabel && !!primaryButtonLink;
  const hasSecondary = !!secondaryButtonLabel && !!secondaryButtonLink;

  return (
    <div
      className={cn(
        "flex flex-col gap-8",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {/* Text group */}
      <div className="flex flex-col gap-4">
        {eyebrow && (
          <Eyebrow colorMode={colorMode}>{eyebrow}</Eyebrow>
        )}

        <Heading
          as={titleLevel === 1 ? "h1" : "h2"}
          className={isDark ? "text-white" : undefined}
        >
          {title}
        </Heading>

        {subtitle && (
          <p
            className={cn(
              "text-base leading-6",
              isDark ? "text-white/70" : "text-foreground/70",
              isCenter ? "max-w-120 mx-auto" : "max-w-110",
              subtitleClassName
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {children}

      {/* Buttons */}
      {(hasPrimary || hasSecondary) && (
        <div
          className={cn(
            "flex flex-wrap gap-4",
            isCenter ? "justify-center" : "justify-start"
          )}
        >
          {hasPrimary && (
            <Button
              asChild
              size="lg"
              variant={primaryButtonColor === "primary" ? "default" : "neutral"}
              colorMode={colorMode}
            >
              <Link href={primaryButtonLink!}>{primaryButtonLabel}</Link>
            </Button>
          )}
          {hasSecondary && (
            <Button
              asChild
              size="lg"
              variant="outline"
              colorMode={colorMode}
            >
              <Link href={secondaryButtonLink!}>{secondaryButtonLabel}</Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
