import {ArchiveIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const naveIndustrialType = defineType({
  name: 'naveIndustrial',
  title: 'Nave Industrial',
  type: 'document',
  icon: ArchiveIcon,
  fields: [
    defineField({name: 'naveId', title: 'ID interno', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'nave', title: 'Nombre', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'parque', title: 'Parque', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'ubicacion', title: 'Ubicación', type: 'string'}),
    defineField({name: 'superficieFt2', title: 'Superficie (ft²)', type: 'number'}),
    defineField({name: 'superficieM2', title: 'Superficie (m²)', type: 'number'}),
    defineField({name: 'terreno', title: 'Terreno', type: 'string'}),
    defineField({name: 'clearHeightFt', title: 'Altura libre (ft)', type: 'number'}),
    defineField({name: 'alturaMaxM', title: 'Altura máxima (m)', type: 'number'}),
    defineField({name: 'docks', title: 'Andenes', type: 'number'}),
    defineField({name: 'docksDetalle', title: 'Detalle andenes', type: 'string'}),
    defineField({name: 'estacionamiento', title: 'Estacionamiento (cajones)', type: 'number'}),
    defineField({name: 'patioManiobras', title: 'Patio de maniobras', type: 'string'}),
    defineField({name: 'piso', title: 'Piso', type: 'string'}),
    defineField({name: 'techo', title: 'Techo', type: 'string'}),
    defineField({name: 'paredes', title: 'Paredes', type: 'string'}),
    defineField({name: 'iluminacion', title: 'Iluminación', type: 'string'}),
    defineField({name: 'subestacion', title: 'Subestación', type: 'string'}),
    defineField({name: 'hvac', title: 'HVAC', type: 'boolean'}),
    defineField({name: 'sprinklers', title: 'Sprinklers', type: 'boolean'}),
    defineField({
      name: 'estatus',
      title: 'Estatus',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {list: ['Disponible', 'Ocupada', 'En construcción']},
    }),
    defineField({name: 'nota', title: 'Nota', type: 'text', rows: 2}),
    defineField({name: 'images', title: 'Imágenes (rutas)', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'shortDescription', title: 'Descripción corta', type: 'string'}),
    defineField({name: 'features', title: 'Características', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'applications', title: 'Aplicaciones', type: 'array', of: [{type: 'string'}]}),
  ],
  preview: {
    select: {title: 'nave', subtitle: 'estatus', parque: 'parque'},
    prepare({title, subtitle, parque}) {
      return {title: title || 'Sin nombre', subtitle: `${subtitle} — ${parque}`}
    },
  },
})
