import type { Metadata } from 'next';
import {
  Shield,
  Zap,
  Heart,
  Wrench,
  Settings,
  PenTool,
  Cpu,
  Award,
  Users,
  Target,
} from 'lucide-react';
import { generatePageMetadata } from '@/lib/seo';
import SectionTitle from '@/components/ui/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import { COMPANY, BRAND_VALUES } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nosotros | Especialistas en Domótica y Tecnología',
  description: 'Conoce a Norman Technologies, empresa especializada en soluciones tecnológicas de domótica, automatización, seguridad, audio y video en Lima.',
  path: '/nosotros',
});

const values = [
  { icon: Cpu, label: 'Tecnología', desc: 'Productos exclusivos de tecnología de punta' },
  { icon: Zap, label: 'Ahorro', desc: 'Optimización energética inteligente' },
  { icon: Shield, label: 'Seguridad', desc: 'Protección integral para tu espacio' },
  { icon: Heart, label: 'Confort', desc: 'La mejor experiencia de usuario' },
  { icon: Users, label: 'Bienestar', desc: 'Mejora tu calidad de vida' },
  { icon: Target, label: 'Innovación', desc: 'Siempre a la vanguardia' },
];

const services = [
  { icon: Wrench, title: 'Instalación', desc: 'Componentes de alta calidad, discretamente montados y en armonía con la estética del lugar.' },
  { icon: Settings, title: 'Mantenimiento', desc: 'Servicio preventivo y correctivo para el óptimo funcionamiento de tus sistemas.' },
  { icon: PenTool, title: 'Diseño', desc: 'Soluciones a medida adaptadas a las necesidades de cada espacio.' },
  { icon: Cpu, title: 'Automatización', desc: 'Integración completa de sistemas en una plataforma de control unificada.' },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-surface-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="accent-line mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Especialistas en{' '}
              <span className="text-brand">soluciones tecnológicas</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {COMPANY.description}
            </p>
          </div>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-line mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
                ¿Quiénes somos?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                {COMPANY.description}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                En la actualidad, contamos con diversos productos inteligentes cuya función
                es satisfacer alguna necesidad en particular; así podrás experimentar todas
                las ventajas que te ofrece tener un espacio automatizado y vivir la magia de
                un ambiente inteligente.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Existen distintas áreas donde nuestra tecnología puede ser integrada:
                residencial (casas y departamentos), comercial/profesional, corporativo y oficinas.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-surface-dark to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-4xl">N</span>
                  </div>
                  <p className="text-white font-bold text-2xl mb-2">{COMPANY.shortName}</p>
                  <p className="text-gray-400">{COMPANY.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-surface-alt">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nuestros valores"
            subtitle="Los pilares que guían nuestro trabajo y compromiso con cada cliente."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.label}
                className="bg-white rounded-2xl border border-border p-8 text-center card-hover"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-8 h-8 text-brand" />
                </div>
                <h3 className="font-bold text-text-primary text-xl mb-2">{value.label}</h3>
                <p className="text-text-secondary text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Lo que hacemos"
            subtitle="Nuestros servicios profesionales para cada etapa de tu proyecto."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex gap-6 p-6 rounded-2xl bg-surface-alt border border-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                  <service.icon className="w-7 h-7 text-brand" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-lg mb-2">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
