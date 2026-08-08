'use client';

import { EDUCATION } from '@/lib/content';
import { SplitText } from '@/components/ui/SplitText';
import { SectionReveal } from '@/components/ui/SectionReveal';

export function Education() {
  return (
    <section id="education" className="container-edge py-24 lg:py-36">
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-xs text-accent">05</span>
        <span className="h-px flex-1 bg-border" />
        <span className="eyebrow">Education</span>
      </div>

      <SectionReveal y={32}>
        <div className="relative overflow-hidden rounded-sm border border-border bg-secondary/20 p-8 lg:p-14">
          <div className="pointer-events-none absolute -right-12 -top-12 font-display text-[12rem] leading-none text-accent/5 select-none lg:text-[16rem]">
            {EDUCATION.short}
          </div>
          <div className="relative z-10 max-w-2xl">
            <SplitText
              as="h2"
              text={EDUCATION.degree}
              className="display-type text-4xl leading-[0.9] sm:text-5xl lg:text-6xl"
              trigger="inView"
              stagger={0.04}
            />
            <div className="mt-6 flex flex-col gap-2">
              <p className="font-mono text-sm uppercase tracking-widest text-accent">
                {EDUCATION.school}
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {EDUCATION.address}
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
