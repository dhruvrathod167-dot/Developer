'use client';

import Image from 'next/image';
import { FEATURED_PROJECT } from '@/lib/content';
import { SplitText } from '@/components/ui/SplitText';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Magnetic } from '@/components/ui/Magnetic';

export function FeaturedProject() {
  const p = FEATURED_PROJECT;

  return (
    <section id="work" className="relative py-24 lg:py-36">
      <div className="container-edge">
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-xs text-accent">03</span>
          <span className="h-px flex-1 bg-border" />
          <span className="eyebrow">Featured Project</span>
        </div>

        {/* heading row */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SplitText
              as="h2"
              text={p.title}
              className="display-type text-6xl leading-[0.85] sm:text-7xl lg:text-8xl"
              trigger="inView"
              stagger={0.06}
            />
            <SectionReveal delay={0.2} className="mt-3">
              <p className="font-mono text-sm uppercase tracking-widest text-accent">
                {p.subtitle}
              </p>
            </SectionReveal>
          </div>
          <SectionReveal delay={0.3}>
            <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span>{p.year} · {p.role}</span>
            </div>
          </SectionReveal>
        </div>

        {/* cover image */}
        <SectionReveal y={40} className="relative mb-16 aspect-[16/9] w-full overflow-hidden rounded-sm border border-border">
          <Image
            src={p.cover}
            alt={`${p.title} — ${p.subtitle}`}
            fill
            sizes="(max-width: 1024px) 100vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </SectionReveal>
      </div>

      {/* editorial case-study body */}
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* problem + approach */}
          <div className="lg:col-span-7 lg:col-start-1">
            <SectionReveal>
              <p className="eyebrow mb-4">Problem</p>
              <p className="text-xl leading-relaxed text-foreground/90">{p.problem}</p>
            </SectionReveal>
            <SectionReveal delay={0.15} className="mt-10">
              <p className="eyebrow mb-4">Approach</p>
              <p className="text-lg leading-relaxed text-muted-foreground">{p.approach}</p>
            </SectionReveal>
          </div>

          {/* meta sidebar */}
          <aside className="lg:col-span-4 lg:col-start-9">
            <SectionReveal delay={0.1}>
              <p className="eyebrow mb-4">Stack</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground/80 transition-colors hover:border-accent hover:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SectionReveal>
          </aside>
        </div>

        {/* key decisions */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {p.decisions.map((d, i) => (
            <SectionReveal key={d.title} delay={i * 0.1}>
              <div className="h-full bg-background p-8">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-2xl uppercase leading-tight text-foreground">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* code snippet */}
        <SectionReveal y={40} className="mt-16 overflow-hidden rounded-sm border border-border bg-[#0d0d0e]">
          <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              catalog/models.py
            </span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-foreground/80">
            <code>{p.code}</code>
          </pre>
        </SectionReveal>

        {/* gallery */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {p.gallery.map((src, i) => (
            <SectionReveal key={src} delay={i * 0.1} y={32}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
                <Image
                  src={src}
                  alt={`${p.title} detail ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* outcome */}
        <SectionReveal delay={0.1} className="mx-auto mt-20 max-w-3xl text-center">
          <p className="eyebrow mb-4">Result</p>
          <p className="text-balance text-2xl leading-relaxed text-foreground lg:text-3xl">
            {p.outcome}
          </p>
          <Magnetic as="a" href="#contact" cursorLabel="brief" className="mt-10 inline-block">
            <span className="group inline-flex items-center gap-3 rounded-full border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent">
              Start a project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Magnetic>
        </SectionReveal>
      </div>
    </section>
  );
}
