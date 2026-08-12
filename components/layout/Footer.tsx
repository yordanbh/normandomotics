import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { generateTelUrl } from '@/lib/utils';

const footerLinks = {
  empresa: [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
  ],
  productos: [
    { label: 'Domótica', href: '/categorias/domotica' },
    { label: 'Apagadores Inteligentes', href: '/categorias/apagadores-inteligentes' },
    { label: 'Audio', href: '/categorias/audio' },
    { label: 'Cámaras de Seguridad', href: '/categorias/camaras-de-seguridad' },
    { label: 'Video Wall', href: '/categorias/video-wall' },
    { label: 'Ver todos', href: '/productos' },
  ],
  soluciones: [
    { label: 'Residencial', href: '/soluciones#residencial' },
    { label: 'Comercial', href: '/soluciones#comercial' },
    { label: 'Corporativo', href: '/soluciones#corporativo' },
    { label: 'Oficinas', href: '/soluciones#oficinas' },
  ],
  servicios: [
    { label: 'Instalación', href: '/servicios/instalacion' },
    { label: 'Mantenimiento', href: '/servicios/mantenimiento' },
    { label: 'Diseño', href: '/servicios/diseno' },
    { label: 'Automatización', href: '/servicios/automatizacion' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white" id="main-footer">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                {COMPANY.shortName}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {COMPANY.description}
            </p>
            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <a
                href={generateTelUrl(COMPANY.phones[0])}
                className="flex items-center gap-2 text-gray-400 hover:text-brand transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {COMPANY.phones[0]}
              </a>
              <a
                href={generateTelUrl(COMPANY.phones[1])}
                className="flex items-center gap-2 text-gray-400 hover:text-brand transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {COMPANY.phones[1]}
              </a>
              <a
                href={`mailto:${COMPANY.emails.sales}`}
                className="flex items-center gap-2 text-gray-400 hover:text-brand transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {COMPANY.emails.sales}
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{COMPANY.address.full}</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Productos
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.productos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Soluciones
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.soluciones.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {COMPANY.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/nosotros" className="hover:text-brand transition-colors">
              Política de privacidad
            </Link>
            <Link href="/contacto" className="hover:text-brand transition-colors">
              Términos de servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
