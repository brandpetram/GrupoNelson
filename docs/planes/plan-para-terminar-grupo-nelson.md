# Plan para terminar Grupo Nelson

> **Estado:** Completo — listo para revisión y priorización  
> **Fecha:** 2026-04-10  
> **Objetivo:** Tener claridad total de lo que falta para terminar el sitio y definir la estrategia de ejecución.

---

## Resumen: 20 tareas en 9 categorías

| # | Categoría | Tareas | Completadas |
|---|---|---|---|
| 1 | Gestiones externas | 3 | 2 de 3 |
| 2 | Bugs y fixes técnicos | 3 | 1 de 3 |
| 3 | Navegación y menús | 2 | 0 de 2 |
| 4 | Contenido y copy | 3 | 0 de 3 |
| 5 | Diseño y páginas | 3 | 0 de 3 |
| 6 | SEO y lanzamiento | 3 | 0 de 3 |
| 7 | Capacitación del cliente | 1 (grande) | 0 de 1 |
| 8 | Traducción al inglés | 1 (grande) | 0 de 1 |
| 9 | Limpieza antes de entregar | 1 | 0 de 1 |

---

## 1. Gestiones externas (no requieren código)

No requieren código — se pueden comenzar antes que las demás, en paralelo con todo lo demás.

- [x] **1.1 Enviar instrucciones DNS a Erick Martínez** (`emartinez@nelson.com.mx`)
  - Un solo correo con 6 cambios DNS: 2 de Vercel + 4 de Resend.
  - Borrador en la sección "Borradores de comunicación (ya enviados)" abajo.
  - ✅ Valor DKIM completo ya incluido en el borrador.

- [x] **1.2 Enviar cédulas fiscales a cobranza**
  - Total: **MXN $175,000 + IVA**
  - Distribución:

    | Razón social | % | Monto (antes de IVA) |
    |---|---|---|
    | Parque Industrial Nelson SA de CV | 50% | $87,500 |
    | Baumex Constructora SA de CV | 25% | $43,750 |
    | Propiedades Nelson SA de CV | 25% | $43,750 |

  - Archivos: `Parque Industrial Nelson.pdf`, `Baumex Constructora.pdf`, `Propiedades Nelson.pdf`

- [ ] **1.3 Procesar información enviada por Susana (2026-04-09)**
  - Susana envió datos actualizados de terrenos y naves que deben reflejarse en Sanity.
  - **Terrenos disponibles en PINSA II:**
    - N2 UC-1.1A — 19,634.98 m² (plano segunda modificación)
    - N2 UC-2.1C — 9,292.585 m² (plano relotificación 2.1 y 4.1)
    - N2 UC-2.1B — 43,336.817 m² (plano relotificación 2.1 y 4.1)
  - **Terrenos disponibles en PINSA I:**
    - N L13 — Lote 13 manz 1 — 8,719.30 m²
    - N L9 — Lote 9 manz 1 — 8,450 m²
  - **Archivos recibidos (carpeta `enviados-por-susana`):**
    - `Deslindes.zip`
    - `Inmuebles y Propiedades Desocupadas (GNL-Otros) 9.04.2026.xlsx`
    - `Plano 2da modificacion PINSA II BIN-001-001.pdf`
    - `PINSA 17 Marzo 2026`
    - `Lote 13.pdf`
    - `CLASIFICACION DE NAVES INDUSTRIALES GN 2026.xlsx`
  - **Contexto del correo de Susana (18 marzo 2026):**
    - Envía archivo de clasificación de naves actualizado.
    - Le falta info de Tijuana, Hermosillo, SLP, SLRC y otras que no le han confirmado.
    - Le faltan las rampas existentes en cada nave.
    - Tiene relación de terrenos pero quiere verlo con Humberto y Rodolfo para definir nomenclatura.
  - **⚠️ Hay múltiples versiones del archivo de clasificación de naves:**
    - `CLASIFICACION DE NAVES INDUSTRIALES GN 2026.xlsx` (25 mar 2026)
    - `CLASIFICACION E NAVES INDUSTRIALES GN 2026.numbers` (25 mar 2026)
    - `CLASIFICACION E NAVES INDUSTRIALES GN 2026.csv` (25 mar 2026)
    - `CLASIFICACION E NAVES INDUSTRIALES GN 2026 ACTUALIZADO.numbers` (28 mar 2026)
    - `CLASIFICACION E NAVES INDUSTRIALES GN 2026 ACTUALIZADO.csv` (28 mar 2026, **← más reciente**)
    - También: `Inmuebles y Propiedades Desocupadas (GNL-Otros) 17.03.2026.xlsx` (25 mar 2026)
    - Y el archivo `contexto-info-susana.md`
    - **Usar la versión ACTUALIZADO.csv (28 mar 2026) como fuente de verdad**, no el .xlsx original.
  - **Acciones:** Revisar la versión más reciente de cada archivo, cruzar con data actual en Sanity, y actualizar lo que corresponda.

