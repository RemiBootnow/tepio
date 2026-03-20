import { TestimonialsSection as TestimonialsSectionBase } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";
import { APP_NAME } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionBase
      testimonials={testimonials}
      title={`Ils ont bénéficié de la prime énergie avec ${APP_NAME}`}
      subtitle="Découvrez les retours de nos clients ayant réduit le coût de leur poêle grâce à la prime CEE."
    />
  );
}
