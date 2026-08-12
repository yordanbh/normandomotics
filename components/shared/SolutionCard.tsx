import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Solution } from '@/types';
import { cn } from '@/lib/utils';

interface SolutionCardProps {
  solution: Solution;
  className?: string;
  variant?: 'default' | 'compact';
}

export default function SolutionCard({
  solution,
  className,
  variant = 'default',
}: SolutionCardProps) {
  const iconMap = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const IconComponent = solution.icon && iconMap[solution.icon]
    ? iconMap[solution.icon]
    : LucideIcons.Lightbulb;

  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'flex items-start gap-4 p-4 rounded-xl border border-border bg-white hover:border-brand/30 hover:shadow-sm transition-all duration-300',
          className
        )}
      >
        <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
          <IconComponent className="w-5 h-5 text-brand" />
        </div>
        <div>
          <h4 className="font-semibold text-text-primary text-sm mb-1">
            {solution.name}
          </h4>
          {solution.short_description && (
            <p className="text-xs text-text-secondary leading-relaxed">
              {solution.short_description}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/soluciones#${solution.slug}`}
      className={cn(
        'group relative block rounded-2xl overflow-hidden card-hover',
        'bg-gradient-to-br from-surface-dark to-gray-900 text-white',
        'p-8 min-h-[240px] flex flex-col justify-end',
        className
      )}
      id={`solution-${solution.slug}`}
    >
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
        <IconComponent className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center mb-4">
          <IconComponent className="w-6 h-6 text-white" />
        </div>

        <h3 className="font-bold text-xl mb-2">{solution.name}</h3>

        {solution.short_description && (
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
            {solution.short_description}
          </p>
        )}

        <div className="flex items-center text-brand-100 text-sm font-medium gap-1.5 group-hover:gap-3 transition-all duration-300">
          Conocer más
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