---

## 2. Bugs y fixes técnicos

- [x] **2.0 Actualizar formulario de contacto para enviar desde nelson.com.mx**
  - Cambiado `from` en `src/app/api/submit-form/route.ts` de `leads@brandpetram.marketing` a `leads@nelson.com.mx`.
  - Funcional cuando Erick termine los registros DNS de Resend (tarea 1.1).

- [ ] **2.1 Arreglar mapa de Google Maps en páginas de parques industriales**
  - Error: `RefererNotAllowedMapError` — API key no tiene autorizados los dominios.
  - Afecta: `/parques-industriales-mexicali/nelson-i`, `nelson-ii`, `vigia-i`, `vigia-ii`
  - Fix: Google Cloud Console → Credentials → agregar `nelson.com.mx`, `www.nelson.com.mx`, dominio preview Vercel, `localhost:3002` (main), `localhost:3003` y `localhost:3004` (worktrees).

- [ ] **2.2 Revisar menú de navegación en móvil**
  - Verificar apertura, cierre, links, scroll.
  - Corregir bugs que se encuentren.

---

## 3. Navegación y menús

- [ ] **3.1 Colocar imagen faltante en flyout menu de "Nosotros"**
  - El flyout tiene espacio para imagen vacío.

- [ ] **3.2 Colocar imagen faltante en flyout menu de "Experiencia"**
  - Mismo caso que "Nosotros".

---

## 4. Contenido y copy

- [ ] **4.1 Ajustes al componente ScrollStorytelling** (página principal `/index`)
  1. Ajustar copywriting y storytelling de cada item.
  2. Después decidir qué fotos o videos acompañan cada item.
  - Copy primero, assets visuales después.

- [ ] **4.2 Resolver copy y listas del footer**
  - Ajustar textos, enlaces y listas para que sean coherentes con el sitio completo.
  - ⚡ Depende de tener definidas las páginas/secciones definitivas.

- [ ] **4.3 Resolver comentarios de Grupo Nelson en Vercel**
  - Revisar cada comentario en el preview, resolver y responder.
  - Pendiente: extraer la lista completa para desglosar subtareas.

---

## 5. Diseño y páginas

- [ ] **5.1 Ajustes visuales en la página de liderazgo** (`/nelson/liderazgo`)
  - Pendiente definir ajustes específicos.

- [ ] **5.2 Ajustes visuales en la página de nuestra historia** (`/nelson/nuestra-historia`)
  - Crear componentes parecidos/idénticos a los de **orben-tech**.
  - Pendiente definir qué componentes específicos se toman.

- [ ] **5.3 Revisar y mejorar la página del blog**
  - Evaluar diseño actual y hacer mejoras.
  - Pendiente definir mejoras específicas.

---

## 6. SEO y lanzamiento

- [ ] **6.1 Revisar favicon y SEO de cada página**
  - Verificar favicon, meta tags (title, description, og:image) por página.

- [ ] **6.2 Configurar redirects para URLs antiguas de WordPress**
  - URLs indexadas en Google que necesitan redirect 301:
    - `http://www.nelson.com.mx/web` → redirect
    - `.../wp-content/uploads/2019/07/Specs-Building-Nelson-II-7Sept18.pdf` → redirect
    - `.../wp-content/uploads/2024/06/Specs-Nave-1-Vigia-II.pdf` → redirect
    - `.../wp-content/uploads/2019/02/Terreno-Lit-On.pdf` → redirect
  - `nelson.com.mx` (raíz) NO necesita redirect.
  - **Decisión pendiente:** ¿A dónde apuntan los PDFs? ¿Existen equivalentes en el sitio nuevo?

