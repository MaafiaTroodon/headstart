import { CheckCircle2 } from 'lucide-react';
import { SectionReveal } from './SectionReveal';

const items = [
  'Structured progression for every stage of play.',
  'Elite coaching quality with measurable outcomes.',
  'Pathways from beginner to advanced competition.',
  'Programs open to public with flexible access.',
  'Halifax indoor season support from October to May.',
  'Community-first training culture with performance standards.'
];

export function BenefitsSection() {
  return (
    <SectionReveal className="rounded-[1.8rem] border border-[#d7ddd8] bg-[#f8f9f7] p-8 md:p-10">
      <div className="grid gap-7 lg:grid-cols-[0.95fr,1.05fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0d6f68]">Why Headstart</p>
          <h2 className="mt-2 font-display text-4xl leading-tight text-[#10243f] md:text-5xl">A Premium Pathway to Better Tennis.</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#0d6f68]" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  );
}
