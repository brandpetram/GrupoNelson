/**
 * Utilidades para calcular el estado "activo" en la navegación principal.
 *
 * Resuelve dos asimetrías del repo:
 *  1. `usePathname()` retorna URLs públicas (con `/es`, sin `/en` por el
 *     redirect en next.config.ts), pero `navigation.ts` guarda hrefs sin
 *     `/es` y `navigation-en.ts` guarda hrefs con `/en` (legacy).
 *  2. Hrefs padre y hrefs hijo pueden coexistir en la misma lista de un
 *     dropdown; sin "longest prefix match" se prenderían los dos a la vez.
 */

/** Normaliza al espacio canónico público: sin `/es`, sin `/en`, sin querystring/hash, sin trailing slash. */
export function normalizeNavPath(p: string | null | undefined): string {
  if (!p) return '/';
  const noQs = p.split(/[?#]/)[0];
  const stripped = noQs
    .replace(/^\/es(?=\/|$)/, '')
    .replace(/^\/en(?=\/|$)/, '');
  if (stripped === '' || stripped === '/') return '/';
  return stripped.replace(/\/+$/, '');
}

export function isHrefExact(pathname: string, href: string): boolean {
  return normalizeNavPath(pathname) === normalizeNavPath(href);
}

/**
 * Verdadero si `href` (normalizado) es prefijo del `pathname` (normalizado).
 * La barra final evita falsos positivos: "/construction" no matchea
 * "/construction-x". El guard de `href === "/"` evita que la home matchee
 * todo el sitio.
 */
export function isHrefActivePrefix(pathname: string, href: string): boolean {
  const p = normalizeNavPath(pathname);
  const h = normalizeNavPath(href);
  if (h === '/') return p === '/';
  return p === h || p.startsWith(`${h}/`);
}

export function isCategoryActive(pathname: string, hrefs: readonly string[]): boolean {
  return hrefs.some((h) => isHrefActivePrefix(pathname, h));
}

/**
 * De la lista de hrefs visibles en un dropdown, devuelve el href más
 * específico que es prefijo de `pathname` (o `null` si ninguno). Evita
 * que un padre y un hijo se prendan a la vez en el mismo menú.
 */
export function findLongestPrefixHref(
  pathname: string,
  hrefs: readonly string[],
): string | null {
  const matches = hrefs.filter((h) => isHrefActivePrefix(pathname, h));
  if (matches.length === 0) return null;
  return matches.reduce((a, b) =>
    normalizeNavPath(a).length >= normalizeNavPath(b).length ? a : b,
  );
}
