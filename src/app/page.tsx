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
    imageUrl: 'https://picsum.photos/seed/2crows/1200/700'
  },
  {
    name: 'Cleve’s Source for Sports',
    imageUrl: 'https://picsum.photos/seed/cleves/1200/700'
  },
  {
    name: '360fit',
    imageUrl: 'https://picsum.photos/seed/360fit/1200/700'
  },
  {
    name: 'Ted Misztela REALTOR®',
    imageUrl: 'https://picsum.photos/seed/realtor/1200/700'
  },
  {
    name: 'Tomavinos Ristorante',
    imageUrl: 'https://picsum.photos/seed/tomavinos/1200/700'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <PageHero
        title="Sleek & Beautiful"
        subtitle="HEADSTART ACADEMY – QUALITY TENNIS FOR ALL"
        imageUrl="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="-mt-6 flex flex-wrap gap-3 rounded-2xl bg-white p-4 shadow-md md:-mt-10 md:mx-8 md:p-5">
        <Link href="/court-bookings" className="btn-primary">Book a Court</Link>
        <Link href="/programs" className="btn-secondary">View Programs</Link>
        <Link href="/membership" className="btn-secondary">Purchase Membership</Link>
      </section>

      <section>
        <h2 className="font-display text-3xl">Our Programs</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            { name: 'Adult Programs', href: '/programs/adults' },
            { name: 'Junior Programs', href: '/programs/juniors' },
            { name: 'Private Instruction', href: '/programs' }
          ].map((p) => (
            <article key={p.name} className="card p-5">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600">Structured coaching tracks designed for clear progression.</p>
              <Link href={p.href} className="btn-primary mt-4">Join</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="font-display text-3xl">Why Join Headstart</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
          <li>Coaching quality focused on measurable progression.</li>
          <li>Pathways for beginners through advanced competitors.</li>
          <li>Indoor season available Oct-May.</li>
          <li>All levels welcome with practical placement support.</li>
          <li>Programs open to public; no club membership required for programs.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-3xl">What’s happening at Headstart</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {happenings.map((item) => (
            <article key={item.title} className="card p-5">
              <p className="text-xs uppercase text-teal-700">{item.date}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl">Partners/Sponsors</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {sponsors.map((s) => (
            <article key={s.name} className="card overflow-hidden">
              <Image src={s.imageUrl} alt={s.name} width={1200} height={700} className="h-28 w-full object-cover" loading="lazy" />
              <div className="p-3 text-center text-sm font-medium">{s.name}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="font-display text-2xl">Contact Headstart</h2>
          <p className="mt-2 text-sm text-slate-600">Phone: 902-441-2237, 902-457-2444</p>
          <p className="text-sm text-slate-600">Email: info@headstarttennis.com</p>
          <p className="text-sm text-slate-600">Address: Headstart Tennis Center, 115 Clayton Park Drive, NS B3M1M3</p>
          <div className="mt-4">
            <OpenStatus />
          </div>
          <Link href="/contact" className="btn-primary mt-4">Contact Us</Link>
        </div>
        <HeadstartMap compact />
      </section>
    </div>
  );
}
