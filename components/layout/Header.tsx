'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, FileText, Menu } from 'lucide-react';
import { NAV_ITEMS, COMPANY } from '@/lib/constants';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass-header shadow-sm border-b border-border/50'
            : 'bg-transparent'
        )}
        id="main-header"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0"
              aria-label="Norman Technologies - Inicio"
              id="logo-link"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-brand rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg md:text-xl">N</span>
                </div>
                <div className="hidden sm:block">
                  <span
                    className={cn(
                      'font-bold text-lg md:text-xl tracking-tight transition-colors',
                      isScrolled || pathname !== '/'
                        ? 'text-text-primary'
                        : 'text-white'
                    )}
                  >
                    {COMPANY.shortName}
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      isActive
                        ? 'text-brand'
                        : isScrolled || pathname !== '/'
                          ? 'text-text-secondary hover:text-brand hover:bg-brand-50'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  isScrolled || pathname !== '/'
                    ? 'text-text-secondary hover:text-brand hover:bg-brand-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
                aria-label="Buscar"
                id="header-search-btn"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* CTA Desktop */}
              <Link
                href="/contacto"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-brand-dark transition-all duration-300 shadow-sm hover:shadow-md"
                id="header-cta"
              >
                <FileText className="w-4 h-4" />
                Solicitar cotización
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className={cn(
                  'lg:hidden p-2 rounded-lg transition-colors',
                  isScrolled || pathname !== '/'
                    ? 'text-text-secondary hover:text-brand'
                    : 'text-white/90 hover:text-white'
                )}
                aria-label="Abrir menú"
                id="mobile-menu-btn"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Search bar dropdown */}
          {isSearchOpen && (
            <div className="pb-4 animate-slide-down">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const q = formData.get('q') as string;
                  if (q?.trim()) {
                    window.location.href = `/buscar?q=${encodeURIComponent(q.trim())}`;
                    setIsSearchOpen(false);
                  }
                }}
                className="relative"
              >
                <input
                  type="text"
                  name="q"
                  placeholder="Buscar productos, servicios, soluciones..."
                  className="w-full py-3 px-4 pl-12 bg-white border border-border rounded-lg text-text-primary placeholder:text-text-tertiary outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  autoFocus
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
