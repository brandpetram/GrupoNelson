import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

// === Objetos reutilizables ===

const areaMeasure = defineType({
  name: 'areaMeasure',
  title: 'Medida de área',
  type: 'object',
  fields: [
    defineField({name: 'm2', title: 'm²', type: 'number', validation: (Rule) => Rule.positive()}),
    defineField({name: 'sqft', title: 'sqft', type: 'number'}),
  ],
})

const heightMeasure = defineType({
  name: 'heightMeasure',
  title: 'Medida de altura',
  type: 'object',
  fields: [
    defineField({name: 'm', title: 'metros', type: 'number'}),
    defineField({name: 'ft', title: 'pies', type: 'number'}),
  ],
})

const floorSpec = defineType({
  name: 'floorSpec',
  title: 'Piso',
  type: 'object',
  fields: [
    defineField({name: 'description', title: 'Descripción', type: 'string'}),
    defineField({name: 'joints', title: 'Juntas', type: 'string'}),
    defineField({name: 'finish', title: 'Acabado', type: 'string'}),
  ],
})

const roofSpec = defineType({
  name: 'roofSpec',
  title: 'Techo',
  type: 'object',
  fields: [
    defineField({name: 'material', title: 'Material', type: 'string'}),
    defineField({name: 'gauge', title: 'Calibre', type: 'number'}),
    defineField({name: 'insulation', title: 'Aislamiento', type: 'string'}),
    defineField({name: 'skylights', title: 'Tragaluces', type: 'boolean'}),
    defineField({name: 'rainwaterSystem', title: 'Sistema pluvial', type: 'boolean'}),
  ],
})

const wallSpec = defineType({
  name: 'wallSpec',
  title: 'Muros',
  type: 'object',
  fields: [
    defineField({name: 'material', title: 'Material', type: 'string'}),
    defineField({name: 'dimensions', title: 'Dimensiones', type: 'string'}),
    defineField({name: 'color', title: 'Color', type: 'string'}),
    defineField({name: 'windows', title: 'Ventanas', type: 'string'}),
  ],
})

const lightingSpec = defineType({
  name: 'lightingSpec',
  title: 'Iluminación',
  type: 'object',
  fields: [
    defineField({name: 'substation', title: 'Subestación', type: 'string'}),
    defineField({name: 'warehouseLighting', title: 'Iluminación nave', type: 'string'}),
    defineField({name: 'officeLighting', title: 'Iluminación oficinas', type: 'string'}),
    defineField({name: 'exteriorLighting', title: 'Iluminación exterior', type: 'string'}),
    defineField({name: 'additionalNotes', title: 'Notas adicionales', type: 'string'}),
  ],
})

const loadingArea = defineType({
  name: 'loadingAreaSpec',
  title: 'Área de carga',
  type: 'object',
  fields: [
    defineField({name: 'totalDocks', title: 'Andenes totales', type: 'number'}),
    defineField({name: 'docksWithLevelers', title: 'Andenes con nivelador', type: 'number'}),
    defineField({name: 'docksWithoutLevelers', title: 'Andenes sin nivelador', type: 'number'}),
    defineField({name: 'floorLevelDoors', title: 'Puertas a nivel de piso', type: 'number'}),
    defineField({name: 'railDoors', title: 'Puertas de riel', type: 'number'}),
    defineField({name: 'rollUpDoors', title: 'Puertas enrollables', type: 'number'}),
    defineField({name: 'description', title: 'Descripción', type: 'string'}),
  ],
})

const exteriorArea = defineType({
  name: 'exteriorAreaSpec',
  title: 'Área exterior',
  type: 'object',
  fields: [
    defineField({name: 'parkingSpaces', title: 'Cajones de estacionamiento', type: 'number'}),
    defineField({name: 'truckSpaces', title: 'Espacios de tráiler', type: 'number'}),
    defineField({name: 'maneuveringYard', title: 'Patio de maniobras', type: 'string'}),
    defineField({name: 'guardBooth', title: 'Caseta de vigilancia', type: 'boolean'}),
  ],
})

