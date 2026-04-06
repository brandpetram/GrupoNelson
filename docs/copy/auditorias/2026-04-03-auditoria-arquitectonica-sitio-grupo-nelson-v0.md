# Auditoría Arquitectónica de Copy — Sitio Grupo Nelson

Fecha: 2026-04-03
Marco: Constitución v0, Rúbrica v0, Critic Loop v0
Auditor: Claude (rol de crítico arquitectónico)
Estado: Diagnóstico — no se reescribe nada todavía

---

## Resumen Ejecutivo Global

El sitio de Grupo Nelson tiene una base de datos duros excepcionalmente rica — pocos competidores en Mexicali pueden presentar 60+ años, 30 corporaciones, Gulfstream 35 años, 1M+ horas hombre con cero fatales. El problema no es la falta de material. El problema es que los mismos 8-10 datos se repiten en casi todas las páginas con el mismo significado, sin reframing por territorio. Un visitante que navegue 3 páginas leerá "52,200 m² para Gulfstream" tres veces, "28 años y 75+ proyectos" cuatro veces, y "pilas de 18 metros en suelo colapsable" en al menos 5 ubicaciones — frecuentemente como dato suelto, sin traducir a consecuencia comercial para el comprador (con excepciones: diferencia-nelson sí traduce ownership a "una llamada vs tres niveles de aprobación", y liderazgo sí conecta permanencia con eliminación de licitación).

Los hallazgos más graves:
1. Las páginas de Nelson institucional (diferencia, liderazgo, trayectoria) comparten una proporción alta de contenido sin reframing por territorio — los mismos 4 nombres de la familia, las mismas cifras de Gulfstream, los mismos stats aparecen en ambas sin cambiar su significado según la función de cada página.
2. Llave-en-mano tiene un problema de profundidad y diferenciación: el territorio es válido (entrega lista para operar = inventario + infraestructura), pero la ejecución no da información concreta suficiente (specs, disponibilidad, tiempos, tenant improvement) ni se diferencia bien de build-to-suit.
3. Certificación LEED y el hub /leed son contenido 100% idéntico en dos URLs.
4. Nuestra Historia está completamente en lorem ipsum.
5. Existe material crudo fascinante en los documentos (terremoto de 2010, carritos de golf con temperatura controlada, puertas antisonido de $30K) que haría el sitio memorable, pero no llegó al copy.

Lo que sí funciona bien:
- Portafolio cumple su función con datos reales.
- Clima Extremo (LEED) es la página más diferenciada del sitio — el claim de "28 años de datos de desempeño térmico en la misma zona" es un moat real.
- Estándares Internacionales tiene el enfoque correcto ("capacidad abierta, no checklist") aunque la ejecución quedó débil.
- Proyectos Especializados tiene los 4 mejores casos del sitio, pero condensados a 2 líneas cada uno.

---

# BLOQUE 1: src/app/nelson/

## 1. Resumen ejecutivo del bloque

Las 4 páginas de Nelson institucional sufren de un problema central: comparten una proporción alta de contenido sin cambiar su significado según el territorio de cada página. Liderazgo y Diferencia Nelson usan los mismos bloques de datos (4 nombres de la familia con roles, cifras de Gulfstream, stats generales) con framing similar. Trayectoria es una página visual (logos + stats) con copy mínimo que repite la narrativa de 1965. Nuestra Historia está completamente en lorem ipsum.

El dato más potente del bloque — "80% de clientes recurrentes" — no aparece en Diferencia Nelson, que es justamente donde más peso tendría como diferenciador. Y aunque hay instancias donde sí se traduce a consecuencia comercial (diferencia-nelson sí dice "tres niveles de aprobación vs. una llamada", liderazgo sí habla de eliminación del proceso de selección), la mayoría de los datos se presentan como hechos sin subir al nivel de "qué gana el comprador". "Estructura plana" aparece como descripción organizacional más que como ventaja concreta (velocidad, accountability).

## 2. Auditoría por página

### /nelson/diferencia-nelson

**Territorio esperado:** Por qué Grupo Nelson es diferente — NO un "quiénes somos" genérico.
**Pregunta del comprador:** "¿Por qué debería elegirte a ti y no a otro desarrollador industrial en Mexicali?"

**Qué comunica hoy:**
Abre con "La Diferencia Nelson: familia fundadora, trato directo y constructora propia desde 1965." Desarrolla 3 bloques: 60+ años/primera maquiladora, trato directo con nombres de la familia, Baumex como constructora in-house. Cierra con infraestructura de Nelson II (subestación, contraincendio 360K galones, certificaciones).

**Facts usados:** 1965, primera maquiladora, 3 generaciones, 4M ft², 30 corporaciones, 5 parques, Mexicali/Hermosillo/SLP, 4 nombres de la familia con roles, Gulfstream 35 años + asignación directa, contratos 10-15 años, Baumex 28 años + 75 proyectos, Gulfstream 52,200 m² + LEED Gold + BRB + 10 MW, 1,092,745 HHT cero fatales, Nelson II 27 ha + subestación + 360K galones, 4 Fortune 500.

**Valor subexplotado:**
- **80% repeat business** — el dato más potente como diferenciador NO está en esta página. Está en liderazgo y trayectoria pero falta aquí.
- **Interiores Aéreos 5K→550K ft² (110x)** — ausente. Sería la prueba más poderosa de que Nelson escala con el cliente.
- **Honeywell 30 años** — no se menciona como caso en esta página. Solo aparece como logo.

**Repetición con otras páginas:**
- "1965 primera maquiladora" — idéntico en liderazgo y trayectoria
- "30 corporaciones" — idéntico en las 3 páginas
- "4 nombres de la familia + roles" — idéntico en liderazgo
- "Gulfstream 52,200 m² + LEED Gold + BRB + 10 MW" — idéntico en liderazgo
- "Contratos 10-15 años" — idéntico en liderazgo

