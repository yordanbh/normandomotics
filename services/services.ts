import type { Service } from '@/types';
import { demoServices } from '@/lib/demo-data';

export async function getServices(): Promise<Service[]> {
  return demoServices.filter((s) => s.active).sort((a, b) => a.order - b.order);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return demoServices.find((s) => s.slug === slug && s.active) || null;
}
