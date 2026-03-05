'use client';

import { ProgramCategory } from '@/types/models';

const categories: ProgramCategory[] = ['Adult', 'Junior', 'Clinics', 'Leagues', 'Camps', 'Private Lessons'];

interface Props {
  query: string;
  category: string;
  onQuery: (value: string) => void;
  onCategory: (value: string) => void;
}

export function ProgramFilters({ query, category, onQuery, onCategory }: Props) {
  return (
    <section className="card p-4">
      <div className="grid gap-3 md:grid-cols-[2fr,1fr]">
        <input
          aria-label="Search programs"
          className="rounded-xl border border-slate-300 px-4 py-2"
          placeholder="Search by name, day, level, coach"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
        />
        <select
          className="rounded-xl border border-slate-300 px-4 py-2"
          aria-label="Filter by category"
          value={category}
          onChange={(e) => onCategory(e.target.value)}
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
