import { ContactForm } from '@/components/ContactForm';
import { academyInfo } from '@/lib/constants';
import { HeadstartMap } from '@/components/HeadstartMap';
import { OpenStatus } from '@/components/OpenStatus';

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">Contact</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <ContactForm />
        <section className="space-y-4">
          <div className="card p-5 text-sm">
            <p><strong>Location:</strong> HEADStart Tennis Centre</p>
            <p className="mt-1"><strong>Rating:</strong> 4.5 (71 reviews)</p>
            <p className="mt-1"><strong>Category:</strong> Tennis club</p>
          </div>
          <div className="card p-5 text-sm">
          <p><strong>Phone:</strong> {academyInfo.phone.join(', ')}</p>
          <p className="mt-1"><strong>Email:</strong> {academyInfo.email}</p>
          <p className="mt-1"><strong>Address:</strong> {academyInfo.address}</p>
          </div>
          <OpenStatus />
          <HeadstartMap />
        </section>
      </div>
    </div>
  );
}
