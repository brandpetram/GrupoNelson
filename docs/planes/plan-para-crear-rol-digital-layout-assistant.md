# Plan para crear rol Digital Layout Assistant

Fecha: 2026-04-08
Estado: pendiente de revisión

---

## Qué es y por qué existe

`Digital Layout Assistant` asiste con las decisiones de estructura y disposición de una sección bajo la dirección del usuario. No diseña por su cuenta — ejecuta con criterio lo que el usuario le indica, respetando las reglas arquitectónicas del proyecto.

Su territorio es la estructura visible de la página: grids, columnas, orden de bloques, disposición de secciones, cómo se apilan en mobile, cómo se distribuyen en desktop. Es el equivalente a alguien que mueve paredes y decide la planta del espacio, pero no elige los muebles ni los acabados.

---

## Qué problema resuelve

Una sección puede tener el copy correcto y los componentes correctos — y aun así no funcionar porque:

- los bloques están en el orden equivocado
- un grid de 3 columnas debería ser de 2 en esa sección
- un bloque que funciona en desktop se apila mal en mobile
- una sección necesita cambiar de layout vertical a horizontal
- hay demasiado contenido para un solo bloque y necesita dividirse
- el hero necesita una estructura diferente (centrado vs split vs con imagen)
- las secciones no tienen separación visual clara entre ellas

Ese es el hueco que este rol resuelve.

---

## Qué SÍ haría

- Cambiar estructura de grids (`grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-3`, etc.)
- Cambiar dirección de flex (`flex-col`, `md:flex-row`, etc.)
- Reordenar bloques/secciones dentro de la página
- Decidir cómo se apila el contenido en mobile vs desktop
- Agregar o quitar contenedores (`div`, `section`)
- Dividir un bloque grande en sub-bloques
- Agregar separadores visuales (`<hr>`, bordes, espacios)
- Integrar componentes dentro de la estructura de la página
- Ajustar el orden responsive (`order-first`, `order-last`, etc.)

---

## Regla de separación con Digital Interior Assistant

**Layout Assistant = estructura macro: contenedores, columnas, orden, separación entre secciones.**
**Interior Assistant = acabado visual, tipografía, jerarquía interna y spacing dentro del bloque.**

### Layout Assistant toca:
- `grid-cols-*`, `flex`, `flex-col`, `flex-row`, `order-*`
- `gap-*` entre secciones o bloques de primer nivel
- `max-w-*` a nivel de contenedor de sección
- `py-*`, `px-*` de sección (separación entre secciones)
- `<hr>`, bordes entre secciones
- wrappers, contenedores, `div` y `section` estructurales

### Interior Assistant toca (Layout NO toca):
- `text-*`, `font-*`, `leading-*`, `tracking-*` → tipografía
- `bg-*`, `bg-gradient-*` → backgrounds de bloque
- overlays, colores, bordes internos, `rounded-*`, `shadow-*`, `opacity-*`
- `max-w-*` a nivel de ancho de lectura de texto
- `gap-*` entre elementos dentro de un bloque
- `p-*`, `mb-*`, `mt-*` dentro de un bloque (respiración interna)

---

## Qué NO haría

- No ajusta tipografía, colores, backgrounds, bordes internos, radius, sombras, opacidad ni spacing interno (eso es Digital Interior Assistant)
- No cambia componentes por otros (eso es Visual Matchmaker)
- No reescribe copy (eso es Narrative Copywriter)
- No decide el ángulo ni el territorio (eso es Angle Architect)
- No toma decisiones estéticas por su cuenta — ejecuta bajo dirección del usuario
- No mutila componentes para forzar un layout
- No mutila copy para que quepa en un layout

---

## Cómo operaría

El usuario le dice qué hacer. Ejemplos:

- "pon estos 4 bloques en un grid de 2x2"
- "el hero debería ser split: texto a la izquierda, imagen a la derecha"
- "en mobile quiero que la imagen vaya primero y el texto después"
- "esta sección tiene 6 items, ponlos en 3 columnas en desktop y 1 en mobile"
- "separa estas dos secciones con más espacio"
- "mete este componente entre el hero y el primer bloque de contenido"
- "la página se siente muy larga, agrupa estos bloques"

El rol ejecuta con criterio: sabe qué layout funciona para el tipo de contenido, sabe cómo manejar breakpoints, sabe cuándo un grid de 3 se rompe y conviene 2, sabe que mobile-first es el default.

---

## Contrato de lectura propuesto

Mínimo:

1. Su definición de rol
2. Los archivos .tsx de la sección que va a tocar
3. Cualquier instrucción del usuario

No necesita leer el sistema de copy completo (constitución, aclaraciones canónicas). Pero sí tiene una lectura condicional obligatoria:

**Obligatorio cuando va a cambiar orden, agrupación o jerarquía estructural de bloques:**

- El angle brief de la sección — para respetar la secuencia de página definida por Angle Architect. No lo redefine, lo implementa estructuralmente.

**Siempre útil:**

- `docs/visual/roles/visual-matchmaker.md` — para entender qué decisiones NO le tocan

---

## Output

Cambios directos en los archivos .tsx de la sección. No produce documentos teóricos ni diagnósticos — solo toca estructura HTML/JSX y clases de Tailwind de layout.

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
| **Digital Interior Assistant** | Interior Assistant ajusta lo de adentro (tipografía, spacing). Layout Assistant ajusta la estructura de afuera (grids, flex, orden). |
| **Visual Matchmaker** | Matchmaker decide qué componente usar. Layout Assistant decide cómo se coloca dentro de la página. |
| **Narrative Copywriter** | NC define el copy y la secuencia narrativa. Layout Assistant respeta esa secuencia al distribuir los bloques. |
| **Angle Architect** | AA define la secuencia de página en el brief. Layout Assistant la implementa estructuralmente. |

---

## Herramienta principal

Tailwind CSS v4. Estructura con JSX estándar de React/Next.js. Clases utilitarias de layout: grid, flex, gap, padding de sección, max-w, container, responsive breakpoints.

---

## Preguntas resueltas

1. **¿Doc formal o prompt?** Doc formal en `docs/visual/roles/`. Consistente con los demás roles del sistema.
2. **¿Tasks o ad-hoc?** Ad-hoc. Opera bajo instrucciones directas del usuario, no con tasks versionadas. No es un rol que se lance solo — el usuario lo dirige.
3. **¿Lee el angle brief?** Sí, obligatorio cuando va a cambiar orden, agrupación o jerarquía estructural de bloques. Ya quedó definido en el contrato de lectura.
4. **¿Puede crear wrappers nuevos?** Sí, puede crear `div` y `section` contenedores nuevos dentro de la sección. No puede crear componentes compartidos.
5. **¿Relación con Visual Matchmaker?** Matchmaker decide qué componente. Layout Assistant coloca ese componente dentro de la estructura. Si el componente exige un layout que no existe, Layout Assistant lo construye; no cambia el componente.

---

## Secuencia de implementación

1. Escribir el doc del rol en `docs/visual/roles/digital-layout-assistant.md`
2. Probar en una sección real
