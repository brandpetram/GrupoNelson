# Tracker de Rondas de Copy — Grupo Nelson

Fecha de inicio: 2026-04-04  
Fuente: `docs/copy/auditorias/2026-04-03-plan-de-correccion-sitio-grupo-nelson-v1.md`

---

## Snapshot

### Progreso

- `6` angle briefs (5 aprobados + 1 borrador)
- `4` implementaciones hechas
- `4` paginas totalmente aprobadas
- `3` componentes sistema reescritos (testimonial, notes-features, testimonials-section)

### Siguiente (paralelo con worktrees)

- `1` implementacion pendiente: `/experiencia/excelencia-operativa` (brief aprobado, componentes sistema reescritos)
- `1` brief en borrador + implementacion: `/experiencia/certificaciones`
- Ambas avanzan en paralelo via worktrees (2026-04-05)

---

## Ahora

### `/nelson/diferencia-nelson`

- Territorio: 3 diferenciadores verificables + bloque de validacion
- Prioridad: `1`
- Estado: `aprobado`
- Angle brief: `aprobado`
- Implementacion: `aprobada por Codex (2026-04-04)`
- Proxima accion: `ninguna — cerrada`
- Notas:
  Brief en `docs/copy/angle-briefs/diferencia-nelson.md`
  3 rondas de brief + 2 rondas de implementacion
  Riesgos residuales menores: doble CTA (apertura + cierre), cuidar peso de pruebas en validacion

---

## Siguiente

### `/experiencia/casos-de-exito`

- Territorio: calibre de confianza demostrado por la exigencia de los clientes
- Prioridad: `1` (cambio de prioridad 2026-04-04)
- Estado: `aprobado`
- Angle brief: `aprobado (2 rondas Codex, 2026-04-04)`
- Implementacion: `aprobada por Codex (2026-04-04)`
- Proxima accion: `ninguna — cerrada`
- Notas:
  Brief en `docs/copy/angle-briefs/casos-de-exito-experiencia.md`
  Layout conservado. 3 casos fuertes + DHL menor. 80% subordinado al cierre

### `/experiencia/excelencia-operativa`

- Territorio: artefactos de control de obra como prueba comercial
- Prioridad: `2 — siguiente en implementar` (2026-04-04)
- Estado: `brief aprobado`
- Angle brief: `aprobado (4 rondas Codex, 2026-04-04)`
- Implementacion: `parcial — 3 componentes localizados, 5 archivos pendientes`
- Proxima accion: `implementar copy del brief en page.tsx + 5 sections locales restantes`
- Notas:
  Brief en `docs/copy/angle-briefs/excelencia-operativa.md`
  3 componentes LOCALIZADOS (localizar + reescribir, 2026-04-05):
    sections/testimonial.tsx = Gulfstream 35 años como prueba del método
    sections/documentacion-auditable.tsx = sistema de documentación auditable
    sections/dimensiones-control.tsx = 3 dimensiones del control (tiempo, calidad, seguridad)
  Archivos originales de marketing restaurados (no se promovieron a sistema)
  ProductIllustration = excepcion temporal (sigue importado de marketing)
  Pendiente: page.tsx, logo-cloud-clientes, como-trabajamos, capacidades-inhouse, cta

### `/experiencia/certificaciones`

- Territorio: certificaciones como filtros de acceso corporativo
- Prioridad: `3 — en paralelo con excelencia-operativa via worktree`
- Estado: `brief borrador`
- Angle brief: `borrador creado (2026-04-05) — pendiente review`
- Implementacion: `no iniciada — worktree section/certificaciones`
- Proxima accion: `review del brief, luego implementar`
- Notas:
  Brief en `docs/copy/angle-briefs/certificaciones.md`
  Angulo: "no son trofeos; son filtros de acceso"
  Copy actual ya tiene buen ángulo — ajustes menores de refuerzo
  No invadir /constructora/leed (LEED es uno de varios filtros aquí, no protagonista)

---

## Cola anterior (detenida hasta cerrar las 3 prioritarias)

### `/constructora/proyectos-especializados`

- Territorio: 4 casos que demuestran capacidad de resolver lo no estandar
- Prioridad: `2`
- Estado: `aprobado`
- Angle brief: `aprobado (2 rondas Codex, 2026-04-04)`
- Implementacion: `aprobada por Codex (2026-04-04)`
- Proxima accion: `ninguna — cerrada`
- Notas:
  Brief en `docs/copy/angle-briefs/proyectos-especializados.md`
  Reestructurado: de FeatureSection cards a SplitSimpleBP con narrativas completas
  Verificar cifra 52,200 vs 55,500 m² (pendiente con Luis)
  Errata "Dinis" corregida. Main anidado corregido

