import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import {
  SASIntroBanner,
  SASResourcesGrid,
  SASAssessmentSection,
  SASPortalCTA,
} from '@/features/academic';

export const SistemaEduc = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        eyebrow="Sistema de Ensino Parceiro"
        title={<>Sistema <span className="text-brand-blue">SAS Educação</span></>}
        subtitle="Uma plataforma educacional completa que integra material didático de qualidade, tecnologia e serviços pedagógicos, fortalecendo o ensino em todos os segmentos."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-12">
            <SASIntroBanner />
            <SASResourcesGrid />
            <SASAssessmentSection />
            <SASPortalCTA />
            <ContactCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SistemaEduc;
