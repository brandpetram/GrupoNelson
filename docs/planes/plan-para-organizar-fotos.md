# Plan para organizar las fotos de Grupo Nelson

## Problema

El proyecto tiene ~850+ imágenes repartidas en `public/` sin una organización funcional. Las fotos que actualmente se usan en los componentes no son necesariamente las correctas — muchas se asignaron al azar. El objetivo es tener un inventario visual donde se pueda revisar, seleccionar, descartar y asignar fotos a secciones del sitio de forma eficiente.

**Alcance:** Este plan cubre exclusivamente las fotos locales en `public/`. Las imágenes que provienen de Sanity (blog, noticias, etc.) se gestionan desde el CMS y no entran en este inventario ni curación.

Además, hay 69 screenshots de Gulfstream en `Assets Originales/Video/Gulfstream/` que nunca se movieron a `public/`, y 93 fotos originales en `Assets Originales/Fotos/` cuya relación con `public/` no está verificada.

## Lo que ya se hizo

### Fase 1 completada — Inventario + visor básico

- **Script de inventario:** `scripts/generate-foto-inventory.ts` escanea `public/` recursivamente, detecta qué fotos están referenciadas en código **y en qué archivos específicos** (pages, data files, componentes), y genera `src/data/foto-inventory.json`. Se ejecuta con `pnpm run inventory`. Cada foto tiene un campo `usedIn: string[]` con los archivos donde aparece la ruta (ej: `"home"`, `"data: parks-data"`, `"componente: brandpetram/carrusel"`). **Limitación conocida:** Para fotos definidas en data files (como `parks-data.ts` o `naves-industriales.ts`), el `usedIn` indica el data file, no la página final donde se renderiza. Resolver esa segunda capa de mapeo (data file → page) queda pendiente.
- **Visor interno:** `/dev/fotos` protegido server-side con `notFound()` en producción (via `src/app/dev/layout.tsx`). Grid de carpetas con preview y conteo, grid de thumbnails con filtros (Todas / En uso / Sin uso), lightbox con navegación por teclado, ruta copiable al clipboard. En el lightbox se muestran badges azules con cada page/componente/data file donde la foto está referenciada. En el grid, hover sobre el punto verde muestra tooltip con la misma info.
- **Excluidos del inventario:** `logos-clientes/`, `docs/`, `video/`, carpetas ocultas.

Resultado del primer escaneo: **853 imágenes, 213 en uso, 640 sin uso, 34 carpetas.**

## Inventario actual

### Resumen de números

| Ubicación | Imágenes | En uso | Notas |
|---|---|---|---|
| `public/` raíz (sueltas) | 29 | 23 | Hero posters, banderas, fundador, parques genéricos |
| `public/parques-industriales-mexicali/` | 502 | 89 | 1-250 del cliente, 251-502 stock. Se usan extensivamente (208 refs en 46 archivos). |
| `public/fotos-dron/` | 162 | 90 | Fotos aéreas recientes. 127 refs en 4 archivos (parks-data, naves-industriales). |
| `public/leed/` | 58 | 10 | Fotos para sección de certificación LEED |
| `public/honeywell/` | 14 | 5 | Fotos de naves Honeywell |
| `public/tecolote/` | 19 | 0 | Fotos del estacionamiento Tecolote |
| `public/top-run/` | 13 | 0 | Fotos de nave Top Run |
| `public/parque-industrial-el-vigia-*` | 13 | 0 | 3 carpetas con fotos de Vigía |
| `public/parque-industrial-nelson-2-*` | 3 | 1 | Fotos de Nelson II |
| `public/brandpetram/` | 6 | 3 | Imágenes de template |
| `public/contructora-mexicali/` | 2 | 2 | Puente Skyworks |
| `public/from-tailwind-templates/` | 6 | 0 | Recursos de componentes Tailwind Templates |
| `Assets Originales/Fotos/` | 93 | — | Fotos originales del cliente (no en public/) |
| `Assets Originales/Video/Gulfstream/` | 69 | — | Screenshots del video Nov. 25 (no en public/) |

### Fotos referenciadas en código

**335+ referencias** en **50+ archivos**. Archivos clave:
- `src/data/parks/parks-data.ts` — galerías por parque y nave
- `src/data/naves-industriales.ts` — datos de naves con arrays de imágenes
- `src/components/brandpetram/carrusel.tsx` — mapeo hardcodeado de fotos genéricas
- `src/app/page.tsx` — home page

### Notas importantes

