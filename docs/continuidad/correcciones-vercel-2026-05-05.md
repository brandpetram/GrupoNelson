# Correcciones Vercel — 2026-05-05

Branch: `dev`. Estado inicial: limpio, sync con `origin/dev`, sin divergencia con `main`.

---

## #1 — `/es/nelson/trayectoria` — quitar "33" del h2

ES + EN. ✅ Hecho.
- `src/components/brandpetram/logos-grid-bp-2.tsx:53` (default EN)
- `src/components/brandpetram/logos-grid-bp-2.tsx:54` (default ES)
- `src/app/(en)/about/track-record/page.tsx:25` (title hardcodeado EN)

## #2 — `/es/nelson/trayectoria` — "1956, don Rodolfo Nelson Barbara, instaló…"

ES ✅ — `src/components/brandpetram/editorial-cascada-bp.tsx:63`.
EN ⏸ — pendiente: cómo manejar "don" en inglés.

Notas:
- Apellido: pendiente confirmar `Barbara` vs `Bárbara`.

## #3 — `/es/nelson/trayectoria` — "cinco parques" → "cinco parques industriales"

ES + EN. ✅ Hecho.
- `src/components/brandpetram/editorial-cascada-bp.tsx:63` (default ES)
- `src/components/brandpetram/editorial-cascada-bp.tsx:73` (default EN)
- `src/app/(en)/about/track-record/page.tsx:56` (parrafo hardcodeado EN)

## #4 — `/es/nelson/trayectoria` — "desarrollados" → "rentados" / "developed" → "leased"

ES + EN. ✅ Hecho.
- `src/components/brandpetram/editorial-cascada-bp.tsx:63` (default ES)
- `src/components/brandpetram/editorial-cascada-bp.tsx:73` (default EN)
- `src/app/(en)/about/track-record/page.tsx:56` (parrafo hardcodeado EN)

## #5 — `/es/nelson/diferencia-nelson` — h2 "desde 1967" → "desde 1956"

ES + EN. ✅ Hecho.
- `src/components/brandpetram/editorial-cascada-beta.tsx:100` (titulo EN)
- `src/components/brandpetram/editorial-cascada-beta.tsx:113` (titulo ES)

## #6 — `/es/nelson/diferencia-nelson` — parrafo "1967" → "1956"

ES + EN. ✅ Hecho.
- `src/components/brandpetram/editorial-cascada-beta.tsx:101` (parrafo EN)
- `src/components/brandpetram/editorial-cascada-beta.tsx:114` (parrafo ES)

## #7 — `/es/nelson/diferencia-nelson` — parrafo "28 años" → "30 años"

ES + EN. ✅ Hecho.
- `src/components/brandpetram/editorial-cascada-beta.tsx:101` (parrafo EN)
- `src/components/brandpetram/editorial-cascada-beta.tsx:114` (parrafo ES)

## #8 — `/es` (homepage) — AlphaBP: año 1956 + frase nueva sobre primer parque en 1967

ES + EN. ✅ Hecho.
- `src/app/es/home-client.tsx:100` (ES)
- `src/app/(en)/home-client.tsx:98` (EN — reescrito idiomático: "...established Mexicali's first maquiladora in 1956 and opened its first industrial park in 1967 remains actively involved today, building long-term relationships...")

## #9 — `/es` (homepage) — RadiantHeader lead: simplificado a "Corporaciones internacionales..."

ES + EN. ✅ Hecho.
- `src/components/from-tailwind-templates/radiant-ts-header/header.tsx:53-54`
- ES: "Corporaciones internacionales ya eligieron operar en nuestros parques — relaciones de largo plazo que se miden en décadas."
- EN: "International corporations have already chosen to operate in our parks — long-term relationships measured in decades."

## #10 — `/es` (homepage) — RadiantHeader sectionTitle "Dos caminos…" → "Soluciones diseñadas para el éxito"

ES + EN. ✅ Hecho.
- `src/components/from-tailwind-templates/radiant-ts-header/header.tsx:55`
- ES: "Soluciones diseñadas para el éxito" (Luis escribió "exito" sin acento; aplicado con acento por ortografía estándar).
- EN: "Solutions designed for success".

