'use client';

import { useState } from 'react';
import { Program } from '@/types/models';
import { useAppStore } from '@/store/useAppStore';
import { useUIStore } from '@/store/useUIStore';
import { programService } from '@/lib/services/programService';

export function ProgramActions({ program }: { program: Program }) {
  const [code, setCode] = useState('');
  const user = useAppStore((s) => s.user);
  const addRegistration = useAppStore((s) => s.addRegistration);
  const pushToast = useUIStore((s) => s.pushToast);

  const register = () => {
    if (!user) {
      pushToast('Sign in to register for programs.');
      return;
    }
    if (program.inviteOnly && !programService.validateInvite(code.trim(), program.id)) {
      pushToast('Invalid registration code for invite-only program.');
      return;
    }

    const status = program.availableSpots > 0 ? 'registered' : 'waitlist';
    addRegistration({ programId: program.id, userId: user.id, status });
    pushToast(status === 'registered' ? 'Registration confirmed.' : 'Added to waitlist.');
  };

  return (
    <div className="mt-6 card p-5">
      <h2 className="font-display text-2xl">Register</h2>
      {program.inviteOnly ? (
        <label className="mt-3 block text-sm">
          Registration Code
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
            placeholder="Enter invite code"
          />
        </label>
      ) : null}
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn-primary" onClick={register}>
          {program.availableSpots > 0 ? 'Register' : 'Join Waitlist'}
        </button>
        {program.availableSpots === 0 ? (
          <button type="button" className="btn-secondary" onClick={register}>
            Waitlist
          </button>
        ) : null}
      </div>
    </div>
  );
}
