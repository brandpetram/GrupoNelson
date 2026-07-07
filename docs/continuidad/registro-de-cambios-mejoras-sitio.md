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

## Antigüedad de Honeywell + cierre de casos-de-éxito — 2026-06-05

- **Honeywell 30 → 40 años (todo el sitio, ES+EN):** a petición de Erick (comentarios en casos-de-éxito) se unificó la antigüedad de la relación con Honeywell a 40 años (~22 menciones: stats "3+/30+" → "4+/40+", "3 décadas" → "4 décadas", prosa, FAQ, hero, eta, sigma, psi). **⚠️ Posible confusión:** Honeywell estaba documentado como 30+ años / 3 décadas en todo el sitio — el de 40 años es **Gulfstream**. Es posible que Erick haya confundido los dos casos (van uno tras otro en la página). **Se aplicó tal como se pidió**, pero conviene confirmarlo con Erick. No se tocaron los "30 años de experiencia" de la Constructora de Casa.
- **SplitSticky (casos):** reescritos con copy de Erick — intro ISN de Honeywell, dato "Mission 1/2/3", y dato de crecimiento de Gulfstream ("+1M de pies cuadrados", con heading ajustado de "5,000–550,000" a "Más de 1 millón de pies²"). [ES + EN]
- **Gulfstream — limpieza de consistencia:** se corrigieron menciones que el barrido previo no capturó (`sigma` "20+ años", stat "35+ años con clientes más antiguos") → 40.

## Casos de éxito — hero + foto del mosaico — 2026-06-05

- **Hero (HeroMarketing1Beta):** título acortado (se quitó "ya" y "— y la mayoría se quedó", queda "Las empresas más exigentes que operan en Mexicali eligieron a Grupo Nelson"); subtítulo H2 → "Nuestra mejor carta de presentación es la exigencia de nuestros clientes"; párrafo → "Contamos con clientes que han confiado en nuestra solidez por más de 30 años…". [ES + EN]
- **SplitSticky · intro de Gulfstream:** reescrito a "Operar con un miembro de Fortune 500 como Gulfstream…" (texto de Erick). [ES + EN]
- **Mosaico · fotos repetidas:** se detectó que dos tomas del edificio Envista quedaban casi idénticas; se reemplazó `honeywell-12` → vista de Grupo Nelson y luego `grupo-nelson-4` (la gemela de Envista) → vista del Parque Nelson II.
- **SplitSticky · dato de Gulfstream:** heading del dato de crecimiento → **"+1M de pies cuadrados"** (forma exacta pedida por Erick); en el párrafo del terremoto, "la nave" → **"su nave"** (ajuste menor). [ES + EN]
- **Nota:** el nuevo párrafo del hero dice "más de 30 años" (claim genérico de clientes), que convive con el "40 años" de Gulfstream/Honeywell. **Se deja en "30" por decisión de Luis** (es copy textual de Erick), pero —igual que con la antigüedad de Honeywell— **es posible que de nuevo haya una confusión con los años**. Anotado por si conviene confirmarlo con Erick.

## No realizados (por recomendación — no convenían)

- Menús **EXPERIENCIA**, **NOSOTROS** y **PARQUES**: se pidió que el título de cada menú fuera clickeable a una página *y además* abriera su flyout, quitando un ítem del submenú. **No se hizo.** Es un cambio mayor de arquitectura de navegación y un patrón de UX problemático (ambigüedad entre "navegar" y "abrir menú", inconsistencia desktop/mobile, conflictos de accesibilidad ARIA). Se le explicó a Erick y se propuso la alternativa estándar: un link "Ver todo…" como primer ítem del flyout. **Pendiente de su decisión.**
- Menú **RECURSOS**: en este lote Erick pidió lo mismo (al hacer click en RECURSOS dirigir a /recursos y quitarlo del submenú). **No se hizo**, por la misma razón que los otros menús. Se mantiene la propuesta del link "Ver todo…".

## Ronda de comentarios de Vercel — 2026-07-06

Se procesaron los **69 comentarios unresolved** del toolbar de Vercel (54 activos de `dev` + 15 viejos de marzo-abril), según `docs/planes/plan-para-resolver-comentarios-vercel-de-erick.md` (3 rondas de review de Codex). Resultado: **47 resueltos** (45 el 2026-07-06 + 2 de imagen el 2026-07-07; marcados como resolved en Vercel), **22 pendientes** (imágenes, layout/preguntas y viejos que requieren decisión). IDs de threads y decisión por comentario en `docs/continuidad/threads-vercel-erick-2026-07-06.json`.

