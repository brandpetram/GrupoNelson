# Contexto: Información de naves y terrenos enviada por Susana Osuna

## Qué es esto

Documento que registra el proceso de recolección de datos de naves industriales y terrenos disponibles de Grupo Nelson, coordinado entre Brandpetram (Luis Múzquiz) y Susana Osuna (Grupo Nelson). El objetivo es tener la información completa y correcta para alimentar el sitio web.

**Parques industriales operando en Mexicali:** El Vigía I, El Vigía II, Parque Nelson I (PINSA), Parque Nelson II (PINSA II). Además tiene propiedades en Tecate, SLRC, Hermosillo, Tijuana, SLP y Ensenada.

---

## Línea de tiempo

### 6 de marzo de 2026 — Primer intercambio de correo

**Luis → Susana** pregunta:
- ¿Cuántas naves hay en Nelson II? ¿Son solo 3?
- ¿Cuántos m² de nave construida disponibles para renta?
- ¿Cuántos m² de terreno disponibles para desarrollo futuro?
- ¿La nave de Gulfstream es una de esas 3 o es una cuarta?
- ¿Las naves están divididas físicamente o son multi-tenant?

**Susana responde** con datos clave:
- Nelson II tiene **6 empresas, cada una en su propia nave** (no comparten)
- Los PDFs originales están desactualizados porque las naves se adecuaron al cliente
- **Gulfstream** tiene naves en 3 ubicaciones: Tecnológico (200K + 281K sqft), Nelson II (60,842 sqft), y Desarrollo Colorado (550K sqft) = **1,092,234 sqft total**
- Las naves subdivididas tienen **entrada propia** (no son multi-tenant)
- Metros disponibles para renta y terrenos → pendiente de verificar con Humberto
- Naves de inventario necesitan remodelación antes de estar disponibles
- Terreno disponible en Nelson II (poquito, reservado por contrato), terreno en Parque Nelson (actualmente es estacionamiento), terreno en Valle de Puebla
- **Nomenclatura nueva** acordada con Humberto: prefijo por parque (V1, V2, N2, etc.)

**Susana envía** el primer archivo: `CLASIFICIACIOND E NAVES INDUSTRIALES GN 2026.numbers`
- Contiene: parque, nomenclatura de nave, área en sqft, si es subdivisible, estatus (ocupada/disponible/en remodelación)
- Es el primer inventario completo de las 57 naves de Grupo Nelson

### 11 de marzo de 2026 — Meeting con Juan Carlos, Humberto, Susana, Erik, Luis Montfort y Luis Múzquiz

Se abre en pantalla el archivo que envió Susana. Puntos relevantes discutidos:

1. **Naves disponibles vs. en remodelación**: Humberto aclara que hay naves desocupadas que NO se pueden promover aún (problemas legales, necesitan remodelación). No ponerlas como "disponibles" porque brokers las van a querer visitar.

2. **Enfoque solo en naves disponibles**: Humberto dice que solo se publiquen specs de naves realmente disponibles. Las ocupadas se documentarán cuando se desocupen.

3. **Tabla del sitio web**: Se acuerda usar la info de Susana como base, mantener clear height y docks, quitar columna de ciudad.

4. **CMS editable**: Humberto y Susana piden poder editar datos de naves directamente desde un administrador de contenido, sin depender de Brandpetram para cada cambio.

5. **Subdivisibles**: Susana explica que algunas naves (como V1_2-4) son una sola nave que se puede partir en 2 o 3, y es importante marcarlo.

6. **Nelson III**: Solo es un terreno por ahora. Se acuerda ponerlo como "en desarrollo" en el sitio.

### 17 de marzo de 2026 — Segundo correo de Luis

**Luis → Susana** pregunta:
- ¿Ya tienes el Excel con clear height y docks?
- ¿Tienes la info de terrenos disponibles? Especialmente Nelson 3: fotos, dirección, superficie y servicios.

**Susana responde:**
- Está trabajando en ello, no tienen todos los docks de las naves
- El listado de naves con área rentada ya lo tiene completo
- Terrenos disponibles: ya los solicitó, se los dan ese día
- Envía en cuanto tenga todo

### 18 de marzo de 2026 — Segundo archivo de Susana

**Susana envía:** `CLASIFICIACIOND E NAVES INDUSTRIALES GN 2026 ACTUALIZADO.numbers`

