import { TestimonialsSection as TestimonialsSectionBase } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";
import { APP_NAME } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionBase
      testimonials={testimonials}
      title={`Ce que nos clients disent de ${APP_NAME}`}
      subtitle="Des centaines de foyers ont deja fait confiance a notre reseau pour leur installation de chauffage au bois."
    />
  );
}