### Llave en Mano (ES + EN en todos)
- "30 corporaciones internacionales" → **"+30"**; "El contraincendio central" → **"El sistema contraincendio"**; CTA → **"Consulta nuestro inventario"**.
- **Copy nuevo de Erick** para los parques (El Vigía pionero/precios competitivos · Nelson II moderno/BTS) reemplazando el bloque anterior (que mencionaba Nelson I—1984, Honeywell y galones); ortografía corregida.
- **Copy nuevo** "Con el respaldo de +30 clientes…" reemplazando el subtítulo anterior.
- Eliminados: "El 80% de los clientes…son recurrentes" y "Naves desde 5,000 ft²…Fortune 500".

### Diseño e Ingeniería (ES + EN)
- Frases/párrafos nuevos de Erick: "Donde la ingeniería convencional se detiene, nosotros comenzamos.", "Creamos la ingeniería que Mexicali no tenía…", "Garantizamos el cumplimiento normativo desde el proyecto ejecutivo…", bloque de auditorías con **"+1M de horas-hombre sin fatalidades" y "+400 días sin accidentes"** (⚠ el bloque anterior decía "404 días consecutivos"; las descripciones largas de esos 2 bullets se retiraron con el reemplazo).
- "52,200 m²" → **"550k ft²"** (aquí y en el hero/beta de Build-to-Suit). ⚠ Otras páginas (specialized-projects, portfolio, LEED) siguen diciendo "52,200 m²" — Erick solo ancló estas; decidir si se unifica globalmente.
- "está certificando LEED Gold" → **"está certificada con LEED Gold"** (pedido por Erick), extendido por consistencia al FAQ de la misma página, a la sección LEED de Normas (ES+EN) y a la metadata de /leed. **⚠ IMPORTANTE — confirmar con Erick:** la página del proceso LEED (ES+EN) y el FAQ del sidebar dicen con detalle que Gulfstream 550K está "en proceso, 53-55 puntos (Silver), apuntando a Gold" — datos que contradicen "certificada". No se tocaron (convertirlos exigiría inventar puntaje/fecha). Si la certificación NO está emitida, hay que revertir los "certificada"; si SÍ, hay que actualizar el detalle del proceso.
- **"zona sísmica 4" → "zona sísmica"** en los 2 puntos anclados por Erick y extendido a las 12 menciones restantes del sitio (ES+EN) por consistencia.
- El texto en inglés que aparecía en el FAQ de la página ES se corrigió (faltaba `lang="es"`).
- Eliminados: subtítulo del BigNumber ("La nave más grande…para Gulfstream"), link "Ver cómo se hizo" (llevaba a la página equivocada), y el **placeholder lorem "Database backups"** que Erick señaló con "Y esto ????" (el 3er bullet del split ahora es condicional).

### Normas, Certificaciones y Estándares (ES + EN) — 12 de 12
- "Tres tipos de exigencia" → **"Tres niveles de exigencia"** (+ metadata); "Cada una demostrada…" → **"Resultados comprobables en proyectos reales."**; copys nuevos de Erick en hero, IBC, NFPA, CAPA 2 y sección regulatoria (ortografía corregida); "comprador **americano**" → "**internacional**"; cierre → "criterios más estrictos y reconocidos a nivel global".
- **Los dos "eliminar" (rsCWhcaiZkmV, JJQY4eQgY8p5) resultaron ser selecciones de "de Casa"** (el dato de selección apareció al marcarlos resolved vía API): Erick pedía quitar "de Casa" del nombre en las tarjetas DC-3 y OSHA — el rename global lo cumple. En el camino se detectó (gracias a la review de Codex) que el párrafo de la tarjeta DC-3 se había eliminado de más; **se restauró** con el rename aplicado ("Todo el personal de nuestra constructora cuenta con constancia DC-3…", ES+EN).

### Build-to-Suit (ES + EN)
- Cifras del hero y beta → "550k ft²"; "Naves Industriales **Fabricadas**" → "**Construidas**" (EN ya era neutro); headline delta → **"Tu nave industrial a la medida de tu operación."**
- **Tamaño de letra** del párrafo beta subido en desktop (1280px mostraba ~11px; ahora escala .9→1.2rem) — atiende "letra extremadamente chica".

