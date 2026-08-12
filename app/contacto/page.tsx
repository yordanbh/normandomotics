import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { generatePageMetadata } from '@/lib/seo';
import ContactForm from '@/components/shared/ContactForm';
import { COMPANY } from '@/lib/constants';
import { generateTelUrl } from '@/lib/utils';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contacto | Solicita tu Cotización',
  description: 'Contáctanos para solicitar cotización de domótica, automatización, seguridad, audio y video. Norman Technologies en Chorrillos, Lima.',
  path: '/contacto',
});

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfonos',
    items: COMPANY.phones.map((phone) => ({
      text: phone,
      href: generateTelUrl(phone),
    })),
  },
  {
    icon: Mail,
    label: 'Correos electrónicos',
    items: [
      { text: COMPANY.emails.sales, href: `mailto:${COMPANY.emails.sales}` },
      { text: COMPANY.emails.projects, href: `mailto:${COMPANY.emails.projects}` },
    ],
  },
  {
    icon: MapPin,
    label: 'Oficina',
    items: [{ text: COMPANY.address.full, href: '#' }],
  },
  {
    icon: Clock,
    label: 'Contacto directo',
    items: [
      {
        text: `${COMPANY.contact.name}: ${COMPANY.contact.phone}`,
        href: generateTelUrl(COMPANY.contact.phone),
      },
    ],
  },
];

export default function ContactoPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-surface-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="accent-line mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Solicita tu cotización sin compromiso. Nuestro equipo de especialistas
              te asesorará con la mejor solución para tu proyecto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-border p-8 md:p-10">
                <h2 className="text-2xl font-bold text-text-primary mb-2">
                  Solicitar cotización
                </h2>
                <p className="text-text-secondary mb-8">
                  Completa el formulario y nos pondremos en contacto a la brevedad.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-border p-8">
                  <h3 className="font-bold text-text-primary text-lg mb-6">
                    {COMPANY.name}
                  </h3>

                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-5 h-5 text-brand" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-primary mb-1">
                            {info.label}
                          </p>
                          {info.items.map((item) => (
                            <a
                              key={item.text}
                              href={item.href}
                              className="block text-sm text-text-secondary hover:text-brand transition-colors"
                            >
                              {item.text}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-surface-alt flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-76.99!3d-12.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDEwJzEyLjAiUyA3NsKwNTknMjQuMCJX!5e0!3m2!1ses!2spe!4v1"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación Norman Technologies"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
