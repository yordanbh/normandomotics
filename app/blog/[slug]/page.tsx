import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import BlogCard from '@/components/shared/BlogCard';
import JsonLd from '@/components/shared/JsonLd';
import CTASection from '@/components/shared/CTASection';
import { generateArticleJsonLd } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { demoBlogPosts } from '@/lib/demo-data';

export function generateStaticParams() {
  return demoBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = demoBlogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Artículo no encontrado' };

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt || '',
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt || '',
      type: 'article',
      ...(post.published_at && { publishedTime: post.published_at }),
      ...(post.image && { images: [{ url: post.image }] }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = demoBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = demoBlogPosts
    .filter((p) => p.id !== post.id && p.published)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={generateArticleJsonLd({
          title: post.title,
          description: post.excerpt || '',
          image: post.image || undefined,
          publishedAt: post.published_at || undefined,
          author: post.author || undefined,
          slug: post.slug,
        })}
      />

      <div className="pt-24 md:pt-28 bg-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />
        </div>
      </div>

      <article className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              {post.category && (
                <Badge variant="brand" size="md" className="mb-4">
                  {post.category}
                </Badge>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-text-tertiary">
                {post.author && (
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {post.author}
                  </span>
                )}
                {post.published_at && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {formatDate(post.published_at)}
                  </span>
                )}
              </div>
            </div>

            {/* Featured image */}
            {post.image && (
              <div className="aspect-video rounded-2xl bg-surface-alt overflow-hidden border border-border mb-10">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed">
              {post.content && <p>{post.content}</p>}
            </div>

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al blog
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-surface-alt">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
              Artículos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection variant="dark" />
    </>
  );
}
