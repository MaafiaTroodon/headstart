import { notFound } from 'next/navigation';
import { programService } from '@/lib/services/programService';
import { formatCurrency } from '@/lib/utils';
import { ProgramActions } from './ProgramActions';

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const program = programService.byId(id);
  if (!program) return notFound();

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <p className="text-xs uppercase text-teal-700">{program.category} • {program.type}</p>
        <h1 className="mt-1 font-display text-4xl">{program.name}</h1>
        <p className="mt-3 text-slate-600">{program.description}</p>
        <dl className="mt-5 grid gap-3 text-sm md:grid-cols-3">
          <div><dt className="text-slate-500">Day</dt><dd>{program.day}</dd></div>
          <div><dt className="text-slate-500">Time</dt><dd>{program.time}</dd></div>
          <div><dt className="text-slate-500">Dates</dt><dd>{program.startDate} to {program.endDate}</dd></div>
          <div><dt className="text-slate-500">Coach</dt><dd>{program.coach}</dd></div>
          <div><dt className="text-slate-500">Spots Left</dt><dd>{program.availableSpots}/{program.totalSpots}</dd></div>
          <div><dt className="text-slate-500">Waitlist</dt><dd>{program.waitlistCount}</dd></div>
          <div><dt className="text-slate-500">Member Fee</dt><dd>{formatCurrency(program.memberFee)}</dd></div>
          <div><dt className="text-slate-500">Non-Member Fee</dt><dd>{formatCurrency(program.nonMemberFee)}</dd></div>
          <div><dt className="text-slate-500">Location</dt><dd>{program.location}</dd></div>
        </dl>
      </div>
      <ProgramActions program={program} />
    </div>
  );
}
