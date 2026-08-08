'use client';

import { PROFILE, STATS } from '@/lib/content';
import { SplitText } from '@/components/ui/SplitText';
import { CounterUp } from '@/components/ui/CounterUp';
import { SectionReveal } from '@/components/ui/SectionReveal';

export function About() {
  return (
    <section id="about" className="container-edge py-24 lg:py-36">
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-xs text-accent">01</span>
        <span className="h-px flex-1 bg-border" />
        <span className="eyebrow">About</span>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* bio */}
        <div className="lg:col-span-7">
          <SplitText
            as="h2"
            text="Engineer first. Craftsman always."
            className="display-type text-4xl leading-[0.95] sm:text-5xl lg:text-6xl"
            trigger="inView"
            stagger={0.05}
          />

          <SectionReveal delay={0.2} className="mt-8 max-w-xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {PROFILE.summary}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.35} className="mt-8 max-w-xl">
            <blockquote className="border-l-2 border-accent pl-6">
              <p className="font-display text-2xl uppercase leading-tight text-foreground">
                {PROFILE.philosophy}
              </p>
            </blockquote>
          </SectionReveal>
        </div>

        {/* stats */}
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
            {STATS.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.12}>
                <div className="flex items-baseline justify-between bg-background px-6 py-8">
                  <span className="display-type text-5xl text-foreground sm:text-6xl lg:text-7xl">
                    <CounterUp value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.5} className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Based in {PROFILE.location}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
