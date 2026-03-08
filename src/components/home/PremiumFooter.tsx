import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export function PremiumFooter() {
  return (
    <footer className="rounded-[2rem] border border-[#173b63] bg-[#03142f] px-7 py-10 text-slate-200 md:px-10 md:py-12">
      <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr,0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8ff5e8]">HEADSTART Tennis Academy</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
            Premium tennis education in Halifax with elite coaching standards, modern pathways, and a long-term athlete development mindset.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/25 p-2 hover:border-[#61dfd0] hover:text-[#61dfd0]"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-white/25 p-2 hover:border-[#61dfd0] hover:text-[#61dfd0]"><Facebook size={16} /></a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-white/25 p-2 hover:border-[#61dfd0] hover:text-[#61dfd0]"><Youtube size={16} /></a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>902-441-2237</li>
            <li>902-457-2444</li>
            <li>info@headstarttennis.com</li>
            <li>115 Clayton Park Drive, NS B3M1M3</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li><Link href="/programs" className="hover:text-[#8ff5e8]">Programs</Link></li>
            <li><Link href="/court-bookings" className="hover:text-[#8ff5e8]">Court Bookings</Link></li>
            <li><Link href="/membership" className="hover:text-[#8ff5e8]">Membership</Link></li>
            <li><Link href="/meet-the-team" className="hover:text-[#8ff5e8]">Meet the Team</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-9 border-t border-white/15 pt-4 text-xs text-slate-400">© 2026 Headstart Tennis</div>
    </footer>
  );
}
