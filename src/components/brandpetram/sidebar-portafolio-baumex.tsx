'use client'

interface SidebarPortafolioBaumexProps {
  totalProyectos: number
  totalM2: number
  lang?: 'en' | 'es'
}

export function SidebarPortafolioBaumex({
  totalProyectos,
  totalM2,
  lang = 'es',
}: SidebarPortafolioBaumexProps) {
  return (
    <div data-component="SidebarPortafolioBaumex" data-component-file="src/components/brandpetram/sidebar-portafolio-baumex.tsx" data-component-props="true"
      className="sticky self-start hidden lg:block lg:col-span-3"
      style={{ top: '120px' }}
    >
      <div className="p-6 text-muted-foreground text-base space-y-10">
        {/* Trayectoria */}
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-4 leading-none">
            Baumex Constructora
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground/80">
            {lang === 'en'
              ? 'Since 1997, Baumex has set the standard for industrial construction in northwestern Mexico, delivering turnkey solutions for global leaders.'
              : 'Desde 1997, Baumex ha definido el estándar de construcción industrial en el noroeste de México, entregando soluciones llave en mano para líderes globales.'}
          </p>
        </div>

        {/* Métricas */}
        <div className="space-y-6">
          <div>
            <div className="text-3xl font-bold text-primary">{totalProyectos}</div>
            <div className="text-sm font-medium text-foreground mt-1 uppercase tracking-wider">{lang === 'en' ? 'Completed Projects' : 'Proyectos Entregados'}</div>
            <div className="h-0.5 w-10 bg-primary/20 mt-3" />
          </div>

          <div>
            <div className="text-3xl font-bold text-primary">+{totalM2.toLocaleString(lang === 'en' ? 'en-US' : 'es-MX')} m²</div>
            <div className="text-sm font-medium text-foreground mt-1 uppercase tracking-wider">{lang === 'en' ? 'Total Area' : 'Superficie Total'}</div>
            <div className="h-0.5 w-10 bg-primary/20 mt-3" />
          </div>

          <div>
            <div className="text-3xl font-bold text-primary">28</div>
            <div className="text-sm font-medium text-foreground mt-1 uppercase tracking-wider">{lang === 'en' ? 'Years of Experience' : 'Años de Trayectoria'}</div>
            <div className="h-0.5 w-10 bg-primary/20 mt-3" />
          </div>
        </div>

        {/* Ubicaciones */}
        <div className="pt-6 border-t border-border">
          <h4 className="font-semibold text-foreground text-sm uppercase tracking-widest mb-4">{lang === 'en' ? 'Geographic Reach' : 'Alcance Geográfico'}</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              Baja California
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              Sonora
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              Jalisco
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              San Luis Potosí
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