## #11 — `/es` (homepage) — RadiantHeader paragraphs[0]: eliminar "— desde El Vigía hasta Nelson II"

ES + EN. ✅ Hecho.
- `src/components/from-tailwind-templates/radiant-ts-header/header.tsx:58` (EN) y `:62` (ES).

## #12 — Sitio ES: "in-house" → "interna" (sweep solo en ES)

Solo ES. ✅ Hecho. EN no tocado.

Archivos ES:
- `src/app/es/home-client.tsx` (3 ocurrencias)
- `src/app/es/experiencia/excelencia-operativa/page.tsx` (description + comentario JSX)
- `src/app/es/experiencia/excelencia-operativa/sections/como-trabajamos.tsx` ("Cost Engineer interno")
- `src/app/es/constructora/baumex/page.tsx` (description metadata)
- `src/app/es/nelson/diferencia-nelson/page.tsx` (tagline + comentario JSX)
- `src/app/es/nelson/nuestra-historia/page.tsx`
- `src/app/es/nelson/liderazgo/page.tsx`

Componentes (solo bloque ES en bilingües):
- `src/components/brandpetram/mu.tsx:12` (badge)
- `src/components/brandpetram/kappa.tsx:8`
- `src/components/brandpetram/psi.tsx:9`
- `src/components/brandpetram/nu.tsx:16` (`boxTitleHighlight: 'in-house'` → `'internas'`)
- `src/components/from-tailwind-templates/radiant-ts-header/header.tsx:63`

Componentes ES hardcoded:
- `src/components/brandpetram/feature-section-8-bp.tsx`
- `src/components/pro-blocks/hero-section-1/hero-section-1.tsx`
- `src/components/pro-blocks/feature-section-8/feature-section-8.tsx`

Nav:
- `src/data/nav/navigation.ts:90` (`navigation-en.ts` no tocado).

Skipped: páginas `src/app/(dev)/...` (no son sitio público) y todos los bloques `en:` de componentes bilingües.

## #13 — `/es` (homepage) — RadiantHeader stat "33" → "+30"

ES + EN. ✅ Hecho.
- `src/components/from-tailwind-templates/radiant-ts-header/header.tsx:26` (default ES) y `:33` (default EN).
- `src/app/(en)/home-client.tsx:115` (override EN — la página /en pasa stats explícitos).
- `end: 33` → `end: 30, prefix: '+'`.

Fix tardío de #10 y #11 en EN: la página `(en)/home-client.tsx` también tenía overrides para `sectionTitle` y `paragraphs[0]` que estaban bloqueando los cambios. Actualizado:
- `src/app/(en)/home-client.tsx:107` — sectionTitle: `"Two paths, one provider"` → `"Solutions designed for success"`.
- `src/app/(en)/home-client.tsx:110` — quitado `— from El Vigia to Nelson II`.

## #14 — `/es` (homepage) — RadiantHeader stat "4M Desarrollados" → "+4M Arrendados"

ES + EN. ✅ Hecho.
- `src/components/from-tailwind-templates/radiant-ts-header/header.tsx:29` (default ES): label "Pies Cuadrados\nDesarrollados" → "Pies Cuadrados\nArrendados", agregado `prefix: '+'`.
- `src/components/from-tailwind-templates/radiant-ts-header/header.tsx:36` (default EN): label "Square Feet\nDeveloped" → "Square Feet\nLeased", agregado `prefix: '+'`.
- `src/app/(en)/home-client.tsx:118` (override EN): mismo cambio aplicado.

## #15 — `/es` (homepage) — Mosaico bloque 4: gradiente naranja → azul plano

✅ Hecho (cambio visual, aplica a ES y EN porque el componente es compartido).
- `src/components/brandpetram/con-props/mosaico-2-con-props.tsx:118`
- `bg-linear-to-r from-orange-600 to-red-600` → `bg-blue-600` (sólido, sin gradiente).

## #16 — Sweep cross-site: todos los `bg/from/to-orange-*` → azul

