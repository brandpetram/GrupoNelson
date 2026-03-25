import {EarthGlobeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const terrenoType = defineType({
  name: 'terreno',
  title: 'Terreno',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'terrenoId',
      title: 'ID interno',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Identificador único (ej: n-l13, pn-ej-puebla-p72)',
    }),
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'empresa',
      title: 'Empresa propietaria',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'claveCatastral',
      title: 'Clave catastral',
      type: 'string',
    }),
    defineField({
      name: 'ubicacionCorta',
      title: 'Ubicación corta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'superficieM2',
      title: 'Superficie (m²)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'superficieSqftEdificio',
      title: 'Superficie edificio (sqft)',
      type: 'number',
      description: 'Solo si el terreno incluye un edificio existente',
    }),
    defineField({
      name: 'ubicacionLegal',
      title: 'Ubicación legal',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'servicios',
      title: 'Servicios',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ciudad',
      title: 'Ciudad',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          'Mexicali',
          'San Luis Río Colorado',
          'Ensenada',
          'San Luis Potosí',
        ],
      },
    }),
    defineField({
      name: 'dentroDeParque',
      title: 'Dentro de parque',
      type: 'string',
      description: 'Nombre del parque industrial si está dentro de uno',
    }),
    defineField({
      name: 'nota',
      title: 'Nota',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'ciudad',
      empresa: 'empresa',
    },
    prepare({title, subtitle, empresa}) {
      return {
        title: title || 'Sin nombre',
        subtitle: `${subtitle} — ${empresa}`,
      }
    },
  },
})
