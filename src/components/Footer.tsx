import { academyInfo } from '@/lib/constants';

const sponsors = [
  '2 Crows Brewing Co.',
  'Cleve’s Source for Sports',
  '360fit',
  'Ted Misztela REALTOR®',
  'Tomavinos Ristorante'
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h2 className="font-display text-lg">Headstart Tennis Academy</h2>
          <p className="mt-2 text-sm text-slate-600">{academyInfo.address}</p>
          <p className="mt-1 text-sm text-slate-600">{academyInfo.email}</p>
          <p className="mt-1 text-sm text-slate-600">{academyInfo.phone.join(' • ')}</p>
        </div>
        <div>
          <h2 className="font-display text-lg">Sponsors & Partners</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {sponsors.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-end">
          <p className="text-sm text-slate-500">© 2026 Headstart Tennis</p>
        </div>
      </div>
    </footer>
  );
}