✅ Hecho. Sin orange en backgrounds/gradientes del sitio público (verificado con grep).

Política aplicada:
- `bg-orange-X` → `bg-blue-X` (mismo tono).
- Gradientes orange-* o orange-red-* → `bg-blue-600` plano (sin gradiente, según indicación de Luis "para no complicarnosla mucho podemos usar simplemente bg-600").
- Gradientes en `bg-clip-text` → mantenido como gradiente pero `from-blue-600 to-blue-700`.
- Stop colors SVG en `alpha-bp.tsx` (#f97316/#dc2626) → #2563eb/#1d4ed8 (azules).
- Comentarios JSX "Naranja" → "Azul" donde tenía sentido.

Archivos tocados:
- `src/app/(en)/about/our-story/page.tsx`
- `src/app/es/nelson/nuestra-historia/page.tsx`
- `src/components/ui/brandpetram/cuadritos-lluvia-tres.tsx`
- `src/components/ui/brandpetram/imagen-con-etiqueta.tsx` (etiquetaBg + poligonoBg defaults)
- `src/components/brandpetram/circulos.tsx`
- `src/components/brandpetram/big-number.tsx` (gradiente texto)
- `src/components/brandpetram/mosaico-2.tsx`
- `src/components/brandpetram/grid-poligonos-2x1x2x1.tsx`
- `src/components/brandpetram/ticker-marketing-2.tsx`
- `src/components/brandpetram/grid-marcas-de-conveyors.tsx`
- `src/components/brandpetram/gamma.tsx`
- `src/components/brandpetram/teta.tsx`
- `src/components/brandpetram/epsilon.tsx`
- `src/components/brandpetram/tres-cards.tsx`
- `src/components/brandpetram/beta.tsx`
- `src/components/brandpetram/imagen-con-etiqueta-1.tsx`
- `src/components/brandpetram/cuadro-circulo-con-escuadra.tsx`
- `src/components/brandpetram/con-props/cuadro-circulo-con-escuadra-con-props.tsx`
- `src/components/brandpetram/con-props/mosaico-invertido-con-props.tsx`
- `src/components/brandpetram/con-props/cuadricula-section-con-props.tsx`
- `src/components/brandpetram/con-props/cinco-cards-con-props.tsx`
- `src/components/brandpetram/con-props/tres-cards-con-props.tsx`
- `src/components/brandpetram/con-props/big-number-con-props.tsx`
- `src/components/brandpetram/item-conveyor.tsx`
- `src/components/brandpetram/alpha-bp.tsx` (stop colors SVG)

NO tocado:
- `text-orange-*`, `fill-orange-*`, `ring-orange-*` (no son backgrounds).
- Páginas `src/app/(dev)/...` (no son sitio público).

Adicional:
- `src/app/globals.css:340,351` — variables CSS `--color-primary` y `--color-ring` del tema `[data-theme="svelte"]` cambiadas de `var(--color-orange-600)` a `var(--color-blue-600)`. Nota: este tema svelte no está activo en el sitio (no hay `data-theme="svelte"` en código), así que era código muerto; cambiado por consistencia. El tema activo (`:root`) ya tenía `--primary: #2563eb` (azul) hardcoded.

## #17 — `/es` (homepage) — MosaicoInvertido bloque1: eliminar "Baumex,"

ES + EN. ✅ Hecho.
- `src/app/es/home-client.tsx:130` — "Baumex, nuestra constructora interna…" → "Nuestra constructora interna…".
- `src/app/(en)/home-client.tsx:145` — "Baumex, our in-house construction firm…" → "Our in-house construction firm…".

## #18 — `/es` (homepage) — Link "Conocer Baumex" → "CONOCE NUESTRA CONSTRUCTORA"

ES + EN. ✅ Hecho.
- `src/app/es/home-client.tsx:131` — "Conocer Baumex" → "CONOCE NUESTRA CONSTRUCTORA".
- `src/app/(en)/home-client.tsx:146` — "About Baumex" → "MEET OUR CONSTRUCTION FIRM".

## #19 — `/es` (homepage, ScrollStorytelling) — "Méxicalí" → "Mexicali"

Solo ES (ortografía específica del idioma). ✅ Hecho.
- `src/components/brandpetram/scroll-storytelling.tsx:154` — Mexicali sin acentos.

## #20 — `/es` (homepage, ScrollStorytelling) — Reescribir final del párrafo Fase 1

ES + EN. ✅ Hecho.
- `src/components/brandpetram/scroll-storytelling.tsx:156` (default ES) — "...le presentamos la ubicación exacta que su operación necesita en Mexicali." → "...les desarrollamos una propuesta integral acorde a sus necesidades."
- `src/app/(en)/home-client.tsx:172` (override EN) — "...and present the exact location your operation needs in Mexicali." → "...and develop a comprehensive proposal tailored to your needs."

## #21 — Sweep ES: "Build-to-Suit" → "A la medida"

Solo ES. ✅ Hecho. EN no tocado. URLs y paths preservados (no se cambian rutas).

Texto visible y comentarios JSX en archivos ES:
- `src/app/layout.tsx:23,30` (description metadata + openGraph).
- `src/app/es/page.tsx:9` (description).
- `src/app/es/home-client.tsx:107,126,134,142,192,201` (comentarios JSX, alts, FAQs).
- `src/app/es/contactanos/contact-section.tsx:46` ("Construcción build-to-suit a la medida" → "Construcción a la medida").
- `src/app/es/contacto/contact-section.tsx:62` (mismo).
- `src/app/es/contactanos/page.tsx:6` (description).
- `src/app/es/contacto/page.tsx:8` (description).
- `src/app/es/nelson/liderazgo/page.tsx:21` (rol).
- `src/components/brandpetram/phi.tsx:19` (svc1Title bloque ES).
- `src/components/brandpetram/sidebar-sticky-1.tsx:38` (label, href intacto).
- `src/components/brandpetram/tau.tsx:13,123` (cell3Title ES y comentario JSX).
- `src/components/brandpetram/ficha-tecnica-parque.tsx:74` (bloque ES).
- `src/components/brandpetram/psi.tsx:14` (FAQ bloque ES).
- `src/components/brandpetram/scroll-storytelling.tsx:190,203` (default ES — title y botón).
- `src/components/brandpetram/epsilon.tsx:81` (comentario JSX).
- `src/components/brandpetram/beta.tsx:16` (texto bloque ES).
- `src/components/brandpetram/teta.tsx:4` (texto bloque ES).
- `src/components/brandpetram/footer-1/index.tsx:84` (label footer ES, href intacto).
- `src/data/nav/navigation.ts:101` (name nav ES, href intacto).
- `src/glossary/terms.ts:80` (buildToSuit ES).

NO tocado:
- URLs/paths (`/constructora/build-to-suit`, `/es/constructora/build-to-suit`, etc.) — cambiarlas rompería el sitio.
- `src/app/sitemap.ts:23`, `src/glossary/route-map.ts:39` — URL mappings.
- `src/data/nav/navigation-en.ts` — nav EN.
- Bloques `en:` en componentes bilingües (phi, sidebar-sticky, tau, ficha-tecnica, psi, beta, teta, header).
- `src/app/(dev)/...`.

## #22 — `/es` (homepage, ScrollStorytelling Fase 3) — eliminar lista de empresas

ES + EN. ✅ Hecho. Texto reescrito para no quedar cortado al eliminar la lista.
- `src/components/brandpetram/scroll-storytelling.tsx:192` — "...los estándares de calidad que exigen empresas como Gulfstream, DHL y Honeywell." → "...los estándares de calidad que exigen las empresas más demandantes."
- `src/app/(en)/home-client.tsx:206` — "...the quality standards demanded by companies like Gulfstream, DHL and Honeywell." → "...meeting world-class quality standards." (versión idiomática, no traducción literal del ES).

## #23 — `/es` (homepage, ScrollStorytelling Fase 3) — botón → "Construcción a la medida"

ES + EN. ✅ Hecho.
- `src/components/brandpetram/scroll-storytelling.tsx:203` (default ES) — "Conocer construcción a la medida" → "Construcción a la medida".
- `src/app/(en)/home-client.tsx:217` (override EN) — "About build-to-suit" → "Build-to-suit construction".

## #24 — `/es` (homepage, ScrollStorytelling Fase 4) — eliminar "Turnkey" del título

Solo ES (regla: anglicismos se traducen en /es; en /en se conservan). ✅ Hecho.
- `src/components/brandpetram/scroll-storytelling.tsx:209` — "Entrega Turnkey <br/> Llave en Mano" → "Entrega <br/> Llave en Mano".
- EN no tocado (Turnkey es término natural).

## #25 — `/es` (homepage, ScrollStorytelling Fase 4) — eliminar ", sin sorpresas"

ES + EN. ✅ Hecho.
- `src/components/brandpetram/scroll-storytelling.tsx:211` — "Sin intermediarios, sin retrasos, sin sorpresas." → "Sin intermediarios, sin retrasos."
- `src/app/(en)/home-client.tsx:224` — "No intermediaries, no delays, no surprises." → "No intermediaries, no delays."

## #26 — `/es` (homepage, ScrollStorytelling) — botón Baumex → "Conoce nuestra Constructora"

ES + EN. ✅ Hecho.
- `src/components/brandpetram/scroll-storytelling.tsx:260` — "Conocer Baumex" → "Conoce nuestra Constructora".
- `src/app/(en)/home-client.tsx:271` — "About Baumex" → "Meet our construction firm".

## #27 — `/es` (homepage, ScrollStorytelling Fase 7) — usted → contigo

Solo ES (cambio de tratamiento formal→informal; EN no distingue tú/usted). ✅ Hecho.
- `src/components/brandpetram/scroll-storytelling.tsx:268` — "Cuando su operación crece, nosotros crecemos con usted." → "Cuando tu operación crece, nosotros crecemos contigo." (cambié todo el sujeto del párrafo a tuteo para que sea coherente; el resto del párrafo no usaba "usted" como pronombre directo).

## #28 — `/es` (homepage, ScrollStorytelling Fase 7) — "iniciaron en" → "iniciaron con"

Solo ES. ✅ Hecho.
- `src/components/brandpetram/scroll-storytelling.tsx:268` — "Clientes que iniciaron en 5,000 pies cuadrados" → "Clientes que iniciaron con 5,000 pies cuadrados".

## #29 — `/es` (homepage, ScrollStorytelling Fase 8) — reescribir párrafo Skyworks

ES + EN. ✅ Hecho. ES: aplicado tal cual lo escribió Luis con acentos/ortografía corregidos (parecía, metálica, cimentación, sísmica, necesitó, atravesando, bulevar). EN: versión idiomática, no traducción literal.
- `src/components/brandpetram/scroll-storytelling.tsx:287`.
- `src/app/(en)/home-client.tsx:296`.

## #30 — `/es` (homepage, CirculosConProps) — "60" → "60+", "33" → "30+", "75" → "75+"

ES + EN. ✅ Hecho (3 círculos en una sola pasada).
- `src/app/es/home-client.tsx:169,172,175` y `src/app/(en)/home-client.tsx:329,332,335`.
- `circulo1Letra: 60 → 60+`, `circulo2Letra: 33 → 30+`, `circulo3Letra: 75 → 75+`.

## #31 — `/es` (homepage, CirculosConProps) — circulo1Descripcion: 1956 + primer parque en 1967 + quitar final

ES + EN. ✅ Hecho (3 cambios combinados al mismo párrafo).
- `src/app/es/home-client.tsx:171` — "La familia que instaló la primera maquiladora **de** Mexicali en 1967 sigue... — no un gerente que rota cada dos años." → "La familia que instaló la primera maquiladora **en** Mexicali en 1956 **y desarrolló el primer Parque Industrial en 1967,** sigue... [final eliminado]."
- `src/app/(en)/home-client.tsx:331` — versión idiomática EN: "The family that established Mexicali's first maquiladora in 1956 and opened the city's first industrial park in 1967 still operates personally..." (sin la coletilla final).

## #32 — `/es` (homepage, CirculosConProps) — circulo3Descripcion: quitar Baumex + reescribir cifra

ES + EN. ✅ Hecho.
- `src/app/es/home-client.tsx:177` — "Baumex, nuestra constructora interna, lleva 30 años y 75+ proyectos..." → "Nuestra constructora interna lleva 30 años con más de 75 proyectos..."
- `src/app/(en)/home-client.tsx:337` — versión idiomática EN: "Our in-house construction firm has 30 years of experience and more than 75 completed projects..."

## #33 — Homepage FAQ — trailing text bilingüe

ES + EN. ✅ Hecho.
- `src/components/brandpetram/con-props/faq-sections-three-columns-bp-con-props.tsx` — texto hardcoded "and we'll get back to you as soon as we can." reemplazado por `trailingText` que respeta `lang` prop. ES: "Nos pondremos en contacto a la brevedad posible." EN: literal anterior.
- `src/app/es/home-client.tsx:184` — agregado `lang="es"`.
- `src/app/(en)/home-client.tsx:343` — agregado `lang="en"`.

## #34 — Homepage FAQ #3 — eliminar "Baumex,"

ES + EN. ✅ Hecho.
- `src/app/es/home-client.tsx:202` — "Sí. Baumex, nuestra constructora interna…" → "Sí. Nuestra constructora interna,…".
- `src/app/(en)/home-client.tsx:362` — "Yes. Baumex, our in-house construction firm…" → "Yes. Our in-house construction firm,…".

## #35 — Homepage FAQ #4 — eliminar "33"

ES + EN. ✅ Hecho.
- `src/app/es/home-client.tsx:207` — "33 corporaciones internacionales,…" → "Corporaciones internacionales,…".
- `src/app/(en)/home-client.tsx:367` — "33 international corporations,…" → "International corporations,…".

## #36 — Homepage FAQ #5 — eliminar oración "Baumex…Honeywell"

ES + EN. ✅ Hecho.
- `src/app/es/home-client.tsx:212` — eliminada oración "Baumex tiene calificación ISN 'Recomendado' por Honeywell.".
- `src/app/(en)/home-client.tsx:372` — eliminada oración "Baumex holds an ISN 'Recommended' rating by Honeywell.".

## #37 — Homepage FAQ #6 — "1967" → "1956"

ES + EN. ✅ Hecho.
- `src/app/es/home-client.tsx:217` — "Fundamos la industria maquiladora de Mexicali en 1967." → "…en 1956."
- `src/app/(en)/home-client.tsx:377` — "We founded Mexicali's maquiladora industry in 1967." → "…in 1956."

## #38 — Homepage CincoCardsConProps — reordenar parques

ES + EN. ✅ Hecho. Orden previo: Nelson II, Nelson I, Vigía I, Vigía II. Orden nuevo: Vigía I, Nelson I, Vigía II, Nelson II.
- `src/app/es/home-client.tsx:226-249` — cards 1–4 reasignadas; URLs/alts/imágenes movidas con su tarjeta.
- `src/app/(en)/home-client.tsx:386-409` — equivalente.
- `card5` (Honeywell, `mostrarCard5={false}`) intacta.

## #39 — Homepage CincoCardsConProps — estandarizar botón Nelson I → "Ver especificaciones"

ES + EN. ✅ Hecho.
- `src/app/es/home-client.tsx:234` — `card2BotonTexto: "Ver más"` → `"Ver especificaciones"`.
- `src/app/(en)/home-client.tsx:394` — `card2BotonTexto: "Learn more"` → `"View specifications"`.

## #40 — Homepage VirtualTourBP — escena inicial = Nelson II

ES + EN. ✅ Hecho. Agregado `sceneId="TYW_If4PeV"` para que el tour del index abra en la misma burbuja que la página de Nelson II.
- `src/app/es/home-client.tsx:261` — añadida prop `sceneId`.
- `src/app/(en)/home-client.tsx:423` — añadida prop `sceneId`.

Nota: los hotspots/etiquetas internas del tour ("terrenos disponibles") se editan en CloudPano, no en código. El cambio de escena inicial ya las saca del cuadro inicial.
