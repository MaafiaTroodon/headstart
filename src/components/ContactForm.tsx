'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUIStore } from '@/store/useUIStore';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10)
});

type FormData = z.infer<typeof schema>;

export function ContactForm({ context = 'General Inquiry' }: { context?: string }) {
  const pushToast = useUIStore((s) => s.pushToast);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 500));
    pushToast(`${context} sent to info@headstarttennis.com`);
    reset();
  };

  return (
    <form className="card grid gap-3 p-5" onSubmit={handleSubmit(onSubmit)}>
      <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Full name" {...register('name')} />
      {errors.name ? <p className="text-xs text-red-600">{errors.name.message}</p> : null}
      <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Email" {...register('email')} />
      {errors.email ? <p className="text-xs text-red-600">{errors.email.message}</p> : null}
      <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Phone" {...register('phone')} />
      {errors.phone ? <p className="text-xs text-red-600">{errors.phone.message}</p> : null}
      <textarea className="min-h-32 rounded-xl border border-slate-300 px-3 py-2" placeholder="Message" {...register('message')} />
      {errors.message ? <p className="text-xs text-red-600">{errors.message.message}</p> : null}
      <button type="submit" className="btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
