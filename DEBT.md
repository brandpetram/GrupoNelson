# DEBT — Grupo Nelson

> Decisiones sub-óptimas aceptadas para este repo, sin fecha de cierre.
> Para deuda técnica cross-project ver `~/lmuzquiz/DEBT.md`.

---

## TD-001 — Turnstile en modo fail-open ante errores de red

- **Fecha identificada:** 2026-04-20
- **Archivo:** `src/lib/turnstile.ts`
- **Qué hace hoy:** si el `fetch` al endpoint `siteverify` de Cloudflare
  lanza (timeout, DNS, network), `verifyTurnstile` devuelve `{ ok: true }`.
  Esto acepta cualquier `turnstileToken` con shape válida (≥10 chars)
  durante ese error. Ya documentado como decisión consciente en el propio
  archivo (comentario arriba de la función).
- **Por qué se aceptó:**
  - Outages grandes de Cloudflare Turnstile son raros (~2-5 horas/año
    estimadas).
  - Con 1-10 leads/mes esperados para Grupo Nelson, el riesgo de perder
    un lead real por un outage es de ~1 cada 15-20 años. Prácticamente
    cero.
  - El rate limit (3/h por IP) y el honeypot siguen activos — no es que
    el endpoint quede totalmente abierto durante un outage.
  - El vector de ataque es teórico para un sitio chico; los bots masivos
    que estamos viendo no son sofisticados como para detectar un outage
    y bypass durante esa ventana.
- **Cuándo revisarlo:**
  - Si el volumen de leads crece y compensa el costo de falsos
    rechazos durante outages de CF.
  - Si detectamos (por logs) que bots están explotando el fail-open.
  - Si hay un incidente concreto atribuible a este bypass.
- **Fix cuando se decida:** cambiar el `catch` en `src/lib/turnstile.ts`
  para devolver `{ ok: false, code: 'failed' }` en lugar de `{ ok: true }`.
  Raised como hallazgo por Codex en sesión 2026-04-20.
