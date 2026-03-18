#!/usr/bin/env python3
"""
QA de Copy Comercial — Grupo Nelson
Valida que el copy cumpla las reglas definidas en:
- docs/research-copywriting-b2b-industrial.md (12 reglas)
- docs/lo-que-estamos-aprendiendo-de-hacer-el-copy.md (errores detectados)

Uso:
  python3 scripts/qa-copy.py src/app/constructora/baumex/page.tsx
  python3 scripts/qa-copy.py --all   (valida todas las páginas con copy)
"""

import re
import sys
import os
import glob

# ─── Configuración ─────────────────────────────────────────────────

ENTITY_NAMES = ["Baumex", "Grupo Nelson", "La constructora", "La empresa", "Nelson"]

THIRD_PERSON_VERBS = [
    "tiene", "es", "opera", "cuenta", "gestiona", "ha construido",
    "ha operado", "ofrece", "maneja", "diseña", "construye", "ejecuta",
    "entrega", "desarrolla", "coordina", "integra", "habilita", "garantiza",
    "fue", "ha sido", "puede", "sabe", "conoce", "trabaja", "posee",
    "demuestra", "muestra", "presenta", "incluye", "cumple", "utiliza",
    "emplea", "aplica", "provee", "administra", "supervisa",
]

CLICHES = [
    "solución integral",
    "comprometidos con",
    "líderes en",
    "los mejores",
    "calidad total",
    "innovador",
    "vanguardia",
    "servicio personalizado",
    "cliente satisfecho",
    "precio competitivo",
    "de clase mundial",
    "cutting-edge",
    "industry-leading",
    "world-class",
    "best-in-class",
    "nos apasiona",
    "nuestra prioridad es",
    "la opción preferida",
    "líder del mercado",
    "líderes del mercado",
    "amplia experiencia",
    "gran capacidad",
    "excelencia en",
]

NEGATIVE_HEADING_WORDS = [
    "muerte", "muertes", "fallecido", "fallecidos", "víctima", "víctimas",
    "fatal", "fatales", "deceso", "decesos", "mortal", "mortales",
]

WE_ORIENTED_WEAK = [
    "te ayudamos a",
    "te ofrecemos",
    "te brindamos",
    "te proporcionamos",
    "estamos para servirte",
    "estamos a tus órdenes",
    "nuestro compromiso es",
]

IMPERATIVE_VERBS = [
    "Construye", "Escala", "Opera", "Accede", "Asegura", "Reduce",
    "Elimina", "Acelera", "Simplifica", "Maximiza", "Consolida",
    "Define", "Instálate", "Optimiza", "Ejecuta", "Alcanza",
]

KEYWORDS = [
    "naves industriales mexicali",
    "espacios industriales mexicali",
    "parques industriales",
    "construcción de naves industriales",
    "build-to-suit",
    "nave industrial",
    "parque industrial",
]

# ─── Extracción de texto ───────────────────────────────────────────

def extract_text_from_tsx(content):
    """Extrae texto visible de JSX (entre > y <, y strings en props)."""
    # Eliminar comentarios JSX {/* ... */}
    content = re.sub(r'\{/\*.*?\*/\}', '', content, flags=re.DOTALL)
    # Eliminar comentarios JS // ...
    content = re.sub(r'//.*$', '', content, flags=re.MULTILINE)

    lines = []
    # Texto entre tags JSX
    for match in re.finditer(r'>([^<>{]+)<', content):
        text = match.group(1).strip()
        if text and not text.startswith('{') and len(text) > 2:
            lines.append(text)
    return '\n'.join(lines)


def extract_headings(content):
    """Extrae texto de h1, h2, h3."""
    headings = []
    for match in re.finditer(r'<h[123][^>]*>(.*?)</h[123]>', content, re.DOTALL):
        text = re.sub(r'<[^>]+>', '', match.group(1))
        text = text.strip()
        if text:
            headings.append(text)
    return headings


def extract_first_60_words(text):
    """Extrae las primeras 60 palabras del texto visible."""
    words = text.split()
    return ' '.join(words[:60])

# ─── Checks ────────────────────────────────────────────────────────

def check_third_person(text, filename):
    """Detecta tercera persona singular hablando de nosotros mismos."""
    issues = []
    for entity in ENTITY_NAMES:
        for verb in THIRD_PERSON_VERBS:
            pattern = rf'\b{re.escape(entity)}\s+{re.escape(verb)}\b'
            matches = re.findall(pattern, text, re.IGNORECASE)
            for m in matches:
                issues.append(f'Tercera persona detectada: "{m}"')
    return issues


def check_cliches(text, filename):
    """Detecta frases cliché prohibidas."""
    issues = []
    text_lower = text.lower()
    for cliche in CLICHES:
        if cliche.lower() in text_lower:
            issues.append(f'Cliché detectado: "{cliche}"')
    return issues


def check_inline_styles(content, filename):
    """Detecta inline styles en JSX."""
    issues = []
    matches = re.findall(r'style=\{\{[^}]+\}\}', content)
    if matches:
        issues.append(f'Inline styles detectados: {len(matches)} ocurrencias (usar Tailwind)')
    return issues


def check_negative_headings(headings, filename):
    """Detecta lenguaje negativo en headings."""
    issues = []
    for heading in headings:
        heading_lower = heading.lower()
        for word in NEGATIVE_HEADING_WORDS:
            if word in heading_lower:
                issues.append(f'Lenguaje negativo en heading: "{word}" en "{heading[:60]}..."')
    return issues


