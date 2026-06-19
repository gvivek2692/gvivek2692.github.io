import { Mail } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/config/site.config';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { ToptalBadge } from '@/components/ui/ToptalBadge';

export function Contact() {
  return (
    <Section id="contact" index="07" title="Contact">
      <Reveal>
        <div className="rounded-xl border border-border bg-card p-8 text-center md:p-14">
          <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            Let&apos;s build something
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-secondary">
            I&apos;m open to senior and lead engineering roles, remote or hybrid. Email is the fastest
            way to reach me, or find me on the platforms below.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent-solid px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {siteConfig.email}
          </a>

          <div className="mt-8 flex items-center justify-center gap-2">
            {siteConfig.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-secondary transition-colors hover:border-accent hover:text-accent cursor-pointer"
              >
                <SocialIcon icon={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex justify-center">
          <ToptalBadge />
        </div>
      </Reveal>
    </Section>
  );
}
