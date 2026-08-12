import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import SectionTitle from '@/components/ui/SectionTitle';
import SolutionCard from '@/components/shared/SolutionCard';
import CTASection from '@/components/shared/CTASection';
import { demoSolutions } from '@/lib/demo-data';
import { SOLUTION_SEGMENTS } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Soluciones Tecnológicas | Residencial, Comercial, Corporativo',
  description: 'Soluciones tecnológicas profesionales para hogares, comercios, oficinas y corporaciones. Domótica, seguridad, audio y video en Lima.',
  path: '/soluciones',
});

export default function SolucionesPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-surface-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="accent-line mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Soluciones para{' '}
              <span className="text-brand">cada espacio</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Nuestra tecnología puede ser integrada en distintas áreas: residencial,
              comercial, corporativo y oficinas.
            </p>
          </div>
        </div>
      </section>

      {SOLUTION_SEGMENTS.map((segment) => {
        const solutions = demoSolutions.filter(
          (s) => s.segment === segment.key && s.active
        );

        return (
          <section
            key={segment.key}
            id={segment.key}
            className="py-16 md:py-20 odd:bg-white even:bg-surface-alt"
          >
            <div className="container mx-auto px-4">
              <SectionTitle
                title={segment.label}
                subtitle={segment.description}
                align="left"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {solutions.map((solution) => (
                  <SolutionCard key={solution.id} solution={solution} variant="compact" />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title="¿Qué solución necesitas?"
        subtitle="Cuéntanos sobre tu proyecto y diseñamos la solución tecnológica ideal para tu espacio."
        variant="brand"
      />
    </>
  );
}
