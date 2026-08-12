import { FileText } from 'lucide-react';
import Button from '@/components/ui/Button';

interface QuoteButtonProps {
  productName?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'outline';
}

export default function QuoteButton({
  className,
  size = 'md',
  variant = 'primary',
}: QuoteButtonProps) {
  return (
    <Button
      href="/contacto"
      variant={variant}
      size={size}
      className={className}
      id="quote-button"
    >
      <FileText className="w-4 h-4" />
      Solicitar cotización
    </Button>
  );
}
