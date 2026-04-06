# Plan de Corrección — Sitio Grupo Nelson

Fecha: 2026-04-03
Fuente: Auditoría arquitectónica v0.1
Meta: lunes 7 de abril
Restricción: no reescritura masiva — lotes pequeños, cambios quirúrgicos

---

## 1. Hallazgos organizados por carril

### Carril A: Roto / Incompleto (higiene — hacer primero)

| # | Hallazgo | Página | Esfuerzo |
|---|----------|--------|----------|
| A1 | Nuestra Historia completamente en lorem ipsum | /nelson/nuestra-historia | Medio — hay que escribir copy real |
| A2 | Banner H1 en lorem ipsum en diferencia-nelson | /nelson/diferencia-nelson | Bajo — una frase |
| A3 | certificacion-leed y /leed son contenido 100% idéntico | /constructora/certificacion-leed + /constructora/leed | Medio — diferenciar roles |
| A4 | Imágenes placeholder (placeholder.svg) en llave-en-mano | /constructora/llave-en-mano | Bajo — reemplazar por fotos reales |
| A5 | Inconsistencia 33 vs 30 corporaciones | /nelson/trayectoria vs resto | Bajo — unificar número |
| A6 | Errata "Dinis" en CTA de proyectos-especializados | /constructora/proyectos-especializados | Trivial |
| A7 | H2 "Clientes de Clase Mundial confían" flotando sin contenido debajo | /constructora/build-to-suit | Bajo — eliminar o agregar logos |
| A8 | Sin CTA al final de build-to-suit | /constructora/build-to-suit | Bajo |

### Carril B: Arquitectura / Territorio (rediseño conceptual — segundo)

| # | Hallazgo | Página(s) | Esfuerzo |
|---|----------|-----------|----------|
| B1 | Liderazgo absorbe territorios de diferencia, trayectoria e historia | /nelson/liderazgo | Alto — redefinir qué se queda y qué sale |
| B2 | Diferencia-nelson y liderazgo comparten bloques enteros sin reframing | Ambas | Alto — reasignar facts |
| B3 | 52,200 m² Gulfstream en 7+ páginas con mismo significado | Cross-site | Medio — definir ángulo por página |
| B4 | Diseño-e-ingeniería: mismos 5 datos 4 veces intra-página | /constructora/diseno-e-ingenieria | Medio — eliminar duplicación interna |
| B5 | Diseño-e-ingeniería invade seguridad y estándares | /constructora/diseno-e-ingenieria | Medio — mover secciones |
| B6 | Llave-en-mano: falta profundidad (specs, disponibilidad, tiempos) | /constructora/llave-en-mano | Medio |
| B7 | Baumex no tiene argumento propio claro de "por qué in-house" | /constructora/baumex | Medio |
| B8 | Estándares-internacionales sin un solo ejemplo concreto | /constructora/estandares-internacionales | Medio |

### Carril C: Oportunidad Editorial (mayor upside — tercero)

| # | Hallazgo | Página(s) | Esfuerzo |
|---|----------|-----------|----------|
| C1 | Proyectos especializados: 4 historias en 2 líneas, material crudo no usado | /constructora/proyectos-especializados | Alto — expandir narrativas |
| C2 | 80% repeat business ausente de diferencia-nelson | /nelson/diferencia-nelson | Bajo — agregar dato |
| C3 | Interiores Aéreos 110x ausente de diferencia-nelson | /nelson/diferencia-nelson | Bajo — agregar caso |
| C4 | Falta capa financiera en entrada comercial LEED | /constructora/certificacion-leed | Medio — agregar ROI |
| C5 | Asignación directa Gulfstream no se usa como argumento | /constructora/baumex, /constructora/build-to-suit | Bajo — agregar dato |
| C6 | "Proyecto ejecutivo" como producto nunca explicado | /constructora/diseno-e-ingenieria | Medio |
| C7 | Testimonio anónimo en baumex contraproducente | /constructora/baumex | Bajo — eliminar o conseguir nombre |

---

## 2. Orden de ejecución por lotes

### Lote 0: Triviales (< 5 min cada uno)
- A6: Corregir errata "Dinis" → "Dinos"
- A5: Unificar corporaciones a 30 (o al número verificado correcto)
- A8: Agregar CTA al final de build-to-suit
- A7: Eliminar H2 flotante o agregar logos debajo

