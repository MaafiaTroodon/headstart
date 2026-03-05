import Link from 'next/link';
import { Program } from '@/types/models';
import { formatCurrency } from '@/lib/utils';

export function ProgramCard({ program }: { program: Program }) {
  const full = program.availableSpots === 0;

  return (
    <article className="card p-5 transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{program.category}</p>
      <h3 className="mt-1 text-xl font-semibold">{program.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{program.description}</p>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div>
          <dt className="text-slate-500">Day</dt>
          <dd>{program.day}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Time</dt>
          <dd>{program.time}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Spots Left</dt>
          <dd className={full ? 'text-orange-600' : 'text-emerald-700'}>{program.availableSpots}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Member Fee</dt>
          <dd>{formatCurrency(program.memberFee)}</dd>
        </div>
      </dl>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-slate-500">Waitlist: {program.waitlistCount}</p>
        <Link href={`/programs/${program.id}`} className="btn-primary">
          Details
        </Link>
      </div>
    </article>
  );
}
