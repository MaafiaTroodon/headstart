import { PremiumHero } from './PremiumHero';
import { AcademyIntro } from './AcademyIntro';
import { ProgramShowcaseGrid } from './ProgramShowcaseGrid';
import { EditorialFeatureBlock } from './EditorialFeatureBlock';
import { BenefitsSection } from './BenefitsSection';
import { EventsStrip } from './EventsStrip';
import { SponsorsMarquee } from './SponsorsMarquee';
import { PremiumContactSection } from './PremiumContactSection';
import { PremiumFooter } from './PremiumFooter';

export function HomepagePremium() {
  return (
    <div className="space-y-14 pb-4 md:space-y-20">
      <PremiumHero />
      <AcademyIntro />
      <ProgramShowcaseGrid />
      <EditorialFeatureBlock />
      <BenefitsSection />
      <EventsStrip />
      <SponsorsMarquee />
      <PremiumContactSection />
      <PremiumFooter />
    </div>
  );
}