- **`public/docs/`** contiene PDFs descargables EN USO desde `/proyecto/documentacion`. No tocar.
- **`/proyecto/fotografias`** es la galería pública del portal. No mezclar con herramientas internas.
- **Una foto puede pertenecer a múltiples categorías** (parque + cliente + constructora). La organización debe ser por metadata, no por carpetas.

## Decisiones de estructura

### ¿La carpeta se llama `fotos-dron/` o se renombra?

El nombre `fotos-dron/` se puso arbitrariamente cuando llegaron las fotos del dron. Pero en realidad casi todas las fotos del proyecto son de dron — el nombre no distingue nada, solo refleja cuándo llegaron.

La estructura real debería ser **parque → empresa**, sin carpeta intermedia `fotos-dron/`. Pero renombrar o eliminar `fotos-dron/` hoy rompe 127 referencias en 4 archivos (`parks-data.ts`, `naves-industriales.ts` y otros). Renombrar las subcarpetas a kebab-case (`NELSON II` → `nelson-ii`) rompe las mismas 127 referencias.

**Decisión:** Hacer ambos cambios juntos en la Fase 4 (normalización). No tiene sentido romper rutas dos veces — una para quitar `fotos-dron/` y otra para kebab-case. Se hace una sola migración con un script que actualice todas las rutas de golpe. Mientras tanto, la estructura interna de `fotos-dron/` sí se puede ir alineando a parque → empresa sin romper nada (solo mover fotos dentro de subcarpetas nuevas).

**Estructura objetivo final (post Fase 4):**

```
public/
├── parques-industriales-mexicali/           ← reemplaza fotos-dron/ (nombre con valor SEO)
│   ├── nelson-i/                            ← kebab-case
│   │   ├── dhl/
│   │   ├── envista/
│   │   ├── intuitive-surgical/
│   │   ├── farnacos-nacionales/
│   │   └── (fotos generales del parque en la raíz)
│   ├── nelson-ii/
│   │   ├── gulfstream/                      ← los 69 screenshots + los 5 que ya están
│   │   ├── dhl/
│   │   └── (fotos generales del parque en la raíz)
│   ├── vigia-i/
│   │   ├── g-global/
│   │   ├── garret/
│   │   ├── nave-belvedere/
│   │   ├── vertiv/
│   │   ├── naves-1-4/
│   │   ├── naves-17-23/
│   │   ├── naves-24-27/
│   │   └── naves-29-31/
│   └── vigia-ii/
│       ├── nave-1/
│       └── nave-2-baxter/
├── constructora-mexicali/                   ← reemplaza fotos-dron/CONSTRUCTORA BAUMEX (ya existe esta carpeta con fotos de Skyworks)
│   ├── honeywell/
│   ├── nave-100k/
│   └── (fotos existentes de Skyworks)
├── honeywell/                               ← se mantiene (fotos no-dron de Honeywell)
├── leed/                                    ← se mantiene
├── tecolote/                                ← se mantiene
├── top-run/                                 ← se mantiene
└── ...
```

**Nota sobre el nombre:** Se conserva `parques-industriales-mexicali` por claridad semántica de URLs y posible beneficio SEO marginal. El nombre de la carpeta ayuda, pero lo que más pesa para posicionamiento de imágenes es el nombre del archivo, el `alt`, el contexto de la página y el contenido alrededor de la imagen. La carpeta aporta una URL descriptiva (`/parques-industriales-mexicali/nelson-ii/gulfstream/nave-gulfstream-1.jpg` vs `/fotos-dron/NELSON II/nave-gulfstream-1.jpg`), pero no es el factor principal.

**Nota sobre la carpeta genérica actual:** Hoy ya existe `public/parques-industriales-mexicali/` con las 502 fotos genéricas. En la Fase 4, esas fotos se mueven a una subcarpeta como `parques-industriales-mexicali/genericas/` para que no se mezclen con la estructura de parques → empresas.

**Reglas:**
- Las fotos generales del parque (aéreas sin empresa identificable) quedan en la raíz de la carpeta del parque.
- Las fotos donde se identifica una empresa o nave específica van en subcarpeta con el nombre de la empresa.
- Este renombrado se ejecuta en una sola migración (Fase 4) con un script que actualice las 127+ rutas afectadas.

### ¿Dónde van los 69 screenshots de Gulfstream?

A `fotos-dron/NELSON II/GULFSTREAM/` ahora (estructura actual), que se convertirá en `parques-industriales-mexicali/nelson-ii/gulfstream/` después de la Fase 4. Son fotos extraídas del video de dron de la nave de Gulfstream en el parque Nelson II — pertenecen ahí por parque y por empresa.

### ¿`Assets Originales/Fotos/` tiene fotos que no están en `public/`?

