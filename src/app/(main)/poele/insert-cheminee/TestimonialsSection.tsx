import { TestimonialsSection as TestimonialsSectionComponent } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";
import { APP_NAME } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionComponent
      testimonials={testimonials}
      title={`Ce que nos clients disent de ${APP_NAME}`}
      subtitle="Des centaines de foyers nous ont déjà fait confiance pour leur projet de chauffage."
    />
  );
}
