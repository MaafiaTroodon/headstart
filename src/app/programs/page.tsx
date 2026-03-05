'use client';

import { useMemo, useState } from 'react';
import { ProgramFilters } from '@/components/ProgramFilters';
import { ProgramCard } from '@/components/ProgramCard';
import { programs } from '@/data/programs';
import { SkeletonGrid } from '@/components/SkeletonGrid';

export default function ProgramsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return programs.filter((p) => {
      const matchesCategory = category ? p.category === category : true;
      const blob = `${p.name} ${p.day} ${p.type} ${p.coach}`.toLowerCase();
      return matchesCategory && blob.includes(q);
    });
  }, [query, category]);

  const handleQuery = (value: string) => {
    setLoading(true);
    setQuery(value);
    setTimeout(() => setLoading(false), 220);
  };

  const handleCategory = (value: string) => {
    setLoading(true);
    setCategory(value);
    setTimeout(() => setLoading(false), 220);
  };

  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">Tennis Programs</h1>
      <ProgramFilters query={query} category={category} onQuery={handleQuery} onCategory={handleCategory} />
      {loading ? <SkeletonGrid /> : null}
      {!loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
