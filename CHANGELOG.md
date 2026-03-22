# Bitácora del Proyecto Grupo Nelson

Registro diario de cambios y trabajo realizado en el sitio web.

---

## 2026-03-21 (Viernes)

### Migración de copy a componentes — diferencia-nelson

Primera página migrada de copy crudo a componentes brandpetramizados.

**Componentes creados:**
- `feature-section-8-bp` — Hero con título, párrafo, 4 números, imagen y CTAs. Brandpetramizado con 13 breakpoints, `text-[Xrem]`, `rounded-xs`, botones `bg-blue-600`
- `split-simple-bp` — Componente reutilizable para secciones de texto + imagen con patrón zig-zag (`imagePosition: left | right`). Acepta children para máxima flexibilidad
- `offset-with-feature-list-bp` — Sección de infraestructura con fondo oscuro, checklist de 6 items con checkmarks
- `logos-grid-bp` — Cuadrícula de logos 4x3 con líneas finas, texto 40% izquierda y logos 60% derecha
- `logos-grid-bp-2` — Variante con fila inferior de 2 logos grandes (UTC Aerospace, General Dynamics)

**Página `/nelson/diferencia-nelson`:**
- Hero: feature-section-8-bp con título "Familia fundadora. Trato directo. Desde 1965."
- 3 diferenciadores con patrón zig-zag (imagen alterna izq/der)
- Sección infraestructura con checklist en fondo oscuro
- CTA pendiente de decidir

**Página `/nelson/trayectoria`:**
- LogosGridBP2 como hero con 12 logos + 2 logos grandes

**Header:**
- Logo 20% más grande en desktop (`md:scale-150`)

### Limpieza de páginas duplicadas

- Eliminado `/constructora/leed/page.tsx` (hub redundante, `/constructora/certificacion-leed` es la página principal)
- Eliminado `/solutions/build-to-suit` (duplicado de `/constructora/build-to-suit`)
- Eliminado `/solutions/turnkey` (duplicado de `/constructora/llave-en-mano`)
- Carpeta `/solutions/` eliminada completamente

### Correcciones QA de juicio

6 páginas corregidas tras QA: calidad-ambiental, clima-extremo, materiales-recursos, proceso-certificacion, diferencia-nelson, liderazgo.

### Documentación

- Actualizado `como-brandpetramizar-un-componente.md` con prosa sobre el problema Frankenstein, analogía Legorreta, fingerprint digital (fonts grandes, leading-none, tracking-tighter), reglas de `rounded-xs`, botones `bg-blue-600`, `text-[Xrem]`, y proceso de migración copy→componentes
- Creado `migracion-copy-a-componentes.md` en `/Proyectos/` (guía permanente sobre analogía casa-sitio web y riesgo de romper componentes al migrar copy)
- Creado `que-sigue.md` con plan de pendientes

---

## 2026-03-20 (Jueves)

### QA de juicio — 13 páginas aprobadas

- QA de juicio en 11 páginas (7 aprobadas de primera, 5 corregidas y aprobadas)
- Total: 13 páginas con QA completo (incluyendo baumex y proyectos-especializados)

---

## 2026-03-18 (Martes)

### Copy comercial — 8 páginas nuevas

- Copy B2B para build-to-suit, llave-en-mano, diseño-e-ingeniería
- Copy B2B para 3 páginas de Experiencia (excelencia-operativa, casos-de-exito, certificaciones)
- Copy para Estándares Internacionales (FM Global, NFPA, ISN, NOM, IBC)
- Reescritura de llave-en-mano con ángulo correcto (inventario existente, no construcción)

### LEED

- Reescritura de 8 páginas LEED con 17 reglas de copywriting B2B
- Copy LEED y Sustentabilidad como puerta de entrada a 7 pilares
- Migración de copy LEED a componentes reales (hero-marketing-1, sidebar-sticky-1)
- Movido contenido a `/constructora/certificacion-leed`
- Eliminado redirect 301

---

