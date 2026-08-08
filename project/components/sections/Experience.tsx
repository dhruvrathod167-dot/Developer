'use client';

import { EXPERIENCE } from '@/lib/content';
import { SplitText } from '@/components/ui/SplitText';
import { SectionReveal } from '@/components/ui/SectionReveal';

export function Experience() {
  return (
    <section id="experience" className="container-edge py-24 lg:py-36">
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-xs text-accent">02</span>
        <span className="h-px flex-1 bg-border" />
        <span className="eyebrow">Experience</span>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* role header */}
        <div className="lg:col-span-5">
          <SplitText
            as="h2"
            text={EXPERIENCE.role}
            className="display-type text-4xl leading-[0.95] sm:text-5xl lg:text-6xl"
            trigger="inView"
            stagger={0.04}
          />
          <SectionReveal delay={0.2} className="mt-4">
            <p className="font-mono text-sm uppercase tracking-widest text-accent">
              {EXPERIENCE.company}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {EXPERIENCE.period} · {EXPERIENCE.location}
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3} className="mt-6 max-w-sm">
            <p className="text-muted-foreground">{EXPERIENCE.summary}</p>
          </SectionReveal>
        </div>

        {/* timeline */}
        <div className="lg:col-span-7">
          <ol className="relative flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
            {EXPERIENCE.achievements.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <li className="group flex items-start gap-5 bg-background px-6 py-5 transition-colors hover:bg-secondary/40">
                  <span className="mt-1 font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-foreground/90">{item}</p>
                </li>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
