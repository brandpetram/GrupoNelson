# Prompt Template — Angle Architect Re-Audit

## Para qué existe este documento

Este documento deja una plantilla oficial para correr un `Angle Architect re-audit` cuando:

- cambió una verdad canónica del negocio,
- una prueba dejó de ser independiente,
- un naming visible cambió,
- una stat dejó de ser defendible,
- o una página ya no puede seguir construyéndose como si nada hubiera pasado.

La idea es no depender de memoria, improvisación o prompts distintos cada vez.

---

## Cuándo usar este prompt

Úsalo cuando pase cualquiera de estas cosas:

- un cliente visible cambia de nombre comercial
- una razón social interna no debe mostrarse públicamente
- dos entidades que parecían separadas en realidad son la misma
- una prueba deja de ser independiente
- un caso deja de poder vivir como caso separado
- una stat ya no es suficientemente defendible
- un builder o worktree ya construyó algo, pero la página empezó a sonar rara después de una aclaración canónica

Si el problema es solo:

- repetición,
- tono,
- headers débiles,
- o microcopy,

entonces probablemente no necesitas `re-audit`. Ahí primero van `Codex review`, `qa-copy` o una corrección editorial normal.

---

## Qué debe leer antes de responder

Como mínimo, `Angle Architect re-audit` debe leer:

1. la definición canónica del rol en `docs/copy/roles/angle-architect/angle-architect.md`
2. el brief actualizado de la sección
3. la nota canónica del worktree si existe
4. la implementación actual de la sección
5. cualquier aclaración canónica nueva que haya disparado el problema

Si el worktree no ve automáticamente cambios de `MAIN`, el prompt debe decir explícitamente:

- que lea esos archivos como referencia externa desde `MAIN`
- y que los tome como fuente de verdad por encima de la copia local vieja si encuentra conflicto

---

## Qué debe entregar

Una re-auditoría buena no se queda en:

- "el ángulo sigue bien"

Tiene que responder cosas concretas:

1. si el ángulo general sigue vivo o no
2. qué cambió en la arquitectura narrativa
3. cuántas pruebas independientes quedan realmente
4. qué prueba única carga cada bloque
5. qué bloque absorbió demasiado peso
6. qué bloque quedó demasiado delgado o sin función clara
7. si el cierre sigue demostrando algo o ya solo rellena
8. qué debe cambiar antes de seguir construyendo

---

## Plantilla oficial

```text
Actúa como Angle Architect en modo `re-audit` para `[RUTA_DE_LA_SECCION]`.

No implementes todavía.
No me des layout todavía.
No me des polish de frases todavía.

Tu trabajo es revisar si la página sigue editorialmente sana después de una aclaración canónica importante.

Antes de responder, lee completo:
1. [RUTA_BRIEF_ACTUALIZADO]
2. [RUTA_NOTA_CANONICA_WORKTREE]
3. [RUTA_ACLARACION_CANONICA_OPCIONAL]
4. [RUTA_PAGE_TSX]
5. [RUTA_SECTION_1]
6. [RUTA_SECTION_2]
7. [RUTA_SECTION_3_OPCIONAL]

Importante:
- si alguno de esos archivos vive en `MAIN` y no en tu worktree, léelo como referencia externa
- toma esas referencias como fuente de verdad por encima de cualquier versión local vieja si hay conflicto
- no inventes facts nuevos

Contexto del problema:
- [EXPLICAR_BREVE_CAMBIO_CANONICO]
- [EXPLICAR_QUE_SE_SOSPECHA_QUE_SE_ROMPIO]

Pregunta central:
¿La página todavía funciona con su arquitectura narrativa actual, o el cambio canónico ya rompió el balance interno de prueba?

Quiero que determines:
1. si el ángulo general sigue siendo correcto
2. si el mismo número de pruebas independientes sigue existiendo o no
3. qué prueba única debe cargar cada bloque
4. qué bloque absorbió demasiado peso
5. qué bloque quedó demasiado corto, confuso o sin función clara
6. si el cierre sigue demostrando algo específico o ya solo rellena
7. si el problema es de ángulo, de arquitectura narrativa, o solo de ejecución

Importante:
- no quiero simetría artificial
- pero tampoco quiero un caso dominante que se coma toda la página y deje a los demás como ecos
- no quiero microcopy por ahora
- no quiero implementación todavía

Entrégame:
1. diagnóstico
2. qué quedó inválido
3. qué sigue siendo válido
4. nueva distribución de prueba entre bloques
5. estructura narrativa recomendada
6. riesgos si seguimos construyendo sin corregir esto
7. recomendación de siguiente paso: reescribir brief, bajar instrucción al worktree, o implementar
```

---

## Instrucciones para llenarlo bien

### 1. Nombra el problema real

No pongas algo genérico como:

- "revisa el copy"

Mejor explica qué cambió:

- `Interiores Aéreos ya no puede vivir como cliente separado`
- `la tercera prueba ya no es independiente`
- `la stats bar quedó desalineada con la verdad canónica`

### 2. Dale acceso a la verdad nueva

Si el worktree no ve el brief o la nota nueva, dilo explícitamente.

Ejemplo:

```text
Lee estas rutas desde MAIN como referencia externa.
Tu worktree no ve estos cambios automáticamente.
```

### 3. No le pidas implementación en el mismo prompt

Primero:

- diagnóstico
- redistribución de prueba
- estructura nueva

Después, en otro prompt:

- implementación

### 4. No le pidas "mejorar" si el problema es estructural

Si el problema es:

- número de casos
- independencia de pruebas
- peso desigual entre bloques
- cierre sin función clara

entonces el verbo correcto no es:

- "mejora"

Sino:

- `re-audita`
- `redistribuye`
- `diagnostica`

---

## Checklist antes de enviarlo

- ¿Ya existe una aclaración canónica nueva?
- ¿El brief ya fue actualizado o al menos ya sabes cuál es la nueva verdad?
- ¿El prompt le da acceso al brief correcto?
- ¿El prompt evita implementación temprana?
- ¿El prompt le pide distinguir entre ángulo, arquitectura narrativa y ejecución?
- ¿El prompt le pide decir qué bloque demuestra qué?

Si alguna respuesta es `no`, todavía no está listo.

---

## Qué hacer después de la respuesta

Si la respuesta es buena, el flujo correcto es:

1. `MAIN` actualiza brief y nota canónica si hace falta
2. `MAIN` decide qué worktree sí está afectado
3. se baja una instrucción nueva al worktree afectado
4. el worktree reescribe e implementa
5. luego entran `codex:adversarial-review`, `qa-copy` y revisión visual

Si la respuesta es mala o demasiado superficial:

- no la uses para implementar
- vuelve a correr el `re-audit`
- o mejora el contexto de entrada

---

## Regla final

`Angle Architect re-audit` no existe para escribir frases más bonitas.

Existe para decidir si la página sigue teniendo una estructura de prueba sana después de que cambió la verdad.