## 2026-03-17 (Lunes)

### Sistema de copywriting B2B industrial

- 17 reglas de copywriting B2B documentadas
- Vocabularios estratégicos y temarios comerciales
- Brief de cliente y documentación de proceso
- Copy para proyectos especializados + 3 páginas Nelson desarrolladora
- Corrección Regla 17: superioridad sin desprecio

---

## 2026-01-22 (Miércoles)

### Replicación: Página /componentes-dos

Se replicó la página `/conveyors-industriales/ambaflex` de SDI hacia Grupo Nelson como `/componentes-dos`, siguiendo el proceso incremental documentado.

**Componentes copiados y adaptados:**
- 11 componentes principales (cuadricula-section, mosaico, circulos, tres-cards, etc.)
- 7 componentes UI helpers (linea-l, poligono-texto, gradient-blob, etc.)
- 1 componente shadcn/ui (aspect-ratio)

**Adaptaciones realizadas (proceso incremental con commits):**

**Etapa 1: Imágenes**
- 30 assets reemplazados (251-280) con fotos de parques industriales en Mexicali
- Numeración secuencial sin repetir

**Etapa 2: Alts**
- 28 alts de imágenes → "Lorem ipsum"

**Etapa 3: Títulos**
- 17 títulos reemplazados con keywords estratégicos:
  - "Parques Industriales en Mexicali"
  - "Construcción de Naves Industriales en Mexicali"
  - "Naves Industriales Built-to-Suit"
  - "Construcción Llave en Mano Built-to-Suit"
  - "Infraestructura de Clase Mundial"
  - BigNumber: "+4.5 Millones de Pies² Desarrollados desde 1965"

**Etapa 4: Textos**
- 15 textos reemplazados usando vocabulario estratégico de Grupo Nelson
- Implementados conceptos: turnkey, build-to-suit, constructora in-house, 58 años de trayectoria, Fortune 500, expertise fronterizo

**Etapa 5: Colores**
- 17 colores reemplazados: orange/red → blue (600/700)
- Paleta consistente con `/componentes`

**Etapa 6: Limpieza**
- Archivos renombrados (3): eliminado sufijo "Ambaflex"
- Funciones renombradas (4): eliminadas referencias a SDI/Ambaflex
- Comentarios actualizados
- Imports actualizados

**Refactors realizados:**
- Componentes movidos de `/components/sdi/` → `/components/brandpetram/`
- Organización correcta según nuevas reglas (todo a brandpetram por defecto)

**Dependencias instaladas:**
- `next-themes` (requerida por componente Logo)

**Build final:** ✅ Exitoso - página `/componentes-dos` lista para revisión

---

## [Unreleased]

### Agregado
- Header local con navegación completa de Grupo Nelson
  - Menú desktop con megamenús para 5 secciones: Why Nelson, Parks, Solutions, Expertise, Insights
  - Menú móvil con navegación drill-down (submenús con animación)
  - Efecto de scroll: fondo blur y borde al hacer scroll
  - Datos de navegación separados en `src/data/nav/navigation.ts`
- Componentes UI locales copiados de la librería:
  - `src/components/ui/button.tsx`
  - `src/components/ui/navigation-menu.tsx`
  - `src/components/ui/accordion.tsx`
- Hook `useMedia` para detección de breakpoints en `src/hooks/use-media.ts`

### Cambiado
- Reemplazado `NavBar` de la librería por `Header` local personalizado
- Removida la comparación side-by-side de tarjetas hero (ya no se necesita)
- Simplificado el hero para usar solo `TarjetaHero1`

### Removido
- Import de `TarjetaHeroOriginal` (componente de comparación temporal)
- Import de `NavBar` de la librería (ahora usa Header local)

## [0.0.1] - 2024-11-XX

### Agregado
- Configuración inicial del proyecto con Next.js 16
- Integración con `@brandpetram/componentes-2026`
- HeroVideoCover con video de parque industrial
- Configuración de deploy en Vercel
