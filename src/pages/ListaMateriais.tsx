import { Link } from 'react-router-dom';
import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import { MaterialsNotice, MaterialsGroupsList } from '@/features/academic';

export const ListaMateriais = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        title={<>Lista de <span className="text-brand-blue">Materiais</span></>}
        subtitle="Selecione o ano/série do seu filho e faça o download da lista de materiais para o ano letivo de 2026."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-12">
            <MaterialsNotice />
            <MaterialsGroupsList />
            <div className="mt-16 text-center text-sm text-slate-400 space-y-1">
              <p>Dúvidas sobre a lista de materiais? Entre em contato com a secretaria.</p>
              <p>
                <Link to="/contato" className="text-brand-blue hover:underline font-medium">
                  Ir para Contato →
                </Link>
              </p>
            </div>
            <ContactCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListaMateriais;
