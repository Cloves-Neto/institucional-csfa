import { Icon } from '@iconify/react';
import { sasRecursos } from '../data/sas.data';

export const SASResourcesGrid = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-brand-navy mb-4">O que o SAS oferece</h2>
      <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
        Três camadas que se complementam para uma experiência educacional completa e eficaz.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sasRecursos.map((item, idx) => (
          <div 
            key={idx}
            className="group bg-slate-50 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-brand-navy/5 border border-transparent hover:border-slate-100 flex flex-col items-center text-center hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              <Icon icon={item.icon} className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
