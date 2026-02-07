'use client';

import { usePathname } from 'next/navigation';

const normalizePath = (path) => {
  if (!path || path === '/') return '/';
  // Remove trailing slash, query params, and hash
  return path.replace(/\/+$/, '').split('?')[0].split('#')[0];
};

export function useActivePath() {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  // Exact path match
  const isExactActive = (href) => currentPath === normalizePath(href);

  // Section match (for highlighting parent nav items)
  const isSectionActive = (href) => {
    const normalizedHref = normalizePath(href);

    // Root '/' should only be exact
    if (normalizedHref === '/') return currentPath === '/';

    // Active if current path is exactly the section or nested within it
    return currentPath === normalizedHref || currentPath.startsWith(normalizedHref + '/');
  };

  return {
    currentPath,
    isExactActive,
    isSectionActive,
  };
}
