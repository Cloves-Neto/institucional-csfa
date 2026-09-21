import { HeroBanner } from '@/features/banners';
import { BlogSection } from '@/features/blog';
import {
  SloganSection,
  SobreNosSection,
  PillarsSection,
  ModulesSection,
  DifferentialsSection,
  FacilitiesBento,
  PartnersSection,
  ContactSection,
  ExtracurricularesSection,
  CtaSection,
} from '@/features/home';

export const HomePage = () => {
  return (
    <main className="pt-24 lg:pt-0">
      <HeroBanner />
      <SloganSection />
      <SobreNosSection />
      <PillarsSection />
      <ModulesSection />
      <DifferentialsSection />
      <FacilitiesBento />
      <PartnersSection />
      <BlogSection />
      <ExtracurricularesSection />
      <CtaSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
