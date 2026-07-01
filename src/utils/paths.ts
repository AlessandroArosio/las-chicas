/**
 * Normalised site base path with trailing slash (e.g. `/las-chicas/`).
 * Astro's BASE_URL may omit the trailing slash depending on the build target.
 */
export function siteBase(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? base : `${base}/`;
}

/** Build an absolute path under the site base (e.g. `contact` → `/las-chicas/contact`). */
export function withBase(route = ''): string {
  if (!route || route === '/') {
    return siteBase().replace(/\/$/, '') || '/';
  }
  return `${siteBase()}${route.replace(/^\//, '')}`;
}

/** Link to a fragment on the home page (e.g. `services` → `/las-chicas/#services`). */
export function withHash(fragment: string): string {
  const hash = fragment.startsWith('#') ? fragment : `#${fragment}`;
  return `${siteBase()}${hash}`;
}
