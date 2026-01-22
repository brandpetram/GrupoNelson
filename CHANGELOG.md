# Bitácora del Proyecto Grupo Nelson

Registro diario de cambios y trabajo realizado en el sitio web.

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
