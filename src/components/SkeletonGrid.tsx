export function SkeletonGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="h-64 animate-pulse rounded-2xl bg-slate-200" />
      ))}
    </div>
  );
}
