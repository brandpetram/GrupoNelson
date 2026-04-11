import {
  GuideHeader, SiteLink, Permissions, FieldsTable,
  Steps, Errors, VideoPlaceholder, Info,
} from '../guide-components'

export const metadata = {
  title: 'Noticias — Instrucciones',
  description: 'Cómo crear y editar noticias en Sanity Studio.',
}

export default function NoticiasPage() {
  return (
    <div className="space-y-10">
      <GuideHeader
        tag="Editar"
        title="Noticias"
        description="Publica noticias sobre nuevos proyectos, expansiones y eventos de Grupo Nelson."
      />

      <SiteLink url="gruponelson.mx/noticias" />

      <Info>
        <p>
          <strong>Blog vs. Noticias:</strong> El <strong>Blog</strong> es para artículos informativos
          y contenido educativo (ej: &quot;Ventajas de invertir en Mexicali&quot;). Las <strong>Noticias</strong> son
          para anuncios de la empresa (ej: &quot;Grupo Nelson inaugura nueva nave en Vigía II&quot;).
        </p>
        <p className="mt-2">
          Técnicamente funcionan igual — los mismos campos y proceso. La diferencia es editorial.
        </p>
      </Info>

      <Permissions
        can={[
          'Crear noticias nuevas',
          'Editar título, descripción y contenido',
          'Subir imágenes de portada',
          'Asignar categorías y autores',
          'Escribir en múltiples idiomas',
          'Eliminar noticias',
        ]}
        cannot={[
          'Cambiar el diseño de la página de noticias',
          'Modificar la paginación',
        ]}
      />

      <FieldsTable
        fields={[
          { name: 'Slug (URL)', required: true, description: 'Se genera del título en español', example: 'Clic en "Generate"' },
          { name: 'Título', required: true, description: 'Título de la noticia', example: 'GN inaugura nave de 10,000 m²' },
          { name: 'Descripción', required: false, description: 'Resumen corto (1-2 oraciones)', example: 'Grupo Nelson completó...' },
          { name: 'Contenido', required: false, description: 'Cuerpo completo (editor rico)', example: 'Texto con formato' },
          { name: 'Autores', required: false, description: 'Quién escribe', example: 'Susana López' },
          { name: 'Imagen de portada', required: false, description: 'Foto principal', example: 'foto-evento.jpg' },
          { name: 'Categoría', required: false, description: 'Clasificación', example: 'Expansiones' },
          { name: 'Fecha de publicación', required: false, description: 'Cuándo se publicó', example: '2026-04-10' },
        ]}
      />

      <Steps
        title="Publicar una noticia"
        steps={[
          <>Ve a <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">gruponelson.mx/studio</code></>,
          'En la barra lateral, haz clic en "Noticia" (no en "Post")',
          'Haz clic en "+" (crear)',
          'Escribe el título en español',
          'Haz clic en "Generate" para crear el slug',
          'Escribe descripción breve y contenido completo',
          'Sube una foto de portada',
          'Selecciona categoría y autor',
          'Establece la fecha de publicación',
          'Haz clic en "Publish"',
        ]}
      />

      <Errors
        items={[
          {
            error: 'Noticia no aparece en el listado',
            fix: 'Verifica que hayas publicado (no solo guardado como borrador) y que la fecha no sea futura.',
          },
          {
            error: 'Confusión entre Blog y Noticias',
            fix: 'Si publicaste como "Post" (blog), aparecerá en /blog, no en /noticias. Verifica que estés en "Noticia" en la barra lateral.',
          },
        ]}
      />

      <VideoPlaceholder description="Cómo publicar una noticia" />
    </div>
  )
}
