import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import SectionTitle from '@/components/ui/SectionTitle';
import CategoryCard from '@/components/shared/CategoryCard';
import CTASection from '@/components/shared/CTASection';
import { demoCategories } from '@/lib/demo-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Categorías de Productos',
  description: 'Explora nuestras categorías de productos: domótica, audio, video, seguridad, cámaras, control de acceso, video wall y más.',
  path: '/categorias',
});

export default function CategoriasPage() {
  const activeCategories = demoCategories.filter((c) => c.active);

  return (
    <>
      <section className="pt-32 pb-12 bg-surface-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="accent-line mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Categorías de <span className="text-brand">Productos</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Encuentra la solución tecnológica perfecta navegando por nuestras categorías especializadas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {activeCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
