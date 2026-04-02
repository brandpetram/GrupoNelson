# Por qué eliminamos algunas secciones del menú de navegación

## Contexto

Al mapear todas las URLs del sitio web de Grupo Nelson contra los 10 temas comerciales definidos en `4-los-10-temas-comerciales-de-grupo-nelson.md`, descubrimos que dos secciones del menú principal — **Constructora** y **Experiencia** — tenían un solapamiento significativo. Varias páginas de Experiencia eran esencialmente la misma página que ya existía en Constructora, pero con otro nombre.

Este documento explica el diagnóstico, el racional de la decisión y los cambios realizados.

---

## El diagnóstico: páginas espejo

El menú tenía 5 secciones principales: Nosotros, Parques, Constructora, Experiencia, Recursos.

Al poner Constructora y Experiencia lado a lado, el solapamiento era evidente:

```
CONSTRUCTORA                          EXPERIENCIA
────────────────────────────          ────────────────────────────
Baumex Constructora            ←──→  Construcción Propia
"Qué es nuestra constructora"        "Ventaja de tener constructora"

Diseño e Ingeniería            ←──→  Ingeniería Innovadora
"El servicio que ofrecemos"           "La capacidad que tenemos"

Certificación LEED             ←──→  LEED y Sustentabilidad
+ 7 sub-páginas detalladas            Una página sola

Estándares Internacionales     ←──→  Cumplimiento Global
"Códigos que seguimos"                "Estándares que cumplimos"

                               ←──→  Certificaciones de Calidad
                                      "Certificaciones obtenidas"
```

De las 6 páginas que tenía Experiencia, **5 eran espejos** de páginas de Constructora. Solo una era única:

- **Excelencia Operativa** — Sobre la operación de los parques (seguridad, mantenimiento, uptime, continuidad operativa). Esto no tiene nada que ver con la constructora. Corresponde al tema comercial #8: Operational Reliability.

## Por qué existía el solapamiento

El menú se diseñó pensando en **estructura de navegación** — qué esperaría ver un visitante en cada sección. Los 10 temas comerciales se diseñaron pensando en **estrategia de comunicación** — qué necesita decir la empresa. Son dos lógicas diferentes.

Cuando se creó el menú, la intención era:

- **Constructora** = Lo que hacemos (servicios de construcción)
- **Experiencia** = Qué tan buenos somos (prueba de capacidades)

Pero en la práctica, "qué tan buenos somos construyendo" se termina respondiendo con las mismas cosas que "qué construimos y cómo": los mismos estándares, las mismas certificaciones, la misma ingeniería. El ángulo cambia ("ofrecemos diseño e ingeniería" vs "tenemos capacidad de ingeniería innovadora") pero el contenido de fondo es el mismo.

Un visitante que lee "Diseño e Ingeniería" bajo Constructora y luego ve "Ingeniería Innovadora" bajo Experiencia va a pensar que son la misma página. Y en esencia, lo son.

## Referencia: los 10 temas comerciales y dónde vivían

| # | Tema Comercial | Página en Constructora | Página espejo en Experiencia |
|---|---------------|----------------------|---------------------------|
| 1 | World-Class | — | — |
| 2 | Turnkey Solutions | Llave en Mano | — |
| 3 | Build-to-Suit | Build-to-Suit | — |
| 4 | Industrial Excellence | Baumex Constructora | Construcción Propia |
| 5 | Engineering Innovation | Diseño e Ingeniería | Ingeniería Innovadora |
| 6 | Trusted Partner | — | — |
| 7 | Sustainable Design | Certificación LEED + 7 sub-páginas | LEED y Sustentabilidad |
| 8 | Operational Reliability | — | Excelencia Operativa (ÚNICO) |
| 9 | Proven Experience | — | — |
| 10 | Global Standards | Estándares Internacionales | Cumplimiento Global + Certificaciones |

Los temas 1, 6 y 9 viven en **Nosotros** (Diferencia Nelson, Liderazgo, Nuestra Historia, Trayectoria). No se ven afectados por este cambio.

## Las opciones que evaluamos

### Opción A: Eliminar Experiencia por completo

Redistribuir Excelencia Operativa a Parques. Eliminar las demás páginas espejo. El menú queda con 4 items: Nosotros, Parques, Constructora, Recursos.

**Ventaja:** Simple, sin redundancia.
**Desventaja:** Perder un item del menú principal puede hacer que el sitio se vea menos robusto. Además, "Experiencia" es un concepto valioso que transmite trayectoria.

### Opción B: Redefinir Experiencia como "la prueba"

En lugar de repetir capacidades (que ya están en Constructora), hacer que Experiencia sea sobre **evidencia y resultados demostrados**:

- **Excelencia Operativa** — Lo único que no tiene espejo. Operación de parques, seguridad 24/7, mantenimiento, uptime.
- **Casos de Éxito** — Mover desde Recursos. Es literalmente experiencia demostrada. Historias de Gulfstream, Honeywell, Interiores Aéreos.
- **Certificaciones Obtenidas** — No "qué estándares seguimos" (eso ya está en Constructora) sino "qué certificaciones hemos ganado" — una lista concreta de logros verificables.

