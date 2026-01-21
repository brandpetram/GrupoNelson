# Replicación de Páginas entre Proyectos

## Contexto y Propósito

### Por qué hacemos esto

Cuando tenemos una junta con el cliente de Grupo Nelson, necesitamos mostrarle avances de los componentes que hemos desarrollado. El problema es que esos componentes están en otro proyecto (SDI), no en el proyecto de Grupo Nelson.

**No podemos simplemente mostrarle páginas de SDI** porque:
- El cliente es de Grupo Nelson, no de SDI
- Ver fotos y textos de otra empresa no tiene sentido para él
- Necesita ver SU contenido, SUS fotos

**Solución:** Mudar los componentes de SDI hacia Grupo Nelson de la forma más simple posible, reemplazando fotos y adaptando contenido.

## Definición

**Replicación de Páginas** es el proceso de:
1. Copiar una página completa de un proyecto (fuente) a otro proyecto (destino)
2. **Crear una lista de TODOS los componentes copiados**
3. **Actualizar sistemáticamente CADA componente de la lista** (textos, fotos, alts, y a veces íconos/colores)
4. Reemplazar todas las imágenes con fotos del proyecto destino de manera secuencial

**La lista de componentes es obligatoria.** No es opcional, no es para verificación. Es la metodología central.

## Caso de Uso Real

Mudamos `/conveyors-industriales` de SDI a `/componentes` en Grupo Nelson para mostrar al cliente los componentes funcionando con sus propias fotos.

## Metodología Central: Proceso Incremental

**🎯 CONCEPTO CLAVE:**

El proceso NO se hace todo al mismo tiempo. Es **incremental con commits** después de cada etapa.

**¿Por qué incremental?**
- ⚠️ Si intentas reemplazar todo al mismo tiempo, se acaba la memoria de contexto
- ✅ Con commits incrementales, puedes continuar después si se interrumpe
- ✅ Cada commit es un checkpoint seguro
- ✅ Es un checklist paso a paso

**Flujo correcto (CADA PASO ES SEPARADO CON COMMIT):**

```
1. Copiar componentes + Crear lista
   → Claude: Build que compile
   → Claude: Reporta que está listo
   → USUARIO HACE COMMIT

2. Reemplazar SOLO las fotos/imágenes
   → Claude: Build
   → Claude: Reporta completado
   → USUARIO HACE COMMIT

3. Reemplazar SOLO los alts
   → Claude: Build
   → Claude: Reporta completado
   → USUARIO HACE COMMIT

4. Reemplazar SOLO los títulos
   → Claude: Build
   → Claude: Reporta completado
   → USUARIO HACE COMMIT

5. Reemplazar SOLO los textos
   → Claude: Build
   → Claude: Reporta completado
   → USUARIO HACE COMMIT

6. Reemplazar íconos (si aplica)
   → Claude: Build
   → Claude: Reporta completado
   → USUARIO HACE COMMIT

7. Reemplazar colores (si aplica)
   → Claude: Build
   → Claude: Reporta completado
   → USUARIO HACE COMMIT

8. Limpieza final
   → Claude: Build
   → Claude: Reporta completado
   → USUARIO HACE COMMIT
```

**⚠️ IMPORTANTE: Claude NO hace commits. Después de cada etapa:**
1. Claude hace build
2. Claude reporta que está completado
3. Claude pregunta "¿Qué sigue?"
4. **Usuario hace el commit**
5. Usuario indica la siguiente etapa

## Proceso General

### 1. Identificación (Research)

**Herramientas:** Task tool con `subagent_type=Explore`

```bash
# Identificar todos los componentes usados en la página fuente
- Leer la página fuente
- Identificar imports y componentes
- Crear lista completa de dependencias
```

**Output esperado:** Lista de ~50-70 archivos/componentes

### 2. Copia de Componentes

**⚠️ CRÍTICO: Al copiar cada componente, DEBES agregarlo a una lista de tracking.**

