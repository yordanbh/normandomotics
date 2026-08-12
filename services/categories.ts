import type { Category } from '@/types';
import { demoCategories } from '@/lib/demo-data';

export async function getCategories(): Promise<Category[]> {
  return demoCategories.filter((c) => c.active);
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return demoCategories.find((c) => c.slug === slug && c.active) || null;
}