**Promesas flojas:**
- Tiene un **banner H1 en lorem ipsum** — copy sin escribir en una página que debería ser la más importante del sitio.
- "Reduce la complejidad de tu instalación en Mexicali" — promesa sin mecanismo. No explica CÓMO concretamente.

**Qué debería dominar:** Los 3 diferenciadores verificables (trayectoria + ownership + constructora in-house) con reframing orientado al comprador: qué GANA el prospecto con cada uno.

**Hallazgos priorizados:**
- **[Crítico]** Banner H1 en lorem ipsum.
- **[Crítico]** 80% repeat business ausente — el dato que más diferencia, falta de la página de diferenciación.
- **[Importante]** Comparte 70% de contenido con liderazgo sin reframing.
- **[Importante]** Facts como "estructura plana" y "10 disciplinas" se quedan en descripción sin traducir a consecuencia comercial.
- **[Oportunidad]** Interiores Aéreos 110x — caso de escalabilidad ausente.

---

### /nelson/liderazgo

**Territorio esperado:** Acceso a ownership, permanencia, confianza — NO un organigrama.
**Pregunta del comprador:** "¿Con quién voy a tratar? ¿Puedo confiar en que estarán ahí en 10 años?"

**Qué comunica hoy:**
Abre con nearshoring desde 1965. Stats bar: 80% repeat, Gulfstream 35 años, Honeywell 30, Interiores Aéreos 110x. Luego desarrolla: liderazgo familiar (4 nombres + roles), caso Gulfstream completo, caso Honeywell con túnel de viento, caso Interiores Aéreos, lista de 30 corporaciones por sector. Cierra con mosaico visual.

**Facts usados:** Prácticamente TODOS los datos disponibles del proyecto. Es la página más densa del sitio.

**Valor subexplotado:** Ningún dato importante falta — el problema es al revés: esta página absorbe territorios de otras 3 páginas.

**Repetición con otras páginas:**
- 4 nombres de la familia + roles — idénticos a diferencia-nelson
- Gulfstream 35 años + 52,200 m² + LEED Gold + BRB + 10 MW — idéntico a diferencia-nelson
- 30 corporaciones — idéntico a diferencia-nelson y trayectoria
- 1965 primera maquiladora — idéntico a las 3
- Lista de corporaciones por sector — mismo contenido que el grid de logos en trayectoria

**Promesas flojas:**
- H1 mezcla nearshoring/1965 (territorio de trayectoria/historia) con liderazgo.
- Los casos de Gulfstream, Honeywell e Interiores Aéreos están framed como "mira nuestros clientes" en vez de "así es como trabajarás con nosotros".

**Qué debería dominar:** La experiencia de TRABAJAR con una empresa familiar: velocidad de decisión, accountability personal, continuidad de relación. Los casos deberían demostrar eso, no solo enumerar cifras.

**Hallazgos priorizados:**
- **[Crítico]** Es una mega-página que absorbe todos los territorios. Si le quitaras el título "Liderazgo", podría ser la homepage o trayectoria sin que nadie note la diferencia.
- **[Importante]** Los casos están framed como social proof (trayectoria) no como experiencia de relación (liderazgo).
- **[Importante]** La lista completa de 30 corporaciones por sector invade el territorio de trayectoria.
- **[Oportunidad]** Ninguna sección responde directamente "¿cómo es la experiencia de trabajar con los dueños?" — falta la traducción a velocidad, accountability, continuidad.

---

### /nelson/trayectoria

**Territorio esperado:** Prueba cuantitativa de permanencia — visual, con logos y números.
**Pregunta del comprador:** "¿Cuántos años llevan? ¿Cuánto han construido? ¿Quién más confía en ellos?"

**Qué comunica hoy:**
Grid de 14 logos + 8 stats (60+ años, 4M ft², 30 corporaciones, 5 parques, 3 generaciones, 80% renovación, 75+ proyectos Baumex, 4 Fortune 500) + editorial breve sobre 1965.

**Facts usados:** Los stats correctos para esta función. Grid de logos funcional.

**Valor subexplotado:**
- **Gulfstream 35 años y Honeywell 30 años** como datos de duración — son LOS datos más potentes de permanencia y no aparecen aquí.
- **Interiores Aéreos 110x** — prueba cuantitativa de crecimiento con el mismo proveedor.
- **Diversidad de industrias** — 7 sectores representados, dato ausente.

**Repetición con otras páginas:**
- Todos los stats aparecen idénticos en diferencia-nelson y/o liderazgo.
- La narrativa de 1965 repite lo mismo que las otras dos.

**Promesas flojas:**
- **Inconsistencia numérica:** El título dice "33 corporaciones" pero el stat dice "30". Diferencia-nelson y liderazgo dicen "30". Erosiona credibilidad.

**Qué debería dominar:** Ser la página puramente visual — que los logos y los números hablen solos, con mínimo texto editorial.

**Hallazgos priorizados:**
- **[Crítico]** Inconsistencia 33 vs 30 corporaciones — debe corregirse.
- **[Importante]** El copy editorial repite la narrativa de 1965 que ya está en las otras dos páginas.
- **[Oportunidad]** Gulfstream 35 años y Honeywell 30 como datos de duración serían más potentes aquí que en liderazgo.

---

### /nelson/nuestra-historia

**Territorio esperado:** Origen, continuidad, rol de pionero.
**Pregunta del comprador:** "¿De dónde vienen? ¿Qué tan arraigados están en esta región?"

**Qué comunica hoy:** NADA. La página completa está en lorem ipsum.

