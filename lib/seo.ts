import type { Metadata } from 'next';
import { SEO, COMPANY } from './constants';

/**
 * Generate page metadata with defaults
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  ogImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title.includes('Norman Technologies')
    ? title
    : `${title}${SEO.titleSuffix}`;
  const canonical = `${SEO.baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SEO.siteName,
      locale: SEO.locale,
      type: 'website',
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

/**
 * JSON-LD: Organization schema
 */
export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: COMPANY.website,
    logo: `${SEO.baseUrl}/images/logo.svg`,
    description: COMPANY.description,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+51${COMPANY.phones[0].replace(/\s/g, '')}`,
        contactType: 'sales',
        areaServed: 'PE',
        availableLanguage: 'Spanish',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.district,
      addressRegion: COMPANY.address.city,
      addressCountry: 'PE',
    },
    email: COMPANY.emails.sales,
  };
}

/**
 * JSON-LD: LocalBusiness schema
 */
export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    url: COMPANY.website,
    logo: `${SEO.baseUrl}/images/logo.svg`,
    description: COMPANY.description,
    telephone: `+51${COMPANY.phones[0].replace(/\s/g, '')}`,
    email: COMPANY.emails.sales,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.district,
      addressRegion: COMPANY.address.city,
      addressCountry: 'PE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -12.1706,
      longitude: -76.9900,
    },
    areaServed: {
      '@type': 'City',
      name: 'Lima',
    },
    priceRange: '$$$',
  };
}

/**
 * JSON-LD: BreadcrumbList schema
 */
export function generateBreadcrumbJsonLd(
  items: { name: string; href: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SEO.baseUrl}${item.href}`,
    })),
  };
}

/**
 * JSON-LD: Product schema
 */
export function generateProductJsonLd(product: {
  name: string;
  description: string;
  image?: string;
  sku?: string;
  brand?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    ...(product.image && { image: product.image }),
    ...(product.sku && { sku: product.sku }),
    ...(product.brand && {
      brand: {
        '@type': 'Brand',
        name: product.brand,
      },
    }),
    url: `${SEO.baseUrl}/productos/${product.slug}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'PEN',
      seller: {
        '@type': 'Organization',
        name: COMPANY.name,
      },
    },
  };
}

/**
 * JSON-LD: Service schema
 */
export function generateServiceJsonLd(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: COMPANY.website,
    },
    areaServed: {
      '@type': 'City',
      name: 'Lima',
    },
    url: `${SEO.baseUrl}/servicios/${service.slug}`,
  };
}

/**
 * JSON-LD: Article schema
 */
export function generateArticleJsonLd(article: {
  title: string;
  description: string;
  image?: string;
  publishedAt?: string;
  author?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    ...(article.image && { image: article.image }),
    ...(article.publishedAt && { datePublished: article.publishedAt }),
    author: {
      '@type': 'Organization',
      name: article.author || COMPANY.name,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SEO.baseUrl}/images/logo.svg`,
      },
    },
    url: `${SEO.baseUrl}/blog/${article.slug}`,
  };
}
