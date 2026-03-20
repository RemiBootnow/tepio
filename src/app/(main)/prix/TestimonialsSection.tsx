import { TestimonialsSection as TestimonialsSectionBase } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionBase
      title="Ils ont installé leur poêle avec nous"
      subtitle="Découvrez les retours de nos clients sur leur projet d'installation."
      testimonials={testimonials}
    />
  );
}
