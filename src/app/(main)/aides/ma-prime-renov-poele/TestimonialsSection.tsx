import { TestimonialsSection as TestimonialsSectionBase } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";
import { APP_NAME } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionBase
      testimonials={testimonials}
      title={`Ils ont bénéficié de MaPrimeRénov' avec ${APP_NAME}`}
      subtitle="Découvrez les retours de nos clients ayant financé leur poêle grâce à MaPrimeRénov'."
    />
  );
}
