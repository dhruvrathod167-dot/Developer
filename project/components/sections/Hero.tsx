'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { PROFILE } from '@/lib/content';
import { SplitText } from '@/components/ui/SplitText';
import { ParticleField } from '@/components/ui/ParticleField';
import { Magnetic } from '@/components/ui/Magnetic';

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);

  // subtle parallax on the portrait as you scroll past hero
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const el = photoRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          el.style.transform = `translateY(${y * 0.12}px)`;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* particle bg */}
      <ParticleField className="absolute inset-0 h-full w-full opacity-60" />

      {/* grain / vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]" />

      <div className="container-edge relative z-10 grid min-h-screen grid-cols-1 items-center gap-8 pt-24 pb-16 lg:grid-cols-12 lg:pt-20">
        {/* left — type */}
        <div className="lg:col-span-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="eyebrow">Available for work · {PROFILE.location}</span>
          </div>

          <h1 className="display-type text-[18vw] leading-[0.82] sm:text-[14vw] lg:text-[11vw] xl:text-[10rem]">
            <SplitText text="DHRUV" className="block" stagger={0.1} delay={0.2} />
            <SplitText text="RATHOD" className="block text-accent" stagger={0.1} delay={0.45} />
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <SplitText
              as="p"
              text={PROFILE.role}
              className="font-mono text-sm uppercase tracking-widest text-foreground sm:text-base"
              stagger={0.03}
              delay={0.8}
            />
            <span className="text-accent">·</span>
            <SplitText
              as="p"
              text={PROFILE.subrole}
              className="font-mono text-sm uppercase tracking-widest text-muted-foreground sm:text-base"
              stagger={0.03}
              delay={0.95}
            />
          </div>

          <SplitText
            as="p"
            text={PROFILE.positioning}
            className="mt-8 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
            stagger={0.02}
            delay={1.15}
          />

          <div
            className="mt-10 flex flex-wrap items-center gap-4"
            style={{ opacity: 0, animation: 'fadeIn 0.8s 1.4s forwards' }}
          >
            <Magnetic as="a" href="#work" cursorLabel="view">
              <span className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-accent">
                View work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Magnetic>
            <Magnetic as="a" href={`mailto:${PROFILE.email}`} cursorLabel="mail">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground underline-offset-4 hover:text-accent hover:underline">
                {PROFILE.email}
              </span>
            </Magnetic>
          </div>
        </div>

        {/* right — portrait */}
        <div className="lg:col-span-4">
          <div
            ref={photoRef}
            className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm lg:max-w-full"
          >
            {/* duotone overlay */}
            <div className="absolute inset-0 z-10 bg-accent/20 mix-blend-color" />
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-transparent to-transparent" />
            <Image
              src={PROFILE.photo}
              alt={`${PROFILE.name} — ${PROFILE.role}`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 33vw"
              className="object-cover object-center grayscale-[0.35] contrast-[1.05]"
            />
            {/* frame label */}
            <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                {PROFILE.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <span className="h-10 w-px origin-top animate-pulse-line bg-gradient-to-b from-accent to-transparent" />
      </div>

      <style>{`@keyframes fadeIn{to{opacity:1}}`}</style>
    </section>
  );
}
