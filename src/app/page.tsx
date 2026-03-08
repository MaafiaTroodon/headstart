import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { HeadstartMap } from '@/components/HeadstartMap';
import { OpenStatus } from '@/components/OpenStatus';

const happenings = [
  { title: 'Spring League Registration Opens', date: 'March 15, 2026', text: 'Team ladders and weekly standings are now open for sign-up.' },
  { title: 'Junior Showcase Weekend', date: 'April 11, 2026', text: 'Development players demonstrate match progress and drills.' },
  { title: 'Adult Social Doubles Night', date: 'April 25, 2026', text: 'Live matchplay with coaching stations and social mixer.' }
];

const sponsors = [
  {
    name: '2 Crows Brewing Co.',
    imageUrl: 'https://picsum.photos/seed/partner-2crows/1200/700'
  },
  {
    name: 'Cleve’s Source for Sports',
    imageUrl: 'https://picsum.photos/seed/partner-cleves/1200/700'
  },
  {
    name: '360fit',
    imageUrl: 'https://picsum.photos/seed/partner-360fit/1200/700'
  },
  {
    name: 'Ted Misztela REALTOR®',
    imageUrl: 'https://picsum.photos/seed/partner-ted/1200/700'
  },
  {
    name: 'Tomavinos Ristorante',
    imageUrl: 'https://picsum.photos/seed/partner-tomavinos/1200/700'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-16 pb-4 pt-1 md:space-y-24">
      <PageHero
        title="Sleek & Beautiful"
        subtitle="HEADSTART ACADEMY – QUALITY TENNIS FOR ALL"
        imageUrl="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="-mt-8 flex flex-wrap gap-3 rounded-2xl border border-white/80 bg-white/92 p-5 shadow-[0_24px_48px_-28px_rgba(15,35,47,0.55)] backdrop-blur md:-mt-14 md:mx-10 md:p-6">
        <Link href="/court-bookings" className="btn-primary">Book a Court</Link>
        <Link href="/programs" className="btn-secondary">View Programs</Link>
        <Link href="/membership" className="btn-secondary">Purchase Membership</Link>
      </section>
      <div className="section-divider" />

      <section>
        <p className="section-kicker">Programs</p>
        <h2 className="section-title mt-2">Our Programs</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {[
            { name: 'Adult Programs', href: '/programs/adults' },
            { name: 'Junior Programs', href: '/programs/juniors' },
            { name: 'Private Instruction', href: '/programs' }
          ].map((p) => (
            <article key={p.name} className="card hover-lift p-6">
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">Structured coaching tracks designed for clear progression.</p>
              <Link href={p.href} className="btn-primary mt-4">Join</Link>
            </article>
          ))}
        </div>
      </section>
      <div className="section-divider" />

      <section className="card-premium p-7 md:p-10">
        <p className="section-kicker">Why Headstart</p>
        <h2 className="section-title mt-2">Why Join Headstart</h2>
        <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
          <li className="rounded-xl bg-white/70 p-3">Coaching quality focused on measurable progression.</li>
          <li className="rounded-xl bg-white/70 p-3">Pathways for beginners through advanced competitors.</li>
          <li className="rounded-xl bg-white/70 p-3">Indoor season available Oct-May.</li>
          <li className="rounded-xl bg-white/70 p-3">All levels welcome with practical placement support.</li>
          <li className="rounded-xl bg-white/70 p-3 md:col-span-2">Programs open to public; no club membership required for programs.</li>
        </ul>
      </section>
      <div className="section-divider" />

      <section>
        <p className="section-kicker">Latest Updates</p>
        <h2 className="section-title mt-2">What’s happening at Headstart</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {happenings.map((item) => (
            <article key={item.title} className="card hover-lift p-6">
              <p className="text-xs uppercase text-teal-700">{item.date}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="section-divider" />

      <section>
        <p className="section-kicker">Trusted Partners</p>
        <h2 className="section-title mt-2">Partners/Sponsors</h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {sponsors.map((s) => (
            <article key={s.name} className="card hover-lift overflow-hidden">
              <Image src={s.imageUrl} alt={s.name} width={1200} height={700} className="h-28 w-full bg-white object-contain p-4 transition duration-500 ease-out hover:scale-[1.03]" loading="lazy" />
              <div className="p-3 text-center text-sm font-medium">{s.name}</div>
            </article>
          ))}
        </div>
      </section>
      <div className="section-divider" />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card-premium p-7 md:p-8">
          <p className="section-kicker">Visit Headstart</p>
          <h2 className="section-title mt-2 text-2xl md:text-3xl">Contact Headstart</h2>
          <p className="mt-2 text-sm text-slate-600">Phone: 902-441-2237, 902-457-2444</p>
          <p className="text-sm text-slate-600">Email: info@headstarttennis.com</p>
          <p className="text-sm text-slate-600">Address: Headstart Tennis Center, 115 Clayton Park Drive, NS B3M1M3</p>
          <div className="mt-5">
            <OpenStatus />
          </div>
          <Link href="/contact" className="btn-primary mt-5">Contact Us</Link>
        </div>
        <div className="hover-lift">
          <HeadstartMap compact />
        </div>
      </section>
    </div>
  );
}
