'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS, PROFILE } from '@/lib/content';
import { Magnetic } from '@/components/ui/Magnetic';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <nav className="container-edge flex h-16 items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-xl uppercase tracking-tight"
          data-cursor="top"
        >
          {PROFILE.firstName}
          <span className="text-accent">.</span>
        </button>

        {/* desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="group relative font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <Magnetic as="a" href={`mailto:${PROFILE.email}`} cursorLabel="mail">
            <span className="rounded-full border border-accent/40 px-4 py-2 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-background">
              Get in touch
            </span>
          </Magnetic>
          <ThemeToggle />
        </div>

        {/* mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={cn('h-px w-6 bg-foreground transition-all', open && 'translate-y-[7px] rotate-45')} />
            <span className={cn('h-px w-6 bg-foreground transition-all', open && 'opacity-0')} />
            <span className={cn('h-px w-6 bg-foreground transition-all', open && '-translate-y-[7px] -rotate-45')} />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-b border-border/50 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        <div className="container-edge flex flex-col gap-4 py-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="text-left font-display text-2xl uppercase tracking-tight text-foreground"
            >
              {link.label}
            </button>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            className="font-mono text-sm uppercase tracking-widest text-accent"
          >
            {PROFILE.email}
          </a>
        </div>
      </div>
    </header>
  );
}
