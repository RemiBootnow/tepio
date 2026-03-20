import { TestimonialsSection as TestimonialsSectionBase } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";
import { APP_NAME } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionBase
      testimonials={testimonials}
      title={`Ils ont installé leur poêle avec ${APP_NAME}`}
      subtitle="Des centaines de foyers ont déjà bénéficié de la prime CEE pour financer leur poêle."
    />
  );
}
