#!/usr/bin/env bash
# Smoke tests para /api/submit-form.
#
# Valida las capas defensivas sin enviar emails reales:
#   1. Invalid JSON         → 400 error: invalid_body
#   2. Invalid payload      → 400 error: invalid_payload (Zod rechaza)
#   3. Invalid email format → 400 error: invalid_payload
#   4. CRLF en full_name    → 400 error: invalid_payload
#   5. Honeypot filled      → 200 success: true (silencioso, sin email)
#
# El happy path (payload válido → email real) y el rate limit se validan
# manualmente — cualquiera de esos dispararía correos reales a los
# destinatarios de nelson.com.mx. Ver comentarios al final del script.
#
# Uso:
#   ./scripts/smoke-test-submit-form.sh
#   TARGET=https://nelson.com.mx ./scripts/smoke-test-submit-form.sh
#
# Requiere: curl, jq. El dev server debe estar corriendo si el target es local.

set -euo pipefail

TARGET="${TARGET:-http://localhost:3002}"
ENDPOINT="$TARGET/api/submit-form"

PASS=0
FAIL=0

assert() {
  local name="$1"
  local expected_status="$2"
  local expected_error="$3"
  local actual_status="$4"
  local actual_body="$5"

  local actual_error
  actual_error="$(echo "$actual_body" | jq -r '.error // .success // empty' 2>/dev/null || echo '')"

  if [[ "$actual_status" == "$expected_status" && "$actual_error" == "$expected_error" ]]; then
    echo "  ✅ $name  →  status $actual_status, body ${actual_error}"
    PASS=$((PASS + 1))
  else
    echo "  ❌ $name"
    echo "     esperado: status $expected_status, body $expected_error"
    echo "     recibido: status $actual_status, body $actual_error"
    echo "     body raw: $actual_body"
    FAIL=$((FAIL + 1))
  fi
}

run() {
  local method="$1"
  local content_type="$2"
  local body="$3"
  curl -sS -o /tmp/smoke-body.json -w '%{http_code}' \
    -X "$method" \
    -H "Content-Type: $content_type" \
    -d "$body" \
    "$ENDPOINT"
}

echo "Smoke test: $ENDPOINT"
echo ""

# Test 1: invalid JSON body
STATUS=$(run POST "application/json" 'not-valid-json{{{')
BODY=$(cat /tmp/smoke-body.json)
assert "Invalid JSON body" "400" "invalid_body" "$STATUS" "$BODY"

# Test 2: Zod rejects payload without required fields
STATUS=$(run POST "application/json" '{}')
BODY=$(cat /tmp/smoke-body.json)
assert "Empty payload (Zod fail)" "400" "invalid_payload" "$STATUS" "$BODY"

# Test 3: Zod rejects payload with invalid email
STATUS=$(run POST "application/json" '{"full_name":"Test User","email":"not-an-email"}')
BODY=$(cat /tmp/smoke-body.json)
assert "Invalid email format (Zod fail)" "400" "invalid_payload" "$STATUS" "$BODY"

# Test 4: Zod rejects payload with CRLF injection in full_name
STATUS=$(run POST "application/json" '{"full_name":"Test\r\nBcc: attacker@evil.com","email":"test@example.com"}')
BODY=$(cat /tmp/smoke-body.json)
assert "CRLF in full_name (Zod fail)" "400" "invalid_payload" "$STATUS" "$BODY"

# Test 5: Honeypot filled → 200 silencioso (sin enviar email)
STATUS=$(run POST "application/json" '{"full_name":"Smoke Bot","email":"bot@example.com","website":"http://spam.example"}')
BODY=$(cat /tmp/smoke-body.json)
assert "Honeypot filled (silent 200)" "200" "true" "$STATUS" "$BODY"

# Rate limit — NO se testea automáticamente en este script.
#
# Razón: el honeypot se evalúa ANTES del rate limit en el endpoint (por
# diseño — el honeypot es sync y gratis; rate limit cuesta una llamada
# HTTPS a Upstash). Entonces un payload con `website` relleno siempre
# devuelve 200 sin tocar Upstash. Para disparar el rate limit hay que
# enviar payloads válidos, y eso dispara emails reales a las 4 cuentas
# de nelson.com.mx. No queremos eso desde un smoke test.
#
# Validación manual del rate limit (requiere server con
# UPSTASH_RATELIMIT_FORCE=1 y aceptar que llegarán emails reales):
#
#   for i in 1 2 3 4; do
#     curl -sS -X POST http://localhost:3000/api/submit-form \
#       -H "Content-Type: application/json" \
#       -d '{"full_name":"Rate Test","email":"rate@example.com"}' \
#       -w "\n  → status %{http_code}\n"
#   done
#   # Espera: primeros 3 = 200, 4to = 429.

rm -f /tmp/smoke-body.json

echo ""
echo "Resultado: $PASS pasados, $FAIL fallados"
[[ "$FAIL" -eq 0 ]] || exit 1