**Por qué es obligatorio:**
- TODOS los componentes que copies van a necesitar actualizaciones
- En TODOS tendrás que reemplazar: textos, fotos, alts
- A veces también: íconos, colores, otros assets
- Sin lista, no sabrás cuáles componentes necesitan actualización

**Crear archivo de tracking ANTES de empezar a copiar:**

```markdown
# Replicación: /[nombre-page]

## Origen: [proyecto origen]
## Destino: Grupo Nelson
## Fecha: [fecha]

### Componentes a copiar y actualizar:

Page:
- [ ] /app/[ruta]/page.tsx

Componentes importados:
- [ ] componente-1.tsx
- [ ] componente-2.tsx
- [ ] componente-3.tsx
...

Subcomponentes:
- [ ] subcomponente.tsx (usado por componente-1)

Compartidos:
- [ ] drawer.tsx (usado por componente-2)

**Total: X componentes**

TODOS estos componentes necesitarán:
✏️ Reemplazo de textos
✏️ Reemplazo de fotos/imágenes
✏️ Reemplazo de alts
✏️ A veces: íconos, colores, otros assets
```

**Regla:** Mantener estructura de carpetas análoga

```
sdi/src/components/brandpetram/carrusel.tsx
  ↓
grupo-nelson/src/components/brandpetram/carrusel.tsx
```

**Orden de copia:**
1. Componentes base (`/components/ui/`)
2. Componentes de marca (`/components/brandpetram/`)
3. Componentes específicos (`/components/sdi/`, `/components/tailarkpro/`)
4. Data files (`/data/`)
5. Assets (`/componentes/`)

**Al copiar cada archivo:** Marcarlo como `[ ]` copiado en la lista.

### 3. Creación de la Página

```typescript
// src/app/[ruta-nueva]/page.tsx
- Copiar estructura de la página fuente
- Adaptar imports
- Mantener texto igual (por ahora)
```

### 4. Build y Resolución de Dependencias

```bash
pnpm build
```

**Errores comunes:**
- "Module not found" → Componente faltante, copiar de fuente
- "Cannot resolve" → Verificar ruta de import
- "Parsing error" → Error de sintaxis (revisar commits recientes)

**Estrategia:**
1. Build
2. Copiar archivo faltante
3. Repetir hasta que compile

### 5. Primera Etapa de Adaptación: Reemplazo de Imágenes

**⚠️ Esta es la PRIMERA etapa de adaptación (después de copiar componentes)**

**¿Por qué las fotos van primero?**
- La mayoría de los componentes tienen fotografías
- Si no las reemplazas, tendrías que traer las fotos del otro proyecto
- NO queremos meter fotos de otro cliente dentro de este proyecto
- Muchas veces los componentes funcionan aunque tengan broken images (el build no se rompe)

**Objetivo de esta etapa:** Solo reemplazar rutas de imágenes, NADA MÁS.

**⚠️ CRÍTICO: NO USAR SCRIPTS AUTOMATIZADOS**

#### Assets Disponibles

En Grupo Nelson, las fotos están en:
```
/public/parques-industriales-mexicali/parque-industrial-mexicali-renta-y-construccion-nave-industrial-[NUMERO].jpg
```

**Rango disponible:** 1 - 461 fotos

**Rango asignado para componentes:** Empezar desde **251** en adelante secuencialmente

#### ❌ Lo que NO se debe hacer:

```bash
# NUNCA hacer esto
sed -i '' 's|/old-path/|/new-path/|g' *.tsx
```

**Problemas de los scripts:**
- Rompen sintaxis (eliminan comillas, comas, paréntesis)
- Difíciles de revertir
- Tiempo perdido en debugging (horas)
- Requiere `git reset --hard`

#### ✅ Proceso correcto:

**Antes de empezar:**
```bash
git add -A && git commit -m "Checkpoint antes de reemplazar imágenes"
```

