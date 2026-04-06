# Rúbrica v0 — Auditoría Arquitectónica de Copy para Grupo Nelson

Versión: 0.1  
Fecha: 2026-04-03  
Estado: Operativa para revisión manual-asistida con IA

---

## 1. Objetivo

Esta rúbrica existe para revisar el copy actual del sitio de Grupo Nelson con contexto real del proyecto.

No sirve para "escribir bonito".
Sirve para que la IA funcione como un **arquitecto de comunicación comercial** capaz de:

- detectar valor importante que ya está en los documentos pero no llegó al sitio,
- señalar repetición entre páginas,
- distinguir promesas legítimas de exageraciones,
- descubrir ángulos comerciales no explotados,
- y evaluar si cada página está cumpliendo su territorio.

La primera meta no es reescribir todo.
La primera meta es producir un **diagnóstico arquitectónico confiable**.

---

## 2. Principios rectores

### 2.1 La sección es la brújula

Cada página del sitio tiene una función comercial propia.
La página determina de qué debe hablarse ahí.
La IA no debe usar una sección para volver a contar toda la empresa.

### 2.2 Copy profundo vs. copy superficial

El copy superficial describe hechos visibles.  
El copy profundo comprende el valor latente de esos hechos y comunica esa comprensión con relevancia comercial.

### 2.3 El trabajo del auditor no es redactar primero

Primero diagnostica:

- qué debería comunicar la página,
- qué está comunicando hoy,
- qué valor importante no está explotando,
- qué se está repitiendo,
- y qué promesas están mal planteadas.

Solo después puede sugerir correcciones.

### 2.4 No se vende inventario; se vende capacidad

Cuando el material lo permita, la IA debe subir del dato a la capacidad.

La secuencia mínima es:

`hecho -> problema resuelto -> capacidad demostrada -> significado comercial`

---

## 3. Corpus obligatorio para esta auditoría

La IA debe leer, como mínimo, estos documentos antes de juzgar el sitio:

- `docs/copy/brief-de-cliente-grupo-nelson.md`
- `docs/copy/buyer-persona-para-grupo-nelson.md`
- `docs/estrategia/02-resumen-charlas-con-duenos.md`
- `docs/estrategia/04-temas-comerciales.md`
- `docs/copy/desempaquetado-nelson-desarrolladora.md`
- `docs/copy/constructora/desempaquetado-comercial-baumex.md`
- `docs/copy/constructora/temario-baumex.md`
- `docs/copy/constructora/proyectos-especializados.md`
- `src/app/constructora/**/*.tsx`
- `src/app/nelson/**/*.tsx`

Si el auditor no ha leído ese contexto, su juicio es incompleto.

---

## 4. Inventario provisional de territorios del sitio

Este inventario no es la verdad final.
Es el punto de partida para que la IA no llegue ciega al sitio.

### 4.1 Páginas de Grupo Nelson

| Página | Territorio provisional | Pregunta que debe responder | No debería convertirse en |
|---|---|---|---|
| `/nelson/diferencia-nelson` | La diferencia estructural de Grupo Nelson | ¿Por qué Grupo Nelson no es "otro desarrollador industrial más"? | Una página genérica de "quiénes somos" |
| `/nelson/liderazgo` | Acceso a ownership, permanencia y confianza | ¿Qué significa trabajar con una empresa familiar que sigue operando directamente? | Un organigrama o biografía corporativa |
| `/nelson/trayectoria` | Prueba visual y cuantitativa de permanencia | ¿Qué evidencia dura demuestra que Grupo Nelson lleva décadas resolviendo esto? | Una cronología larga o repetición de liderazgo |
| `/nelson/nuestra-historia` | Origen, continuidad y papel pionero | ¿De dónde viene esta empresa y por qué esa historia importa hoy? | Otra versión de trayectoria o diferencia |

### 4.2 Páginas de Baumex / constructora

