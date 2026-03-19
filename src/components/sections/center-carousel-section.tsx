import { Carousel } from "@/components/ui/carousel";
import { TextContent } from "@/components/blocks/text-content";

interface CenterCarouselSectionProps {
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
  /** Optional desktop layout. When provided, the carousel is hidden on lg+ and this is rendered instead. */
  desktopLayout?: React.ReactNode;
}

export function CenterCarouselSection({
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
  desktopLayout,
}: CenterCarouselSectionProps) {
  const bg = background ?? (colorMode === "dark" ? "bg-[#01322d]" : "bg-background");
  return (
    <section className={`${bg} pt-16 pb-16 md:pt-20 md:pb-30`}>

      {/* Header — left on mobile, centered on desktop */}
      <div className="px-5 min-[395px]:px-6 md:flex md:justify-center">
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
          align="left"
          className="md:items-center md:text-center md:max-w-2xl"
        />
      </div>

      {/* Carousel — hidden on lg+ if a desktop layout is provided */}
      <div className={`mt-10 ${desktopLayout ? "lg:hidden" : ""}`}>
        <Carousel variant="center">
          {children}
        </Carousel>
      </div>

      {/* Desktop layout — optional override shown on lg+ */}
      {desktopLayout && (
        <div className="hidden lg:block mt-10">
          {desktopLayout}
        </div>
      )}

    </section>
  );
}