**Regla de oro para numeración:**
```
SIEMPRE usar números SECUENCIALES sin repetir:
251, 252, 253, 254, 255, 256, 257, 258...

NO repetir números
NO saltar números sin razón
NO usar la misma foto 15 veces
```

**Ejemplo correcto:**
```typescript
// Archivo 1: carrusel.tsx
imagen 1 → 251
imagen 2 → 252
imagen 3 → 253
imagen 4 → 254

// Archivo 2: masonry.tsx (continúa donde se quedó el anterior)
imagen 1 → 255
imagen 2 → 256
imagen 3 → 257
```

**Si la página tiene 50 imágenes en total:**
- Primera imagen: 251
- Última imagen: 251 + 50 = 301

**Proceso manual:**
1. Identificar archivos con imágenes rotas:
```bash
grep -r "/ruta-vieja/" src/components/
```

2. Abrir cada archivo uno por uno con Read tool

3. Llevar cuenta mental simple: "última imagen fue 257, siguiente es 258"

4. Usar Edit tool para cada reemplazo siguiendo la secuencia:
```typescript
// Primera imagen del archivo
Edit: línea X → /parques-industriales-mexicali/...-258.jpg

// Segunda imagen del archivo
Edit: línea Y → /parques-industriales-mexicali/...-259.jpg

// Tercera imagen del archivo
Edit: línea Z → /parques-industriales-mexicali/...-260.jpg
```

5. Build después de cada 3-5 archivos:
```bash
pnpm build
```

6. Commit cuando todo compile:
```bash
git add -A && git commit -m "Reemplazar imágenes..."
```

**Ventajas del proceso manual:**
- Control total sobre cada cambio
- Sintaxis siempre válida
- Numeración secuencial garantizada
- Fácil de verificar
- Se puede hacer en batches pequeños

### 6. Verificación Final

```bash
# 1. Build exitoso
pnpm build

# 2. Buscar imágenes rotas restantes
grep -r "/ruta-vieja/" src/

# 3. Probar en navegador
pnpm dev
# Abrir localhost:3000/nueva-ruta
```

## Fases de Adaptación de Contenido (Incremental)

Después de copiar todos los componentes y resolver dependencias, necesitamos adaptar el contenido del proyecto origen al proyecto destino.

**⚠️ REGLA FUNDAMENTAL: Proceso incremental con commits**

NO hacer todo al mismo tiempo. Cada tipo de reemplazo es una ETAPA SEPARADA con su propio commit.

**Orden de las etapas:**

1. **Etapa 1: Fotos/Imágenes** (va primero porque casi todos los componentes tienen fotos)
   - Claude reemplaza SOLO rutas de imágenes
   - Claude hace build y reporta
   - Usuario hace commit
   - Usuario indica siguiente etapa

2. **Etapa 2: Alts** (textos alternativos)
   - Claude reemplaza SOLO alts de imágenes → "Lorem ipsum"
   - Claude hace build y reporta
   - Usuario hace commit
   - Usuario indica siguiente etapa

3. **Etapa 3: Títulos** (headings, encabezados)
   - Claude reemplaza SOLO títulos con keywords del cliente
   - Claude hace build y reporta
   - Usuario hace commit
   - Usuario indica siguiente etapa

4. **Etapa 4: Textos** (descripciones, párrafos, labels)
   - Claude reemplaza SOLO textos con Lorem ipsum o contenido estratégico
   - Claude hace build y reporta
   - Usuario hace commit
   - Usuario indica siguiente etapa

5. **Etapa 5: Íconos** (si aplica)
   - Claude reemplaza íconos que tengan marca del proyecto origen
   - Claude hace build y reporta
   - Usuario hace commit
   - Usuario indica siguiente etapa

6. **Etapa 6: Colores** (si aplica)
   - Claude reemplaza paleta de colores del proyecto origen
   - Claude hace build y reporta
   - Usuario hace commit
   - Usuario indica siguiente etapa

