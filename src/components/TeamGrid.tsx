'use client';

import Image from 'next/image';
import { TeamMember } from '@/types/models';
import { useState } from 'react';
import { ContactForm } from './ContactForm';

export function TeamGrid({ members }: { members: TeamMember[] }) {
  const [active, setActive] = useState<TeamMember | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <article key={member.id} className="card overflow-hidden">
            <Image src={member.imageUrl} alt={member.name} width={800} height={1000} className="h-64 w-full object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-teal-700">{member.role}</p>
              <button type="button" className="btn-primary mt-3" onClick={() => setActive(member)}>
                View Profile
              </button>
            </div>
          </article>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6">
            <h3 className="font-display text-3xl">{active.name}</h3>
            <p className="text-teal-700">{active.role}</p>
            <p className="mt-3 text-slate-600">{active.bio}</p>
            <p className="mt-3 text-sm">
              <strong>Specialties:</strong> {active.specialties.join(', ')}
            </p>
            <p className="mt-2 text-sm">
              <strong>Certifications:</strong> {active.certifications.join(', ')}
            </p>
            <div className="mt-5 flex gap-3">
              <button type="button" className="btn-primary" onClick={() => setShowContactForm((v) => !v)}>
                Contact
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setActive(null);
                  setShowContactForm(false);
                }}
              >
                Close
              </button>
            </div>
            {showContactForm ? (
              <div className="mt-4">
                <ContactForm context={`Team Contact: ${active.name}`} />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
