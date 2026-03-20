import { TestimonialsSection as TestimonialsSectionBase } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";
import { APP_NAME } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionBase
      title={`Ils ont rénové avec ${APP_NAME}`}
      subtitle="Nos clients témoignent de leur expérience de rénovation énergétique, de l'accompagnement aux aides financières."
      testimonials={testimonials}
    />
  );
}
