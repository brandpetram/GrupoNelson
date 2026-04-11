# Plan: Sección /instrucciones (protegida por contraseña)

## Objetivo

Crear una sección interna donde Susana (y cualquier persona de Grupo Nelson) pueda aprender a editar el contenido del sitio a través de Sanity Studio.

---

## 1. Hallazgos de la investigación

### Contenido gestionado en Sanity (editable por Susana)

| Tipo de documento | Página del sitio | Campos principales | Limitaciones |
|---|---|---|---|
| **Nave Industrial** (`naveIndustrial`) | /inventario/naves-disponibles | nombre, parque, superficie, altura libre, andenes, estatus (Disponible/Ocupada/En construcción), imágenes, características, nota | — |
| **Terreno** (`terreno`) | /inventario/terrenos | nombre, empresa, clave catastral, ubicación, superficie, ciudad, servicios, nota | **Mapa/polígono NO se actualiza desde Sanity** (ver abajo) |
| **Parque Industrial** (`industrialPark`) | /parques-industriales-mexicali/* | nombre, descripción, imagen hero, ubicación, superficie, naves disponibles, inquilinos, infraestructura, galería, especificaciones de naves | **Solo se pueden editar los 4 parques existentes, no crear nuevos** (ver abajo) |
| **Blog** (`post`) | /blog | título (es/en/zh), descripción, contenido rico, imagen de portada, categoría, autor, fecha | — |
| **Noticias** (`noticia`) | /noticias | título (es/en/zh), descripción, contenido rico, imagen de portada, categoría, autor, fecha | — |
| **Categoría** (`category`) | usado por blog y noticias | título, slug, descripción | — |
| **Autor** (`author`) | usado por blog y noticias | nombre, slug, imagen, bio | — |

### Limitaciones importantes que las guías deben comunicar

#### Terrenos: el mapa no viene de Sanity

La tabla de terrenos se alimenta de Sanity, pero el **mapa interactivo** con los polígonos de cada terreno se alimenta de `src/data/terrenos-geo.json` (archivo GeoJSON local). El lookup se hace por `terrenoId` en `terrenos-geo-lookup.ts`.

**Consecuencia para Susana:** Puede agregar/editar terrenos en Sanity (nombre, superficie, servicios, etc.) y aparecerán en la tabla. Pero si quiere que un terreno nuevo aparezca en el mapa con su polígono correcto, necesita pedirle a Luis que agregue la geometría al GeoJSON.

**La guía debe decir:** "Para agregar un terreno nuevo al mapa, envía la ubicación a Luis."

#### Parques: editables pero no extensibles

El índice `/parques-industriales-mexicali` genera links dinámicamente desde Sanity (`park.slug`), pero las **páginas de ficha individual** son rutas estáticas hardcodeadas:

- `src/app/parques-industriales-mexicali/nelson-i/page.tsx`
- `src/app/parques-industriales-mexicali/nelson-ii/page.tsx`
- `src/app/parques-industriales-mexicali/vigia-i/page.tsx`
- `src/app/parques-industriales-mexicali/vigia-ii/page.tsx`

**Consecuencia:** Si alguien crea un quinto `industrialPark` en Sanity, el índice lo mostrará con un link que lleva a un 404.

**La guía debe decir:** "Puedes editar la información de los 4 parques existentes. Para agregar un parque nuevo, contacta a Luis — requiere crear la página en el código."

### Contenido que NO está en Sanity (NO editable por Susana)

| Sección | Fuente de datos | Notas |
|---|---|---|
| Portafolio Baumex (/constructora/portafolio) | `src/data/proyectos-baumex.ts` (archivo local) | Lista hardcodeada de 75+ proyectos. Requiere dev para modificar. |
| Páginas estáticas de constructora | Código JSX | Contenido de LEED, Build-to-Suit, etc. está en el código. |
| Header, Footer, textos de marketing | Código JSX | No son editables desde Sanity. |
| Geometría del mapa de terrenos | `src/data/terrenos-geo.json` | Polígonos GeoJSON locales. |

### Acceso a Sanity Studio

- **URL:** `gruponelson.mx/studio` (embebido en Next.js)
- **Autenticación:** Login de Sanity (email/Google)
- **Idiomas configurados:** Español (por defecto), Inglés, Chino
- **Plugins:** Vision (para queries GROQ), Internationalized Array

### Notas importantes para las guías

- Blog y Noticias tienen campos **internacionalizados** — Susana debe llenar al menos el español.
- Naves e Inventario son **monolingües** (solo español).
- Las imágenes de naves industriales se guardan como **rutas de string** (no como assets de Sanity). Hay que explicar esto claramente.
- Los parques industriales son documentos complejos con sub-objetos anidados (naves dentro de parques, especificaciones detalladas).
- El campo `estatus` de naves tiene opciones fijas: Disponible, Ocupada, En construcción.

---

## 2. Estructura de la sección

```
/instrucciones                          ← Página principal (índice)
/instrucciones/acceso-sanity            ← Cómo acceder y navegar Sanity Studio
/instrucciones/naves-industriales       ← Guía: editar naves disponibles
/instrucciones/terrenos                 ← Guía: editar terrenos (con nota sobre mapa)
/instrucciones/parques-industriales     ← Guía: editar fichas de parques (con nota sobre extensibilidad)
/instrucciones/blog                     ← Guía: crear/editar posts del blog
/instrucciones/noticias                 ← Guía: crear/editar noticias
/instrucciones/categorias-y-autores     ← Guía: gestionar categorías y autores
```

### Diseño de cada guía

Cada guía tendrá:

1. **Qué es esta sección** — breve explicación de qué se ve en el sitio
2. **Dónde aparece** — link directo a la página pública
3. **Qué puedes hacer y qué NO** — límites claros de editabilidad
4. **Campos y qué hace cada uno** — tabla con nombre del campo, qué poner, y ejemplo
5. **Paso a paso** — instrucciones numeradas con placeholders para screenshots/video
6. **Errores comunes** — cosas que podrían salir mal y cómo evitarlas
7. **Video tutorial** — placeholder para video que Luis grabará después

---

## 3. Protección por contraseña

### Enfoque elegido: `proxy.ts` + cookie firmada (HMAC)

### Por qué proxy.ts y no middleware anidado

Next.js 16 usa `proxy.ts` al nivel de `src/` (o en la raíz del proyecto si no hay carpeta `src/`). Se ubica al mismo nivel que `app/`, no dentro de ella. No existe concepto de "middleware por carpeta". El archivo `src/proxy.ts` es el lugar correcto para gate de autenticación por ruta.

### Verificación de cookie con HMAC (no solo existencia)

El valor de la cookie será un HMAC-SHA256 del password actual:

```
cookie_value = HMAC-SHA256(INSTRUCCIONES_PASSWORD, "instrucciones-auth-v1")
```

**Ventaja:** Si se rota `INSTRUCCIONES_PASSWORD`, todas las cookies existentes se invalidan automáticamente — el HMAC ya no coincide. No hay ventana de 30 días donde una cookie vieja siga valiendo.

### Flujo de autenticación

1. Usuario visita `/instrucciones/*`
2. `src/proxy.ts` intercepta. **Excepción:** si la ruta es `/instrucciones/login`, deja pasar sin verificar cookie (evita loop de redirect).
3. Extrae cookie `instrucciones-auth`
4. Calcula HMAC esperado a partir de `INSTRUCCIONES_PASSWORD` actual
5. Si cookie no existe o su valor ≠ HMAC esperado → redirect a `/instrucciones/login`
6. En login: ingresa contraseña → server action valida contra `INSTRUCCIONES_PASSWORD`
7. Si es correcta → setea cookie httpOnly con valor = HMAC del password, max-age 30 días
8. Si es incorrecta → muestra error

### Invalidación al rotar contraseña

Al cambiar `INSTRUCCIONES_PASSWORD` en `.env.local` y hacer redeploy:
- El HMAC esperado cambia
- Todas las cookies existentes fallan la verificación
- Todos los usuarios deben re-autenticarse con la nueva contraseña
- No hay que borrar cookies manualmente ni esperar expiración

### Archivos involucrados

```
src/proxy.ts                             ← Intercepta /instrucciones/* excepto /instrucciones/login (NUEVO o MODIFICACIÓN del existente)
src/app/(instrucciones)/
├── instrucciones/
│   ├── layout.tsx                       ← Layout propio SIN footer de marketing
│   ├── page.tsx                         ← Índice de guías
│   ├── login/page.tsx                   ← Formulario de contraseña
│   ├── actions.ts                       ← Server action: validar + setear cookie
│   ├── acceso-sanity/page.tsx
│   ├── naves-industriales/page.tsx
│   ├── terrenos/page.tsx
│   ├── parques-industriales/page.tsx
│   ├── blog/page.tsx
│   ├── noticias/page.tsx
│   └── categorias-y-autores/page.tsx
└── layout.tsx                           ← Layout del Route Group (sin Footer1)
```

### Route Group para aislar del chrome de marketing

El root `layout.tsx` actual inyecta `<Footer1 />` globalmente para todas las rutas. La sección de instrucciones no debe tener footer de marketing.

**Solución:** Route Group `(instrucciones)` con su propio `layout.tsx` que NO incluye Footer1. Esto requiere que las rutas actuales del sitio se muevan a un Route Group `(site)` — o alternativamente, que el root layout deje de renderizar Footer1 y cada grupo lo incluya por su cuenta.

**Decisión requerida de Luis:** ¿Preferencia entre estas opciones?

- **Opción A:** Crear Route Group `(instrucciones)` y mover el Footer1 del root layout al grupo `(site)` donde vive el resto del sitio. Esto toca archivos fuera de la sección instrucciones.
- **Opción B:** Dejar el root layout como está y que `/instrucciones` lo "tape" con un layout hijo que use `min-h-screen` y no muestre el footer visualmente (hack CSS). Menor blast radius pero menos limpio.

### Variables de entorno

```env
# .env.local
INSTRUCCIONES_PASSWORD=<contraseña que Luis defina>
```

### Consideraciones de seguridad

- Cookie httpOnly + Secure + SameSite=Lax
- Valor firmado con HMAC (no solo presencia)
- Rotación de password invalida automáticamente todas las sesiones
- Sin usuarios — solo una contraseña compartida
- No se necesita base de datos

---

## 4. Stack técnico para la sección

- **Páginas:** Server Components estáticos (contenido de guías hardcodeado en JSX)
- **Estilos:** Tailwind CSS v4 (usa las clases ya disponibles en el proyecto)
- **Componentes UI:** Los que ya existen en el proyecto (Button, Input, Card, etc.)
- **Navegación:** Sidebar lateral con links a cada guía
- **Responsive:** Mobile-first, sidebar colapsable en móvil
- **Videos:** Se integrarán como `<video>` o iframes (YouTube/Loom) en Fase 5

---

## 5. Orden de ejecución

### Fase 1: Plan ✅ (este documento)

### Fase 2: Infraestructura de la sección

**Prerequisitos (ejecutados desde MAIN o con aprobación explícita de Luis):**
- [ ] Decidir con Luis: Opción A vs Opción B para el footer (ver sección 3)
- [ ] Crear/modificar `src/proxy.ts` con gate HMAC para `/instrucciones/*` (excepto `/instrucciones/login`)
- [ ] Mover Footer1 del root layout al Route Group del sitio (si Opción A)
- [ ] Agregar `INSTRUCCIONES_PASSWORD` a `.env.local`

**Ejecutados desde este worktree (wt/instrucciones):**
- [ ] Crear Route Group `(instrucciones)` con layout propio (sin Footer1)
- [ ] Crear ruta `/instrucciones/login` con formulario de contraseña
- [ ] Crear server action con validación HMAC y seteo de cookie firmada
- [ ] Crear layout con navegación lateral
- [ ] Crear página índice (`/instrucciones`)

### Fase 3: Escribir guías (contenido)
- [ ] Guía: Acceso a Sanity Studio (login, navegación general)
- [ ] Guía: Naves industriales (todos los campos, estatus, imágenes)
- [ ] Guía: Terrenos (campos, ciudades, notas — **con advertencia clara sobre el mapa**)
- [ ] Guía: Parques industriales (documento complejo — **con advertencia de no crear nuevos**)
- [ ] Guía: Blog (internacionalización, contenido rico, imágenes)
- [ ] Guía: Noticias (similar a blog pero con sus diferencias)
- [ ] Guía: Categorías y autores (gestión auxiliar)

### Fase 4: Storyboards de video
- [ ] Definir qué se debe grabar para cada guía
- [ ] Crear placeholders con instrucciones de qué mostrar en cada video
- [ ] Marcar dónde van los screenshots (con texto descriptivo de qué capturar)

### Fase 5: Luis graba videos y se insertan
- [ ] Luis graba siguiendo los storyboards
- [ ] Se insertan en los placeholders correspondientes

---

## 6. Archivos fuera de `src/app/instrucciones/` que se tocarán

El plan original decía "no se tocan archivos fuera de la sección". Esto no es realista:

| Archivo | Cambio | Motivo | Quién lo ejecuta |
|---|---|---|---|
| `src/proxy.ts` | Crear o agregar regla | Protección por contraseña de la ruta | **MAIN** (archivo compartido, ownership de sistema) |
| `src/app/layout.tsx` | Mover Footer1 al Route Group (si Opción A) | Evitar chrome de marketing en /instrucciones | **MAIN** (layout raíz, ownership de sistema) |
| `.env.local` | Agregar `INSTRUCCIONES_PASSWORD` | Variable de entorno | **MAIN** o Luis manual (no es código versionado) |

**Carril de ejecución:** Los cambios a `src/proxy.ts` y `src/app/layout.tsx` son archivos compartidos fuera del scope de este worktree. Según las reglas de ownership, deben ejecutarse desde MAIN (o con aprobación explícita de Luis para que este worktree los toque). Este worktree se limita a archivos dentro de `src/app/(instrucciones)/`.

**Secuencia propuesta:**
1. MAIN ejecuta los cambios a proxy.ts y layout.tsx (o Luis aprueba que este worktree lo haga)
2. Este worktree crea todo lo que vive dentro de `src/app/(instrucciones)/`

---

## 7. Lo que NO se incluye

- Modificaciones a Sanity schemas
- Acceso admin a Sanity (eso se gestiona desde manage.sanity.io)
- Migrar datos locales (portafolio, GeoJSON) a Sanity
- Crear ruta dinámica `[slug]` para parques (eso sería trabajo separado)

---

## 8. Decisiones pendientes (para Luis)

1. **¿Cuál será la contraseña?** → Se guarda en `INSTRUCCIONES_PASSWORD`
2. **¿Opción A o B para el footer?** → A es más limpio pero toca el root layout; B es un hack CSS contenido
3. **¿Videos en YouTube/Loom o archivos locales?** → Afecta cómo se integran
4. **¿Alguna sección que NO quieras que Susana edite?** → Para excluirla de las guías
5. **¿El portafolio de Baumex debería migrar a Sanity eventualmente?** → Actualmente está hardcodeado

---

## 9. Nota sobre ubicación de este archivo

Este plan vive en `docs/planes/` del worktree `instrucciones`. Según la guía del proyecto, `docs/planes/*` es documentación de coordinación propiedad de MAIN. Este archivo debería moverse a MAIN o el usuario debe confirmar que es aceptable aquí por tratarse de un plan local de ejecución del worktree.
