'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Props {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export function PageHero({ title, subtitle, imageUrl }: Props) {
  const [scrollY, setScrollY] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      className="relative overflow-hidden rounded-[2rem] card-premium"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPointer({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 14,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 14
        });
      }}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <div style={{ transform: `translate3d(${pointer.x * 0.2}px, ${scrollY * 0.08}px, 0) scale(1.08)` }} className="transition-transform duration-500 ease-out">
        <Image src={imageUrl} alt={title} width={1800} height={900} className="h-[460px] w-full object-cover md:h-[560px]" priority />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/82 via-slate-900/42 to-transparent" />
      <div
        className="pointer-events-none absolute -left-8 top-16 h-40 w-40 rounded-full bg-teal-300/25 blur-3xl"
        style={{ transform: `translate3d(${pointer.x * -1}px, ${pointer.y * -1}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute -bottom-10 right-10 h-56 w-56 rounded-full bg-orange-200/30 blur-3xl"
        style={{ transform: `translate3d(${pointer.x * 1.1}px, ${pointer.y * 1.1}px, 0)` }}
      />
      <div className="absolute bottom-10 left-6 right-6 text-white md:bottom-14 md:left-12 md:right-12">
        <p className="section-kicker text-teal-100">Headstart Halifax</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-100 md:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
