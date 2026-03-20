import { TestimonialsSection as TestimonialsSectionBase } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";
import { APP_NAME } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionBase
      testimonials={testimonials}
      title={`Ils ont installé un poêle avec ${APP_NAME}`}
      subtitle="Découvrez les retours de nos clients sur le coût et le financement de leur poêle à bois."
    />
  );
}
