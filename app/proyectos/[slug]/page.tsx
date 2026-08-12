import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import CTASection from '@/components/shared/CTASection';
import { formatDate } from '@/lib/utils';
import { demoProjects } from '@/lib/demo-data';

export function generateStaticParams() {
  return demoProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = demoProjects.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyecto no encontrado' };

  return {
    title: project.seo_title || `${project.name} | Proyectos | Norman Technologies`,
    description: project.seo_description || project.description || '',
    alternates: { canonical: `/proyectos/${slug}` },
  };
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = demoProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <div className="pt-24 md:pt-28 bg-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Proyectos', href: '/proyectos' },
              { label: project.name, href: `/proyectos/${project.slug}` },
            ]}
          />
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.category && <Badge variant="brand">{project.category}</Badge>}
              {project.solution && <Badge variant="outline">{project.solution}</Badge>}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {project.name}
            </h1>

            <div className="flex items-center gap-4 text-sm text-text-tertiary mb-8">
              {project.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {project.location}
                </span>
              )}
              {project.date && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {formatDate(project.date)}
                </span>
              )}
            </div>

            {/* Project image */}
            <div className="aspect-video rounded-2xl bg-surface-alt overflow-hidden border border-border mb-8">
              {project.image ? (
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-dark to-gray-800">
                  <span className="text-white/20 text-4xl font-bold">NT</span>
                </div>
              )}
            </div>

            {project.description && (
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {project.description}
              </p>
            )}

            <Button href="/contacto" variant="primary" size="lg" id="project-cta">
              <ArrowRight className="w-5 h-5" />
              ¿Quieres un proyecto similar? Contáctanos
            </Button>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
