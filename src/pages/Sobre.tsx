import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import {
  HistoryNumbers,
  AboutCollegeText,
  MissionVisionValues,
  FounderCard,
  SchoolStructureGrid,
  ExtracurricularsPreview,
  ChristianTeachingSection,
  MissionQuote,
} from '@/features/institutional';

export const Sobre = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        eyebrow="Desde 1984 • São Paulo – SP"
        title={<>Nossa <span className="text-brand-blue">História</span></>}
        subtitle="Mais de três décadas formando jovens transformadores com educação de qualidade, valores humanos e orientação franciscana."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <HistoryNumbers />
          <AboutCollegeText />
          <MissionVisionValues />
          <FounderCard />
          <SchoolStructureGrid />
          <ExtracurricularsPreview />
          <ChristianTeachingSection />
          <MissionQuote />
          <ContactCTA />
        </div>
      </main>
    </div>
  );
};

export default Sobre;
