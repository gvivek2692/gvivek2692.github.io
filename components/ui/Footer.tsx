import { siteConfig } from '@/config/site.config';

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border py-10">
      <p className="font-mono text-xs text-muted-foreground">
        {siteConfig.name} · {siteConfig.location}
      </p>
      <p className="mt-2 font-mono text-xs text-muted-foreground">
        Built with Next.js and Tailwind.
        {siteConfig.repoUrl && (
          <>
            {' '}
            Open source on{' '}
            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:text-accent"
            >
              GitHub
            </a>
            .
          </>
        )}
      </p>
    </footer>
  );
}
