# Lista de fixes durante publicación del sitio web

Fixes, correcciones y mejoras aplicadas durante la semana de publicación del sitio web de Grupo Nelson (5–12 de abril 2026).

---

## 5 de abril

1. Se corrigió la regla de ownership en `ownership-map.md` para que clasifique entre localizar, promover o parametrizar en vez de promover componentes por defecto.
2. Se corrigió la decisión arquitectónica O1: los componentes de marketing (testimonial, documentación-auditable, dimensiones-control) fueron restaurados a su estado original y se crearon versiones locales en `excelencia-operativa/sections/` en vez de promoverlos a sistema — no había reutilización real.
3. Se resolvió el conflicto de ownership entre Parques y Productos declarando `ficha-tecnica-parque*.tsx` como componente de sistema tras confirmar uso cruzado real entre secciones.

## 6 de abril

4. Se corrigió la resolución de rutas de Zed en DevOverlay para worktrees locales — el componente `dev-label.tsx` no resolvía correctamente la ruta del editor cuando se trabajaba desde un worktree.
5. Se corrigió el tracker de rondas de copy cambiando la etiqueta "sistema reescritos" a "localizados" y ajustando el conteo de archivos pendientes (de 5 a 4 pendientes + 1 verificación).

## 7 de abril

6. Se corrigió el DevOverlay para que dejara de mutar archivos fuente durante el build, evitando que el proceso de construcción ensuciara el worktree con cambios no deseados.
7. Se corrigieron violaciones canónicas en el copy de liderazgo, eliminando bloques que estaban fuera del territorio asignado según el diagnóstico del Narrative Copywriter y alineando el lenguaje con el angle brief v0.
8. Se corrigieron violaciones canónicas en el copy de normas, certificaciones y estándares, reestructurando la narrativa completa según la taxonomía de tres capas del angle brief.

## 8 de abril

9. Se corrigió una prop inexistente (`decorators`) en el componente Container que impedía que el build pasara — se removió de `product/page.tsx` y `excelencia-operativa/page.tsx`.
10. Se corrigió un problema de scroll horizontal en la página de normas-certificaciones-estandares causado por los glows decorativos del hero que se desbordaban del viewport — se aplicó `overflow-hidden`.
11. Se corrigió el padding responsivo del hero en normas-certificaciones-estandares, ajustando `pt-20` en móvil y `pt-30` en desktop para que el contenido no quedara tapado.
12. Se corrigió la disposición de las métricas en normas-certificaciones-estandares para que mostraran en grid de 2 columnas en móvil y flex horizontal en desktop.

## 9 de abril

13. Se corrigió el dominio `gruponelson.mx` y se aplicaron fixes al layout — refactor de estructura de rutas, corrección de imports rotos tras mover archivos al grupo `(site)`, y se agregó página `not-found.tsx`.
14. Se corrigió el ownership del archivo `proxy.ts` en el plan maestro — el documento de planificación tenía inconsistencias sobre quién era responsable.

## 10 de abril

15. Se corrigieron CTAs rotos en las secciones de constructora, contacto y experiencia — los botones de llamada a la acción en 15 archivos de componentes apuntaban a destinos incorrectos.
16. Se corrigieron los CTAs y destinos del componente ScrollStorytelling — los enlaces dentro del storytelling interactivo apuntaban a rutas equivocadas.
17. Se corrigió el link de YouTube en la página de trayectoria — el enlace al canal de YouTube en `stats-grid-bp-gamma` estaba roto.
18. Se corrigió el emblema Nelson que aparecía cortado en la página de casos de éxito — el SVG tenía dimensiones incorrectas que causaban que se recortara.
19. Se reemplazaron textos genéricos (placeholder) en el post-it de excelencia operativa — el componente `notes-3-illustration` todavía mostraba texto genérico en lugar de contenido real.
20. Se corrigió la dirección física en el footer — decía "Blvd. Lázaro Cárdenas 9850" (incorrecta) y se cambió a "Ave. Reforma #1699, Col. Nueva, Mexicali 21100" (la dirección oficial).
21. Se corrigió el número de generaciones activas en liderazgo — decía "3 generaciones activas" y el dato correcto es "4 generaciones activas".
22. Se corrigió el remitente del formulario de contacto — los emails de leads se enviaban desde `leads@brandpetram.marketing` (dominio de la agencia) en lugar de `leads@nelson.com.mx` (dominio del cliente).

