import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { Category } from '@/types';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export default function CategoryCard({ category, className }: CategoryCardProps) {
  const iconMap = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const IconComponent = category.icon && iconMap[category.icon]
    ? iconMap[category.icon]
    : LucideIcons.Folder;

  return (
    <Link
      href={`/categorias/${category.slug}`}
      className={cn(
        'group relative block bg-white rounded-2xl border border-border p-6 card-hover overflow-hidden',
        className
      )}
      id={`category-${category.slug}`}
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-bl-[3rem] transition-all duration-500 group-hover:w-32 group-hover:h-32 group-hover:bg-brand/10" />

      <div className="relative">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-all duration-300">
          <IconComponent className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
        </div>

        {/* Name */}
        <h3 className="font-semibold text-text-primary text-lg mb-2 group-hover:text-brand transition-colors">
          {category.name}
        </h3>

        {/* Description */}
        {category.description && (
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-4">
            {category.description}
          </p>
        )}

        {/* Arrow */}
        <div className="flex items-center text-brand text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
          Ver productos
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </Link>
  );
}
