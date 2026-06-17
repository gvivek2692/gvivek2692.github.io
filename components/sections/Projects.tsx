import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { portfolio } from '@/data/portfolio';

export function Projects() {
  return (
    <Section id="projects" index="04" title="Projects">
      <div className="grid gap-5 md:grid-cols-2">
        {portfolio.projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.06}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent">
                  {project.name}
                </h3>
                <div className="flex shrink-0 items-center gap-2">
                  {project.tag && (
                    <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                      {project.tag}
                    </span>
                  )}
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                </div>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">{project.description}</p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li key={t} className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
