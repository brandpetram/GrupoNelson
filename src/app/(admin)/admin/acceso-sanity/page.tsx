export const metadata = {
  title: 'Acceso a Sanity Studio — Instrucciones',
  description: 'Cómo acceder y navegar Sanity Studio para editar el contenido del sitio de Grupo Nelson.',
}

export default function AccesoSanityPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary dark:text-blue-400">
          Inicio
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Acceso a Sanity Studio
        </h1>
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          Sanity Studio es el panel de administración donde puedes editar todo el contenido
          del sitio web: naves, terrenos, parques, blog y noticias.
        </p>
      </div>

      {/* Qué es */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold tracking-tight">¿Qué es Sanity Studio?</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Es una interfaz web donde puedes crear, editar y eliminar contenido sin necesidad
          de tocar código. Los cambios que hagas aquí se reflejan automáticamente en el sitio público.
        </p>
      </section>

      {/* Cómo acceder */}
      <section className="space-y-4">
        <h2 className="text-base font-semibold tracking-tight">Cómo acceder</h2>
        <ol className="space-y-3">
          {[
            <>Abre tu navegador y ve a <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">nelson.com.mx/studio</code></>,
            'Inicia sesión con tu cuenta de Google o con el email que te proporcionó Luis.',
            'Una vez dentro, verás el panel principal con todas las secciones de contenido en la barra lateral izquierda.',
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary dark:bg-primary/15 dark:text-blue-400">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="rounded-lg border border-amber-200/50 bg-amber-50/50 p-4 dark:border-amber-900/30 dark:bg-amber-950/20">
          <p className="text-sm text-amber-900 dark:text-amber-200">
            <strong>¿No tienes cuenta?</strong> Si es tu primera vez accediendo a Sanity Studio,
            contacta a <a href="mailto:luis@brandpetram.com" className="underline underline-offset-2">luis@brandpetram.com</a> para
            que te cree una cuenta con los permisos necesarios.
          </p>
        </div>
      </section>

      {/* Navegación */}
      <section className="space-y-4">
        <h2 className="text-base font-semibold tracking-tight">Navegación del panel</h2>
        <p className="text-sm text-muted-foreground">
          En la barra lateral izquierda encontrarás los tipos de documento:
        </p>
        <div className="grid gap-2">
          {[
            { name: 'Nave Industrial', desc: 'Naves disponibles para renta/venta' },
            { name: 'Terreno', desc: 'Terrenos disponibles para desarrollo' },
            { name: 'Parque Industrial', desc: 'Fichas de los 5 parques' },
            { name: 'Post', desc: 'Artículos del blog' },
            { name: 'Noticia', desc: 'Noticias de la empresa' },
            { name: 'Category', desc: 'Categorías para organizar blog y noticias' },
            { name: 'Author', desc: 'Perfiles de autores' },
          ].map((item) => (
            <div key={item.name} className="flex items-baseline gap-2 text-sm">
              <span className="shrink-0 font-medium text-foreground">{item.name}</span>
              <span className="h-px flex-1 bg-border/50" />
              <span className="shrink-0 text-xs text-muted-foreground">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Acciones básicas */}
      <section className="space-y-4">
        <h2 className="text-base font-semibold tracking-tight">Acciones básicas</h2>

        <div className="space-y-4">
          {[
            {
              title: 'Crear un documento nuevo',
              steps: [
                'Haz clic en el tipo de documento en la barra lateral',
                'Haz clic en el ícono de "+" (crear nuevo) en la esquina superior',
                'Llena los campos requeridos (marcados con asterisco)',
                'Haz clic en "Publish" (Publicar) para que aparezca en el sitio',
              ],
            },
            {
              title: 'Editar un documento existente',
              steps: [
                'Haz clic en el tipo de documento en la barra lateral',
                'Selecciona el documento que quieres editar de la lista',
                'Modifica los campos que necesites',
                'Haz clic en "Publish" para guardar los cambios',
              ],
            },
            {
              title: 'Eliminar un documento',
              steps: [
                'Abre el documento que quieres eliminar',
                'Haz clic en el menú de tres puntos (\u2026) en la esquina superior derecha',
                'Selecciona "Delete" (Eliminar)',
                'Confirma la eliminación',
              ],
            },
          ].map((action) => (
            <div key={action.title} className="rounded-lg border border-border/60 p-4 dark:bg-card/30">
              <h3 className="text-sm font-medium">{action.title}</h3>
              <ol className="mt-2 space-y-1">
                {action.steps.map((step, i) => (
                  <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                    <span className="shrink-0 text-muted-foreground/40">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Publicar vs borrador */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold tracking-tight">Publicado vs. Borrador</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Cuando editas un documento, Sanity guarda automáticamente un <strong className="text-foreground font-medium">borrador</strong>.
          El borrador NO se ve en el sitio público hasta que hagas clic en &quot;Publish&quot;.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Puedes ver si un documento tiene cambios sin publicar porque aparecerá un punto
          amarillo o azul junto al nombre.
        </p>
      </section>

      {/* Errores comunes */}
      <section className="space-y-4">
        <h2 className="text-base font-semibold tracking-tight">Errores comunes</h2>
        <div className="space-y-3">
          {[
            {
              error: 'Olvidar publicar',
              fix: 'Si editas algo y no haces clic en "Publish", los cambios se quedan en borrador y no se ven en el sitio. Siempre verifica que el botón diga "Published" antes de cerrar.',
            },
            {
              error: 'No poder acceder',
              fix: 'Si no puedes entrar a /studio, verifica que estás usando la cuenta de email correcta. Si el problema persiste, contacta a Luis para que te agregue al proyecto.',
            },
          ].map((item) => (
            <div key={item.error} className="rounded-lg border border-red-200/50 bg-red-50/30 p-4 dark:border-red-900/30 dark:bg-red-950/10">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">{item.error}</p>
              <p className="mt-1 text-xs leading-relaxed text-red-600/80 dark:text-red-300/60">{item.fix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video tutorial */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold tracking-tight">Video tutorial</h2>
        <div className="overflow-hidden rounded-lg border border-border/60">
          <iframe
            src="https://www.youtube.com/embed/5RhNZ_kEbqc"
            title="Cómo abrir una cuenta en Sanity"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full"
          />
        </div>
      </section>
    </div>
  )
}
