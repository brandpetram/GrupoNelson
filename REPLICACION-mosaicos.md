# Replicación: Mosaicos (Mosaico2ConProps + MosaicoInvertidoConProps)

## Origen: SDI
## Destino: GrupoNelson
## Fecha: 2026-01-29

---

## ⚠️ NO COPIAR (ya existen en proyecto destino):
- [x] Header (ya existe en destino)
- [x] Footer (ya existe en destino)

---

## Componentes a copiar y actualizar:

### Componentes principales:
- [x] mosaico-2-con-props.tsx
- [x] mosaico-invertido-con-props.tsx

### Subcomponentes (dependencias):
- [x] imagen-rectangulo.tsx (en `/components/ui/brandpetram/`)

### Total: 3 componentes

---

## Progreso por Etapa:

### ✅ COMPLETADO: Setup Inicial
- [x] Componentes copiados
- [x] Imports agregados a page.tsx
- [x] Bloque JSX insertado en page.tsx

**Próximo paso:** Build y verificación

### ✅ COMPLETADO: ETAPA 1 - Reemplazo de Imágenes
- [x] mosaico-2-con-props.tsx (3 imágenes: 251-253)
- [x] mosaico-invertido-con-props.tsx (3 imágenes: 254-256)

**Imágenes reemplazadas:**
- bloque2ImagenSrc (mosaico-2) → 251
- bloque3ImagenSrc (mosaico-2) → 252
- imagenDerechaSrc (mosaico-2) → 253
- bloque2ImagenSrc (mosaico-invertido) → 254
- bloque3ImagenSrc (mosaico-invertido) → 255
- imagenIzquierdaSrc (mosaico-invertido) → 256

Total completado: 6/6 imágenes ✅
Build: ✅ Compiló correctamente

### ✅ COMPLETADO: ETAPA 2 - Reemplazo de Alts
- [x] bloque2ImagenAlt (mosaico-2) → "Lorem ipsum"
- [x] bloque3ImagenAlt (mosaico-2) → "Lorem ipsum"
- [x] imagenDerechaAlt (mosaico-2) → "Lorem ipsum"
- [x] bloque2ImagenAlt (mosaico-invertido) → "Lorem ipsum"
- [x] bloque3ImagenAlt (mosaico-invertido) → "Lorem ipsum"
- [x] imagenIzquierdaAlt (mosaico-invertido) → "Lorem ipsum"

Total completado: 6/6 alts ✅

### ✅ COMPLETADO: ETAPA 3 - Reemplazo de Títulos
- [x] bloque1Titulo: "Conveyor Industrial" → "Soluciones Industriales"
- [x] bloque4Titulo: "¿Tienes preguntas?" → "¿Necesitas información?"

Total completado: 2/2 títulos ✅

### ✅ COMPLETADO: ETAPA 4 - Reemplazo de Textos
- [x] bloque1Descripcion: "Diseño e Instalación de Sistemas Conveyor Lorem" → "Infraestructura de calidad con soluciones a medida"
- [x] bloque4Descripcion: "Contáctanos ahora para resolver tus preguntas" → "Contáctanos para conocer nuestras soluciones"
- [x] bloque1LinkTexto: "Ver Más" → "Explorar"
- [x] bloque4LinkTexto: "Contactar Aquí" → "Contactar"

Total completado: 4/4 textos ✅

---

## 📊 RESUMEN FINAL

✅ **TODAS LAS ETAPAS COMPLETADAS**

| Etapa | Estado | Detalles |
|-------|--------|----------|
| Setup Inicial | ✅ | Componentes copiados e integrados |
| Etapa 1: Imágenes | ✅ | 6/6 imágenes (251-256) |
| Etapa 2: Alts | ✅ | 6/6 alts → "Lorem ipsum" |
| Etapa 3: Títulos | ✅ | 2/2 títulos adaptados |
| Etapa 4: Textos | ✅ | 4/4 textos adaptados |
| **Build Final** | ✅ | Compiló correctamente |

---

## Notas:
- Estos componentes usan props, por lo que la adaptación es sencilla
- Las imágenes se reemplazan directamente en los props del componente de page.tsx
- Replicación completada en 4 etapas sucesivas con verificaciones de build
