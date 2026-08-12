import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Shield,
  Zap,
  Home,
  Volume2,
  Monitor,
  Camera,
  Building2,
  Film,
  Fingerprint,
  LayoutGrid,
  Lightbulb,
  Thermometer,
  Mic,
  Wifi,
  ChevronRight,
  CheckCircle,
  Wrench,
  Settings,
  PenTool,
  Cpu,
  Play,
  Star,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/shared/ProductCard';
import ServiceCard from '@/components/shared/ServiceCard';
import CTASection from '@/components/shared/CTASection';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import HomeTabs from '@/components/home/HomeTabs';
import { COMPANY } from '@/lib/constants';
import { demoProducts, demoCategories, demoServices } from '@/lib/demo-data';

// Solution cards data
const solutions = [
  { icon: Home, title: 'Domótica', desc: 'Automatización inteligente del hogar', href: '/soluciones#domotica-residencial' },
  { icon: Zap, title: 'Automatización', desc: 'Control integral de sistemas', href: '/soluciones#automatizacion-oficinas' },
  { icon: Shield, title: 'Seguridad', desc: 'CCTV, control de acceso y monitoreo', href: '/soluciones#seguridad-residencial' },
  { icon: Volume2, title: 'Audio y Video', desc: 'Sistemas profesionales multizona', href: '/soluciones#audio-profesional-comercial' },
  { icon: Building2, title: 'Oficinas Inteligentes', desc: 'Productividad y eficiencia', href: '/soluciones#oficinas-inteligentes' },
  { icon: Fingerprint, title: 'Control de Acceso', desc: 'Biométrico y tarjetas RFID', href: '/soluciones#control-acceso-comercial' },
  { icon: LayoutGrid, title: 'Video Wall', desc: 'Señalética digital y publicidad', href: '/soluciones#video-wall-comercial' },
  { icon: Film, title: 'Cine en Casa', desc: 'Experiencia cinematográfica real', href: '/soluciones#cine-en-casa-residencial' },
];

// Domotica ecosystem items
const domoticaItems = [
  { icon: Lightbulb, label: 'Iluminación' },
  { icon: Wifi, label: 'Red del hogar' },
  { icon: Shield, label: 'Seguridad' },
  { icon: Monitor, label: 'Video Portero' },
  { icon: Thermometer, label: 'Climatización' },
  { icon: Volume2, label: 'Audio multizona' },
  { icon: Camera, label: 'Cámaras' },
  { icon: Mic, label: 'Control por voz' },
  { icon: Zap, label: 'Control a distancia' },
  { icon: Film, label: 'Cine en casa' },
];

// Stats
const stats = [
  { value: 15, suffix: '+', label: 'Años de experiencia' },
  { value: 500, suffix: '+', label: 'Proyectos realizados' },
  { value: 100, suffix: '%', label: 'Cobertura garantizada' },
  { value: 50, suffix: '+', label: 'Marcas premium' },
];

// Testimonials
const testimonials = [
  {
    text: 'Norman Technologies transformó completamente nuestro hogar. El sistema de domótica funciona a la perfección y el equipo fue muy profesional en todo momento.',
    author: 'Carlos M.',
    role: 'Cliente Residencial',
    rating: 5,
  },
  {
    text: 'Instalaron el sistema de seguridad y video wall en nuestra empresa. Excelente calidad de servicio y atención post-venta. Altamente recomendados.',
    author: 'María G.',
    role: 'Gerente General',
    rating: 5,
  },
  {
    text: 'La experiencia de cine en casa que nos diseñaron es increíble. Audio envolvente y la imagen del proyector 4K es impresionante. Un lujo accesible.',
    author: 'Roberto L.',
    role: 'Cliente Cine en Casa',
    rating: 5,
  },
];

