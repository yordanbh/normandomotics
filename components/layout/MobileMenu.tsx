'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, FileText, Phone } from 'lucide-react';
import { NAV_ITEMS, COMPANY } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { generateTelUrl } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-lg text-text-primary">
                {COMPANY.shortName}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6 text-text-secondary" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-4" aria-label="Navegación móvil">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        'block px-4 py-3 rounded-lg font-medium transition-all duration-200',
                        isActive
                          ? 'bg-brand-50 text-brand'
                          : 'text-text-primary hover:bg-gray-50 hover:text-brand'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border space-y-3">
            <Link
              href="/contacto"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors"
            >
              <FileText className="w-4 h-4" />
              Solicitar cotización
            </Link>
            <a
              href={generateTelUrl(COMPANY.phones[0])}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
