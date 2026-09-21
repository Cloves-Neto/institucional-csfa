import { Icon } from '@iconify/react';

export const ContactCTA = () => {
  return (
    <div className="bg-brand-navy text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl shadow-brand-navy/10 mt-16 mb-4">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none -mr-10 -mt-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-[60px] pointer-events-none -ml-10 -mb-10" />
      
      <h2 className="text-3xl font-black mb-4 relative z-10">Ficou com alguma dúvida?</h2>
      <p className="text-slate-300 md:text-lg max-w-2xl mx-auto relative z-10 leading-relaxed mb-8">
        Nossa equipe de atendimento está de prontidão para ajudar. Entre em contato pelo WhatsApp ou agende uma visita presencial para conhecer nossa estrutura de perto!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
        <a
          href="#agendar"
          className="flex items-center justify-center gap-3 bg-brand-blue text-white font-bold py-4 px-8 rounded-2xl hover:bg-blue-500 transition-colors shadow-lg w-full sm:w-auto"
        >
          <Icon icon="lucide:calendar" className="w-5 h-5" />
          <span className="text-lg">Agendar Visita</span>
        </a>
        <a
          href="#whatsapp"
          className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-4 px-8 rounded-2xl hover:bg-green-600 transition-colors shadow-lg w-full sm:w-auto"
        >
          <Icon icon="mdi:whatsapp" className="w-5 h-5" />
          <span className="text-lg">Falar no WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
