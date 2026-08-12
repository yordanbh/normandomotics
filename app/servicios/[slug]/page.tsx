import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/shared/JsonLd';
import CTASection from '@/components/shared/CTASection';
import { generateServiceJsonLd } from '@/lib/seo';
import { generateServiceWhatsAppUrl } from '@/lib/utils';
import { demoServices } from '@/lib/demo-data';

export function generateStaticParams() {
  return demoServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = demoServices.find((s) => s.slug === slug);
  if (!service) return { title: 'Servicio no encontrado' };

  return {
    title: service.seo_title || `${service.name} | Norman Technologies`,
    description: service.seo_description || service.short_description || '',
    alternates: { canonical: `/servicios/${slug}` },
  };
}

export default async function ServicioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = demoServices.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={generateServiceJsonLd({
          name: service.name,
          description: service.description || service.short_description || '',
          slug: service.slug,
        })}
      />

      <div className="pt-24 md:pt-28 bg-white">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Servicios', href: '/servicios' },
              { label: service.name, href: `/servicios/${service.slug}` },
            ]}
          />
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="accent-line mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              {service.name}
            </h1>

            {service.description && (
              <p className="text-lg text-text-secondary leading-relaxed mb-10">
                {service.description}
              </p>
            )}

            {service.features && service.features.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl font-bold text-text-primary mb-4">
                  ¿Qué incluye este servicio?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-surface-alt border border-border"
                    >
                      <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                      <span className="text-text-primary font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contacto" variant="primary" size="lg" id="service-quote-cta">
                <ArrowRight className="w-5 h-5" />
                Solicitar este servicio
              </Button>
              <a
                href={generateServiceWhatsAppUrl(service.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
