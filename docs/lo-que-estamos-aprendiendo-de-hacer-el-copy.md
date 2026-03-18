# Lo que estamos aprendiendo de hacer el copy

Documento vivo. Se actualiza cada vez que encontramos un error, un patrón a evitar, o una regla nueva.

---

## Errores detectados

### 1. Escribir en tercera persona singular en vez de primera plural o segunda persona imperativa

**Fecha:** 2026-03-17
**Dónde:** `/constructora/baumex`

**El error:** Escribir "Baumex ha operado", "Baumex tiene", "Baumex opera" — como si habláramos de otra empresa. Es tercera persona singular.

**Lo correcto:** Dos modos permitidos:
- **Segunda persona imperativa (tú):** "Construye tu nave", "Escala tu operación", "Opera con la certeza de..."
- **Primera persona plural (nosotros):** "Diseñamos", "Ejecutamos", "Gestionamos", "Contamos con..."

**Nunca:** Tercera persona como si la empresa fuera alguien más. "Baumex tiene certificación ISN" → "Contamos con certificación ISN" o mejor: "Opera con la certeza de una constructora certificada ISN por Honeywell."

**Regla QA:** Detectar frases que empiecen con "Baumex" o "Grupo Nelson" seguido de un verbo conjugado en tercera persona (tiene, es, opera, cuenta, gestiona, ha construido, etc.)

---

### 2. Usar lenguaje morboso o negativo

**Fecha:** 2026-03-17
**Dónde:** `/constructora/baumex` — heading de seguridad

**El error:** El heading decía "1,092,745 horas hombre trabajadas. Cero muertes." — suena morboso, negativo, y poco profesional.

**Lo correcto:** "Más de un millón de horas hombre trabajadas con récord de seguridad impecable" — comunica lo mismo sin invocar la imagen de muerte.

**Regla QA:** Detectar palabras negativas en headings: "muerte", "muertes", "accidente fatal", "sin fallecidos", "cero víctimas".

---

### 3. Usar inline styles en vez de Tailwind

**Fecha:** 2026-03-17
**Dónde:** `/constructora/baumex`

**El error:** Se usaron `style={{ }}` en JSX cuando el proyecto usa Tailwind CSS v4.

**Lo correcto:** Siempre Tailwind. `className="text-3xl font-bold"` no `style={{ fontSize: '2rem' }}`.

**Regla QA:** Detectar `style={{` o `style={` en archivos JSX/TSX del copy.

---

## Reglas confirmadas para el copy

1. **Segunda persona imperativa** como modo primario en headings y aperturas
2. **Primera persona plural** para describir capacidades ("Diseñamos", "Ejecutamos")
3. **Nunca tercera persona** para hablar de nosotros mismos ("Baumex tiene" ❌)
4. **Datos verificables siempre** — números, nombres, fechas
5. **Nombres propios > categorías** — "Gulfstream" no "empresa aeroespacial Fortune 500"
6. **Narrativa de hechos, no de opiniones**
7. **Test del competidor** — si Yamsa puede decir lo mismo, reescribir
8. **Cero clichés** — lista prohibida en `docs/research-copywriting-b2b-industrial.md`
9. **Keywords integrados en frases imperativas naturales**
10. **Respuesta directa en los primeros 40-60 palabras** (para GEO)
11. **Lenguaje positivo en headings** — nunca invocar lo negativo
12. **Tailwind, nunca inline styles**

---

## Script QA pendiente

Se va a crear un script Python (`scripts/qa-copy.py`) que valide automáticamente cada página de copy contra estas reglas. Inspirado en el `validate_report.py` del skill de deep-research.

### Checks planeados:

- [ ] Detectar tercera persona singular ("Baumex tiene", "Grupo Nelson es", "La constructora opera")
- [ ] Detectar clichés prohibidos ("solución integral", "comprometidos con", "líderes en", etc.)
- [ ] Detectar inline styles (`style={{`)
- [ ] Detectar lenguaje negativo en headings (muerte, fatal, víctima)
- [ ] Verificar que el H1 contenga un verbo imperativo
- [ ] Verificar que los primeros 60 palabras contengan un dato duro (número)
- [ ] Verificar que haya al menos un keyword objetivo por página
- [ ] Contar densidad de datos duros (al menos 1 cada 200 palabras)
- [ ] Detectar frases we-oriented débiles ("te ayudamos a", "te ofrecemos")
