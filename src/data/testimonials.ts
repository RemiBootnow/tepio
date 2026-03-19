export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  product: string;
  /** Path relative to /public, e.g. "/testimonials/testimonial%201.jpg" */
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Un réel plaisir d'être à la maison et d'avoir ENFIN chaud",
    author: "Amélie S.",
    product: "Poêle à granulé",
    image: "/testimonials/testimonial%20%201.jpg",
  },
  {
    id: "2",
    quote: "Personnel agréable, à l'écoute, de bon conseil, réponds à toutes vos questions.",
    author: "Ludivine M.",
    product: "Poêle à granulé",
    image: "/testimonials/testimonial%202.jpg",
  },
  {
    id: "3",
    quote: "Travail sérieux. Je vous recommande fortement. Excellente entreprise.",
    author: "Noa P.",
    product: "Poêle à granulé",
    image: "/testimonials/testimonial%203.jpg",
  },
  {
    id: "4",
    quote: "Installation de notre poêle a pelée très soigné, très beau rendu.",
    author: "Matthias L.",
    product: "Poêle à granulé",
    image: "/testimonials/testimonial%204.jpg",
  },
  {
    id: "5",
    quote: "Installation de notre poêle a pelée très soigné, très beau rendu.",
    author: "Vincent F.",
    product: "Poêle à granulé",
    image: "/testimonials/testimonial%205.jpg",
  },
  {
    id: "6",
    quote: "Très bon contact, tant commercial que professionnel, avec un bon accompagnement.",
    author: "Romuald F.",
    product: "Poêle à granulé",
    image: "/testimonials/testimonial%206.jpg",
  },
];
