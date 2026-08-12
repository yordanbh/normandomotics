import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-surface-alt">
      <div className="container mx-auto px-4 text-center py-20">
        {/* 404 number */}
        <div className="relative mb-8">
          <span className="text-[10rem] md:text-[14rem] font-bold text-brand/10 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-brand rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-3xl">N</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Página no encontrada
        </h1>
        <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
          Explora nuestro sitio para encontrar lo que necesitas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="lg" id="not-found-home">
            <Home className="w-5 h-5" />
            Ir al inicio
          </Button>
          <Button href="/productos" variant="outline" size="lg" id="not-found-products">
            <ArrowLeft className="w-5 h-5" />
            Ver productos
          </Button>
        </div>
      </div>
    </section>
  );
}
