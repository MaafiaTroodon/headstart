'use client';

import { useEffect, useMemo, useState } from 'react';

type DayHours = { openMinutes: number; closeMinutes: number };

type StatusType = 'open' | 'opening-soon' | 'closing-soon' | 'closed';

const dayOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const schedule: Record<number, DayHours> = {
  0: { openMinutes: 8 * 60, closeMinutes: 21 * 60 },
  1: { openMinutes: 9 * 60 + 30, closeMinutes: 22 * 60 },
  2: { openMinutes: 9 * 60 + 30, closeMinutes: 22 * 60 },
  3: { openMinutes: 9 * 60 + 30, closeMinutes: 22 * 60 },
  4: { openMinutes: 9 * 60 + 30, closeMinutes: 22 * 60 },
  5: { openMinutes: 9 * 60 + 30, closeMinutes: 21 * 60 },
  6: { openMinutes: 8 * 60, closeMinutes: 21 * 60 }
};

const formatMinutes = (minutes: number) => {
  const hour24 = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const period = hour24 >= 12 ? 'p.m.' : 'a.m.';
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  if (mins === 0) return `${hour12} ${period}`;
  return `${hour12}:${mins.toString().padStart(2, '0')} ${period}`;
};

const statusStyles: Record<StatusType, string> = {
  open: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  'opening-soon': 'bg-orange-100 text-orange-800 border-orange-300',
  'closing-soon': 'bg-orange-100 text-orange-800 border-orange-300',
  closed: 'bg-red-100 text-red-800 border-red-300'
};

const statusLabel: Record<StatusType, string> = {
  open: 'Open now',
  'opening-soon': 'Opening soon',
  'closing-soon': 'Closing soon',
  closed: 'Closed'
};

const getNowHalifax = () => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Halifax',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? 'Monday';
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === 'minute')?.value ?? 0);
  return { weekday, totalMinutes: hour * 60 + minute };
};

const getStatus = (weekday: string, totalMinutes: number): StatusType => {
  const dayIndex = dayOrder.indexOf(weekday);
  const hours = schedule[dayIndex];
  const timeToOpen = hours.openMinutes - totalMinutes;
  const timeToClose = hours.closeMinutes - totalMinutes;

  if (totalMinutes >= hours.openMinutes && totalMinutes < hours.closeMinutes) {
    if (timeToClose <= 60) return 'closing-soon';
    return 'open';
  }

  if (timeToOpen > 0 && timeToOpen <= 60) return 'opening-soon';
  return 'closed';
};

export function OpenStatus() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 30000);
    return () => clearInterval(t);
  }, []);

  const current = useMemo(() => {
    void tick;
    const { weekday, totalMinutes } = getNowHalifax();
    const status = getStatus(weekday, totalMinutes);
    return { weekday, totalMinutes, status };
  }, [tick]);

  return (
    <section className="card p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-2xl">Live Halifax Hours</h2>
        <span className={`rounded-full border px-3 py-1 text-sm font-semibold ${statusStyles[current.status]}`}>
          {statusLabel[current.status]}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-600">Current day in Halifax: {current.weekday}</p>
      <ul className="mt-4 space-y-1 text-sm">
        <li>Thursday: 9:30 a.m.-10 p.m.</li>
        <li>Friday: 9:30 a.m.-9 p.m.</li>
        <li>Saturday: 8 a.m.-9 p.m.</li>
        <li>Sunday: 8 a.m.-9 p.m.</li>
        <li>Monday: 9:30 a.m.-10 p.m.</li>
        <li>Tuesday: 9:30 a.m.-10 p.m.</li>
        <li>Wednesday: 9:30 a.m.-10 p.m.</li>
      </ul>
      <p className="mt-3 text-xs text-slate-500">
        Status logic: green when open, orange when opening soon or closing soon (within 60 minutes), red when closed.
      </p>
      <p className="mt-1 text-xs text-slate-500">
        Today&apos;s window: {formatMinutes(schedule[dayOrder.indexOf(current.weekday)].openMinutes)}-{formatMinutes(schedule[dayOrder.indexOf(current.weekday)].closeMinutes)}.
      </p>
    </section>
  );
}
