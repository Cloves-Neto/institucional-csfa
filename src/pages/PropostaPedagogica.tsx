import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import {
  MissionBanner,
  IntegralEducationSection,
  LearningPillarsSection,
  InstitutionalValuesSection,
} from '@/features/institutional';

export const PropostaPedagogica = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        title={<>Nossa <span className="text-brand-blue">Proposta Pedagógica</span></>}
        subtitle="Uma educação que vai além dos conteúdos: formamos cidadãos íntegros, pensadores críticos e agentes de transformação social."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-12 flex flex-col gap-12 lg:gap-16">
            <MissionBanner />
            <IntegralEducationSection />
            <LearningPillarsSection />
            <InstitutionalValuesSection />
            <ContactCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropostaPedagogica;
