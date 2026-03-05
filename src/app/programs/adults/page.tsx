import { ProgramCard } from '@/components/ProgramCard';
import { programs } from '@/data/programs';

const categories = ['Adult 101', 'Adult Intermediate', 'Adult Advance', 'Tennis Clinics', 'Adult Elite', 'Tennis Leagues'];

export default function AdultsProgramsPage() {
  const adultPrograms = programs.filter((p) => p.category === 'Adult' || p.category === 'Clinics' || p.category === 'Leagues');

  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">Adult Programs</h1>
      <div className="card p-5">
        <h2 className="text-xl font-semibold">Categories</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-800">{c}</span>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {adultPrograms.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>
      <section className="card overflow-x-auto p-3">
        <h2 className="px-2 py-2 text-xl font-semibold">Active Program Stats (Mock)</h2>
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-3 py-2">Program</th>
              <th className="px-3 py-2">Registrations</th>
              <th className="px-3 py-2">Waitlist</th>
              <th className="px-3 py-2">Spots Available</th>
            </tr>
          </thead>
          <tbody>
            {adultPrograms.map((p) => (
              <tr key={`${p.id}-stats`} className="border-t border-slate-200">
                <td className="px-3 py-2">{p.name}</td>
                <td className="px-3 py-2">{p.totalSpots - p.availableSpots}</td>
                <td className="px-3 py-2">{p.waitlistCount}</td>
                <td className="px-3 py-2">{p.availableSpots}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
