'use client';

import { useAppStore } from '@/store/useAppStore';
import { programs } from '@/data/programs';
import Link from 'next/link';

export default function DashboardPage() {
  const user = useAppStore((s) => s.user);
  const bookings = useAppStore((s) => s.bookings);
  const registrations = useAppStore((s) => s.registrations);
  const memberships = useAppStore((s) => s.memberships);
  const cart = useAppStore((s) => s.cart);

  if (!user) {
    return (
      <div className="card p-6">
        <p>Please sign in first.</p>
        <Link href="/login" className="btn-primary mt-3 inline-flex">Go to Login</Link>
      </div>
    );
  }

  if (user.role === 'admin') {
    return (
      <div className="space-y-6">
        <h1 className="font-display text-4xl">Admin Operations Dashboard</h1>
        <section className="card p-5">
          <h2 className="font-display text-2xl">Search / Add Records</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Search records" />
            <button type="button" className="btn-primary">Add Record (mock)</button>
          </div>
        </section>
        <section className="card p-5">
          <h2 className="font-display text-2xl">Manage Adult Programs</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-left">
                <tr>
                  <th className="px-3 py-2">Program</th>
                  <th className="px-3 py-2">Spots</th>
                  <th className="px-3 py-2">Waitlist</th>
                  <th className="px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {programs
                  .filter((p) => p.category === 'Adult')
                  .map((p) => (
                    <tr key={p.id} className="border-t border-slate-200">
                      <td className="px-3 py-2">{p.name}</td>
                      <td className="px-3 py-2">{p.availableSpots}/{p.totalSpots}</td>
                      <td className="px-3 py-2">{p.waitlistCount}</td>
                      <td className="px-3 py-2">
                        <button type="button" className="text-teal-700">Edit</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex gap-3">
            <button type="button" className="btn-secondary">Export PDF</button>
            <button type="button" className="btn-secondary">Export Excel</button>
          </div>
        </section>
        <section className="card p-5">
          <h2 className="font-display text-2xl">Reports</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Daily bookings report (mock)</li>
            <li>Program revenue report (mock)</li>
            <li>Membership conversion report (mock)</li>
          </ul>
        </section>
        <section className="card p-5 text-sm">
          <p>Content Manager placeholder page</p>
          <p className="mt-1">Website Manager placeholder page</p>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">Member Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <section className="card p-5">
          <h2 className="text-xl font-semibold">Bookings</h2>
          <p className="mt-2 text-sm">{bookings.filter((b) => b.userId === user.id).length} active bookings</p>
        </section>
        <section className="card p-5">
          <h2 className="text-xl font-semibold">Registrations</h2>
          <p className="mt-2 text-sm">{registrations.filter((r) => r.userId === user.id).length} program registrations</p>
        </section>
        <section className="card p-5">
          <h2 className="text-xl font-semibold">Membership Status</h2>
          <p className="mt-2 text-sm">{memberships.filter((m) => m.userId === user.id).length > 0 ? 'Active membership on file' : 'No membership yet'}</p>
        </section>
        <section className="card p-5">
          <h2 className="text-xl font-semibold">Cart History (Demo)</h2>
          <p className="mt-2 text-sm">Current cart items: {cart.length}</p>
        </section>
      </div>
    </div>
  );
}
