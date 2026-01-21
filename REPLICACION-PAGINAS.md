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

**Replicación de Páginas** es el proceso de copiar una página completa de un proyecto (fuente) a otro proyecto (destino), incluyendo todos sus componentes y dependencias, y reemplazando todas las imágenes con fotos del proyecto destino de manera secuencial y sin repeticiones.

## Caso de Uso Real

Mudamos `/conveyors-industriales` de SDI a `/componentes` en Grupo Nelson para mostrar al cliente los componentes funcionando con sus propias fotos.

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

### 5. Reemplazo de Imágenes

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

## Lecciones Aprendidas

### 1. Scripts para Reemplazos Masivos son Peligrosos

**Experiencia:** En este proyecto intentamos usar `sed` para reemplazar ~40 rutas de imágenes. Resultado:
- Sintaxis rota en 3+ archivos
- Comillas sin cerrar
- Comas faltantes
- 2+ horas perdidas en debugging
- Requirió `git reset --hard HEAD`

**Lección:** **Siempre hacer reemplazos manualmente, uno por uno.**

### 2. Hacer Commits Antes de Operaciones Riesgosas

**Regla de oro:**
```bash
git commit -m "Checkpoint antes de [operación riesgosa]"
```

Permite revertir fácilmente con:
```bash
git reset --hard HEAD
```

### 3. El Proceso Manual es Más Rápido

**Paradoja:** Aunque parece más lento, el proceso manual es más rápido porque:
- No rompe sintaxis
- No requiere debugging
- Se puede verificar incrementalmente
- No requiere reverts

**Tiempo comparado:**
- Script: 10 min escribiendo + 2 horas debugging = **2h 10min**
- Manual: 30-40 minutos de reemplazos = **40min**

### 4. Numeración Secuencial de Imágenes

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

### 5. Usar Task Tool para Exploración

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

### 6. Build Frecuente

Compilar después de cada 3-5 cambios, no al final:
- Detecta errores temprano
- Más fácil identificar qué causó el problema
- Menos estrés

### 7. Links vs Imágenes

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

Para una página con ~50 componentes:

| Fase | Tiempo |
|------|--------|
| 1. Identificación | 10-15 min |
| 2. Copia de componentes | 20-30 min |
| 3. Creación de página | 5-10 min |
| 4. Resolución de dependencias | 15-30 min |
| 5. Reemplazo de imágenes (manual) | 30-40 min |
| 6. Verificación | 5-10 min |
| 7. Limpieza post-replicación | 10-15 min |
| **TOTAL** | **~2 horas 15 min** |

**Si se usa script:** 3-4 horas (incluye debugging)

## Checklist

```markdown
- [ ] Identificar todos los componentes (Task tool)
- [ ] Copiar componentes manteniendo estructura
- [ ] Crear página nueva
- [ ] Resolver dependencias hasta que compile
- [ ] **COMMIT antes de reemplazar imágenes**
- [ ] Reemplazar imágenes MANUALMENTE uno por uno
- [ ] Build después de cada 3-5 archivos
- [ ] Verificar que no queden rutas rotas (grep)
- [ ] Commit final
- [ ] Probar en navegador
- [ ] **LIMPIEZA POST-REPLICACIÓN:**
  - [ ] Verificar y eliminar footer/header duplicados
  - [ ] Limpiar imports no usados
  - [ ] Eliminar constantes no usadas
  - [ ] Build y commit de limpieza
```

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
