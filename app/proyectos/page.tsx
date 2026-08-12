import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCard from '@/components/shared/ProjectCard';
import CTASection from '@/components/shared/CTASection';
import { demoProjects } from '@/lib/demo-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Proyectos | Portfolio de Soluciones Tecnológicas',
  description: 'Conoce nuestros proyectos de domótica, automatización, seguridad, audio y video realizados en Lima y Perú.',
  path: '/proyectos',
});

export default function ProyectosPage() {
  const projects = demoProjects.filter((p) => p.active);

  return (
    <>
      <section className="pt-32 pb-12 bg-surface-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="accent-line mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros <span className="text-brand">Proyectos</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Descubre nuestro portafolio de proyectos realizados en domótica,
              automatización, seguridad y audio/video.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="container mx-auto px-4">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg mb-2">
                Próximamente publicaremos nuestro portafolio de proyectos.
              </p>
              <p className="text-text-tertiary">
                Contáctanos para conocer más sobre nuestro trabajo.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="¿Tienes un proyecto en mente?"
        subtitle="Cuéntanos sobre tu proyecto y te presentamos una propuesta personalizada."
        variant="dark"
      />
    </>
  );
}
