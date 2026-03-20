import { TestimonialsSection as TestimonialsSectionBase } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionBase
      testimonials={testimonials}
      title="Ce que nos clients disent de leur poêle"
      subtitle="Plus de 300 foyers nous ont fait confiance pour leur installation de chauffage au bois."
    />
  );
}
