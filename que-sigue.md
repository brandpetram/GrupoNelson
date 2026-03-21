# Qué sigue — Grupo Nelson

Fecha: 2026-03-20

## Completado hoy

- [x] QA de juicio de 11 páginas (7 aprobadas de primera, 5 corregidas y aprobadas)
- [x] Total: **13 páginas con QA completo** (incluyendo baumex y proyectos-especializados de sesiones anteriores)

---

## Pendientes

### 1. Commit del trabajo de hoy
- 5 archivos modificados con correcciones de QA
- diferencia-nelson, liderazgo, calidad-ambiental, clima-extremo, proceso-certificación, materiales-recursos

### 2. Revisar páginas con posibles duplicados o huérfanas
- `/constructora/certificacion-leed` — verificar que se ve bien sin el redirect 301
- `/nelson/nuestra-historia` — tiene contenido previo, no revisado contra las 17 reglas
- `/solutions/build-to-suit` y `/solutions/turnkey` — posibles duplicados de `/constructora/build-to-suit` y `/constructora/llave-en-mano`
- `/constructora/leed` (hub) — ¿se mantiene o se elimina? Ya no está en el nav

### 3. Migrar copy a componentes reales
Estas páginas tienen el copy comercial arriba (en texto plano) y componentes con lorem ipsum abajo. Hay que mover el copy a los componentes:
- `/constructora/baumex`
- `/constructora/proyectos-especializados`
- `/constructora/build-to-suit`
- `/constructora/llave-en-mano`
- `/constructora/diseno-e-ingenieria`
- `/nelson/diferencia-nelson`
- `/nelson/liderazgo`
- `/nelson/trayectoria`
- `/constructora/estandares-internacionales`
- `/experiencia/excelencia-operativa`
- `/experiencia/casos-de-exito`
- `/experiencia/certificaciones`

Nota: Las páginas LEED ya usan el componente `LeedPageLayout`, así que están migradas.

### 4. Actualizar mapa de contenidos
- Actualizar `/proyecto/contenidos` con el estado actual de todas las páginas

### 5. Actualizar bitácora
- Registrar trabajo del 18 y 20 de marzo

### 6. Páginas de parques — BLOQUEADAS
Requieren información de Susana antes de poder escribir copy:
- Qué clientes están en cada parque
- Qué naves están disponibles hoy (m², precio)
- Cuántas naves tiene cada parque

### 7. Páginas que no existen aún
- `/contacto`
- `/recursos` (o equivalente)

### 8. Fotos y assets — BLOQUEADOS
Requieren material del cliente:
- Fotos profesionales del equipo directivo (para `/nelson/liderazgo`)
- Permiso de uso de los 30 logos de clientes (para `/nelson/trayectoria`)

---

## Orden sugerido (lo que podemos hacer sin depender del cliente)

1. Commit
2. Revisar duplicados/huérfanas (decisión rápida)
3. Migrar copy a componentes (trabajo pesado pero mecánico)
4. Actualizar mapa y bitácora
5. Contacto (se puede escribir con info pública)

Lo demás (parques, fotos, logos) depende de Susana.
