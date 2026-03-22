# Qué sigue — Grupo Nelson

Fecha: 2026-03-22

## Completado (21 de marzo)

- [x] Commit de correcciones QA (6 páginas)
- [x] Revisar duplicados/huérfanas — eliminados `/solutions/build-to-suit`, `/solutions/turnkey`, `/constructora/leed/page.tsx` (hub)
- [x] Migración de `/nelson/diferencia-nelson` — 5 componentes brandpetramizados (feature-section-8-bp, split-simple-bp, offset-with-feature-list-bp)
- [x] LogosGridBP2 como hero de `/nelson/trayectoria`
- [x] Logo del header 20% más grande en desktop
- [x] Actualizar CHANGELOG (17, 18, 20, 21 de marzo)
- [x] Documentar sistema de brandpetramización (prosa + reglas de consistencia en `como-brandpetramizar-un-componente.md`)
- [x] Crear guía de migración copy→componentes en `/Proyectos/migracion-copy-a-componentes.md`

---

## Pendientes

### 1. Terminar `/nelson/diferencia-nelson`
- CTA al final — decidir si le ponemos componente o lo eliminamos (el hero ya tiene botón "Solicita una consulta")

### 2. Migrar copy a componentes (11 páginas restantes)

**Nelson:**
- `/nelson/liderazgo` — copy escrito, no migrado
- `/nelson/trayectoria` — tiene LogosGridBP2 como hero, el resto del copy (números, timeline, CTA) sigue crudo

**Constructora:**
- `/constructora/build-to-suit` — copy escrito, componentes griegos con lorem ipsum
- `/constructora/llave-en-mano` — copy escrito, componentes griegos con lorem ipsum
- `/constructora/baumex` — copy escrito, no migrado
- `/constructora/proyectos-especializados` — copy escrito, no migrado
- `/constructora/diseno-e-ingenieria` — copy escrito, no migrado
- `/constructora/estandares-internacionales` — copy escrito, no migrado

**Experiencia:**
- `/experiencia/excelencia-operativa` — copy escrito, no migrado
- `/experiencia/casos-de-exito` — copy escrito, no migrado
- `/experiencia/certificaciones` — copy escrito, no migrado

**Componentes reutilizables ya creados:**
- `split-simple-bp` — patrón zig-zag texto+imagen (usado en diferencia-nelson, reutilizable)
- `feature-section-8-bp` — hero con números (reutilizable)
- `offset-with-feature-list-bp` — checklist en fondo oscuro (reutilizable)
- `logos-grid-bp` / `logos-grid-bp-2` — cuadrícula de logos (reutilizable)

### 3. Decidir sobre `/nelson/nuestra-historia`
- 100% lorem ipsum, posible solapamiento con `/nelson/trayectoria`
- Se decidió mantener ambas con enfoques diferentes

### 4. Actualizar mapa de contenidos
- Actualizar `/proyecto/contenidos` con el estado actual

### 5. Crear `/contacto`
- Se puede hacer con info pública

### 6. Crear `/recursos`
- Se puede hacer sin depender del cliente

### 7. Páginas de parques — BLOQUEADAS
Requieren información de Susana:
- Qué clientes están en cada parque
- Qué naves están disponibles hoy (m², precio)
- Cuántas naves tiene cada parque

### 8. Fotos y assets — BLOQUEADOS
Requieren material del cliente:
- Fotos profesionales del equipo directivo (para `/nelson/liderazgo`)
- Permiso de uso de los 30 logos de clientes (para `/nelson/trayectoria`)

---

## Orden sugerido (lo que podemos hacer sin depender del cliente)

1. Terminar diferencia-nelson (CTA)
2. Migrar las 11 páginas restantes — reutilizar componentes ya creados donde se pueda
3. Actualizar mapa de contenidos
4. Página `/contacto`
5. Página `/recursos`

Lo demás (parques, fotos, logos) depende de Susana.