Correo dice:
- Es la versión más actualizada que tiene
- **Falta info de:** Tijuana, Hermosillo, SLP, SLRC
- **Faltan las rampas** de varias naves
- Tiene relación de terrenos pero quiere verla con Humberto y Rodolfo para definir nomenclatura

**Cambios vs. versión del 6 de marzo:**
- Columnas nuevas: área en m², altura libre (pies y metros), rampas con notas, ciudad
- V1_26-27 y V1_29-33 fusionadas → ahora es V1_26-33 (84,550 sqft)
- V2_02 Baxter: área corregida a 54,485.84 sqft
- Rampas con descripciones detalladas (ej: "15 a nivel de piso y 1 ascendente")
- 12 naves con clear height, 42 con dato de rampas

### 24 de marzo de 2026 — Tercer archivo de Susana: Terrenos disponibles

**Susana envía:** `Inmuebles y Propiedades Desocupadas (GNL-Otros) 17.03.2026.xlsx`

Correo dice:
- "Estos son los terrenos que tenemos disponibles separados por empresas"
- Envía deslindes y ubicaciones de los que están dentro de Parque Industrial Nelson y Nelson II
- El archivo interno tiene fecha 17 de marzo pero fue enviado el 24

**Contenido:** Inventario de 27 terrenos/inmuebles desocupados organizados por entidad legal:

| Empresa | Terreno (m²) | Edificio (sqft) | Ubicación |
|---------|-------------|-----------------|-----------|
| Naves Industriales de BC | 101,001 | — | Mexicali |
| Inmobiliaria Nelson Luken | 5,559 | — | Mexicali |
| Constructora Bademi | 44,813 | — | Mexicali |
| Propiedades Nelson de Mexicali | 681,568 | 52,646 | Mexicali + SLP |
| Amboise | 120,000 | — | Cerro Prieto |
| Arisonora Industrial Park | 350,053 | 48,384 | SLRC, Sonora |
| MED BCN | 10,000 | — | Ensenada |
| Parque Industrial Nelson (lotes) | 17,169 | — | Mexicali |
| Parque Industrial Nelson II (lotes) | 72,264 | — | Mexicali |

**Total: ~1.4 millones de m² de terreno disponible**

**Conexiones con inventario de naves:**
- PN SLP 004 (52,646 sqft) = PN_03 del inventario de naves (DISPONIBLE SLP)
- AIP SLR C PA (48,384 sqft) = AS_01 del inventario de naves (NAVE INVENTARIO 45K)

**Observación importante:** Los lotes dentro de Parque Nelson y Nelson II tienen servicios completos (energía, drenaje, pluvial, telecom). Los demás dicen "Lote Baldío" — esto probablemente es clasificación catastral, no necesariamente significa que no tengan servicios (especialmente los que están cerca de parques operando). Pendiente confirmar con Susana.

**Uso probable:** Sección de "Terrenos Disponibles" / "Land Available" del sitio web. Pero hay que definir con Humberto/Rodolfo cuáles de estos 27 terrenos se publican y cuáles no.

### 25 de marzo de 2026 — Comentarios de Susana en Vercel (revisados ~9 de marzo según timestamps "16d"/"19d")

**En /parques-industriales-mexicali/nelson-ii:**
- Naves disponibles: **0** (no "Consultar")
- M² disponibles en nave: **0**
- Terreno disponible: **72,264.37 m²**

**En /parques-industriales-mexicali/nelson-i:**
- Naves disponibles: **0**
- M² disponibles: **0**
- Terreno disponible: **17,169.3 m²**

**En /parques-industriales-mexicali/vigia-ii:**
- Año de operación: **1997** (estaba incorrecto o faltaba)
- Naves disponibles: **1** (no "Consultar")
- M² disponibles en nave: **6,074.79 m²** (nota: en naves usan más sqft, en terrenos m²)
- Terreno disponible: **0** — "No hay terreno disponible, solo hay dos naves y ya está lleno el parque industrial"
- Disponibilidad inmediata: "Solo debemos avisar con un mes de anticipación que vamos a necesitar la nave"
- Nave 1 debe llamarse **V2_01** (nomenclatura nemotécnica: V2 = Vigía II, 01 = nave 01)

**En /inventario/naves-disponibles:**
- El Vigía II · West Building: debe decir **Ocupada** (no "Disponible")
- Estandarizar alturas: "Viene la altura máxima en metros y la altura libre en pies. Y vienen en español pero dice Clear height." → Hay que unificar unidades y decidir idioma del header

