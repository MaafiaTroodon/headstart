import { TeamGrid } from '@/components/TeamGrid';
import { ContactForm } from '@/components/ContactForm';
import { teamMembers } from '@/data/team';

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-display text-4xl">Meet the Team</h1>
      <TeamGrid members={teamMembers} />
      <section className="max-w-2xl">
        <h2 className="font-display text-2xl">Contact a Coach</h2>
        <div className="mt-4">
          <ContactForm context="Coach Contact Request" />
        </div>
      </section>
    </div>
  );
}
