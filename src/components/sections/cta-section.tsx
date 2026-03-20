import { TextContent } from "@/components/blocks/text-content";

const GRADIENT_COLORS = {
  green: "1,50,45",     // #01322D
  black: "0,0,0",       // #000000
  white: "255,255,255",  // #FFFFFF
  beige: "250,246,241",  // #FAF6F1
} as const;

type GradientColor = keyof typeof GRADIENT_COLORS;

interface CtaSectionProps {
  // Background
  backgroundSrc: string;
  backgroundAlt: string;
  /** Color of the gradient overlay and top block. Defaults to "green" (bg-neutral). */
  gradientColor?: GradientColor;

  // TextContent
  eyebrow?: string;
  title: string;
  titleLevel?: 1 | 2;
  subtitle?: string;
  primaryButtonLabel?: string;
  primaryButtonLink?: string;
  primaryButtonColor?: "neutral" | "primary";
  secondaryButtonLabel?: string;
  secondaryButtonLink?: string;
  colorMode?: "light" | "dark";
}

export function CtaSection({
  backgroundSrc,
  backgroundAlt,
  gradientColor = "green",
  eyebrow,
  title,
  titleLevel,
  subtitle,
  primaryButtonLabel,
  primaryButtonLink,
  primaryButtonColor,
  secondaryButtonLabel,
  secondaryButtonLink,
  colorMode = "dark",
}: CtaSectionProps) {
  const rgb = GRADIENT_COLORS[gradientColor];

  return (
    <section className="relative overflow-hidden">
      {/* ── Background layer ── */}
      <div>
        {/* Solid color block — mobile only */}
        <div
          className="h-80 md:hidden"
          style={{ backgroundColor: `rgb(${rgb})` }}
        />
        {/* Image with gradient */}
        <div className="relative">
          <img
            src={backgroundSrc}
            alt={backgroundAlt}
            className="w-full h-auto"
          />
          {/* Top gradient — solid at top, transparent at 30% */}
          <div
            className="absolute inset-x-0 top-0 h-full pointer-events-none"
            style={{
              background: `linear-gradient(180deg, rgba(${rgb},1) 0%, rgba(${rgb},0) 30%)`,
            }}
          />
        </div>
      </div>

      {/* ── Content layer: positioned over color block + image ── */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-center pt-16 md:pt-24 px-5 min-[395px]:px-6">
        <TextContent
          eyebrow={eyebrow}
          title={title}
          titleLevel={titleLevel}
          subtitle={subtitle}
          primaryButtonLabel={primaryButtonLabel}
          primaryButtonLink={primaryButtonLink}
          primaryButtonColor={primaryButtonColor}
          secondaryButtonLabel={secondaryButtonLabel}
          secondaryButtonLink={secondaryButtonLink}
          colorMode={colorMode}
          align="center"
          className="max-w-2xl"
        />
      </div>
    </section>
  );
}
