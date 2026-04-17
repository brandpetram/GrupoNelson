# Plan para el visor de imágenes en admin

## Problema

Hoy conviven dos visores de fotos en el proyecto, ninguno de los dos es el visor que necesitamos:

1. **`/proyecto/fotografias`** (linkeado desde el menú `/admin` → "Proyecto" → "Fotografías"). Hardcoded con `length: 461`, tres tabs fijas. Muestra ~477 de las ~853 imágenes de `public/`. Cada vez que llega contenido nuevo queda más desactualizado. No detecta duplicados — ejemplo reciente: `/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg` se referencia desde `zeta.tsx` y `cursor-trail-grupo-nelson.tsx`, y ambos componentes quedan montados en la misma página de `/construction/turnkey`. El visor actual ni siquiera lista esa imagen, mucho menos cruza consumidores.

2. **`/dev/fotos`** (protegido con `notFound()` en producción vía `src/app/(dev)/dev/layout.tsx`, construido en la Fase 1 de `plan-para-organizar-fotos.md`). Consume `src/data/foto-inventory.json` con las 853, tiene lightbox, filtros, badges de uso, ruta copiable. Pensado como herramienta interna de curación. Son ~629 líneas.

Consolidar juntándolos daría un Frankenstein: una UI que mezcla "galería limpia" con "herramienta de curación", ninguna de las dos bien resuelta.

## Decisión

**Descartar los dos visores actuales y construir uno nuevo, minimalista, que resuelva un solo job-to-be-done.** El visor se construye con el skill `frontend-design` para que la UI sea distintiva y limpia, no un grid genérico.

El job-to-be-done:

> "Un admin quiere encontrar una foto específica en `public/`, ver si ya está siendo usada en el sitio y en qué páginas, y copiar su ruta para pegarla en un componente."

Ese es el único propósito. Todo lo demás queda fuera de alcance.

### Frontera congelada (no negociable)

- **`/proyecto/fotografias` es READ-ONLY para siempre.** Solo navega, busca, muestra uso y copia rutas. Nunca edita, nunca cura.
- **Cualquier función de curación futura (aprobar, rechazar, asignar secciones, mover, borrar) vive en otra ruta** bajo `/dev` (protegida con `notFound()` en producción) o `/admin` (con auth real). **No se agrega al visor público.**

Corrección sobre hallazgos previos: `/proyecto/fotografias` **sí está protegido** con cookie HMAC vía `src/proxy.ts` (matcher `/proyecto/:path*`). El route group `(dev)` solo agrega `noindex` además. Entonces técnicamente podríamos agregar curación aquí sin exponer tooling. Aun así mantenemos la frontera read-only por razones de propósito (un visor hace una sola cosa bien) y separación (ver vs curar), no por exposición.

## Funcionalidades del nuevo visor (cada una justificada)

### F1 — Listar las ~853 imágenes de `public/` agrupadas por carpeta

**Justificación:** El visor actual cubre 477 de 853. Sin cobertura completa, el visor no resuelve el problema base. Agrupación por carpeta porque es la estructura natural del filesystem y el usuario ya la conoce (`parques-industriales-mexicali/`, `fotos-dron/NELSON II/`, `Seleccionadas/`, etc.).

**Fuente de datos:** `src/data/foto-inventory.json` (~287 KB, ya existe, generado por `scripts/generate-foto-inventory.ts`).

### F2 — Buscador por nombre de archivo (filtrado client-side)

**Justificación:** Con 853 fotos, scrollear linealmente no es viable cuando uno sabe lo que busca (ej: "gulfstream", "vigia", "443"). Filtrado client-side porque la interacción tiene que ser instantánea y el cliente lo usa un admin, no tráfico abierto.

**Consideración de payload:** El inventario pesa ~287 KB. Si se descarga completo al cliente, es un hit no trivial en primer paint. Mitigaciones (en este orden):
1. Aceptar el costo porque el visor lo abre uno o dos admins, no es ruta crítica ni indexable.
2. Si crece a >500 KB, pasar el filtrado a Server Action y no descargar el inventario al cliente.

### F3 — Indicador visible "ya en uso" con páginas finales