Pendiente de verificación visual. Si son las mismas fotos renombradas, `Assets Originales/` se considera archivo y `public/` es la fuente de verdad. Si hay fotos adicionales, se integran en la estructura parque → empresa.

## Siguiente fase — Visor interactivo con curación

### Objetivo del visor

Que un humano pueda, en una sola sesión de trabajo:

1. **Comprender rápido** cuántas fotos tiene, en qué carpetas están y cuántas hay por carpeta.
2. **Ver de un vistazo** cuáles fotos están siendo usadas en qué páginas/componentes del sitio.
3. **Marcar como loved** (❤️) las que le gustan — las que quiere usar o ya aprobó visualmente.
4. **Rechazar o descartar** las que no sirven — borrosas, repetidas, irrelevantes, stock genérico.
5. **Asignar a secciones** — decidir "esta foto va en la página de Baumex y en Casos de Éxito".
6. **Copiar la ruta** de cualquier foto para pegarla en un componente.

Todo esto con la menor cantidad de clics posible. El visor es una herramienta de trabajo, no una galería bonita.

### Por qué la UI actual no funciona

La primera versión del visor (`/dev/fotos`) se construyó como un grid de thumbnails pequeños inspirado en un explorador de archivos. Cumplió su propósito inicial: ver qué fotos hay y cuántas. Pero para el trabajo real de curación — revisar 853 fotos, decidir cuáles sirven y asignarlas a secciones — es lenta y frustrante.

**Problemas concretos:**

1. **Las fotos son demasiado chicas para decidir.** En un grid de 6 columnas, cada thumbnail mide ~200px. No puedes evaluar si una foto de una nave industrial es nítida, si el encuadre sirve o si es la misma foto que la de al lado. Terminas abriendo el lightbox para cada foto, lo que convierte "revisar" en "clic, ver, cerrar, clic, ver, cerrar" — 3 acciones por foto solo para mirar.

2. **Toda la información útil está escondida.** Para saber si una foto se usa en código, tienes que hacer hover sobre un punto de 2.5px. Para saber EN DÓNDE se usa, tienes que abrir el lightbox. Para ver las secciones asignadas, lightbox. La información que necesitas para decidir requiere interacción, cuando debería estar visible de entrada.

3. **Las acciones requieren hover.** Los botones de aprobar, rechazar y descartar solo aparecen al poner el mouse encima. Eso significa que para cada foto necesitas: mover el mouse → esperar el hover → hacer clic. Multiplicado por 853 fotos, el hover se convierte en fricción acumulada.

4. **No puedes escanear y actuar al mismo tiempo.** En un grid denso, tus ojos saltan entre fotos pequeñas mientras tu mouse busca botones invisibles. El ritmo de trabajo es: mirar → buscar → clic → mirar → buscar → clic. No hay flujo.

**El resultado:** Una herramienta que funciona para explorar pero no para trabajar. La curación debería ser: scroll, mirar, decidir, clic, siguiente. Sin pasos intermedios.

### Principio de diseño: mínimos clics por foto

El trabajo de curación es revisar 853 fotos y tomar decisiones. La UI debe optimizar para velocidad de decisión, no para estética. El usuario recorre fotos secuencialmente (scroll o teclado) y por cada una necesita:

| Acción | Clics permitidos | Cómo se logra |
|---|---|---|
| Ver la foto suficientemente grande para decidir | 0 | La foto es visible a tamaño útil sin hacer nada |
| Saber si ya se usa en código y dónde | 0 | Badges visibles junto a la foto |
| Ver secciones ya asignadas | 0 | Badges visibles junto a la foto |
| Aprobar | 1 | Botón visible sin hover |
| Rechazar | 1 | Botón visible sin hover |
| Asignar a sección | 1 (abrir panel) + 1 por sección | Botón que abre multi-select inline |
| Descartar (cuarentena) | 1 + confirmación | Botón visible sin hover |
| Ver en grande (detalle) | 1 | Click en la foto abre lightbox |
| Copiar ruta | 1 | Click en la ruta |
| Avanzar a siguiente foto | 0 | Scroll natural |

**Regla:** Nada que se necesite ver para decidir debe requerir un clic. Nada que se necesite hacer debe requerir más de 2 clics.

### Layout: lista horizontal (una foto por fila)

El grid de thumbnails pequeños no funciona para curación porque:
- Las fotos son demasiado chicas para evaluar calidad o contenido.
- La info (uso, secciones, acciones) requiere hover o clic para acceder.
- No hay espacio para mostrar metadata junto a la foto.

**Layout elegido: una fila por foto.** Cada fila tiene:

