import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import {
  TechEducationPracticeBanner,
  TechEducationCurriculumGrid,
  TechEducationTournamentsCard,
} from '@/features/academic';

export const TecnologiaEducacional = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        eyebrow="Como Educamos"
        title={<>Tecnologia <span className="text-brand-blue">Educacional</span></>}
        subtitle="Inovação e pensamento computacional integrados à nossa matriz curricular para preparar os alunos para o futuro."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-12 mt-12">
            <TechEducationPracticeBanner />
            <TechEducationCurriculumGrid />
            <TechEducationTournamentsCard />
            <ContactCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TecnologiaEducacional;