**⚠️ CRÍTICO: Claude NUNCA hace commits. El usuario los hace después de cada etapa.**

### ✅ Complementar Lista con Búsqueda de Palabras Clave

**Buscar palabras clave ES útil y recomendado** como complemento a la lista.

**Proceso correcto (combina ambos):**

**1. Tener la lista de componentes** (obligatorio - base del proceso)

**2. Preguntar al usuario las palabras clave del proyecto origen:**
```
Claude: "¿Cuáles son 2-3 palabras clave del proyecto origen a buscar?"
Usuario: "conveyor, SDI, Soporte Dinámico"
```

**3. Buscar las palabras en singular Y plural:**
```bash
grep -rn "conveyor" src/
grep -rn "conveyors" src/
grep -rn "SDI" src/
grep -rn "Soporte Dinámico" src/
grep -rn "Soporte Dinámicos" src/
```

**4. Usar resultados del grep como referencia al trabajar la lista:**
- La lista asegura que no omites componentes
- El grep encuentra menciones específicas dentro de cada componente
- Juntos dan cobertura completa

**✅ Por qué funciona:**
- Lista = Tracking sistemático de TODOS los componentes
- Grep = Encuentra menciones específicas de palabras clave
- Lista + Grep = Cobertura completa

**❌ El ERROR es usar SOLO grep sin lista:**
- Sin lista, no sabes cuántos componentes son
- Sin lista, no tienes tracking del progreso
- Solo grep puede omitir componentes sin esas palabras específicas

**Ejemplo real:** En este proyecto, usar grep para "conveyor" fue útil para encontrar menciones. Pero sin revisar la lista sistemáticamente de componentes compartidos, nos perdimos el drawer.

### Enfoque Correcto: Lista + Grep Complementario

**Ya creaste la lista en la Fase 2 (Copia de Componentes):**

```markdown
# Componentes copiados para /componentes

## Origen: SDI /conveyors-industriales
## Fecha: 2026-01-21

### Page:
- [ ] /app/componentes/page.tsx

### Componentes importados:
- [ ] sidebar-sticky-1.tsx
- [ ] conveyors-grid-section.tsx
- [ ] ticker-marketing-2.tsx
...

### Subcomponentes:
- [ ] item-conveyor.tsx (usado por conveyors-grid-section)

### Compartidos:
- [ ] drawer.tsx (usado por conveyors-grid-section)

Total: 15 componentes
```

**Ahora, durante la adaptación de contenido**, trabajar CADA UNO de estos componentes:

```markdown
Progreso: 8/15

- [x] sidebar-sticky-1.tsx - ✅ Alts, títulos, textos actualizados
- [x] conveyors-grid-section.tsx - ✅ Actualizado
- [ ] ticker-marketing-2.tsx - ⏳ Pendiente
- [ ] drawer.tsx - ⏳ Pendiente
...
```

**Para cada componente, actualizar:**
- ✏️ Alts de imágenes → "Lorem ipsum"
- ✏️ Títulos → Keywords del cliente
- ✏️ Textos → Lorem ipsum o contenido estratégico del cliente
- ✏️ Rutas de imágenes → Fotos del proyecto destino
- ✏️ Íconos/SVGs con marca → Reemplazar si tienen marca del origen
- ✏️ Tipos TypeScript → Cambiar nombres relacionados con el origen
- ✏️ Props y variables → Cambiar nombres si están relacionados

**Beneficios:**
- ✅ Sabes exactamente cuántos componentes copiaste
- ✅ Tracking claro del progreso (8/15 completados)
- ✅ No omites componentes
- ✅ Proceso sistemático y predecible
- ✅ Fácil retomar si interrumpes el trabajo

**Nota importante:** Este archivo de tracking se crea ANTES de empezar la adaptación de contenido, durante la fase de copia.

### Ejemplo Completo del Flujo Incremental

**1. Después de copiar componentes (Setup inicial):**