**Justificación:** El caso Zeta+cursor-trail demostró que duplicar imágenes en la misma página es un error recurrente. El campo `usedInCode` del inventario ya existe, **pero hoy el script corta en nombres intermedios como `data: parks-data` o `componente: zeta`**. Eso no responde "¿en qué página final aparece?", que es el único uso real.

**Prerrequisito (Fase 0, antes del build):** Extender `scripts/generate-foto-inventory.ts` para resolver cualquier referencia no-page (data file o componente) hasta las páginas finales que la montan. Los detalles técnicos (grafo, filtro de type imports, manejo de layouts) viven en la Fase 0.b.

Sin este prerrequisito, el visor sigue con el mismo agujero del actual y los casos de duplicación cross-componente quedan sin resolver.

### F4 — Tooltip con la lista completa de archivos que usan la foto

**Justificación:** "Ya en uso" no basta; hay que saber **dónde** para decidir si agregarla en otro lugar es ok o es duplicación.

### F5 — Copiar ruta al portapapeles

**Justificación:** Sin esto, el flujo es "abrir el visor → leer la ruta → tipearla o copiarla a mano". Con botón de copiar, es un clic.

### F6 — Lightbox (click en la foto para verla grande)

**Justificación:** Una miniatura de ~200px no alcanza para decidir si la foto sirve para un hero, un detalle, o un mosaico. Sin lightbox, el visor obliga a abrir la foto en pestaña nueva, lo que rompe el flujo.

### F7 — Contadores por carpeta y total

**Justificación:** Orientación básica — saber si una carpeta tiene 3 fotos o 502 cambia cómo uno la mira.

### F8 — Preservar deep links existentes (`#reales`, `#profesionales`, `#parques`)

**Justificación:** La bitácora (`src/app/(dev)/proyecto/bitacora/page.tsx:503,520,540`) linkea a `/proyecto/fotografias#reales`, `#profesionales`, `#parques`. Romper esos links sin avisar al resto del sistema es regresión silenciosa.

**Implementación:** El visor nuevo expone tres `id` equivalentes que aplican filtro automático al cargar con ese hash:
- `#reales` → filtra `parques-industriales-mexicali/`, rango 1-250.
- `#profesionales` → filtra `parques-industriales-mexicali/`, rango 251-461+.
- `#parques` → filtra carpetas de parques específicos (Nelson, Vigía).

## Funcionalidades explícitamente descartadas

| Función | Por qué no entra |
|---|---|
| Aprobar / rechazar fotos | Ruta con auth o guard dev. Nunca en `/proyecto/fotografias`. |
| Asignar fotos a secciones del sitio | Mismo. |
| Mover o borrar fotos | Acción destructiva. El visor no toca el filesystem. |
| Metadata extendida (peso, dimensiones, EXIF) | No pedido. Agrega complejidad sin resolver el job. |
| Favoritos / marcadores | No pedido. |
| Subir fotos nuevas desde la UI | No pedido. Fotos se agregan con `cp` al repo. |
| Filtros por tipo (JPG vs JPEG vs PNG) | No pedido. El filesystem no lo pide. |
| Navegación por teclado en lightbox | Se agrega solo si la interacción con el lightbox lo hace evidente. No es funcionalidad núcleo. |
| Responsive para móvil | El admin lo usa en desktop. No optimizar para móvil salvo que pase solo con CSS. |

## Arquitectura técnica

### Stack

- **Página:** Server Component (React Server Component de Next.js App Router).
- **Datos:** Import directo de `src/data/foto-inventory.json` en el Server Component.
- **Interactividad:** Un Client Component chico para el buscador, lightbox y copiar ruta. Nada más.
- **Estilos:** Tailwind CSS v4 con las variables del proyecto (`bg-background`, `text-foreground`, etc.). Dark mode funciona por default.

### Archivos

- **Reemplazar:** `src/app/(dev)/proyecto/fotografias/page.tsx` (actualmente el visor hardcoded). El link del menú admin (`src/app/(admin)/admin/layout.tsx:42`) ya apunta allí, no hay que tocar el layout.
- **Eliminar:** `src/app/(dev)/dev/fotos/page.tsx` (~629 líneas) una vez que el nuevo visor esté validado.
- **Cliente chico nuevo:** `src/app/(dev)/proyecto/fotografias/gallery-client.tsx` con la interactividad (buscador + lightbox + copiar).
- **Extender:** `scripts/generate-foto-inventory.ts` para resolver el grafo completo desde cualquier referencia hasta páginas finales (Fase 0.b).

