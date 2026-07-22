'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site.config';
import { ToptalBadge } from '@/components/ui/ToptalBadge';

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const label = 'font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground';

/**
 * Proof strip near the top of the content column. Holds the "Worked at" row of
 * past-company logos and, below it, a "Verified Credentials" row with the
 * Toptal and Claude Certified Architect badges. All content comes from
 * siteConfig (companies, toptalBadgeUrl, credlyUrl).
 */
export function Credentials() {
  const { companies, toptalBadgeUrl, credlyUrl } = siteConfig;

  const hasBadges = Boolean(toptalBadgeUrl || credlyUrl);
  if (companies.length === 0 && !hasBadges) return null;

  return (
    <section aria-label="Credentials" className="pt-8 lg:pt-0">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        variants={fade}
      >
        {companies.length > 0 && (
          <>
            <p className={label}>Worked at</p>
            <ul className="mt-5 flex flex-wrap items-center gap-3">
              {companies.map((co) => (
                <li key={co.name}>
                  <a
                    href={co.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={co.name}
                    aria-label={co.name}
                    className="flex h-14 items-center justify-center rounded-lg border border-border bg-card px-5 transition-colors hover:border-accent/60"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={co.logo}
                      alt={`${co.name} logo`}
                      className="max-h-6 w-auto max-w-[110px] object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {hasBadges && (
          <div className={companies.length > 0 ? 'mt-12' : ''}>
            <p className={label}>Verified Credentials</p>
            <div className="mt-5 flex flex-wrap items-center gap-8">
              {credlyUrl && (
                <a
                  href={credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Claude Certified Architect, Foundations"
                  aria-label="Claude Certified Architect, Foundations, verify on Credly"
                  className="inline-block shrink-0 transition-transform hover:-translate-y-0.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/claude-certified-architect.png"
                    alt="Claude Certified Architect, Foundations, issued by Anthropic"
                    width={160}
                    height={160}
                    className="h-32 w-32 object-contain sm:h-40 sm:w-40"
                  />
                </a>
              )}

              {toptalBadgeUrl && (
                <div className="h-[137px] w-[132px] shrink-0">
                  <div className="origin-top-left scale-[0.62]">
                    <ToptalBadge href={toptalBadgeUrl} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
