import { useState } from 'react';
import { PageHero } from '@/components/shared/PageHero';
import {
  ContactInfoCard,
  GeneralContactForm,
  CareersForm,
} from '@/features/contact';

export const Contato = () => {
  const [activeTab, setActiveTab] = useState<'contato' | 'trabalhe'>('contato');

  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        title={<>Fale <span className="text-brand-blue">Conosco</span></>}
        subtitle="Estamos aqui para ouvir você. Envie sua mensagem ou faça parte da nossa equipe!"
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <ContactInfoCard activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-brand-navy/5 border border-slate-100">
                {activeTab === 'contato' ? <GeneralContactForm /> : <CareersForm />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contato;
