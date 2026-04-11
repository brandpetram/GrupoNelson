import {
  GuideHeader, SiteLink, Permissions, FieldsTable,
  Steps, Errors, VideoPlaceholder, Info,
} from '../guide-components'

export const metadata = {
  title: 'Blog — Instrucciones',
  description: 'Cómo crear y editar artículos del blog en Sanity Studio.',
}

export default function BlogPage() {
  return (
    <div className="space-y-10">
      <GuideHeader
        tag="Editar"
        title="Blog"
        description="Crea y edita artículos del blog de Grupo Nelson. El blog es multilingüe: español, inglés y chino."
      />

      <SiteLink url="gruponelson.mx/blog" />

      <Permissions
        can={[
          'Crear artículos nuevos',
          'Editar título, descripción y contenido',
          'Subir imágenes de portada',
          'Asignar categorías y autores',
          'Escribir en múltiples idiomas',
          'Eliminar artículos',
        ]}
        cannot={[
          'Cambiar el diseño del blog',
          'Modificar la paginación',
          'Cambiar los filtros de categoría',
        ]}
      />

      <Info>
        <p>
          <strong>Sobre los idiomas:</strong> Los campos de título, descripción y contenido son
          multilingüe. Verás pestañas para cada idioma: Español, English, 中文.
        </p>
        <p className="mt-2">
          <strong>Mínimo requerido:</strong> Siempre llena al menos español. Los demás son opcionales —
          si no los llenas, el sitio mostrará el contenido en español como respaldo.
        </p>
      </Info>

      <FieldsTable
        fields={[
          { name: 'Slug (URL)', required: true, description: 'Se genera del título en español', example: 'Clic en "Generate"' },
          { name: 'Título', required: true, description: 'Título del artículo (cada idioma)', example: 'Ventajas de invertir en...' },
          { name: 'Descripción', required: false, description: 'Resumen corto (1-2 oraciones)', example: 'Guía completa sobre...' },
          { name: 'Contenido', required: false, description: 'Cuerpo del artículo (editor rico)', example: 'Texto con formato' },
          { name: 'Autores', required: false, description: 'Selecciona de la lista', example: 'Susana López' },
          { name: 'Imagen de portada', required: false, description: 'Arrastra y suelta para subir', example: 'foto-articulo.jpg' },
          { name: 'Categoría', required: false, description: 'Selecciona una existente', example: 'Inmobiliario' },
          { name: 'Fecha de publicación', required: false, description: 'Ordena los artículos', example: '2026-04-10' },
        ]}
      />

      {/* Editor de contenido */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold tracking-tight">El editor de contenido</h2>
        <p className="text-sm text-muted-foreground">
          El campo &quot;Contenido&quot; es un editor de texto enriquecido:
        </p>
        <div className="grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
          {[
            'Negritas e itálicas',
            'Encabezados (H2, H3, H4)',
            'Listas con viñetas y numeradas',
            'Citas (blockquote)',
            'Imágenes (arrastrar y soltar)',
            'Tablas de datos',
          ].map((item) => (
            <div key={item} className="flex gap-1.5 items-start">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/30" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <Steps
        title="Crear un artículo nuevo"
        steps={[
          <>Ve a <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">gruponelson.mx/studio</code></>,
          'En la barra lateral, haz clic en "Post"',
          'Haz clic en "+" (crear)',
          'Escribe el título en español',
          'Haz clic en "Generate" junto al campo Slug',
          'Escribe la descripción (resumen corto)',
          'Escribe el contenido completo usando el editor',
          'Sube una imagen de portada (arrastra y suelta)',
          'Selecciona categoría y autor',
          'Establece la fecha de publicación',
          '(Opcional) Repite el contenido en inglés y/o chino',
          'Haz clic en "Publish"',
        ]}
      />

      <Errors
        items={[
          {
            error: 'Olvidar generar el slug',
            fix: 'Sin slug, el artículo no tendrá URL. Siempre haz clic en "Generate" después del título en español.',
          },
          {
            error: 'No aparece en el sitio',
            fix: 'Verifica: (1) hiciste "Publish", (2) el título en español está lleno, (3) la fecha no es futura.',
          },
          {
            error: 'Imagen de portada se ve cortada',
            fix: 'Usa el recorte (hotspot): haz clic en la imagen y ajusta el punto focal.',
          },
          {
            error: 'No puedo seleccionar un autor',
            fix: 'El autor debe existir previamente. Ve a la guía de "Categorías y autores" para crear uno.',
          },
        ]}
      />

      <VideoPlaceholder description="Cómo crear un artículo de blog paso a paso" />
    </div>
  )
}
