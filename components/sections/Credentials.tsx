'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site.config';

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/**
 * "Worked at" logo strip near the top of the content column: a muted, grayscale
 * row of past-company logos that go full color on hover. Content comes from
 * siteConfig.companies.
 */
export function Credentials() {
  const { companies } = siteConfig;

  if (companies.length === 0) return null;

  return (
    <section aria-label="Companies" className="pt-8 lg:pt-0">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        variants={fade}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Worked at
        </p>
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
      </motion.div>
    </section>
  );
}
