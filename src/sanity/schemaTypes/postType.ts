import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    // Slug único (basado en español, es el identificador canónico de la URL)
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'title.es[0].value'},
      validation: (Rule) => Rule.required(),
    }),

    // Campos internacionalizados
    defineField({
      name: 'title',
      title: 'Título',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción / Extracto',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'internationalizedArrayBlockContent',
    }),

    // Campos no internacionalizados (son los mismos en todos los idiomas)
    defineField({
      name: 'authors',
      title: 'Autores',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'author'}})],
    }),
    defineField({
      name: 'image',
      title: 'Imagen de portada',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'authors.0.name',
      media: 'image',
    },
    prepare(selection) {
      const {title, author} = selection
      const esTitle = Array.isArray(title)
        ? title.find((t: {_key: string; value: string}) => t._key === 'es')?.value
        : undefined
      return {
        ...selection,
        title: esTitle || 'Sin título',
        subtitle: author ? `por ${author}` : undefined,
      }
    },
  },
})
