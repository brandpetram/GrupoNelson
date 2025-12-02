# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).

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