### Lote 1: Higiene visual (< 30 min)
- A2: Escribir banner H1 de diferencia-nelson (una frase que capture los 3 diferenciadores)
- A4: Reemplazar placeholder.svg en llave-en-mano con fotos de parques

### Lote 2: Diferencia-nelson — agregar lo que falta (1-2 horas)
- C2: Agregar 80% repeat business como dato
- C3: Agregar caso Interiores Aéreos 110x
- C5: Agregar asignación directa Gulfstream como argumento
- Subir facts de descripción a consecuencia: "estructura plana → tu contrato se aprueba en días, no en meses"

### Lote 3: Proyectos especializados — expandir narrativas (2-3 horas)
- C1: Expandir los 4 casos con narrativas del material crudo
- A6 ya estará corregido del Lote 0
- Este es el lote de mayor impacto diferenciador del sitio

### Lote 4: Diseño-e-ingeniería — limpiar repetición (1-2 horas)
- B4: Eliminar repetición intra-página (5 datos × 4 apariciones → cada dato 1 vez)
- B5: Sacar sección de seguridad (HSE) y sección de certificaciones — dejar solo ingeniería

### Lote 5: LEED hub/certificacion — diferenciar (1-2 horas)
- A3: Dar roles distintos a las dos URLs
  - certificacion-leed → vende la decisión (ROI, requisitos corporativos, costo vs beneficio)
  - /leed → hub de navegación (resumen breve de cada pilar + links)
- C4: Agregar capa financiera a certificacion-leed

### Lote 6: Nuestra Historia — escribir contenido (2-3 horas)
- A1: Escribir copy real para la página
- Usar timeline del desempaquetado: 1965 → El Vigía → Nelson I → Baumex → Nelson II → Nelson III
- Enfoque: rol de pionero + arraigo regional + continuidad

### Lote 7 (si hay tiempo): Liderazgo — redefinir territorio
- B1: Definir qué se queda en liderazgo y qué sale
- B2: Mover facts de social proof a trayectoria
- Reframear casos de Gulfstream/Honeywell/Interiores Aéreos como experiencia de relación, no como track record

---

## 3. Mapa de facts repetidos

### Facts principales con asignación de territorio

