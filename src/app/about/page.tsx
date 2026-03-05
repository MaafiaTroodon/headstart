import Image from 'next/image';

const gallery = [
  'https://picsum.photos/seed/headstart-about-1/900/700',
  'https://picsum.photos/seed/headstart-about-2/900/700',
  'https://picsum.photos/seed/headstart-about-3/900/700',
  'https://picsum.photos/seed/headstart-about-4/900/700'
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">About Headstart Tennis Halifax</h1>
      <section className="card p-6 text-sm text-slate-700">
        <p>Headstart is focused on accessible, high-quality coaching, a strong community, and a clear player pathway from first lesson to competitive play.</p>
        <p className="mt-2">Indoor season runs Oct-May, and programs are open to the public.</p>
      </section>
      <section className="card p-6">
        <h2 className="font-display text-2xl">Facilities</h2>
        <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2">
          <li>Indoor courts</li>
          <li>Professional lighting</li>
          <li>Pro shop (mock)</li>
          <li>Parking</li>
          <li>Accessibility access</li>
        </ul>
      </section>
      <section>
        <h2 className="font-display text-2xl">Gallery</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {gallery.map((img) => (
            <Image key={img} src={img} alt="Headstart gallery" width={900} height={700} className="h-64 w-full rounded-2xl object-cover" loading="lazy" />
          ))}
        </div>
      </section>
    </div>
  );
}
