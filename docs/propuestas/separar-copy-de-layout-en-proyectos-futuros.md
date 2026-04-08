# Separar Copy de Layout en Proyectos Futuros

## Por qué escribir esto

Hoy, cuando el copy vive repartido entre `page.tsx`, `sections/*.tsx` y a veces `components/*.tsx`, revisar una sola página como unidad editorial se vuelve más difícil de lo que debería ser.

Esto nos pega en varios frentes:

- el QA de copy no siempre ve la página completa;
- detectar repetición o drift de tono requiere leer muchos archivos;
- el implementador de sección mezcla correcciones editoriales con JSX;
- hacer una vista paralela solo para leer copy corre el riesgo de duplicar contenido.

La idea de esta propuesta es dejar una convención futura más limpia: **separar copy de layout sin duplicar la fuente de verdad**.

## Propuesta

Para páginas nuevas o para refactors futuros de páginas muy copy-heavy:

- `page.tsx` compone la página;
- `sections/*.tsx` renderiza bloques;
- `content.ts` o `copy.ts` guarda el contenido editorial de la sección;
- opcionalmente, una ruta o vista de `copy-review` consume ese mismo contenido para revisarlo en limpio;
- `qa-copy` corre contra esa fuente estructurada o contra un bundle derivado de ella.

La regla importante es esta:

**No crear una página paralela de copy escrita a mano.**  
Si existe una vista especial para copy, debe salir de la misma fuente que usa la página real.

## Qué se ganaría

### 1. Una sola fuente de verdad editorial

El copy deja de vivir mezclado con clases, props e imports.

Eso permite:

- revisar una página completa sin perseguir texto por varios componentes;
- correr QA de copy sobre contenido real;
- cambiar wording sin pelear con el layout;
- reducir falsos negativos de repetición o tono.

### 2. Mejor separación de responsabilidades

- `content.ts`: qué decimos
- `sections/*.tsx`: cómo se renderiza
- `page.tsx`: cómo se arma la página

Eso hace más claro cuándo un cambio es editorial y cuándo es visual.

### 3. Mejor soporte para worktrees y rounds de copy

En un worktree de sección, Claude podría trabajar más fácilmente con:

- el brief aprobado;
- el `content.ts` de esa sección;
- y una revisión visual posterior.

En vez de editar ocho archivos con texto disperso, el trabajo editorial fuerte viviría en uno o pocos archivos.

### 4. QA más simple y más confiable

`qa-copy` podría revisar el contenido de la sección como unidad editorial sin depender tanto de heurísticas de extracción desde JSX.

## Arquitectura sugerida

### Opción recomendada

```ts
// src/app/experiencia/excelencia-operativa/content.ts

export const excelenciaOperativaContent = {
  metadata: {
    title: "Excelencia Operativa | Grupo Nelson",
    description: "Control de obra..."
  },
  hero: {
    title: "Control de obra. Avance medible. Reportes semanales.",
    body: "75 proyectos completados..."
  },
  sections: {
    comoTrabajamos: {
      title: "Asi gestionamos cada proyecto",
      steps: [
        {
          title: "Planeacion visible",
          body: "..."
        }
      ]
    }
  },
  cta: {
    title: "Tu siguiente nave industrial en Mexicali",
    body: "..."
  }
}
```

Y luego:

- `page.tsx` importa `metadata` y compone la página;
- cada `section` importa solo el fragmento que necesita;
- una ruta de review podría renderizar ese mismo objeto en forma lineal.

## Contrariedades reales

Separar copy de layout sí tiene tradeoffs. No conviene fingir que no existen.

### 1. Texto con énfasis visual

Ejemplos:

- palabras en `bold`;
- palabras en color;
- frases con subrayado;
- acentos visuales dentro de una misma oración.

Si el contenido fuera solo `string` plano, eso se vuelve incómodo.

Pero **no es un bloqueo real**. Se puede resolver de varias formas más limpias que volver a enterrar el copy en JSX.

#### Opción A — texto segmentado

```ts
hero: {
  title: [
    { text: "Control de obra." },
    { text: " Avance medible.", tone: "accent" },
    { text: " Reportes semanales." }
  ]
}
```

El componente renderer decide:

