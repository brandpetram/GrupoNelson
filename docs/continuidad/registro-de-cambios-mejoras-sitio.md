# Registro de cambios — Mejoras al sitio (Grupo Nelson)

Registro general de las mejoras que vamos aplicando al sitio. Origen: comentarios
dejados por **Erick (Grupo Nelson)** en los previews de Vercel.

- **Un ítem por cambio**, redacción general (no detalle técnico).
- Aplican a **español e inglés** salvo que un ítem diga **solo ES**.
- Este doc es la base para el **correo de cierre** que enviaremos al cliente.

---

## Navegación (sesión previa)

- Menú **Parques Industriales** (flyout): se reordenó para que **El Vigía II** aparezca antes de **El Vigía I**.

## Página Baumex — 2026-06-04

Sección numerada (1-2-3):
- Sección **"Estándares Internacionales"**: texto reescrito a una versión más concisa.
- Sección **"Proyectos Especiales"**: se simplificó el cierre del párrafo.
- Sección **"Construcción Industrial"**: se simplificó el cierre del párrafo.

Sección **"Trayectoria"** (encabezado):
- Párrafo de equipo reescrito a una versión enfocada en estándares Fortune 500.- Lista de ubicaciones: se agregaron **San Luis Potosí** y **Tijuana**, y se cambió **El Salto (Jalisco)** por **Guadalajara**.
- Texto de cierre reescrito ("…será un gusto atenderte").- Rótulo **"Track record" → "Trayectoria"**: ya estaba aplicado (en inglés se mantiene "Track Record", que es lo correcto).

Caja **"Disciplinas de ingeniería internas"**:
- Se agregaron 4 disciplinas: **HVAC**, **Sistema Contraincendio**, **Distribución Eléctrica** y **Sistema Fotovoltaico**.
- Título de la caja acortado: "Disciplinas de ingeniería internas" → **"Disciplinas internas"**. [ES + EN]

Hero (Mu):
- Título reescrito a "La Constructora de confianza para líderes globales como…" (con los clientes rotando debajo). [ES + EN]
- Se eliminó el subtítulo de datos de prueba (Gulfstream, Honeywell, 4.5M ft², etc.).

Bloque "Construcción Industrial de Clase Mundial" (Nu):
- Párrafo descriptivo reescrito ("Desde el primer plano hasta la supervisión en campo…"). [ES + EN]

## Home (/es) — 2026-06-04

- Hero: el párrafo "Corporaciones internacionales…" ya estaba aplicado tal como se pidió.
- Storytelling (Fase 1): ya estaba aplicado ("…les desarrollamos una propuesta integral acorde a sus necesidades").
- Storytelling y FAQ — varios ajustes ya estaban aplicados: quitar "como Gulfstream, DHL y Honeywell", "Turnkey" → "Llave en Mano", quitar "sin sorpresas", reescribir el bloque del puente Skyworks, y FAQ "Baumex" → "Nuestra constructora".

## Antigüedad de Baumex (todo el sitio) — 2026-06-04

- Se unificó la antigüedad de Baumex de **28 → 30 años** en todo el sitio (ES e inglés): 52 reemplazos en 27 archivos. Erick lo señaló en un punto (heading de la sección "Trayectoria") y se extendió a todo el sitio para mantener consistencia — el FAQ del home ya decía 30. Los "28 ft" de altura libre de naves quedan intactos (no son antigüedad).

## Inventario / naves-disponibles — 2026-06-04

- Se eliminó el subtítulo "X naves disponibles en Nelson II…" (ES y EN).
- **Para el correo a Erick:** pedirle (a) un **subtítulo nuevo orientado a SEO/AEO** para esa página — favorece posicionamiento en buscadores y en motores tipo ChatGPT —, y (b) la **nomenclatura de naves** que enviará por correo para actualizar todos los parques.

## Claim "Recomendado por Honeywell" — 2026-06-04

- Se quitó la **atribución a Honeywell** del claim ISN, **conservando** el crédito "Recomendado en ISN" (criterio: no mutilar layout, reemplazar con texto relevante de longitud similar).
- Aplicado en **ES + EN** en: FAQ (home ya estaba + Baumex/psi), card de casos de éxito, feature de diseño e ingeniería, y la sección + metadata de la página de normas.

## Rename de marca: Baumex → Constructora de Casa — 2026-06-04

- A petición de Erick: en texto visible, "Baumex" → **"Constructora de Casa"** (ES) / **"In-House Construction"** (EN), en todas las páginas internas (incluye badge del hero y nav). En prosa: "nuestra Constructora de Casa" / "our In-House Construction team".
- Hecho en ~58 archivos (workflow paralelo + segunda pasada). Typecheck verde.
- **Revisión de calidad** (workflow de revisión + **Codex** sobre el diff): se corrigió copy forzado, se unificó la capitalización del término y la consistencia EN/ES. Tras Codex, también se alinearon **alt de imágenes y metadata SEO** a "Constructora de Casa / In-House Construction".
- **Se preservó "Baumex"** solo en: URLs (`/constructora/baumex`), **rutas de imágenes** (`/fotos-dron/CONSTRUCTORA BAUMEX/...`), identificadores de código (`proyectosBaumex`, etc.) y 2 comentarios. **0 "Baumex" en texto visible / alt / metadata.**
- Números alineados al "30 años": nav → "30+ años/years"; se quitó el rango "1997–2025" (implicaba 28).

## No realizados (por recomendación — no convenían)

- Menús **EXPERIENCIA**, **NOSOTROS** y **PARQUES**: se pidió que el título de cada menú fuera clickeable a una página *y además* abriera su flyout, quitando un ítem del submenú. **No se hizo.** Es un cambio mayor de arquitectura de navegación y un patrón de UX problemático (ambigüedad entre "navegar" y "abrir menú", inconsistencia desktop/mobile, conflictos de accesibilidad ARIA). Se le explicó a Erick y se propuso la alternativa estándar: un link "Ver todo…" como primer ítem del flyout. **Pendiente de su decisión.**
