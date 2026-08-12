// Norman Technologies — Type Definitions
// All interfaces align with Supabase schema for seamless integration

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  icon: string | null;
  seo_title: string | null;
  seo_description: string | null;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string | null;
  description: string | null;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  category_id: string;
  brand_id: string | null;
  name: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  features: string[] | null;
  specifications: Record<string, string> | null;
  sku: string | null;
  featured: boolean;
  active: boolean;
  image: string | null;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
  // Relations
  category?: Category;
  brand?: Brand;
  images?: ProductImage[];
}

export interface ProductImage {
  id: string;
  product_id: string;
  url: string;
  alt: string | null;
  order: number;
  created_at: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  icon: string | null;
  image: string | null;
  features: string[] | null;
  active: boolean;
  order: number;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Solution {
  id: string;
  name: string;
  slug: string;
  segment: 'residencial' | 'comercial' | 'corporativo' | 'oficinas';
  short_description: string | null;
  description: string | null;
  icon: string | null;
  image: string | null;
  features: string[] | null;
  active: boolean;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  category: string | null;
  description: string | null;
  solution: string | null;
  location: string | null;
  date: string | null;
  image: string | null;
  featured: boolean;
  active: boolean;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
  images?: ProjectImage[];
}

export interface ProjectImage {
  id: string;
  project_id: string;
  url: string;
  alt: string | null;
  order: number;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  image: string | null;
  category: string | null;
  author: string | null;
  published: boolean;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service_interest: string | null;
  message: string;
  read: boolean;
  created_at: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  product_id: string | null;
  service_id: string | null;
  message: string | null;
  status: 'pending' | 'contacted' | 'quoted' | 'closed';
  created_at: string;
  updated_at: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}
