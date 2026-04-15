import {
  GuideHeader, SiteLink, Permissions, FieldsTable,
  Steps, Errors, VideoTutorial, Warning,
} from '../guide-components'

export const metadata = {
  title: 'Naves industriales — Instrucciones',
  description: 'Cómo editar las naves industriales disponibles en Sanity Studio.',
}

export default function NavesIndustrialesPage() {
  return (
    <div className="space-y-10">
      <GuideHeader
        tag="Editar"
        title="Naves industriales"
        description="Administra el inventario de naves industriales disponibles para renta o venta."
      />

      <SiteLink url="nelson.com.mx/inventario/naves-disponibles" />

      <Permissions
        can={[
          'Agregar naves nuevas',
          'Cambiar el estatus (Disponible, Ocupada, En construcción)',
          'Editar especificaciones (superficie, altura, andenes, etc.)',
          'Agregar o quitar imágenes',
          'Eliminar naves que ya no existen',
        ]}
        cannot={[
          'Cambiar el diseño de la tabla',
          'Modificar los filtros disponibles',
          'Cambiar las opciones de estatus (son fijas)',
        ]}
      />

      <Warning>
        <p>
          <strong>Imágenes:</strong> Las imágenes de naves se guardan como rutas de texto
          (no se suben directamente a Sanity). Para agregar una imagen nueva, pide a Luis
          que la suba al servidor y te dé la ruta. Luego escribe esa ruta en el campo &quot;Imágenes&quot;.
        </p>
      </Warning>

      <FieldsTable
        fields={[
          { name: 'ID interno', required: true, description: 'Identificador único de la nave', example: 'N1-B3' },
          { name: 'Nombre', required: true, description: 'Nombre de la nave', example: 'Nave 3 - Nelson I' },
          { name: 'Parque', required: true, description: 'Parque donde está ubicada', example: 'Nelson I' },
          { name: 'Estatus', required: true, description: 'Selecciona del menú', example: 'Disponible' },
          { name: 'Ubicación', required: false, description: 'Dirección o referencia', example: 'Blvd. Lázaro Cárdenas 1850' },
          { name: 'Superficie (ft²)', required: false, description: 'Pies cuadrados', example: '54000' },
          { name: 'Superficie (m²)', required: false, description: 'Metros cuadrados', example: '5017' },
          { name: 'Terreno', required: false, description: 'Superficie del terreno', example: '8,500 m²' },
          { name: 'Altura libre (ft)', required: false, description: 'Altura libre en pies', example: '28' },
          { name: 'Altura máxima (m)', required: false, description: 'Altura máxima en metros', example: '9.5' },
          { name: 'Andenes', required: false, description: 'Número de andenes', example: '4' },
          { name: 'Detalle andenes', required: false, description: 'Tipo de andenes', example: '2 con nivelador, 2 sin' },
          { name: 'Estacionamiento', required: false, description: 'Número de cajones', example: '30' },
          { name: 'Patio de maniobras', required: false, description: 'Descripción del patio', example: '130 ft de profundidad' },
          { name: 'Piso', required: false, description: 'Tipo de piso', example: 'Concreto armado 6"' },
          { name: 'Techo', required: false, description: 'Material del techo', example: 'Lámina galvanizada cal. 26' },
          { name: 'Paredes', required: false, description: 'Material de paredes', example: 'Tilt-up de concreto' },
          { name: 'Iluminación', required: false, description: 'Tipo de iluminación', example: 'LED high bay' },
          { name: 'Subestación', required: false, description: 'Capacidad eléctrica', example: '500 KVA' },
          { name: 'HVAC', required: false, description: '¿Tiene aire acondicionado?', example: 'Sí / No' },
          { name: 'Sprinklers', required: false, description: '¿Sistema contra incendio?', example: 'Sí / No' },
          { name: 'Nota', required: false, description: 'Comentario adicional', example: 'Disponible Q2 2026' },
          { name: 'Imágenes (rutas)', required: false, description: 'Lista de rutas a fotos', example: '/naves/n1-b3-01.jpg' },
          { name: 'Descripción corta', required: false, description: 'Resumen para la tarjeta', example: 'Nave clase A con sprinklers' },
          { name: 'Características', required: false, description: 'Lista destacada', example: 'HVAC, Sprinklers, LED' },
          { name: 'Aplicaciones', required: false, description: 'Usos recomendados', example: 'Manufactura, Almacén' },
        ]}
      />

      <Steps
        title="Cambiar estatus de una nave"
        steps={[
          <>Ve a <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">nelson.com.mx/studio</code> e inicia sesión</>,
          'En la barra lateral izquierda, haz clic en "Nave Industrial"',
          'Busca la nave en la lista (puedes usar el buscador)',
          'Haz clic en la nave para abrirla',
          'Busca el campo "Estatus" y selecciona la nueva opción del menú',
          'Haz clic en "Publish"',
          'Verifica en el sitio público que el cambio se refleja',
        ]}
      />

      <Steps
        title="Agregar una nave nueva"
        steps={[
          'En la barra lateral, haz clic en "Nave Industrial"',
          'Haz clic en el botón "+" (crear)',
          'Llena los campos obligatorios: ID interno, Nombre, Parque y Estatus',
          'Llena los demás campos con las especificaciones',
          'Haz clic en "Publish"',
          <>La nave aparecerá en <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">nelson.com.mx/inventario/naves-disponibles</code></>,
        ]}
      />

      <Errors
        items={[
          {
            error: 'Nave no aparece en el sitio',
            fix: 'Verifica que el estatus sea "Disponible". Solo las naves con ese estatus se muestran en la página pública.',
          },
          {
            error: 'Error al publicar',
            fix: 'Revisa que los campos obligatorios (ID, Nombre, Parque, Estatus) estén llenos.',
          },
          {
            error: 'Imágenes no se ven',
            fix: 'Las rutas deben ser exactas y empezar con "/". Si la imagen no existe en el servidor, se verá un espacio vacío.',
          },
        ]}
      />

      <VideoTutorial youtubeId="kcvkU5Fr25k" title="Cómo agregar y editar naves en Sanity Studio" />
    </div>
  )
}
