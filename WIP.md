# WIP Grupo Nelson — qué tengo abierto

> Qué dejé abierto en este proyecto. Usar al retomar sesión larga.
> Para WIP cross-project ver `~/lmuzquiz/WIP.md`.

---

## 🔄 En curso

### Proteger formulario de contacto contra spam

- **Fecha inicio:** 2026-04-19
- **Última actualización:** 2026-04-19
- **Status:** plan escrito, sin implementar
- **Gatillo:** empezamos a recibir emails de spam a `hjg/hjn/jcnelson/sosuna@nelson.com.mx` con payload basura (nombre/empresa/mensaje con strings random). El endpoint `/api/submit-form` no tiene ninguna protección hoy — Zod, Turnstile, Upstash rate limit, ni honeypot.
- **Cuentas ya dadas de alta:** Upstash (Redis KV) y Cloudflare Turnstile (CAPTCHA invisible). Credenciales en `~/lmuzquiz/.secrets/tokens.md`.
- **Plan:** `docs/planes/plan-para-proteger-formulario-contacto.md` — 4 fases (escape HTML + Zod + honeypot, Upstash rate limit, Turnstile, observabilidad). Pasó tres rondas de review:
  - **Ronda 1 (Codex):** 6 hallazgos aplicados — HTML injection ortogonal, IP source confiable, política de contrato Zod, orden de checks corregido, schema como módulo compartido, honeypot con respuesta silenciosa.
  - **Ronda 2 (Gemini Flash):** 5 hallazgos aplicados — tabla de campos por form verificada contra código, orden parse-first, bypass de rate limit en dev, Turnstile `onExpire` proactivo, nota sobre doble-escape si se migra a react-email, comandos `vercel logs` para métricas. 2 descartados.
  - **Ronda 3 (Codex):** 4 hallazgos + 2 preguntas, todos aplicados — honeypot exige serializar `website` en los 3 forms (si no, queda muerto), separar transport schema de form-state schema (cliente usa `submitSchema` para validar payload pre-fetch, no state), `escapeHtml` **solo** al body HTML (no a `replyTo` ni `subject` — son headers; para `subject` validar CRLF en Zod), log format JSON puro (prefijo dentro del objeto) con comandos `jq -cR 'fromjson?'`, orden de capas en sección "Decisión" alineado con orden parse-first, nota sobre aviso de privacidad para Turnstile.
  - **Ronda 4 (Gemini 2.5 revisando con código):** 5 hallazgos aplicados — orden honeypot/rate-limit inconsistente en Fase 2 (corregido para alinear con orden global), error-codes de Turnstile expuestos al cliente vía código abstracto (`verification_expired` vs `verification_failed`) para que el retry silencioso sea posible, bypass completo del rate limit en dev por default (con override `UPSTASH_RATELIMIT_FORCE=1` para probar integración explícitamente), manejo específico de status 429/403/400/500 en los 3 forms (no más `if (!res.ok) throw` genérico), fix de interpolación `null null` en forms legacy con `String(data.get(...) ?? '').trim() + filter(Boolean).join(' ')`.
- **Prerrequisitos antes de implementar** (usuario debe confirmar):
  - Upstash: crear Redis Database regional (us-east-1), copiar `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN`.
  - Turnstile: crear Site, decidir widget type (**Managed** recomendado vs Invisible), dominios permitidos (`nelson.com.mx`, `localhost`; decidir sobre `*.vercel.app` / preview), copiar `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY`.
  - Guardar credenciales en `~/lmuzquiz/.secrets/tokens.md`.
  - Cargar las 4 env vars en Vercel (Production + Preview) y en `.env.local`.
- **Próximo paso:**
  1. Segunda ronda de review del plan (Gemini u otra pasada de Codex) para capturar lo que se haya introducido al integrar los fixes de la primera ronda.
  2. Triagear hallazgos nuevos. Si son detalles menores, arrancar implementación.
  3. Arrancar Fase 1 (escape HTML + Zod + honeypot) — menor riesgo, sin deps externas, cierra la vulnerabilidad de HTML injection además del spam tonto.
  4. Fases 2-3 (rate limit + Turnstile) en commits separados para poder medir el efecto de cada capa en logs de Vercel.
- **Archivos principales:**
  - `src/app/api/submit-form/route.ts`
  - `src/app/es/contacto/contact-form.tsx`
  - `src/app/es/contactanos/contact-section.tsx`
  - `src/app/(en)/contact/contact-section.tsx`
- **Env vars pendientes de cargar en Vercel (Production + Preview):**
  - `UPSTASH_REDIS_REST_URL`
  - `UPSTASH_REDIS_REST_TOKEN`
  - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
  - `TURNSTILE_SECRET_KEY`
- **Decisión pendiente:** en Turnstile, whitelistear el dominio de preview `*.vercel.app` o no. Impacta si quiero validar el form desde un PR preview antes de merge a main.

---

## ⏸ Pausado / bloqueado

(vacío)

---

## ✅ Recientemente terminado (últimos 30 días)

- **2026-04-18 — Visor de fotografías admin rediseñado** — sidebar sticky + filtros por sección (`2dd3ca3`). Reemplazó el visor viejo de `/proyecto/fotografias`.
- **2026-04-18 — Inventario completo + grafo de imports en admin** (`62c2522`). Permite ver dónde se usa cada foto de `public/` en páginas finales, no solo en archivos intermedios.
- **2026-04-17 — JSON-LD WebSite + Organization en layout raíz** (`936959c`).
- **2026-04-16 — Fix placeholders Lamda + imagen duplicada Kappa** en turnkey (`cdf671b`).
- **2026-04-15 — Hero engineering-design optimizado** (`109f2c1`) — cuadrícula + TypewriterTipo.
- **2026-04-14 — Videos tutoriales de YouTube en guías de admin** (`88ccd09`).
- **2026-04-13 — Año fundación corregido** 1965 → 1967 en ES + EN (`faab8d0`).
- **2026-04-11 — Versión bilingüe completa + rediseño parques industriales** — ver memoria de trabajo `docs/continuidad/memoria-de-trabajo-2026-04-06-al-11.md` para el detalle de la semana.

---

## ❌ Descartado

(vacío)
