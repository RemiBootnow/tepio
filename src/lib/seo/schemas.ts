import { siteConfig } from "@/config/site";
import type {
  Organization,
  LocalBusiness,
  Service,
  FAQPage,
  BreadcrumbList,
  WebSite,
  WithContext,
} from "schema-dts";

/**
 * Organization schema for the company
 */
export function getOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.business.name,
    legalName: siteConfig.business.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/logo.svg`,
      width: "200",
      height: "60",
    },
    foundingDate: siteConfig.business.foundingDate,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.business.phone,
      contactType: "customer service",
      availableLanguage: ["French"],
      areaServed: "FR",
    },
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.streetAddress,
      addressLocality: siteConfig.business.address.addressLocality,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.addressCountry,
    },
  };
}

/**
 * LocalBusiness schema for local SEO
 */
export function getLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.business.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    priceRange: siteConfig.business.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.streetAddress,
      addressLocality: siteConfig.business.address.addressLocality,
      postalCode: siteConfig.business.address.postalCode,
      addressCountry: siteConfig.business.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.business.geo.latitude,
      longitude: siteConfig.business.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "12:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "France",
    },
  };
}

/**
 * Service schema for service pages
 */
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${service.url}/#service`,
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    ...(service.image && { image: service.image }),
  };
}

/**
 * FAQ schema for FAQ sections
 */
export function getFAQSchema(
  faqs: { question: string; answer: string }[]
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Breadcrumb schema
 */
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * WebSite schema for sitelinks search box
 */
export function getWebSiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "fr-FR",
  };
}