### `/constructora/leed`

- Territorio: vender la decision de certificar LEED con Baumex en Mexicali
- Prioridad: `3`
- Estado: `aprobado`
- Angle brief: `aprobado (2 rondas Codex, 2026-04-04)`
- Implementacion: `aprobada por Codex (2026-04-04)`
- Proxima accion: `ninguna — cerrada`
- Notas:
  Brief en `docs/copy/angle-briefs/leed.md`
  Ruta legacy `/constructora/certificacion-leed` eliminada
  Copy actualizado dentro de HeroMarketing1, SidebarSticky1 y grids (layout visual conservado)
  Riesgo residual: Gulfstream carga peso en sidebar pero ya no invade territorio

### `/constructora/diseno-e-ingenieria`

- Territorio: capacidad de resolver desafios tecnicos no estandar
- Prioridad: `4`
- Estado: `no iniciado`
- Angle brief: `pendiente`
- Implementacion: `no iniciada`
- Proxima accion: `crear angle brief`
- Notas:
  Repite los mismos datos demasiadas veces
  Seguridad y certificaciones invaden otros territorios

---

## Segunda Ola

### `/nelson/nuestra-historia`

- Territorio: timeline de la familia Nelson — pionerismo + arraigo + continuidad
- Prioridad: `5`
- Estado: `no iniciado`
- Angle brief: `pendiente`
- Implementacion: `no iniciada`
- Proxima accion: `crear angle brief`
- Notas:
  Sigue en lorem ipsum
  Requiere copy desde cero

### `/nelson/liderazgo`

- Territorio: experiencia de trabajar con ownership directo
- Prioridad: `6`
- Estado: `no iniciado`
- Angle brief: `pendiente`
- Implementacion: `no iniciada`
- Proxima accion: `crear angle brief`
- Notas:
  Mega-pagina que absorbe demasiados territorios
  Habra que redefinir que se queda

### `/nelson/trayectoria`

- Territorio: prueba visual y cuantitativa de permanencia
- Prioridad: `6`
- Estado: `no iniciado`
- Angle brief: `pendiente`
- Implementacion: `no iniciada`
- Proxima accion: `crear angle brief`
- Notas:
  Pagina visual, poco copy
  Faltan datos de duracion como Gulfstream 35 y Honeywell 30

### `/constructora/baumex`

- Territorio: por que constructora in-house es mejor que subcontratar
- Prioridad: `7`
- Estado: `no iniciado`
- Angle brief: `pendiente`
- Implementacion: `no iniciada`
- Proxima accion: `crear angle brief`
- Notas:
  Falta argumento central claro
  Testimonio anonimo resta credibilidad

### `/constructora/estandares-internacionales`

- Territorio: capacidad abierta de cumplir estandares
- Prioridad: `7`
- Estado: `no iniciado`
- Angle brief: `pendiente`
- Implementacion: `no iniciada`
- Proxima accion: `crear angle brief`
- Notas:
  Buen territorio, pero todavia sin ejemplos concretos

---

## Quick Wins

### `/constructora/build-to-suit`

- Estado: `pendiente`
- Proxima accion: `agregar CTA al final`
- Nota: tiene H2 flotante sin desarrollo debajo

### `/constructora/llave-en-mano`

- Estado: `pendiente`
- Proxima accion: `reemplazar placeholders`
- Nota: luego toca meter mas profundidad comercial

### Cross-site

- Estado: `pendiente`
- Proxima accion: `unificar numero de corporaciones`
- Nota: verificar si son `30` o algun otro numero final

### `/constructora/proyectos-especializados`

- Estado: `pendiente`
- Proxima accion: `corregir errata "Dinis" -> "Dinos"`

---

## Flujo

```text
territorio fijo
-> angle brief
-> review de Codex
-> implementacion
-> review final de Codex
-> aprobado
```

Reglas:

- Ninguna pagina pasa a implementacion sin `angle brief aprobado`
- Ninguna pagina se considera cerrada sin `review final de implementacion`
- Si una pagina empieza a invadir otro territorio, vuelve a `angle brief`

---

## Estados

- `no iniciado`
- `brief en progreso`
- `brief aprobado`
- `implementado`
- `en review`
- `ajustes pendientes`
- `aprobado`
- `congelado`
