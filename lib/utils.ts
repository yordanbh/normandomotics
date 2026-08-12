import { COMPANY } from './constants';

/**
 * Merge class names, filtering out falsy values
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Generate a slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Generate WhatsApp URL with a contextual message
 */
export function generateWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message || COMPANY.whatsapp.defaultMessage);
  return `https://wa.me/${COMPANY.whatsapp.number}?text=${text}`;
}

/**
 * Generate WhatsApp URL for a specific product
 */
export function generateProductWhatsAppUrl(productName: string): string {
  const message = `Hola, estoy interesado en el producto: ${productName}. ¿Podrían brindarme más información y cotización?`;
  return generateWhatsAppUrl(message);
}

/**
 * Generate WhatsApp URL for a specific service
 */
export function generateServiceWhatsAppUrl(serviceName: string): string {
  const message = `Hola, me gustaría solicitar información sobre el servicio de ${serviceName}.`;
  return generateWhatsAppUrl(message);
}

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, '');
}

/**
 * Generate tel: link
 */
export function generateTelUrl(phone: string): string {
  return `tel:+51${formatPhone(phone)}`;
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Format date for display (Spanish locale)
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
