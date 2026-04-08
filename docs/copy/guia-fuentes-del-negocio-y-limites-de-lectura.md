# Guia — Fuentes del Negocio y Limites de Lectura

## Para que existe este documento

Esta guia existe para fijar una regla que el sistema de copy necesita tener estable:

**hablar del negocio no basta para ser fuente del negocio.**

Su objetivo es evitar cuatro confusiones recurrentes:

- confundir material bruto del negocio con interpretacion editorial
- confundir storytelling del cliente con facts canonicos ya resueltos
- meter research externo en tasks que deberian leer solo fuente del negocio
- acoplar roles hermanos que deben trabajar de forma independiente

---

## Regla central

En este sistema, una **fuente del negocio** es material donde el negocio habla de si mismo o deja evidencia directa de lo que hace, tiene, vende, construye, ha vivido o afirma.

Si un documento ya resume, interpreta, organiza, traduce, compara, audita o editorializa ese material, entonces **ya no es fuente del negocio**. Es material derivado.

Si un documento compara al negocio con el mercado o explica conceptos usando fuentes externas, entonces **es research externo**, no fuente del negocio.

---

## Taxonomia oficial

### 1. Fuentes del negocio

Son los materiales que el sistema debe tratar como input primario.

Ejemplos:

- entrevistas con el cliente
- meets con transcripciones
- notas tomadas de conversaciones con el cliente
- cuestionarios contestados por el cliente
- documentos enviados por el cliente
- specs tecnicas
- portafolios
- temarios
- desempaquetados basados directamente en lo que el cliente dijo o entrego

### 2. Storytelling del cliente

Llamamos **storytelling del cliente** al material donde el cliente narra su propio negocio: su historia, su forma de explicarse, sus diferenciales, sus problemas, sus claims, sus prioridades y su lenguaje.

El storytelling del cliente es **fuente del negocio**, no porque ya sea verdad canonica perfecta, sino porque es la forma primaria en la que el negocio se cuenta a si mismo.

Sus fuentes habituales son:

- entrevistas
- meets
- transcripciones
- notas
- cuestionarios
- documentos descriptivos enviados por el cliente

Regla importante:

- una transcripcion puede ser fuente del storytelling del cliente
- pero no todo lo dicho en una transcripcion se convierte automaticamente en fact confirmado

### 3. Material derivado interno

Es material producido por el sistema de copy o por el equipo para ordenar, interpretar, sintetizar, clasificar o fijar criterio.

Ejemplos:

- buyer persona
- aclaraciones canonicas
- temas comerciales
- vocabulario estrategico
- angle briefs
- auditorias
- memorias de trabajo
- prompts
- workflows
- reglas de copywriting

Estos documentos pueden ser utiles, pero **no son fuente del negocio**.

### 4. Research externo

Es material comparativo, conceptual o contextual que no viene del negocio mismo.

Ejemplos:

- benchmarks
- comparativos de industria
- documentos para aclarar conceptos
- research sobre categorias, modelos o mercado

El research externo puede ayudar a pensar mejor, pero **no debe disfrazarse de fuente del negocio**.

---

## Regla para documentos mixtos

Si un documento mezcla fuente primaria con interpretacion, la regla por defecto es esta:

**se clasifica como material derivado, no como fuente del negocio.**

Solo se trata como fuente del negocio si:

- su contenido es mayoritariamente bruto o declarativo del cliente
- la intervencion editorial es minima
- y sigue siendo posible rastrear con claridad que partes vienen del negocio y cuales no

En caso de duda, usar siempre la clasificacion mas estricta.

---

## Independencia entre roles hermanos

`Context Curator` y `Value Finder` son roles hermanos.

Eso significa:

- ambos leen fuente del negocio
- ninguno depende del output del otro
- ninguno debe usar el reporte del otro como input de trabajo
- al redactar sus docs y tasks, no deben mencionarse mutuamente como prerequisito, apoyo o referencia

La independencia no es un detalle de estilo.
Es una regla de diseno para obtener lecturas distintas sobre el mismo material.

Los roles posteriores si pueden consumir uno, otro o ambos outputs, segun la necesidad del sistema.

---

## Criterio de lectura por rol

### `Context Curator`

Lee solo fuente del negocio.

No debe leer:

- material derivado interno
- research externo
- reportes de otros roles

### `Value Finder`

Lee solo fuente del negocio.

No debe leer:

- material derivado interno
- research externo
- reportes de otros roles

### Roles posteriores

Roles como `Angle Architect`, `Narrative Copywriter` y reviewers pueden leer material derivado o outputs de otros roles si el workflow lo pide.

Pero esa libertad posterior no cambia la regla de independencia de los roles de lectura primaria.

---

## Clasificacion de documentos de este proyecto

| Documento | Clasificacion | Entra como fuente del negocio | Nota |
| --- | --- | --- | --- |
| `docs/copy/brief-de-cliente-grupo-nelson.md` | Storytelling del cliente | Si | El nombre "brief" es legacy; conceptualmente debe tratarse como storytelling del cliente |
| `docs/meetings/...` | Fuente del negocio | Si | Transcripciones y notas de conversacion |
| `docs/enviados-por-susana/contexto-info-susana.md` | Fuente del negocio | Si | Material descriptivo enviado por cliente o contacto del cliente |
| `docs/specs/...` | Fuente del negocio | Si | Especificaciones y evidencia tecnica |
| `docs/copy/constructora/portafolio-proyectos-baumex.md` | Fuente del negocio | Si | Portafolio descriptivo del negocio |
| `docs/copy/temario-desarrolladora-grupo-nelson.md` | Fuente del negocio | Si | Material tematico del negocio |
| `docs/copy/desempaquetado-nelson-desarrolladora.md` | Fuente del negocio | Si, si sigue anclado a fuente primaria | Si se editorializa demasiado, deja de contar como fuente |
| `docs/copy/buyer-persona-para-grupo-nelson.md` | Material derivado interno | No | Sintesis del sistema sobre el comprador |
| `docs/copy/aclaraciones-canonicas.md` | Material derivado interno | No | Canon validado; no es fuente bruta |
| `docs/estrategia/04-temas-comerciales.md` | Material derivado interno | No | Framing estrategico |
| `docs/estrategia/05-vocabulario-estrategico.md` | Material derivado interno | No | Codificacion editorial |
| `docs/aprendizajes/clarificacion-turnkey-vs-bts.md` | Research externo | No | Aclaracion conceptual basada en fuentes externas |
| `docs/copy/constructora/benchmark-copy-constructoras-de-naves-industriales-europeas.md` | Research externo | No | Comparativo externo |
| `docs/copy/constructora/ingenieria/benchmark-ingenieria-constructoras-europeas.md` | Research externo | No | Comparativo externo |

---

## Decision de naming

Cuando un documento recoja como el cliente cuenta su negocio, preferimos llamarlo **storytelling del cliente** y no **brief del cliente**.

La razon es simple:

- `brief del cliente` se parece demasiado a `angle brief`
- `storytelling del cliente` deja claro que habla el negocio, no el sistema

Mientras existan archivos con naming viejo, la clasificacion correcta manda sobre el nombre del archivo.

---

## Orden recomendado de lectura

Para entender el sistema de copy en orden:

1. `docs/copy/constitucion-v0-copy-brandpetram.md`
2. `docs/copy/guia-fuentes-del-negocio-y-limites-de-lectura.md`
3. `docs/copy/workflow-roles-para-crear-copy.md`
4. documentos de roles y tasks

No hace falta renombrar todos los archivos con prefijos numericos.
El orden debe vivir en un indice de lectura, no en renombres masivos.