**Hallazgos priorizados:**
- **[Crítico]** Página pública sin contenido real. Layout con foto del fundador, cards y links pero todo en lorem ipsum.

---

## 3. Auditoría cross-page (Bloque Nelson)

**Temas más repetidos:**
- "1965 primera maquiladora de Mexicali" — 3 de 3 páginas con contenido, mismo significado.
- "30 corporaciones internacionales" — 3 de 3 páginas, mismo significado.
- "4M ft² desarrollados" — 3 de 3 páginas.

**Facts más sobreusados:**
- Gulfstream 52,200 m² + LEED Gold + BRB + 10 MW — aparece en diferencia-nelson y liderazgo con párrafos casi idénticos.
- 4 nombres de la familia con roles — idénticos en diferencia-nelson y liderazgo.

**Páginas intercambiables:**
- **Liderazgo ↔ Diferencia Nelson** — 70% de intercambiabilidad. Si se quitaran los títulos, un lector no sabría cuál es cuál.

**Territorios mal diferenciados:**
- Las 3 páginas con contenido (diferencia, liderazgo, trayectoria) intentan cubrir historia + familia + clientes + infraestructura. Ninguna tiene un territorio limpio.

**Facts valiosos ausentes del sitio (Nelson):**
- "En otros desarrolladores necesitas tres niveles de aprobación para cambiar una cláusula. En Grupo Nelson necesitas una llamada." — dato de las charlas con dueños, no está en el sitio.
- Caso Interiores Aéreos ausente de diferencia-nelson (la página que más lo necesita).
- Ninguna página traduce "estructura plana" a consecuencia concreta para el comprador.

## 4. Top hallazgos del bloque

| # | Severidad | Hallazgo |
|---|-----------|----------|
| 1 | Crítico | Nuestra Historia completamente en lorem ipsum |
| 2 | Crítico | Banner H1 en lorem ipsum en diferencia-nelson |
| 3 | Crítico | Liderazgo no tiene territorio propio — es una mega-página que absorbe todo |
| 4 | Crítico | Inconsistencia 33 vs 30 corporaciones |
| 5 | Importante | 80% repeat business ausente de diferencia-nelson |
| 6 | Importante | Diferencia-nelson y liderazgo comparten 70% de contenido sin reframing |
| 7 | Importante | Ningún dato se traduce a consecuencia comercial para el comprador |
| 8 | Oportunidad | Material potente de las charlas con dueños ("una llamada vs tres niveles de aprobación") no está en el sitio |
| 9 | Oportunidad | Interiores Aéreos 110x ausente de diferencia-nelson |

## 5. Recomendación del bloque

**Tocar primero:** Nuestra Historia (lorem ipsum) y el banner en diferencia-nelson. Son errores visibles.

**Redefinir segundo:** El territorio de liderazgo — hoy es una mega-página. Debe enfocarse en la experiencia de relación (velocidad, accountability, continuidad), no en repetir todos los datos del sitio.

**Mayor upside comercial:** Diferencia-nelson. Si se le agrega 80% repeat business, Interiores Aéreos 110x, y se traducen los 3 diferenciadores a consecuencia para el comprador, sería la página más poderosa del sitio.

---

# BLOQUE 2: src/app/constructora/ (sin LEED)

## 1. Resumen ejecutivo del bloque

Las 7 páginas de constructora comparten un pool de ~8 datos duros que se repiten sin cambiar el ángulo según territorio. El dato "52,200 m² Gulfstream" aparece en 7 de 7 páginas. El "puente de 95 metros" en 4 de 7. Los mismos 4 proyectos especializados (Gulfstream, Skyworks, Honeywell túnel, Deacero) aparecen en baumex, diseño e ingeniería, build-to-suit y proyectos especializados — siempre con los mismos números y el mismo significado.

Llave-en-Mano tiene un problema de profundidad: el territorio es válido (entrega lista para operar convive con inventario disponible), pero la página no da información concreta suficiente para que el comprador avance (specs, disponibilidad real, tiempos, tenant improvement) y no se diferencia bien de build-to-suit.

Existe material crudo extraordinario en los documentos que no llegó al sitio: la narrativa del terremoto de 7.2 en 2010 que justifica los sistemas BRB, los carritos de golf con temperatura controlada en el puente Skyworks, las puertas antisonido de $30K en el túnel de viento, el colado del puente completo en un solo día sin juntas. Ese material convertiría proyectos especializados en la página más memorable del sitio.

## 2. Auditoría por página

### /constructora/baumex

**Territorio esperado:** Qué es Baumex y por qué tener constructora in-house cambia el valor del grupo.
**Pregunta del comprador:** "¿Por qué debería construir con ustedes y no con cualquier otra constructora?"

**Qué comunica hoy:** Página larga con ~12 componentes que cubre todo: identidad, disciplinas, track record, proyectos especiales, seguridad, proceso, FAQs. Usa typewriter de nombres de clientes en el hero. Stats: 33 corporaciones, 4.5M ft², 28 años, 80% recurrentes.

**Facts más relevantes:** 33 corporaciones, 4.5M ft², 6 disciplinas in-house, 1,092,745 HHT cero fatales, 404 días sin accidentes, ruta crítica 18 hitos, 11 puntos de control, puente 95m, túnel 3,000 HP, pilas 18m.

**Valor subexplotado:**
- Asignación directa Gulfstream (sin licitación, 35 años) — el dato más poderoso, no aparece como argumento.
- Design-build como modelo contractual — se dice "un solo contrato" pero no se explica que eso elimina riesgo contractual.
- Construcción para terceros — no queda claro que Baumex también construye fuera de los parques Nelson.

