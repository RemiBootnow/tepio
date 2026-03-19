import { TextContent } from "@/components/blocks/text-content";

interface HeroSectionProps {
  // Background media
  videoSrc?: string;
  videoMobileSrc?: string;
  posterSrc?: string;
  posterMobileSrc?: string;

  // Content
  /** Slot rendered above TextContent — e.g. <Eyebrow variant="rating" /> */
  eyebrow?: React.ReactNode;
  title: string;
  titleLevel?: 1 | 2;
  subtitle?: string;
  primaryButtonLabel?: string;
  primaryButtonLink?: string;
  primaryButtonColor?: "neutral" | "primary";
  secondaryButtonLabel?: string;
  secondaryButtonLink?: string;
  colorMode?: "light" | "dark";
  /** Slot rendered between subtitle and buttons — e.g. a checklist */
  children?: React.ReactNode;
}

export function HeroSection({
  videoSrc,
  videoMobileSrc,
  posterSrc,
  posterMobileSrc,
  eyebrow,
  title,
  titleLevel = 1,
  subtitle,
  primaryButtonLabel,
  primaryButtonLink,
  primaryButtonColor,
  secondaryButtonLabel,
  secondaryButtonLink,
  colorMode = "dark",
  children,
}: HeroSectionProps) {
  const hasMobileVideo = !!videoMobileSrc;

  return (
    <section className="relative w-full h-[120vh] md:h-screen -mt-17 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {videoSrc && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            className={`absolute inset-0 w-full h-full object-cover ${hasMobileVideo ? "hidden md:block" : ""}`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {hasMobileVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterMobileSrc ?? posterSrc}
            className="block md:hidden absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoMobileSrc} type="video/mp4" />
          </video>
        )}
        {/* Left-to-right gradient derived from bg-neutral (#01322d) */}
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background:
              "linear-gradient(89deg, rgba(1,50,45,0.85) 0%, rgba(1,50,45,0.7) 37%, rgba(1,50,45,0.1) 65%, rgba(1,50,45,0) 80%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-5xl px-4 min-[375px]:px-5 min-[395px]:px-6 h-full flex items-start md:items-center">
        <div className="flex flex-col gap-6 max-w-130 pt-22 md:py-24">
          {eyebrow}
          <TextContent
            title={title}
            titleLevel={titleLevel}
            subtitle={subtitle}
            primaryButtonLabel={primaryButtonLabel}
            primaryButtonLink={primaryButtonLink}
            primaryButtonColor={primaryButtonColor}
            secondaryButtonLabel={secondaryButtonLabel}
            secondaryButtonLink={secondaryButtonLink}
            colorMode={colorMode}
          >
            {children}
          </TextContent>
        </div>
      </div>
    </section>
  );
}