### Por qué Server Component

- El inventario JSON se lee una sola vez en build/render, no en cada request del cliente.
- Solo el buscador y lightbox necesitan client, lo demás es estático.

### Automatización del inventario

`pnpm run inventory` hay que correrlo cuando se agregan/quitan fotos. Se agrega al `prebuild` del `package.json` para que el deploy siempre tenga el inventario fresco.

## Principios de UI

Si el skill `frontend-design` está disponible en el entorno, se usa. Si no, el visor se implementa a mano respetando estos principios (no depende del skill para quedar bien ejecutado):

1. **Una sola vista.** Sin tabs globales, sin sidebar, sin navegación multinivel. Todo en una página con secciones apiladas por carpeta.
2. **La acción principal siempre visible.** Copiar ruta es un botón visible en cada tarjeta, no detrás de hover.
3. **El indicador de uso se lee sin interacción.** Un borde de color o ícono en la tarjeta, no un punto chiquito.
4. **Tipografía y espaciado generosos.** Son 853 fotos; el aire hace la diferencia entre escanear y estresarse.
5. **Sin estados cargando.** El JSON se sirve desde el build, no hay spinners.
6. **Respetar dark mode del proyecto** con las variables CSS existentes.

## Fases

### Fase 0.a — Prerrequisitos del repo (~5 min)

Antes de tocar el script:

- [ ] **Agregar `tsx` como devDependency.** `pnpm add -D tsx`. Hoy el script `inventory` del `package.json:15` usa `tsx` pero `tsx` no está declarado en `devDependencies` y `pnpm exec tsx` falla con "Command not found". Esto es bloqueador tanto para regenerar el inventario como para el futuro `prebuild`.
- [ ] **Verificar que `pnpm run inventory` se ejecuta sin errores** antes de extender su lógica.

### Fase 0.b — Extensión del script (~60-90 min)

#### Alcance del grafo (todos los casos, no solo data→page)

Extender `scripts/generate-foto-inventory.ts` para resolver **cualquier** referencia a una imagen — venga de donde venga — hasta las páginas finales. El grafo debe cubrir:

- **Imports desde `src/data/*`:** data files consumidos por páginas directa o indirectamente.
- **Imports desde `src/components/*`:** componentes compartidos que referencian fotos directamente (este es el caso mayoritario y el que motivó el plan). Ejemplos reales:
  - `zeta.tsx:107` referencia `/Seleccionadas/grupo-nelson-...-8.jpeg` → `zeta.tsx` es importada por `app/(en)/construction/turnkey/page.tsx` y por `app/es/constructora/llave-en-mano/page.tsx`. La foto debe resolver a **ambas páginas**.
  - `cursor-trail-grupo-nelson.tsx:27-28` referencia imágenes 7 y 8 desde `/Seleccionadas/` → seguir la cadena de componentes que lo importan hasta las páginas.
  - `kappa.tsx:34` referencia `/grupo-nelson-...-7.jpeg` → ese componente es importado por al menos las páginas de `turnkey` y `llave-en-mano`.
- **Componentes que importan componentes (multi-hop):** la cadena puede tener múltiples saltos antes de llegar a una `page.tsx`.
- **Referencias vía `page-client.tsx`:** el patrón de App Router donde la página server delega a un client component que a su vez importa data o componentes con fotos.

**Implementación sugerida:** construir un grafo dirigido `archivo → archivos que lo importan` a partir de todos los `import` del proyecto. Para cada foto:
1. Detectar en qué archivos aparece la ruta literal de la imagen.
2. Desde cada uno de esos archivos, hacer BFS siguiendo aristas "quién me importa" hasta alcanzar nodos terminales (`page.tsx` o `layout.tsx`).
3. Reportar en `usedIn`:
   - Si el terminal es `page.tsx`, se reporta la ruta de esa página.
   - Si el terminal es `layout.tsx`, se reporta el layout como tal (ej: `layout: es/(legal)`), **no se expande a todas las páginas hijas**. Por dos razones: (a) una imagen de un Header root aparece literalmente en cientos de rutas y listar todas es ruido inútil, (b) el usuario lee "layout" y entiende "aparece en todas las páginas bajo ese árbol". Si más adelante hace falta ver la lista explícita, se agrega como detalle expandible en el tooltip.

