import { ArrowRight, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'dark' | 'brand' | 'light';
  className?: string;
}

export default function CTASection({
  title = '¿Listo para transformar tu espacio con tecnología inteligente?',
  subtitle = 'Contáctanos para una asesoría personalizada y recibe una cotización sin compromiso.',
  primaryLabel = 'Solicitar cotización',
  primaryHref = '/contacto',
  secondaryLabel = 'Hablar con un especialista',
  secondaryHref,
  variant = 'dark',
  className,
}: CTASectionProps) {
  const backgrounds = {
    dark: 'bg-surface-dark text-white',
    brand: 'bg-brand text-white',
    light: 'bg-surface-alt text-text-primary',
  };

  return (
    <section
      className={cn('py-20 md:py-28', backgrounds[variant], className)}
      id="cta-section"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            {title}
          </h2>
          <p
            className={cn(
              'text-lg md:text-xl mb-10 leading-relaxed',
              variant === 'light' ? 'text-text-secondary' : 'text-gray-300'
            )}
          >
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={primaryHref}
              variant={variant === 'brand' ? 'white' : 'primary'}
              size="lg"
              id="cta-primary"
            >
              <ArrowRight className="w-5 h-5" />
              {primaryLabel}
            </Button>
            {secondaryLabel && (
              <Button
                href={secondaryHref || '/contacto'}
                variant={variant === 'light' ? 'outline' : 'ghost'}
                size="lg"
                className={variant !== 'light' ? 'text-white border-white/30 hover:bg-white/10' : ''}
                id="cta-secondary"
              >
                <MessageCircle className="w-5 h-5" />
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
