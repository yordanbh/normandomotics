// Products data access layer
// Currently uses demo data — swap to Supabase when credentials are configured

import type { Product } from '@/types';
import { demoProducts, demoCategories, demoBrands } from '@/lib/demo-data';

function enrichProduct(product: Product): Product {
  return {
    ...product,
    category: demoCategories.find((c) => c.id === product.category_id),
    brand: demoBrands.find((b) => b.id === product.brand_id),
  };
}

export async function getProducts(): Promise<Product[]> {
  // TODO: Replace with Supabase query
  // const supabase = await createClient();
  // const { data } = await supabase.from('products').select('*, category:categories(*), brand:brands(*)').eq('active', true);
  return demoProducts.filter((p) => p.active).map(enrichProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = demoProducts.find((p) => p.slug === slug && p.active);
  return product ? enrichProduct(product) : null;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return demoProducts.filter((p) => p.featured && p.active).map(enrichProduct);
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  return demoProducts
    .filter((p) => p.category_id === categoryId && p.active)
    .map(enrichProduct);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const q = query.toLowerCase();
  return demoProducts
    .filter(
      (p) =>
        p.active &&
        (p.name.toLowerCase().includes(q) ||
          p.short_description?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q))
    )
    .map(enrichProduct);
}
