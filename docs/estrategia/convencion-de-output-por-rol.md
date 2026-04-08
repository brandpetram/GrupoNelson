# Convención — Output Por Rol

## Para qué existe este documento

Este documento deja una regla simple para el sistema de roles del proyecto:

**todo rol o reviewer debe definir qué entrega y en qué formato lo entrega.**

Sin eso, un rol puede pensar bien y aun así dejar ambigüedad operativa:

- no queda claro cuándo terminó
- no queda claro qué consume el siguiente rol
- no queda claro si debe responder inline, escribir archivo o producir un brief

---

## Regla base

Todo rol debe tener dos cosas explícitas:

1. `Output lógico`
2. `Formato de salida`

### `Output lógico`

Responde:

**¿Qué entrega conceptualmente este rol?**

Ejemplos:

- un ángulo
- un brief
- un diagnóstico
- un rebalanceo narrativo
- un paquete de contexto
- una revisión de fidelidad

### `Formato de salida`

Responde:

**¿Cómo entrega eso en la práctica?**

Ejemplos:

- respuesta inline
- brief en `docs/copy/angle-briefs/`
- nota canónica en `docs/continuidad/worktrees/`
- paquete de contexto en archivo
- findings inline
- prompt para otro worktree

---

## Default útil

Si un rol no necesita dejar memoria reutilizable, el formato de salida por defecto puede ser:

- `inline en la conversación`

Si el output sí debe sobrevivir y servir después, entonces debe decir explícitamente:

- qué archivo escribe
- desde qué frente lo escribe
- y quién lo mantiene

---

## Qué evita esta convención

Evita cosas como:

- roles que “piensan” pero no aterrizan nada consumible
- prompts donde no queda claro si hay que escribir archivo o no
- outputs que nadie sabe dónde viven
- dependencia excesiva de memoria humana

---

## Aplicación al sistema actual

Hoy esta convención aplica, como mínimo, a:

- `Context Curator`
- `Value Finder`
- `Angle Architect`
- `Narrative Copywriter`
- `QA Angle`
- `QA Narrative`
- `Visual Matchmaker`

---

## Frase guía

**Un rol no queda completo cuando sabe pensar. Queda completo cuando también sabe qué entrega y en qué formato lo entrega.**
