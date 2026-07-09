'use client';

/**
 * The site is light-mode only. This is a passthrough so any imports keep
 * working; the <html> class stays unset, so the :root (light) tokens apply.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