```
┌──────────────┬──────────────────────────────────────────────────┐
│              │  /ruta/de/la/foto.jpg              [En uso]      │
│              │  ► nelson/nuestra-historia  ► data: parks-data   │
│   Thumbnail  │  ◆ Parque Nelson II  ◆ Constructora Baumex      │
│   (click →   │                                                  │
│   lightbox)  │  [❤️ Aprobar]  [✕ Rechazar]  [Secciones (2)]  [🗑] │
│              │                                                  │
└──────────────┴──────────────────────────────────────────────────┘
```

- **Columna izquierda:** Thumbnail de ~200×130px. Suficiente para evaluar composición y contenido. Click abre lightbox para detalle.
- **Columna derecha, fila 1:** Ruta (click para copiar) + badge en uso/sin uso.
- **Columna derecha, fila 2:** Badges azules de dónde se usa en código (solo si `usedIn` tiene datos).
- **Columna derecha, fila 3:** Badges morados de secciones asignadas (solo si hay).
- **Columna derecha, fila 4:** Botones de acción siempre visibles — no en hover.

**Por qué lista y no grid grande:**
- En un grid de fotos grandes, cada foto ocupa toda la pantalla y hay que scrollear mucho para comparar.
- En lista, caben ~5-6 fotos por pantalla, suficiente para escanear rápido y actuar.
- La metadata se lee de un vistazo sin interacción.
- Las acciones están siempre accesibles, no escondidas detrás de hover.

**El lightbox se mantiene** para cuando se necesite ver la foto a pantalla completa (evaluar nitidez, detalle, etc.). El panel de secciones también se puede abrir desde el lightbox.

**Teclado:** Las flechas ← → en lightbox ya funcionan. No se agregan atajos de teclado para aprobar/rechazar porque el scroll natural de lista es más rápido que navegar con teclado foto por foto.

### Vista de carpetas (primer nivel)

La vista de carpetas (grid de carpetas con preview) se mantiene como está. Funciona bien para navegar a una carpeta específica. El cambio de layout solo aplica cuando estás dentro de una carpeta revisando fotos.

### Qué necesita el visor

Resumen de funcionalidades:

1. **Botón de descartar** — mueve la foto a `public/_descartes/` (cuarentena) y regenera el inventario. No borra físicamente. El borrado real se hace en una fase posterior.
2. **Botón de aprobar** (❤️) — marca la foto como "aprobada".
3. **Botón de rechazar** (✕) — marca la foto como "rechazada". La fila se atenúa pero no desaparece.
4. **Botón de secciones** — abre panel inline o en lightbox con multi-select de secciones del sitio.

### Secciones del sitio para el select

Las secciones son las páginas reales del sitio que usan fotos. No es un tag libre — es un vocabulario cerrado:

| Valor | Sección |
|---|---|
| `home` | Home page |
| `nelson/diferencia` | Diferencia Nelson |
| `nelson/liderazgo` | Liderazgo |
| `nelson/historia` | Nuestra Historia |
| `nelson/trayectoria` | Trayectoria |
| `parques/nelson-i` | Parque Nelson I |
| `parques/nelson-ii` | Parque Nelson II |
| `parques/vigia-i` | Parque Vigía I |
| `parques/vigia-ii` | Parque Vigía II |
| `constructora/baumex` | Baumex Constructora |
| `constructora/portafolio` | Portafolio Baumex |
| `constructora/leed` | Certificación LEED |
| `constructora/llave-en-mano` | Llave en Mano |
| `constructora/build-to-suit` | Build-to-Suit |
| `constructora/ingenieria` | Diseño e Ingeniería |
| `constructora/estandares` | Estándares Internacionales |
| `constructora/proyectos-especializados` | Proyectos Especializados |
| `experiencia/casos-de-exito` | Casos de Éxito |
| `experiencia/certificaciones` | Certificaciones |
| `experiencia/excelencia-operativa` | Excelencia Operativa |
| `inventario/naves` | Naves Disponibles |
| `inventario/terrenos` | Terrenos |
| `blog` | Blog (general) |
| `contacto` | Contacto |

Una foto puede tener múltiples secciones asignadas (ejemplo: una foto de Gulfstream puede ir en `parques/nelson-ii`, `constructora/baumex` y `experiencia/casos-de-exito`).

### Arquitectura técnica

**Persistencia:** `src/data/foto-curation.json` — un archivo JSON que el visor lee y escribe a través de API routes dev-only.

```json
{
  "/fotos-dron/NELSON II/nave-gulfstream-en-parque-nelson-2-1.jpg": {
    "status": "approved",
    "sections": ["parques/nelson-ii", "constructora/baumex"]
  },
  "/china.jpeg": {
    "status": "rejected"
  }
}
```

