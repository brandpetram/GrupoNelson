# Memoria de trabajo — 2026-04-06 al 2026-04-11

Propósito: documentar todo el trabajo realizado desde la última memoria (2026-04-05).

---

## Resumen ejecutivo

En 6 días se completó la **versión bilingüe completa del sitio** (inglés + español), se implementó **copy canónico en 6+ páginas**, se rediseñaron varias secciones, y se creó el **sistema de copywriting con roles especializados**. El sitio pasó de ser monolingüe español a tener rutas `/es/` para español y rutas raíz para inglés.

---

## 2026-04-06 — Worktrees y copy

### Copy implementado
- **Excelencia operativa:** copy del brief aprobado implementado en page.tsx y secciones locales.
- **Certificaciones:** copy del brief aprobado implementado. Brief v2 aprobado y tracker actualizado.

### Infraestructura
- Cerrada **Fase 0** del plan maestro de worktrees: MAIN formalizado como orquestador.
- Documentación de continuidad y reglas de worktrees creada.
- Fix de DevOverlay para resolución de paths en worktrees locales.

---

## 2026-04-07 — Merges y rebalanceo narrativo

### Merges a main
- `section/excelencia-operativa` — mergeado.
- `section/certificaciones` — mergeado.

### Casos de éxito
- Rebalanceo narrativo: separar bloque híbrido DHL+cierre, simplificar encabezados Gulfstream y Honeywell.
- Localizar mosaico de pruebas dentro de la sección.

### Fix
- DevOverlay: no mutar source en build, documentar workflow de clean worktree.

---

## 2026-04-08 — Sistema de copy, liderazgo, contacto, certificaciones

### Sistema de copywriting (roles especializados)
- **Context Curator:** rol, tasks, guía de fuentes.
- **Value Finder:** rol, tasks, reportes.
- **Angle Architect:** rol, contrato de lectura, output como angle brief.
- **Narrative Copywriter:** rol, contrato de lectura, diagnóstico obligatorio.
- **QA reviewers:** angle, narrative, structure, prominence.
- Visual Matchmaker + workflow de match visual.
- Workflows de copy: orden de roles, automatización y prevención de errores.
- Convención de output y propuesta de separar copy de layout.

### Normas, certificaciones y estándares
- Renombrado de `certificaciones` a `normas-certificaciones-estandares`.
- Angle brief v0 creado con taxonomía de tres capas.
- Copy implementado según brief: reestructuración narrativa completa.
- Aclaraciones canónicas ampliadas: NOM-009, NOM-027, IBC, DC-3, NFPA, sistemas contraincendio.
- Página de recursos creada.

### Liderazgo
- Angle brief producido desde cero.
- Copy implementado: reestructurar page.tsx, eliminar bloques fuera de territorio, corregir violaciones canónicas.
- MosaicoLiderazgo actualizado.

### Contacto
- Formulario reemplazado con diseño Tailark Pro (contact-9).
- Fondo de cuadrícula y nube de color agregados.
- Lista de países ampliada con economías emergentes y Asia.
- Estados Unidos como país por defecto.
- Remitente del formulario cambiado a nelson.com.mx.

### Componentes nuevos
- Hero MotionPlus + cursor trail Grupo Nelson.
- StandardsPoster integrado en nuestra-historia.
- 4 feature-sections + 1 with-testimonial desde dashboard.

### Multimedia
- 69 fotos de drone de nave Gulfstream en Nelson II agregadas.

### Docs
- Planes para roles Digital Interior Assistant y Digital Layout Assistant.

---

## 2026-04-09 — Liderazgo rediseño

- Rediseño editorial minimalista de la página de liderazgo.

---

## 2026-04-10 — Blog, SEO, instrucciones, inglés, fixes masivos

### Blog
- Rediseño de página de blog con estilo Tailark Pro y columna sticky.
- Schema `dataTable`, renderer y agente de tablas implementados.

### SEO
- Sitemap.xml con páginas estáticas.
- Redirects 301 para URLs antiguas de WordPress.
- Favicon agregado y metadata SEO optimizado en todas las páginas.

### Páginas nuevas
- **Legal:** términos y privacidad creados, footer actualizado con links reales.
- **Nuestra historia:** angle brief + copy canónico implementado en homepage.
- **/instrucciones:** sección protegida por contraseña con guías para Susana.

### Homepage
- Copy canónico del angle brief de index implementado.
- Textos genéricos reemplazados en post-it de excelencia operativa.

### Fixes y correcciones
- Footer: datos reales de Grupo Nelson (antes lorem ipsum).
- Foto real de Nelson II reemplazando placeholder.
- Link de YouTube en trayectoria corregido.
- Favicon SVG limpiado.
- ScrollStorytelling: reemplazar videos por imágenes estáticas en mobile, intercambiar media.
- Emblema Nelson cortado en casos de éxito corregido.
- CTAs rotos en constructora, contacto y experiencia corregidos.
- ScrollStorytelling CTAs y destinos corregidos.

### Liderazgo
- Anonimizar nombres por solicitud del cliente.
- Reemplazar "80% regresan" y reescribir sin nombres personales.
- Stats ajustados: dueños → 4.5M+ pies², cuadrícula SVG, generaciones a 4.
- Videos animados en flyout menus.