**Repetición con otras páginas:** Los 4 proyectos especiales (Gulfstream, Skyworks, Honeywell, Deacero) aparecen aquí Y en diseño-e-ingeniería Y en proyectos-especializados con los mismos números. FM Global, LEED, ISN aparecen aquí Y en diseño-e-ingeniería Y en estándares. HHT/seguridad aparece aquí Y en diseño-e-ingeniería.

**Promesas flojas:**
- Testimonio anónimo: "Director de Planta — Empresa Fortune 500" — sin nombre, pierde credibilidad.
- "Funciona y se ve bien" — vago.

**Hallazgos priorizados:**
- **[Crítico]** La página repite horizontalmente datos que profundizan las subpáginas. No tiene argumento propio claro de "por qué in-house cambia el juego para TI".
- **[Importante]** Testimonio anónimo es contraproducente.
- **[Importante]** Asignación directa de Gulfstream no se usa como argumento de confianza.
- **[Oportunidad]** Design-build como modelo contractual que transfiere riesgo al constructor.

---

### /constructora/diseno-e-ingenieria

**Territorio esperado:** Resolver desafíos técnicos no estándar.
**Pregunta del comprador:** "¿Pueden resolver mi problema técnico específico, aunque sea inusual?"

**Qué comunica hoy:** Hero con "Ingeniería diseñada para tu operación". 6 disciplinas. Luego repite los mismos 5 datos (pilas 18m, BRB, puente 95m, túnel 3,000 HP, 20 MW) al menos 4 veces en la misma página a través de diferentes componentes (GunLike, FeatureSection6, CuadroCirculo, párrafo grande, FeatureSection5). Incluye una sección completa de seguridad (HSE) y otra de certificaciones (FM Global, LEED, ISN).

**Valor subexplotado:**
- El proceso de ingeniería — cómo trabajan las 6 disciplinas en paralelo.
- Nombres de ingenieros — el organigrama completo está en los docs pero no se usa.
- Proyecto ejecutivo como producto — nunca se explica qué ES y por qué el comprador debería quererlo.

**Repetición con otras páginas:** Los 4 proyectos son los mismos que en baumex y proyectos-especializados. La sección de seguridad invade territorio de baumex. La sección de certificaciones invade territorio de estándares-internacionales.

**Hallazgos priorizados:**
- **[Crítico]** Repetición intra-página severa: los mismos 5 datos aparecen 4 veces en la misma página.
- **[Importante]** La sección de seguridad (HSE completo) no pertenece a una página de ingeniería.
- **[Importante]** La sección de certificaciones es una versión comprimida de estándares-internacionales.
- **[Oportunidad]** El "proyecto ejecutivo" como producto diferenciador no se explica en ningún lugar del sitio.

---

### /constructora/build-to-suit

**Territorio esperado:** Diseñar desde cero para una operación específica.
**Pregunta del comprador:** "¿Puedo tener una nave exactamente como la necesito?"

**Qué comunica hoy:** Hero con video: "Construye la nave que no existe en ningún catálogo". Después: nave a medida vs especulativa, cuadro naranja "¿Cuántos Megawatts? Los que necesites", imagen decorativa "Tu Nave Como Siempre la Quisiste", lista de 20 features en dos columnas.

**Valor subexplotado:**
- El proceso BTS completo — fases, tiempos, qué entrega el cliente, qué entrega Baumex. La página no lo explica.
- Asignación directa de Gulfstream — el argumento más fuerte de BTS y no aparece.
- Tiempos de entrega — ni un solo dato de plazo.
- Qué pasa con el terreno — no se dice si el comprador necesita tenerlo o si Nelson lo provee.

**Repetición con otras páginas:** Mismos 3 proyectos que en baumex, diseño-e-ingeniería y proyectos-especializados. La lista de 20 features invade territorios de diseño-e-ingeniería y estándares.

**Promesas flojas:**
- "Tu Nave Como Siempre la Quisiste" — eslogan sin sustancia.
- H2 "Clientes de Clase Mundial confían en Grupo Nelson" flota sin logos ni contenido debajo.
- Sin CTA al final.

**Hallazgos priorizados:**
- **[Crítico]** No explica el proceso BTS: el comprador no sabe cómo funciona ni cuánto tarda.
- **[Importante]** Componente Delta ("Tu Nave Como Siempre la Quisiste") es decorativo, sin argumento.
- **[Importante]** Sin CTA ni sección de contacto al final.
- **[Oportunidad]** Asignación directa de Gulfstream debería ser el cierre más potente de esta página.

---

### /constructora/llave-en-mano

**Territorio esperado:** Entrega lista para operar — naves de inventario con infraestructura Fortune 500 donde el comprador entra y arranca producción rápido.
**Pregunta del comprador:** "¿Puedo operar en semanas sin esperar un build-to-suit de 12-24 meses?"

**Qué comunica hoy:** "Naves listas para operar en Mexicali." Describe 4 parques, specs generales de cada uno, nearshoring, contratos 10-15 años, 80% recurrentes. Incluye puente a build-to-suit ("¿No encuentras lo que necesitas? Baumex diseña a medida"). Cierra repitiendo "4 parques con naves disponibles".

**Nota:** El territorio es válido. "Llave en mano" como entrega lista para operar convive legítimamente con inventario disponible — desde la perspectiva del comprador, entrar y operar rápido ES llave en mano. El problema no es de naming ni de territorio; es de profundidad en la ejecución.

