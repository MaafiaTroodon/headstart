'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatedButton } from './AnimatedButton';

export function PremiumHero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#04163a] text-white shadow-[0_35px_60px_-35px_rgba(5,20,45,0.8)]">
      <div className="absolute inset-0" style={{ transform: `translate3d(0, ${Math.min(scrollY * 0.1, 80)}px, 0) scale(1.08)` }}>
        <Image
          src="/images/Cu1gu67WAAEVstY.jpeg"
          alt="Headstart training hero"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#02122f]/92 via-[#041b3f]/65 to-[#041b3f]/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(97,223,208,0.22),transparent_40%)]" />

      <div className="relative z-10 grid min-h-[82vh] items-end px-6 pb-10 pt-28 md:px-12 md:pb-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="hero-copy animate-fadeUp text-xs font-semibold uppercase tracking-[0.28em] text-[#8ff5e8]">Headstart Tennis Academy | Halifax</p>
          <h1 className="hero-copy animate-fadeUp mt-4 font-display text-4xl leading-[1.03] tracking-wide md:text-6xl xl:text-7xl">
            Train, Compete,
            <br />
            Grow at a Premier
            <br />
            Tennis Academy.
          </h1>
          <p className="hero-copy animate-fadeUp mt-6 max-w-xl text-sm leading-relaxed text-slate-100 md:text-lg">
            Elite coaching standards, structured pathways, and world-class indoor development from first serve to high-performance play.
          </p>
          <div className="hero-copy animate-fadeUp mt-8 flex flex-wrap gap-3">
            <AnimatedButton href="/court-bookings" label="Book a Court" variant="primary" />
            <AnimatedButton href="/programs" label="Explore Programs" variant="secondary" />
            <AnimatedButton href="/membership" label="Join Membership" variant="text" />
          </div>
        </div>
      </div>
    </section>
  );
}
