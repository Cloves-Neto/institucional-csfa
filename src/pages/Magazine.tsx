import { Link } from 'react-router-dom';
import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import {
  StoreHeroBanner,
  StoreHoursCard,
  StoreOrderNotice,
  StoreCategoriesList,
  StoreOrderSteps,
} from '@/features/store';

export const Magazine = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        title={<>Magazine <span className="text-brand-blue">CSFA</span></>}
        subtitle="A loja oficial do Colégio São Francisco de Assis — tudo o que você precisa para começar o ano letivo em um só lugar."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <StoreHeroBanner />
          <StoreHoursCard />
          <StoreOrderNotice />
          <StoreCategoriesList />
          <StoreOrderSteps />

          <div className="text-center text-sm text-slate-400 space-y-1">
            <p>Dúvidas sobre o Magazine? Entre em contato com a secretaria.</p>
            <Link to="/contato" className="text-brand-blue hover:underline font-medium">
              Entre em contato →
            </Link>
            <ContactCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Magazine;
