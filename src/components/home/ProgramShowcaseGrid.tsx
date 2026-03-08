'use client';

import Image from 'next/image';
import { AnimatedButton } from './AnimatedButton';
import { SectionReveal } from './SectionReveal';

const panels = [
  {
    title: 'Adult Programs',
    copy: 'Technical precision, tactical decision-making, and competition-ready training for adult athletes.',
    href: '/programs/adults',
    image: '/images/CvYgXGaWgAIogrb.jpeg',
    tone: 'dark'
  },
  {
    title: 'Junior Programs',
    copy: 'Age-based pathways from Le Petit to full-court competition with expert progression systems.',
    href: '/programs/juniors',
    image: '/images/ExBtKiXXEAE74lF.jpeg',
    tone: 'light'
  },
  {
    title: 'Private Instruction',
    copy: 'One-to-one performance coaching designed around your goals, metrics, and match style.',
    href: '/programs',
    image: '/images/FpDf100WAAEDJ0k.jpeg',
    tone: 'dark'
  }
];

export function ProgramShowcaseGrid() {
  return (
    <SectionReveal>
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0c6d67]">Academy Tracks</p>
        <h2 className="mt-2 font-display text-4xl text-[#10243f] md:text-5xl">Program Pathways</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-[270px,270px]">
        <article className="group relative overflow-hidden rounded-[1.6rem] border border-white/20 transition duration-500 ease-out hover:-translate-y-1 lg:row-span-2">
          <Image src={panels[0].image} alt={panels[0].title} fill className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041b3f]/95 via-[#041b3f]/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-white">
            <h3 className="font-display text-4xl leading-tight">{panels[0].title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-100">{panels[0].copy}</p>
            <div className="mt-6">
              <AnimatedButton href={panels[0].href} label="View Program" variant="secondary" />
            </div>
          </div>
        </article>

        <article className="group grid overflow-hidden rounded-[1.6rem] border border-white/20 bg-[#f7f4ed] transition duration-500 ease-out hover:-translate-y-1 lg:col-span-2 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d6f68]">Featured</p>
            <h3 className="mt-3 font-display text-4xl leading-tight text-[#0f2b4d]">{panels[1].title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-700">{panels[1].copy}</p>
            <div className="mt-6">
              <AnimatedButton href={panels[1].href} label="Explore Juniors" variant="primary" />
            </div>
          </div>
          <div className="relative min-h-[220px]">
            <Image src={panels[1].image} alt={panels[1].title} fill className="object-cover transition duration-700 group-hover:scale-105" />
          </div>
        </article>

        <article className="group grid overflow-hidden rounded-[1.6rem] border border-white/20 bg-[#0b2e61] text-white transition duration-500 ease-out hover:-translate-y-1 lg:col-span-2 lg:grid-cols-[0.92fr,1.08fr]">
          <div className="relative min-h-[220px]">
            <Image src={panels[2].image} alt={panels[2].title} fill className="object-cover transition duration-700 group-hover:scale-105" />
          </div>
          <div className="p-7 md:p-8">
            <h3 className="font-display text-4xl leading-tight">{panels[2].title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-100">{panels[2].copy}</p>
            <div className="mt-6">
              <AnimatedButton href={panels[2].href} label="Book Private" variant="secondary" />
            </div>
          </div>
        </article>
      </div>
    </SectionReveal>
  );
}
