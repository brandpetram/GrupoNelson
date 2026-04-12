# Plan: Fix de navegación en menú móvil

## Problemas observados

El menú móvil tiene tres bugs de UX que se refuerzan entre sí:

### Bug 1: Cross-page click — cierre prematuro (flash de contenido incorrecto)

Cuando el usuario hace clic en una sección diferente a la actual:

1. `onClick={closeMenu}` cierra el menú **inmediatamente**
2. Next.js inicia la navegación a la sección destino (sección X)
3. El usuario ve la página que estaba detrás del menú (sección Y) durante ~2 segundos
4. Finalmente llega a la sección X

El usuario experimenta un flash de contenido incorrecto entre el menú y su destino.

### Bug 2: Sin feedback de carga — taps repetidos

Como el menú se cierra instantáneamente sin mostrar ningún estado de carga, el usuario cree que su clic no funcionó y vuelve a tocar. El resultado es que parece que "funciona al segundo o tercer intento", cuando en realidad la primera navegación sí se disparó pero tardó en completarse. Esto se agrava en `next dev` porque no hay prefetch por visibilidad en desarrollo.

### Bug 3: Same-page click — parece roto

Todos los items del menú se ven idénticos sin importar si el usuario ya está en esa página. Cuando toca el item de la página actual, el menú se cierra y no pasa nada — parece que falló. No hay `aria-current="page"` ni indicador visual de "ya estás aquí".

**Flujo deseado:** Menú abierto → feedback de que el clic registró → transición a sección X. Sin intermediarios, sin confusión.

## Causa raíz

En `Header.tsx`, los links del `MobileMenu` tienen dos mecanismos de cierre:

```tsx
// Mecanismo 1: onClick inmediato (línea 510)
<Link href={link.href} onClick={closeMenu} ...>

// Mecanismo 2: useEffect que cierra cuando pathname cambia (línea 267-269)
React.useEffect(() => {
  setIsMobileMenuOpen(false);
}, [pathname]);
```

El mecanismo 1 es el problema principal. Cierra el menú antes de que la navegación termine. El mecanismo 2 (useEffect en pathname) ya hace lo correcto — cierra el menú cuando la nueva página cargó. Pero el mecanismo 1 se ejecuta primero y oculta todo.

Además, en Next 16 el `<Link>` ejecuta la navegación dentro de `startTransition` y lee `linkInstanceRef.current` de forma asíncrona. Si el cierre del menú desmonta el `<Link>` antes de que complete, puede haber una carrera entre unmount y navegación.

## Solución propuesta

### Paso 1: Reemplazar `onClick={closeMenu}` con cierre inteligente

**Lógica del nuevo onClick:**

```tsx
onClick={() => {
  const target = new URL(link.href, window.location.origin).pathname;
  if (target === pathname) {
    // Same-page click: cerrar inmediatamente (no habrá cambio de pathname)
    closeMenu();
  }
  // Cross-page click: NO cerrar. El useEffect en [pathname] se encarga
  // cuando la navegación realmente termine.
}}
```

**Archivos a modificar:** `src/components/Header.tsx`

**Links afectados:**
- Línea 510: Links de secciones en el submenu (`link.href`)
- Línea 463: Botón de Contacto en el menú principal

**Nota sobre anchors:** Los datos actuales en `src/data/nav/navigation.ts` y `navigation-en.ts` no contienen links con `#anchor`. Si se agregan en el futuro, el mismo patrón de comparación los cubriría (pathname no cambiaría → cierre inmediato).

### Paso 2: Marcar la ruta actual en el menú (estado activo)

Agregar detección de item activo por cada link del menú:

```tsx
// Server-safe: comparar strings internas sin usar window
const isCurrent = link.href === pathname || link.href === `${pathname}/`;
```

No usar `new URL(href, window.location.origin)` en render — `Header.tsx` es Client Component pero Next genera HTML en el servidor en la carga inicial y `window` no existe ahí. El parseo con `window` está bien dentro de `onClick` (que solo corre en el browser), pero para estado activo se comparan strings directamente.

**Renderizado del item activo:**
- `aria-current="page"` en el `<Link>` para accesibilidad
- Estilo visual distinto (ej: fondo tenue, icono de check, o texto en color primario)
- Esto resuelve el Bug 3: el usuario ve que ya está en esa página antes de tocar

### Paso 3: Agregar indicador de navegación en progreso

Para resolver el Bug 2 (taps repetidos por falta de feedback):

**API:** `useLinkStatus` de Next.js App Router — disponible en este proyecto (next@16.1.4). Este hook está diseñado para leer el estado pending de un `<Link>` durante navegación SPA.

**Nota de implementación:** `useLinkStatus` debe vivir dentro de un componente descendiente del `<Link>`, no en un hook global del menú. Esto implica extraer cada item del menú a un componente `MobileMenuLink` que envuelva el `<Link>` y use el hook internamente.

**Feedback visual:**
- Usar un indicador de tamaño fijo que esté siempre renderizado (ej: un contenedor con dimensiones fijas). Al detectar `pending`, cambiar opacidad/animación del indicador — no insertar/remover elementos que muevan el texto del item. En un menú móvil estrecho cualquier layout shift es visible.
- El menú se mantiene visible con el indicador hasta que `pathname` cambie y el useEffect cierre todo

### Paso 4: Definición de alcance

**Dentro del alcance:**
- Links del submenu dentro de `MobileMenu` (línea 508-528)
- Botón de Contacto del menú principal (línea 463)

**Fuera del alcance (necesitan decisión aparte):**
- Banderas de idioma (`LanguageFlags` en `language-flags.tsx`) — tienen lógica propia con `href="#"` y clic al idioma actual
- Links del menú desktop (`NavMenu`)
- Logo móvil (`Header.tsx` línea 346) — también navega y depende de cambio de pathname; si se quiere consistencia total del header móvil, incluirlo explícitamente

### Paso 5: Testing manual en móvil

Probar en dispositivo real o DevTools con throttling de red (3G lento):

- **Cross-page:** Abrir menú → clic en sección diferente → verificar que el menú permanece visible con indicador de carga hasta que la página cargue
- **Same-page:** Abrir menú → verificar que el item actual se ve diferente → clic en item actual → menú cierra inmediatamente
- **Taps repetidos:** Abrir menú → clic en sección → verificar que el estado pending disuade de tocar de nuevo
- **Scroll lock:** Verificar que `overflow: hidden` se mantiene mientras el menú está abierto durante la carga
- **Idiomas:** Probar navegación entre secciones del mismo idioma

## Implementación

| Paso | Complejidad | Detalle |
|------|-------------|---------|
| 1 | Baja | Reemplazar onClick con lógica condicional same-page vs cross-page |
| 2 | Baja | Comparar href con pathname + aria-current + estilo condicional |
| 3 | Media | Extraer `MobileMenuLink`, integrar `useLinkStatus`, estilo pending |
| 4 | N/A | Definición de alcance, no hay código |
| 5 | Baja | Testing en DevTools mobile |

**Ejecución:** Desde MAIN (no desde worktree de sección), ya que el cambio toca `Header.tsx` que es un componente compartido del sistema.

## Notas de contexto

- Los datos de navegación en `src/data/nav/navigation.ts` y `navigation-en.ts` no contienen links con `#anchor`; el riesgo es preventivo.
- `useLinkStatus` está confirmado disponible en next@16.1.4 (versión instalada).
- En `next dev` el problema se siente peor porque no hay prefetch por visibilidad. En producción la navegación será más rápida, pero el fix sigue siendo necesario para conexiones lentas y páginas pesadas.
