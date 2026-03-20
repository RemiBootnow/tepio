import { TestimonialsSection as TestimonialsSectionComponent } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionComponent
      title="Ils ont installé un poêle à granulés"
      subtitle="Découvrez les retours de nos clients après leur installation."
      testimonials={testimonials}
    />
  );
}
