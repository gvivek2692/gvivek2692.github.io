import type { Metadata } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site.config';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Editorial display serif. Variable optical sizing gives the big headlines a
// magazine feel while the body stays in the technical Inter/JetBrains pairing.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [siteConfig.role, siteConfig.name, 'iOS', 'Swift', 'SwiftUI', 'portfolio'],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.tagline,
    images: ['/og-image.png'],
  },
  icons: { icon: '/favicon.svg' },
};

// Inject the accent token from config so the whole palette rebrands from one place.
// --accent is the per-mode value used for text, links, and icons (lighter in dark
// mode for readability). --accent-solid is always the deeper brand blue, used for
// solid fills with white labels so they keep 4.5:1 contrast in both modes.
const accentStyle =
  `:root{--accent:${siteConfig.accentRGB};--accent-solid:${siteConfig.accentRGB}}` +
  `.dark{--accent:${siteConfig.accentRGBDark};--accent-solid:${siteConfig.accentRGB}}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: accentStyle }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
