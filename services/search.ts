// Global search service
// Searches across products, categories, services, and blog posts

import { demoProducts, demoCategories, demoServices, demoBlogPosts } from '@/lib/demo-data';

export interface SearchResults {
  products: typeof demoProducts;
  categories: typeof demoCategories;
  services: typeof demoServices;
  blogPosts: typeof demoBlogPosts;
  total: number;
}

export async function globalSearch(query: string): Promise<SearchResults> {
  const q = query.toLowerCase().trim();

  if (!q) {
    return { products: [], categories: [], services: [], blogPosts: [], total: 0 };
  }

  const products = demoProducts.filter(
    (p) =>
      p.active &&
      (p.name.toLowerCase().includes(q) ||
        p.short_description?.toLowerCase().includes(q))
  );

  const categories = demoCategories.filter(
    (c) =>
      c.active &&
      (c.name.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q))
  );

  const services = demoServices.filter(
    (s) =>
      s.active &&
      (s.name.toLowerCase().includes(q) ||
        s.short_description?.toLowerCase().includes(q))
  );

  const blogPosts = demoBlogPosts.filter(
    (b) =>
      b.published &&
      (b.title.toLowerCase().includes(q) ||
        b.excerpt?.toLowerCase().includes(q))
  );

  return {
    products,
    categories,
    services,
    blogPosts,
    total: products.length + categories.length + services.length + blogPosts.length,
  };
}
