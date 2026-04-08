# Direccion Visual: /experiencia/casos-de-exito

Fecha: 2026-04-06
Estado: en definicion (MAIN como orquestador)
Referencia visual: pagina /fishing-charters-cabo-san-lucas del repo cabo-san-lucas
Regla: no es copy-paste de codigo — se toman ideas de layout y se construyen con componentes existentes + reglas de diseno propias

---

## Bloque 1: Hero

**Componente base:** HeroMarketing1 (existente en brandpetram)
**Componente nuevo:** HeroMarketing1Beta (evolucion con letra griega segun convencion)
**Ownership:** local en `src/app/experiencia/casos-de-exito/` hasta confirmar reutilizacion

### Diferencias vs HeroMarketing1 actual

| Aspecto | HeroMarketing1 (actual) | HeroMarketing1Beta (nuevo) |
|---|---|---|
| Imagen hero | full-width | ligeramente menor width (sutil) |
| Caja transparente sobre imagen | width actual | ligeramente mayor width |
| CTAs arriba del titulo | no tiene | 2 botones de CTA encima del H1 |
| Div inferior (SVG + texto) | SVG y texto en una sola columna | 2 columnas: col izq = SVG, col der = textos |
| Textos en div inferior | H1 + P | H2 + P (dos textos en la columna derecha) |
| Borde debajo del H1 | tiene un borde/linea debajo del H1 | no tiene borde debajo del H1 |
| Jerarquia completa | H1 (en caja) + P (en div inferior) | H1 (en caja) + H2 + P (en div inferior) |

### Notas

- El H1 sigue viviendo dentro de la caja transparente sobre la imagen
- Los CTAs van encima del H1, no debajo
- El div inferior cambia de 1 columna a 2 columnas
- La columna derecha del div inferior tiene H2 (subtitulo) + P (parrafo), no solo P
- El overlay y la cuadricula (grid lines) que HeroMarketing1 tiene encima de la imagen se mantienen tal cual en el nuevo componente

---

## Bloque 2: Split sticky (texto largo + imagen fija)

**Componente base:** similar a SidebarSticky1 / split-with-image, pero con estructura propia
**Componente nuevo:** por nombrar (puede ser evolucion de un split existente o componente local nuevo)
**Ownership:** local en `src/app/experiencia/casos-de-exito/`

### Estructura

Layout flex de 2 columnas:

**Columna izquierda (texto, scrolleable):**
1. Texto pequeno antes del titulo (eyebrow / kicker)
2. Titulo en bold (H2 o H3)
3. Parrafo 1 (~40 palabras)
4. Parrafo 2 (~30 palabras)
5. 3 bullet points con parrafo cada uno (label bold + texto)

**Columna derecha (imagen, sticky):**
1. Una imagen grande, aspect ratio vertical (aprox 1:2, mas alto que ancho)
2. 2 botones CTA debajo de la imagen
3. La imagen queda fija mientras el usuario scrollea el texto de la izquierda

### Comportamiento

- La columna derecha es `sticky` (no fixed) — se queda visible mientras la columna izquierda tiene contenido
- El texto de la izquierda puede ser largo; el scroll revela mas texto mientras la imagen permanece
- Los CTAs viven debajo de la imagen, no debajo del texto

---

## Bloque 3: Mosaico

**Componente base:** MosaicoLiderazgo (ya existe en brandpetram)
**Componente nuevo:** uso directo o evolucion si se necesitan ajustes
**Ownership:** depende de si se usa directo (import de brandpetram) o se modifica (detach local)

### Notas

- Va al final de la pagina, despues del split sticky
- Si se usa sin modificaciones, se importa directo de brandpetram
- Si necesita ajustes de layout, se hace detach siguiendo la convencion de versionado (-v1.1)

---

## Bloque N: Bento grid (pendiente de definir)

Referencia: grid asimetrico de la pagina de Cabo con fotos + cards con copy intercaladas
Componente base: por definir (masonry, mosaico, o nuevo)

---

## Reglas de esta ronda

- No reescribir copy/brief — respetar el aprobado
- Construir con componentes existentes como base, no desde cero
- Seguir convencion de letras griegas para evoluciones
- Componentes nacen locales en la seccion
- No promover a shared sin reutilizacion confirmada