**Valor subexplotado:**
- Specs concretas de las naves disponibles (alturas, andenes, capacidad eléctrica, área de oficinas) — hoy solo hay descripciones generales por parque.
- Cuántas naves hay disponibles y cuántos m² — ningún dato de inventario real.
- Tiempos concretos: "en semanas" sin decir cuántas ni bajo qué condiciones.
- Tenant improvement — si la nave casi sirve pero necesita adecuaciones menores, ¿cómo funciona?
- Proceso de ocupación — pasos concretos desde visita hasta "arrancas producción".
- Diferenciación clara con build-to-suit — Teta dice que llave en mano "elimina el ciclo de un BTS", pero no desarrolla el contraste más allá de eso.

**Repetición con otras páginas:** "80% clientes recurrentes" y "30 corporaciones" aparecen en baumex y liderazgo con mismo significado. "52,200 m² Gulfstream" en sidebar Kappa.

**Hallazgos priorizados:**
- **[Importante — roto/incompleto]** Imágenes placeholder en componente Lamda (src="/placeholder.svg") — higiene inmediata.
- **[Importante — arquitectura]** La página no da información concreta suficiente para que el comprador avance en su decisión (specs, disponibilidad real, tiempos, tenant improvement).
- **[Importante — arquitectura]** Repetición entre componentes Zeta (apertura) y Lamda (cierre) — dicen lo mismo con las mismas palabras.
- **[Oportunidad]** Si se agregaran specs por nave, disponibilidad actualizada y proceso de ocupación, sería la página de mayor conversión del sitio para compradores con urgencia.

---

### /constructora/proyectos-especializados

**Territorio esperado:** Casos límite, requerimientos inusuales, ejecución singular.
**Pregunta del comprador:** "Mi proyecto necesita algo fuera de lo común. ¿Pueden resolverlo?"

**Qué comunica hoy:** "Construcciones especializadas." 4 proyectos en formato feature: Puente 95m (2 líneas), Gulfstream 52,200 m² (2 líneas), Túnel de viento (2 líneas), Deacero (2 líneas). CTA: "¿Tu operación necesita algo diferente?"

**Valor subexplotado — ESTA ES LA MAYOR OPORTUNIDAD DEL SITIO:**
El material crudo tiene detalles fascinantes que no están en el copy:
- **Puente Skyworks:** Función real = transporte de microchips en carritos de golf con temperatura controlada. Colado completo en un solo día, sin juntas. 2 meses de coordinación logística con el municipio. Montaje en 2 domingos consecutivos.
- **Gulfstream:** Terremoto de 7.2 en 2010 que dañó la planta existente y causó 2 semanas de paro — ESO es lo que justifica los BRB. Cubierta TPO = "el Rolls-Royce de las cubiertas". 13,500 m² de oficinas (sin precedente para una nave). Proyecto ejecutivo colaborativo.
- **Túnel de viento:** Puertas blindadas antisonido de ~$30,000 USD el par. Voltaje de 4.16 KV. 8 meses de construcción. Proyecto colaborativo ingenieros Honeywell + Baumex.
- **Deacero:** 5 hectáreas de patios. Grúas industriales. Entrega que debía calzar milimétricamente con equipos.

**Repetición con otras páginas:** Los 4 proyectos con los mismos datos que en baumex, diseño-e-ingeniería, build-to-suit.

**Promesas flojas:**
- "Sin límite de complejidad" — promesa absoluta sin matiz.
- **Errata:** "Dinis que necesita tu operación" — typo en CTA.

**Hallazgos priorizados:**
- **[Crítico]** Los 4 mejores casos del sitio están condensados a 2 líneas cada uno, sin narrativa. El material crudo tiene historias memorables que no se usan.
- **[Importante]** Errata en CTA.
- **[Oportunidad]** Si esta página se expandiera con las narrativas completas (terremoto → BRB, carritos de golf, puertas antisonido), sería la página más poderosa y diferenciadora del sitio entero.

---

### /constructora/estandares-internacionales

**Territorio esperado:** Capacidad de cumplir estándares que sobreviven auditoría.
**Pregunta del comprador:** "¿Pueden cumplir las certificaciones que mi corporativo exige?"

**Qué comunica hoy:** "Trae tu certificación más exigente." FM Global, NFPA, LEED, ISN, IBC, NOM — "los hemos implementado en decenas de proyectos." Sección sobre implementación en México. CTA: "Dinos qué necesitas cumplir."

**Valor subexplotado:**
- ISN "Recomendado" por Honeywell — dato poderoso ausente (las notas del doc de copy excluyen nombres de clientes intencionalmente, pero eso debilita la página).
- FM Global específico — qué se audita exactamente (muros, cubierta, estructura, contraincendio).
- Reducción de prima de seguro por FM Global — dato comercial potente ausente.
- No tiene UN SOLO ejemplo concreto de implementación.

**Repetición con otras páginas:** "FM Global, LEED, ISN" aparece casi idéntico en diseño-e-ingeniería. "28 años" y "75+ proyectos" son muletas universales.

**Hallazgos priorizados:**
- **[Importante]** Es la página más genérica del sitio. Sin un solo ejemplo concreto de implementación.
- **[Importante]** ISN "Recomendado" por Honeywell y reducción de prima FM Global son datos comerciales potentes que no se usan.
- **[Oportunidad]** El enfoque de "capacidad abierta" del doc de copy es correcto — la ejecución quedó como checklist sin profundidad.

---

### /constructora/portafolio

**Territorio esperado:** Evidencia concreta proyecto por proyecto.
**Pregunta del comprador:** "Muéstrenme qué han hecho, con datos."

**Qué comunica hoy:** Hero con "+75 proyectos en 28 años." Sidebar con stats + tabla de proyectos reales.

**Hallazgos priorizados:**
- **[Oportunidad]** "Experiencia que da confianza" es eslogan genérico en el hero.

**Veredicto:** Es la página más funcional del sitio. Cumple su rol con datos reales. La tabla con proyectos es el tipo de evidencia que falta en otras páginas.

---

