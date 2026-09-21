import { Icon } from '@iconify/react';

const pillars = [
  {
    icon: <Icon icon="lucide:eye" className="w-7 h-7" />,
    title: 'Observação',
    desc: 'O aluno é convidado a perceber o mundo ao seu redor com atenção e curiosidade, desenvolvendo a capacidade de análise da realidade.'
  },
  {
    icon: <Icon icon="lucide:target" className="w-7 h-7" />,
    title: 'Reflexão',
    desc: 'Espaço para pensar criticamente sobre o que foi observado, formular hipóteses e construir o próprio pensamento de forma autônoma.'
  },
  {
    icon: <Icon icon="lucide:globe" className="w-7 h-7" />,
    title: 'Ação',
    desc: 'O conhecimento se concretiza quando o aluno age com responsabilidade e compromisso, transformando sua realidade e contribuindo para a comunidade.'
  }
];

export const LearningPillarsSection = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-8 tracking-tight">Os Três Pilares do Aprendizado</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pilar, i) => (
          <div key={i} className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 text-left relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue/50 to-brand-blue"></div>
            <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
              {pilar.icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight">{pilar.title}</h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">{pilar.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