def check_h1_imperative(headings, filename):
    """Verifica que el H1 contenga un verbo imperativo."""
    issues = []
    if headings:
        h1 = headings[0]
        has_imperative = any(h1.startswith(verb) or f' {verb.lower()} ' in f' {h1.lower()} '
                            for verb in IMPERATIVE_VERBS)
        if not has_imperative:
            issues.append(f'H1 no empieza con verbo imperativo: "{h1[:80]}..."')
    return issues


def check_first_60_words_data(text, filename):
    """Verifica que las primeras 60 palabras contengan un dato duro (número)."""
    issues = []
    first60 = extract_first_60_words(text)
    if not re.search(r'\d', first60):
        issues.append('Las primeras 60 palabras no contienen ningún dato numérico')
    return issues


def check_keyword_presence(text, filename):
    """Verifica que al menos un keyword objetivo aparezca en el texto."""
    issues = []
    text_lower = text.lower()
    found = [kw for kw in KEYWORDS if kw.lower() in text_lower]
    if not found:
        issues.append('No se encontró ningún keyword objetivo en el texto')
    return issues


def check_data_density(text, filename):
    """Verifica densidad de datos duros (al menos 1 número cada 200 palabras)."""
    issues = []
    words = text.split()
    total_words = len(words)
    numbers = re.findall(r'\d[\d,.]+', text)

    if total_words > 200:
        expected = total_words // 200
        if len(numbers) < expected:
            issues.append(
                f'Baja densidad de datos: {len(numbers)} números en {total_words} palabras '
                f'(esperado al menos {expected})'
            )
    return issues


def check_we_oriented(text, filename):
    """Detecta frases we-oriented débiles."""
    issues = []
    text_lower = text.lower()
    for phrase in WE_ORIENTED_WEAK:
        if phrase.lower() in text_lower:
            issues.append(f'Frase we-oriented débil: "{phrase}"')
    return issues

# ─── Runner principal ──────────────────────────────────────────────

def validate_file(filepath):
    """Ejecuta todos los checks sobre un archivo."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Solo validar si tiene copy (buscar el marcador)
    if 'COPY COMERCIAL' not in content and '<h1' not in content:
        return None, []

    text = extract_text_from_tsx(content)
    headings = extract_headings(content)
    filename = os.path.basename(filepath)

    all_issues = []
    warnings = []

    # Checks críticos (errores)
    checks = [
        ("Tercera persona", check_third_person(text, filename)),
        ("Clichés", check_cliches(text, filename)),
        ("Inline styles", check_inline_styles(content, filename)),
        ("Headings negativos", check_negative_headings(headings, filename)),
        ("We-oriented", check_we_oriented(text, filename)),
    ]

    # Checks de calidad (warnings)
    quality_checks = [
        ("H1 imperativo", check_h1_imperative(headings, filename)),
        ("Datos en primeras 60 palabras", check_first_60_words_data(text, filename)),
        ("Keywords presentes", check_keyword_presence(text, filename)),
        ("Densidad de datos", check_data_density(text, filename)),
    ]

    return checks, quality_checks


def print_results(filepath, checks, quality_checks):
    """Imprime resultados formateados."""
    filename = os.path.relpath(filepath)
    print(f"\n{'='*60}")
    print(f"VALIDANDO: {filename}")
    print(f"{'='*60}")

    errors = 0
    warnings = 0

    for check_name, issues in checks:
        if issues:
            for issue in issues:
                print(f"  ❌ [{check_name}] {issue}")
                errors += 1
        else:
            print(f"  ✅ {check_name}")

    for check_name, issues in quality_checks:
        if issues:
            for issue in issues:
                print(f"  ⚠️  [{check_name}] {issue}")
                warnings += 1
        else:
            print(f"  ✅ {check_name}")

    print(f"\n  Resultado: {errors} errores, {warnings} warnings")
    return errors, warnings


def main():
    if len(sys.argv) < 2:
        print("Uso: python3 scripts/qa-copy.py <archivo.tsx>")
        print("      python3 scripts/qa-copy.py --all")
        sys.exit(1)

    if sys.argv[1] == '--all':
        # Buscar todas las pages en constructora, experiencia, nelson
        patterns = [
            'src/app/constructora/*/page.tsx',
            'src/app/experiencia/*/page.tsx',
            'src/app/nelson/*/page.tsx',
        ]
        files = []
        for pattern in patterns:
            files.extend(glob.glob(pattern))
    else:
        files = [sys.argv[1]]

    total_errors = 0
    total_warnings = 0
    validated = 0

    for filepath in sorted(files):
        if not os.path.exists(filepath):
            print(f"Archivo no encontrado: {filepath}")
            continue

        result = validate_file(filepath)
        if result[0] is None:
            continue

        checks, quality_checks = result
        e, w = print_results(filepath, checks, quality_checks)
        total_errors += e
        total_warnings += w
        validated += 1

    print(f"\n{'='*60}")
    print(f"RESUMEN: {validated} archivos validados")
    print(f"  Total errores:  {total_errors}")
    print(f"  Total warnings: {total_warnings}")
    print(f"{'='*60}")

    if total_errors > 0:
        print("\n❌ QA FALLIDO — corregir errores antes de continuar")
        sys.exit(1)
    else:
        print("\n✅ QA PASADO")
        sys.exit(0)


if __name__ == '__main__':
    main()
