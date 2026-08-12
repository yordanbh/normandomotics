import type { NavItem } from '@/types';

// Company Information — from official PDF
export const COMPANY = {
  name: 'Norman Technologies E.I.R.L.',
  shortName: 'Norman Technologies',
  tagline: 'Especialistas en Domótica',
  subtitle: 'Automatización de audio y video',
  description:
    'Somos una empresa especializada en soluciones tecnológicas; buscamos satisfacer las necesidades de confort, seguridad y bienestar de nuestros clientes, gracias a productos exclusivos de tecnología de punta.',
  website: 'https://normantechnologies.pe',
  address: {
    street: 'Calle 2 N°31 Urb. Palmeras de Villa',
    district: 'Chorrillos',
    city: 'Lima',
    country: 'Perú',
    full: 'Calle 2 N°31 Urb. Palmeras de Villa, Chorrillos – Lima',
  },
  phones: ['931 870 299', '995 238 682'],
  contact: {
    name: 'Sergio Cuadros',
    phone: '933 435 226',
  },
  emails: {
    sales: 'ventas@normantechnologi.com',
    projects: 'proyectos@normantechnologi.com',
  },
  whatsapp: {
    number: '51931870299',
    defaultMessage: 'Hola, me gustaría obtener más información sobre sus soluciones tecnológicas.',
  },
} as const;

// Brand values — from official PDF
export const BRAND_VALUES = [
  'Tecnología',
  'Ahorro',
  'Seguridad',
  'Confort',
  'Bienestar',
  'Innovación',
  'Automatización',
  'Profesionalismo',
] as const;

// Core services — from official PDF
export const CORE_SERVICES = [
  'Instalación',
  'Mantenimiento',
  'Diseño',
  'Automatización',
] as const;

// Color palette
export const COLORS = {
  primary: '#A80000',
  primaryDark: '#8B0000',
  primaryLight: '#D40000',
  black: '#0A0A0A',
  white: '#FFFFFF',
  grayLight: '#F5F5F5',
  grayMedium: '#E5E7EB',
  grayText: '#6B7280',
  textPrimary: '#111111',
} as const;

// Navigation
export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos' },
  { label: 'Soluciones', href: '/soluciones' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

// SEO defaults
export const SEO = {
  siteName: 'Norman Technologies',
  titleSuffix: ' | Norman Technologies',
  defaultTitle: 'Norman Technologies | Especialistas en Domótica, Automatización y Seguridad en Lima',
  defaultDescription:
    'Soluciones profesionales de domótica, automatización, seguridad, audio y video para hogares, empresas y espacios corporativos en Lima, Perú.',
  locale: 'es_PE',
  type: 'website',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://normantechnologies.pe',
} as const;

// Solution segments
export const SOLUTION_SEGMENTS = [
  {
    key: 'residencial',
    label: 'Residencial',
    description: 'Casas y Departamentos',
  },
  {
    key: 'comercial',
    label: 'Comercial / Profesional',
    description: 'Audio profesional, CCTV, Video Wall',
  },
  {
    key: 'corporativo',
    label: 'Corporativo',
    description: 'Oficinas inteligentes y salas de reuniones',
  },
  {
    key: 'oficinas',
    label: 'Oficinas',
    description: 'Automatización y colaboración',
  },
] as const;
