import { Icon } from '@iconify/react';

const pillars = [
  { label: 'Desenvolvimento Acadêmico', pct: 'Leitura, escrita e ciências', icon: 'mdi:school-outline' },
  { label: 'Formação Moral e Ética', pct: 'Princípios franciscanos', icon: 'mdi:scale-balance' },
  { label: 'Desenvolvimento Social', pct: 'Cidadania e solidariedade', icon: 'mdi:account-group-outline' },
  { label: 'Crescimento Emocional', pct: 'Autonomia e resiliência', icon: 'mdi:heart-outline' }
];

export const IntegralEducationSection = () => {
  return (
    <div className="py-8">
      <div className="mb-12">
        <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8">
          <Icon icon="mdi:human-capacity-increase" className="w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 tracking-tight">Formação Integral</h2>
        <div className="space-y-4 text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-4xl">
          <p>
            Nossa concepção de educação entende o aluno em sua totalidade: ser pensante, emocional, social e espiritual. Não basta transmitir conteúdos — é preciso desenvolver o caráter e as virtudes.
          </p>
          <p>
            Nosso currículo integra desenvolvimento acadêmico, moral e social em todas as etapas da Educação Básica, pois acreditamos que escola, família e sociedade são co-responsáveis.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((item, i) => (
          <div key={i} className="flex flex-col items-start gap-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
              <Icon icon={item.icon} className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-brand-navy text-lg leading-snug">{item.label}</p>
              <p className="text-slate-500 text-sm mt-2 font-medium">{item.pct}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
