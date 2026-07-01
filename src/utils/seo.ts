import { siteConfig } from '../config/site';
import type { Service, ServiceFaq } from '../content/services';

const businessId = '#business';

export function getLocalBusinessSchema() {
  const sameAs = [siteConfig.instagram, siteConfig.facebook].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'HousekeepingService',
    '@id': businessId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: import.meta.env.SITE,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    areaServed: siteConfig.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function getServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.desc,
    provider: { '@id': businessId },
    areaServed: siteConfig.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    url: new URL(service.path, import.meta.env.SITE).href,
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, import.meta.env.SITE).href,
    })),
  };
}

export function getFaqSchema(faqs: ServiceFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function jsonLd(data: object) {
  return JSON.stringify(data);
}
