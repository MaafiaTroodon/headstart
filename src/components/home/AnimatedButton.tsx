'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'text';
}

export function AnimatedButton({ href, label, variant = 'primary' }: Props) {
  const cls =
    variant === 'primary'
      ? 'bg-[#61dfd0] text-[#041b3f] shadow-[0_16px_26px_-16px_rgba(97,223,208,0.95)]'
      : variant === 'secondary'
        ? 'border border-white/40 bg-white/10 text-white backdrop-blur'
        : 'text-[#61dfd0]';

  return (
    <div className="transition duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98]">
      <Link
        href={href}
        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 ${cls} ${
          variant === 'text' ? 'rounded-none px-0 py-0 hover:text-white' : 'hover:brightness-110'
        }`}
      >
        {label}
        <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}
