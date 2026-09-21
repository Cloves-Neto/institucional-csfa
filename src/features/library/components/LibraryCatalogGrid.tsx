import { Icon } from '@iconify/react';
import { libraryCatalog } from '../data/library.data';

export const LibraryCatalogGrid = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-brand-navy mb-4">Nosso Acervo</h2>
      <p className="text-center text-slate-500 mb-10 max-w-xl mx-auto">
        Organizado por categoria, o acervo cobre todas as etapas da Educação Básica e preserva a história do colégio.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {libraryCatalog.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <Icon icon="lucide:check-circle-2" className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-brand-navy mb-1.5">{item.cat}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