const fireProtection = defineType({
  name: 'fireProtectionSpec',
  title: 'Protección contra incendio',
  type: 'object',
  fields: [
    defineField({name: 'cabinets', title: 'Gabinetes', type: 'boolean'}),
    defineField({name: 'sprinklers', title: 'Rociadores', type: 'boolean'}),
    defineField({name: 'waterTank', title: 'Tanque de agua', type: 'boolean'}),
    defineField({name: 'complianceStandards', title: 'Normas', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'description', title: 'Descripción', type: 'string'}),
  ],
})

const buildingSubAreas = defineType({
  name: 'buildingSubAreas',
  title: 'Sub-áreas',
  type: 'object',
  fields: [
    defineField({name: 'warehouse', title: 'Nave', type: 'areaMeasure'}),
    defineField({name: 'offices', title: 'Oficinas', type: 'areaMeasure'}),
    defineField({name: 'mezzanine', title: 'Mezzanine', type: 'areaMeasure'}),
    defineField({name: 'bathrooms', title: 'Baños', type: 'areaMeasure'}),
    defineField({name: 'dockNorth', title: 'Andén norte', type: 'areaMeasure'}),
    defineField({name: 'dockSouth', title: 'Andén sur', type: 'areaMeasure'}),
  ],
})

const buildingType = defineType({
  name: 'building',
  title: 'Nave',
  type: 'object',
  fields: [
    defineField({name: 'buildingId', title: 'ID', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'name', title: 'Nombre', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'tenant', title: 'Inquilino', type: 'string'}),
    defineField({
      name: 'availability',
      title: 'Disponibilidad',
      type: 'object',
      fields: [
        defineField({name: 'status', title: 'Estado', type: 'string', options: {list: ['available', 'occupied', 'partial']}}),
        defineField({name: 'availableM2', title: 'm² disponibles', type: 'number'}),
        defineField({name: 'availableFrom', title: 'Disponible desde', type: 'string'}),
      ],
    }),
    // General data
    defineField({name: 'landArea', title: 'Terreno', type: 'areaMeasure'}),
    defineField({name: 'totalConstructionArea', title: 'Construcción total', type: 'areaMeasure'}),
    defineField({name: 'subAreas', title: 'Sub-áreas', type: 'buildingSubAreas'}),
    defineField({name: 'specificAddress', title: 'Dirección específica', type: 'string'}),
    // Structure
    defineField({
      name: 'structure',
      title: 'Estructura',
      type: 'object',
      fields: [
        defineField({name: 'type', title: 'Tipo', type: 'string'}),
        defineField({name: 'complianceCode', title: 'Código de cumplimiento', type: 'string'}),
        defineField({name: 'maxHeight', title: 'Altura máxima', type: 'heightMeasure'}),
        defineField({name: 'minHeight', title: 'Altura mínima', type: 'heightMeasure'}),
        defineField({name: 'clearHeight', title: 'Altura libre', type: 'heightMeasure'}),
        defineField({name: 'beamSpacing', title: 'Separación de vigas', type: 'string'}),
      ],
    }),
    // Construction specs
    defineField({name: 'floor', title: 'Piso', type: 'floorSpec'}),
    defineField({name: 'roof', title: 'Techo', type: 'roofSpec'}),
    defineField({name: 'walls', title: 'Muros', type: 'wallSpec'}),
    defineField({name: 'lighting', title: 'Iluminación', type: 'lightingSpec'}),
    defineField({name: 'bathroomsSpec', title: 'Baños', type: 'object', fields: [
      defineField({name: 'description', title: 'Descripción', type: 'string'}),
    ]}),
    // Loading, exterior, fire, HVAC
    defineField({name: 'loadingArea', title: 'Área de carga', type: 'loadingAreaSpec'}),
    defineField({name: 'exteriorArea', title: 'Área exterior', type: 'exteriorAreaSpec'}),
    defineField({name: 'fireProtection', title: 'Protección contra incendio', type: 'fireProtectionSpec'}),
    defineField({name: 'hvac', title: 'HVAC', type: 'object', fields: [
      defineField({name: 'description', title: 'Descripción', type: 'string'}),
    ]}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'tenant'},
    prepare({title, subtitle}) {
      return {title: title || 'Sin nombre', subtitle: subtitle || 'Sin inquilino'}
    },
  },
})