```markdown
# Replicación /componentes

Total: 15 componentes copiados

- [ ] sidebar-sticky-1.tsx
- [ ] grid-poligonos-2x1-texto-vertical.tsx
- [ ] conveyors-grid-section.tsx
- [ ] ticker-marketing-2.tsx
- [ ] masonry-1.tsx
- [ ] half-circle.tsx
- [ ] half-circle-mobile.tsx
- [ ] hexagon-features.tsx
- [ ] drawer.tsx
- [ ] item-conveyor.tsx
...

Build: ✅ Compila
Usuario hace commit inicial
```

**2. Etapa 1: Reemplazo de fotos (Progreso 5/15):**

```markdown
Usuario indica: "Reemplazar fotos"

Fotos reemplazadas:
- [x] sidebar-sticky-1.tsx → 3 fotos actualizadas (251-253)
- [x] grid-poligonos-2x1-texto-vertical.tsx → 2 fotos (254-255)
- [x] conveyors-grid-section.tsx → 10 fotos (256-265)
- [x] ticker-marketing-2.tsx → 1 foto (266)
- [x] masonry-1.tsx → 4 fotos (267-270)
- [ ] half-circle.tsx - ⏳ Siguiente
- [ ] half-circle-mobile.tsx
...

Progreso fotos: 5/15 componentes
Build: ✅
Claude: "¿Qué sigue?"
Usuario hace commit
```

**3. Etapa 2: Reemplazo de alts (Progreso 3/15):**

```markdown
Usuario indica: "Reemplazar alts"

Alts reemplazados:
- [x] sidebar-sticky-1.tsx → 3 alts → "Lorem ipsum"
- [x] grid-poligonos-2x1-texto-vertical.tsx → 2 alts
- [x] conveyors-grid-section.tsx → 10 alts
- [ ] ticker-marketing-2.tsx - ⏳ Siguiente
...

Progreso alts: 3/15 componentes
Build: ✅
Claude: "¿Qué sigue?"
Usuario hace commit
```

**4. [Similar para cada etapa...]**

**5. Todas las etapas completadas:**

```markdown
✅ Etapa 1: Fotos - 15/15 componentes ✅ Commit
✅ Etapa 2: Alts - 15/15 componentes ✅ Commit
✅ Etapa 3: Títulos - 15/15 componentes ✅ Commit
✅ Etapa 4: Textos - 15/15 componentes ✅ Commit
✅ Etapa 5: Íconos - 3/15 componentes (solo los que tenían) ✅ Commit
✅ Etapa 6: Colores - Paleta actualizada ✅ Commit
✅ Etapa 7: Limpieza - Completada ✅ Commit

Proceso terminado. Listo para probar en navegador.
```

---

## Lecciones Aprendidas

### 1. Proceso Incremental, No Todo al Mismo Tiempo

**Error:** Intentar reemplazar fotos, alts, títulos, textos, íconos y colores todo en una sola pasada.

**Consecuencia:** Se acaba la memoria de contexto, no se puede continuar, se pierde progreso.

**Correcto:** Hacer el proceso en etapas separadas con commits incrementales:
1. Fotos → Build → Usuario hace commit
2. Alts → Build → Usuario hace commit
3. Títulos → Build → Usuario hace commit
4. Textos → Build → Usuario hace commit
5. Íconos → Build → Usuario hace commit
6. Colores → Build → Usuario hace commit

**Por qué funciona mejor:**
- Si se interrumpe, puedes continuar desde el último commit
- Cada etapa es un checkpoint seguro
- No se acaba la memoria de contexto
- Claude pregunta "¿Qué sigue?" después de cada etapa

**⚠️ CRÍTICO: Claude NUNCA hace commits. Después de cada etapa:**
- Claude hace build y reporta
- Usuario hace commit
- Usuario indica siguiente etapa

### 2. Combinar Lista de Componentes con Búsqueda de Palabras Clave

**Error:** Usar SOLO grep sin tener lista de componentes.

