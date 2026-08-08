'use client';

import { PROFILE, SOCIALS } from '@/lib/content';
import { SplitText } from '@/components/ui/SplitText';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Magnetic } from '@/components/ui/Magnetic';
import { ParticleField } from '@/components/ui/ParticleField';

export function Contact() {
  return (
    <section id="contact" className="relative flex min-h-screen items-center justify-center overflow-hidden py-24">
      <ParticleField className="absolute inset-0 h-full w-full opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_90%)]" />

      <div className="container-edge relative z-10 flex flex-col items-center text-center">
        <SectionReveal>
          <span className="eyebrow">Let&apos;s talk</span>
        </SectionReveal>

        <SplitText
          as="h2"
          text="Let's build"
          className="display-type mt-6 text-[14vw] leading-[0.85] sm:text-[10vw] lg:text-[9rem]"
          trigger="inView"
          stagger={0.08}
        />
        <SplitText
          as="h2"
          text="something real."
          className="display-type text-[14vw] leading-[0.85] text-accent sm:text-[10vw] lg:text-[9rem]"
          trigger="inView"
          stagger={0.08}
          delay={0.3}
        />

        <SectionReveal delay={0.5} className="mt-12">
          <Magnetic as="a" href={`mailto:${PROFILE.email}`} cursorLabel="mail" strength={0.5}>
            <span className="font-mono text-lg uppercase tracking-widest text-foreground underline-offset-8 transition-colors hover:text-accent hover:underline sm:text-2xl">
              {PROFILE.email}
            </span>
          </Magnetic>
        </SectionReveal>

        <SectionReveal delay={0.6} className="mt-6">
          <a
            href={`tel:${PROFILE.phoneHref}`}
            className="font-mono text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
          >
            {PROFILE.phone}
          </a>
        </SectionReveal>

        <SectionReveal delay={0.7} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Magnetic as="a" href="/resume.pdf" cursorLabel="CV">
            <span className="group inline-flex items-center gap-3 rounded-full border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent">
              Download resume
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </span>
          </Magnetic>

          {SOCIALS.map((s) => (
            <Magnetic key={s.label} as="a" href={s.href} cursorLabel={s.label} target="_blank" rel="noopener noreferrer">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline">
                {s.label}
              </span>
            </Magnetic>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
