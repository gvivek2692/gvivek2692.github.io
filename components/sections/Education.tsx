import { GraduationCap } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { portfolio } from '@/data/portfolio';

export function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <div className="grid gap-5 md:grid-cols-2">
        {portfolio.education.map((e, i) => (
          <Reveal key={e.degree} delay={(i % 2) * 0.06}>
            <div className="flex h-full gap-4 rounded-lg border border-border bg-card p-6">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display font-semibold">{e.degree}</h3>
                <p className="mt-1 text-sm text-secondary">{e.school}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {e.location} · {e.period}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
