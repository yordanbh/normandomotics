import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Service } from '@/types';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  const iconMap = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const IconComponent = service.icon && iconMap[service.icon]
    ? iconMap[service.icon]
    : LucideIcons.Settings;

  return (
    <Link
      href={`/servicios/${service.slug}`}
      className={cn(
        'group block bg-white rounded-2xl border border-border p-8 card-hover',
        className
      )}
      id={`service-${service.slug}`}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand transition-all duration-300">
        <IconComponent className="w-7 h-7 text-brand group-hover:text-white transition-colors" />
      </div>

      {/* Name */}
      <h3 className="font-bold text-text-primary text-xl mb-3 group-hover:text-brand transition-colors">
        {service.name}
      </h3>

      {/* Description */}
      {service.short_description && (
        <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
          {service.short_description}
        </p>
      )}

      {/* Features preview */}
      {service.features && service.features.length > 0 && (
        <ul className="space-y-1.5 mb-5">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-text-secondary">
              <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="flex items-center text-brand text-sm font-semibold gap-1.5 group-hover:gap-3 transition-all duration-300">
        Más información
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
