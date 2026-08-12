import type { MetadataRoute } from 'next';
import { SEO } from '@/lib/constants';
import { demoProducts, demoCategories, demoServices, demoBlogPosts } from '@/lib/demo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO.baseUrl;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/productos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/categorias`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/servicios`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/soluciones`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/proyectos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/nosotros`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ];

  // Dynamic product pages
  const productPages: MetadataRoute.Sitemap = demoProducts
    .filter((p) => p.active)
    .map((product) => ({
      url: `${baseUrl}/productos/${product.slug}`,
      lastModified: new Date(product.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  // Dynamic category pages
  const categoryPages: MetadataRoute.Sitemap = demoCategories
    .filter((c) => c.active)
    .map((category) => ({
      url: `${baseUrl}/categorias/${category.slug}`,
      lastModified: new Date(category.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  // Dynamic service pages
  const servicePages: MetadataRoute.Sitemap = demoServices
    .filter((s) => s.active)
    .map((service) => ({
      url: `${baseUrl}/servicios/${service.slug}`,
      lastModified: new Date(service.updated_at),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  // Dynamic blog pages
  const blogPages: MetadataRoute.Sitemap = demoBlogPosts
    .filter((p) => p.published)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  return [...staticPages, ...productPages, ...categoryPages, ...servicePages, ...blogPages];
}