## 3. Auditoría cross-page (Bloque Constructora)

**Temas más repetidos:**

| Dato | Páginas | Problema |
|------|---------|----------|
| 52,200 m² Gulfstream | 7 de 7 | Siempre como "la nave más grande". Nunca con ángulo diferente. |
| Puente 95m | 4 de 7 | Siempre como "puente sin columnas". |
| Túnel 3,000 HP | 4 de 7 | Siempre como dato de HP. |
| BRB antisísmico | 4 de 7 + repetición intra-página en diseño | Mismo dato, mismo significado. |
| FM Global, LEED, ISN | 3 de 7 | Estándares habla de lo mismo que secciones de diseño. |
| "28 años" | 7 de 7 | Muleta universal. |

**Páginas intercambiables:**
- diseño-e-ingeniería ↔ proyectos-especializados — comparten los mismos 4 proyectos como evidencia.
- estándares-internacionales es una versión corta de una sección que ya está en diseño-e-ingeniería.

**Inconsistencias numéricas:**
- 33 corporaciones (baumex) vs 30 (llave-en-mano) vs 30+ (proyectos-especializados)
- 4.5M ft² (baumex hero) vs 4M+ (desempaquetado)

**Facts valiosos ausentes del sitio:**
- Narrativa del terremoto de 2010 como justificación de BRB
- Carritos de golf con temperatura controlada (puente Skyworks)
- Puertas antisonido $30K (túnel de viento)
- Colado del puente en un solo día, sin juntas
- Coordinación logística de 2 meses con el municipio
- Proyecto ejecutivo como producto explicado

## 4. Top hallazgos del bloque

| # | Severidad | Tipo | Hallazgo |
|---|-----------|------|----------|
| 1 | Crítico | Roto/incompleto | Imágenes placeholder en llave-en-mano + errata en CTA de proyectos-especializados |
| 2 | Crítico | Arquitectura | Diseño-e-ingeniería: mismos 5 datos 4 veces intra-página + invasión de territorios (seguridad, estándares) |
| 3 | Crítico | Oportunidad editorial | Proyectos especializados: 4 historias fascinantes condensadas a 2 líneas sin narrativa |
| 4 | Importante | Arquitectura | 52,200 m² Gulfstream en 7 páginas con mismo significado |
| 5 | Importante | Arquitectura | Llave-en-mano: territorio válido pero falta profundidad (specs, disponibilidad, tiempos, tenant improvement) |
| 6 | Importante | Arquitectura | Estándares-internacionales sin un solo ejemplo concreto de implementación |
| 7 | Importante | Editorial | Testimonio anónimo en baumex contraproducente |
| 8 | Oportunidad | Editorial | Material crudo extraordinario (terremoto 2010, carritos de golf, puertas antisonido) ausente del sitio |
| 9 | Oportunidad | Editorial | "Proyecto ejecutivo" como producto diferenciador inexplicado |

## 5. Recomendación del bloque

**Tocar primero:** Llave-en-mano (redefinir territorio o renombrar) y proyectos-especializados (expandir narrativas).

**Ya está fuerte:** Portafolio.

**Mayor upside comercial:** Proyectos especializados. Si se expandieran los 4 casos con las narrativas del material crudo (terremoto→BRB, carritos de golf, puertas antisonido, colado en un día), sería la página más diferenciadora del sitio. Ningún competidor en Mexicali puede contar esas historias.

---

# BLOQUE 3: src/app/constructora/leed/ + certificacion-leed

## 1. Resumen ejecutivo del bloque

La sección LEED tiene un problema estructural y uno de contenido. El estructural: certificación-leed y el hub /leed son contenido 100% idéntico en dos URLs — mismos componentes, mismo copy, mismos datos. Deberían tener roles claramente diferentes (una vende la decisión de certificar, otra organiza la navegación a los pilares).

El de contenido: la sección es técnicamente buena — usa datos reales de Gulfstream 550K consistentemente y es más específica que el 90% de lo que hay en el mercado mexicano. Pero **falta una capa financiera en la entrada comercial a LEED** (certificacion-leed y/o hub). Es ahí — no en cada subpágina técnica — donde debería estar el argumento de negocio: ROI, renta premium, costo comparativo, requisitos corporativos. Las subpáginas técnicas (clima-extremo, materiales, etc.) cumplen bien su función como profundización por pilar y no necesariamente requieren ROI financiero — pero la puerta de entrada sí lo necesita para que el CFO o VP de Real Estate entienda por qué LEED es una decisión de negocio, no solo una decisión técnica.

La excepción positiva es clima-extremo — es la página más diferenciada del sitio entero. El claim de "28 años de datos de desempeño térmico en la misma zona climática" es un moat real que ningún competidor puede replicar fácilmente.

## 2. Auditoría por página

### /constructora/certificacion-leed

**Territorio esperado:** Punto de entrada comercial a LEED (decisión de negocio + compliance).
**Pregunta del comprador:** "¿Por qué debería certificar LEED mi nave en Mexicali y por qué con Nelson?"

**Qué comunica hoy:** Hero con "Tu Nave Industrial con Certificación LEED en Mexicali". Sidebar con 3 secciones técnicas (clima/energía, agua/materiales/calidad, sistemas/proceso). Carrusel de links a sub-páginas. BigNumber: 4.5M ft².

**Valor subexplotado:**
- ROI de certificación LEED — valor de renta premium, tasa de vacancia reducida, valorización del activo.
- Costo comparativo: certificar vs no certificar.
- Empresas que exigen LEED como requisito.
- Incentivos fiscales o regulatorios.

