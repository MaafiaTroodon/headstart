'use client';

import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}

export function SectionReveal({ children, className, y = 42, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    ref.current.style.opacity = '0';
    ref.current.style.transform = `translateY(${y}px)`;
    ref.current.style.transition = `opacity 900ms cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 900ms cubic-bezier(0.22,1,0.36,1) ${delay}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && ref.current) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0px)';
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
