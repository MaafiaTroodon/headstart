import Image from 'next/image';
import { SectionReveal } from './SectionReveal';

export function AcademyIntro() {
  return (
    <SectionReveal className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
      <article className="rounded-[1.8rem] border border-[#d7ddd8] bg-[#f5f2ea] p-8 text-[#10243f] md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0c6d67]">Institution</p>
        <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">An Academy Standard for Halifax Tennis.</h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
          Headstart delivers a premium development environment with technical coaching, tactical training, and competition pathways designed for long-term growth.
        </p>
      </article>
      <article className="relative min-h-[300px] overflow-hidden rounded-[1.8rem] border border-white/20">
        <Image
          src="/images/EtQSoL2XcAI-U2Z.jpeg"
          alt="Academy training"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041b3f]/65 to-transparent" />
      </article>
    </SectionReveal>
  );
}
