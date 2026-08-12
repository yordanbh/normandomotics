import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: 'Inicio', href: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-text-secondary">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-1">
              {index === 0 && (
                <Home className="w-4 h-4 mr-1 shrink-0" />
              )}
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-text-tertiary shrink-0" />
              )}
              {isLast ? (
                <span className="text-text-primary font-medium truncate max-w-[200px]">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-brand transition-colors truncate max-w-[200px]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
