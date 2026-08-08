'use client';

import { SKILLS } from '@/lib/content';
import { SplitText } from '@/components/ui/SplitText';
import { SectionReveal } from '@/components/ui/SectionReveal';

export function Skills() {
  return (
    <section id="skills" className="container-edge py-24 lg:py-36">
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-xs text-accent">04</span>
        <span className="h-px flex-1 bg-border" />
        <span className="eyebrow">Skills</span>
      </div>

      <SplitText
        as="h2"
        text="The toolkit."
        className="mb-16 display-type text-5xl leading-[0.9] sm:text-6xl lg:text-7xl"
        trigger="inView"
        stagger={0.06}
      />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
        {SKILLS.map((group, gi) => (
          <SectionReveal key={group.group} delay={gi * 0.15}>
            <div className="h-full bg-background p-8 lg:p-12">
              <div className="mb-8 flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  {String(gi + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-3xl uppercase tracking-tight text-foreground">
                  {group.group}
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {group.items.map((item, i) => (
                  <li key={item}>
                    <div className="group flex items-center justify-between border-b border-border/50 pb-3">
                      <span className="text-lg text-foreground/90 transition-colors group-hover:text-accent">
                        {item}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
