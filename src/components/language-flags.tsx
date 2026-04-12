'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { toSpanish, toEnglish, hasTranslation } from '@/glossary/route-map';

interface LanguageFlagsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export function LanguageFlags({ className, size = 'md', showLabels = false }: LanguageFlagsProps) {
  const pathname = usePathname();

  // Inglés en / (sin prefijo), español en /es/
  const currentLang = pathname?.startsWith('/es') ? 'es' : 'en';

  const getLanguageUrl = (targetLang: string) => {
    if (targetLang === 'es') {
      if (pathname?.startsWith('/es')) return pathname;
      return toSpanish(pathname ?? '/');
    }
    if (targetLang === 'en') {
      if (!pathname?.startsWith('/es')) return pathname ?? '/';
      return toEnglish(pathname);
    }
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

  // Ocultar switcher en páginas sin traducción (blog, noticias, etc.)
  const canSwitch = hasTranslation(pathname ?? '/');

  return (
    <div data-component="LanguageFlags" data-component-file="src/components/language-flags.tsx" data-component-props="true" className={cn('flex items-center gap-2 shrink-0', className)}>
      {languages.map((lang) => {
        const isOtherLang = lang.code !== currentLang;
        const disabled = isOtherLang && !canSwitch;

        return (
          <Link
            key={lang.code}
            href={disabled ? '#' : getLanguageUrl(lang.code)}
            className={cn(
              'relative rounded overflow-hidden transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary',
              disabled ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 hover:opacity-80',
              currentLang === lang.code && 'scale-105',
            )}
            aria-label={disabled ? `${lang.label} not available` : `Cambiar a ${lang.label}`}
            title={disabled ? `${lang.label} not available` : lang.label}
            onClick={disabled ? (e) => e.preventDefault() : undefined}
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
        );
      })}
    </div>
  );
}
