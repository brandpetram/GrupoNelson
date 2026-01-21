# Issue: NavigationMenu Flyout Positioning - Insights Menu

## Objetivo
Tenemos un Radix UI NavigationMenu con 5 triggers: Why Nelson, Parks, Solutions, Expertise, e Insights.

**Queremos:**
1. Efecto "fancy" donde el viewport compartido cambia de tamaño dinámicamente (una sola caja que se expande/encoge con animación suave)
2. Cada flyout debe posicionarse centrado debajo de su trigger keyword

## Estado Actual
- **Funcionan perfectamente (4/5):** Why Nelson, Parks, Solutions, Expertise
  - Tienen efecto fancy ✓
  - Se posicionan correctamente bajo sus triggers ✓

- **NO funciona (1/5):** Insights
  - Tiene efecto fancy ✓
  - NO se posiciona bajo su trigger ✗ (se abre muy a la izquierda)

## Contexto Técnico

### Estructura del Header
```tsx
<nav className="mx-auto w-full max-w-[1280px] px-4 lg:px-6">
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Why Nelson</NavigationMenuTrigger>
        <NavigationMenuContent>...</NavigationMenuContent>
      </NavigationMenuItem>
      {/* ... Parks, Solutions, Expertise ... */}
      <NavigationMenuItem>
        <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
        <NavigationMenuContent className="p-0.5">
          <div className="w-[450px]">...</div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</nav>
```

### NavigationMenuViewport Actual (funciona para 4/5)
```tsx
function NavigationMenuViewport({ className, ...props }) {
  return (
    <div className="absolute left-0 top-full flex w-full justify-start perspective-[2000px]">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'bg-popover text-popover-foreground h-(--radix-navigation-menu-viewport-height)',
          'ring-foreground/10 rounded-(--radius) md:w-(--radix-navigation-menu-viewport-width)',
          'relative mt-1.5 origin-top overflow-hidden border border-transparent p-0.5',
          'shadow-xl shadow-black/10 ring-1 transition-[width,height,transform] duration-200',
          'data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in',
          className,
        )}
        {...props}
      />
    </div>
  );
}
```

## Intentos Fallidos

### 1. Remover `left-8` fixed positioning
- **Cambio:** Quité `**:data-[slot=navigation-menu-viewport]:left-8`
- **Resultado:** No cambió nada

### 2. Cambiar max-width del viewport
- **Cambio:** `max-w-6xl` → `max-w-[1280px]`
- **Resultado:** No cambió nada

### 3. Usar `viewport={false}`
- **Cambio:** `<NavigationMenu viewport={false}>`
- **Resultado:**
  - ✓ Todos los flyouts se alinearon correctamente
  - ✗ Se perdió el efecto fancy (cada flyout es independiente)
  - **Conclusión:** No aceptable, queremos el efecto fancy

### 4. Centrar con translate
- **Cambio:** `left-1/2 -translate-x-1/2` en el content
- **Resultado:** No funcionó, rompió todo

### 5. Viewport wrapper con justify-center
- **Cambio:** Wrapper div con `justify-center`
- **Resultado:** Todos los flyouts se movieron muy a la derecha

### 6. Fixed positioning
- **Cambio:** `fixed inset-x-0 top-[calc(5rem+0.5rem)]`
- **Resultado:** Rompió el posicionamiento de Radix UI

### 7. Wrapper extra-ancho (200vw)
- **Cambio:** `w-[200vw] -left-[50vw] flex justify-center`
- **Resultado:** Todos los flyouts se movieron muy a la derecha

### 8. Sin wrapper, viewport absolute
- **Cambio:** Quité wrapper, viewport con `position: absolute` inline
- **Resultado:** Se perdió efecto fancy, peor que antes

### 9. Reducir ancho de Insights
- **Cambio:** `w-[520px]` → `w-[450px]`
- **Resultado:** Solo redujo el contenido, no mejoró el posicionamiento

## Análisis del Problema

El viewport compartido de Radix UI calcula su posición mediante transforms basándose en el trigger activo. Cuando "Insights" está en el extremo derecho:

1. Radix UI intenta posicionar el viewport bajo el trigger
2. Detecta que se saldría del borde derecho del contenedor padre
3. Ajusta la posición para que quepa
4. Pero el ajuste lo deja muy a la izquierda

El contenedor padre tiene `max-w-[1280px]` y padding, lo que limita el espacio disponible.

## Lo Que Necesitamos

Una solución que:
1. Mantenga el efecto fancy (viewport compartido) ✓
2. Posicione correctamente el flyout de Insights bajo su trigger
3. No rompa los otros 4 flyouts que ya funcionan bien

## Archivos Relevantes

- `/Users/lmuzquiz/Proyectos/GrupoNelson/src/components/Header.tsx` - Componente principal
- `/Users/lmuzquiz/Proyectos/GrupoNelson/src/components/ui/navigation-menu.tsx` - Componente Radix UI wrapper
- `/Users/lmuzquiz/Proyectos/GrupoNelson/src/app/globals.css` - Animaciones y estilos

## Screenshots

Ver las imágenes proporcionadas por el usuario que muestran:
- Insights flyout aparece muy a la izquierda (no debajo de su trigger)
- Los otros 4 flyouts funcionan perfectamente
