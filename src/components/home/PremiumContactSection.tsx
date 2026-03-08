import { HeadstartMap } from '@/components/HeadstartMap';
import { OpenStatus } from '@/components/OpenStatus';
import { SectionReveal } from './SectionReveal';
import { AnimatedButton } from './AnimatedButton';

export function PremiumContactSection() {
  return (
    <SectionReveal className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
      <article className="rounded-[1.8rem] border border-[#d7ddd8] bg-[#f6f4ec] p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0d6f68]">Visit Headstart</p>
        <h2 className="mt-2 font-display text-4xl text-[#10243f] md:text-5xl">Plan Your First Session</h2>
        <div className="mt-5 space-y-1 text-sm text-slate-700">
          <p><strong>Phone:</strong> 902-441-2237, 902-457-2444</p>
          <p><strong>Email:</strong> info@headstarttennis.com</p>
          <p><strong>Address:</strong> Headstart Tennis Center, 115 Clayton Park Drive, NS B3M1M3</p>
        </div>
        <div className="mt-5">
          <OpenStatus />
        </div>
        <div className="mt-6">
          <AnimatedButton href="/contact" label="Contact Academy" variant="primary" />
        </div>
      </article>
      <article className="overflow-hidden rounded-[1.8rem] border border-white/20 shadow-[0_20px_45px_-30px_rgba(4,18,47,0.45)]">
        <HeadstartMap />
      </article>
    </SectionReveal>
  );
}