**Observaciones:**
- Los terrenos disponibles de Nelson II (72,264.37 m²) coinciden exactamente con el subtotal de los 3 lotes del Excel de terrenos: N2 UC-1.1A (19,635) + N2 UC-2.1B (43,337) + N2 UC-2.1C (9,293) = 72,264.37 m²
- El terreno de Nelson I (17,169.3 m²) coincide con N L13 (8,719.3) + N L9 (8,450) = 17,169.3 m²
- Esto confirma que los terrenos del Excel de Susana sí corresponden a la sección de terrenos disponibles del sitio

---

## Estado actual (25 de marzo de 2026)

### Lo que ya tenemos

**Naves:**
- Inventario de **56 naves** en 10 parques con nomenclatura oficial
- Área en sqft y m² de todas las naves
- Clear height de 12 naves
- Rampas de 42 naves (con notas descriptivas)
- Estatus de todas: 44 ocupadas, 4 disponibles, 7 en remodelación, 1 inventario
- Ciudad de cada nave
- JSONs: `naves-industriales-gn-2026.json` y `naves-industriales-gn-2026-actualizado.json`

**Terrenos:**
- Inventario de **27 propiedades desocupadas** en 8 entidades legales
- ~1.4 millones de m² de terreno disponible
- 5 lotes dentro de parques con servicios completos (Nelson I y II)
- 2 inmuebles con edificio existente (SLP y SLRC)
- Claves catastrales y ubicaciones legales de todos
- JSON: `terrenos-disponibles-gn-2026.json`

### Lo que falta

| Dato | Responsable | Estado |
|------|-------------|--------|
| Rampas de naves faltantes | Susana (recopilando) | Pendiente |
| Datos completos de Tijuana (PN_01) | Susana | Pendiente |
| Datos completos de Hermosillo (PN_02) | Susana | Pendiente |
| Datos completos de SLP (PN_03) | Susana | Pendiente |
| Datos completos de SLRC (AS_01) | Susana | Pendiente |
| Clear height de ~44 naves | Susana | Pendiente |
| **Terrenos disponibles — nomenclatura definitiva** | Susana + Humberto + Rodolfo | Datos recibidos 24-mar, falta definir nomenclatura y cuáles publicar |
| **Nelson III** — fotos, dirección, superficie, servicios | Humberto | Pendiente. ¿Es PN Ej Puebla P72 (212K m²)? |
| Confirmar servicios reales de terrenos "Lote Baldío" | Susana | Pendiente |
| Definir cuáles terrenos van a la sección "Land Available" del sitio | Humberto + Rodolfo | Pendiente |
| **CMS editable para naves** | Brandpetram | Pendiente de implementar |

### Decisiones tomadas
- Solo se publican specs de naves **disponibles** en el sitio
- Naves en remodelación aparecen como tal (sin specs completos)
- Naves ocupadas se documentan cuando se desocupen
- Nomenclatura: prefijo de parque + número de lote (V1_2-4, N2_01, etc.)
- Clear height y docks se mantienen en la tabla del sitio
- Ciudad se quita de la tabla pública (se agrupa por parque)
- Susana y Humberto podrán editar datos de naves desde el CMS

---

## Archivos relacionados

| Archivo | Descripción |
|---------|-------------|
| `CLASIFICIACIOND E NAVES INDUSTRIALES GN 2026.numbers` | Versión original del 6 de marzo |
| `CLASIFICIACIOND E NAVES INDUSTRIALES GN 2026.csv` | CSV de la versión original |
| `naves-industriales-gn-2026.json` | JSON de la versión original |
| `CLASIFICIACIOND E NAVES INDUSTRIALES GN 2026 ACTUALIZADO.numbers` | Versión actualizada del 18 de marzo |
| `CLASIFICIACIOND E NAVES INDUSTRIALES GN 2026 ACTUALIZADO.csv` | CSV de la versión actualizada |
| `naves-industriales-gn-2026-actualizado.json` | JSON de la versión actualizada |
| `Inmuebles y Propiedades Desocupadas (GNL-Otros) 17.03.2026.xlsx` | Terrenos disponibles (24 de marzo) |
| `inmuebles-propiedades-desocupadas.csv` | CSV de terrenos disponibles |
| `terrenos-disponibles-gn-2026.json` | JSON de terrenos disponibles |