**Consecuencia:** Proceso caótico, se omiten componentes (ej: drawer), no hay tracking de progreso.

**Correcto:** Combinar ambos métodos:
1. **Lista de componentes** (obligatorio) - base del proceso
2. **Buscar palabras clave** (complementario) - encuentra menciones específicas
3. Preguntar al usuario 2-3 palabras clave del proyecto origen
4. Buscar esas palabras en singular Y plural
5. Usar resultados del grep como referencia al trabajar la lista sistemáticamente

**Por qué funciona mejor:**
- Lista = Tracking sistemático de TODOS los componentes
- Grep = Encuentra menciones específicas de palabras clave
- Lista + Grep = Cobertura completa
- Sabes desde el inicio cuántos componentes son
- No se te escapa ningún componente

### 3. Scripts para Reemplazos Masivos son Peligrosos

**Experiencia:** En este proyecto intentamos usar `sed` para reemplazar ~40 rutas de imágenes. Resultado:
- Sintaxis rota en 3+ archivos
- Comillas sin cerrar
- Comas faltantes
- 2+ horas perdidas en debugging
- Requirió `git reset --hard HEAD`

**Lección:** **Siempre hacer reemplazos manualmente, uno por uno.**

### 4. Hacer Commits Antes de Operaciones Riesgosas

**Regla de oro:**
```bash
git commit -m "Checkpoint antes de [operación riesgosa]"
```

Permite revertir fácilmente con:
```bash
git reset --hard HEAD
```

**Nota:** En el proceso incremental, el usuario hace commits después de CADA etapa, por lo que siempre hay checkpoints.

### 5. El Proceso Manual es Más Rápido

**Paradoja:** Aunque parece más lento, el proceso manual es más rápido porque:
- No rompe sintaxis
- No requiere debugging
- Se puede verificar incrementalmente
- No requiere reverts

**Tiempo comparado:**
- Script: 10 min escribiendo + 2 horas debugging = **2h 10min**
- Manual: 30-40 minutos de reemplazos = **40min**

### 6. Numeración Secuencial de Imágenes

**Problema común:** Claude tiende a repetir la misma foto múltiples veces (ej: foto 261 aparece 15 veces).

**Solución:** Usar numeración secuencial simple sin llevar cuenta compleja:
- Imagen actual: 253
- Siguiente imagen: 254 (actual + 1)
- No es complicado

**Regla:** NUNCA repetir números. Siempre incrementar en 1.

**Por qué es importante:**
- Cada imagen debe ser única
- Facilita debugging (se puede identificar qué imagen está rota)
- Mejor experiencia visual para el cliente
- Aprovecha las 461 fotos disponibles

### 7. Usar Task Tool para Exploración

NO hacer:
```bash
# Buscar manualmente archivo por archivo
Read file1.tsx
Read file2.tsx
...
```

SÍ hacer:
```typescript
Task(
  subagent_type: "Explore",
  prompt: "Identificar todos los componentes usados en la página X"
)
```

### 8. Build Después de Cada Etapa

Compilar después de completar cada etapa de adaptación:
- Detecta errores temprano
- Verifica que los cambios no rompieron nada
- Confirma que es seguro hacer commit
- Más fácil identificar qué causó el problema si algo falla

### 9. Links vs Imágenes

Al buscar rutas rotas, diferenciar:
- **Imágenes** (`src=`, `backgroundImage:`) → DEBEN reemplazarse
- **Links** (`href=`) → Pueden quedar si son navegación interna

```bash
# Mejor buscar patrones específicos
grep -r 'src="/ruta-vieja/' src/
grep -r 'backgroundImage.*ruta-vieja' src/
```

## 7. Limpieza Post-Replicación

Después de que la página compile y funcione, hacer limpieza del código:

### 7.1. Verificar Componentes Duplicados

**Footer duplicado** es el caso más común:

```bash
# Buscar si el layout ya tiene el footer
grep -n "Footer" src/app/layout.tsx

# Si el layout tiene footer, eliminarlo de page.tsx
```