- [ ] **6.3 Crear sitemap.xml y enviarlo a Google Search Console**
  - Generar sitemap con todas las páginas del sitio nuevo.
  - Enviarlo a Google Search Console para reindexar.

---

## 7. Capacitación y documentación para el cliente

- [ ] **7.1 Crear sección protegida con guías para editar contenido en Sanity**
  - Secciones conectadas a Sanity:
    - `/inventario/naves-disponibles`, `/inventario/terrenos`
    - `/parques-industriales-mexicali/nelson-i`, `nelson-ii`, `vigia-i`, `vigia-ii`
    - `/constructora/portafolio`
    - Cualquier otra sección conectada a Sanity.
  - **Entregables:**
    - Videos cortos (~10 seg a 1 min) — Claude propone storyboard, Luis graba.
    - Documentación escrita — Claude escribe, se pule, se publica.
    - Página protegida por contraseña.
  - **Orden de ejecución:**
    1. Claude revisa esquemas y data en Sanity.
    2. Claude propone storyboard de videos.
    3. Claude escribe documentación.
    4. Luis graba videos.
    5. Crear sección protegida en el sitio.
    6. Publicar todo junto.
  - Audiencia: Susana y cualquier persona de Grupo Nelson.

---

## 8. Traducción al inglés (al final)

- [ ] **8.1 Traducir todo el sitio al inglés**
  - Crear la versión en inglés del sitio completo.
  - Esta tarea se hace al final, cuando todo lo demás esté terminado y aprobado en español.

---

## 9. Limpieza antes de entregar

- [ ] **9.1 Remover carpeta `docs/` del repo**
  - La carpeta `docs/` contiene documentación operativa de Brandpetram (planes, copy, estrategia, continuidad) que no debe estar en el repositorio del cliente.
  - Se puede conservar localmente pero no debe subirse al remoto.
  - **Opción A (limpieza profunda):** Usar `git filter-repo` para borrar `docs/` de todo el historial de commits + force push. Como Luis es el único con el repo, no afecta a nadie. Después agregar `docs/` a `.gitignore`.
  - **Opción B (simple):** `git rm -r --cached docs/` + agregar a `.gitignore`. Deja de trackear pero `docs/` sigue visible en commits viejos del historial.
  - Decidir cuál opción al momento de ejecutar. Se hace al final, justo antes de entregar.

---

## Notas y decisiones pendientes

1. **Redirects de PDFs:** Decidir a dónde apuntan los PDFs de WordPress. ¿Se suben al sitio nuevo o se redirigen a la página del parque correspondiente?
2. **Componentes de orben-tech:** Definir cuáles componentes específicos se replican para `/nelson/nuestra-historia`.
3. **Ajustes de liderazgo:** Definir qué ajustes visuales se necesitan en `/nelson/liderazgo`.
4. **Mejoras del blog:** Definir qué mejoras específicas se hacen.
5. ~~**DKIM de Resend:**~~ Resuelto — valor completo ya incluido en el borrador del correo.

---

## Estrategia de ejecución

### Reflexión: qué es más fácil y cuántos worktrees conviene

**Tareas que se resuelven sin worktree (configuración o gestión, no tocan código del sitio):**
- 2.1 Google Maps — es un cambio en Google Cloud Console, no en código.
- 1.3 Data de Susana — es trabajo en Sanity (CMS), no en archivos del repo.
- 4.3 Comentarios de Vercel — depende de qué pida cada comentario, pero el primer paso es extraerlos.

**Tareas más fáciles que sí tocan código (rápidas, archivos aislados):**
- 3.1 y 3.2 Imágenes en flyout menus — probablemente tocan el mismo archivo de navegación (Header). Se hacen juntas.
- 6.1 Favicon y SEO — SEO global (favicon, layout.tsx raíz) desde MAIN. Metadata específica de cada página se revisa desde el worktree de esa sección.
- 6.2 Redirects — se configura en `next.config` o `vercel.json`. Aislado.
- 6.3 Sitemap — Next.js lo puede generar automático. Aislado.