#### Filtro crítico: distinguir imports de tipo de imports runtime

Un BFS ingenuo produce falsos positivos porque TypeScript permite importar solo tipos. En el repo hay casos reales:

- `app/es/inventario/naves-disponibles/page.tsx:4` → `import type { NaveIndustrial } from '@/data/naves-industriales'` (type-only).
- `app/es/inventario/naves-disponibles/page-client.tsx:6` → `import type { NaveIndustrial }` (type-only).
- `src/components/tailwind/drawer.tsx:6` → `import { NaveIndustrial }` (value-import pero realmente solo usa el tipo).
- `src/components/brandpetram/tabla-modelos-de-productos.tsx:4` → similar.

Si el script sigue esas aristas sin distinguir, reportaría que las páginas de inventario "usan" todas las fotos del array `navesIndustriales`, cuando en realidad solo comparten tipos. **Requisito explícito:**

- Parsear los imports con un parser de TypeScript (ts-morph, typescript compiler API o similar) — no regex.
- Ignorar las aristas de `import type { ... }` (type-only imports).
- Para imports de valor (`import { X }`), idealmente trackear qué símbolos exportados se consumen. Si solo se consume un tipo (ej: `NaveIndustrial` como annotation) y no el array runtime, la arista tampoco se sigue.
- Documentar explícitamente las limitaciones del análisis en el `README` del script.

#### Validación

- [ ] Correr `pnpm run inventory` y validar con casos **verificados** con path completo (no basename):
  - **Foto `/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg`**: debe aparecer con consumidores `zeta.tsx` y `cursor-trail-grupo-nelson.tsx`, y propagar hasta las páginas finales que montan esos componentes (al menos `construction/turnkey` y `constructora/llave-en-mano`).
  - **Foto referenciada vía `industrialParks` (array runtime en `parks-data.ts`)**: debe aparecer en las páginas que consumen ese array vía `catalogo-filtrado-parques.tsx`, `catalogo-agrupado-parques.tsx` o `ficha-tecnica/[slug]/page.tsx`. No en páginas que solo importen tipos del módulo.
  - **Foto referenciada directamente desde una `page.tsx`** sigue funcionando.
  - **Foto referenciada desde un `layout.tsx`** (ej: imagen de `Header.tsx` montado en varios layouts de idioma/sección): se reporta como `layout: <ruta>`, no expandida a todas las páginas hijas.
  - **Sanity check de falsos positivos:** `naves-industriales.ts` hoy solo exporta tipos que se consumen; su array runtime `navesIndustriales` no tiene consumidor actual. Una foto del array **no** debe listarse como usada en páginas que solo hacen `import type { NaveIndustrial }`. Si el resultado del script es "no tiene página final", está bien — refleja la realidad.

### Fase 1 — Plan aprobado (este documento)

- [ ] Usuario confirma el alcance y las funciones justificadas.
- [ ] Usuario confirma la frontera read-only.
- [ ] Usuario confirma el destino del link `/dev` del menú admin (ver Fase 3).

### Fase 2 — Build del visor nuevo (~1h)

- [ ] Crear `gallery-client.tsx` con buscador + lightbox + botón copiar + handling de hash `#reales/#profesionales/#parques`.
- [ ] Reescribir `page.tsx` como Server Component que consume el inventario extendido y renderiza las tarjetas agrupadas por carpeta con anchors.
- [ ] Usar `frontend-design` skill para la UI.

### Fase 3 — Limpieza (~30 min)

- [ ] Eliminar `src/app/(dev)/dev/fotos/page.tsx`.
- [ ] **Decidir destino del tooling antiguo huérfano.** Existen hoy tres artefactos que pertenecían al flujo de curación del visor viejo:
  - `src/app/api/dev/fotos/curate/route.ts`
  - `src/app/api/dev/fotos/discard/route.ts`
  - `src/data/foto-curation.json` (hoy pesa 2 bytes).

  Como este plan **no construye la curación** (va en otra ruta con guard/auth cuando se haga), quedan colgando sin consumidor. Recomendación: **eliminarlos también** en esta fase. Cuando llegue el momento de construir la curación, se reescribe desde cero en la ruta correcta. La alternativa (dejarlos temporalmente) crea código muerto que nadie sabe que existe.
