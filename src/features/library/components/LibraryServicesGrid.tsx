import { Icon } from '@iconify/react';
import { libraryServices } from '../data/library.data';

export const LibraryServicesGrid = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-brand-navy mb-4">O que oferecemos</h2>
      <p className="text-center text-slate-500 mb-10 max-w-xl mx-auto">
        Serviços pensados para apoiar o aprendizado dentro e fora da sala de aula.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {libraryServices.map((s, i) => (
          <div
            key={i}
            className={`flex gap-5 rounded-3xl border p-7 hover:shadow-md transition-shadow ${s.cor}`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${s.iconBg}`}>
              <Icon icon={s.icon} className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-brand-navy mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
