import { Icon } from '@iconify/react';

const steps = [
  { n: '1', t: 'Acesse o Magazine', d: 'Dirija-se ao Magazine do colégio durante o horário de funcionamento escolar.' },
  { n: '2', t: 'Informe o ano/série', d: 'A equipe localiza os materiais específicos da turma do seu filho e registra o pedido.' },
  { n: '3', t: 'Retire no prazo combinado', d: 'O material é separado e você é avisado quando estiver disponível para retirada.' },
];

export const StoreOrderSteps = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-brand-navy/5 p-8 md:p-10 mb-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
          <Icon icon="lucide:info" className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-brand-navy">Como funciona a encomenda de material didático?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-9 h-9 rounded-full bg-brand-navy text-white flex items-center justify-center font-black text-sm shrink-0">
              {step.n}
            </div>
            <div>
              <p className="font-bold text-brand-navy text-sm mb-1">{step.t}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
