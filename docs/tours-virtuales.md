# Tours Virtuales — Grupo Nelson

## Proveedor

**CloudPano** — https://app.cloudpano.com

Tours virtuales 360° compatibles con desktop, móvil, tablet y VR. No requiere descargas adicionales para el usuario.

## Tours disponibles

| Tour | ID | Link directo | Estado |
|------|-----|-------------|--------|
| Tour 1 (parque/nave por confirmar) | `hY5fjENu2` | https://app.cloudpano.com/tours/hY5fjENu2 | Activo |

## Embed

CloudPano provee un script para embeber tours:

```html
<div id="hY5fjENu2">
  <script
    type="text/javascript"
    async
    data-short="hY5fjENu2"
    data-path="tours"
    data-is-self-hosted="false"
    width="100%"
    height="500px"
    src="https://app.cloudpano.com/public/shareScript.js"
  ></script>
</div>
```

**Para Next.js:** No se puede usar el script tag directamente en un componente React. Se usa un `<iframe>` apuntando al link directo del tour, o se carga el script con `next/script`.

## Implementación en el sitio

El tour se implementó como iframe en un componente reutilizable (`src/components/brandpetram/virtual-tour-bp.tsx`). Se usa iframe en lugar del script embed porque:

1. Es más predecible en React/Next.js (no hay conflictos con el DOM virtual)
2. Se puede controlar el tamaño con clases de Tailwind
3. Se puede cargar lazy para no afectar performance

## Pendientes

- [ ] Confirmar a qué parque/nave corresponde el tour `hY5fjENu2`
- [ ] Preguntar si habrá más tours (uno por parque, uno por nave, etc.)
- [ ] Definir en qué páginas mostrar los tours
