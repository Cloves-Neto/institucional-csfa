import { Icon } from '@iconify/react';

export const MissionQuote = () => {
  return (
    <div className="relative pl-8 md:pl-12 py-4 my-20 max-w-4xl mx-auto border-l-4 border-brand-blue">
      <Icon icon="lucide:quote" className="w-16 h-16 text-slate-100 absolute left-4 md:left-8 top-0 -mt-6 -z-10" />
      <blockquote className="text-2xl md:text-3xl font-black text-brand-navy italic leading-snug">
        "Educar para ser feliz e conviver com respeito."
      </blockquote>
      <p className="text-brand-blue font-bold text-sm md:text-base uppercase tracking-widest mt-6">
        — Missão do Colégio São Francisco de Assis
      </p>
    </div>
  );
};
