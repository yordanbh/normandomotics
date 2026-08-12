import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import SectionTitle from '@/components/ui/SectionTitle';
import BlogCard from '@/components/shared/BlogCard';
import CTASection from '@/components/shared/CTASection';
import { demoBlogPosts } from '@/lib/demo-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog | Artículos sobre Domótica, Seguridad y Tecnología',
  description: 'Artículos, guías y noticias sobre domótica, seguridad, automatización, audio y video. Mantente informado con Norman Technologies.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = demoBlogPosts.filter((p) => p.published);

  return (
    <>
      <section className="pt-32 pb-12 bg-surface-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="accent-line mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-brand">Blog</span> de Tecnología
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Artículos, guías y noticias sobre domótica, seguridad, automatización,
              audio y video para mantenerte informado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg mb-2">
                Próximamente publicaremos artículos.
              </p>
              <p className="text-text-tertiary">
                Suscríbete para ser el primero en conocer nuestras novedades.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
