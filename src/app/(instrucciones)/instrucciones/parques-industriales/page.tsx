import {
  GuideHeader, SiteLink, Permissions, FieldsTable,
  Steps, Errors, VideoPlaceholder, Warning, Danger,
} from '../guide-components'

export const metadata = {
  title: 'Parques industriales — Instrucciones',
  description: 'Cómo editar las fichas de parques industriales en Sanity Studio.',
}

export default function ParquesIndustrialesPage() {
  return (
    <div className="space-y-10">
      <GuideHeader
        tag="Editar"
        title="Parques industriales"
        description="Edita la información de los 4 parques industriales de Grupo Nelson."
      />

      <section className="space-y-3">
        <h2 className="text-base font-semibold tracking-tight">¿Dónde aparece en el sitio?</h2>
        <p className="text-sm text-muted-foreground mb-3">
          Cada parque tiene su ficha individual:
        </p>
        <div className="grid gap-1.5">
          {[
            'gruponelson.mx/parques-industriales-mexicali/nelson-i',
            'gruponelson.mx/parques-industriales-mexicali/nelson-ii',
            'gruponelson.mx/parques-industriales-mexicali/vigia-i',
            'gruponelson.mx/parques-industriales-mexicali/vigia-ii',
          ].map((url) => (
            <code key={url} className="block rounded bg-muted/60 px-2.5 py-1.5 text-[11px] font-mono text-muted-foreground">
              {url}
            </code>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          El índice general está en{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
            gruponelson.mx/parques-industriales-mexicali
          </code>
        </p>
      </section>

      <Permissions
        can={[
          'Editar datos generales (descripción, superficie, etc.)',
          'Actualizar número de naves disponibles',
          'Agregar/quitar inquilinos y sus logos',
          'Editar la lista de infraestructura',
          'Actualizar la galería de imágenes',
          'Editar especificaciones de naves individuales',
        ]}
        cannot={[
          'Crear un parque nuevo (genera link roto)',
          'Cambiar el slug/URL de un parque',
          'Modificar el diseño de la ficha',
        ]}
      />

      <Danger>
        <p>
          <strong>No crear parques nuevos.</strong> El sistema solo soporta los 4 parques existentes
          (Nelson I, Nelson II, Vigía I, Vigía II). Si creas un quinto parque en Sanity, aparecerá
          en el índice pero su link llevará a una página que no existe (error 404).
        </p>
        <p className="mt-2">
          Si se necesita agregar un parque nuevo, contacta a Luis — requiere crear la página en el código.
        </p>
      </Danger>

      <FieldsTable
        fields={[
          { name: 'Slug (URL)', required: true, description: 'NO modificar — es la URL del parque', example: 'nelson-i' },
          { name: 'Nombre', required: true, description: 'Nombre completo', example: 'Parque Industrial Nelson I' },
          { name: 'Nombre corto', required: false, description: 'Versión abreviada', example: 'Nelson I' },
          { name: 'Descripción', required: false, description: 'Texto de presentación', example: 'Primer parque industrial de...' },
          { name: 'Imagen hero (ruta)', required: false, description: 'Imagen principal', example: '/parks/nelson-i-hero.jpg' },
          { name: 'Desde (año)', required: false, description: 'Año de fundación', example: '1987' },
          { name: 'Ubicación', required: false, description: 'Ciudad o zona', example: 'Mexicali, B.C.' },
          { name: 'Dirección', required: false, description: 'Dirección completa', example: 'Blvd. Lázaro Cárdenas...' },
          { name: 'Superficie (hectáreas)', required: false, description: 'Extensión total', example: '27' },
          { name: 'Naves disponibles', required: false, description: 'Naves libres actuales', example: '3' },
          { name: 'Área disponible (m²)', required: false, description: 'Metros disponibles', example: '15000' },
          { name: 'Empresas establecidas', required: false, description: 'Empresas operando', example: '9' },
          { name: 'Total de naves', required: false, description: 'Naves totales', example: '12' },
          { name: 'Infraestructura', required: false, description: 'Lista de servicios', example: 'Agua, Luz, Gas natural...' },
          { name: 'URL Google Maps', required: false, description: 'Link al parque en Maps', example: 'https://maps.google.com/...' },
        ]}
      />

      {/* Inquilinos */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold tracking-tight">Inquilinos</h2>
        <p className="text-sm text-muted-foreground">
          La lista de inquilinos muestra los logos de las empresas que operan en el parque.
          Cada entrada tiene:
        </p>
        <div className="grid gap-1.5">
          {[
            { field: 'Nombre', desc: 'Nombre de la empresa' },
            { field: 'Logo (ruta)', desc: 'Ruta al archivo del logo' },
          ].map((item) => (
            <div key={item.field} className="flex items-baseline gap-2 text-sm">
              <span className="shrink-0 font-medium text-foreground">{item.field}</span>
              <span className="h-px flex-1 bg-border/50" />
              <span className="shrink-0 text-xs text-muted-foreground">{item.desc}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Para agregar un inquilino nuevo, pide a Luis que suba el logo y te dé la ruta.
        </p>
      </section>

      {/* Naves dentro del parque */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold tracking-tight">Naves dentro del parque</h2>
        <p className="text-sm text-muted-foreground">
          Cada parque tiene una lista de naves con especificaciones detalladas.
          Cada nave incluye:
        </p>
        <div className="grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
          {[
            'Datos generales (ID, nombre, inquilino)',
            'Disponibilidad y estado',
            'Áreas (terreno, construcción)',
            'Estructura (tipo, alturas)',
            'Piso, techo y muros',
            'Iluminación y eléctrico',
            'Área de carga (andenes)',
            'Área exterior y estacionamiento',
            'Protección contra incendio',
            'HVAC',
          ].map((item) => (
            <div key={item} className="flex gap-1.5 items-start">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/30" />
              {item}
            </div>
          ))}
        </div>
        <Warning>
          <p>
            Este es el documento más complejo de Sanity. Si tienes dudas sobre campos técnicos
            (separación de vigas, calibre del techo, etc.), consulta con el equipo de ingeniería
            antes de modificar.
          </p>
        </Warning>
      </section>

      <Steps
        title="Actualizar disponibilidad del parque"
        steps={[
          <>Ve a <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">gruponelson.mx/studio</code></>,
          'En la barra lateral, haz clic en "Parque Industrial"',
          'Selecciona el parque',
          'Modifica: "Naves disponibles", "Área disponible (m²)" o "Disponibilidad inmediata"',
          'Haz clic en "Publish"',
        ]}
      />

      <Errors
        items={[
          {
            error: 'Cambiar el slug',
            fix: 'NUNCA cambies el slug. Si lo cambias, la página del parque dejará de funcionar. Los slugs deben ser: nelson-i, nelson-ii, vigia-i, vigia-ii.',
          },
          {
            error: 'Crear un parque nuevo',
            fix: 'No crees parques nuevos. El índice mostrará el parque pero el link llevará a error 404. Contacta a Luis.',
          },
          {
            error: 'Datos técnicos incorrectos',
            fix: 'Las especificaciones son datos técnicos precisos. Verifica con ingeniería antes de modificar.',
          },
        ]}
      />

      <VideoPlaceholder description="Cómo editar la ficha de un parque industrial" />
    </div>
  )
}
