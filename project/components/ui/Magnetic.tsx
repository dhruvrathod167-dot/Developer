'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a' | 'div';
  href?: string;
  cursorLabel?: string;
  onClick?: () => void;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

/**
 * Magnetic wrapper — element drifts toward the cursor on hover.
 * Falls back to static on touch / reduced-motion (motion is subtle enough).
 */
export function Magnetic({
  children,
  className,
  strength = 0.35,
  as = 'div',
  href,
  cursorLabel,
  onClick,
  ariaLabel,
  target,
  rel,
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * strength, y: y * strength });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const dataAttrs = cursorLabel ? { 'data-cursor': cursorLabel } : {};

  const commonProps = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    animate: { x: pos.x, y: pos.y },
    transition: { type: 'spring' as const, stiffness: 150, damping: 15, mass: 0.3 },
    className: cn('inline-block', className),
    ...dataAttrs,
  };

  if (as === 'a') {
    return (
      <motion.a
        {...commonProps}
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        {children}
      </motion.a>
    );
  }

  if (as === 'button') {
    return (
      <motion.button {...commonProps} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </motion.button>
    );
  }

  return (
    <motion.div {...commonProps}>{children}</motion.div>
  );
}