| Página | Territorio provisional | Pregunta que debe responder | No debería convertirse en |
|---|---|---|---|
| `/constructora/baumex` | Qué es Baumex y por qué su existencia cambia el valor del grupo | ¿Por qué importa que la constructora sea in-house? | Un resumen genérico de servicios de construcción |
| `/constructora/diseno-e-ingenieria` | Resolución de retos técnicos no estándar | ¿Qué demuestra Baumex cuando la operación exige ingeniería fuera de catálogo? | Una repetición de Baumex o de build-to-suit |
| `/constructora/build-to-suit` | Diseño desde cero para una operación específica | ¿Qué pasa cuando ninguna nave existente sirve y hay que diseñar la tuya? | Otra página de llave en mano |
| `/constructora/llave-en-mano` | Certeza de entrega bajo una sola responsabilidad | ¿Qué gana el cliente al no coordinar múltiples proveedores? | Una página de ingeniería o de build-to-suit |
| `/constructora/proyectos-especializados` | Casos límite, requisitos poco comunes y ejecución singular | ¿Qué tipo de proyectos demuestran que Baumex resuelve casos que no son normales? | Un portafolio genérico |
| `/constructora/estandares-internacionales` | Capacidad de cumplir estándares que resisten auditoría | ¿Por qué una empresa global puede confiar en esta ejecución en Mexicali? | Una página solo de certificaciones |
| `/constructora/portafolio` | Evidencia concreta proyecto por proyecto | ¿Dónde se prueba con casos reales lo que el resto del sitio promete? | Una página institucional |

### 4.3 Páginas LEED

| Página | Territorio provisional | Pregunta que debe responder | No debería convertirse en |
|---|---|---|---|
| `/constructora/certificacion-leed` | Entrada comercial al valor de LEED | ¿Por qué LEED importa como decisión de negocio y compliance? | Una ficha técnica fría |
| `/constructora/leed` | Hub de arquitectura LEED | ¿Cuáles son las dimensiones del valor LEED que Nelson/Baumex puede ejecutar? | Duplicado de certificacion-leed |
| `/constructora/leed/calidad-ambiental` | Calidad interior para operación y personas | ¿Cómo mejora el desempeño operativo y humano? | Una lista abstracta de beneficios |
| `/constructora/leed/clima-extremo` | Desempeño en clima desértico | ¿Cómo se diseña para calor extremo sin castigar operación? | Una página genérica de sustentabilidad |
| `/constructora/leed/energia-atmosfera` | Eficiencia energética medible | ¿Cómo se convierte LEED en ahorro y performance? | Otra versión de clima extremo |
| `/constructora/leed/materiales-recursos` | Trazabilidad, residuos y abastecimiento | ¿Qué demuestra rigor de ejecución y compliance en materiales? | Un checklist normativo sin valor comercial |
| `/constructora/leed/proceso-certificacion` | Proceso, coordinación y auditoría | ¿Cómo se llega a la certificación sin improvisar? | Una página solo administrativa |
| `/constructora/leed/sistemas-operativos` | Operación inteligente y monitoreo | ¿Cómo se conecta la infraestructura con operación continua y reporting? | Una página demasiado técnica y sin traducción comercial |
| `/constructora/leed/sitios-sostenibles` | Sitio, agua e infraestructura eficiente | ¿Qué valor de operación y costo nace desde el sitio mismo? | Repetición de energía o materiales |

---

## 5. Reglas de la auditoría arquitectónica

### Regla 1

La página manda.
Cada juicio debe hacerse contra el territorio de esa página, no contra la empresa entera.

### Regla 2

Toda página debe responder una pregunta comercial clara del comprador.
Si la página no responde nada específico, su territorio es débil.

### Regla 3

No basta con encontrar facts.
El auditor debe elevarlos:

`fact -> problema resuelto -> capacidad demostrada -> significado comercial`

Si el copy se queda en el primer nivel, es superficial.

### Regla 4

Repetir un dato no está prohibido.
Lo que está prohibido es repetirlo sin cambiar su significado.

Un mismo fact solo puede aparecer en dos páginas si en cada una demuestra algo distinto.

### Regla 5

Una página no debe cargar todos los temas valiosos del proyecto.
Debe defender una tesis principal y, como máximo, unas pocas tesis secundarias.

### Regla 6

La IA debe distinguir entre:

- `descripción de categoría`,
- `prueba de capacidad`,
- `promesa comercial`,
- `lectura estratégica del valor`.

Si todo el copy se queda en categoría o inventario, hay hallazgo.

### Regla 7

Las charlas con dueños contienen valor oculto.
Si los dueños narran algo como normal, pero en realidad es raro, difícil o comercialmente potente, la IA debe marcarlo como oportunidad.

### Regla 8

No se puede presentar como hecho lo que apenas es hipótesis.
La promesa debe ser legítima.

Ejemplo correcto:

`Hemos demostrado capacidad para incorporar estándares nuevos cuando el proyecto lo exige.`

Ejemplo incorrecto:

`Podemos hacer cualquier certificación que exista.`

### Regla 9

Cuando una página habla de ingeniería, no debe limitarse a enlistar disciplinas.
Debe mostrar qué tipo de problemas técnicos se han resuelto y qué confianza genera eso.

### Regla 10

Cuando una página habla de trayectoria, no debe convertirse en nostalgia.
Debe demostrar permanencia, validación y confianza transferible al comprador actual.

