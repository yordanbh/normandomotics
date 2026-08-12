import type { Brand } from '@/types';
import { demoBrands } from '@/lib/demo-data';

export async function getBrands(): Promise<Brand[]> {
  return demoBrands.filter((b) => b.active);
}

export async function getBrandBySlug(slug: string): Promise<Brand | null> {
  return demoBrands.find((b) => b.slug === slug && b.active) || null;
}
