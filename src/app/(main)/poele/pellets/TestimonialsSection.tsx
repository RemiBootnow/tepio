import { TestimonialsSection as TestimonialsSectionComponent } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionComponent
      title="Ils ont fait installer leur poêle"
      subtitle="Découvrez les retours de nos clients."
      testimonials={testimonials}
    />
  );
}
