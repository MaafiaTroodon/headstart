import { FindLevelQuiz } from '@/components/FindLevelQuiz';
import { ProgramCard } from '@/components/ProgramCard';
import { programs } from '@/data/programs';

export default function JuniorsProgramsPage() {
  const juniorPrograms = programs.filter((p) => p.category === 'Junior');

  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">Junior Programs</h1>
      <div className="card p-5">
        <h2 className="font-display text-2xl">Junior development path</h2>
        <div className="mt-4 grid gap-3 text-center text-sm md:grid-cols-5">
          {['Le Petit (3-5)', 'Red ball (5-7)', 'Orange ball (8-9)', 'Green ball (10-12)', 'Regulation ball (11-16)'].map((step) => (
            <div key={step} className="rounded-xl border border-slate-200 p-3">{step}</div>
          ))}
        </div>
      </div>
      <div className="card p-5">
        <h2 className="font-display text-2xl">Junior Hybrid Performance Academy</h2>
        <p className="mt-2 text-sm text-slate-700">Large groups 16 players/4 coaches (league/matchplay/ladders).</p>
        <p className="text-sm text-slate-700">Quad training (≤4).</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {juniorPrograms.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>
      <FindLevelQuiz />
    </div>
  );
}
