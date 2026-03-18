# Qué estamos haciendo para definir los temas de cada sección y crear el contenido comercial de cada página

## El problema

El sitio web de Grupo Nelson tiene muchas páginas que **están vacías o solo tienen componentes visuales sin contenido real**. Páginas como `/nelson/diferencia-nelson`, `/nelson/liderazgo`, `/constructora/baumex`, entre otras, necesitan comunicación comercial que refleje la realidad de la empresa — no frases genéricas.

Pero no podemos sentarnos a escribir contenido comercial directamente. Si lo hiciéramos, terminaríamos con textos vacíos tipo "somos líderes con más de 25 años de experiencia", que cualquier competidor podría decir. Necesitamos un método.

## El método

El proceso tiene 4 pasos claros, en orden estricto:

### Paso 1: Definir los temas de cada página

Antes de escribir una sola palabra de contenido, necesitamos saber **de qué vamos a hablar** en cada página. Esto se hace en `/proyecto/contenidos`, que es un dashboard interno donde definimos:

- Qué páginas existen en el sitio
- En qué estado está cada una (con contenido, stub, vacía, etc.)
- **Qué temas/subjects se van a desarrollar dentro de cada página**
- Cuántas palabras aproximadas tendrá cada tema
- Cuántas fotos necesita
- Notas adicionales sobre el enfoque

Cada página puede tener 1, 2, 3 o más temas. Cada tema tiene un título, una descripción corta de qué se va a decir, y un estimado de extensión.

### Paso 2: Recolectar material crudo (Fase 1)

Una vez que sabemos de qué temas vamos a hablar, necesitamos **materia prima real** para alimentar esos temas. Esto significa:

- Recibir capturas de pantalla, presentaciones internas, reportes, minutas
- Transcribir fielmente todo el material sin interpretarlo
- Documentarlo en un archivo centralizado

**Regla de oro: Anotar, no interpretar.** En esta fase solo se recolecta. No se redacta nada comercial.

### Paso 3: Desempaquetar comercialmente (Fase 2)

Con todo el material crudo sobre la mesa, ahora sí se interpreta:

- Agrupar la información cruda por temas
- Transformar datos operativos en mensajes comerciales
- Encontrar los diferenciadores reales (los detalles que un competidor no puede copiar con una frase bonita)
- Alinear con el vocabulario estratégico y los 10 temas comerciales del proyecto

### Paso 4: Escribir el contenido final

Solo después de los 3 pasos anteriores se redacta el contenido que irá en la página.

## Ejemplo real: Baumex Constructora

Este proceso ya se aplicó para la página `/constructora/baumex`. Aquí está el recorrido completo:

### Lo que hicimos en el Paso 1 (Definir temas)

En `/proyecto/contenidos` definimos que la página `/nelson/diferencia-nelson` tendría 3 temas:

1. **Owner Involvement: Hablas directo con los dueños** — A diferencia de competidores donde tratas con ejecutivos rotativos, en Grupo Nelson los dueños están involucrados directamente. Empresa familiar con estructura plana = decisiones rápidas. (~250 palabras, 1 foto)

2. **Pioneros desde 1965: La empresa más antigua del sector en Mexicali** — Grupo Nelson fundó la industria maquiladora en Mexicali. 60 años de experiencia no se improvisan. Mientras otros llevan 15-20 años, Nelson lleva 60. (~250 palabras, 1 foto)

3. **Constructora in-house: Build-to-suit con experiencia técnica real** — Baumex, la constructora propia, permite construir naves a la medida con control total del proceso. No subcontratan la construcción. Esto se traduce en plazos más cortos y calidad asegurada. (~250 palabras, 1 foto)

### Lo que hicimos en el Paso 2 (Recolectar material crudo)

Para alimentar el tema de Baumex Constructora, creamos dos documentos:

- **`docs/plan-para-recabar-info-de-constructora-baumex-y-posteriormente-crear-contenido-comercial.md`** — Define la estrategia de recolección en dos fases.
- **`docs/temario-sobre-baumex-constructora.md`** — El archivo donde se vació todo el material crudo.

Recibimos capturas de pantalla de presentaciones internas y reportes semanales de obra (Weekly Reports). De ahí extrajimos 31 bloques de información cruda (`id-info-1` a `id-info-31`) que incluyen:

- Capacidad In-House, 25+ años de experiencia, certificación LEED
- Portafolio de 4M+ pies cuadrados, 33 corporaciones internacionales
- ~35 proyectos detallados con superficies y fechas
- Organigrama institucional completo
- Manual de Seguridad (HSE) de 18 capítulos
- Certificación ISN con calificación "Recomendado" por Honeywell
- Gestión de obra: Gantt charts, Critical Task Reports, Submittals, Long Lead Items
- Minutas de juntas de campo y permisos de trabajo diario
- Weekly Reports con 13 filminas de evidencia de seguridad operativa
- Métricas: 1,092,745 horas hombre trabajadas, 400+ trabajadores simultáneos, coordinación de 45+ subcontratistas, cero muertes

Todo esto fue anotado fielmente, sin darle ángulo comercial.

