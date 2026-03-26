# Email para Humberto — Geolocalización de terrenos

**Para:** Humberto
**Asunto:** Mapa interactivo de terrenos — avance y lo que necesitamos

---

Humberto,

Estamos agregando un mapa interactivo a la página de terrenos disponibles. Cuando alguien haga clic en un terreno, se va a abrir un panel con toda la información y un mapa mostrando la ubicación y el contorno real del terreno sobre vista satelital.

## Lo que ya logramos

Pudimos extraer las coordenadas geográficas de 13 terrenos directamente de los PDFs de deslinde que nos mandó Susana. Los deslindes tienen un "cuadro de construcción" con coordenadas UTM que convertimos a latitud/longitud para dibujar el polígono de cada terreno en el mapa.

Ya tenemos funcionando el mapa para estos terrenos:

- Spot Technology
- Parcela 50 (Fracciones 1-4, Constructora Bademi)
- Col. Calles 018
- Carranza P3, P4, P5, P6
- Rancho Clifford 009
- Cerro Prieto L22 (Amboise)

## El problema

Los PDFs de deslinde que recibimos son documentos escaneados con resolución baja. Los números en los cuadros de construcción no siempre se leen bien — un "4" parece un "0", un "7" parece un "1", etc. Esto causa que el polígono se dibuje en un lugar incorrecto o con una forma distorsionada.

Ya corregimos varios errores pero necesitamos que alguien que conozca los terrenos valide que los polígonos estén bien ubicados.

## Lo que necesitamos

### 1. Re-escanear los deslindes (lo más importante)

Si pueden re-escanear los documentos de deslinde en mejor resolución (o mejor aún, si tienen las versiones digitales originales en PDF), podemos extraer las coordenadas con certeza y no dependemos de adivinar números borrosos. Esto resuelve el problema de raíz.

### 2. Validar los polígonos actuales

Les vamos a mandar un mapa interactivo donde pueden ver cada terreno sobre vista satelital. Necesitamos que alguien que conozca las propiedades revise que los polígonos caigan donde deben.

### 3. Terrenos sin deslinde

Hay ~17 terrenos que no tienen deslinde en los documentos que recibimos, o que sus deslindes no incluyen coordenadas. Para estos necesitamos alguna de estas opciones:

**a) Dirección completa** — Si nos dan la dirección postal (calle, número, colonia, ciudad, C.P.), el sistema calcula la ubicación automáticamente y pone un pin en el mapa. Esta opción es la ideal porque cuando agreguen terrenos nuevos en el futuro, el mapa se genera solo.

**b) Ubicarlos en Google Earth** — Alguien de su equipo ubica el terreno en Google Earth y traza el polígono sobre la vista satelital. Google Earth exporta un archivo KML con las coordenadas exactas que nosotros cargamos al sistema.

**c) Coordenadas desde Google Maps** — Ubican el terreno en Google Maps, clic derecho, copian las coordenadas (latitud, longitud) y nos las mandan. Simple pero manual.

Los terrenos que nos faltan son:

- Ejido Puebla Parcela 72
- Ejido Puebla Parcela 66
- Col. Calles Lote 6
- Rancho Clifford 008, 010, 030
- El Colorado 023
- Edificio SLP
- SLRC Porción A, B, C (Arisonora)
- Ensenada El Morro
- Lotes dentro de Parque Nelson I (L13, L9)
- Lotes dentro de Parque Nelson II (UC-1.1A, UC-2.1B, UC-2.1C)

### 4. Revisar los nombres de ubicación

Al cargar la información de los terrenos, detectamos que algunos tienen nombres de ubicación que no son realmente ubicaciones — por ejemplo, el terreno de Amboise aparece como "Terreno Sres. Hurtado" en el campo de ubicación, cuando debería decir algo como "Cerro Prieto, Mexicali" o la referencia geográfica real. Hay varios terrenos con este mismo problema.

Ejemplos:

| Terreno | Ubicación actual | Debería decir algo como |
|---------|-----------------|------------------------|
| Cerro Prieto L22 | "Terreno Sres. Hurtado" | Cerro Prieto, Mexicali |
| Spot Technology | "Terreno Spot Technology" | Cerro Prieto, División 2, Mexicali |
| Col. Calles 018 | "Terreno Col. Calles" | Col. Calles, Mexicali |
| Rancho Clifford 009 | "Terreno Rancho Clifford" | Rancho Clifford, Progreso, Mexicali |
| El Morro | "Terreno Ensenada" | Zona Playitas, Ensenada |

La buena noticia es que toda esta información ya es editable directamente por ustedes desde el Studio (el panel de administración del sitio). Pueden entrar, buscar el terreno y corregir el campo de ubicación sin necesidad de pedirnos nada. Lo mismo aplica para cualquier otro dato del terreno — nombre, servicios, superficie, notas, etc.

### 5. Validar los polígonos en el mapa de QA

Les dejamos una página en el sitio donde pueden ver todos los terrenos con su polígono sobre vista satelital:

**[gruponelson.mx/qa/terrenos](https://gruponelson.mx/qa/terrenos)** _(disponible solo mientras dure la revisión)_

Del lado izquierdo está la lista de terrenos, del lado derecho el mapa. Hagan clic en cada terreno para hacer zoom y verifiquen que el polígono cae donde debe. Si alguno está mal, nos avisan cuál y lo corregimos.

---

En resumen:

1. **Re-escanear los deslindes** (o mandarnos las versiones digitales) — resuelve el problema de coordenadas de raíz
2. **Validar los polígonos** que ya armamos — necesitamos a alguien que conozca los terrenos
3. **Terrenos sin deslinde** — necesitamos direcciones, coordenadas, o que los ubiquen en Google Earth
4. **Corregir nombres de ubicación** — lo pueden hacer ustedes directamente desde el Studio

Saludos