## 11 de abril

23. Se corrigió el texto del botón "Contact" a "Contact Us" en el Header y en el componente TarjetaHeroOriginalBeta de las páginas en inglés.
24. Se corrigió el texto del botón "Contact" a "Contact Us" en el hero del home en inglés.
25. Se corrigieron el teléfono y la dirección física del cliente: el footer mostraba (686) 561-3535 en vez de (686) 553-4088, y las páginas de privacidad (ES e EN) tenían la dirección equivocada.
26. Se corrigió el copy del homepage que listaba a General Dynamics como cliente, siendo que Gulfstream (ya listado) es subsidiaria de General Dynamics — era redundante. Se reemplazó con Rheem en ambos idiomas.
27. Se corrigieron los colores de la tabla de ficha técnica de parques que usaban valores hardcodeados de zinc en vez de variables semánticas del tema (`bg-background`, `bg-muted`, `border-border`), causando inconsistencia en dark mode.
28. Se corrigieron los colores del detalle expandido de naves industriales que también usaban zinc hardcodeado en vez de variables semánticas.
29. Se corrigió el balance de texto (`text-balance`) en el párrafo descriptivo del hero de la página de parques industriales (ES e EN).
30. Se corrigió el título h1 de la página de parques industriales para incluir "in Mexicali" / "en Mexicali", que faltaba.
31. Se corrigieron 9 títulos de flyouts de navegación que mostraban texto en español hardcodeado en las páginas en inglés.
32. Se arregló el link de contacto en la sección de contacto EN que apuntaba a una ruta incorrecta — se corrigió a `/inventory/available-buildings`.
33. Se resolvieron múltiples fixes pre-QA de las fases 8, 10, 11 y 12: CarruselLeed sin prop de idioma en la página LEED en inglés; Header con CTA y logo href sin soporte bilingüe; menú mobile con CTA en español en páginas EN; language flags sin detección de páginas sin traducción (blog, noticias); LogoCloud y BadgeAniversario sin prop de idioma; y ~20 rutas incorrectas en ScrollStorytelling que apuntaban a páginas en español desde el home en inglés.
34. Se corrigió que tres componentes (TickerOverflow, TarjetaHeroOriginal, AlphaBP) mostraban texto en español en el home en inglés por falta de prop de idioma.
35. Se resolvió que los redirects wildcard de `/parques-industriales-mexicali/:path*` atrapaban las imágenes en `/public/parques-industriales-mexicali/` y las redirigían a `/es/`, causando errores 404 en producción. Se reemplazaron con 5 redirects explícitos por ruta de página.

## 12 de abril

