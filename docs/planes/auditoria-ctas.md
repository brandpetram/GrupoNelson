# Auditoría de CTAs y Botones — Grupo Nelson

**Fecha:** 2026-04-10
**Worktree:** wt/revisar-ctas
**Método:** Lectura completa de cada archivo con Read (sin grep). No se levantó la app.
**Estado:** ✅ Completada — todos los CTAs rotos en páginas públicas fueron corregidos (2026-04-11).

**Fixes aplicados:**
- ScrollStorytelling: 8 `#contacto` → `/contacto` + destinos específicos por fase (Fase 2, MAIN)
- Constructora (build-to-suit, llave-en-mano, diseño-e-ingeniería): botones sin href + CTAs rotos (wt/revisar-ctas)
- Contacto, casos-de-éxito: links a rutas inexistentes (wt/revisar-ctas)
- Componentes griegos (mu, nu, xi, etc.): CTAs corregidos (wt/revisar-ctas)

**Pendientes no-bloqueantes:** `href="#"` en componentes de catálogo/demo que no se usan en páginas públicas (footer.tsx viejo, mosaico-2.tsx, tailwind-ui/*, (marketing)/product/*).

---

## Alcance y exclusiones

**Auditado (rutas públicas de marketing y legal):**
- Homepage (`/`), Nosotros (4 páginas), Parques (índice + 4 parques), Inventario (naves + terrenos)
- Constructora (8 páginas + 7 subpáginas LEED), Experiencia (3 páginas)
- Recursos, Blog (índice + `[slug]`), Noticias (índice + `[slug]`)
- Contacto, Contactanos, Gracias
- Legal: términos, aviso de privacidad, política de cookies
- Página en inglés (`/en`)
- Componentes compartidos: Header, Footer, LeedPageLayout
- Componentes brandpetram: todos los `.tsx` en `src/components/brandpetram/` y `con-props/`

**Excluido a propósito (no son rutas de marketing):**
- `/dev`, `/qa`, `/componentes`, `/componentes-dos`, `/componentes-tres` — playgrounds internos
- `/productos`, `/proyecto` — rutas de catálogo/demo
- `/studio` — Sanity Studio
- `/api/*` — endpoints
- `/blog/category/*`, `/noticias/category/*` — filtros dinámicos (no tienen CTAs propios)

---

## Resumen ejecutivo

Se encontraron **4 categorías de problemas**. Los conteos se derivan de las tablas del cuerpo del documento (secciones 1-37). La regla de conteo es: una fila cuenta si su columna "Acción" ≠ OK.

**Convención en las tablas:** La columna "¿Existe la página?" usa consistentemente **No** (en negrita) para indicar que la ruta no existe. Buscar `**No**` para localizar todas las ocurrencias.

| Categoría | Conteo | Derivación |
|---|---|---|
| CTAs con href `#` o `#contacto` | 27 | Footer (9) + ScrollStorytelling (8) + Baumex (10). Buscar filas donde href = `#` o `#contacto` y Acción ≠ OK |
| Botones sin href (`<button>` sin Link) | 10 | Build-to-suit (2) + Llave-en-mano (6) + Diseño e ingeniería (2). Buscar "Sin href" en columna href |
| Links a rutas inexistentes (href ≠ `#`) | 4 en páginas + 23 en componentes | Páginas: contacto (1) + contactanos (1) + casos-de-éxito (2). Componentes sección 37: carrusel (13) + logos-marcas (9) + HeroMotionPlus (1) |
| Textos en inglés sin localizar | 5 componentes | Sección 37 (4 componentes BP) + sección 30 (/en) |

---

## Nota sobre ownership (reglas de worktree)

Este documento es inventario, no plan de ejecución. Vive en `docs/planes/` que según la guía de worktrees se edita desde MAIN. Este worktree (`wt/revisar-ctas`) lo creó como hallazgo; la decisión de merge y asignación de fixes corresponde a MAIN.

Cada fix del backlog requiere clasificar el tipo antes de ejecutar (ver sección final).

---

## 1. Homepage — /

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| TarjetaHeroOriginal | "Conocer mas" | `/nelson/diferencia-nelson` | Sí | Sí | OK |
| TarjetaHeroOriginal | "Contactar" | `/contacto` | Sí | Sí | OK |
| TarjetaHeroOriginal | Badge "Sustainable Design" | Sin href (es `<div>`) | N/A | Tiene hover + flecha pero no es link | Revisar con usuario — ¿debería ser link? |
| Mosaico2ConProps | "Ver parques" | `/parques-industriales-mexicali` | Sí | Sí | OK |
| Mosaico2ConProps | "Contactar" | `/contacto` | Sí | Sí | OK |
| MosaicoInvertidoConProps | "Conocer Baumex" | `/constructora/baumex` | Sí | Sí | OK |
| MosaicoInvertidoConProps | "Solicitar proyecto" | `/contacto` | Sí | Sí | OK |
| ScrollStorytelling item 1 | "Contactar consultor" | `#contacto` | **No** (anchor inexistente) | No | Cambiar a `/contacto` |
| ScrollStorytelling item 1 | "Mas informacion" | `/parques-industriales-mexicali` | Sí | Genérico | Revisar — debería apuntar a página más específica |
| ScrollStorytelling item 2 | "Ver proyectos realizados" | `/parques-industriales-mexicali` | Sí | Genérico | Revisar — todos los items 1-7 apuntan al mismo lugar |
| ScrollStorytelling item 2 | "Solicitar diseno" | `#contacto` | **No** | No | Cambiar a `/contacto` |
| ScrollStorytelling item 3 | "Conocer nuestras obras" | `/parques-industriales-mexicali` | Sí | Genérico | Mismo problema |
| ScrollStorytelling item 3 | "Proyectos en progreso" | `#contacto` | **No** | No | Cambiar a `/contacto` |
| ScrollStorytelling item 4 | "Proyectos entregados" | `/parques-industriales-mexicali` | Sí | Genérico | Mismo problema |
| ScrollStorytelling item 4 | "Agendar entrega" | `#contacto` | **No** | No | Cambiar a `/contacto` |
| ScrollStorytelling item 5 | "Protocolos de seguridad" | `/parques-industriales-mexicali` | Sí | Genérico | Mismo problema |
| ScrollStorytelling item 5 | "Mas detalles" | `#contacto` | **No** | No | Cambiar a `/contacto` |
| ScrollStorytelling item 6 | "Planes de mantenimiento" | `/parques-industriales-mexicali` | Sí | Genérico | Mismo problema |
| ScrollStorytelling item 6 | "Solicitar servicio" | `#contacto` | **No** | No | Cambiar a `/contacto` |
| ScrollStorytelling item 7 | "Historias de crecimiento" | `/parques-industriales-mexicali` | Sí | Genérico | Mismo problema |
| ScrollStorytelling item 7 | "Planifica tu expansion" | `#contacto` | **No** | No | Cambiar a `/contacto` |
| ScrollStorytelling item 8 | "Ver proyectos especiales" | `/constructora/proyectos-especializados` | Sí | Sí | OK |
| ScrollStorytelling item 8 | "Contactar" | `#contacto` | **No** | No | Cambiar a `/contacto` |
| ScrollStorytelling tags 1-7 | Varios textos de etiqueta | `/parques-industriales-mexicali` | Sí | Genérico | Revisar — todas las tags van al mismo sitio |
| ScrollStorytelling tag 8 | "Construcciones Industriales Especiales..." | `/constructora/proyectos-especializados` | Sí | Sí | OK |
| FaqSectionsThreeColumnsBPConProps | "correo electrónico" | `mailto:contacto@nelson.com.mx` | Sí | Sí | OK |
| CincoCards — Nelson II | "Ver especificaciones" | `/parques-industriales-mexicali/nelson-ii` | Sí | Sí | OK |
| CincoCards — Nelson I | "Ver más" | `/parques-industriales-mexicali/nelson-i` | Sí | Sí | OK |
| CincoCards — Vigía I | "Ver especificaciones" | `/parques-industriales-mexicali/vigia-i` | Sí | Sí | OK |
| CincoCards — Vigía II | "Ver especificaciones" | `/parques-industriales-mexicali/vigia-ii` | Sí | Sí | OK |
| CincoCards — Honeywell | "Conocer más" | `#` | N/A (card oculta) | N/A | OK — `mostrarCard5={false}` |

**Nota sobre FaqSectionsThreeColumnsBPConProps:** El texto circundante del componente base (`faq-sections-three-columns-bp.tsx`) todavía está en inglés ("Have a different question..."). En la homepage se pasa como prop en español, pero el componente sin props conserva el texto inglés.

---

## 2. Nosotros — /nelson/trayectoria

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Header | "Contacto" | `/contacto` | Sí | Sí | OK |
| StatsGridBPGamma | "Ver en YouTube" | `https://youtu.be/U0lJuEA7KM4` | Externo | Sí | OK |
| EditorialCascadaBP | "Contactenos" | `/contacto` | Sí | Sí | OK |
| EditorialCascadaBP | "Conozca Grupo Nelson" | `/nelson/diferencia-nelson` | Sí | Sí | OK |

---

## 3. Nosotros — /nelson/diferencia-nelson

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| EditorialCascadaBeta | "Solicita una consulta" | `/contacto` | Sí | Sí | OK |
| EditorialCascadaBeta | "Conoce nuestra trayectoria" | `/nelson/trayectoria` | Sí | Sí | OK |
| Cierre inline | "Solicita una consulta" | `/contacto` | Sí | Duplicado | Revisar — mismo CTA aparece 2 veces en la página |
| Cierre inline | "Conoce nuestra trayectoria" | `/nelson/trayectoria` | Sí | Duplicado | Revisar — mismo CTA aparece 2 veces |

---

## 4. Nosotros — /nelson/liderazgo

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Bloque 5 CTA | "Solicita una consulta" | `/contacto` | Sí | Sí | OK |
| MosaicoLiderazgo card 1 | "La familia fundadora..." | `/nelson/liderazgo` | Sí | **Auto-referencia** | Cambiar href — apunta a la misma página |
| MosaicoLiderazgo card 2 | "80% de clientes regresan" | `/nelson/liderazgo` | Sí | **Auto-referencia** | Cambiar href |
| MosaicoLiderazgo card 3 | "Tres generaciones..." | `/nelson/liderazgo` | Sí | **Auto-referencia** | Cambiar href |
| MosaicoLiderazgo card 4 | "30 años dirigiendo..." | `/nelson/liderazgo` | Sí | **Auto-referencia** | Cambiar href |

---

## 5. Nosotros — /nelson/nuestra-historia

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Card naranja | "Ver especificaciones ->" | `/parques-industriales-mexicali/nelson-ii` | Sí | Sí | OK |
| (Página completa) | — | — | — | — | Revisar — no tiene CTA de contacto ni cierre |

---

## 6. Parques — /parques-industriales-mexicali

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Cards de parques | Nombre del parque (card completa) | `/parques-industriales-mexicali/{slug}` | Sí | Sí | OK |
| (Página completa) | — | — | — | — | Revisar — no tiene CTA de contacto/conversión |

---

## 7. Parques — /parques-industriales-mexicali/nelson-i

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| (Página completa) | — | — | — | — | **Sin CTAs de conversión** — no hay botón de contacto |

---

## 8. Parques — /parques-industriales-mexicali/nelson-ii

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| ParkMap | "Abrir en Google Maps ->" | `{park.mapsUrl}` (externo) | Sí | Sí | OK |
| (Página completa) | — | — | — | — | **Sin CTA de conversión** — solo el link a Maps |

---

## 9. Parques — /parques-industriales-mexicali/vigia-i

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| (Página completa) | — | — | — | — | **Sin CTAs de conversión** |

---

## 10. Parques — /parques-industriales-mexicali/vigia-ii

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| (Página completa) | — | — | — | — | **Sin CTAs de conversión** |

---

## 11. Inventario — /inventario/naves-disponibles

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Drawer | "WhatsApp" | Dispara evento (no navega) | N/A | Sí | OK — abre drawer de WhatsApp |
| Drawer | "Solicitar información" | `/contacto` | Sí | Sí | OK |
| Drawer | "Llamar" | `tel:+526865534088` | N/A | Sí | OK |

---

## 12. Inventario — /inventario/terrenos

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| TerrenoDrawer | "Solicitar información" | `/contacto` | Sí | Sí | OK |

---

## 13. Constructora — /constructora/baumex

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Mu (hero badge) | "Baumex - Constructora in-house..." | `#` | **No** | No | Cambiar a href real o quitar link |
| Mu (hero) | "Conocer mas" | `#` | **No** | No | Cambiar a href real (ej: `/constructora/build-to-suit`) |
| Mu (hero) | "Contacto" | `#` | **No** | No | Cambiar a `/contacto` |
| Nu | "Contactanos ->" | `#` | **No** | No | Cambiar a `/contacto` |
| Xi | "Contactanos" | `#` | **No** | No | Cambiar a `/contacto` |
| Phi servicio 1 | "Ver mas" (Build-to-Suit) | `#` | **No** | No | Cambiar a `/constructora/build-to-suit` |
| Phi servicio 2 | "Ver mas" (Expansión) | `#` | **No** | No | Cambiar a href real |
| Phi servicio 3 | "Ver mas" (Tenant Improvement) | `#` | **No** | No | Cambiar a href real |
| Chi | "Contactanos" | `#` | **No** | No | Cambiar a `/contacto` |
| Psi (FAQs) | "Contactanos" | `#` | **No** | No | Cambiar a `mailto:contacto@nelson.com.mx` o `/contacto` |
| Tau | "Diseño e Ingeniería" | `/constructora/diseno-e-ingenieria` | Sí | Sí | OK |
| Tau | "Build-to-Suit" | `/constructora/build-to-suit` | Sí | Sí | OK |
| Tau | "Llave en Mano" | `/constructora/llave-en-mano` | Sí | Sí | OK |
| Tau | "Portafolio Completo" | `/constructora/portafolio` | Sí | Sí | OK |

---

## 14. Constructora — /constructora/build-to-suit

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| TarjetaHeroOriginalBeta | "Conocer mas" | **Sin href** (Button sin Link) | N/A | No navega | Envolver en Link o agregar href |
| TarjetaHeroOriginalBeta | "Contactar" | **Sin href** (Button sin Link) | N/A | No navega | Envolver en Link a `/contacto` |

---

## 15. Constructora — /constructora/llave-en-mano

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Zeta | Flecha (icono) | `/contacto` | Sí | Sí | OK |
| Eta | "Contactanos" | **Sin href** (`<button>`) | N/A | No navega | Envolver en Link a `/contacto` |
| Iota | "Contactanos" | **Sin href** (`<button>`) | N/A | No navega | Envolver en Link a `/contacto` |
| Lamda (blanca) | "Contactanos" | **Sin href** (`<button>`) | N/A | No navega | Envolver en Link a `/contacto` |
| Lamda (blanca) | "Ver mas" | **Sin href** (`<button>`) | N/A | No navega | Decidir destino |
| Lamda (negra) | "Contactanos" | **Sin href** (`<button>`) | N/A | No navega | Envolver en Link a `/contacto` |
| Lamda (negra) | "Ver mas" | **Sin href** (`<button>`) | N/A | No navega | Decidir destino |

---

## 16. Constructora — /constructora/diseno-e-ingenieria

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| CuadriculaSectionConProps | "Contacto" | `/contacto` | Sí | Sí | OK |
| CuadriculaSectionConProps | "Ver mas ->" | `/constructora/build-to-suit` | Sí | Sí | OK |
| FeatureSection6BPConProps | "Consulta de ingeniería" | **Sin href** (Button sin Link) | N/A | No navega | Envolver en Link a `/contacto` |
| FeatureSection6BPConProps | "Ver lo que hemos resuelto" | **Sin href** (Button sin Link) | N/A | No navega | Decidir destino |
| Mosaico2ConProps | "Ver como se hizo" | `/constructora/build-to-suit` | Sí | Sí | OK |
| Mosaico2ConProps | "Contactar" | `/contacto` | Sí | Sí | OK |
| FaqSectionsThreeColumnsBPConProps | "correo electrónico" | `mailto:contacto@gruponelson.com` | N/A | Sí | OK |

---

## 17. Constructora — /constructora/leed

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| SidebarSticky1 (7 links LEED) | Varios | `/constructora/leed/{sub}` | Sí (todas existen) | Sí | OK |
| SidebarSticky1 (3 links constructora) | Baumex, BTS, Especializados | `/constructora/{sub}` | Sí | Sí | OK |
| CarruselLeed (7 cards) | Varios | `/constructora/leed/{sub}` | Sí | Sí | OK |

---

## 18. Constructora — /constructora/estandares-internacionales

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| (Página completa) | — | — | — | — | **Sin CTAs** — página puramente informativa, sin botón de contacto |

---

## 19. Constructora — /constructora/portafolio

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| (Página completa) | — | — | — | — | **Sin CTAs** — tabla de datos sin botón de contacto |

---

## 20. Constructora — /constructora/proyectos-especializados

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Hero | "Contactar" | `/contacto` | Sí | Sí | OK |
| Hero | "Ver portafolio" | `/constructora/portafolio` | Sí | Sí | OK |
| Cierre CTA | "Dinos que necesita tu operación" | `/contacto` | Sí | Sí | OK |
| Cierre CTA | "Ver portafolio completo" | `/constructora/portafolio` | Sí | Sí | OK |

---

## 21. Experiencia — /experiencia/excelencia-operativa

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Hero | "Solicita una consulta" | `/contacto` | Sí | Sí | OK |
| CtaExcelencia | "Solicita una consulta" | `/contacto` | Sí | Sí | OK |
| DocumentacionAuditable | "Solicitar documentación de ejemplo" | `/contacto` | Sí | Sí | OK |

---

## 22. Experiencia — /experiencia/casos-de-exito

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| HeroMarketing1Beta | "Comienza aquí" | `/contacto` | Sí | Sí | OK |
| HeroMarketing1Beta | "Conocer más" | `/experiencia` | **No** (no hay page.tsx) | No | Cambiar a ruta válida (ej: `/experiencia/excelencia-operativa`) |
| HeroMarketing1Beta | "Solicita una consulta" | `/contacto` | Sí | Sí | OK |
| SplitStickyCasos | "Solicita una consulta" | `/contacto` | Sí | Sí | OK |
| SplitStickyCasos | "Ver experiencia completa" | `/experiencia` | **No** | No | Cambiar a ruta válida |
| MosaicoCasos (4 cards) | Card-link con flecha | `/contacto` | Sí | Sí | OK |

---

## 23. Experiencia — /experiencia/normas-certificaciones-estandares

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| HeroMotionPlus | "Solicita una consulta" | `/contacto` | Sí | Sí | OK |
| HeroMotionPlus | "Conoce los estándares" | `#certificaciones-corporativas` | Sí (anchor interno) | Sí | OK |
| Capa LEED | "la sección dedicada a LEED" | `/constructora/leed` | Sí | Sí | OK |
| Sección CTA final | — | — | — | — | **Sin botón** — tiene texto persuasivo pero no tiene link ni botón |

---

## 24. Recursos — /recursos

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Links externos (x8) | "Ver documentación oficial" | URLs externas (usgbc, fmapprovals, nfpa, etc.) | Externos | Sí | OK |
| (Página completa) | — | — | — | — | **Sin CTA hacia /contacto** |

---

## 25. Blog — /blog

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| BlogListing artículos | Títulos de posts | `/blog/{slug}` | Dinámico | Sí | OK |
| BlogListing sidebar | "RSS Feed" | `/rss.xml` | Sí | Sí | OK |
| (Página completa) | — | — | — | — | **Sin CTA hacia /contacto** |

---

## 26. Noticias — /noticias

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| BlogFilter | RSS icon | `/rss.xml` | Sí | Sí | OK |
| BlogPostGrid | Títulos de posts | `/noticias/{slug}` | Dinámico | Sí | OK |
| (Página completa) | — | — | — | — | **Sin CTA hacia /contacto** |

---

## 27. Contacto — /contacto

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Contact | "Ver inventario" | `/inventario/naves-disponibles` | Sí | Sí | OK |
| Contact | "contacto@nelson.com.mx" | `mailto:contacto@nelson.com.mx` | N/A | Sí | OK |
| Contact | "(686) 553-4088" | `tel:+526865534088` | N/A | Sí | OK |
| Contact | "(760) 357-0309" | `tel:+17603570309` | N/A | Sí | OK |
| Contact | "Política de Privacidad" | `/privacidad` | **No** — ruta real: `/(legal)/aviso-de-privacidad` | No | Cambiar a `/aviso-de-privacidad` |
| Contact | "Enviar mensaje" | POST `/api/submit-form` → `/gracias` | Sí | Sí | OK |

---

## 28. Contacto duplicado — /contactanos

Mismos CTAs que `/contacto` con mismos problemas. Diferencia: default country vacío vs "Estados Unidos".

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Contact | "Política de Privacidad" | `/privacidad` | **No** | No | Cambiar a `/aviso-de-privacidad` |
| (Resto) | Igual a /contacto | — | — | — | — |

---

## 29. Gracias — /gracias

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Inline | "Volver al inicio" | `/` | Sí | Sí | OK |

---

## 30. Página en inglés — /en

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| TarjetaHeroOriginal | "Conocer mas" | `/nelson/diferencia-nelson` | Sí | **Texto en español en página inglesa** | Cambiar a texto en inglés + decidir si href debe apuntar a versión en inglés |
| TarjetaHeroOriginal | "Contactar" | `/contacto` | Sí | **Texto en español en página inglesa** | Cambiar a texto en inglés |

**Nota:** Toda la página `/en` renderiza CTAs con textos en español. Los badges mezclan inglés y español. Requiere localización completa.

---

## 31. Blog post individual — /blog/[slug]

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Breadcrumb | "Blog" | `/blog` | Sí | Sí | OK |
| Breadcrumb | Categoría (dinámico) | `/blog/category/{slug}` | Dinámico | Sí | OK |
| TOC sidebar | Headings (dinámico) | `#{heading.slug}` (anchors) | Sí (internos) | Sí | OK |
| (Página completa) | — | — | — | — | **Sin CTA de conversión** — no hay botón de contacto |

---

## 32. Noticia individual — /noticias/[slug]

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Breadcrumb | "Noticias" | `/noticias` | Sí | Sí | OK |
| Breadcrumb | Categoría (dinámico) | `/noticias/category/{slug}` | Dinámico | Sí | OK |
| (Página completa) | — | — | — | — | **Sin CTA de conversión** |

---

## 33. Legal — /terminos, /aviso-de-privacidad, /politica-de-cookies

| Página | Texto del CTA | href actual | ¿Existe? | Acción |
|---|---|---|---|---|
| /terminos | "nelson.com.mx" | `/` | Sí | OK |
| /aviso-de-privacidad | "nelson.com.mx" | `/` | Sí | OK |
| /aviso-de-privacidad | "contacto@nelson.com.mx" (x2) | `mailto:contacto@nelson.com.mx` | N/A | OK |
| /aviso-de-privacidad | "nelson.com.mx/contacto" | `/contacto` | Sí | OK |
| /politica-de-cookies | "Aviso de Privacidad" | `/aviso-de-privacidad` | Sí | OK |
| /politica-de-cookies | "contacto@nelson.com.mx" | `mailto:contacto@nelson.com.mx` | N/A | OK |

---

## 34. Subpáginas LEED (7 páginas) — /constructora/leed/{sub}

Todas renderizan CTAs via `LeedPageLayout`. Los CTAs son idénticos en las 7 subpáginas:

| Componente | Texto del CTA | href actual | ¿Existe? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| LeedPageLayout | "Cotiza tu nave LEED" | `/contacto` | Sí | Sí | OK |
| LeedPageLayout | "← Ver todos los temas LEED" | `/constructora/leed` | Sí | Sí | OK |
| LeedPageLayout eyebrow | "Certificación LEED" | `/constructora/leed` | Sí | Sí | OK |
| CarruselLeed (7 cards) | Cada tema LEED | `/constructora/leed/{sub}` | Sí (todas) | Sí | OK |

---

---

# Componentes compartidos y catálogo

## 35. Header (compartido) — Navegación principal

| Sección | Texto | href actual | ¿Existe? | Acción |
|---|---|---|---|---|
| — | Logo Nelson | `/` | Sí | OK |
| — | Botón "Contacto" (desktop) | `/contacto` | Sí | OK |
| — | Botón "Contacto" (mobile) | `/contacto` | Sí | OK |
| Nosotros | "Acerca de Grupo Nelson" | `/nelson/trayectoria` | Sí | OK |
| Nosotros | "La Diferencia Nelson" | `/nelson/diferencia-nelson` | Sí | OK |
| Nosotros | "Liderazgo" | `/nelson/liderazgo` | Sí | OK |
| Nosotros | "Nuestra Historia" | `/nelson/nuestra-historia` | Sí | OK |
| Parques | "Parque Nelson II" | `/parques-industriales-mexicali/nelson-ii` | Sí | OK |
| Parques | "Parque Nelson I" | `/parques-industriales-mexicali/nelson-i` | Sí | OK |
| Parques | "Parque El Vigía I" | `/parques-industriales-mexicali/vigia-i` | Sí | OK |
| Parques | "Parque El Vigía II" | `/parques-industriales-mexicali/vigia-ii` | Sí | OK |
| Inventario | "Naves Disponibles" | `/inventario/naves-disponibles` | Sí | OK |
| Inventario | "Terrenos Disponibles" | `/inventario/terrenos` | Sí | OK |
| Inventario | "Todos los Parques" | `/parques-industriales-mexicali` | Sí | OK |
| Constructora | "Baumex Constructora" | `/constructora/baumex` | Sí | OK |
| Constructora | "Ingeniería y Diseño" | `/constructora/diseno-e-ingenieria` | Sí | OK |
| Constructora | "Construcción Build-to-Suit" | `/constructora/build-to-suit` | Sí | OK |
| Constructora | "Soluciones Llave en Mano" | `/constructora/llave-en-mano` | Sí | OK |
| Constructora | "Certificación LEED" | `/constructora/leed` | Sí | OK |
| Constructora | "Estándares Internacionales" | `/constructora/estandares-internacionales` | Sí | OK |
| Constructora | "Portafolio de Proyectos" | `/constructora/portafolio` | Sí | OK |
| Constructora | "Proyectos Especializados" | `/constructora/proyectos-especializados` | Sí | OK |
| Experiencia | "Excelencia Operativa" | `/experiencia/excelencia-operativa` | Sí | OK |
| Experiencia | "Casos de Éxito" | `/experiencia/casos-de-exito` | Sí | OK |
| Experiencia | "Normas, Certificaciones y Estándares" | `/experiencia/normas-certificaciones-estandares` | Sí | OK |
| Recursos | "Blog" | `/blog` | Sí | OK |
| Recursos | "Recursos" | `/recursos` | Sí | OK |
| Recursos | "Noticias" | `/noticias` | Sí | OK |

---

## 36. Footer (compartido)

| Componente | Texto del CTA | href actual | ¿Existe la página? | ¿Tiene sentido? | Acción |
|---|---|---|---|---|---|
| Logo | Logo enlace | `/` | Sí | OK | OK |
| Group "Product" | "Features" | `#` | **No** | No | Cambiar — texto y link sin personalizar |
| Group "Product" | "Solution" | `#` | **No** | No | Cambiar — texto y link sin personalizar |
| Group "Product" | "Partnerships" | `#` | **No** | No | Cambiar — texto y link sin personalizar |
| Group "Product" | "Mobile App" | `#` | **No** | No | Cambiar — texto y link sin personalizar |
| Group "Company" | "About" | `#` | **No** | No | Cambiar — texto y link sin personalizar |
| Group "Company" | "Licence" | `#` | **No** | No | Cambiar — texto y link sin personalizar |
| Group "Company" | "Privacy" | `#` | **No** | No | Cambiar — texto y link sin personalizar |
| Community | X/Twitter icon | `#` | **No** | No | Agregar URL real o quitar |
| Community | LinkedIn icon | `#` | **No** | No | Agregar URL real o quitar |
| Descripción | "Tailark is a platform..." | N/A (texto) | — | **En inglés / texto de Tailark** | Cambiar a descripción de Grupo Nelson |
| Copyright | "© 2026 Tailark, All rights reserved" | N/A (texto) | — | **Dice Tailark, no Grupo Nelson** | Cambiar a "© 2026 Grupo Nelson" |

---

## 37. Componentes brandpetram con CTAs hardcodeados problemáticos

### Links a rutas INEXISTENTES — carrusel.tsx (CarruselConveyors)

| Texto | href actual | ¿Existe? | Acción |
|---|---|---|---|
| "Parque El Vigía I" | `/parques-industriales-mexicali/el-vigia-i` | **No** — ruta real: `vigia-i` | Cambiar a `/parques-industriales-mexicali/vigia-i` |
| "Parque El Vigía II" | `/parques-industriales-mexicali/el-vigia-ii` | **No** — ruta real: `vigia-ii` | Cambiar a `/parques-industriales-mexicali/vigia-ii` |
| "Built to Suit" | `/servicios/built-to-suit` | **No** — no existe `/servicios/` | Cambiar a `/constructora/build-to-suit` |
| "Llave en Mano" | `/servicios/llave-en-mano` | **No** | Cambiar a `/constructora/llave-en-mano` |
| "Arrendamiento Industrial" | `/servicios/arrendamiento` | **No** | Decidir destino o eliminar |
| "Desarrollo de Terrenos" | `/servicios/desarrollo-terrenos` | **No** | Decidir destino o eliminar |
| "Construcción Propia" | `/servicios/construccion-propia` | **No** | Decidir destino o eliminar |
| "Industria Manufacturera" | `/industrias/manufactura` | **No** — no existe `/industrias/` | Decidir destino o eliminar |
| "Logística y Distribución" | `/industrias/logistica` | **No** | Decidir destino o eliminar |
| "Tecnología y Electrónica" | `/industrias/tecnologia` | **No** | Decidir destino o eliminar |
| "Industria Automotriz" | `/industrias/automotriz` | **No** | Decidir destino o eliminar |
| "Industria Médica" | `/industrias/medica` | **No** | Decidir destino o eliminar |
| "Alimentos y Bebidas" | `/industrias/alimentos-bebidas` | **No** | Decidir destino o eliminar |

### Links con lorem ipsum — grid-marcas-de-conveyors.tsx (LogosMarcas)

Todas las 9 cards de marcas apuntan a rutas `/lorem/...` que no existen.

### Componentes con textos en inglés sin localizar

| Componente | Textos en inglés |
|---|---|
| `feature-section-6-bp.tsx` | "Get access", "Learn more" |
| `feature-section-3-bp.tsx` | Todo el contenido placeholder |
| `feature-section-5-inverted-bp.tsx` | Todo el contenido placeholder |
| `split-with-image-bp.tsx` | "Deploy faster", "A better workflow", etc. |

### HeroMotionPlus — default href problemático

El prop `secondaryButtonHref` tiene default `/parques` que **no existe**. La ruta correcta es `/parques-industriales-mexicali`. En la página de normas-certificaciones se sobreescribe correctamente, pero si alguien usa el componente sin prop, el link está roto.

---

## Backlog de remediación

Cada fix tiene tipo de intervención según la guía de worktrees. Clasificación:

- **localizar**: el fix se hace dentro de `src/app/{sección}/`, sin afectar otros worktrees
- **parametrizar**: el componente se hace configurable via props (ya tiene versión con-props o se crea)
- **sistema/shared**: toca componente en `src/components/` o `src/components/brandpetram/` — requiere confirmación desde MAIN
- **pendiente**: requiere decisión del usuario antes de clasificar

**Regla de ownership:** Todo archivo en `src/components/brandpetram/` es sistema compartido (guía de worktrees, línea 1180). Ningún worktree de sección debe editarlo directamente — los fixes van por MAIN.

### P0 — Links rotos visibles al usuario (producción)

| # | Ubicación | Archivo(s) | Problema | Fix sugerido | Tipo | Owner |
|---|---|---|---|---|---|---|
| 1 | Footer (todas las páginas) | `src/components/footer.tsx` | 9 links con `#`, textos en inglés ("Tailark"), copyright dice "Tailark" | Reescribir footer completo con datos de Grupo Nelson | sistema/shared | MAIN |
| 2 | ScrollStorytelling (homepage) | `src/components/brandpetram/scroll-storytelling.tsx` | 8 botones secundarios → `#contacto` (anchor inexistente) | Cambiar todos a `/contacto` | sistema/shared | MAIN |
| 3 | Contacto + Contactanos | `src/app/contacto/contact-section.tsx`, `src/app/contactanos/contact-section.tsx` | Link "Política de Privacidad" → `/privacidad` (no existe; real: `/aviso-de-privacidad`) | Cambiar href a `/aviso-de-privacidad` | localizar (×2 archivos) | sección contacto |
| 4 | Casos de Éxito | `src/app/experiencia/casos-de-exito/page.tsx` | 2 links → `/experiencia` (no tiene page.tsx) | Cambiar a `/experiencia/excelencia-operativa` o crear `/experiencia/page.tsx` | pendiente | sección experiencia |
| 5 | Baumex | `src/components/brandpetram/mu.tsx`, `nu.tsx`, `xi.tsx`, `phi.tsx`, `chi.tsx`, `psi.tsx` | 10 CTAs apuntan a `#` | Asignar destinos reales (`/contacto`, `/constructora/build-to-suit`, etc.) | sistema/shared | MAIN |

### P1 — Botones sin funcionalidad (parecen clickeables pero no navegan)

| # | Ubicación | Archivo(s) | Problema | Fix sugerido | Tipo | Owner |
|---|---|---|---|---|---|---|
| 6 | Build-to-suit hero | `src/components/tarjeta-hero-original-beta.tsx` | 2 `<Button>` sin Link wrapper | Envolver en `<Link>` a destinos apropiados | sistema/shared | MAIN |
| 7 | Llave-en-mano | `src/components/brandpetram/eta.tsx`, `iota.tsx`, `lamda.tsx` | 6 `<button>` sin href | Convertir a `<Link>` o agregar onClick → router.push | sistema/shared | MAIN |
| 8 | Diseño e ingeniería | `src/components/brandpetram/con-props/feature-section-6-bp-con-props.tsx` | 2 `<Button>` sin Link | Envolver en `<Link>` | sistema/shared | MAIN |

### P2 — Páginas sin CTA de conversión (sin botón de contacto en body)

| # | Página | Archivo | Observación | Fix sugerido | Tipo | Owner |
|---|---|---|---|---|---|---|
| 9 | /parques-industriales-mexicali/nelson-i | `src/app/parques-industriales-mexicali/nelson-i/page.tsx` | Sin botón de contacto | Agregar CTA de contacto al final | localizar | sección parques |
| 10 | /parques-industriales-mexicali/nelson-ii | `src/app/parques-industriales-mexicali/nelson-ii/page.tsx` | Solo link a Google Maps | Agregar CTA de contacto | localizar | sección parques |
| 11 | /parques-industriales-mexicali/vigia-i | `src/app/parques-industriales-mexicali/vigia-i/page.tsx` | Sin CTAs | Agregar CTA de contacto | localizar | sección parques |
| 12 | /parques-industriales-mexicali/vigia-ii | `src/app/parques-industriales-mexicali/vigia-ii/page.tsx` | Sin CTAs | Agregar CTA de contacto | localizar | sección parques |
| 13 | /constructora/estandares-internacionales | `src/app/constructora/estandares-internacionales/page.tsx` | Sin CTAs | Agregar CTA de contacto | localizar | sección constructora |
| 14 | /constructora/portafolio | `src/app/constructora/portafolio/page.tsx` | Sin CTAs | Agregar CTA de contacto | localizar | sección constructora |
| 15 | /nelson/nuestra-historia | `src/app/nelson/nuestra-historia/page.tsx` | Sin CTA de contacto | Agregar CTA de cierre | localizar | sección nosotros |
| 16 | /recursos | `src/app/recursos/page.tsx` | Sin CTA interno | Agregar CTA a `/contacto` | localizar | sección recursos |
| 17 | /blog | `src/app/blog/page.tsx` | Sin CTA de contacto | pendiente — decidir si blog necesita CTA | pendiente | MAIN |
| 18 | /blog/[slug] | `src/app/blog/[slug]/page.tsx` | Sin CTA de contacto | pendiente | pendiente | MAIN |
| 19 | /noticias | `src/app/noticias/page.tsx` | Sin CTA de contacto | pendiente | pendiente | MAIN |
| 20 | /noticias/[slug] | `src/app/noticias/[slug]/page.tsx` | Sin CTA de contacto | pendiente | pendiente | MAIN |
| 21 | /experiencia/normas-certificaciones-estandares | `src/app/experiencia/normas-certificaciones-estandares/page.tsx` | Sección CTA final tiene texto pero sin botón | Agregar botón | localizar | sección experiencia |

### P3 — Componentes con links a rutas inexistentes (no necesariamente en producción)

| # | Componente | Archivo | Problema | Fix sugerido | Tipo | Owner |
|---|---|---|---|---|---|---|
| 22 | CarruselConveyors | `src/components/brandpetram/carrusel.tsx` | 2 links Vigía con slug incorrecto (`el-vigia-i` vs `vigia-i`) | Corregir slugs | localizar | MAIN (componente compartido) |
| 23 | CarruselConveyors | `src/components/brandpetram/carrusel.tsx` | 5 links → `/servicios/*` (no existe) | Cambiar a `/constructora/*` o eliminar | pendiente | MAIN |
| 24 | CarruselConveyors | `src/components/brandpetram/carrusel.tsx` | 6 links → `/industrias/*` (no existe) | Eliminar o crear páginas | pendiente | MAIN |
| 25 | LogosMarcas | `src/components/brandpetram/grid-marcas-de-conveyors.tsx` | 9 links → `/lorem/*` | Reemplazar con rutas reales o eliminar | pendiente | MAIN |
| 26 | HeroMotionPlus | `src/components/brandpetram/hero-motionplus.tsx` | Default `secondaryButtonHref` = `/parques` (no existe) | Cambiar default a `/parques-industriales-mexicali` | parametrizar | MAIN |

### P4 — Problemas menores

| # | Ubicación | Archivo | Problema | Fix sugerido | Tipo | Owner |
|---|---|---|---|---|---|---|
| 27 | /nelson/liderazgo | `src/components/brandpetram/mosaico-liderazgo.tsx` | 4 cards enlazan a `/nelson/liderazgo` (auto-referencia) | Cambiar href a destinos distintos o quitar link | sistema/shared | MAIN |
| 28 | /nelson/diferencia-nelson | `src/app/nelson/diferencia-nelson/page.tsx` | CTAs duplicados (mismos 2 botones ×2) | Eliminar duplicado o verificar que es intencional | localizar | sección nosotros |
| 29 | Componentes BP en inglés | `feature-section-6-bp.tsx`, `feature-section-3-bp.tsx`, `feature-section-5-inverted-bp.tsx`, `split-with-image-bp.tsx` | Textos placeholder en inglés ("Get access", "Deploy faster", etc.) | Localizar si se usan; ignorar si son plantilla sin uso | pendiente | MAIN |
| 30 | /en (página inglesa) | `src/app/en/page.tsx` | CTAs en español ("Conocer mas", "Contactar") en página inglesa | Localizar textos o pasar props en inglés | localizar | sección /en |

---

## Métricas de seguimiento

Para verificar progreso, contar filas del backlog (sección "Backlog de remediación"). Cada fila = 1 ítem accionable.

| Métrica | Valor actual | Derivación exacta |
|---|---|---|
| P0 — Links rotos en producción | 5 ítems (31 hrefs individuales) | Filas #1-#5 del backlog. Hrefs: Footer 9 + ScrollStorytelling 8 + Contacto 1 + Contactanos 1 + Casos 2 + Baumex 10 = 31 |
| P1 — Botones sin funcionalidad | 3 ítems (10 botones individuales) | Filas #6-#8. Botones: 2 + 6 + 2 = 10 |
| P2 — Páginas sin CTA conversión | 13 ítems | Filas #9-#21 |
| P3 — Componentes con links rotos | 5 ítems (23 links individuales) | Filas #22-#26. Links: 2 + 5 + 6 + 9 + 1 = 23 |
| P4 — Problemas menores | 4 ítems | Filas #27-#30 |
| **Total ítems backlog** | **30** | Suma de filas #1-#30 |
