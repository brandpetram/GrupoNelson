# Explicando el problema que tuvimos al hacer clic en "Blog" y cómo no pudimos arreglarlo en 3 o 4 intentos

## El problema

Cuando el usuario abría el **flyout de "Recursos"** en el Header y hacía clic en el enlace de **"Blog"**, la página `/blog` se cargaba visualmente scrolleada hacia la mitad, como si el usuario hubiera hecho scroll manualmente. El problema **no** ocurría si:

- Se navegaba directamente a `/blog` escribiendo la URL.
- Se recargaba la página `/blog`.
- Se hacía clic en cualquier otro enlace del menú que no fuera el flyout de Recursos.

---

## Causa raíz real

El flujo del problema era el siguiente:

1. El usuario abre el flyout de Recursos → **Radix UI** renderiza un `NavigationMenuContent` en un portal.
2. El usuario hace clic en "Blog" → **Next.js** navega a `/blog`.
3. El `NavigationMenuContent` se cierra. **Radix UI**, como buen componente accesible, busca a dónde devolver el foco al cerrarse el menú.
4. Radix encuentra el primer elemento **focusable** de la nueva página — que resulta ser uno de los `<Link>` del componente `BlogFilter` (los filtros de categorías).
5. El navegador hace **`scrollIntoView`** automáticamente sobre ese elemento enfocado para hacerlo visible.
6. El resultado: la página aparece scrolleada hasta donde está `BlogFilter`, no desde el tope.

**El verdadero culpable no era `BlogFilter` per se, sino que sus `<Link>` de categorías eran el primer elemento focusable disponible en la nueva página cuando Radix devolvía el foco al cerrar el menú.**

---

## Intento 1: `ScrollToTop` component + `window.scrollTo` en el Header

### Qué se hizo
- Se creó un componente `ScrollToTop` que ejecutaba `window.scrollTo(0, 0)` en un `useEffect` cada vez que cambiaba la ruta (`usePathname`).
- Se integró en el `BlogLayout`.
- Se añadió `onClick={() => window.scrollTo(0, 0)}` al `ListItem` del Header.

### Por qué falló
El `useEffect` y el `onClick` se ejecutan **después** del render. El navegador realiza el `scrollIntoView` del elemento enfocado también después del render. Es una carrera de timing que el navegador gana consistentemente: su scroll ocurre después de que nuestro `scrollTo(0,0)` ya corrió.

---

## Intento 2: Refactorizar `BlogFilter` — `button` → `Link`, quitar roles ARIA y `scroll-snap`

### Qué se hizo
- Se reemplazaron los `<button>` con `router.push` por `<Link>` de Next.js.
- Se eliminaron `role="tablist"` / `role="tab"` / `aria-selected`.
- Se quitaron clases de `scroll-snap` (`snap-x`, `snap-mandatory`, `snap-center`).

### Por qué falló
El tipo de elemento (`button` vs `Link`) y los roles ARIA no influyen en si Radix elige ese elemento como destino de foco. **Cualquier elemento focusable** es candidato. Cambiar la implementación interna de `BlogFilter` sin impedir que Radix mueva el foco hacia él no resuelve nada.

---

## Intento 3: `onFocus={() => window.scrollTo(0, 0)}` en el contenedor de `BlogFilter`

### Qué se hizo
- Se añadió un manejador `onFocus` al contenedor scrollable de `BlogFilter` para forzar `window.scrollTo(0, 0)` cada vez que algún hijo recibiera foco.

### Por qué falló
El evento `focus` se dispara **después** de que el navegador ya ejecutó `scrollIntoView`. Intentar hacer `scrollTo(0,0)` en ese momento entra en conflicto con el navegador, que puede volver a hacer scroll si el elemento sigue enfocado. Nuevamente, una carrera de timing que no podemos ganar de forma confiable.

---

## Intento 4: `onCloseAutoFocus={(e) => e.preventDefault()}` en `NavigationMenuContent`

