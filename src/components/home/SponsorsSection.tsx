'use client';

import Image from 'next/image';
import { SectionReveal } from './SectionReveal';

const sponsors = [
  { name: '2 Crows Brewing Co.', imageUrl: 'https://picsum.photos/seed/sponsor-2crows/640/220' },
  { name: 'Cleve’s Source for Sports', imageUrl: 'https://picsum.photos/seed/sponsor-cleves/640/220' },
  { name: '360fit', imageUrl: 'https://picsum.photos/seed/sponsor-360fit/640/220' },
  { name: 'Ted Misztela REALTOR®', imageUrl: 'https://picsum.photos/seed/sponsor-ted/640/220' },
  { name: 'Tomavinos Ristorante', imageUrl: 'https://picsum.photos/seed/sponsor-tomavinos/640/220' }
];

export function SponsorsSection() {
  return (
    <SectionReveal className="rounded-[1.8rem] border border-[#173b63] bg-[#061b3e] p-8 text-white md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8ff5e8]">Partners</p>
      <h2 className="mt-2 font-display text-4xl md:text-5xl">Trusted by Community Leaders</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {sponsors.map((sponsor) => (
          <article
            key={sponsor.name}
            className="group rounded-xl border border-white/20 bg-white/[0.04] p-4 transition duration-500 ease-out hover:-translate-y-1"
          >
            <div className="relative h-12 overflow-hidden rounded-md bg-white/90">
              <Image src={sponsor.imageUrl} alt={sponsor.name} fill className="object-contain grayscale transition duration-300 group-hover:grayscale-0" loading="lazy" />
            </div>
            <p className="mt-3 text-xs text-slate-300">{sponsor.name}</p>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
