'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  text: string;
  className?: string;
  lineClassName?: string;
  wordClassName?: string;
  stagger?: number;
  delay?: number;
  /** Trigger on mount or on scroll into view */
  trigger?: 'mount' | 'inView';
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

/**
 * Splits text into words and reveals them with a staggered clip-path animation.
 * Respects prefers-reduced-motion (renders instantly).
 */
export function SplitText({
  text,
  className,
  lineClassName,
  wordClassName,
  stagger = 0.08,
  delay = 0,
  trigger = 'mount',
  as: Tag = 'div',
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    if (trigger === 'mount') {
      const t = setTimeout(() => setVisible(true), delay * 1000);
      return () => clearTimeout(t);
    }
    // inView
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, trigger, delay]);

  const words = text.split(' ');

  return (
    <Tag ref={ref} className={cn('flex flex-wrap', className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn('relative mr-[0.25em] overflow-hidden', lineClassName)}
        >
          <span
            className={cn(
              'inline-block transition-transform duration-700 ease-out',
              wordClassName,
            )}
            style={{
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              transitionDelay: `${delay + i * stagger}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
