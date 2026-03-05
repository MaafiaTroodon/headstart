import Link from 'next/link';

const fullMapLink =
  'https://www.google.com/maps/place/HEADStart+Tennis+Centre/@44.6618305,-63.6551027,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5a2053fff5baff:0x6c9cfe5174b2d6a!8m2!3d44.6618305!4d-63.6525278!16s%2Fg%2F1td8yq7r?entry=ttu&g_ep=EgoyMDI2MDMwMy4wIKXMDSoASAFQAw%3D%3D';
const shortMapLink = 'https://maps.app.goo.gl/xjmAC5dFAu7JFwxZ9';
const embedSrc = 'https://www.google.com/maps?q=HEADStart+Tennis+Centre+115+Clayton+Park+Dr+Halifax+NS+B3M+2Z6&output=embed';

export function HeadstartMap({ compact = false }: { compact?: boolean }) {
  return (
    <section className="card overflow-hidden">
      <iframe
        src={embedSrc}
        title="HEADStart Tennis Centre Map"
        className={compact ? 'h-64 w-full border-0' : 'h-80 w-full border-0'}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex flex-wrap gap-3 p-4 text-sm">
        <Link href={fullMapLink} target="_blank" className="btn-primary">
          Open Google Maps
        </Link>
        <Link href={shortMapLink} target="_blank" className="btn-secondary">
          Open Short Map Link
        </Link>
      </div>
    </section>
  );
}
