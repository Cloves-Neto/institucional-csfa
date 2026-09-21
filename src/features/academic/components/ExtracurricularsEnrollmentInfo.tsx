import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const ExtracurricularsEnrollmentInfo = () => {
  return (
    <div className="relative pl-8 md:pl-12 py-6 my-20 max-w-4xl mx-auto border-l-4 border-brand-blue">
      <Icon icon="mdi:information-outline" className="w-16 h-16 text-slate-100 absolute left-4 md:left-8 top-0 -mt-6 -z-10" />
      <h3 className="text-2xl md:text-3xl font-black text-brand-navy mb-4">Como inscrever meu filho?</h3>
      <p className="text-slate-600 text-lg leading-relaxed mb-6">
        As turmas extracurriculares possuem vagas limitadas e são divididas por faixa etária. Para conferir horários, valores e efetivar a inscrição, fale com a nossa secretaria.
      </p>
      <Link
        to="/contato"
        className="inline-flex items-center gap-2 font-bold text-brand-blue hover:text-brand-navy transition-colors"
      >
        Consultar Vagas na Secretaria <Icon icon="lucide:arrow-right" className="w-5 h-5" />
      </Link>
    </div>
  );
};