**Hallazgos priorizados:**
- **[Importante]** Es un resumen técnico, no una página de venta. Falta el "why LEED" comercial antes del "how LEED" técnico.
- **[Oportunidad]** Si se agregara ROI + requisitos corporativos + costo comparativo, convertiría la decisión de LEED de "nice to have" a "necesario para competir".

---

### /constructora/leed (Hub)

**Territorio esperado:** Hub de navegación que presenta los pilares LEED.

**Qué comunica hoy:** Es IDÉNTICO a /constructora/certificacion-leed. Mismos componentes. Mismo copy. Mismos datos.

**Hallazgos priorizados:**
- **[Crítico]** Duplicación 100% de contenido entre dos URLs. Problemático para SEO y para el visitante que navega ambas.

---

### /constructora/leed/clima-extremo

**Territorio esperado:** Desempeño en clima desértico extremo.
**Pregunta del comprador:** "¿Cómo se garantiza que una nave LEED funcione a 48°C?"

**Qué comunica hoy:** "Ingeniería para +45°C". Delta de 24°C, R-19/R-30, SRI >78, Gulfstream con 3,200 ton A/C, 42 manejadoras, TPO 20 años, 90% recuperación, 28 años de datos, error de cálculo dispara consumo 30-50%.

**Hallazgos priorizados:**
- **[Fuerte]** La mejor página de la sección. "28 años de datos de desempeño térmico en la misma zona" es un moat real.
- **[Oportunidad]** Podría ser más fuerte con datos comparativos de fallos de constructoras sin experiencia local.

---

### /constructora/leed/energia-atmosfera

**Territorio esperado:** Eficiencia energética medible.
**Pregunta del comprador:** "¿Cuánto voy a ahorrar en energía?"

**Qué comunica hoy:** 10 MW solares, 50,000 m² paneles, 20 MW capacidad total, ahorro 35-50%, modelado energético.

**Valor subexplotado:** Ahorro en dólares anuales (no solo porcentaje), payback del sistema fotovoltaico, tarifa CFE en Mexicali vs otras regiones.

**Hallazgos priorizados:**
- **[Oportunidad]** Buenos datos técnicos. Podría ser más potente si incluyera datos financieros (ahorro en dólares, payback), pero esto también podría resolverse desde la entrada comercial (certificacion-leed) sin sobrecargar esta subpágina técnica.

---

### /constructora/leed/sitios-sostenibles

**Territorio esperado:** Sitio, agua, infraestructura eficiente.

**Qué comunica hoy:** Estrés hídrico, tanque 360K galones, 60% ahorro centralizado, 90% condensación, SRI >78, captación pluvial.

**Hallazgos priorizados:**
- **[Importante]** La captación pluvial en Mexicali (~75mm de precipitación anual) suena bien pero el volumen real es mínimo. Puede generar escepticismo si no se matiza.
- **[Oportunidad]** El argumento del agua como riesgo operativo + infraestructura de Nelson II ya existente es comercialmente potente.

---

### /constructora/leed/calidad-ambiental

**Territorio esperado:** Calidad interior para operaciones y personas.

**Qué comunica hoy:** COV <50 g/L, ASHRAE 62.1, confort térmico. Detalle de umbrales por material.

**Valor subexplotado:** Datos de productividad (Harvard COGfx), rotación de personal, ausentismo. El argumento de "recirculación por calor extremo amplifica emisiones interiores" debería ser el centro de la página, no una mención al pasar.

**Hallazgos priorizados:**
- **[Oportunidad]** El argumento de "recirculación por calor extremo amplifica emisiones interiores" es un diferenciador local que debería ser más central en la página. Datos de productividad (Harvard COGfx) podrían fortalecer, pero no son estrictamente necesarios para una subpágina técnica.

---

### /constructora/leed/materiales-recursos

**Territorio esperado:** Trazabilidad, residuos, abastecimiento.

**Qué comunica hoy:** EPD, acero reciclado, abastecimiento regional <160 km (Ternium, ArcelorMittal, CEMEX, Holcim), desvío >50%.

**Hallazgos priorizados:**
- **[Oportunidad]** Nombrar proveedores y el radio de 160 km son buenos. Falta cuantificar (toneladas desviadas, % real de contenido reciclado).

---

### /constructora/leed/proceso-certificacion

**Territorio esperado:** Proceso, coordinación, auditoría.
**Pregunta del comprador:** "¿Cómo funciona y cuánto me cuesta?"

**Qué comunica hoy:** LEED v4 BD+C, Gulfstream 53-55 puntos (Silver), apuntando a Gold con 10 MW. Proceso integrativo desde predesign.

**Valor subexplotado:** Timeline típico, costo aproximado, qué % del costo total de la nave representa, diferencia Silver vs Gold en valor del activo.

**Hallazgos priorizados:**
- **[Importante]** Dice el qué pero no el cuánto. El comprador necesita timeline y costo para decidir.

---

### /constructora/leed/sistemas-operativos

**Territorio esperado:** Operaciones inteligentes y monitoreo.

**Qué comunica hoy:** BMS con submedición por circuito, detección en horas vs meses, dashboards ESG.

**Valor subexplotado:** Ejemplo real de ineficiencia detectada y ahorro resultante. Marca/modelo del BMS. Costo vs ahorro.

**Hallazgos priorizados:**
- **[Importante]** Buena premisa ejecutada como feature list genérica de BMS. Necesita un caso real.

---

## 3. Auditoría cross-page (Bloque LEED)

**Dato más sobreusado en la sección:**

| Dato | Aparece en |
|------|-----------|
| 42 manejadoras / 3,200 ton A/C | 6 de 9 páginas |
| 90% recuperación condensación | 5 de 9 |
| 10 MW solares | 4 de 9 |
| 52,200 m² | 5 de 9 |
| R-19/R-30 | 3 de 9 |