**Regla:** Si el `layout.tsx` ya tiene un componente global (Header, Footer), NO incluirlo en `page.tsx`.

### 7.2. Limpiar Imports No Usados

**Método 1: Verificar componentes realmente usados**
```bash
# Extraer todos los componentes usados en el JSX
grep -o '<[A-Z][a-zA-Z0-9]*' src/app/tu-pagina/page.tsx | sort | uniq
```

**Método 2: Comparar con imports**
- Leer la lista de imports al inicio del archivo
- Comparar con los componentes extraídos
- Eliminar imports que no aparecen en la lista

**Ejemplo de lo que se puede eliminar:**
```typescript
// ❌ Imports no usados
import { ComponenteA } from '...'  // Si <ComponenteA> no aparece en el JSX
import { ComponenteB, ComponenteC } from '...'  // Si ninguno se usa

// ✅ Solo imports usados
import { ComponenteD } from '...'  // Aparece como <ComponenteD> en el JSX
```

### 7.3. Limpiar Constantes No Usadas

Después de copiar una página, es común que tenga constantes que ya no se usan:

```typescript
// ❌ Constantes copiadas pero no usadas
const products = [...]  // Si no se pasa a ningún componente
const features = [...]  // Si no se usa en el JSX
const ctaData = {...}   // Si no se usa

// Eliminar estas constantes para reducir el tamaño del archivo
```

**Cómo verificar:**
```bash
# Buscar si una constante se usa
grep -n "nombreConstante" src/app/tu-pagina/page.tsx

# Si solo aparece en la declaración (1 línea), está sin usar
```

### 7.4. Beneficios de la Limpieza

- **Reduce tamaño del bundle**: Menos código sin usar
- **Mejora legibilidad**: Más fácil entender qué se usa
- **Facilita mantenimiento**: Menos código que mantener
- **Evita confusión**: No hay código "fantasma"

**Tiempo estimado para limpieza:** 10-15 minutos

## Tiempo Estimado

Para una página con ~15 componentes:

| Fase/Etapa | Tiempo |
|------------|--------|
| **Setup Inicial** | |
| 1. Identificación | 10-15 min |
| 2. Copia de componentes + creación de lista | 20-30 min |
| 3. Creación de página | 5-10 min |
| 4. Resolución de dependencias | 15-30 min |
| | |
| **Etapas de Adaptación (incrementales)** | |
| Etapa 1: Reemplazo de fotos | 30-40 min |
| Etapa 2: Reemplazo de alts | 15-20 min |
| Etapa 3: Reemplazo de títulos | 20-30 min |
| Etapa 4: Reemplazo de textos | 25-35 min |
| Etapa 5: Íconos (si aplica) | 10-15 min |
| Etapa 6: Colores (si aplica) | 15-25 min |
| | |
| **Finalización** | |
| Etapa 7: Limpieza | 10-15 min |
| Verificación en navegador | 5-10 min |
| **TOTAL** | **~3-3.5 horas** |

**Notas:**
- Cada etapa incluye: trabajo de Claude + build + commit del usuario
- Entre etapas hay pausas donde usuario hace commit e indica siguiente paso
- Tiempo total puede distribuirse en múltiples sesiones gracias a commits incrementales
- Si NO usas lista (grep): +1 hora (múltiples pasadas, componentes perdidos)
- Si usas script para imágenes: +2 horas debugging

## Checklist

