'use client';

import Image from 'next/image';
import type { CSSProperties } from 'react';
import { sponsors } from '@/data/sponsors';
import { SectionReveal } from './SectionReveal';

const durationA = { ['--marquee-duration' as string]: '42s' } as CSSProperties;

function SponsorTile({ name, logoUrl }: { name: string; logoUrl: string }) {
  return (
    <article className="sponsor-tile group/sponsor">
      <div className="relative mx-auto h-11 w-[150px] md:h-12 md:w-[170px]">
        <Image
          src={logoUrl}
          alt={name}
          fill
          className="object-contain grayscale saturate-0 opacity-75 transition duration-500 ease-out group-hover/sponsor:grayscale-0 group-hover/sponsor:saturate-100 group-hover/sponsor:opacity-100"
          loading="lazy"
        />
      </div>
      <p className="mt-2 line-clamp-1 text-center text-[11px] font-medium tracking-wide text-slate-300 md:text-xs">{name}</p>
    </article>
  );
}

function SponsorRow() {
  return (
    <div className="marquee-row">
      <div className="marquee-track marquee-track-forward" style={durationA}>
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-group" aria-hidden={copy === 1}>
            {sponsors.map((sponsor) => (
              <SponsorTile key={`${sponsor.id}-${copy}`} name={sponsor.name} logoUrl={sponsor.logoUrl} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SponsorsMarquee() {
  return (
    <SectionReveal className="relative overflow-hidden rounded-[1.9rem] border border-[#1a3e64] bg-gradient-to-br from-[#031127] via-[#071a3a] to-[#09244b] px-6 py-10 text-white md:px-10 md:py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#031127] to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#09244b] to-transparent md:w-28" />

      <div className="relative z-20 mb-7 md:mb-9">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#90f3e4]">Sponsor Network</p>
        <h2 className="mt-2 font-display text-4xl leading-tight md:text-5xl">Partners & Sponsors</h2>
      </div>

      <div className="relative z-20">
        <SponsorRow />
      </div>
    </SectionReveal>
  );
}
