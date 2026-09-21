import { Icon } from '@iconify/react';
import { libraryCardSteps } from '../data/library.data';

export const LibraryCardSteps = () => {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12 mb-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
          <Icon icon="lucide:id-card" className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-brand-navy">Carteirinha da Biblioteca</h2>
          <p className="text-slate-500 text-sm">Obrigatória para empréstimo de livros</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {libraryCardSteps.map((p, i) => (
          <div key={i} className="relative flex gap-4 items-start">
            <div className="w-9 h-9 rounded-full bg-brand-navy text-white flex items-center justify-center font-black text-sm shrink-0">
              {p.passo}
            </div>
            <div>
              <h4 className="font-bold text-brand-navy mb-1">{p.titulo}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
            {i < libraryCardSteps.length - 1 && (
              <Icon icon="lucide:arrow-right" className="hidden md:block absolute -right-3 top-2 w-4 h-4 text-slate-300" />
            )}
          </div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-sm text-slate-600">
        <p className="font-bold text-brand-navy mb-2">Regras de empréstimo</p>
        <ul className="space-y-1.5">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"></span>
            Prazo de devolução: a combinar com a equipe da biblioteca
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"></span>
            Limite de empréstimos simultâneos: conforme orientação da equipe
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"></span>
            Materiais de referência (dicionários, enciclopédias) disponíveis apenas para consulta local
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"></span>
            Em caso de perda ou dano, o responsável deverá repor o exemplar
          </li>
        </ul>
      </div>
    </div>
  );
};
