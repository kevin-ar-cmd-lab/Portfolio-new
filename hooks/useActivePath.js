'use client';

import { usePathname } from 'next/navigation';

const normalizePath = (path) => {
  if (!path) return '/';
  if (path === '/') return '/';
  return path.replace(/\/+$/, '');
};

export function useActivePath() {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  const isExactActive = (href) => {
    return currentPath === normalizePath(href);
  };

  const isSectionActive = (href) => {
    const normalizedHref = normalizePath(href);
    return (
      currentPath === normalizedHref ||
      currentPath.startsWith(`${normalizedHref}/`)
    );
  };

  return {
    currentPath,
    isExactActive,
    isSectionActive,
  };
}
