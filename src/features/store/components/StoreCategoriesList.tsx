import { Icon } from '@iconify/react';
import { storeCategories, storeCores } from '../data/store.data';

export const StoreCategoriesList = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-brand-navy mb-8">O que você encontra no Magazine</h2>
      <div className="space-y-4">
        {storeCategories.map((cat, i) => {
          const c = storeCores[cat.cor];
          return (
            <div
              key={i}
              className={`flex items-start gap-5 rounded-2xl border p-6 transition-shadow hover:shadow-md ${
                cat.status === 'order' ? 'border-rose-200 bg-rose-50' : `${c.bg} ${c.border}`
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${c.icon}`}>
                <Icon icon={cat.icon} className="w-8 h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-brand-navy">{cat.titulo}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${c.badge}`}>
                    {cat.status === 'available' ? (
                      <>
                        <Icon icon="lucide:check-circle-2" className="w-3 h-3" /> {cat.disponibilidade}
                      </>
                    ) : (
                      <>
                        <Icon icon="lucide:clock" className="w-3 h-3" /> {cat.disponibilidade}
                      </>
                    )}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