```markdown
### Fase 1: Setup Inicial
- [ ] Identificar todos los componentes (Task tool)
- [ ] **CREAR ARCHIVO DE LISTA** antes de copiar
- [ ] Copiar componentes manteniendo estructura
- [ ] **Agregar cada componente a la lista** al copiarlo
- [ ] Crear página nueva
- [ ] Resolver dependencias hasta que compile
- [ ] Claude: Build exitoso
- [ ] **USUARIO: Commit inicial**

### Preparación para Adaptación
- [ ] **Usuario indica: "Iniciar adaptación de contenido"**
- [ ] Claude: Preguntar "¿Cuáles son 2-3 palabras clave del proyecto origen?"
- [ ] Usuario proporciona palabras clave (ej: "conveyor, SDI")
- [ ] Claude: Buscar palabras en singular y plural con grep
- [ ] Claude: Tener resultados de grep como referencia

### Etapa 1: Reemplazo de Fotos/Imágenes
- [ ] **Usuario indica: "Reemplazar fotos"**
- [ ] Claude: Trabajar lista de componentes usando grep como referencia
- [ ] Claude: Reemplazar SOLO rutas de imágenes (manual, secuencial)
- [ ] Claude: Build
- [ ] Claude: Reportar completado
- [ ] **USUARIO: Commit**

### Etapa 2: Reemplazo de Alts
- [ ] **Usuario indica: "Reemplazar alts"**
- [ ] Claude: Trabajar lista, actualizar SOLO alts → "Lorem ipsum"
- [ ] Claude: Build
- [ ] Claude: Reportar completado
- [ ] **USUARIO: Commit**

### Etapa 3: Reemplazo de Títulos
- [ ] **Usuario indica: "Reemplazar títulos"**
- [ ] Claude: Trabajar lista, actualizar SOLO títulos con keywords cliente
- [ ] Claude: Build
- [ ] Claude: Reportar completado
- [ ] **USUARIO: Commit**

### Etapa 4: Reemplazo de Textos
- [ ] **Usuario indica: "Reemplazar textos"**
- [ ] Claude: Trabajar lista, actualizar SOLO textos (lorem ipsum o estratégico)
- [ ] Claude: Build
- [ ] Claude: Reportar completado
- [ ] **USUARIO: Commit**

### Etapa 5: Reemplazo de Íconos (si aplica)
- [ ] **Usuario indica: "Reemplazar íconos"**
- [ ] Claude: Trabajar lista, actualizar SOLO íconos con marca origen
- [ ] Claude: Build
- [ ] Claude: Reportar completado
- [ ] **USUARIO: Commit**

### Etapa 6: Reemplazo de Colores (si aplica)
- [ ] **Usuario indica: "Reemplazar colores"**
- [ ] Claude: Actualizar paleta de colores
- [ ] Claude: Build
- [ ] Claude: Reportar completado
- [ ] **USUARIO: Commit**

### Etapa 7: Limpieza Final
- [ ] **Usuario indica: "Limpieza"**
- [ ] Claude: Eliminar footer/header duplicados
- [ ] Claude: Limpiar imports no usados
- [ ] Claude: Eliminar constantes no usadas
- [ ] Claude: Build
- [ ] Claude: Reportar completado
- [ ] **USUARIO: Commit final**
- [ ] Usuario: Probar en navegador
```

**⚠️ IMPORTANTE:**
- Claude NUNCA hace commits
- Después de cada etapa, Claude pregunta "¿Qué sigue?"
- Usuario indica la siguiente etapa o da por terminado

## Archivos de Referencia

Este proceso fue documentado durante la replicación de `/conveyors-industriales` (SDI) a `/componentes` (Grupo Nelson).

**Commits relevantes:**
- `e7addb2` - Componentes copiados, página creada
- `ea61f6f` - Imágenes reemplazadas manualmente
- `03271ab` - Numeración secuencial de imágenes corregida (251-303)
- `a89a42d` - Footer duplicado eliminado
- `f97a5d7` - Imports y constantes no usadas eliminadas

**Archivos modificados en el proceso:**
- `src/app/componentes/page.tsx` (nueva página)
- 66 componentes copiados de SDI
- 5 archivos con imágenes reemplazadas:
  - `carrusel.tsx`
  - `conveyors-grid-section.tsx`
  - `masonry-1.tsx`
  - `half-circle.tsx`
  - `ticker-marketing-2.tsx`
