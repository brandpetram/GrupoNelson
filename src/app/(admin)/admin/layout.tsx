'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { logoutAction } from './login/actions'

const navigation = [
  {
    items: [
      { href: '/admin', label: 'Inicio' },
      { href: '/admin/acceso-sanity', label: 'Acceso a Sanity' },
    ],
  },
  {
    title: 'Editar',
    items: [
      { href: '/admin/naves-industriales', label: 'Naves industriales' },
      { href: '/admin/terrenos', label: 'Terrenos' },
      { href: '/admin/parques-industriales', label: 'Parques industriales' },
      { href: '/admin/blog', label: 'Blog' },
      { href: '/admin/noticias', label: 'Noticias' },
      { href: '/admin/categorias-y-autores', label: 'Categorías y autores' },
    ],
  },
  {
    title: 'Herramientas',
    items: [
      { href: '/studio', label: 'Sanity Studio' },
      { href: '/qa/terrenos', label: 'QA Terrenos' },
    ],
  },
  {
    title: 'Proyecto',
    items: [
      { href: '/proyecto', label: 'Índice' },
      { href: '/proyecto/bitacora', label: 'Bitácora' },
      { href: '/proyecto/contenidos', label: 'Contenidos' },
      { href: '/proyecto/documentacion', label: 'Documentación' },
      { href: '/proyecto/fase-2-baumex', label: 'Fase 2 Baumex' },
      { href: '/proyecto/fotografias', label: 'Fotografías' },
    ],
  },
  {
    title: 'Dev',
    items: [
      { href: '/componentes', label: 'Componentes' },
      { href: '/componentes-dos', label: 'Componentes 2' },
      { href: '/componentes-tres', label: 'Componentes 3' },
      { href: '/product', label: 'Product' },
      { href: '/productos', label: 'Productos' },
    ],
  },
]

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="space-y-6">
      {navigation.map((group, groupIndex) => (
        <div key={groupIndex}>
          {group.title && (
            <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              {group.title}
            </p>
          )}
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={`group flex items-center rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                      isActive
                        ? 'bg-primary/10 font-medium text-primary dark:bg-primary/15 dark:text-blue-400'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <span className={`mr-2.5 inline-block h-1 w-1 rounded-full transition-colors ${
                      isActive
                        ? 'bg-primary dark:bg-blue-400'
                        : 'bg-transparent group-hover:bg-muted-foreground/40'
                    }`} />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-primary-foreground">
              GN
            </div>
            <span className="text-sm font-medium tracking-tight">Admin</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 12L6 8l4-4" />
              </svg>
              Volver al sitio
            </Link>
            <div className="h-4 w-px bg-border/50" />
            <form action={logoutAction}>
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                Cerrar sesión
              </button>
            </form>
            <div className="h-4 w-px bg-border/50" />
            <ThemeToggle />

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
            aria-label="Menú de navegación"
          >
            {mobileOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 4h12M2 8h12M2 12h12" />
              </svg>
            )}
          </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex gap-0 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 shrink-0 py-8">
            <div className="sticky top-20">
              <NavLinks />
            </div>
          </aside>

          {/* Mobile nav overlay */}
          {mobileOpen && (
            <div className="fixed inset-0 top-12 z-40 bg-background/95 backdrop-blur-sm md:hidden">
              <div className="p-6">
                <NavLinks onNavigate={() => setMobileOpen(false)} />
              </div>
            </div>
          )}

          {/* Main content */}
          <main className="min-w-0 flex-1 border-l border-border/40 py-8 md:pl-12 text-[105%]">
            <article className="max-w-3xl">
              {children}
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
