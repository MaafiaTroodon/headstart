'use client';

import { SectionReveal } from './SectionReveal';

const events = [
  {
    date: 'March 15, 2026',
    title: 'Spring League Registration Opens',
    text: 'Team ladders and standings pathways now accepting entries.'
  },
  {
    date: 'April 11, 2026',
    title: 'Junior Showcase Weekend',
    text: 'Academy development matches with coach feedback sessions.'
  },
  {
    date: 'April 25, 2026',
    title: 'Adult Social Doubles Night',
    text: 'Evening competitive doubles with structured pair rotations.'
  }
];

export function EventsStrip() {
  return (
    <SectionReveal>
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0d6f68]">What&apos;s Happening</p>
          <h2 className="mt-2 font-display text-4xl text-[#10243f] md:text-5xl">Academy Highlights</h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {events.map((event) => (
          <article
            key={event.title}
            className="rounded-[1.4rem] border border-slate-200 bg-white p-6 shadow-[0_22px_40px_-32px_rgba(8,25,50,0.55)] transition duration-500 ease-out hover:-translate-y-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d6f68]">{event.date}</p>
            <h3 className="mt-3 font-display text-2xl leading-tight text-[#0f2b4d]">{event.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{event.text}</p>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
