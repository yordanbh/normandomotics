'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  className?: string;
  variant?: 'pills' | 'underline';
}

export default function Tabs({ tabs, className, variant = 'pills' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  return (
    <div className={cn(className)}>
      {/* Tab buttons */}
      <div
        className={cn(
          'flex gap-1 overflow-x-auto pb-1 scrollbar-none mb-8',
          variant === 'underline' && 'border-b border-border gap-0'
        )}
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex items-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer',
              variant === 'pills' &&
                (activeTab === tab.id
                  ? 'px-5 py-2.5 rounded-full bg-brand text-white shadow-sm'
                  : 'px-5 py-2.5 rounded-full text-text-secondary hover:text-brand hover:bg-brand-50'),
              variant === 'underline' &&
                (activeTab === tab.id
                  ? 'px-5 py-3 text-brand border-b-2 border-brand -mb-px'
                  : 'px-5 py-3 text-text-secondary hover:text-brand -mb-px border-b-2 border-transparent')
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab panels */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          hidden={activeTab !== tab.id}
          className={cn(
            'transition-opacity duration-300',
            activeTab === tab.id ? 'opacity-100' : 'opacity-0'
          )}
        >
          {activeTab === tab.id && tab.content}
        </div>
      ))}
    </div>
  );
}
