'use client';

import { MARQUEE_ITEMS } from '@/lib/content';
import { Marquee } from '@/components/ui/Marquee';

export function MarqueeStrip() {
  return (
    <section className="border-y border-border/60 bg-secondary/30 py-6">
      <Marquee items={MARQUEE_ITEMS} duration={38} />
    </section>
  );
}