**¿La sección vende la capacidad LEED de Nelson, o solo explica qué es LEED?**
Está en un punto intermedio, inclinada hacia lo educativo. Usa datos reales de Gulfstream (mejor que contenido genérico) pero los repite tanto que pierden impacto. Falta capa financiera en la entrada comercial. No conecta con el momento de nearshoring. No despliega las capacidades únicas de Nelson/Baumex (pilotes, subestación 20 MW, BRB) como barreras de entrada.

## 4. Top hallazgos del bloque

| # | Severidad | Tipo | Hallazgo |
|---|-----------|------|----------|
| 1 | Crítico | Roto/incompleto | certificacion-leed y /leed son contenido 100% idéntico en dos URLs |
| 2 | Importante | Arquitectura | Falta capa financiera en la entrada comercial a LEED (certificacion-leed y/o hub) |
| 3 | Importante | Arquitectura | 42 manejadoras/3,200 ton A/C en 6 de 9 páginas con mismo significado |
| 4 | Oportunidad | Arquitectura | Clima-extremo es la página más fuerte — modelo a seguir para el resto |
| 5 | Oportunidad | Editorial | Captación pluvial podría generar escepticismo en zona de 75mm/año — matizar |

## 5. Recomendación del bloque

**Tocar primero:** Resolver la duplicación certificacion-leed/hub — darles roles distintos.

**Ya está fuerte:** Clima-extremo.

**Mayor upside comercial:** Agregar argumento financiero (ROI, renta premium, costo vs ahorro) a certificacion-leed. Convertiría LEED de "tema técnico interesante" a "decisión de negocio necesaria".

---

# TOP 10 HALLAZGOS DEL SITIO COMPLETO

### Roto / Incompleto (higiene inmediata)

| # | Severidad | Hallazgo | Ubicación |
|---|-----------|----------|-----------|
| 1 | **Crítico** | Nuestra Historia completamente en lorem ipsum | /nelson/nuestra-historia |
| 2 | **Crítico** | certificacion-leed y /leed son contenido 100% idéntico en dos URLs | Sección LEED |
| 3 | **Importante** | Banner H1 en lorem ipsum en diferencia-nelson | /nelson/diferencia-nelson |
| 4 | **Importante** | Imágenes placeholder (placeholder.svg) en llave-en-mano | /constructora/llave-en-mano |
| 5 | **Importante** | Inconsistencia numérica: 33 vs 30 corporaciones | /nelson/trayectoria vs resto del sitio |

### Territorio / Arquitectura (rediseño conceptual)

| # | Severidad | Hallazgo | Ubicación |
|---|-----------|----------|-----------|
| 6 | **Crítico** | Liderazgo absorbe territorios de diferencia, trayectoria e historia — necesita enfocarse en experiencia de relación | /nelson/liderazgo |
| 7 | **Importante** | 52,200 m² Gulfstream en 7+ páginas con mismo significado, nunca reframed por territorio | Cross-site |
| 8 | **Importante** | Diseño-e-ingeniería: mismos 5 datos 4 veces intra-página + secciones que invaden seguridad y estándares | /constructora/diseno-e-ingenieria |

### Oportunidad editorial (mayor upside comercial)

| # | Severidad | Hallazgo | Ubicación |
|---|-----------|----------|-----------|
| 9 | **Crítico** | Proyectos especializados: 4 historias fascinantes condensadas a 2 líneas. Material crudo extraordinario (terremoto 2010, carritos de golf, puertas antisonido) no llegó al sitio | /constructora/proyectos-especializados |
| 10 | **Importante** | Falta capa financiera en la entrada comercial a LEED (ROI, renta premium, requisitos corporativos) — necesario en certificacion-leed/hub, no en cada subpágina | Sección LEED |

---

# 3 ÁREAS A CORREGIR PRIMERO

**1. Higiene inmediata — resolver lo roto** (máximo impacto, mínimo esfuerzo):
- Nuestra Historia: pasar de lorem ipsum a contenido real.
- Banner H1 en diferencia-nelson: completar.
- certificacion-leed vs /leed: diferenciar roles (una vende la decisión, otra organiza la navegación).
- Placeholder.svg en llave-en-mano: reemplazar con imágenes reales.
- Inconsistencia 33 vs 30 corporaciones: unificar.

**2. Mayor upside comercial — expandir proyectos especializados:**
Los 4 casos tienen narrativas memorables en el material crudo que no llegaron al copy. Si se expanden con las historias completas (terremoto→BRB, carritos de golf con temperatura controlada, puertas antisonido de $30K, colado en un día sin juntas), esta página se convierte en la más diferenciadora del sitio. Ningún competidor en Mexicali puede contar esas historias.

**3. Rediseño arquitectónico — resolver solapamiento de territorios:**
- Liderazgo necesita enfocarse en la experiencia de relación (velocidad, accountability, continuidad), no en repetir todos los datos del sitio.
- Reasignar facts a territorios específicos: "52,200 m² Gulfstream" debería tener un significado distinto según la página (build-to-suit = personalización, ingeniería = complejidad técnica, proyectos especializados = primera implementación BRB). En las demás, solo referencia.
- Llave-en-mano necesita profundidad: specs, disponibilidad, tiempos, tenant improvement.
- Diseño-e-ingeniería necesita eliminar repetición intra-página y dejar seguridad y estándares en sus propias páginas.

---

*Auditoría v0.1 — 2026-04-03. Corregida después de review Codex: llave-en-mano actualizado, absolutos rebajados, tipos de hallazgo separados (roto/arquitectura/editorial), capa financiera LEED concentrada en entrada comercial. Solo diagnóstico. No se modificó ninguna página del sitio, constitución, rúbrica ni critic loop.*
