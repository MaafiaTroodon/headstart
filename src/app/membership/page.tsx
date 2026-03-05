'use client';

import { useMemo, useState } from 'react';
import { membershipPlans } from '@/data/memberships';
import { formatCurrency } from '@/lib/utils';
import { MembershipCheckoutModal } from '@/components/MembershipCheckoutModal';
import { useAppStore } from '@/store/useAppStore';

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const user = useAppStore((s) => s.user);
  const memberships = useAppStore((s) => s.memberships);

  const active = useMemo(() => membershipPlans.find((p) => p.id === selectedPlan) ?? null, [selectedPlan]);

  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">Membership</h1>
      <div className="overflow-x-auto card">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Annual Fee</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {membershipPlans.map((plan) => (
              <tr key={plan.id} className="border-t border-slate-200 align-top">
                <td className="px-4 py-3 font-medium">{plan.name}</td>
                <td className="px-4 py-3">{formatCurrency(plan.annualFee)}</td>
                <td className="px-4 py-3">{plan.description}</td>
                <td className="px-4 py-3">
                  <button type="button" className="btn-primary" onClick={() => setSelectedPlan(plan.id)}>
                    Register Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="card p-5">
        <h2 className="font-display text-2xl">My Membership</h2>
        {!user ? <p className="mt-2 text-sm text-slate-500">Sign in to view membership dashboard.</p> : null}
        {user && memberships.filter((m) => m.userId === user.id).length === 0 ? (
          <p className="mt-2 text-sm text-slate-500">No membership purchases yet.</p>
        ) : null}
        <div className="mt-3 space-y-2">
          {user
            ? memberships
                .filter((m) => m.userId === user.id)
                .map((m) => (
                  <div key={m.id} className="rounded-xl border border-slate-200 p-3 text-sm">
                    {m.planName} • Purchased {new Date(m.purchasedAt).toLocaleDateString()}
                  </div>
                ))
            : null}
        </div>
      </section>

      {active ? <MembershipCheckoutModal plan={active} onClose={() => setSelectedPlan(null)} /> : null}
    </div>
  );
}
