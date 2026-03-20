import { TestimonialsSection as TestimonialsSectionBase } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionBase
      testimonials={testimonials}
      eyebrow="Témoignages"
      title="Nos clients parlent de leur expérience"
      subtitle="Des centaines de foyers nous ont fait confiance pour leur projet de chauffage."
    />
  );
}
