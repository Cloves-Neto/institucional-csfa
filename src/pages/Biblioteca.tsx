import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import {
  LibraryHeroBanner,
  LibraryServicesGrid,
  LibraryCatalogGrid,
  LibraryCardSteps,
} from '@/features/library';

export const Biblioteca = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        title={<>Nossa <span className="text-brand-blue">Biblioteca</span></>}
        subtitle="Um espaço de aprendizado, descoberta e cultura — com acervo completo, suporte especializado e serviços pensados para cada aluno."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <LibraryHeroBanner />
          <LibraryServicesGrid />
          <LibraryCatalogGrid />
          <LibraryCardSteps />
          <ContactCTA />
        </div>
      </main>
    </div>
  );
};

export default Biblioteca;
