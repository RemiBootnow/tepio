import { TestimonialsSection as TestimonialsSectionComponent } from "@/components/sections/testimonials-section";
import { testimonials } from "@/data/testimonials";
import { APP_NAME } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <TestimonialsSectionComponent
      testimonials={testimonials}
      title="Ils ont trouvé leur installateur RGE"
      subtitle={`Des centaines de propriétaires ont fait confiance à ${APP_NAME} pour être mis en relation avec un artisan certifié.`}
    />
  );
}
