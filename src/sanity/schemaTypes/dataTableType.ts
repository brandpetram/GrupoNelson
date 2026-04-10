import {defineType, defineArrayMember} from 'sanity'

export const dataTableType = defineType({
  name: 'dataTable',
  title: 'Tabla de datos',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Título de la tabla',
      type: 'string',
    },
    {
      name: 'source',
      title: 'Fuente de los datos',
      type: 'string',
      description: 'Ej: "INEGI 2025", "Cushman & Wakefield Q4 2025"',
    },
    {
      name: 'columns',
      title: 'Columnas',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    },
    {
      name: 'rows',
      title: 'Filas',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {
              name: 'cells',
              title: 'Celdas',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            },
          ],
        }),
      ],
    },
  ],
})
