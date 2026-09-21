import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import {
  SASPortalHeroBanner,
  SASAccessCards,
  SASResourcesGrid,
  SASQRCodeSteps,
} from '@/features/academic';

export const PortalSas = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        eyebrow="Ferramenta Digital do Aluno"
        title={<>Portal <span className="text-brand-blue">SAS Aluno</span></>}
        subtitle="O ambiente digital que conecta o conteúdo do livro com tecnologia de ponta — videoaulas, jogos educativos, simulados e acompanhamento de desempenho em um só lugar."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-12">
            <SASPortalHeroBanner />
            <SASAccessCards />
            <SASResourcesGrid />
            <SASQRCodeSteps />
            <ContactCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortalSas;