// Enrich products with category/brand for display
const featuredProducts = demoProducts
  .filter((p) => p.featured)
  .slice(0, 6)
  .map((p) => ({
    ...p,
    category: demoCategories.find((c) => c.id === p.category_id),
  }));

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO SECTION — Full visual impact with image
          ============================================================ */}
      <section className="relative min-h-[100vh] flex items-center" id="hero">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/smart-home.png"
            alt="Casa inteligente con automatización"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative container mx-auto px-4 py-32 md:py-40">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-gray-200 mb-8 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Especialistas en Domótica y Automatización
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-slide-up">
              Transformamos espacios con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">
                tecnología inteligente
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 animate-slide-up stagger-2">
              Soluciones profesionales de domótica, automatización, seguridad,
              audio y video para hogares, empresas y espacios corporativos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-3">
              <Button href="/soluciones" variant="primary" size="lg" id="hero-cta-solutions">
                Conoce nuestras soluciones
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/contacto" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-surface-dark" id="hero-cta-quote">
                Solicita una cotización
              </Button>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10 animate-fade-in stagger-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-brand font-bold text-3xl md:text-4xl">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ============================================================
          SOLUTIONS SECTION
          ============================================================ */}
      <section className="py-20 md:py-28 bg-white" id="soluciones-home">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionTitle
              title="Soluciones tecnológicas integrales"
              subtitle="Ofrecemos soluciones completas de automatización, seguridad y entretenimiento para cada tipo de espacio."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} animation="fade-up" delay={index * 80}>
                <Link
                  href={solution.href}
                  className="group relative block bg-white rounded-2xl border border-border p-6 card-hover overflow-hidden h-full"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand/5 rounded-bl-[2.5rem] transition-all duration-500 group-hover:w-28 group-hover:h-28 group-hover:bg-brand/10" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand transition-all duration-300">
                      <solution.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-text-primary text-lg mb-1.5 group-hover:text-brand transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{solution.desc}</p>
                    <ChevronRight className="w-5 h-5 text-brand mt-3 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          DOMOTICA ECOSYSTEM — with real image
          ============================================================ */}
      <section className="py-20 md:py-28 bg-surface-dark text-white overflow-hidden" id="domotica-home">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <ScrollReveal animation="fade-right">
              <div>
                <div className="accent-line mb-6" />
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-6">
                  Bienvenidos a una vida{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400">más fácil</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Nuestro sistema de automatización coordina la tecnología de tu hogar
                  para brindarte el mayor confort y la nueva experiencia de interactuar
                  con tu espacio. Ten el control completo de tu hogar de manera práctica y eficaz.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Imagínese estar en el confort de su sala sentado cómodamente y desde un
                  simple toque o tan solo con su voz, lograr que las luces se apaguen o
                  enciendan, encender la música de la sala o la TV del dormitorio.
                </p>
                <Button href="/soluciones#domotica-residencial" variant="primary" size="lg" id="domotica-cta">
                  Descubre la domótica
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </ScrollReveal>

            {/* Right: Ecosystem grid */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {domoticaItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand/30 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center group-hover:bg-brand transition-all duration-300">
                      <item.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 text-center">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED PRODUCTS — with real images & tabs
          ============================================================ */}
      <section className="py-20 md:py-28 bg-surface-alt" id="productos-home">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionTitle
              title="Productos destacados"
              subtitle="Descubre nuestra selección de productos de tecnología de punta para automatización y seguridad."
            />
          </ScrollReveal>

          <HomeTabs />

          <ScrollReveal animation="fade-up" delay={300}>
            <div className="text-center mt-12">
              <Button href="/productos" variant="outline" size="lg" id="products-see-all">
                Ver todos los productos
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================
          IMAGE SHOWCASE BANNER
          ============================================================ */}
      <section className="relative py-0 overflow-hidden" id="showcase-banner">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { src: '/images/products/apagador-touch.png', label: 'Apagadores Inteligentes' },
            { src: '/images/products/camara-4mp.png', label: 'Cámaras de Seguridad' },
            { src: '/images/products/audio-multizona.png', label: 'Audio Multizona' },
            { src: '/images/products/proyector-4k.png', label: 'Cine en Casa' },
          ].map((item) => (
            <div key={item.label} className="relative aspect-square group overflow-hidden">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-semibold text-sm md:text-base text-center px-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          SERVICES SECTION
          ============================================================ */}
      <section className="py-20 md:py-28 bg-white" id="servicios-home">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionTitle
              title="Nuestros servicios"
              subtitle="Ofrecemos un servicio integral: desde el diseño hasta la instalación y mantenimiento de tus sistemas tecnológicos."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoServices.slice(0, 6).map((service, index) => (
              <ScrollReveal key={service.id} animation="fade-up" delay={index * 100}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE US — with animated counters
          ============================================================ */}
      <section className="py-20 md:py-28 bg-surface-alt" id="por-que-elegirnos">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionTitle
              title="¿Por qué elegir Norman Technologies?"
              subtitle="Más de una década de experiencia en soluciones tecnológicas profesionales."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wrench,
                title: 'Instalación profesional',
                description: 'Componentes de alta calidad, discretamente montados y en armonía con la estética del lugar.',
              },
              {
                icon: Settings,
                title: 'Mantenimiento continuo',
                description: 'Servicio de mantenimiento preventivo y correctivo para asegurar el óptimo funcionamiento.',
              },
              {
                icon: PenTool,
                title: 'Diseño personalizado',
                description: 'Soluciones a medida adaptadas a las necesidades específicas de cada espacio.',
              },
              {
                icon: Cpu,
                title: 'Automatización integral',
                description: 'Integración completa de todos los sistemas en una plataforma de control unificada.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} animation="scale" delay={index * 120}>
                <div className="text-center bg-white rounded-2xl p-8 border border-border card-hover h-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand transition-colors">
                    <item.icon className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="font-bold text-text-primary text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <section className="py-20 md:py-28 bg-surface-dark text-white" id="testimonios">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionTitle
              title="Lo que dicen nuestros clientes"
              subtitle="La satisfacción de nuestros clientes es nuestra mejor carta de presentación."
              light
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.author} animation="fade-up" delay={index * 150}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm h-full flex flex-col hover:bg-white/10 transition-colors duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand text-brand" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center">
                      <span className="text-brand font-bold text-sm">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SEGMENTS SECTION — with images
          ============================================================ */}
      <section className="py-20 md:py-28 bg-white" id="segmentos-home">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionTitle
              title="Soluciones para cada espacio"
              subtitle="Nuestra tecnología puede ser integrada en distintas áreas."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                title: 'Residencial',
                desc: 'Casas y Departamentos',
                features: ['Domótica', 'Cine en casa', 'Seguridad', 'Audio multizona'],
                href: '/soluciones#residencial',
                image: '/images/hero/smart-home.png',
              },
              {
                icon: Monitor,
                title: 'Comercial',
                desc: 'Audio, Video y Seguridad',
                features: ['Audio profesional', 'CCTV', 'Video Wall', 'Control de acceso'],
                href: '/soluciones#comercial',
                image: '/images/products/camara-4mp.png',
              },
              {
                icon: Building2,
                title: 'Corporativo',
                desc: 'Oficinas y salas de reuniones',
                features: ['Oficinas inteligentes', 'Videoconferencias', 'Automatización', 'Audio/Video'],
                href: '/soluciones#corporativo',
                image: '/images/products/control-acceso.png',
              },
              {
                icon: Cpu,
                title: 'Oficinas',
                desc: 'Automatización y colaboración',
                features: ['Pantallas', 'Audio', 'Microfonía', 'Colaboración inalámbrica'],
                href: '/soluciones#oficinas',
                image: '/images/products/apagador-touch.png',
              },
            ].map((segment, index) => (
              <ScrollReveal key={segment.title} animation="fade-up" delay={index * 100}>
                <Link
                  href={segment.href}
                  className="group relative block rounded-2xl overflow-hidden card-hover h-full"
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={segment.image}
                      alt={segment.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
                  </div>

                  <div className="relative p-8 min-h-[360px] flex flex-col justify-end">
                    <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center mb-4">
                      <segment.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-xl mb-1 group-hover:text-brand transition-colors">
                      {segment.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">{segment.desc}</p>
                    <ul className="space-y-2">
                      {segment.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-brand shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ABOUT PREVIEW — with image
          ============================================================ */}
      <section className="py-20 md:py-28 bg-surface-alt" id="nosotros-home">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <ScrollReveal animation="fade-right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero/smart-home.png"
                    alt="Norman Technologies - Soluciones tecnológicas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-[240px] hidden md:block border border-border">
                  <div className="text-brand font-bold text-3xl mb-1">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <p className="text-text-secondary text-sm">Cobertura de red garantizada</p>
                </div>
                {/* Top badge */}
                <div className="absolute -top-4 -left-4 bg-brand rounded-xl shadow-xl p-4 hidden md:flex items-center gap-3">
                  <Play className="w-5 h-5 text-white fill-white" />
                  <span className="text-white text-sm font-semibold">Ver demo</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div>
                <div className="accent-line mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-6">
                  Especialistas en soluciones tecnológicas
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  {COMPANY.description}
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  En la actualidad, contamos con diversos productos inteligentes cuya función es
                  satisfacer alguna necesidad en particular; así podrás experimentar todas las
                  ventajas que te ofrece tener un espacio automatizado y vivir la magia de un
                  ambiente inteligente.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Tecnología', 'Ahorro', 'Seguridad', 'Confort', 'Bienestar', 'Innovación'].map(
                    (value) => (
                      <span
                        key={value}
                        className="px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-medium hover:bg-brand hover:text-white transition-colors duration-300 cursor-default"
                      >
                        {value}
                      </span>
                    )
                  )}
                </div>
                <Button href="/nosotros" variant="secondary" size="lg" id="about-cta">
                  Conoce más sobre nosotros
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <CTASection />
    </>
  );
}