### Qué se hizo
- Se identificó que `onCloseAutoFocus` es una prop de Radix para interceptar el comportamiento de foco al cerrar un panel.
- Se añadió `onCloseAutoFocus={(e) => e.preventDefault()}` a los 5 `NavigationMenuContent` del Header.

### Por qué falló (en dos partes)

**Parte A — El wrapper del proyecto bloqueaba la prop:**
El componente `NavigationMenuContent` en `src/components/ui/navigation-menu.tsx` del proyecto tenía código que **eliminaba explícitamente** esa prop antes de pasarla a Radix:

```typescript
const forwardedProps = { ...(props as Record<string, unknown>) };
delete (forwardedProps as Record<string, unknown>).onOpenAutoFocus;
delete (forwardedProps as Record<string, unknown>).onCloseAutoFocus; // ← bloqueaba la prop
```

Se corrigió esto eliminando esas líneas. Pero apareció un segundo problema.

**Parte B — `NavigationMenu.Content` no acepta `onCloseAutoFocus`:**
A diferencia de `Dialog.Content` o `Popover.Content`, el componente `NavigationMenuContent` de Radix **no expone** `onCloseAutoFocus` en su API pública. Internamente Radix maneja el foco de forma diferente para la NavigationMenu. Pasar esa prop resultaba en el error de consola:

```
Unknown event handler property `onCloseAutoFocus`. It will be ignored.
```

Y el problema de scroll seguía igual porque Radix la ignoraba.

---

## Lo que sí funcionó (o debería funcionar)

La solución más directa encontrada fue añadir `tabIndex={-1}` a los `<Link>` dentro de `FilterButton` en `category-filter.tsx`:

```tsx
<Link
  href={href}
  tabIndex={-1}   // ← no participan en el orden de foco natural
  ...
>
```

Con esto, los links de categorías **no aparecen en el orden de tabulación** y Radix no los puede seleccionar como destino de foco al cerrar el menú. Sin foco automático sobre ellos → sin `scrollIntoView` → sin scroll inesperado.

**Sin embargo, el usuario reportó que el problema persistía incluso con este cambio**, lo que sugiere que puede haber otro elemento focusable en la página que Radix está tomando como destino, o que el comportamiento varía entre navegadores/versiones.

---

## Por qué fue tan difícil de corregir

| Razón | Detalle |
|---|---|
| El problema es de timing | La causa ocurre justo en la transición de navegación, donde el orden de ejecución de efectos, foco y scroll del navegador no es determinista |
| El síntoma se ve en una página diferente al origen | El problema nace en el Header al cerrar el menú, pero el efecto visible es en `/blog` |
| El API de Radix no es consistente | `onCloseAutoFocus` existe en `Dialog` y `Popover` pero no en `NavigationMenu`, lo que confunde el diagnóstico |
| El wrapper del proyecto ocultaba props | El componente local `NavigationMenuContent` eliminaba props silenciosamente, haciendo que los intentos parecieran estar aplicados cuando en realidad eran descartados |
| El comportamiento depende del navegador | El `scrollIntoView` automático al enfocar es comportamiento nativo del navegador, difícil de interceptar de forma portable |

---

## Posibles caminos a explorar si el problema persiste

1. **Inspeccionar qué elemento recibe el foco exactamente** — Abrir DevTools → pestaña Elements → buscar el elemento con el pseudo-selector `:focus` justo después de hacer clic en Blog desde el menú.

2. **Añadir `tabIndex={-1}` a más elementos** — Si `BlogFilter` no es el único focusable, puede haber otros componentes (como el `BlogCommandDialog` o botones de paginación) que también necesiten `tabIndex={-1}`.

3. **Explorar la prop `preventScrollRestoration`** — Next.js tiene mecanismos de scroll restoration que podrían estar interactuando.

4. **Interceptar a nivel de `NavigationMenu` root** — Investigar si el componente `NavigationMenuPrimitive.Root` acepta alguna prop que controle el comportamiento de foco de todos sus paneles hijos.

5. **Parche en el source de Radix** — Como último recurso, aplicar un patch al paquete `@radix-ui/react-navigation-menu` usando `patch-package` para modificar la lógica de `focusFirst` interna.