36. Se arregló el anchor scroll del botón secundario del hero-motionplus ("See the standards" / "Ver los estándares") que no funcionaba — `motion.a` no manejaba hrefs con `#`. Se agregó `onClick` con `scrollIntoView`.
37. Se cambió el destino del botón "See the standards" para que apunte a la sección de Engineering Standards en vez de Corporate Requirements, con 100px de offset para no quedar tapado por el header (ES + EN).
38. Se agregó el componente ParkMap a las páginas de Nelson I, Vigía I y Vigía II (ES + EN) — solo Nelson II lo tenía.
39. Se agregaron las coordenadas GPS en Sanity para Nelson I, Vigía I y Vigía II — faltaban y por eso los mapas no se renderizaban.
40. Se configuró la API key de Google Maps (`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`) en Vercel para todos los environments — no existía.
41. Se corrigió la restricción de sitio de la API key de Google Maps en Google Cloud — `https://www.nelson.com.mx/` no tenía wildcard (`*`), lo que bloqueaba las peticiones en producción.
42. Se corrigió el menú móvil que al navegar cerraba instantáneamente mostrando la página actual por ~2 segundos antes de cargar la nueva — mala UX. Ahora el menú se cierra cuando la navegación se completa (usando `usePathname`).
43. Se corrigió el scroll horizontal en las páginas de blog y noticias — se agregó `overflow-x-clip` a los layouts (se usó `clip` en vez de `hidden` para no romper los sidebars sticky).
44. Se corrigió el hero de la página de casos de éxito que no era full-width — la imagen tenía `px-20` que agregaba padding innecesario en todos los viewports (ES + EN).
45. Se corrigió el padding del text box del hero de casos de éxito — tenía `px-30` fijo que se desbordaba en móvil. Se cambió a padding responsivo `px-6 md:px-12` (ES + EN).
46. Se hizo el tour virtual 360° full-width en móvil — tenía `px-10` que desperdiciaba espacio horizontal.
47. Se mejoró el aspect ratio del tour virtual en móvil de 16:9 a 4:3 para mejor experiencia de exploración en vertical.
48. Se renombró la ruta `/instrucciones` a `/admin` — nombre más claro y estándar. Se agregó redirect 301 de la ruta vieja.
49. Se agregaron todas las rutas de dev/proyecto/herramientas al sidebar de `/admin` (Sanity Studio, QA Terrenos, Bitácora, Contenidos, Documentación, Componentes, etc.).
50. Se corrigió que las rutas de dev (`/componentes`, `/dev`, `/producto`, `/proyecto`, etc.) no tenían `noindex` efectivo — el `robots` del layout `(dev)` no se propagaba. Se bloquearon todas en `robots.txt` con `Disallow`.
51. Se reemplazaron las 20 fotos del hero mosaico en la página de diseño e ingeniería — ahora usa fotos de la 1 a la 191 (de 10 en 10) en vez de las 251-346.
52. Se ajustaron las fotos de ImagenConEtiqueta, BigNumber y Mosaico en la misma página con imágenes más representativas.
53. Se ocultaron las categorías con 0 posts en el sidebar del blog — confundían al usuario mostrando filtros vacíos.
54. Se corrigió el color de fondo en dark mode de la sección de noticias — usaba `bg-muted` (gris) en vez de `bg-background`.
55. Se quitó la barra de search (BlogCommandDialog) de la página de noticias — no era necesaria.
56. Se corrigió "tres generaciones" a "cuatro generaciones" en todo el sitio (11 archivos, ES + EN) — el dato canónico confirmado es 4 generaciones (ya documentado en aclaraciones-canonicas.md).
57. Se corrigieron los colores de dark mode en las cards y drawer de terrenos — usaban zinc/gray hardcodeado en vez de variables semánticas (`bg-card`, `bg-background`, `border-border`).
58. Se agregó slide effect al drawer de terrenos (ES + EN) — antes aparecía sin transición, ahora tiene slide de 500ms igual que el drawer de naves.
59. Se quitó la columna "Clear Height / Altura libre" de la tabla de naves industriales — mostraba guiones en todas las filas.
60. Se actualizó el estatus del proyecto Gulfstream 550K a "2025" (terminado) y los dos Rollback Fitout a "En curso" en el portafolio de Baumex.
61. Se actualizaron los años de trayectoria de Baumex de 28 a 30 en el sidebar del portafolio.
62. Se cambiaron las 4 fotos del grid del home (sección "Dos caminos, un solo proveedor") por fotos seleccionadas de mayor calidad del folder `/Seleccionadas/`.
63. Se ajustaron imágenes del Mosaico y otros componentes del home ES con fotos más representativas.
64. Se corrigió el menú móvil que al navegar a otra sección cerraba el menú antes de que la página cargara — el usuario veía un flash de la página anterior por ~2 seg. Ahora el menú permanece abierto hasta que la navegación termine (`useEffect` en `pathname`), con cierre inmediato solo en same-page clicks.
65. Se agregó indicador de carga (spinner) en los links del menú móvil usando `useLinkStatus` de Next.js — el usuario ya no repite taps creyendo que el clic no funcionó.
66. Se agregó estado activo (`aria-current="page"` + estilo visual) a los items del menú móvil — el usuario ahora ve en qué página está antes de navegar.
67. Se corrigió el hook `check-worktree-clean.sh` que bloqueaba commits en el repo principal (MAIN) — solo debía bloquear en worktrees reales. Ahora distingue MAIN de worktrees comparando `git-dir` vs `git-common-dir`.
68. Se corrigió la imagen grande del home (Nelson II) que no se renderizaba en móvil en producción — el contenedor tenía `h-full` que colapsaba a 0px sin parent con altura. Se quitó `h-full` para que `aspect-square` defina el tamaño (ES + EN).
69. Se corrigió el overflow de contenido en las páginas de blog en móvil — texto e imágenes se cortaban por fuera del viewport. Se agregó `min-w-0` al grid item del post y `w-full` a las imágenes de Portable Text.