- qué va en bold;
- qué va en color;
- qué va subrayado.

#### Opción B — marks o rich text simple

```ts
body: [
  { text: "75 proyectos completados en 28 años. " },
  { text: "1,092,745 horas hombre", emphasis: "strong" },
  { text: " con cero incidentes graves." }
]
```

Esto mantiene el copy editable sin mezclarlo con `span className=...`.

### 2. Efectos tipo typewriter o animaciones por palabra

Aquí también puede parecer que separar copy de layout lo complica.

Pero tampoco es un bloqueo real.

El texto puede vivir separado y el componente puede recibir:

- la frase completa;
- o una lista de segmentos;
- o metadata de animación.

Ejemplo:

```ts
headlineRotator: {
  items: [
    "Reportes semanales",
    "Ruta critica visible",
    "Control documentado"
  ],
  animation: "typewriter"
}
```

El layout sigue siendo responsable del efecto.  
El contenido sigue siendo responsable de las palabras.

### 3. Componentes con copy muy intercalado con la estructura

Hay bloques donde el copy está tan mezclado con iconos, badges, labels y elementos decorativos que extraerlo a `content.ts` requiere un poco más de trabajo.

Eso sí es una fricción real.

Por eso esta propuesta no dice:

**“refactorizar todo el sitio ya”**

Dice:

**“adoptar esta convención en páginas nuevas o en refactors donde ya valga la pena”**

### 4. Riesgo de crear modelos de contenido demasiado rígidos

Si intentamos modelar todo como un CMS enorme desde el inicio, la solución se vuelve pesada.

Conviene empezar simple:

- strings;
- arrays de strings;
- arrays de fragments;
- objetos pequeños por bloque.

Solo modelar más cuando la página de verdad lo necesite.

## Lo que no recomendaría

### No recomendaría una page paralela de copy escrita a mano

Ejemplo malo:

- una página real en `src/app/...`
- y otra “copy-only” donde alguien vuelve a pegar el mismo texto solo para revisarlo

Eso simplifica la lectura hoy, pero crea un problema mayor mañana:

- dos fuentes de verdad;
- drift inevitable;
- QA sobre un texto que ya no necesariamente coincide con el sitio.

Si existe una vista de review, debe generarse desde el mismo contenido estructurado.

## Qué sí recomendaría

### Fase 1 — Convención para proyectos futuros

Cuando una página sea muy dependiente de copy:

- crear `content.ts` local a la sección;
- hacer que `page.tsx` y `sections/*.tsx` lean desde ahí;
- evitar volver a meter frases largas directamente en JSX salvo labels mínimos.

### Fase 2 — Vista opcional de review

Si el proyecto lo justifica:

- crear una ruta interna tipo `/copy-review/...`;
- o un script que renderice el contenido en texto lineal;
- pero siempre desde la misma fuente.

### Fase 3 — QA Copy más simple

Cuando el contenido ya viva en archivos de contenido:

- `qa-copy` puede correr contra esa fuente sin extraer texto desde JSX;
- los falsos negativos de repetición bajan mucho;
- el reporte se vuelve más editorial y menos técnico.

## Recomendación práctica

Para Grupo Nelson y proyectos parecidos, la recomendación sería:

1. No rehacer todo el sitio hoy solo por esta idea.
2. Sí usar esta convención en páginas nuevas o secciones que ya estén en refactor fuerte.
3. Si una página tiene mucho peso editorial, favorecer `content.ts` local desde el inicio.
4. Si hace falta una vista para revisar copy, que sea derivada de la misma fuente de verdad.

## Conclusión

Separar copy de layout **sí es deseable** en proyectos futuros, sobre todo cuando:

- el copy tiene rounds fuertes de revisión;
- hay QA editorial;
- se trabaja con worktrees por sección;
- y el riesgo de drift o repetición importa.

Las contrariedades existen, pero no son bloqueantes:

- `bold`, color y énfasis se pueden resolver con fragments o marks;
- typewriter y animaciones pueden leer desde contenido estructurado;
- lo importante es no volver a duplicar el copy en una página paralela manual.

La idea fuerte no es “tener otra página”.

La idea fuerte es:

**tener una sola fuente de verdad editorial y dejar que layout, review y QA lean de ahí.**
