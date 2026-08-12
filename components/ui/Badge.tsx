import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'outline' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

const variants = {
  default: 'bg-gray-100 text-text-secondary',
  brand: 'bg-brand-50 text-brand',
  outline: 'border border-border text-text-secondary',
  success: 'bg-emerald-50 text-emerald-700',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
