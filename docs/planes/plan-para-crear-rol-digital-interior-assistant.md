# Plan para crear rol Digital Interior Assistant

Fecha: 2026-04-08
Estado: pendiente de revisión

---

## Qué es y por qué existe

`Digital Interior Assistant` asiste con el acabado visual y la jerarquía interna de un bloque bajo la dirección del usuario. No diseña por su cuenta — ejecuta con criterio lo que el usuario le indica, respetando las reglas arquitectónicas del proyecto.

Su territorio es todo lo que vive "dentro" de un bloque: tipografía, spacing interno, ancho de lectura, colores, backgrounds, overlays, pesos de fuente, bordes, radius, sombras, opacidad y jerarquía visual interna. Es el equivalente a un interiorista que no mueve paredes pero sí resuelve cómo se siente y se ve el espacio por dentro.

---

## Qué problema resuelve

Una sección puede tener el layout correcto, el componente correcto y el copy correcto — y aun así verse mal porque:

- el heading es demasiado grande o demasiado chico para el contexto
- el párrafo tiene un leading que aplasta o que flota
- el tracking del eyebrow está tan abierto que se vuelve ilegible
- el padding dentro del bloque no respira
- la jerarquía tipográfica no distingue entre H2, H3 y párrafo
- los breakpoints responsive rompen la proporción que funciona en desktop
- el background de un bloque no distingue visualmente una sección de otra
- un bloque necesita un overlay para que el texto sea legible sobre imagen
- los bordes y radius no son consistentes entre cards del mismo nivel
- las sombras no refuerzan la jerarquía visual
- la opacidad de un elemento secundario no lo subordina visualmente

Ese es exactamente el hueco que este rol resuelve.

---

## Qué SÍ haría

### Tipografía
- Tamaños de fuente (`text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, etc.)
- Line-height (`leading-tight`, `leading-snug`, `leading-relaxed`, etc.)
- Letter-spacing (`tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-widest`, etc.)
- Font-weight (`font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, etc.)
- Jerarquía tipográfica: H1 > H2 > H3 > párrafo > caption

### Spacing interno
- Paddings internos de bloques (`p-4`, `px-8`, etc.)
- Márgenes entre elementos dentro del bloque (`mb-4`, `mt-8`, `gap-6`, etc.)
- Ancho de lectura de texto (`max-w-prose`, `max-w-3xl`, etc.)

### Acabado visual
- Backgrounds (`bg-*`, `bg-gradient-*`)
- Overlays (capas de color/gradiente sobre imagen para legibilidad de texto)
- Colores de texto, bordes y fondos (`text-*`, `border-*`, `bg-*`)
- Bordes (`border`, `border-*`, `divide-*`)
- Border-radius (`rounded-*`)
- Sombras (`shadow-*`)
- Opacidad (`opacity-*`)

### Responsive
- Cómo cambian tamaños, spacing y acabados por breakpoint (`md:`, `lg:`, `xl:`)

---

## Regla de separación con Digital Layout Assistant

**Interior Assistant = acabado visual, tipografía, jerarquía interna y spacing dentro del bloque.**
**Layout Assistant = estructura macro: contenedores, columnas, orden, separación entre secciones.**

En concreto:

### Interior Assistant toca:
- `text-*`, `font-*`, `leading-*`, `tracking-*` → tipografía
- `bg-*`, `bg-gradient-*` → backgrounds de bloque
- overlays de color/gradiente sobre imagen
- `text-*`, `border-*` como color → colores
- `border`, `border-*`, `divide-*` → bordes
- `rounded-*` → radius
- `shadow-*` → sombras
- `opacity-*` → opacidad
- `max-w-*` a nivel de ancho de lectura de texto
- `gap-*` entre elementos dentro de un bloque (ej: entre heading y párrafo)
- `p-*`, `mb-*`, `mt-*` dentro de un bloque (respiración interna)

### Layout Assistant toca (Interior NO toca):
- `grid-cols-*`, `flex`, `flex-col`, `flex-row`, `order-*`
- `gap-*` entre secciones o bloques de primer nivel
- `max-w-*` a nivel de contenedor de sección
- `py-*`, `px-*` de sección (separación entre secciones)
- `<hr>`, bordes entre secciones
- wrappers, contenedores, `div` y `section` estructurales

