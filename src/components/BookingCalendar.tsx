'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingService } from '@/lib/services/bookingService';
import { useAppStore } from '@/store/useAppStore';
import { useUIStore } from '@/store/useUIStore';
import { useState } from 'react';

const schema = z.object({
  date: z.string().min(1, 'Date required'),
  startTime: z.string().min(1, 'Time required'),
  duration: z.coerce.number().min(1).max(3),
  court: z.string().min(1, 'Court required')
});

type FormData = z.infer<typeof schema>;

export function BookingCalendar() {
  const user = useAppStore((s) => s.user);
  const addBooking = useAppStore((s) => s.addBooking);
  const pushToast = useUIStore((s) => s.pushToast);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [confirmation, setConfirmation] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      duration: 1,
      court: 'Court 1'
    }
  });

  const time = watch('startTime');
  const date = watch('date');

  const onSubmit = async (values: FormData) => {
    if (!user) {
      setShowSignInModal(true);
      return;
    }
    await new Promise((r) => setTimeout(r, 500));
    const booking = bookingService.create({ ...values, userId: user.id });
    addBooking(booking);
    pushToast(`Booking confirmed (${booking.primeType}).`);
    setConfirmation(`${booking.date} • ${booking.startTime} • ${booking.duration}h • ${booking.court} (${booking.primeType})`);
    reset({ duration: 1, court: 'Court 1', date: '', startTime: '' });
  };

  const day = date ? new Date(date).getDay() : null;
  const hour = time ? Number(time.split(':')[0]) : null;
  const prime = day !== null && hour !== null ? day === 0 || day === 6 || (hour >= 17 && hour < 22) : null;

  return (
    <section className="card p-5">
      <h2 className="font-display text-2xl">Book a Court</h2>
      <p className="mt-1 text-sm text-slate-600">Prime: Mon-Fri 5pm-10pm + Sat/Sun | Non-Prime: Mon-Fri 9am-5pm</p>
      <form className="mt-4 grid gap-3 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-sm">
          Date
          <input type="date" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" {...register('date')} />
          {errors.date ? <span className="text-xs text-red-600">{errors.date.message}</span> : null}
        </label>
        <label className="text-sm">
          Start Time
          <input type="time" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" {...register('startTime')} />
          {errors.startTime ? <span className="text-xs text-red-600">{errors.startTime.message}</span> : null}
        </label>
        <label className="text-sm">
          Duration (hours)
          <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" {...register('duration')}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </label>
        <label className="text-sm">
          Court
          <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" {...register('court')}>
            <option>Court 1</option>
            <option>Court 2</option>
            <option>Court 3</option>
            <option>Court 4</option>
          </select>
        </label>
        <div className="md:col-span-2 flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">
          <span>Time Type Indicator</span>
          <strong>{prime === null ? 'Select date/time' : prime ? 'Prime' : 'Non-Prime'}</strong>
        </div>
        <button type="submit" className="btn-primary md:col-span-2" disabled={isSubmitting}>
          {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
        </button>
      </form>
      <p className="mt-3 text-xs text-slate-500">
        Booking rules + pricing note: Prime slots are premium-rate windows, Non-Prime slots are reduced-rate windows. Demo pricing and rules are shown for UI parity only.
      </p>
      {confirmation ? (
        <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm">
          <strong>Confirmation:</strong> {confirmation}
        </div>
      ) : null}
      {showSignInModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-5">
            <h3 className="font-display text-2xl">Sign in to book</h3>
            <p className="mt-2 text-sm text-slate-600">Court booking requires an active login. Use Get Started/Login to continue.</p>
            <div className="mt-4 flex gap-3">
              <a href="/login" className="btn-primary">
                Go to Login
              </a>
              <button type="button" className="btn-secondary" onClick={() => setShowSignInModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
