import { Icon } from '@iconify/react';

const cards = [
  { icon: <Icon icon="lucide:target" className="w-6 h-6" />, title: 'Missão', text: 'Formar jovens transformadores da sociedade, oferecendo educação de qualidade para construir um futuro melhor.' },
  { icon: <Icon icon="lucide:telescope" className="w-6 h-6" />, title: 'Visão', text: 'Ser referência de educação integral, construindo um mundo mais justo, digno e fraterno.' },
  { icon: <Icon icon="lucide:gem" className="w-6 h-6" />, title: 'Valores', text: 'Ética, respeito, fraternidade e espiritualidade franciscana como pilares de nossa formação.' },
];

export const MissionVisionValues = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {cards.map((card, i) => (
        <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
            {card.icon}
          </div>
          <div>
            <h4 className="font-bold text-brand-navy mb-2 text-lg">{card.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
