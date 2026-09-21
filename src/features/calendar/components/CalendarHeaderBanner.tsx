import { Icon } from '@iconify/react';
import { downloadDynamicCalendarPdf } from '../services/pdfGenerator';

export const CalendarHeaderBanner = () => {
  return (
    <div className="bg-brand-navy rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none -mr-10 -mt-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-[60px] pointer-events-none -ml-10 -mb-10" />
      
      <div className="relative z-10 flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-center gap-3">
          <Icon icon="lucide:calendar-days" className="w-8 h-8 text-brand-blue" />
          <span className="text-brand-blue font-bold text-sm uppercase tracking-widest">Ano Letivo</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black leading-tight">
          Acompanhe nossa programação
        </h2>
        <p className="text-slate-300 md:text-lg max-w-3xl mx-auto leading-relaxed">
          Aqui você encontra as datas de eventos, celebrações anuais e demais informações estudantis. O calendário está sujeito a alterações, então você pode acompanhar sempre por aqui ou baixar o documento oficial atualizado.
        </p>
        <div className="mt-4">
          <button
            onClick={() => downloadDynamicCalendarPdf(2026)}
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-colors cursor-pointer shadow-md"
          >
            <Icon icon="lucide:download" className="w-5 h-5" />
            Baixar Calendário PDF (Dinâmico)
          </button>
        </div>
      </div>
    </div>
  );
};
