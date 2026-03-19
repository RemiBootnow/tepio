import { Carousel } from "@/components/ui/carousel";
import { TextContent } from "@/components/blocks/text-content";

interface LeftCarouselSectionProps {
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
  // Section
  background?: string;
  children: React.ReactNode;
}

export function LeftCarouselSection({
  eyebrow,
  title,
  titleLevel,
  subtitle,
  primaryButtonLabel,
  primaryButtonLink,
  primaryButtonColor,
  secondaryButtonLabel,
  secondaryButtonLink,
  colorMode,
  background,
  children,
}: LeftCarouselSectionProps) {
  const bg = background ?? (colorMode === "dark" ? "bg-[#01322d]" : "bg-background");
  return (
    <section className={`${bg} py-16 md:py-30 overflow-x-hidden`}>
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-10">

        {/* Left — text content, left edge aligned with max-w-5xl container */}
        <div className="px-5 min-[395px]:px-6 md:pl-[max(24px,calc((100vw-1024px)/2))] flex-1">
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
          />
        </div>

        {/* Right — carousel, right edge aligned with max-w-5xl container */}
        <div
          className="flex-1 min-w-0 lg:flex-none lg:w-123"
          style={{ marginRight: "max(0px, calc((100vw - 1024px) / 2))" }}
        >
          <Carousel variant="left-aligned">
            {children}
          </Carousel>
        </div>

      </div>
    </section>
  );
}
