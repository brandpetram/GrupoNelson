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

  // Determinar idioma actual basado en la ruta
  const getCurrentLang = () => {
    if (pathname?.startsWith('/en')) return 'en';
    if (pathname?.startsWith('/cn')) return 'cn';
    return 'es';
  };

  const currentLang = getCurrentLang();

  // Generar URL para cambio de idioma
  const getLanguageUrl = (lang: string) => {
    if (lang === 'es') return '/';
    return `/${lang}`;
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
    { code: 'cn', flag: '/china.jpeg', label: '中文' },
  ];

  return (
    <div className={cn('flex items-center gap-2', className)}>
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
            className={cn(sizeClasses[size], 'object-cover')}
          />
          {showLabels && (
            <span className="sr-only md:not-sr-only text-xs ml-1">{lang.label}</span>
          )}
        </Link>
      ))}
    </div>
  );
}
