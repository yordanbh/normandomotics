import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, Package, Layers, Wrench, FolderOpen, FileText } from 'lucide-react';
import { generatePageMetadata } from '@/lib/seo';
import Badge from '@/components/ui/Badge';
import { demoProducts, demoCategories, demoServices, demoBlogPosts } from '@/lib/demo-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Búsqueda',
  description: 'Busca productos, servicios, categorías y artículos en Norman Technologies.',
  path: '/buscar',
  noIndex: true,
});

export default async function BuscarPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim().toLowerCase() || '';

  if (!query) {
    return (
      <>
        <section className="pt-32 pb-12 bg-surface-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="accent-line mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Buscar</h1>
              <p className="text-gray-300 text-lg">
                Ingresa un término para buscar productos, servicios y más.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface-alt">
          <div className="container mx-auto px-4 text-center">
            <Search className="w-16 h-16 text-text-tertiary/30 mx-auto mb-4" />
            <p className="text-text-secondary text-lg">
              Escribe en la barra de búsqueda para encontrar lo que necesitas.
            </p>
          </div>
        </section>
      </>
    );
  }

  // Search across demo data
  const matchedProducts = demoProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.short_description?.toLowerCase().includes(query) ||
      p.description?.toLowerCase().includes(query)
  );

  const matchedCategories = demoCategories.filter(
    (c) =>
      c.name.toLowerCase().includes(query) ||
      c.description?.toLowerCase().includes(query)
  );

  const matchedServices = demoServices.filter(
    (s) =>
      s.name.toLowerCase().includes(query) ||
      s.short_description?.toLowerCase().includes(query)
  );

  const matchedBlog = demoBlogPosts.filter(
    (b) =>
      b.title.toLowerCase().includes(query) ||
      b.excerpt?.toLowerCase().includes(query)
  );

  const totalResults =
    matchedProducts.length + matchedCategories.length + matchedServices.length + matchedBlog.length;

  return (
    <>
      <section className="pt-32 pb-12 bg-surface-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="accent-line mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Resultados de búsqueda
            </h1>
            <p className="text-gray-300 text-lg">
              {totalResults} resultado{totalResults !== 1 ? 's' : ''} para{' '}
              <span className="text-white font-semibold">&quot;{q}&quot;</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="container mx-auto px-4 max-w-4xl">
          {totalResults === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-text-tertiary/30 mx-auto mb-4" />
              <p className="text-text-secondary text-lg mb-2">
                No se encontraron resultados para &quot;{q}&quot;
              </p>
              <p className="text-text-tertiary">
                Intenta con otros términos o{' '}
                <Link href="/contacto" className="text-brand hover:underline">
                  contáctanos directamente
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {/* Products */}
              {matchedProducts.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="w-5 h-5 text-brand" />
                    <h2 className="font-bold text-text-primary text-lg">
                      Productos ({matchedProducts.length})
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {matchedProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/productos/${product.slug}`}
                        className="block bg-white rounded-xl border border-border p-5 hover:border-brand/30 hover:shadow-sm transition-all"
                      >
                        <h3 className="font-semibold text-text-primary mb-1 hover:text-brand transition-colors">
                          {product.name}
                        </h3>
                        {product.short_description && (
                          <p className="text-sm text-text-secondary line-clamp-2">
                            {product.short_description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              {matchedCategories.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FolderOpen className="w-5 h-5 text-brand" />
                    <h2 className="font-bold text-text-primary text-lg">
                      Categorías ({matchedCategories.length})
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {matchedCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/categorias/${cat.slug}`}
                        className="block bg-white rounded-xl border border-border p-5 hover:border-brand/30 hover:shadow-sm transition-all"
                      >
                        <h3 className="font-semibold text-text-primary mb-1">{cat.name}</h3>
                        {cat.description && (
                          <p className="text-sm text-text-secondary line-clamp-2">{cat.description}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              {matchedServices.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-brand" />
                    <h2 className="font-bold text-text-primary text-lg">
                      Servicios ({matchedServices.length})
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {matchedServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/servicios/${service.slug}`}
                        className="block bg-white rounded-xl border border-border p-5 hover:border-brand/30 hover:shadow-sm transition-all"
                      >
                        <h3 className="font-semibold text-text-primary mb-1">{service.name}</h3>
                        {service.short_description && (
                          <p className="text-sm text-text-secondary line-clamp-2">{service.short_description}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog */}
              {matchedBlog.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-brand" />
                    <h2 className="font-bold text-text-primary text-lg">
                      Artículos ({matchedBlog.length})
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {matchedBlog.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="block bg-white rounded-xl border border-border p-5 hover:border-brand/30 hover:shadow-sm transition-all"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-text-primary">{post.title}</h3>
                          {post.category && <Badge variant="brand" size="sm">{post.category}</Badge>}
                        </div>
                        {post.excerpt && (
                          <p className="text-sm text-text-secondary line-clamp-2">{post.excerpt}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