### Planes y worktrees
- Plan maestro de reutilización, corrección y traducción creado.
- Worktrees creados: `wt/ingles`, `wt/instrucciones`, `wt/revisar-ctas`.
- Plan para versión en inglés del sitio.
- Auditoría completa de CTAs y botones.
- Inventario de componentes Tier 3 para traducción.

---

## 2026-04-11 — Versión bilingüe completa + rediseño parques

### Versión en inglés (Fases 2-13)
Esta fue la tarea más grande de la semana. El sitio pasó de monolingüe español a bilingüe completo.

**Fase 2:** Propear componentes Tier 1 para reutilización.

**Fase 3:** Auditoría de CTAs completada. Refactor de layout + fixes de Codex.

**Fase 4:** Protección por contraseña para `/instrucciones`. Plan Lighthouse.

**Fase 5:** Header y Footer con prop `lang` bilingüe. Glosario bilingüe, route-map, navegación inglés. Propeado Tier 2.

**Fase 6a:** Reorganización de rutas — español bajo `/es/`, redirects 301.

**Fase 6b:** Páginas en inglés creadas:
- Home, Contact, Industrial Parks (primeras)
- About, Legal, Parks restantes
- Construction (6 páginas) + Experience (3 páginas + 11 sections)
- LEED (9 archivos), Inventory (4 archivos), Resources
- Baumex en inglés (12 componentes Tier 3 traducidos)

**Fase 7:** SEO bilingüe — `createMetadata` helper + sitemap con hreflang.

**Fases 8-10:** Componentes propeados, `createMetadata` en 72 páginas, footer EN.

**Fase 11:** Language switcher con route-map.

**Fases 12-13:** Limpieza de layouts huérfanos. 40+ componentes con prop `lang` bilingüe (letras griegas, componentes con-props, Baumex).

### Fixes de texto EN
- "Contact" → "Contact Us" en Header y hero.
- TickerOverflow, TarjetaHeroOriginal, AlphaBP — texto español eliminado de home EN.
- Redirects explícitos para parques — evitar atrapar imágenes de `/public/`.

### Rediseño página de parques industriales
- Nuevo layout simétrico: foto izquierda, datos+mapa a la derecha.
- Stats resumidos: hectáreas, año, naves, empresas.
- Badge "Disponible ahora" para parques con disponibilidad inmediata.
- Orden: Nelson II, Nelson I, El Vigía I, El Vigía II.
- Versiones EN y ES.
- Coordenadas GPS agregadas para Nelson I, El Vigía I, El Vigía II (aproximadas).

### Fix flyouts del nav
- 9 títulos de sección en los flyouts estaban hardcodeados en español.
- Ahora usan el sistema `navLabels` bilingüe que ya existía en el Header.

### Dark mode
- Ficha técnica de parques: colores de tabla y detalle expandido ahora usan variables semánticas (`bg-background`, `bg-muted`, `border-border`) en vez de `bg-zinc-*` hardcodeados.

### AlphaBP (homepage)
- Translate-y del div azul ajustado para que el texto no quede bloqueado por la imagen en mobile.
- Mobile: translate-y-88 (base), translate-y-96 (393bp).
- Desktop: translate-y-20.

### SEO adicional
- `robots.ts` agregado — genera robots.txt con referencia al sitemap.
- Datos oficiales corregidos: teléfono (686) 553-4088, dirección Ave. Reforma #1699.

### Docs
- Plan para acceso programático a Google Search Console (movido a `~/ops/planes/`).
- Conteo de sitemap unificado a 114 URLs (dato real de producción).

---

## Decisiones importantes de la semana

1. **Español bajo `/es/`, inglés en raíz** — el inglés es el idioma principal para visitantes internacionales (prospectos de manufactura).
2. **`createMetadata` helper** — centraliza SEO bilingüe con hreflang automático.
3. **Prop `lang` en componentes** — en vez de duplicar componentes, se agregan traducciones inline con defaults en español.
4. **Sistema de copy con roles** — Context Curator → Value Finder → Angle Architect → Narrative Copywriter → QA reviewers.
5. **Anonimizar liderazgo** — por solicitud del cliente, se quitaron nombres personales.
6. **Colores semánticos en dark mode** — usar `bg-background`/`bg-muted`/`border-border` en vez de valores zinc hardcodeados.

---

## Estado actual del proyecto

- **Sitio bilingüe:** completo (EN + ES), 72+ páginas con metadata SEO.
- **Language switcher:** funcional con route-map.
- **Copy canónico:** implementado en homepage, excelencia-operativa, certificaciones, casos-de-éxito, nuestra-historia, liderazgo, normas-certificaciones-estándares.
- **Blog:** funcional con schema dataTable y rutas dinámicas.
- **SEO:** sitemap con hreflang, robots.txt, redirects 301, metadata en todas las páginas.
- **Parques industriales:** listado rediseñado, fichas técnicas con dark mode corregido.
- **Formulario de contacto:** Tailark Pro con Resend, remitente nelson.com.mx.
