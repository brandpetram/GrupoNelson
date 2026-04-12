import Link from 'next/link'

export const metadata = {
  title: 'Admin — Grupo Nelson',
  description: 'Guías para editar el contenido del sitio web de Grupo Nelson a través de Sanity Studio.',
}

const sections = [
  {
    href: '/admin/acceso-sanity',
    title: 'Acceso a Sanity Studio',
    description: 'Cómo entrar al panel de administración y navegar por las secciones.',
    tag: 'Inicio',
  },
  {
    href: '/admin/naves-industriales',
    title: 'Naves industriales',
    description: 'Agregar, editar o cambiar el estatus de las naves disponibles.',
    tag: 'Editar',
  },
  {
    href: '/admin/terrenos',
    title: 'Terrenos',
    description: 'Administrar el inventario de terrenos disponibles para desarrollo.',
    tag: 'Editar',
  },
  {
    href: '/admin/parques-industriales',
    title: 'Parques industriales',
    description: 'Editar la información de los 4 parques industriales.',
    tag: 'Editar',
  },
  {
    href: '/admin/blog',
    title: 'Blog',
    description: 'Crear y editar artículos del blog en español, inglés y chino.',
    tag: 'Editar',
  },
  {
    href: '/admin/noticias',
    title: 'Noticias',
    description: 'Publicar noticias sobre nuevos proyectos y expansiones.',
    tag: 'Editar',
  },
  {
    href: '/admin/categorias-y-autores',
    title: 'Categorías y autores',
    description: 'Gestionar las categorías del blog/noticias y los perfiles de autores.',
    tag: 'Editar',
  },
]

export default function InstruccionesIndexPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary dark:text-blue-400">
          Documentación interna
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Instrucciones del sitio
        </h1>
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          Guías paso a paso para editar el contenido del sitio web de Grupo Nelson
          usando Sanity Studio.
        </p>
      </div>

      {/* Grid de guías */}
      <div className="grid gap-3 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group relative rounded-lg border border-border/60 bg-card p-4 transition-all duration-200 hover:border-border hover:shadow-sm dark:bg-card/50 dark:hover:bg-card/80"
          >
            <div className="mb-2">
              <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {section.tag}
              </span>
            </div>
            <h2 className="text-sm font-medium text-foreground group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              {section.title}
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {section.description}
            </p>
            <div className="mt-3 text-xs text-muted-foreground/50 group-hover:text-primary/60 dark:group-hover:text-blue-400/60 transition-colors">
              Leer guia &rarr;
            </div>
          </Link>
        ))}
      </div>

      {/* Nota */}
      <div className="flex gap-3 rounded-lg border border-amber-200/60 bg-amber-50/50 p-4 dark:border-amber-800/30 dark:bg-amber-950/20">
        <div className="mt-0.5 shrink-0">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-amber-600 dark:text-amber-400">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 5v3.5M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-xs leading-relaxed text-amber-800/80 dark:text-amber-200/70">
          Si necesitas hacer un cambio que no está cubierto en estas guías
          (por ejemplo, agregar un parque nuevo o modificar el mapa de terrenos), contacta a Luis.
        </p>
      </div>
    </div>
  )
}
