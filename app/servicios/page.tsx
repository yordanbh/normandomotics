import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/shared/ServiceCard';
import CTASection from '@/components/shared/CTASection';
import { demoServices } from '@/lib/demo-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Servicios | Instalación, Mantenimiento y Diseño',
  description: 'Servicios profesionales de instalación, mantenimiento, diseño y automatización de sistemas tecnológicos en Lima.',
  path: '/servicios',
});

export default function ServiciosPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-surface-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="accent-line mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros <span className="text-brand">Servicios</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ofrecemos un servicio integral: desde el diseño hasta la instalación y
              mantenimiento de todos tus sistemas tecnológicos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Necesitas un servicio especializado?"
        subtitle="Contáctanos para una evaluación personalizada de tu proyecto."
        variant="brand"
      />
    </>
  );
}
