'use client';

import { BookingCalendar } from '@/components/BookingCalendar';
import { useAppStore } from '@/store/useAppStore';

export default function CourtBookingsPage() {
  const user = useAppStore((s) => s.user);
  const bookings = useAppStore((s) => s.bookings);

  return (
    <div className="space-y-8">
      <h1 className="font-display text-4xl">Court Bookings</h1>
      {!user ? (
        <div className="rounded-2xl border border-orange-300 bg-orange-50 p-4 text-sm">
          Sign in to book a court.
        </div>
      ) : null}
      <BookingCalendar />
      <section className="card p-5">
        <h2 className="font-display text-2xl">My Bookings</h2>
        {user ? (
          <div className="mt-3 space-y-3">
            {bookings.filter((b) => b.userId === user.id).length === 0 ? <p className="text-sm text-slate-500">No bookings yet.</p> : null}
            {bookings
              .filter((b) => b.userId === user.id)
              .map((b) => (
                <article key={b.id} className="rounded-xl border border-slate-200 p-3 text-sm">
                  {b.date} • {b.startTime} • {b.duration}h • {b.court} • {b.primeType}
                </article>
              ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-slate-500">Please sign in to view your bookings.</p>
        )}
      </section>
    </div>
  );
}