### Regla 11

Cuando una página habla de ownership o liderazgo, no debe sonar sentimental.
Debe traducirse en velocidad de decisión, accountability y relación de largo plazo.

### Regla 12

El auditor debe señalar no solo lo que está mal, sino también lo que falta.

Un ángulo valioso ausente es un hallazgo.

---

## 6. Patrones para descubrir valor latente

Cuando aparezcan estos patrones en los documentos, la IA debe considerarlos candidatos a valor comercial:

### Patrón A — Rareza normalizada por el dueño

Cuando el dueño cuenta algo como si fuera normal, pero en realidad muy pocos competidores podrían decirlo.

Ejemplo:

- 60+ años en el mercado
- primera maquiladora de Mexicali
- 80% repeat business
- acceso directo a ownership

### Patrón B — Problema técnico no estándar ya resuelto

Cuando los documentos muestran exigencias fuera del catálogo normal de una constructora.

Ejemplo:

- pilas profundas en suelo colapsable,
- BRB antisísmico,
- puente de 95 metros,
- túnel de viento de 3,000 HP,
- subestaciones de 20 MW.

Esto no solo prueba ejecución.
Prueba criterio técnico, coordinación e ingeniería aplicada.

### Patrón C — Primera vez resuelta con éxito

Cuando la empresa enfrentó una combinación nueva de escala, estándar o complejidad y la ejecutó.

Esto puede demostrar:

- capacidad de aprendizaje,
- adaptabilidad,
- seguridad para asumir retos nuevos,
- y madurez operativa.

### Patrón D — Validación por terceros exigentes

Cuando el valor no lo declara la empresa sola, sino que lo valida:

- un cliente Fortune 500,
- una auditoría,
- una certificación,
- una calificación externa,
- o una relación de décadas que siguió renovándose.

### Patrón E — Integración que reduce fricción

Cuando el grupo elimina handoffs, intermediarios o capas innecesarias.

Ejemplo:

- desarrollador + constructora in-house,
- un solo contrato,
- decisiones con ownership,
- ejecución coordinada.

### Patrón F — Infraestructura que transfiere confianza

Cuando un dato técnico no es solo una especificación, sino una razón para confiar.

Ejemplo:

- tanque contraincendio de 360,000 galones,
- subestación dedicada,
- compliance FM Global,
- récord de seguridad.

---

## 7. Ejemplo de lectura correcta para la sección de ingeniería

### Lectura superficial

`Tenemos seis disciplinas de ingeniería.`

### Lectura mejorada

`Resolvemos exigencias técnicas que salen del estándar normal de una nave industrial.`

### Lectura profunda

`Cuando una operación exige una combinación no rutinaria de escala, diseño estructural, potencia eléctrica, clima extremo, sustentabilidad o integración de sistemas, Baumex puede investigar, estructurar y ejecutar la solución con un equipo multidisciplinario propio.`

### Qué hechos pueden sostener eso

- nave de 550K ft² para Gulfstream,
- LEED Gold,
- 20 MW,
- pilas profundas,
- BRB antisísmico,
- puente de 95 m,
- túnel de viento de 3,000 HP.

### Qué NO debe hacer la IA

- repetir que "Baumex construye naves industriales",
- volver a contar toda la trayectoria,
- convertir la sección en lista de disciplinas sin significado,
- o exagerar con promesas universales no sustentadas.

---

## 8. Tipos de hallazgo que debe emitir la auditoría

### H1 — Territorio mal resuelto

La página no comunica bien la función comercial que le corresponde.

### H2 — Valor importante no explotado

El contexto del proyecto contiene un ángulo o prueba potente que la página no está usando.

### H3 — Repetición sin cambio de significado

La página repite facts o ideas que otra página ya usa, sin darles una función nueva.

### H4 — Promesa débil, inflada o mal sustentada

La página promete más de lo que los facts permiten sostener.

### H5 — Copy superficial

La página describe categoría, servicio o inventario, pero no comunica capacidad ni significado comercial.

### H6 — Valor enterrado

La página sí tiene el fact correcto, pero lo presenta de forma tímida, secundaria o poco legible.

### H7 — Territorio invadido

La página está hablando de cosas que deberían vivir principalmente en otra página.

---

## 9. Proceso de uso de la rúbrica

### Paso 1 — Leer el contexto completo

La IA primero lee el corpus obligatorio.
No debe comenzar con el copy del sitio.

### Paso 2 — Inventariar páginas y sus territorios

La IA toma el inventario de la sección 4 y lo usa como hipótesis de trabajo.
Si detecta que una página debería tener otro territorio, debe decirlo explícitamente.

