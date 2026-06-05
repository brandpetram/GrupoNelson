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

Bloque LEED / Arquitectura Industrial (Pi):
- Encabezado reescrito a "Diseñamos y construimos bajo Estándares LEED, desarrollando naves de alta eficiencia…" (texto provisto por Erick). [ES + EN]

Bloque testimonio + marca de fondo (Rho):
- Se eliminó el texto decorativo gigante de fondo (decía "CONSTRUCTORA DE CASA", antes "BAUMEX") y se ajustó el espaciado de la sección. [ES + EN]

Foto de arquitectura industrial (Pi):
- **Para el correo a Erick:** la foto necesita retoque (borrar "fantasmas"/carrete, agregar zacate a la zona de tierra). Es edición de imagen, no código — pendiente de que llegue la imagen editada.

## Normas, Certificaciones y Estándares — 2026-06-04

- Tarjetas **FM Global** y **BRB** (sección "Estándares de ingeniería"): se quitó la mención al cliente "Gulfstream". FM Global → "Contamos con certificación FM Global…"; BRB → "…aplicada en zona sísmica 4 en una nave de 550,000 ft²" (se conserva la escala, se quita el nombre). [ES + EN]
- La subsección **LEED** de esa misma página conserva la mención a Gulfstream (decisión acordada: aplicar solo donde Erick comentó; el resto del sitio —success-stories, /constructora/leed, home— tampoco se toca).

## Home (/es) — 2026-06-04

- Hero: el párrafo "Corporaciones internacionales…" ya estaba aplicado tal como se pidió.
- Storytelling (Fase 1): ya estaba aplicado ("…les desarrollamos una propuesta integral acorde a sus necesidades").
- Storytelling y FAQ — varios ajustes ya estaban aplicados: quitar "como Gulfstream, DHL y Honeywell", "Turnkey" → "Llave en Mano", quitar "sin sorpresas", reescribir el bloque del puente Skyworks, y FAQ "Baumex" → "Nuestra constructora".
- Storytelling (Fase 7 "Crecimiento"): se reescribió el cierre del párrafo a "…Nuestra experiencia de 6 décadas se refleja en la fidelidad y permanencia de nuestros clientes" (se quitó "sin cambiar de socio / relaciones que se miden en décadas"). [ES + EN]

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

## Metadata título — página de la Constructora — 2026-06-04

- `title` de `/constructora/baumex` · `/construction/baumex`: "Baumex Constructora" → **"Constructora de Casa | Grupo Nelson"**; "Baumex Construction" → **"In-House Construction | Grupo Nelson"**. Las descriptions ya no tenían Baumex. Se conserva "Baumex" solo en URL e identificadores internos (igual que el rename). [ES + EN]

## Casos de éxito — 2026-06-04

- Card "80% clientes recurrentes": título cambiado a **"Alta tasa de retención"** (a petición de Erick). Nota: se pierde el dato "80%"; se puede reincorporar en la descripción si se prefiere. [ES + EN]
- Sección **SplitSticky**: se reescribieron 4 párrafos a versiones provistas por Erick (corrigiendo su ortografía): el **cierre** ("Nuestra mejor carta de presentación…"), el bloque **DHL/corporaciones** (ahora lista DHL, Vertiv, Envista, Aqualung, Intuitive Surgical), el dato de **colaboración técnica** (túnel de viento) y el de **calificación ISN «Recomendado»**. [ES + EN]

## Contacto — 2026-06-04

- Teléfonos: se agregó **+52** al (686) 553-4088 y **+1** al (760) 357-0309, y se **alinearon** ambos números (el rótulo "Toll Free" pasó a sufijo del segundo). [ES + EN]
- Formulario: se quitaron los placeholders de ejemplo de Nombre/Apellido ("Juan/Pérez" · "John/Smith") — boxes en blanco. [ES + EN]
- **CAPTCHA (Turnstile) — aclaración para Erick:** el formulario YA tiene CAPTCHA habilitado y funcionando. Es **Cloudflare Turnstile**, el tipo moderno invisible/sin fricción (no es el clásico de "selecciona los semáforos" ni una imagen estática). El check verde "Success!" es la confirmación de que ya verificó al visitante; además hay validación real en el servidor antes de mandar el correo. No requiere acción.
- Dirección (bloque "Oficinas"): "Mexico" → **"México"** (acento). [solo ES]
- Erick pidió (en un comment viejo) revisar la ortografía/acentos de la página. **Ya estaba hecho:** la revisión ortográfica del sitio se realizó ~2 semanas antes (mediados de mayo 2026); solo faltaba el acento de "México", ya corregido. No queda pendiente.

## Antigüedad de Gulfstream (todo el sitio) — 2026-06-04

- Se unificó la antigüedad de la relación con **Gulfstream de 35 → 40 años** en todo el sitio (ES e inglés): ~31 menciones en 18 archivos. Erick lo señaló en un punto (la card "35 años con Gulfstream" de casos-de-éxito) y se extendió a todo el sitio para mantener consistencia. Se corrigió además una **contradicción previa**: el FAQ (psi) decía "Gulfstream 20+ años" → ahora "40+". No se tocó la antigüedad de **Honeywell** (30 años) ni otros números (horas hombre, m², años de experiencia de construcción). Typecheck verde.

## No realizados (por recomendación — no convenían)

- Menús **EXPERIENCIA**, **NOSOTROS** y **PARQUES**: se pidió que el título de cada menú fuera clickeable a una página *y además* abriera su flyout, quitando un ítem del submenú. **No se hizo.** Es un cambio mayor de arquitectura de navegación y un patrón de UX problemático (ambigüedad entre "navegar" y "abrir menú", inconsistencia desktop/mobile, conflictos de accesibilidad ARIA). Se le explicó a Erick y se propuso la alternativa estándar: un link "Ver todo…" como primer ítem del flyout. **Pendiente de su decisión.**
- Menú **RECURSOS**: en este lote Erick pidió lo mismo (al hacer click en RECURSOS dirigir a /recursos y quitarlo del submenú). **No se hizo**, por la misma razón que los otros menús. Se mantiene la propuesta del link "Ver todo…".
