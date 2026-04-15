import {
  GuideHeader, SiteLink, Permissions, FieldsTable,
  Steps, Errors, VideoTutorial, Warning,
} from '../guide-components'

export const metadata = {
  title: 'Terrenos — Instrucciones',
  description: 'Cómo editar los terrenos disponibles en Sanity Studio.',
}

export default function TerrenosPage() {
  return (
    <div className="space-y-10">
      <GuideHeader
        tag="Editar"
        title="Terrenos"
        description="Administra el inventario de terrenos disponibles para desarrollo industrial."
      />

      <SiteLink url="nelson.com.mx/inventario/terrenos" />

      <Permissions
        can={[
          'Agregar terrenos nuevos (aparecen en la tabla)',
          'Editar datos: nombre, superficie, servicios, ciudad',
          'Cambiar la empresa propietaria',
          'Agregar notas',
          'Eliminar terrenos vendidos',
        ]}
        cannot={[
          'Agregar un terreno al mapa (requiere Luis)',
          'Mover o cambiar polígonos del mapa',
          'Agregar nuevas ciudades al menú',
        ]}
      />

      <Warning>
        <p>
          <strong>El mapa:</strong> La tabla de terrenos se alimenta de Sanity, pero el mapa interactivo
          con los polígonos usa un archivo separado que solo Luis puede modificar.
        </p>
        <p className="mt-2">
          <strong>Si agregas un terreno nuevo:</strong> aparecerá en la tabla pero NO en el mapa.
          Para que aparezca en el mapa, envía la ubicación exacta a Luis y él agregará el polígono.
        </p>
      </Warning>

      <FieldsTable
        fields={[
          { name: 'ID interno', required: true, description: 'Identificador único', example: 'n-l13' },
          { name: 'Nombre', required: true, description: 'Nombre descriptivo', example: 'Lote 13 - Nelson I' },
          { name: 'Empresa propietaria', required: true, description: 'Empresa que posee el terreno', example: 'Promotora Nelson' },
          { name: 'Clave catastral', required: false, description: 'Clave del registro', example: '002-145-012-001' },
          { name: 'Ubicación corta', required: true, description: 'Referencia rápida', example: 'Nelson I, Mexicali' },
          { name: 'Superficie (m²)', required: true, description: 'Área en metros cuadrados', example: '12500' },
          { name: 'Superficie edificio (sqft)', required: false, description: 'Solo si tiene edificio', example: '45000' },
          { name: 'Ubicación legal', required: true, description: 'Dirección legal completa', example: 'Blvd. Lázaro Cárdenas...' },
          { name: 'Servicios', required: true, description: 'Servicios disponibles', example: 'Agua, luz, drenaje, gas' },
          { name: 'Ciudad', required: true, description: 'Selecciona del menú', example: 'Mexicali' },
          { name: 'Dentro de parque', required: false, description: 'Si está en un parque industrial', example: 'Nelson I' },
          { name: 'Nota', required: false, description: 'Comentario adicional', example: 'Subdivisible' },
        ]}
      />

      <section className="space-y-2">
        <p className="text-xs text-muted-foreground">
          <strong className="text-foreground font-medium">Ciudades disponibles:</strong>{' '}
          Mexicali, San Luis Río Colorado, Ensenada, San Luis Potosí
        </p>
      </section>

      <Steps
        title="Agregar un terreno"
        steps={[
          <>Ve a <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">nelson.com.mx/studio</code> e inicia sesión</>,
          'En la barra lateral, haz clic en "Terreno"',
          'Haz clic en el botón "+" (crear)',
          'Llena los campos obligatorios: ID, nombre, empresa, ubicación corta, superficie, ubicación legal, servicios y ciudad',
          'Agrega la clave catastral si la tienes',
          'Si el terreno está dentro de un parque, indícalo en "Dentro de parque"',
          'Haz clic en "Publish"',
          'El terreno aparecerá en la tabla de la página pública',
          <>
            <strong>Para el mapa:</strong> envía la ubicación exacta a Luis
          </>,
        ]}
      />

      <Errors
        items={[
          {
            error: 'Terreno aparece en tabla pero no en mapa',
            fix: 'Esto es normal para terrenos nuevos. El mapa requiere que Luis agregue el polígono manualmente. Contacta a Luis con la ubicación exacta.',
          },
          {
            error: 'No puedo seleccionar mi ciudad',
            fix: 'Las ciudades disponibles son: Mexicali, San Luis Río Colorado, Ensenada y San Luis Potosí. Si necesitas otra, contacta a Luis.',
          },
          {
            error: 'Error de superficie negativa',
            fix: 'El campo de superficie solo acepta números positivos. Verifica que no hayas puesto un signo negativo.',
          },
        ]}
      />

      <VideoTutorial youtubeId="Em9QEpSF_vQ" title="Cómo agregar y editar terrenos en Sanity Studio" />
    </div>
  )
}