### Paso 3 — Auditar página por página

Para cada página, la IA debe responder:

- cuál es su territorio,
- qué pregunta del comprador debe responder,
- qué facts del corpus son más relevantes para esta página,
- qué capacidades demuestran esos facts,
- qué comunica hoy el copy,
- qué no está comunicando,
- qué se repite con otras páginas,
- y qué debería dejar de decir.

### Paso 4 — Hacer una pasada cross-page

La IA compara el sitio completo y detecta:

- facts sobreusados,
- temas repetidos,
- páginas intercambiables,
- territorios poco diferenciados,
- y vacíos de comunicación.

### Paso 5 — Hacer una pasada de descubrimiento de valor

La IA revisa todo el corpus buscando:

- hechos valiosos que no aparecen en ninguna página,
- ángulos latentes no explotados,
- y pruebas importantes que hoy no transfieren confianza.

### Paso 6 — Emitir prioridades

No basta con listar hallazgos.
La IA debe priorizar:

- `crítico`,
- `importante`,
- `oportunidad`.

---

## 10. Formato esperado del reporte

### 10.1 Por página

Para cada página:

- `Territorio esperado`
- `Pregunta del comprador`
- `Facts más valiosos para esta página`
- `Qué comunica hoy`
- `Qué valor está subexplotado`
- `Qué se repite con otras páginas`
- `Qué promesas están flojas`
- `Qué debería dominar esta página`
- `Hallazgos priorizados`

### 10.2 Reporte global del sitio

Al final:

- `Temas mejor resueltos del sitio`
- `Temas más repetidos`
- `Facts más sobreusados`
- `Facts valiosos que no están siendo usados`
- `Páginas con territorio débil`
- `Páginas con mayor potencial de mejora`
- `Los 10 hallazgos más importantes del sitio`

---

## 11. Prompt base v0 para ejecutar la auditoría

```text
Actúa como arquitecto de comunicación comercial, no como redactor genérico.

Tu trabajo es auditar el copy del sitio de Grupo Nelson con contexto completo del proyecto.

Antes de juzgar el sitio debes leer:
- docs/copy/brief-de-cliente-grupo-nelson.md
- docs/copy/buyer-persona-para-grupo-nelson.md
- docs/estrategia/02-resumen-charlas-con-duenos.md
- docs/estrategia/04-temas-comerciales.md
- docs/copy/desempaquetado-nelson-desarrolladora.md
- docs/copy/constructora/desempaquetado-comercial-baumex.md
- docs/copy/constructora/temario-baumex.md
- los archivos del sitio en src/app/constructora y src/app/nelson

Reglas:
- La sección es la brújula.
- Evalúa cada página según su territorio, no según la empresa completa.
- Convierte cada fact relevante en: hecho -> problema resuelto -> capacidad demostrada -> significado comercial.
- No confundas descripción con valor comercial.
- No marques repetición solo porque un dato aparezca dos veces; márcala cuando aparezca con el mismo significado.
- Detecta valor importante presente en las charlas y documentos que no llegó al sitio.
- Distingue promesa legítima de exageración.
- Señala cuando una página invade el territorio de otra.
- No reescribas todavía el sitio completo. Primero diagnostica.

Quiero dos salidas:

1. Auditoría por página:
- territorio esperado
- pregunta del comprador
- facts más relevantes
- qué comunica hoy
- qué falta
- qué se repite
- qué valor está enterrado
- hallazgos priorizados

2. Auditoría global del sitio:
- temas mejor resueltos
- temas repetidos
- facts sobreusados
- facts valiosos ausentes
- páginas con territorio débil
- top 10 hallazgos del sitio

Severidad:
- crítico
- importante
- oportunidad

No empieces corrigiendo redacción.
Empieza descubriendo si el sitio está comunicando bien el valor real de Grupo Nelson.
```

---

## 12. Uso recomendado inmediato

Primera corrida:

- auditar todo `src/app/nelson`
- auditar todo `src/app/constructora`
- dejar `LEED` dentro de la misma corrida, pero marcando explícitamente si hay solapamiento entre hub, landing y subpáginas

Si la salida es demasiado grande, dividir en tres bloques:

- `Grupo Nelson institucional`
- `Baumex / constructora`
- `LEED`

---

## 13. Qué NO resuelve esta versión

Esta rúbrica todavía no:

- automatiza generación de copy,
- no reemplaza al sistema maestro,
- no decide arquitectura final del corpus,
- y no sustituye revisión humana.

Pero sí resuelve algo urgente:

permite usar la IA para revisar el sitio actual con criterio arquitectónico y descubrir valor real antes de seguir escribiendo.
