'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Premium Custom Red Cursor
 * - Modern circular red cursor with trailing dot
 * - Smooth 60 FPS animations
 * - Red glow effects
 * - Interactive hover scaling
 * - Magnetic hover effects on buttons
 * - Compatible with dark/light themes
 * - Touch/mobile detection
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Function to check theme
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('light') === false;
      setIsDarkTheme(isDark);
    };

    // Check initial theme
    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!finePointer || reduced || isTouchDevice) {
      setIsMobile(true);
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add('cursor-active');
    document.body.style.cursor = 'none';

    // Handle page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause animations when page is hidden
        if (dotRef.current) dotRef.current.style.animationPlayState = 'paused';
        if (ringRef.current) ringRef.current.style.animationPlayState = 'paused';
        if (glowRef.current) glowRef.current.style.animationPlayState = 'paused';
      } else {
        // Resume animations when page is visible
        if (dotRef.current) dotRef.current.style.animationPlayState = 'running';
        if (ringRef.current) ringRef.current.style.animationPlayState = 'running';
        if (glowRef.current) glowRef.current.style.animationPlayState = 'running';
      }
    };

    // Handle scroll to ensure cursor stays visible
    const handleScroll = () => {
      // Force repaint to fix cursor visibility after scroll
      document.documentElement.offsetHeight;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('scroll', handleScroll);

    // wait a tick for the enabled elements to mount before grabbing refs
    const t = setTimeout(() => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      const glow = glowRef.current;
      if (!dot || !ring || !glow) return;

      let mx = window.innerWidth / 2;
      let my = window.innerHeight / 2;
      let rx = mx;
      let ry = my;
      let raf = 0;

      // Throttle mousemove for better performance
      let lastMoveTime = 0;
      const throttleDelay = 16; // ~60 FPS

      const onMove = (e: MouseEvent) => {
        const now = Date.now();
        if (now - lastMoveTime < throttleDelay) return;
        lastMoveTime = now;

        mx = e.clientX;
        my = e.clientY;

        // Main dot follows mouse with perfect precision
        if (dot) {
          dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
        }

        // Add smooth scaling animation when hovering
        if (hovering && dot) {
          dot.style.transition = 'width 0.2s cubic-bezier(0.4, 0, 0.2, 1), height 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
        }

        // Use event.composedPath() for better target accuracy
        const path = e.composedPath();
        const target = path[0] as HTMLElement;
        const interactive = target.closest('a, button, [data-cursor], [role="button"]');

        if (interactive) {
          setHovering(true);
          const l = interactive.getAttribute('data-cursor');
          setLabel(l && l !== 'true' ? l : null);

          // Add magnetic attraction effect on buttons
          if (interactive.tagName === 'BUTTON' || interactive.getAttribute('role') === 'button') {
            const rect = interactive.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Slight attraction towards center when hovering
            const dx = centerX - mx;
            const dy = centerY - my;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const force = (100 - distance) / 100;
              if (dot) {
                dot.style.transform += ` translate(${dx * force * 0.1}px, ${dy * force * 0.1}px)`;
              }
            }
          }
        } else {
          setHovering(false);
          setLabel(null);
        }
      };

      const loop = () => {
        // Smooth trailing ring with easing for 60 FPS performance
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;

        // Use direct style manipulation for better performance
        if (ring) {
          ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
        }

        // Glow effect follows the ring with slight delay
        if (glow) {
          glow.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
        }

        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      window.addEventListener('mousemove', onMove);
      cleanupRef.current = () => {
        window.removeEventListener('mousemove', onMove);
        cancelAnimationFrame(raf);
      };
    }, 0);

    return () => {
      clearTimeout(t);
      cleanupRef.current?.();
      document.documentElement.classList.remove('cursor-active');
      document.body.style.cursor = '';
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [enabled]);

  // Prevent hydration mismatch
  if (!mounted) return null;
  if (!enabled || isMobile) return null;

  return (
    <>
      {/* Glow Effect - Always behind the ring */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[2147483647] h-40 w-40 rounded-full opacity-20 blur-xl transition-opacity duration-300"
        style={{
          background: isDarkTheme
            ? (hovering
                ? 'radial-gradient(circle, rgba(255, 45, 45, 0.3) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(255, 45, 45, 0.1) 0%, transparent 70%)')
            : (hovering
                ? 'radial-gradient(circle, rgba(225, 29, 72, 0.4) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(225, 29, 72, 0.2) 0%, transparent 70%)'),
          transform: 'translate3d(0px, 0px, 0) translate(-50%, -50%)',
          willChange: 'transform, opacity',
          mixBlendMode: isDarkTheme ? 'screen' : 'normal',
        }}
      />

      {/* Main Cursor Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[2147483647] h-4 w-4 rounded-full transition-all duration-200 ease-out"
        style={{
          background: isDarkTheme ? '#FF2D2D' : '#E11D48',
          boxShadow: isDarkTheme
            ? '0 0 20px rgba(255, 45, 45, 0.5)'
            : '0 0 20px rgba(225, 29, 72, 0.6)',
          transform: 'translate3d(0px, 0px, 0) translate(-50%, -50%)',
          width: hovering ? (label ? 20 : 16) : 16,
          height: hovering ? (label ? 20 : 16) : 16,
          willChange: 'transform, width, height',
          mixBlendMode: isDarkTheme ? 'screen' : 'normal',
        }}
      />

      {/* Trailing Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[2147483647] flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-out"
        style={{
          width: hovering ? (label ? 64 : 48) : 40,
          height: hovering ? (label ? 64 : 48) : 40,
          borderColor: isDarkTheme ? '#FF2D2D' : '#E11D48',
          backgroundColor: hovering ?
            (isDarkTheme ? 'rgba(255, 45, 45, 0.1)' : 'rgba(225, 29, 72, 0.15)')
            : 'transparent',
          transform: 'translate3d(0px, 0px, 0) translate(-50%, -50%)',
          willChange: 'transform, width, height, background-color',
          mixBlendMode: isDarkTheme ? 'screen' : 'normal',
        }}
      >
        {label && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-white font-medium">
            {label}
          </span>
        )}
      </div>
    </>
  );
}