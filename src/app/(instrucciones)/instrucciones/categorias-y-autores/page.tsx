import {
  GuideHeader, FieldsTable, Steps, Errors, VideoPlaceholder,
} from '../guide-components'

export const metadata = {
  title: 'Categorías y autores — Instrucciones',
  description: 'Cómo gestionar categorías y autores en Sanity Studio.',
}

export default function CategoriasYAutoresPage() {
  return (
    <div className="space-y-10">
      <GuideHeader
        tag="Editar"
        title="Categorías y autores"
        description="Gestiona las categorías para organizar el blog y noticias, y los perfiles de autores."
      />

      {/* Qué es */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold tracking-tight">¿Para qué sirven?</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Las <strong className="text-foreground font-medium">categorías</strong> clasifican artículos
          del blog y noticias (ej: &quot;Inmobiliario&quot;, &quot;Construcción&quot;). Los visitantes pueden filtrar por categoría.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Los <strong className="text-foreground font-medium">autores</strong> son los perfiles de
          quienes escriben el contenido. Aparecen en la firma de cada artículo.
        </p>
      </section>

      {/* === CATEGORÍAS === */}
      <div className="border-t border-border/40 pt-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary dark:text-blue-400">
          Sección 1
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight">Categorías</h2>
      </div>

      <FieldsTable
        fields={[
          { name: 'Título', required: false, description: 'Nombre de la categoría', example: 'Inmobiliario' },
          { name: 'Slug', required: false, description: 'URL amigable (se genera del título)', example: 'inmobiliario' },
          { name: 'Descripción', required: false, description: 'Breve descripción', example: 'Artículos sobre mercado inmobiliario' },
        ]}
      />

      <Steps
        title="Crear una categoría"
        steps={[
          <>Ve a <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">gruponelson.mx/studio</code></>,
          'En la barra lateral, haz clic en "Category"',
          'Haz clic en "+" (crear)',
          'Escribe el título',
          'Haz clic en "Generate" para crear el slug',
          '(Opcional) Agrega una descripción',
          'Haz clic en "Publish"',
        ]}
      />

      {/* === AUTORES === */}
      <div className="border-t border-border/40 pt-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary dark:text-blue-400">
          Sección 2
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight">Autores</h2>
      </div>

      <FieldsTable
        fields={[
          { name: 'Nombre', required: false, description: 'Nombre completo del autor', example: 'Susana López' },
          { name: 'Slug', required: false, description: 'URL amigable (se genera del nombre)', example: 'susana-lopez' },
          { name: 'Imagen', required: false, description: 'Foto de perfil (arrastra y suelta)', example: 'foto-perfil.jpg' },
          { name: 'Bio', required: false, description: 'Breve biografía profesional', example: 'Directora de marketing...' },
        ]}
      />

      <Steps
        title="Crear un autor"
        steps={[
          <>Ve a <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">gruponelson.mx/studio</code></>,
          'En la barra lateral, haz clic en "Author"',
          'Haz clic en "+" (crear)',
          'Escribe el nombre',
          'Haz clic en "Generate" para crear el slug',
          'Sube una foto de perfil (arrastra y suelta)',
          '(Opcional) Escribe una bio corta',
          'Haz clic en "Publish"',
        ]}
      />

      <Errors
        items={[
          {
            error: 'Autor no aparece en la lista al crear un artículo',
            fix: 'El autor debe estar publicado (no en borrador) para aparecer en la selección.',
          },
          {
            error: 'Categoría duplicada',
            fix: 'Antes de crear una nueva, revisa que no exista una similar. Las categorías se comparten entre Blog y Noticias.',
          },
          {
            error: 'Eliminar categoría con artículos asignados',
            fix: 'Si eliminas una categoría, los artículos que la usan perderán su categoría. Reasigna primero.',
          },
        ]}
      />

      <VideoPlaceholder description="Cómo gestionar categorías y autores" />
    </div>
  )
}
