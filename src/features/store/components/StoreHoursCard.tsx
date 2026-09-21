import { Icon } from '@iconify/react';

export const StoreHoursCard = () => {
  return (
    <div className="flex items-start gap-4 bg-white border border-slate-100 rounded-2xl px-6 py-5 shadow-sm mb-14">
      <Icon icon="lucide:calendar-days" className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
      <div>
        <p className="font-bold text-brand-navy mb-2">Horário de funcionamento</p>
        <div className="flex flex-wrap gap-6 text-sm text-slate-600">
          <span className="flex items-center gap-2">
            <Icon icon="lucide:check-circle-2" className="w-4 h-4 text-emerald-500" />
            Segunda a Sexta: durante o horário escolar
          </span>
          <span className="flex items-center gap-2">
            <Icon icon="lucide:clock" className="w-4 h-4 text-slate-400" />
            Acesso exclusivo para alunos matriculados
          </span>
        </div>
      </div>
    </div>
  );
};
