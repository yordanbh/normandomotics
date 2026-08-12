import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  id?: string;
}

const variants = {
  primary:
    'bg-brand text-white hover:bg-brand-dark shadow-sm hover:shadow-md',
  secondary:
    'bg-surface-dark text-white hover:bg-gray-800 shadow-sm hover:shadow-md',
  outline:
    'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  ghost:
    'text-text-secondary hover:text-brand hover:bg-brand-50',
  white:
    'bg-white text-surface-dark hover:bg-gray-100 shadow-sm',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  type = 'button',
  disabled = false,
  onClick,
  id,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
}
