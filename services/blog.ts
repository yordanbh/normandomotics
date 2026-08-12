import type { BlogPost } from '@/types';
import { demoBlogPosts } from '@/lib/demo-data';

export async function getBlogPosts(): Promise<BlogPost[]> {
  return demoBlogPosts.filter((p) => p.published);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return demoBlogPosts.find((p) => p.slug === slug && p.published) || null;
}
