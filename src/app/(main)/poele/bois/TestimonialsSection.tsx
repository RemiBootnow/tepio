import { TestimonialsSection as TestimonialsSectionBase } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";
import { APP_NAME } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionBase
      testimonials={testimonials}
      title={`Ce que nos clients pensent de ${APP_NAME}`}
      subtitle="Des centaines de proprietaires nous ont fait confiance pour l'installation de leur poele."
    />
  );
}
