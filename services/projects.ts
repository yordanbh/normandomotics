import type { Project } from '@/types';
import { demoProjects } from '@/lib/demo-data';

export async function getProjects(): Promise<Project[]> {
  return demoProjects.filter((p) => p.active);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return demoProjects.find((p) => p.slug === slug && p.active) || null;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return demoProjects.filter((p) => p.featured && p.active);
}
