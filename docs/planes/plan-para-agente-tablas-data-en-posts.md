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
      <figure className="my-8 not-prose">
        {value.title && <figcaption className="text-sm font-semibold mb-2">{value.title}</figcaption>}
        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-[480px] w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted/50">
                {value.columns.map((col, i) => (
                  <th key={i} className="border-b px-4 py-2.5 text-left font-medium whitespace-nowrap">{col}</th>
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
        </div>
        {value.source && <span className="text-xs text-muted-foreground mt-2 block">Fuente: {value.source}</span>}
      </figure>
    ),
  },
}
```

**Notas de responsive:** `not-prose` saca la tabla del estilo prose del contenedor. `overflow-x-auto` permite scroll horizontal en móvil. `min-w-[480px]` evita que las columnas se aplasten. El `div` wrapper con `rounded-lg border` contiene el overflow visualmente.

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
- **Inglés (en):** Si el post tiene locale `en`, el agente genera una versión traducida de la tabla. **No se usa la misma posición por índice** porque la traducción puede tener diferente número de bloques. En su lugar, el agente busca el punto de inserción por contenido semántico en cada locale:
  1. Buscar el primer H2 después de la introducción y colocar la tabla antes de ese heading.
  2. Si no hay H2 claro, hacer append antes del último bloque (antes de la conclusión).
  3. Si la estructura es ambigua, hacer append al final del `value` array.
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

## Idempotencia y control operativo

### Identificación de tablas del agente

Todas las tablas generadas por el agente llevan un `_key` con prefijo `agent-table-`. Ejemplo: `agent-table-costos-mx-cn`. Esto permite distinguirlas de tablas insertadas manualmente desde el studio (que tendrán keys aleatorios generados por Sanity).

### Detección de duplicados

Antes de insertar, el agente:
1. Lee el `value` array del locale objetivo
2. Filtra bloques donde `_type == "dataTable"` y `_key` empiece con `agent-table-`
3. Si ya existe una tabla del agente, **no inserta otra** (skip con log)
4. Si se quiere reemplazar una tabla existente, se debe pasar un flag explícito `--replace`

### Dry-run y reporte

El lote tiene dos modos:

- **`--dry-run`** (default para la primera corrida): Lee cada post, genera la tabla propuesta, y produce un reporte JSON/markdown con: post ID, título, tabla propuesta (título, columnas, filas, fuente), posición de inserción, y locales que se tocarían. **No muta nada en Sanity.**
- **`--apply`**: Ejecuta las mutaciones reales. Solo se corre después de revisar el reporte del dry-run.

### Reintentos

Si una mutación falla (timeout, 429, etc.), el agente reintenta hasta 3 veces con backoff. Si sigue fallando, lo registra en el reporte como `failed` y continúa con el siguiente post. No hay estado corrupto posible porque cada mutación es atómica por post.

## Prerequisito pendiente: limpieza de `zh`

El repo todavía trae `zh` (chino) en `sanity.config.ts` y `post.ts`. Esa limpieza es un paso aparte que debe hacerse antes o en paralelo, pero no bloquea este plan.

## Notas

- Cada tabla debe citar su fuente. Datos sin fuente no se insertan.
- El agente no modifica el texto del post, solo inserta bloques adicionales.
- Las tablas se pueden editar después desde el studio de Sanity como cualquier otro contenido.
- La inserción siempre apunta a `body[_key == "LOCALE"].value[N]`, nunca a `body[N]` directamente.
- Keys de tablas del agente siempre empiezan con `agent-table-` para trazabilidad.
