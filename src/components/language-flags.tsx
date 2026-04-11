'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface LanguageFlagsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export function LanguageFlags({ className, size = 'md', showLabels = false }: LanguageFlagsProps) {
  const pathname = usePathname();

  // Estructura actual: español en / , inglés en /en/
  // En Fase 6 se invertirá: inglés en / , español en /es/
  // Cuando eso pase, importar toSpanish/toEnglish de @/glossary/route-map
  const currentLang = pathname?.startsWith('/en') ? 'en' : 'es';

  const getLanguageUrl = (targetLang: string) => {
    if (targetLang === 'es') return '/';
    if (targetLang === 'en') return '/en';
    return '/';
  };

  // Tamaños de imagen según prop
  const sizeClasses = {
    sm: 'w-6 h-4',
    md: 'w-8 h-5',
    lg: 'w-10 h-7',
  };

  const languages = [
    { code: 'es', flag: '/mex.jpg', label: 'Español' },
    { code: 'en', flag: '/eua.jpg', label: 'English' },
  ];

  return (
    <div data-component="LanguageFlags" data-component-file="src/components/language-flags.tsx" data-component-props="true" className={cn('flex items-center gap-2 shrink-0', className)}>
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={getLanguageUrl(lang.code)}
          className={cn(
            'relative rounded overflow-hidden transition-all duration-200',
            'hover:scale-110 hover:opacity-80',
            currentLang === lang.code && 'scale-105',
            'focus:outline-none focus:ring-2 focus:ring-primary'
          )}
          aria-label={`Cambiar a ${lang.label}`}
          title={lang.label}
        >
          <img
            src={lang.flag}
            alt={lang.label}
            className={cn(sizeClasses[size], 'object-cover shrink-0')}
          />
          {showLabels && (
            <span className="sr-only md:not-sr-only text-xs ml-1">{lang.label}</span>
          )}
        </Link>
      ))}
    </div>
  );
}
