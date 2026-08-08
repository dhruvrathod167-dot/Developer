'use client';

import { cn } from '@/lib/utils';

interface MarqueeProps {
  items: string[];
  className?: string;
  reverse?: boolean;
  duration?: number;
}

/**
 * Infinite auto-scrolling marquee. Pure CSS animation, pauses on hover.
 */
export function Marquee({ items, className, reverse = false, duration = 40 }: MarqueeProps) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div
      className={cn(
        'group relative flex w-full overflow-hidden mask-fade-edges',
        className,
      )}
    >
      <div
        className={cn('flex shrink-0 items-center gap-8 pr-8', reverse ? 'animate-marquee-rev' : 'animate-marquee')}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="font-display text-3xl uppercase tracking-tight text-muted-foreground transition-colors duration-300 hover:text-accent sm:text-5xl lg:text-6xl">
              {item}
            </span>
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
