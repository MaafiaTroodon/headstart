'use client';

import { useSearchParams, useRouter } from 'next/navigation';
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
  const params = useSearchParams();
  const login = useAppStore((s) => s.login);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormData) => {
    const account = await authService.signIn(values.email, values.password);
    const role = params.get('admin') === '1' ? 'admin' : account.role;
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
        <p className="text-xs text-slate-500">Admin demo: use ?admin=1 in URL or an email containing "admin".</p>
      </form>
    </div>
  );
}
