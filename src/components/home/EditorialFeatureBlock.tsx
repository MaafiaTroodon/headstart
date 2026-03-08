import Image from 'next/image';
import { SectionReveal } from './SectionReveal';

export function EditorialFeatureBlock() {
  return (
    <SectionReveal className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
      <article className="relative min-h-[360px] overflow-hidden rounded-[1.8rem] border border-white/20">
        <Image
          src="/images/EyJD5cQXAAQKPgE.jpeg"
          alt="Indoor court atmosphere"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041b3f]/75 to-transparent" />
        <p className="absolute bottom-6 left-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#9ef1e7]">Indoor Oct-May</p>
      </article>

      <article className="rounded-[1.8rem] border border-white/25 bg-[#0b2e61] p-8 text-white md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#90f3e4]">Academy Environment</p>
        <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Designed for Year-Round Progress.</h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-100 md:text-base">
          From technical sessions to guided matchplay and ladders, Headstart combines elite structure with a strong Halifax tennis community.
        </p>
      </article>
    </SectionReveal>
  );
}