- **Por qué JSON y no `.ts`:** El visor necesita escribir desde el browser. Un `.ts` requeriría transpilación o un endpoint que reescriba TypeScript. Un `.json` se lee/escribe directamente con `fs`.
- **Por qué en `src/data/` y no en `public/`:** No se sirve al browser directamente. El visor lo lee a través de API routes.
- **Se commitea:** Las decisiones de curación se persisten en git como cualquier otro dato.

**API routes (dev-only):**

| Ruta | Método | Acción |
|---|---|---|
| `/api/dev/fotos/discard` | POST | Recibe `{ path }`, mueve archivo a `public/_descartes/` (preserva estructura), regenera inventario |
| `/api/dev/fotos/curate` | POST | Recibe `{ path, status, sections }`, actualiza `foto-curation.json` |
| `/api/dev/fotos/curate` | GET | Devuelve el contenido de `foto-curation.json` |

Todas las rutas verifican `process.env.NODE_ENV === 'development'` y responden 404 en producción.

**Flujo de uso:**

1. Abrir `/dev/fotos` en localhost
2. Entrar a una carpeta
3. Hover sobre una foto → aparecen botones de borrar (🗑) y seleccionar (❤️)
4. Click en corazón → la foto se marca como `approved` en el JSON
5. Click en foto → lightbox con select de secciones (multi-select)
6. Click en descartar → confirmación → se mueve a `public/_descartes/` y se actualiza el inventario
7. Las fotos descartadas van a cuarentena, no se eliminan. El borrado real se hace revisando `_descartes/` en una fase posterior

### Indicadores visuales en el grid

| Estado | Indicador |
|---|---|
| Sin curar (default) | Sin badge |
| Aprobada (❤️) | Borde verde + corazón relleno |
| Rechazada | Borde rojo + opacidad reducida |
| Con secciones asignadas | Badge con número de secciones |
| Referenciada en código | Punto verde (ya existe) |

## Fases restantes (post-curación)

### Fase 3 — Integrar assets faltantes y alinear estructura parque → empresa

- Mover los 69 screenshots de Gulfstream a `public/fotos-dron/NELSON II/GULFSTREAM/`
- Reorganizar Nelson I y Nelson II en subcarpetas por empresa (las fotos ya tienen nombre descriptivo con el nombre de la empresa, solo falta moverlas a subcarpetas) + actualizar rutas en código
- Comparar `Assets Originales/Fotos/` vs `public/` para encontrar fotos que no se copiaron
- Integrar lo que falte, correr `pnpm run inventory`, curar las nuevas fotos

### Fase 4 — Normalización de carpetas

Migración única que ejecuta todos los cambios estructurales de golpe:

1. **Renombrar `fotos-dron/` → absorber en `parques-industriales-mexicali/`** y mover las 502 fotos genéricas actuales a `parques-industriales-mexicali/genericas/`.
2. **Renombrar subcarpetas a kebab-case** (`NELSON II` → `nelson-ii`, etc.).
3. **Reorganizar Nelson I y Nelson II en subcarpetas por empresa** (las fotos ya tienen nombre descriptivo).
4. **Script de migración de rutas** que actualice las 127+ referencias en `parks-data.ts`, `naves-industriales.ts` y otros archivos afectados.
5. **Mover a `_descartes/`** las fotos marcadas como `rejected` que no estén referenciadas en código.
6. **Consolidar videos dispersos** en `public/` raíz.

**Esta fase no es opcional** — es necesaria para llegar a la estructura objetivo. Se ejecuta después de la curación porque necesitamos saber qué fotos sobreviven antes de reorganizar.

## Riesgos

1. **Descartar una foto en uso.** El visor muestra el indicador `usedInCode`. Si la foto está referenciada en código, el botón de descartar muestra advertencia extra. La foto va a cuarentena (`_descartes/`), no se borra — se puede recuperar.
2. **Repo size.** Si se agregan los 69 screenshots de Gulfstream + fotos faltantes de Assets Originales, el repo crece.
3. **Migración de rutas.** Cualquier renombrado de carpetas afecta 335+ referencias en 50+ archivos.

## Estado

- [x] **Fase 1:** Script de inventario + visor básico (completado)
- [ ] **Fase 2:** Visor interactivo con borrar, seleccionar y asignar secciones
- [ ] **Fase 3:** Integrar screenshots Gulfstream y verificar Assets Originales
- [ ] **Fase 4:** Normalización de carpetas (opcional, decidir post-curación)