const galleryGroup = defineType({
  name: 'galleryGroup',
  title: 'Grupo de galería',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Etiqueta', type: 'string'}),
    defineField({name: 'images', title: 'Imágenes', type: 'array', of: [{type: 'string'}]}),
  ],
})

const tenantEntry = defineType({
  name: 'tenantEntry',
  title: 'Inquilino',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Nombre', type: 'string'}),
    defineField({name: 'logo', title: 'Logo (ruta)', type: 'string'}),
  ],
})

// === Documento principal ===

export const industrialParkType = defineType({
  name: 'industrialPark',
  title: 'Parque Industrial',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({name: 'slug', title: 'Slug (URL)', type: 'slug', validation: (Rule) => Rule.required()}),
    defineField({name: 'name', title: 'Nombre', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'shortName', title: 'Nombre corto', type: 'string'}),
    defineField({name: 'description', title: 'Descripción', type: 'text', rows: 3}),
    defineField({name: 'heroImage', title: 'Imagen hero (ruta)', type: 'string'}),
    defineField({name: 'since', title: 'Desde (año)', type: 'number'}),
    defineField({name: 'location', title: 'Ubicación', type: 'string'}),
    defineField({name: 'address', title: 'Dirección', type: 'string'}),
    defineField({name: 'landSizeHectares', title: 'Superficie (hectáreas)', type: 'number'}),
    defineField({name: 'availableBuildings', title: 'Naves disponibles', type: 'number'}),
    defineField({name: 'availableAreaM2', title: 'Área disponible (m²)', type: 'number'}),
    defineField({name: 'availableLandM2', title: 'Terreno disponible (m²)', type: 'number'}),
    defineField({name: 'immediateAvailability', title: 'Disponibilidad inmediata', type: 'boolean'}),
    defineField({name: 'immediateAvailabilityNote', title: 'Nota de disponibilidad', type: 'string'}),
    defineField({name: 'establishedCompanies', title: 'Empresas establecidas', type: 'number'}),
    defineField({name: 'totalBuildings', title: 'Total de naves', type: 'number'}),
    defineField({name: 'tenants', title: 'Inquilinos', type: 'array', of: [{type: 'tenantEntry'}]}),
    defineField({name: 'infrastructure', title: 'Infraestructura', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'hasSpecs', title: 'Tiene especificaciones', type: 'boolean'}),
    defineField({
      name: 'coordinates',
      title: 'Coordenadas',
      type: 'object',
      fields: [
        defineField({name: 'lat', title: 'Latitud', type: 'number'}),
        defineField({name: 'lng', title: 'Longitud', type: 'number'}),
      ],
    }),
    defineField({name: 'mapsUrl', title: 'URL Google Maps', type: 'url'}),
    defineField({name: 'gallery', title: 'Galería', type: 'array', of: [{type: 'galleryGroup'}]}),
    defineField({name: 'buildings', title: 'Naves', type: 'array', of: [{type: 'building'}]}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'location'},
  },
})

// Exportar todos los types auxiliares para registrarlos
export const parkSchemaTypes = [
  areaMeasure,
  heightMeasure,
  floorSpec,
  roofSpec,
  wallSpec,
  lightingSpec,
  loadingArea,
  exteriorArea,
  fireProtection,
  buildingSubAreas,
  buildingType,
  galleryGroup,
  tenantEntry,
  industrialParkType,
]
