import { Icon } from '@iconify/react';

const stats = [
  { icon: <Icon icon="mdi:calendar-star" className="w-6 h-6" />, num: '1984', label: 'Fundação' },
  { icon: <Icon icon="mdi:school" className="w-6 h-6" />, num: '5', label: 'Segmentos' },
  { icon: <Icon icon="mdi:history" className="w-6 h-6" />, num: '+40', label: 'Anos de história' },
  { icon: <Icon icon="mdi:map-marker-radius" className="w-6 h-6" />, num: 'SP', label: 'Americanópolis' },
];

export const HistoryNumbers = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8 mb-12 relative z-10">
      {stats.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-lg px-5 py-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
            {item.icon}
          </div>
          <div>
            <p className="text-xl font-black text-brand-navy leading-none">{item.num}</p>
            <p className="text-xs text-slate-400 mt-0.5">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
