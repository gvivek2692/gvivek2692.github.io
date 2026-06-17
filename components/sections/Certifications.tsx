import { BadgeCheck } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { portfolio } from '@/data/portfolio';

export function Certifications() {
  return (
    <Section id="certifications" index="06" title="Certifications">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.certifications.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.05}>
            <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-card p-4">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium leading-snug">{c.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {c.issuer} · {c.year}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
