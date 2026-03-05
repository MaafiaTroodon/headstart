'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navLinks } from '@/lib/constants';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-wide text-teal-800">
          HEADSTART Tennis
        </Link>
        <nav className="hidden gap-5 lg:flex" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href ? 'text-teal-700' : 'text-slate-700 hover:text-teal-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-lg border border-slate-300 p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
