import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/shared/ProductCard';
import CTASection from '@/components/shared/CTASection';
import { demoCategories, demoProducts } from '@/lib/demo-data';

export function generateStaticParams() {
  return demoCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = demoCategories.find((c) => c.slug === slug);
  if (!category) return { title: 'Categoría no encontrada' };

  return {
    title: category.seo_title || `${category.name} | Norman Technologies`,
    description: category.seo_description || category.description || '',
    alternates: { canonical: `/categorias/${slug}` },
  };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = demoCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const products = demoProducts
    .filter((p) => p.category_id === category.id)
    .map((p) => ({
      ...p,
      category,
    }));

  return (
    <>
      <div className="pt-24 md:pt-28 bg-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Categorías', href: '/categorias' },
              { label: category.name, href: `/categorias/${category.slug}` },
            ]}
          />
        </div>
      </div>

      <section className="py-8 md:py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="accent-line mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-lg text-text-secondary max-w-3xl leading-relaxed">
              {category.description}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="container mx-auto px-4">
          {products.length > 0 ? (
            <>
              <p className="text-text-secondary text-sm mb-8">
                {products.length} producto{products.length !== 1 ? 's' : ''} en esta categoría
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg mb-2">
                Próximamente agregaremos productos a esta categoría.
              </p>
              <p className="text-text-tertiary">
                Contáctanos si necesitas una solución específica.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
