'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  variant?: 'default' | 'hero' | 'compact';
}

export default function SearchBar({
  placeholder = 'Buscar productos, servicios, soluciones...',
  className,
  variant = 'default',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isFocused) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFocused]);

  const variantStyles = {
    default: 'bg-surface-alt border border-border',
    hero: 'bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60',
    compact: 'bg-surface-alt border border-border text-sm',
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('relative', className)}
      role="search"
    >
      <div
        className={cn(
          'flex items-center rounded-lg transition-all duration-300',
          variantStyles[variant],
          isFocused && 'ring-2 ring-brand/30 border-brand'
        )}
      >
        <Search
          className={cn(
            'w-5 h-5 ml-3 shrink-0',
            variant === 'hero' ? 'text-white/60' : 'text-text-tertiary'
          )}
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            'w-full bg-transparent border-none outline-none py-3 px-3',
            variant === 'compact' && 'py-2 px-2'
          )}
          id="search-input"
          aria-label="Buscar"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="p-2 mr-1 hover:text-brand transition-colors"
            aria-label="Limpiar búsqueda"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  );
}
