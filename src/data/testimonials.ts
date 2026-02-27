export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  product: string;
  /** Path relative to /public, e.g. "/testimonials/amelie-s.jpg" */
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Un réel plaisir d'être à la maison et d'avoir ENFIN chaud",
    author: "Amélie S.",
    product: "Poêle à granulés",
    image: "/testimonials/amelie-s.jpg",
  },
  {
    id: "2",
    quote: "Installation rapide, équipe au top et économies immédiates sur ma facture",
    author: "Thomas M.",
    product: "Pompe à chaleur",
    image: "/testimonials/thomas-m.jpg",
  },
  {
    id: "3",
    quote: "Parfaitement satisfait, je recommande à tous mes voisins",
    author: "Jean-Pierre L.",
    product: "Climatisation",
    image: "/testimonials/jean-pierre-l.jpg",
  },
  {
    id: "4",
    quote: "Le meilleur investissement que j'ai fait pour ma maison",
    author: "Sophie D.",
    product: "Pompe à chaleur",
    image: "/testimonials/sophie-d.jpg",
  },
  {
    id: "5",
    quote: "Dossier MaPrimeRénov géré entièrement par l'équipe, sans aucun stress",
    author: "Marc B.",
    product: "Poêle à bois",
    image: "/testimonials/marc-b.jpg",
  },
];