| Fact | Qué demuestra | Página principal | Páginas secundarias (con ángulo diferente) | Eliminar de |
|------|---------------|-----------------|------------------------------------------|-------------|
| **1965, primera maquiladora de Mexicali** | Origen, pionerismo, arraigo | /nelson/nuestra-historia | diferencia-nelson (como diferenciador #1, mención breve) | liderazgo (no es sobre liderazgo), trayectoria (solo año, no narrativa) |
| **60+ años de trayectoria** | Permanencia, solidez | /nelson/trayectoria (stat visual) | diferencia-nelson (mención en contexto de los 3 diferenciadores) | liderazgo (ya está en trayectoria) |
| **30 corporaciones internacionales** | Validación por volumen | /nelson/trayectoria (grid de logos) | diferencia-nelson (mención breve como prueba) | liderazgo (la lista por sector es redundante con el grid de logos), baumex (referencia suficiente) |
| **4M ft² desarrollados** | Escala acumulada | /nelson/trayectoria (stat visual) | diferencia-nelson (proof bar) | liderazgo (está en trayectoria) |
| **80% clientes recurrentes** | Confianza demostrada | /nelson/diferencia-nelson (diferenciador central) | liderazgo (como apertura: "la confianza se mide en renovaciones"), llave-en-mano (contratos largos) | — |
| **4 nombres de la familia + roles** | Ownership directo | /nelson/liderazgo (contenido central) | diferencia-nelson (mención de "hablas con los dueños" sin listar los 4 nombres) | — |
| **Gulfstream 35 años, 5 naves, asignación directa** | Confianza extrema, eliminación de proceso | /nelson/liderazgo (como experiencia de relación) | build-to-suit (como cierre: "la confianza de 35 años elimina la licitación"), diferencia-nelson (mención breve) | diseno-e-ingenieria, portafolio (ya está en la tabla) |
| **Honeywell 30 años, ISN Recomendado, túnel de viento** | Relación técnica de largo plazo | /nelson/liderazgo (como experiencia de relación) | estandares-internacionales (ISN como filtro de acceso), proyectos-especializados (túnel como caso) | diseno-e-ingenieria (el túnel solo va en proyectos-especializados) |
| **Interiores Aéreos 5K→550K ft² (110x)** | Escalabilidad con el mismo proveedor | /nelson/liderazgo (caso de relación) | diferencia-nelson (como prueba de escalabilidad), llave-en-mano (empezó en nave existente) | — |
| **Gulfstream 52,200 m² + LEED Gold** | Escala + capacidad técnica | /constructora/proyectos-especializados (como caso: terremoto → BRB) | build-to-suit (como personalización extrema), portafolio (dato en tabla) | diferencia-nelson (ya tiene demasiado), liderazgo (ya tiene demasiado), diseno-e-ingenieria (4 veces intra-página → 0), baumex (referencia breve suficiente) |
| **Puente 95m Skyworks** | Ingeniería sin precedente | /constructora/proyectos-especializados (narrativa completa) | diseno-e-ingenieria (mención como ejemplo de capacidad, NO datos completos) | baumex (referencia breve), build-to-suit (no es BTS, es proyecto especial) |
| **Túnel de viento 3,000 HP Honeywell** | Colaboración técnica de alto nivel | /constructora/proyectos-especializados (narrativa completa) | diseno-e-ingenieria (mención como ejemplo), liderazgo (ángulo de relación con Honeywell) | baumex (referencia breve) |
| **Pilas 18m en suelo colapsable** | Expertise geotécnico | /constructora/diseno-e-ingenieria (capacidad de resolución) | proyectos-especializados (en contexto del puente Skyworks) | baumex (no es el territorio), build-to-suit (no es el territorio) |
| **BRB antisísmico zona sísmica 4** | Primera implementación en Mexicali | /constructora/proyectos-especializados (en contexto de Gulfstream + terremoto) | diseno-e-ingenieria (como capacidad técnica, 1 mención) | baumex (referencia breve), build-to-suit (20 features → reducir) |
| **1,092,745 HHT, 404 días, cero fatales** | Cultura de seguridad | /constructora/baumex (sección de seguridad) | — | diseno-e-ingenieria (no es ingeniería, es seguridad) |
| **FM Global, NFPA, LEED, ISN, IBC, NOM** | Capacidad de cumplir estándares | /constructora/estandares-internacionales (contenido central) | baumex (mención como credencial), certificacion-leed (LEED específico) | diseno-e-ingenieria (tiene su propia sección de certificaciones → eliminar) |
| **28 años, 75+ proyectos** | Track record de Baumex | /constructora/baumex (hero) | portafolio (hero) | Todas las demás (es muleta) — usar solo donde es contenido central |
| **Nelson II: subestación + 360K galones + 60% ahorro** | Infraestructura validada | /constructora/llave-en-mano (beneficio de infraestructura existente) | diferencia-nelson (como diferenciador de infraestructura) | liderazgo (no es sobre infraestructura) |
| **Contratos 10-15 años** | Estabilidad de relación | /nelson/liderazgo (como prueba de permanencia) | llave-en-mano (como dato de compromiso) | diferencia-nelson (ya tiene demasiado) |
| **42 manejadoras / 3,200 ton A/C / 90% condensación** | Ingeniería HVAC en Gulfstream | /constructora/leed/clima-extremo (dato central) | energia-atmosfera (mención como eficiencia) | certificacion-leed/hub (resumen breve), calidad-ambiental, sitios-sostenibles, sistemas-operativos (no necesitan repetirlo) |
| **10 MW solares, 50,000 m² paneles** | Capacidad fotovoltaica | /constructora/leed/energia-atmosfera (dato central) | certificacion-leed (mención en resumen) | Las demás subpáginas LEED que lo repiten |

---

## 4. Las 5 páginas a tocar antes del lunes

### Página 1: /nelson/diferencia-nelson

**Territorio:** Los 3 diferenciadores verificables de Grupo Nelson: trayectoria (60+ años, pioneros), ownership directo (familia fundadora operando), constructora in-house (Baumex). Cada uno reframed como beneficio para el comprador.

**Tesis principal:** "Grupo Nelson combina tres cosas que ningún competidor en Mexicali puede replicar simultáneamente — y eso se traduce en velocidad, certeza y confianza para tu proyecto."

**Facts que deben quedarse:**
- 1965, primera maquiladora (como diferenciador #1)
- Ownership familiar con roles (como diferenciador #2 — sin listar los 4 nombres, eso va en liderazgo)
- Baumex in-house 28 años (como diferenciador #3)
- Nelson II infraestructura (subestación, 360K galones, certificaciones)
- 4 Fortune 500

**Facts que deben salir:**
- Gulfstream 52,200 m² + LEED Gold + BRB + 10 MW (bloque detallado) → mover a liderazgo o dejar solo como mención breve
- Lista completa de certificaciones con detalle → solo mención, detalle en estándares
- 1,092,745 HHT → mover a baumex

**Nueva profundidad que debe agregarse:**
- 80% repeat business como dato de diferenciación
- Interiores Aéreos 110x como prueba de escalabilidad
- Honeywell 30 años como segundo caso de permanencia
- Traducción de cada diferenciador a consecuencia: "Ownership → una llamada, no tres niveles de aprobación. Constructora in-house → un contrato, no cinco proveedores. 60 años → no vamos a desaparecer a la mitad de tu contrato de 15 años."
- Completar el banner H1 (hoy en lorem ipsum)

---

### Página 2: /constructora/proyectos-especializados

**Territorio:** Casos que demuestran capacidad de resolver problemas sin solución estándar. Los 4 proyectos son EJEMPLOS de la capacidad, no la capacidad misma.

**Tesis principal:** "Si tu proyecto necesita algo que no existe en ningún catálogo, tenemos el track record de haberlo resuelto antes — con historias que lo prueban."

**Facts que deben quedarse:**
- Los 4 proyectos (Skyworks, Gulfstream, Honeywell, Deacero)
- 28 años, 75+ proyectos (como contexto, no como argumento central)

**Facts que deben salir:**
- Ninguno — esta página necesita MÁS, no menos

**Nueva profundidad que debe agregarse:**
- **Puente Skyworks:** Agregar función real (microchips en carritos de golf con temperatura controlada), colado en un solo día sin juntas, 2 meses de coordinación con municipio, montaje en 2 domingos, permisos con CNA + estado + municipio.
- **Gulfstream:** Agregar terremoto de 7.2 en 2010 como contexto del BRB (2 semanas de paro → propuesta de Baumex → primera implementación en Mexicali). 13,500 m² de oficinas. Cubierta TPO "el Rolls-Royce de las cubiertas".
- **Túnel de viento:** Agregar puertas antisonido ~$30K/par, voltaje 4.16 KV, 8 meses de construcción, proyecto colaborativo Honeywell + Baumex.
- **Deacero:** Agregar 5 hectáreas de patios, grúas industriales, entrega milimétricamente calzada con equipos.
- Corregir errata "Dinis" → "Dinos"

---

### Página 3: /constructora/diseno-e-ingenieria

**Territorio:** Capacidad de resolver desafíos técnicos no estándar — las 6 disciplinas trabajando en paralelo como SISTEMA, no como lista.

**Tesis principal:** "Cuando tu operación exige ingeniería que sale de lo estándar, nuestras 6 disciplinas trabajan en paralelo para resolver el problema completo — no para pasarlo de departamento en departamento."

**Facts que deben quedarse:**
- 6 disciplinas in-house (civil, estructural, eléctrica, mecánica, arquitectura, costos)
- Pilas 18m en suelo colapsable (capacidad geotécnica)
- BRB antisísmico (capacidad estructural — 1 mención, no 4)
- 20 MW capacidad eléctrica (capacidad eléctrica)
- 90% recuperación condensación (capacidad mecánica)
- Proyecto ejecutivo 2-4 meses (dato operativo)

**Facts que deben salir:**
- Sección completa de seguridad (HSE, HHT, 404 días) → pertenece a baumex
- Sección completa de certificaciones (FM Global, LEED, ISN) → pertenece a estándares-internacionales
- Puente 95m con datos completos → mención como ejemplo, narrativa en proyectos-especializados
- Túnel de viento con datos completos → mención como ejemplo, narrativa en proyectos-especializados
- Segunda, tercera y cuarta repetición de cada dato intra-página

**Nueva profundidad que debe agregarse:**
- Qué ES un proyecto ejecutivo y por qué el comprador debería querer uno
- Cómo las 6 disciplinas trabajan en paralelo (vs. firma de ingeniería → firma de construcción → firma de instalaciones)
- Rango de capacidad eléctrica: "desde 500 KVA para operaciones pequeñas hasta 20 MW para manufactura de alta demanda"

---

### Página 4: /nelson/trayectoria

**Territorio:** Prueba puramente visual y cuantitativa de permanencia. Los logos y números hablan solos.

**Tesis principal:** No necesita tesis narrativa — los números y logos son la tesis.

**Facts que deben quedarse:**
- Grid de logos (30 corporaciones)
- 8 stats (60+ años, 4M ft², 30 corporaciones, 5 parques, 3 generaciones, 80% renovación, 75+ proyectos, 4 Fortune 500)
- Video institucional

**Facts que deben salir:**
- La narrativa editorial de 1965 (ya está en diferencia-nelson y será la central de nuestra-historia)

**Nueva profundidad que debe agregarse:**
- Gulfstream 35 años y Honeywell 30 años como DATOS DE DURACIÓN en el grid o stats (los datos más potentes de permanencia no están aquí)
- Interiores Aéreos 110x como stat
- Unificar "33 corporaciones" en el título a "30" (o al número verificado)
- 7 sectores industriales como dato de diversidad

---

### Página 5: /constructora/certificacion-leed (separar de /leed hub)

**Territorio para certificacion-leed:** Vender la DECISIÓN de certificar LEED — argumento de negocio, no tutorial técnico.

**Tesis principal:** "LEED no es un gasto — es una inversión que reduce costos operativos, cumple requisitos corporativos y valoriza tu activo. Y en Mexicali, donde el clima es el examen más difícil, necesitas un equipo que lleve 28 años diseñando para 48°C."

**Facts que deben quedarse:**
- Gulfstream 52,200 m² LEED Gold (como caso de referencia)
- 28 años en la misma zona climática (moat de clima-extremo)
- 10 MW solares, 3,200 ton A/C (datos de escala)

**Facts que deben salir:**
- Detalle técnico de cada pilar LEED (eso va en las subpáginas)
- R-19/R-30, SRI >78, ASHRAE (detalle para subpáginas)

**Nueva profundidad que debe agregarse:**
- ROI de certificación LEED: renta premium, tasa de vacancia, valorización
- Requisitos corporativos: qué empresas Fortune 500 exigen LEED para instalarse
- Costo comparativo: qué % del costo total representa certificar
- Nearshoring + ESG: por qué LEED es cada vez más requisito, no opcional

**Territorio para /leed hub:** Navegación organizada a los 7 pilares. Resumen de una línea por pilar + link. No duplicar copy de certificacion-leed.

---

## 5. Orden de ejecución recomendado para el fin de semana

| Prioridad | Lote | Páginas | Tiempo estimado | Impacto |
|-----------|------|---------|----------------|---------|
| 1 | Lote 0 | Triviales (errata, inconsistencia, H2 flotante, CTA faltante) | 15 min | Higiene |
| 2 | Lote 1 | Banner H1 diferencia + placeholders llave-en-mano | 30 min | Higiene visual |
| 3 | Lote 2 | Diferencia-nelson: agregar 80%, Interiores Aéreos, reframing | 1-2 h | Alto — página más importante |
| 4 | Lote 3 | Proyectos especializados: expandir 4 narrativas | 2-3 h | Máximo upside diferenciador |
| 5 | Lote 4 | Diseño-e-ingeniería: limpiar repetición intra-página | 1-2 h | Medio — mejora experiencia |
| 6 | Lote 5 | LEED: separar certificacion/hub + capa financiera | 1-2 h | Medio-alto |
| 7 | Lote 6 | Nuestra Historia: escribir contenido | 2-3 h | Medio |

**Total estimado:** 8-13 horas de trabajo.

**Si solo hay tiempo para 3 lotes antes del lunes:** Lotes 0 + 1 + 2 (diferencia-nelson) + Lote 3 (proyectos especializados). Eso cubre la higiene y los dos cambios de mayor impacto comercial.

---

*Plan de corrección v1 — 2026-04-03. No se reescribieron páginas. Solo plan y mapa de facts.*
