import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/shared/ProductCard';
import SearchBar from '@/components/ui/SearchBar';
import CTASection from '@/components/shared/CTASection';
import { demoProducts, demoCategories } from '@/lib/demo-data';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Productos | Catálogo de Tecnología y Automatización',
  description: 'Explora nuestro catálogo de productos de domótica, seguridad, audio, video y automatización. Solicita cotización profesional en Lima.',
  path: '/productos',
});

// Enrich products with categories
const enrichedProducts = demoProducts.map((p) => ({
  ...p,
  category: demoCategories.find((c) => c.id === p.category_id),
}));

export default function ProductosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-surface-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="accent-line mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros <span className="text-brand">Productos</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Descubre nuestra selección de productos de tecnología de punta para domótica,
              seguridad, audio, video y automatización.
            </p>
            <SearchBar variant="hero" className="max-w-xl" />
          </div>
        </div>
      </section>

      {/* Categories bar */}
      <section className="py-6 bg-white border-b border-border sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Link
              href="/productos"
              className="px-4 py-2 rounded-full bg-brand text-white text-sm font-medium whitespace-nowrap shrink-0"
            >
              Todos
            </Link>
            {demoCategories.slice(0, 10).map((cat) => (
              <Link
                key={cat.slug}
                href={`/categorias/${cat.slug}`}
                className="px-4 py-2 rounded-full bg-surface-alt text-text-secondary text-sm font-medium hover:bg-brand/10 hover:text-brand transition-colors whitespace-nowrap shrink-0"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-text-secondary text-sm">
              {enrichedProducts.length} productos encontrados
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrichedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty state placeholder */}
          {enrichedProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg mb-4">No se encontraron productos.</p>
              <Link href="/contacto" className="text-brand font-medium hover:underline">
                Contáctanos para lo que necesites
              </Link>
            </div>
          )}
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
