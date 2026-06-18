'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { TypingText } from '@/components/ui/TypingText';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { asset } from '@/lib/asset';

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />

      <div className="container-content relative flex min-h-[92vh] flex-col justify-center py-28">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-secondary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          custom={2}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-4 flex flex-wrap items-baseline gap-x-3 text-xl font-medium text-secondary sm:text-2xl md:text-3xl"
        >
          <span>{siteConfig.role}</span>
          <span className="text-border">/</span>
          <TypingText words={siteConfig.heroRotatingWords} className="font-display text-foreground" />
        </motion.div>

        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent-solid px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            Get in touch
          </a>
          {siteConfig.resumePath && (
            <a
              href={asset(siteConfig.resumePath)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent cursor-pointer"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          )}
          <div className="ml-1 flex items-center gap-1">
            {siteConfig.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-secondary transition-colors hover:text-accent cursor-pointer"
              >
                <SocialIcon icon={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.p
          custom={5}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {siteConfig.location}
        </motion.p>
      </div>

      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-accent cursor-pointer"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
