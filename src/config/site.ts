import { APP_NAME } from "@/lib/constants";

export const siteConfig = {
  name: APP_NAME,
  description:
    "Experts en rénovation énergétique : pompes à chaleur, poêles à bois et granulés, climatisation. Devis gratuit et accompagnement personnalisé pour vos aides financières.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tepio.fr",
  ogImage: "/images/og-default.jpg",
  locale: "fr_FR",
  language: "fr",

  // Business information for structured data
  business: {
    name: APP_NAME,
    legalName: `${APP_NAME} SAS`,
    foundingDate: "2024",
    email: "contact@tepio.fr",
    phone: "+33 1 23 45 67 89",
    address: {
      streetAddress: "123 Rue de la Rénovation",
      addressLocality: "Paris",
      postalCode: "75001",
      addressCountry: "FR",
    },
    geo: {
      latitude: 48.8566,
      longitude: 2.3522,
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-12:00"],
    priceRange: "€€",
    areaServed: "France",
  },

  // Social links
  links: {
    facebook: "https://facebook.com/tepio",
    linkedin: "https://linkedin.com/company/tepio",
    twitter: "https://twitter.com/tepio",
  },

  // Services for structured data
  services: [
    {
      id: "pompe-a-chaleur",
      name: "Installation Pompe à Chaleur",
      description:
        "Installation de pompes à chaleur air-air et air-eau par des artisans RGE certifiés.",
    },
    {
      id: "poele-a-bois",
      name: "Installation Poêle à Bois",
      description: "Pose de poêles à bois performants et économiques.",
    },
    {
      id: "poele-a-granules",
      name: "Installation Poêle à Granulés",
      description:
        "Installation de poêles à pellets automatiques et écologiques.",
    },
    {
      id: "climatisation",
      name: "Installation Climatisation",
      description:
        "Systèmes de climatisation réversibles pour votre confort toute l'année.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