### Rename global: → "Nuestra Constructora" — decisión del consejo de administración
- **"Constructora de Casa" desapareció del sitio ES** (~58 ocurrencias en 35 archivos): "Nuestra Constructora" en títulos/nav/badges/metadata, "nuestra constructora" en prosa (reescritura por ocurrencia, sin find/replace; en voz de clientes se usó "la constructora de Grupo Nelson").
- **EN conserva "In-House Construction"** como etiqueta (mayor punch comercial; decisión Luis+Claude 2026-07-06). URLs (`/constructora/baumex`), rutas de imagen e identificadores internos intactos, igual que el rename anterior.

### Verificados ya vigentes (solo confirmar en Vercel)
- "40" años en excelencia-operativa; "en Todo Mexicali" (ES) / "Across Mexicali" (EN); foto nelson2-8 en nuestra-historia; foto Seleccionadas…-8 en llave-en-mano; el texto EN de build-to-suit ya estaba traducido.

### Pendientes (no bloquean; decidir con Luis)
- **Imágenes (6 comentarios, 5 archivos identificados):** cielo contaminado + logo CASTORES (misma foto: `fotos-dron/VIGIA I/NAVES 17-23/naves-17-23-en-parque-el-vigia-1-5.JPG` — una edición resuelve ambos), persona caminando (`grupo-nelson-naves…-3.jpeg`), cambiar foto eta (`…-1.jpeg`), cambiar foto kappa (`parque-industrial…-436.jpg`), foto desenfocada en diseño (`…nave-industrial-1.jpg`, es efecto del crop 1:2 extremo). Preflight listo: token de Replicate presente; plan = nano-banana/flux-kontext, candidatas para aprobación visual.
- **Layout/estructura (5):** mover "Soluciones Llave en Mano" al menú Parques (mecánica identificada en navigation.ts/navigation-en.ts), compactar espacios en blanco (padding 20-30rem del bloque oscuro de lamda), alineación del h2 de lamda, gap foto-texto (es diseño editorial intencional — responder a Erick o compactar), botón "Habla con un experto" (propuesta de ubicación y patrón lista).
- **Preguntas para Erick (2):** video preview del footer (no hay `<video>`: es el ícono de YouTube — ¿quiere thumbnail del canal?), repetición editorial de proof points (¿es intencional, quiere variar?).
- **Viejos no realizados (11):** según criterio de Luis (solo triviales y claramente mejoras); incluye 1 obsoleto ("fatalidades→accidentes", contradicho por copy nuevo de Erick del 06-18).

## Primera imagen editada con AI (cielo + CASTORES) — 2026-07-07

- La foto de las naves 17-23 de El Vigía (slot de Llave en Mano + 2 entradas del inventario de naves) se reemplazó por una versión editada con Replicate (`google/nano-banana`): **cielo azul despejado** (Erick: "se ve contaminado") y **sin la marca CASTORES** al fondo (Erick: "eliminar o difuminar"). Un solo archivo resolvió los 2 comentarios.
- Luis eligió entre 2 candidatas la versión "sin CASTORES", **consciente de que el modelo reconstruyó el fondo** (horizonte limpio tipo desierto en lugar de la mancha urbana original). La candidata "solo cielo" (fondo 100% real) quedó en `candidatas-replicate/` por si se quiere revertir.
- Naming anti-caché pedido por Luis: mismo nombre + sufijo `-v2` (`naves-17-23-en-parque-el-vigia-1-5-v2.JPG`, 169 KB, 1344×768). **La original NO se borró** del repo.

## Segunda tanda de imágenes editadas con AI — 2026-07-07

- **Envista sin persona caminando** (comentario de Erick en teta/llave-en-mano): la foto `grupo-nelson-naves-…-mexicali-3` se usaba en **10 lugares** (home ES/EN, casos de éxito ES/EN, liderazgo ES/EN, cascadas, xi, teta) — se reemplazó en todos por la versión editada `…-3-v2.jpeg` (persona eliminada, banqueta rellenada natural; aprobada por Luis).
- **Naves 1-4 El Vigía con cielo azul** (pedido directo de Luis por URL, sin thread de Vercel): `naves-1-4-…-1-1-v2.JPG` en el slot de lamda y 2 entradas del inventario de naves (cielo café → azul con nubes; suelo intacto; aprobada por Luis).
- Ambas con sufijo `-v2` anti-caché; originales conservadas en el repo.
