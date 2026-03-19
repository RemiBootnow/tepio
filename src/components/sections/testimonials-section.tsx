import { LeftCarouselSection } from "@/components/sections/left-carousel-section";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryButtonLabel?: string;
  primaryButtonLink?: string;
  primaryButtonColor?: "neutral" | "primary";
  secondaryButtonLabel?: string;
  secondaryButtonLink?: string;
  colorMode?: "light" | "dark";
}

export function TestimonialsSection({
  testimonials,
  eyebrow,
  title,
  subtitle,
  primaryButtonLabel,
  primaryButtonLink,
  primaryButtonColor,
  secondaryButtonLabel,
  secondaryButtonLink,
  colorMode,
}: TestimonialsSectionProps) {
  return (
    <LeftCarouselSection
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      primaryButtonLabel={primaryButtonLabel}
      primaryButtonLink={primaryButtonLink}
      primaryButtonColor={primaryButtonColor}
      secondaryButtonLabel={secondaryButtonLabel}
      secondaryButtonLink={secondaryButtonLink}
      colorMode={colorMode}
    >
      {testimonials.map((t) => (
        <TestimonialCard
          key={t.id}
          quote={t.quote}
          author={t.author}
          product={t.product}
          image={t.image}
        />
      ))}
    </LeftCarouselSection>
  );
}
