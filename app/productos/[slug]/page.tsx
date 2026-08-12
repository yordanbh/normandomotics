import ImageGallery from '@/components/ui/ImageGallery';
import ScrollReveal from '@/components/ui/ScrollReveal';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MessageCircle, Phone, ArrowRight, ChevronRight, Package } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/shared/ProductCard';
import JsonLd from '@/components/shared/JsonLd';
import { generateProductJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import { COMPANY } from '@/lib/constants';
import { generateProductWhatsAppUrl, generateTelUrl } from '@/lib/utils';
import { demoProducts, demoCategories, demoBrands } from '@/lib/demo-data';

// Generate static params for demo data
export function generateStaticParams() {
  return demoProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = demoProducts.find((p) => p.slug === slug);
  if (!product) return { title: 'Producto no encontrado' };

  return {
    title: product.seo_title || `${product.name} | Norman Technologies`,
    description: product.seo_description || product.short_description || '',
    alternates: { canonical: `/productos/${slug}` },
    openGraph: {
      title: product.seo_title || product.name,
      description: product.seo_description || product.short_description || '',
      url: `/productos/${slug}`,
      ...(product.image && { images: [{ url: product.image }] }),
    },
  };
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = demoProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = demoCategories.find((c) => c.id === product.category_id);
  const brand = demoBrands.find((b) => b.id === product.brand_id);
  const relatedProducts = demoProducts
    .filter((p) => p.category_id === product.category_id && p.id !== product.id)
    .slice(0, 3)
    .map((p) => ({ ...p, category: demoCategories.find((c) => c.id === p.category_id) }));

  const breadcrumbItems = [
    { name: 'Productos', href: '/productos' },
    ...(category ? [{ name: category.name, href: `/categorias/${category.slug}` }] : []),
    { name: product.name, href: `/productos/${product.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={generateProductJsonLd({
          name: product.name,
          description: product.description || product.short_description || '',
          image: product.image || undefined,
          sku: product.sku || undefined,
          brand: brand?.name,
          slug: product.slug,
        })}
      />
      <JsonLd data={generateBreadcrumbJsonLd(breadcrumbItems)} />

      <div className="pt-24 md:pt-28 bg-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Productos', href: '/productos' },
              ...(category ? [{ label: category.name, href: `/categorias/${category.slug}` }] : []),
              { label: product.name, href: `/productos/${product.slug}` },
            ]}
          />
        </div>
      </div>

      {/* Product detail */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Gallery */}
            <ScrollReveal animation="fade-right">
              <ImageGallery
                images={
                  product.image
                    ? [
                      { src: product.image, alt: product.name },
                      { src: product.image, alt: `${product.name} - Vista 2` },
                      { src: product.image, alt: `${product.name} - Vista 3` },
                    ]
                    : []
                }
              />
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {category && <Badge variant="brand">{category.name}</Badge>}
                {brand && <Badge variant="outline">{brand.name}</Badge>}
                {product.featured && <Badge variant="success">Destacado</Badge>}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
                {product.name}
              </h1>

              {product.sku && (
                <p className="text-sm text-text-tertiary mb-4">SKU: {product.sku}</p>
              )}

              {product.short_description && (
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  {product.short_description}
                </p>
              )}

              {product.description && (
                <div className="text-text-secondary leading-relaxed mb-8 border-t border-border pt-6">
                  <p>{product.description}</p>
                </div>
              )}

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-text-primary mb-3">Características</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <ChevronRight className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-text-primary mb-3">Especificaciones</h3>
                  <div className="border border-border rounded-xl overflow-hidden">
                    {Object.entries(product.specifications).map(([key, value], i) => (
                      <div
                        key={key}
                        className={`flex justify-between px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-surface-alt' : 'bg-white'}`}
                      >
                        <span className="font-medium text-text-primary">{key}</span>
                        <span className="text-text-secondary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="space-y-3 mb-8">
                <Button href="/contacto" variant="primary" size="lg" className="w-full" id="product-quote-cta">
                  <ArrowRight className="w-5 h-5" />
                  Solicitar cotización
                </Button>
                <a
                  href={generateProductWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BD5A] transition-colors"
                  id="product-whatsapp-cta"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar por WhatsApp
                </a>
              </div>

              {/* Advisor */}
              <div className="bg-surface-alt rounded-xl p-5 border border-border">
                <p className="text-sm font-medium text-text-primary mb-2">
                  ¿Necesitas asesoría para elegir este producto?
                </p>
                <p className="text-sm text-text-secondary mb-3">
                  Nuestro equipo de especialistas te ayudará a encontrar la mejor solución.
                </p>
                <a
                  href={generateTelUrl(COMPANY.phones[0])}
                  className="inline-flex items-center gap-2 text-brand text-sm font-semibold hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  Hablar con un especialista: {COMPANY.phones[0]}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20 bg-surface-alt">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
              Productos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
