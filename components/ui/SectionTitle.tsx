import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <div
        className={cn(
          'accent-line mb-4',
          align === 'center' && 'mx-auto'
        )}
      />
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight',
          light ? 'text-white' : 'text-text-primary'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg md:text-xl max-w-3xl leading-relaxed',
            align === 'center' && 'mx-auto',
            light ? 'text-gray-300' : 'text-text-secondary'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