- [ ] Decidir destino del item "Dev tools" del menú admin (línea 48 de `src/app/(admin)/admin/layout.tsx`). Hoy apunta a `/dev` pero **`src/app/(dev)/dev/page.tsx` no existe**, solo `/dev/fotos/page.tsx`. Ese link ya está roto antes de este plan. Opciones: crear un index en `/dev` con lista de herramientas, o eliminar el item del menú. La decisión queda explícita en la Fase 1.
- [ ] Agregar `pnpm run inventory` al `prebuild` del `package.json`.
- [ ] Correr `pnpm build` para verificar que no rompe nada.

### Fase 4 — Validación (~20 min)

Checklist de verificación funcional antes de cerrar:

- [ ] **Deep links:** Navegar desde `/proyecto/bitacora` a `#reales`, `#profesionales`, `#parques`. Los tres deben caer en la sección/filtro correcto.
- [ ] **Caso data-file:** Elegir una foto referenciada únicamente vía `src/data/parks/parks-data.ts` o `src/data/naves-industriales.ts`. El visor debe mostrar la página final donde aparece, no solo el nombre del data file.
- [ ] **Caso duplicación (ex "Zeta/Kappa"):** Verificar con path completo, no basename. La imagen `/Seleccionadas/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg` hoy se referencia en `zeta.tsx:107` y en `cursor-trail-grupo-nelson.tsx:28`. El visor debe (a) listarla como en uso, (b) resolver que `zeta.tsx` termina montada en `construction/turnkey/page.tsx` y `constructora/llave-en-mano/page.tsx`, (c) distinguirla de la otra foto con el mismo nombre en la raíz (`/grupo-nelson-naves-en-parques-industriales-en-mexicali-8.jpeg`) que tiene sus propios consumidores.
- [ ] **Payload cliente:** Medir (DevTools → Network) cuántos KB descarga el cliente al abrir `/proyecto/fotografias`. Si el inventario completo se manda al cliente y pesa >500 KB, evaluar mover el filtrado a Server Action antes de dar la fase por cerrada.
- [ ] **Cobertura:** Contar visualmente al menos 5 carpetas nuevas que antes no aparecían (fotos-dron, Seleccionadas, leed, honeywell, tecolote).

## Qué pasa con `plan-para-organizar-fotos.md`

Ese plan sigue vigente para la parte de **curación** (Fase 2: aprobar/rechazar/asignar secciones; Fase 3: Gulfstream; Fase 4: normalización de carpetas). Este plan solo reemplaza el "visor básico" de su Fase 1 con uno mejor.

**Corrección importante al plan previo:** En `plan-para-organizar-fotos.md`, la Fase 2 (curación) menciona que las funciones van en `/dev/fotos`. Eso ya no es consistente con este plan — `/dev/fotos` se elimina aquí. Cuando se ejecute la curación, se crea una ruta nueva (`/dev/curar-fotos` o `/admin/fotos-curacion` con auth) y vive ahí. Nunca en `/proyecto/fotografias`.

## Riesgos

1. **Perder alguna función útil del `/dev/fotos`.** Antes de borrar, revisar: la navegación por teclado del lightbox y los filtros "solo en uso / solo sin uso" son los únicos diferenciadores reales. Si se usan, se portan al nuevo visor. Si no, se descartan.
2. **Inventario desactualizado.** Mitigado con `prebuild` que corre `pnpm run inventory`.
3. **Tiempo de build mayor** si `pnpm run inventory` escanea muchas fotos. No debería ser problema con 853 imágenes, pero si crece, se puede cachear con `mtime`.
4. **Payload cliente grande** (~287 KB hoy, puede crecer). Mitigación en F2.
5. **Frontera read-only se erosiona con el tiempo.** Para evitarlo, documentarla en el propio archivo del visor como comentario encima del componente, y agregar un test o lint rule que detecte cualquier API route bajo `/proyecto/fotografias/`.

## Estado

- [ ] Fase 0.a — Prerrequisitos del repo (`tsx` en devDeps).
- [ ] Fase 0.b — Extensión del script (grafo completo de imports).
- [ ] Fase 1 — Plan aprobado.
- [ ] Fase 2 — Build del visor nuevo.
- [ ] Fase 3 — Limpieza.
- [ ] Fase 4 — Validación.
