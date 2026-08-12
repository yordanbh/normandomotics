'use client';

import { useState } from 'react';
import {
  Home,
  Shield,
  Volume2,
  Monitor,
  Fingerprint,
  LayoutGrid,
} from 'lucide-react';
import ProductCard from '@/components/shared/ProductCard';
import { demoProducts, demoCategories } from '@/lib/demo-data';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'all', label: 'Todos', icon: <LayoutGrid className="w-4 h-4" /> },
  { id: '2', label: 'Apagadores', icon: <Home className="w-4 h-4" /> },
  { id: '5', label: 'Seguridad', icon: <Shield className="w-4 h-4" /> },
  { id: '3', label: 'Audio', icon: <Volume2 className="w-4 h-4" /> },
  { id: '4', label: 'Video', icon: <Monitor className="w-4 h-4" /> },
  { id: '7', label: 'Acceso', icon: <Fingerprint className="w-4 h-4" /> },
];

export default function HomeTabs() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = demoProducts
    .filter((p) => p.featured && (activeTab === 'all' || p.category_id === activeTab))
    .slice(0, 6)
    .map((p) => ({
      ...p,
      category: demoCategories.find((c) => c.id === p.category_id),
    }));

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none mb-8 justify-center flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer',
              activeTab === tab.id
                ? 'bg-brand text-white shadow-sm shadow-brand/30'
                : 'bg-white text-text-secondary border border-border hover:text-brand hover:border-brand/30'
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product grid with animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-text-secondary">
              No hay productos destacados en esta categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
