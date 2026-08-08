'use client';

import { PROFILE } from '@/lib/content';
import { Magnetic } from '@/components/ui/Magnetic';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-edge flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {PROFILE.location}
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © {year} {PROFILE.name}. All rights reserved.
        </p>

        <Magnetic as="button" cursorLabel="top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent">
            Back to top
            <span className="transition-transform group-hover:-translate-y-1">↑</span>
          </span>
        </Magnetic>
      </div>
    </footer>
  );
}
