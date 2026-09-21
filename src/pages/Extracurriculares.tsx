import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import {
  ExtracurricularsNotice,
  ExtracurricularsGrid,
  ExtracurricularsEnrollmentInfo,
} from '@/features/academic';

export const Extracurriculares = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        eyebrow="O Colégio"
        title={<>Atividades <span className="text-brand-blue">Extracurriculares</span></>}
        subtitle="Além da nossa grade curricular padrão, oferecemos uma ampla gama de atividades esportivas e culturais para o desenvolvimento integral dos nossos alunos."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-12 flex flex-col gap-12">
            <ExtracurricularsNotice />
            <ExtracurricularsGrid />
            <ExtracurricularsEnrollmentInfo />
            <ContactCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Extracurriculares;