### Lo que hicimos en el Paso 3 (Desempaquetar) ✅

El desempaquetado se completó en `docs/fase-2-desempaquetado-comercial-baumex.md`. Los 31 bloques de material crudo se clasificaron en 6 temas comerciales:

- **Tema A:** Capacidad In-House y Ventaja Estructural
- **Tema B:** Track Record — Portafolio y Escala de Operación
- **Tema C:** Gestión de Proyecto — Control Administrativo y Ruta Crítica
- **Tema D:** Seguridad Industrial — Cultura de Cero Accidentes
- **Tema E:** Certificaciones y Validación por Terceros
- **Tema F:** Ejecución Completa — De Terracerías a Acabados

Además, se entrevistó a Armando Wilhelmy (Director de Construcción, 12 marzo 2026) para alimentar un **Tema 7: Proyectos Especializados** con material de: puente vehicular Skyworks, Gulfstream 550K (LEED Gold, BRB, FM), túnel de viento Honeywell, planta Deacero, y molino FAPSA.

Todos estos temas se formalizaron como topics en el dashboard `/proyecto/contenidos`.

### Paso 3.5: Investigación de copywriting (nuevo) ✅

Antes de escribir el copy, se realizó una investigación profunda sobre mejores prácticas de copywriting B2B industrial. El reporte está en `docs/research-copywriting-b2b-industrial.md` y contiene:

- **12 reglas de copywriting** concretas para Grupo Nelson
- **24 frases modelo** listas para usar con second-person imperative + keywords
- **Benchmarking** de 20+ sitios de competidores internacionales (Prologis, Goodman, Segro, Panattoni, VESTA, Pimsa, Clayco, Turner)
- **Anti-patrones** — frases prohibidas y clichés a evitar
- **Guía SEO-GEO** — cómo integrar keywords para Google Y para IA (ChatGPT, Perplexity)

Las reglas más importantes son:

1. **Second-Person Imperative** como modo primario — "Escala tu operación" en vez de "Te ayudamos a escalar"
2. **Datos verificables siempre** — "52,200 m² para Gulfstream" en vez de "gran capacidad"
3. **Test del competidor** — si Yamsa puede decir lo mismo, reescribir
4. **Cero clichés** — "solución integral", "líderes en", "calidad total" están prohibidas
5. **Keywords en frases imperativas** — "Construye tu nave industrial en Mexicali con estándares internacionales"

### Paso 4: Escribir el copy directo en las páginas (actual)

El copy se escribe **directamente en cada página del sitio web** usando elementos HTML básicos (h1, h2, h3, p) a full width. No se escribe en un doc aparte.

**¿Por qué directo en la página y no en un documento?**

- Se ve en contexto real del sitio, no aislado en un markdown
- Se puede evaluar inmediatamente si el largo y la jerarquía funcionan
- El cliente (Grupo Nelson) puede revisarlo en el navegador
- Cuando el copy esté aprobado, se mueve a componentes con diseño

**¿Cómo funciona?**

- Si la página ya tiene componentes (status "con-componentes"), el copy en HTML básico se coloca **encima** de los componentes existentes como contenido de referencia
- Si la página es stub o no existe, el copy se pone directo como contenido principal
- Cada página sigue la estructura: Hero (h1 imperativo + keyword) → Subtítulo (dato duro) → Proof Bar (métricas) → Body (alternando imperativo + datos + narrativa) → CTA
- Se aplican las 12 reglas de copywriting del research en cada texto

### Paso 5: Montar componentes con diseño (siguiente)

Una vez aprobado el copy, se seleccionan componentes de brandpetram y se sustituye el HTML básico por componentes reales con el texto aprobado.

---

## Resumen del proceso completo

| Paso | Descripción | Estado |
|------|-------------|--------|
| 1 | Definir temas por página en `/proyecto/contenidos` | ✅ Completado |
| 2 | Recolectar material crudo (Fase 1 — esponja) | ✅ Completado |
| 3 | Desempaquetar comercialmente (Fase 2 — ángulo comercial) | ✅ Completado |
| 3.5 | Investigación de copywriting B2B industrial | ✅ Completado |
| 4 | Escribir copy directo en las páginas (HTML básico) | 🔄 En progreso |
| 5 | Montar componentes con diseño | ⏳ Pendiente |

## Por qué este método funciona

- **No se inventa contenido** — se extrae de evidencia real
- **No se pierde nada** — la Fase 1 fuerza a documentar cada detalle antes de filtrar
- **Los diferenciadores son concretos** — no frases genéricas, sino datos que el competidor no puede replicar
- **Es repetible** — el mismo proceso se puede aplicar para cada página vacía del sitio
- **El copy se valida en contexto** — se escribe directo en la página, no en un doc aislado
- **Las reglas de copywriting están documentadas** — no se escribe "de oído", se siguen 12 reglas basadas en investigación

## Dónde ver el estado actual de todas las páginas

En el dashboard interno: `/proyecto/contenidos`

Ahí se ve qué páginas tienen contenido, cuáles están vacías, cuáles ya tienen sus temas definidos, y cuántos topics tiene cada una.
