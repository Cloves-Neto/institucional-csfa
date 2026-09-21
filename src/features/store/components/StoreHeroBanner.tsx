import { Icon } from '@iconify/react';

export const StoreHeroBanner = () => {
  return (
    <div className="pt-20 pb-12 w-full relative">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue uppercase tracking-wider mx-auto">
          <Icon icon="lucide:store" />
          Loja do Colégio
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
          Tudo para o seu filho se preparar para as aulas
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mx-auto max-w-2xl mt-4">
          Uniformes, materiais, livros, apostilas, mochilas e muito mais — com a praticidade de estar dentro do próprio colégio.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 text-center mt-8">
          {[
            { icon: <Icon icon="lucide:shopping-bag" className="w-5 h-5 mx-auto mb-1 text-brand-blue" />, label: 'Materiais' },
            { icon: <Icon icon="lucide:shirt" className="w-5 h-5 mx-auto mb-1 text-brand-blue" />, label: 'Uniformes' },
            { icon: <Icon icon="lucide:book-open" className="w-5 h-5 mx-auto mb-1 text-brand-blue" />, label: 'Livros' },
            { icon: <Icon icon="lucide:package" className="w-5 h-5 mx-auto mb-1 text-brand-blue" />, label: 'Acessórios' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl px-5 py-4 text-brand-navy shadow-sm w-32 hover:shadow-md transition-shadow">
              {item.icon}
              <span className="text-xs font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