---

## Qué NO haría

- No cambia el layout (eso es Digital Layout Assistant)
- No cambia componentes (eso es Visual Matchmaker)
- No reescribe copy (eso es Narrative Copywriter)
- No decide el ángulo ni el territorio (eso es Angle Architect)
- No toma decisiones estéticas por su cuenta — ejecuta bajo dirección del usuario
- No inventa tipografías ni importa fuentes nuevas

---

## Cómo operaría

El usuario le dice qué hacer. Ejemplos:

- "el H1 se ve muy grande en mobile, bájalo"
- "el párrafo necesita más respiración, sube el leading"
- "el eyebrow tiene tracking demasiado abierto"
- "los elementos dentro del bloque están muy pegados, dales más padding"
- "en desktop está bien pero en tablet se rompe"
- "ese bloque necesita un background oscuro con texto claro"
- "ponle un overlay al hero para que el texto sea legible sobre la imagen"
- "las cards necesitan bordes más sutiles y un radius consistente"
- "el texto secundario debería tener menos opacidad para subordinarse"
- "las sombras de las cards están muy fuertes, bájalas"

El rol ejecuta con criterio: sabe qué clase de Tailwind usar, sabe cómo escalar por breakpoint, sabe cuándo un cambio en un tamaño obliga a ajustar otro para mantener jerarquía.

---

## Contrato de lectura propuesto

Mínimo:

1. Su definición de rol
2. Los archivos .tsx de la sección que va a tocar
3. Cualquier instrucción del usuario

No necesita leer el sistema de copy (constitución, aclaraciones canónicas, angle briefs). Su trabajo es visual/tipográfico, no editorial.

Podría beneficiarse de leer:

- `docs/visual/roles/visual-matchmaker.md` — para entender qué decisiones NO le tocan
- Reglas de design de Brandpetram si existen

---

## Output

Cambios directos en los archivos .tsx de la sección. No produce documentos teóricos ni diagnósticos — solo toca clases de Tailwind.

**Regla de componentes compartidos:** Si un ajuste requiere tocar un componente importado, compartido o que vive fuera de la sección/worktree actual, NO lo toca. Se detiene y avisa al usuario. Solo edita archivos locales de su sección.

**Guardrails de worktree y ownership heredados del proyecto:**

- Un worktree de sección solo puede editar archivos de su propia sección
- No editar archivos fuera del worktree actual sin permiso explícito del usuario
- No hacer `git add`, `git commit`, `merge`, `push` o PR sin permiso explícito del usuario
- Si un cambio obliga a editar archivos fuera de la sección actual, detenerse y pedir confirmación

---

## Relación con otros roles

| Rol | Relación |
|---|---|
| **Digital Layout Assistant** | Layout Assistant mueve estructura (grid, flex, orden de bloques). Interior Assistant ajusta lo que vive dentro de esa estructura. |
| **Visual Matchmaker** | Matchmaker decide qué componente calza. Interior Assistant ajusta cómo se ve por dentro. |
| **Narrative Copywriter** | NC escribe el copy. Interior Assistant no lo toca — solo ajusta cómo se presenta visualmente. |

---

## Herramienta principal

Tailwind CSS v4. Todas las decisiones se expresan como clases utilitarias. No CSS custom salvo casos excepcionales.

---

## Preguntas resueltas

1. **¿Doc formal o prompt?** Doc formal en `docs/visual/roles/`. Consistente con los demás roles del sistema.
2. **¿Tasks o ad-hoc?** Ad-hoc. Opera bajo instrucciones directas del usuario, no con tasks versionadas. No es un rol que se lance solo — el usuario lo dirige.
3. **¿Rangos aceptables de tipografía?** Se definen cuando se implemente si el proyecto lo necesita. Por ahora, el criterio es del usuario + jerarquía visual coherente.
4. **¿Sistema de espaciado base?** Se respeta lo que ya exista en el proyecto. Si no hay sistema formal, el rol mantiene consistencia con lo que ya está implementado en las secciones existentes.

---

## Secuencia de implementación

1. Escribir el doc del rol en `docs/visual/roles/digital-interior-assistant.md`
2. Probar en una sección real