**Tareas medianas (requieren decisiones + ejecución):**
- 2.2 Menú móvil — hay que probar y posiblemente corregir. Toca Header.
- 4.1 ScrollStorytelling — copy + selección de assets. Toca `page.tsx` del index y el componente.
- 4.2 Footer — toca el componente de footer. Aislado pero depende de que las secciones estén definidas.

**Tareas grandes (requieren investigación + construcción):**
- 5.1 Liderazgo — ajustes por definir.
- 5.2 Nuestra historia — requiere revisar orben-tech y construir componentes.
- 5.3 Blog — mejoras por definir.
- 7.1 Capacitación — la más grande. Fase 1 (planeación/documentación) desde MAIN sin worktree. Fase 2 (implementación de la sección protegida) en worktree `wt/capacitacion`.
- 8.1 Traducción — la última, no se empieza hasta que todo lo demás esté listo.

### Propuesta de worktrees

Siguiendo las reglas de ownership del proyecto: MAIN coordina y documenta, los worktrees solo editan archivos de su propia sección. Archivos compartidos (Header, layout, infraestructura) se trabajan desde MAIN.

**Desde MAIN** — archivos compartidos, configuración e infraestructura
- 2.2 Menú móvil (Header — archivo compartido)
- 3.1 Imagen flyout "Nosotros" (Header — archivo compartido)
- 3.2 Imagen flyout "Experiencia" (Header — archivo compartido)
- 4.2 Footer (componente compartido)
- 6.1 Favicon y SEO global (solo layout.tsx raíz y favicon — archivos compartidos). La metadata específica de cada página/sección se revisa desde el worktree de esa sección, no desde MAIN. Antes de ejecutar, inventariar dónde vive cada metadata para partir la tarea correctamente.
- 6.2 Redirects (next.config / vercel config — infraestructura)
- 6.3 Sitemap (infraestructura)

**Desde MAIN** — tareas que no tocan código del repo
- 1.3 Data de Susana → Sanity
- 2.1 Google Maps → Google Cloud Console
- 4.3 Comentarios de Vercel → revisar y desglosar
- 7.1 Capacitación fase 1 → planeación (storyboard, documentación escrita)

**Worktree `wt/index`** — Página principal
- 4.1 ScrollStorytelling (solo toca `/index` y su componente)

**Worktree `wt/liderazgo`** — Página de liderazgo
- 5.1 Ajustes visuales (`/nelson/liderazgo`)

**Worktree `wt/nuestra-historia`** — Página de nuestra historia
- 5.2 Componentes estilo orben-tech (`/nelson/nuestra-historia`)

**Worktree `wt/blog`** — Página del blog
- 5.3 Mejoras al blog

**Worktree `wt/capacitacion`** — (después de fase 1 de planeación)
- 7.1 Fase 2: implementación de la sección protegida con videos y docs

**Traducción al inglés** — (al final de todo)
- 8.1 La traducción toca archivos compartidos y de todas las secciones. No cabe en un solo worktree sin violar ownership. Cuando llegue el momento, se debe partir en:
  - MAIN: archivos compartidos (Header, footer, layout, config de i18n)
  - Un worktree por sección para traducir las páginas de esa sección
  - Definir la partición exacta cuando se llegue a esta fase

**Orden sugerido:**
1. Primero las tareas desde MAIN que no tocan código (Sanity, Google Maps, comentarios Vercel).
2. Después los cambios compartidos desde MAIN (Header, footer, SEO, redirects, sitemap).
3. Los worktrees de páginas (`wt/index`, `wt/liderazgo`, `wt/nuestra-historia`, `wt/blog`) se pueden abrir en paralelo porque cada uno toca solo su sección.
4. `wt/capacitacion` cuando la planeación esté lista.
5. Traducción al final de todo — se partirá en MAIN + worktrees por sección (ver sección 8).

**Máximo 2-3 worktrees abiertos a la vez** para no fragmentar la atención.

---

## Borradores de comunicación (ya enviados)

> Las tareas 1.1 y 1.2 ya se completaron. Los borradores abajo se conservan como referencia de lo que se envió.

### Correo a Erick Martínez — Configuración DNS (ENVIADO 2026-04-10)

