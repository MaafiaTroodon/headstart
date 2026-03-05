'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppStore } from '@/store/useAppStore';
import { authService } from '@/lib/services/authService';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const login = useAppStore((s) => s.login);
  const router = useRouter();
  const [forceAdmin, setForceAdmin] = useState(false);

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    setForceAdmin(qs.get('admin') === '1');
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormData) => {
    const account = await authService.signIn(values.email, values.password);
    const role = forceAdmin ? 'admin' : account.role;
    login(account.email, role);
    router.push('/dashboard');
  };

  return (
    <div className="mx-auto max-w-lg space-y-5">
      <h1 className="font-display text-4xl">Get Started / Login</h1>
      <form className="card grid gap-3 p-5" onSubmit={handleSubmit(onSubmit)}>
        <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Email" {...register('email')} />
        {errors.email ? <p className="text-xs text-red-600">{errors.email.message}</p> : null}
        <input type="password" className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Password" {...register('password')} />
        {errors.password ? <p className="text-xs text-red-600">{errors.password.message}</p> : null}
        <button type="submit" className="btn-primary">Sign In</button>
        <p className="text-xs text-slate-500">Admin demo: use ?admin=1 in URL or an email containing &quot;admin&quot;.</p>
      </form>
    </div>
  );
}
