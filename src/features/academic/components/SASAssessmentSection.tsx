import { sasAvaliacoes } from '../data/sas.data';

export const SASAssessmentSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center text-brand-navy mb-12">Sistema de Avaliação</h2>
      <div className="space-y-4">
        {sasAvaliacoes.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-6 items-start">
            <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold shrink-0">
              {i + 1}
            </div>
            <div>
              <h4 className="font-bold text-brand-navy mb-1">{item.type}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
