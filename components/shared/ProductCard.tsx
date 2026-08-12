import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import type { Product } from '@/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      href={`/productos/${product.slug}`}
      className={cn(
        'group block bg-white rounded-2xl border border-border overflow-hidden card-hover h-full',
        className
      )}
      id={`product-${product.slug}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-surface-alt overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10" />
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-brand/10 flex items-center justify-center">
              <span className="text-brand text-2xl font-bold">
                {product.name.charAt(0)}
              </span>
            </div>
          </div>
        )}
        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-3 left-3 z-20">
            <Badge variant="brand" size="sm">Destacado</Badge>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-300 z-10" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category & Brand */}
        <div className="flex items-center gap-2 mb-2">
          {product.category && (
            <Badge variant="outline" size="sm">{product.category.name}</Badge>
          )}
          {product.brand && (
            <span className="text-xs text-text-tertiary font-medium">
              {product.brand.name}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-semibold text-text-primary text-lg leading-tight mb-2 group-hover:text-brand transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        {product.short_description && (
          <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-4">
            {product.short_description}
          </p>
        )}

        {/* CTA */}
        <div className="flex items-center text-brand text-sm font-semibold group-hover:gap-3 gap-1.5 transition-all duration-300">
          Solicitar cotización
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
