import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { portfolio } from '@/data/portfolio';

export function About() {
  const { paragraphs, highlights } = portfolio.about;

  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-5 md:col-span-2">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-base leading-relaxed text-secondary md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 md:grid-cols-1">
            {highlights.map((h) => (
              <div key={h.label} className="bg-card p-5">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">{h.label}</dt>
                <dd className="mt-1 font-display text-lg font-semibold">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
