/**
 * Resolves a path inside /public so it works whether the site is deployed
 * at a domain root (Netlify, Vercel, custom domain) or under a GitHub Pages
 * project sub-path (e.g. https://username.github.io/repo/). Vite exposes
 * the configured `base` at build time via import.meta.env.BASE_URL.
 *
 * Usage: asset('documents/cv.pdf')  ->  '/documents/cv.pdf' at the root,
 *        or './documents/cv.pdf' resolved against the deployed base path.
 */
export function asset(path: string): string {
  const cleanPath = path.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${cleanPath}`;
}
