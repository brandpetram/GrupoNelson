# Plan: Agente de tablas con data en posts del blog

## Objetivo

Crear un agente que lea posts del blog, investigue datos relevantes al tema, y genere tablas informativas que se insertan automáticamente en el contenido del post vía Sanity API.

## Problema que resuelve

Los posts del blog son texto corrido. Una tabla con datos duros (comparativas, métricas, estadísticas) le da más valor al lector, mejora el SEO y aumenta el tiempo de permanencia en la página. Hacerlo manualmente para 30+ posts no es viable.

## Arquitectura del body en Sanity (contexto crítico)

El campo `body` del post **no es un array plano de bloques**. Usa `internationalizedArrayBlockContent` del plugin `sanity-plugin-internationalized-array`. La estructura real es:

```json
{
  "body": [
    {
      "_key": "es",
      "_type": "internationalizedArrayBlockContentValue",
      "value": [
        { "_type": "block", "_key": "abc123", "children": [...] },
        { "_type": "block", "_key": "def456", "children": [...] },
        { "_type": "image", "_key": "img789", ... }
      ]
    },
    {
      "_key": "en",
      "_type": "internationalizedArrayBlockContentValue",
      "value": [...]
    }
  ]
}
```

Los bloques de contenido viven dentro de `body[_key == "es"].value`, no directamente en `body`. Toda inserción debe apuntar a esa ruta.

**Idiomas soportados:** español (es) e inglés (en). Sin chino.

## Prerrequisito: Schema de tabla en Sanity

### Paso 1 — Definir el tipo `dataTable`

Crear un nuevo schema type en `src/sanity/schemaTypes/dataTableType.ts`:

```ts
import { defineType } from 'sanity'

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
      of: [{ type: 'string' }],
    },
    {
      name: 'rows',
      title: 'Filas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'cells',
              title: 'Celdas',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },
  ],
})
```

### Paso 2 — Registrar en `blockContentType.ts`

El body del post usa `internationalizedArrayBlockContent`, que internamente referencia al tipo `blockContent`. Por lo tanto, `dataTable` se registra como miembro del array en `blockContentType.ts`, **no en postType.ts**:

```ts
// src/sanity/schemaTypes/blockContentType.ts
// Agregar al array `of`:
defineArrayMember({
  type: 'dataTable',
}),
```

Esto hace que `dataTable` esté disponible como bloque insertable dentro del editor de Portable Text para todos los idiomas automáticamente.

### Paso 3 — Registrar el tipo en el schema index

Agregar `dataTableType` al array de tipos en `src/sanity/schemaTypes/index.ts` para que Sanity lo reconozca.

### Paso 4 — Deploy del schema

```bash
pnpm sanity schema deploy
```

### Paso 5 — Componente frontend para Portable Text

Registrar un componente React que renderice el bloque `dataTable` en el serializer de `<PortableText />`:

```tsx
const components = {
  types: {
    dataTable: ({ value }) => (
      <figure className="my-8">
        {value.title && <figcaption className="text-sm font-semibold mb-2">{value.title}</figcaption>}
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {value.columns.map((col, i) => (
                <th key={i} className="border-b px-4 py-2 text-left font-medium">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {value.rows.map((row, i) => (
              <tr key={i} className="border-b last:border-0">
                {row.cells.map((cell, j) => (
                  <td key={j} className="px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {value.source && <span className="text-xs text-muted-foreground mt-1 block">Fuente: {value.source}</span>}
      </figure>
    ),
  },
}
```

## El agente

### Flujo

```
1. Lee el post de Sanity (GROQ: título, descripción, body completo incluyendo la estructura internacionalizada)
2. Analiza el tema y decide qué tipo de datos serían valiosos
   - Comparativas (ej: México vs China en costos de manufactura)
   - Métricas (ej: tasas de renta por metro cuadrado por zona)
   - Estadísticas (ej: crecimiento de IED por año)
   - Timelines (ej: fases de un proceso de construcción)
3. Investiga — deep research, web search, fuentes oficiales
4. Genera la tabla: título, fuente, columnas, filas
5. Decide dónde insertarla dentro de body[_key == "es"].value
6. Patchea el post en Sanity insertando el bloque dataTable en la posición correcta
```

### Inserción en el body (estructura real)

El agente debe insertar dentro del locale correspondiente. La ruta de inserción es `body[_key == "es"].value`, no `body` directamente.

Ejemplo de mutación para insertar después del tercer bloque del locale español:

```json
{
  "mutations": [{
    "patch": {
      "id": "post-id",
      "insert": {
        "after": "body[_key == \"es\"].value[2]",
        "items": [{
          "_type": "dataTable",
          "_key": "tabla-unique-key",
          "title": "Comparativa de costos: México vs China",
          "source": "Cushman & Wakefield 2025",
          "columns": ["Concepto", "México", "China"],
          "rows": [
            { "_key": "r1", "cells": ["Renta/m²/mes", "$4.50 USD", "$6.80 USD"] },
            { "_key": "r2", "cells": ["Mano de obra/hora", "$4.15 USD", "$6.50 USD"] }
          ]
        }]
      }
    }
  }]
}
```

### Estrategia de idiomas

- **Español (es):** El agente siempre inserta la tabla en el locale `es`, que es el idioma principal y el que tienen todos los posts.
- **Inglés (en):** Si el post tiene locale `en`, el agente genera una versión traducida de la misma tabla y la inserta en `body[_key == "en"].value` en la misma posición relativa.
- **Detección:** Antes de insertar, el agente verifica qué locales existen en el body del post (`body[]._key`) y solo escribe en los que están presentes.
- **Si solo existe `es`:** Se inserta solo en español. Cuando eventualmente se traduzca el post, la tabla se traduce junto con el contenido.

### Comportamiento con posts sin tabla

Posts que no tengan un bloque `dataTable` en su body simplemente no muestran nada. No hay error, no hay espacio vacío. El componente solo se renderiza cuando existe el bloque.

## Orden de ejecución

1. **Schema type** — Crear `dataTableType.ts` y registrarlo en el index de schemas
2. **blockContentType** — Agregar `dataTable` como miembro del array en `blockContentType.ts`
3. **Deploy schema** — `pnpm sanity schema deploy`
4. **Frontend** — Agregar el componente al serializer de Portable Text
5. **Prueba manual** — Insertar una tabla en un post vía API para validar que se renderiza
6. **Agente** — Crear el agente que automatiza el flujo completo
7. **Lote** — Correr el agente sobre los 30 posts existentes

## Notas

- Cada tabla debe citar su fuente. Datos sin fuente no se insertan.
- El agente no modifica el texto del post, solo inserta bloques adicionales.
- Si un post ya tiene una tabla, el agente no inserta otra (a menos que se pida).
- Las tablas se pueden editar después desde el studio de Sanity como cualquier otro contenido.
- La inserción siempre apunta a `body[_key == "LOCALE"].value[N]`, nunca a `body[N]` directamente.
