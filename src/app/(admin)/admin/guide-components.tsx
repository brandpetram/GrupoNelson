import type { ReactNode } from 'react'

export function GuideHeader({
  tag,
  title,
  description,
}: {
  tag: string
  title: string
  description: string
}) {
  return (
    <div className="space-y-3">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-primary dark:text-blue-400">
        {tag}
      </p>
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
      <p className="text-[15px] leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

export function SiteLink({ url }: { url: string }) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-semibold tracking-tight">¿Dónde aparece en el sitio?</h2>
      <p className="text-sm text-muted-foreground">
        Esta sección es visible en{' '}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">{url}</code>
      </p>
    </section>
  )
}

export function Permissions({
  can,
  cannot,
}: {
  can: string[]
  cannot: string[]
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-semibold tracking-tight">¿Qué puedes hacer?</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-emerald-200/50 bg-emerald-50/30 p-4 dark:border-emerald-900/30 dark:bg-emerald-950/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Sí puedes
          </p>
          <ul className="mt-2 space-y-1.5">
            {can.map((item) => (
              <li key={item} className="flex gap-2 text-xs leading-relaxed text-emerald-700/80 dark:text-emerald-300/70">
                <span className="shrink-0 text-emerald-500 dark:text-emerald-400">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-red-200/50 bg-red-50/30 p-4 dark:border-red-900/30 dark:bg-red-950/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-700 dark:text-red-400">
            No puedes
          </p>
          <ul className="mt-2 space-y-1.5">
            {cannot.map((item) => (
              <li key={item} className="flex gap-2 text-xs leading-relaxed text-red-600/80 dark:text-red-300/60">
                <span className="shrink-0 text-red-400 dark:text-red-500">&minus;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function FieldsTable({
  fields,
}: {
  fields: { name: string; required?: boolean; description: string; example: string }[]
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-base font-semibold tracking-tight">Campos del documento</h2>
      <div className="overflow-x-auto rounded-lg border border-border/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/30 dark:bg-muted/10">
              <th className="py-2.5 pl-4 pr-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Campo
              </th>
              <th className="py-2.5 px-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Descripción
              </th>
              <th className="py-2.5 pl-3 pr-4 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Ejemplo
              </th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, i) => (
              <tr key={field.name} className={i < fields.length - 1 ? 'border-b border-border/40' : ''}>
                <td className="py-2 pl-4 pr-3 text-xs font-medium text-foreground whitespace-nowrap">
                  {field.name}
                  {field.required && <span className="ml-0.5 text-primary dark:text-blue-400">*</span>}
                </td>
                <td className="py-2 px-3 text-xs text-muted-foreground">{field.description}</td>
                <td className="py-2 pl-3 pr-4">
                  <code className="rounded bg-muted/60 px-1.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                    {field.example}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-muted-foreground/60">
        <span className="text-primary dark:text-blue-400">*</span> Campos obligatorios
      </p>
    </section>
  )
}

export function Steps({
  title,
  steps,
}: {
  title: string
  steps: (string | ReactNode)[]
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-base font-semibold tracking-tight">{title}</h2>
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary dark:bg-primary/15 dark:text-blue-400">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Errors({
  items,
}: {
  items: { error: string; fix: string }[]
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-base font-semibold tracking-tight">Errores comunes</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.error} className="rounded-lg border border-red-200/50 bg-red-50/30 p-4 dark:border-red-900/30 dark:bg-red-950/10">
            <p className="text-sm font-medium text-red-700 dark:text-red-400">{item.error}</p>
            <p className="mt-1 text-xs leading-relaxed text-red-600/80 dark:text-red-300/60">{item.fix}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function VideoPlaceholder({ description }: { description: string }) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-semibold tracking-tight">Video tutorial</h2>
      <div className="flex items-center justify-center rounded-lg border border-dashed border-border/60 bg-muted/20 py-16">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground/50">
              <path d="M6 3.5v9l7-4.5-7-4.5z" />
            </svg>
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground/50">
            Luis grabará este video próximamente
          </p>
        </div>
      </div>
    </section>
  )
}

export function Warning({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-lg border border-amber-200/60 bg-amber-50/50 p-4 dark:border-amber-800/30 dark:bg-amber-950/20">
      <div className="mt-0.5 shrink-0">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-amber-600 dark:text-amber-400">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 5v3.5M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="text-xs leading-relaxed text-amber-800/80 dark:text-amber-200/70">
        {children}
      </div>
    </div>
  )
}

export function Danger({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-lg border border-red-200/60 bg-red-50/50 p-4 dark:border-red-800/30 dark:bg-red-950/20">
      <div className="mt-0.5 shrink-0">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-red-600 dark:text-red-400">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 5v3.5M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="text-xs leading-relaxed text-red-800/80 dark:text-red-200/70">
        {children}
      </div>
    </div>
  )
}

export function Info({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-lg border border-blue-200/60 bg-blue-50/50 p-4 dark:border-blue-800/30 dark:bg-blue-950/20">
      <div className="mt-0.5 shrink-0">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-blue-600 dark:text-blue-400">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="text-xs leading-relaxed text-blue-800/80 dark:text-blue-200/70">
        {children}
      </div>
    </div>
  )
}
