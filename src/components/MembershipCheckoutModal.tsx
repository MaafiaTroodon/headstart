'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppStore } from '@/store/useAppStore';
import { useUIStore } from '@/store/useUIStore';
import { MembershipPlan } from '@/types/models';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  billingAddress: z.string().optional(),
  terms: z.boolean().refine((v) => v, 'Required'),
  consent: z.boolean().refine((v) => v, 'Required')
});

type FormData = z.infer<typeof schema>;

export function MembershipCheckoutModal({ plan, onClose }: { plan: MembershipPlan; onClose: () => void }) {
  const user = useAppStore((s) => s.user);
  const addMembership = useAppStore((s) => s.addMembership);
  const pushToast = useUIStore((s) => s.pushToast);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    if (!user) {
      pushToast('Please sign in before checkout.');
      return;
    }
    await new Promise((r) => setTimeout(r, 650));
    addMembership({ userId: user.id, planId: plan.id, planName: plan.name });
    pushToast(`Membership purchased: ${plan.name}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6">
        <h3 className="font-display text-2xl">Membership Checkout</h3>
        <p className="mt-1 text-sm text-slate-600">{plan.name}</p>
        <form className="mt-4 grid gap-3" onSubmit={handleSubmit(onSubmit)}>
          <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Full name" {...register('name')} />
          <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Email" {...register('email')} />
          <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Phone" {...register('phone')} />
          <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Billing address (optional)" {...register('billingAddress')} />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" {...register('terms')} /> I agree to membership terms.
          </label>
          {errors.terms ? <p className="text-xs text-red-600">{errors.terms.message}</p> : null}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" {...register('consent')} /> I consent to communications from Headstart.
          </label>
          {errors.consent ? <p className="text-xs text-red-600">{errors.consent.message}</p> : null}
          <div className="mt-2 flex gap-3">
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Complete Purchase'}
            </button>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