Para: emartinez@nelson.com.mx
Asunto: Cambios en DNS de nelson.com.mx — Instrucciones para GoDaddy

--- INICIO DEL CORREO (copiar desde aquí) ---

Hola Erick,

Estamos terminando de configurar el nuevo sitio web de Grupo Nelson. Para que el dominio nelson.com.mx apunte correctamente al nuevo servidor, necesitamos que hagas 6 cambios en los registros DNS desde el panel de GoDaddy.

¿Dónde se hace esto?
En GoDaddy: entra a tu cuenta → Mis productos → nelson.com.mx → DNS → Administrar.


CAMBIO 1 — Registro A (dominio raíz)
Acción: Editar el registro existente (si hay varios registros A, elimina los demás)
  Tipo: A
  Nombre: @
  Valor: 216.150.1.1
  TTL: Dejarlo en el valor por defecto (o 1 hora)


CAMBIO 2 — Registro CNAME (www)
Acción: Editar el registro existente (si en vez de CNAME hay un registro A para www, eliminarlo y crear este CNAME nuevo)
  Tipo: CNAME
  Nombre: www
  Valor: 6f8b84304fbb0101.vercel-dns-016.com
  TTL: Dejarlo en el valor por defecto (o 1 hora)


Los siguientes 4 registros son para que el sitio pueda enviar correos (formularios de contacto) desde el dominio nelson.com.mx. Son registros NUEVOS que se agregan, no reemplazan nada existente.


CAMBIO 3 — DKIM (requerido)
Acción: Agregar registro nuevo
  Tipo: TXT
  Nombre: resend._domainkey
  Valor: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDvVsJIFJfc3H3NCI9KbANwzgrEJ8ivSuW2gjsfXAc1ya4uKoRhQwHkD6gHmOZw7iZwYG7+MUAJsWUQs0LSSPgiv9wf/+QLzNpbXgRUrfd3/L566XADUTRIZjE1iQZSDS08gzI7UXMsqH73YCqAK7dqn6FgyyWEaj3e5Il74r7rVQIDAQAB


CAMBIO 4 — MX para envío (requerido)
Acción: Agregar registro nuevo
  Tipo: MX
  Nombre: send
  Valor: feedback-smtp.us-east-1.amazonses.com
  Prioridad: 10

  IMPORTANTE: Este registro MX es para el subdominio "send", NO para el dominio principal. No va a afectar tu correo actual de nelson.com.mx.


CAMBIO 5 — SPF para envío (requerido)
Acción: Agregar registro nuevo
  Tipo: TXT
  Nombre: send
  Valor: v=spf1 include:amazonses.com ~all


CAMBIO 6 — DMARC (recomendado)
Acción: Agregar registro nuevo
  Tipo: TXT
  Nombre: _dmarc
  Valor: v=DMARC1; p=none;


RESUMEN:
  1. A        @                  → Editar existente
  2. CNAME    www                → Editar existente
  3. TXT      resend._domainkey  → Agregar nuevo
  4. MX       send               → Agregar nuevo
  5. TXT      send               → Agregar nuevo
  6. TXT      _dmarc             → Agregar nuevo

Los cambios pueden tardar entre unos minutos y unas horas en propagarse. Una vez que estén listos, nosotros verificamos desde nuestro lado que todo esté funcionando correctamente.

Si tienes alguna duda con los pasos, con confianza me avisas.

Saludos

--- FIN DEL CORREO ---

### WhatsApp al contador — Cédulas fiscales y facturación (ENVIADO 2026-04-10)

--- INICIO DEL MENSAJE ---

Hola, te mando 3 cédulas fiscales de un cliente para que generes las facturas.

El total es $175,000 + IVA, dividido así:

- Parque Industrial Nelson SA de CV — $87,500 + IVA (50%)
- Baumex Constructora SA de CV — $43,750 + IVA (25%)
- Propiedades Nelson SA de CV — $43,750 + IVA (25%)

Te adjunto los 3 PDFs de las cédulas.

--- FIN DEL MENSAJE ---

Adjuntar: Parque Industrial Nelson.pdf, Baumex Constructora.pdf, Propiedades Nelson.pdf