Las páginas espejo se eliminan:
- LEED y Sustentabilidad → redirige a `/constructora/certificacion-leed` (que ya tiene 7 sub-páginas completas)
- Cumplimiento Global → se absorbe en `/constructora/estandares-internacionales`
- Construcción Propia → se absorbe en `/constructora/baumex`
- Ingeniería Innovadora → se absorbe en `/constructora/diseno-e-ingenieria`

**Ventaja:** El menú sigue teniendo 5 secciones. Experiencia deja de ser un espejo y tiene un propósito claro: "no te decimos qué hacemos, te demostramos qué hemos logrado."
**Desventaja:** Requiere redefinir la sección, no solo podar.

### Opción C: Fusionar Constructora + Experiencia

Un solo menú más grande con 3 sub-columnas: Servicios, Calidad, Resultados.

**Ventaja:** Todo en un lugar.
**Desventaja:** El flyout quedaría muy cargado. Y se pierde la distinción útil entre "lo que hacemos" y "lo que hemos logrado".

## Decisión: Opción B

Elegimos la Opción B porque:

1. **No pierdes peso visual** — El menú sigue teniendo 5 secciones. Un sitio web con 5 secciones principales se ve más completo que uno con 4.

2. **Eliminas la redundancia real** — Las 5 páginas espejo desaparecen. No hay dos páginas que digan lo mismo con diferentes palabras.

3. **Experiencia tiene un propósito claro y diferente** — Constructora dice "esto es lo que hacemos y cómo lo hacemos". Experiencia dice "esto es lo que hemos logrado y cómo lo demostramos". Son complementarios, no redundantes.

4. **Casos de Éxito encaja mejor aquí que en Recursos** — Un caso de éxito de Gulfstream o Honeywell es experiencia comprobada, no un "recurso" para descargar.

5. **Es coherente con la estrategia de repetición** — Las mismas ideas centrales (estándares, calidad, trayectoria) siguen apareciendo en múltiples páginas, pero ahora desde ángulos genuinamente diferentes: Constructora las presenta como servicios que ofreces, Experiencia las presenta como resultados que ya obtuviste.

## Antes y después

### Experiencia ANTES (6 páginas, 5 espejos)

| Columna | Página | Problema |
|---------|--------|----------|
| Capacidades | Construcción Propia | Espejo de Baumex Constructora |
| Capacidades | Ingeniería Innovadora | Espejo de Diseño e Ingeniería |
| Capacidades | Excelencia Operativa | ÚNICO — se conserva |
| Estándares | LEED y Sustentabilidad | Espejo de Certificación LEED (que tiene 7 sub-páginas) |
| Estándares | Cumplimiento Global | Espejo de Estándares Internacionales |
| Estándares | Certificaciones de Calidad | Variante de Estándares Internacionales |

### Experiencia DESPUÉS (3 páginas, 0 espejos)

| Columna | Página | Propósito |
|---------|--------|-----------|
| Resultados | Excelencia Operativa | Operación de parques: seguridad, mantenimiento, uptime |
| Resultados | Casos de Éxito | Historias concretas: Gulfstream, Honeywell, Interiores Aéreos |
| Resultados | Certificaciones Obtenidas | Lista verificable de logros: LEED, FM Global, etc. |

### URLs que se eliminan o redirigen

| URL anterior | Acción | Destino |
|-------------|--------|---------|
| `/experiencia/construccion-propia` | Redirigir | `/constructora/baumex` |
| `/experiencia/ingenieria` | Redirigir | `/constructora/diseno-e-ingenieria` |
| `/experiencia/leed-y-sustentabilidad` | Redirigir | `/constructora/certificacion-leed` |
| `/experiencia/cumplimiento-global` | Redirigir | `/constructora/estandares-internacionales` |
| `/experiencia/certificaciones` | Redefinir | Certificaciones Obtenidas (nueva página con enfoque diferente) |
| `/experiencia/excelencia-operativa` | Conservar | Se mantiene tal cual |

### URLs nuevas

| URL | Página | Viene de |
|-----|--------|----------|
| `/experiencia/casos-de-exito` | Casos de Éxito | Se mueve desde Recursos (`/casos-de-exito`) |

## Impacto en la navegación

### Menú ANTES

```
EXPERIENCIA
├─ Capacidades
│  ├─ Construcción Propia
│  ├─ Ingeniería Innovadora
│  └─ Excelencia Operativa
└─ Estándares
   ├─ LEED y Sustentabilidad
   ├─ Cumplimiento Global
   └─ Certificaciones de Calidad
```

### Menú DESPUÉS

```
EXPERIENCIA
├─ Resultados
│  ├─ Excelencia Operativa
│  ├─ Casos de Éxito
│  └─ Certificaciones Obtenidas
```

El flyout queda más limpio y cada página tiene un propósito claro que no se solapa con Constructora.

## Impacto en Recursos

Al mover Casos de Éxito a Experiencia, la sección Recursos queda con:

```
RECURSOS
├─ Aprender
│  ├─ Blog
│  └─ Recursos (guías y descargas)
└─ Conectar
   ├─ Noticias
   └─ Eventos
```

Esto también tiene sentido porque Recursos queda enfocado en contenido editorial y herramientas, no en pruebas de trayectoria.

---

*Decisión tomada durante el proceso de planificación de contenidos. Ver: `estrategia-para-desarrollar-contenido-y-poblar-secciones-internas-de-un-sitio-web.md` en `/Proyectos/`*
