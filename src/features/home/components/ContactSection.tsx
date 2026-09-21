import { Icon } from '@iconify/react';

export const ContactSection = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Formulário e Contatos */}
        <div>
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Entre em Contato</h2>
          <p className="text-slate-500 mb-10">Tire suas dúvidas ou agende uma visita ao nosso colégio.</p>

          <form className="space-y-4 mb-12">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nome completo" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" />
              <input type="text" placeholder="Telefone / WhatsApp" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" />
            </div>
            <input type="email" placeholder="E-mail" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" />
            <textarea placeholder="Sua mensagem" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"></textarea>
            
            <button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-xl px-6 py-4 transition-colors">
              Enviar Mensagem
            </button>
          </form>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                <Icon icon="lucide:map-pin" className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy">Endereço</h4>
                <p className="text-slate-500 text-sm mt-1">
                  <a href="https://goo.gl/maps/8Vqqd41i6GS2" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
                    Rua Professor Luís Pardini, 104<br/>São Paulo - SP
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                <Icon icon="lucide:clock" className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy">Horário de Atendimento</h4>
                <p className="text-slate-500 text-sm mt-1">Segunda a Sexta: 08h às 17h<br/>Sábado e Domingo: Fechado</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                <Icon icon="lucide:phone" className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy">Telefones</h4>
                <p className="text-slate-500 text-sm mt-1">
                  (11) 5562-3394<br/>
                  <a href="https://wa.me/5511986187723" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
                    WhatsApp: (11) 98618-7723
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 relative">
          <iframe 
            src="https://www.google.com/maps?q=Rua+Professor+Lu%C3%ADs+Pardini,+104+-+S%C3%A3o+Paulo&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '400px' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            className="absolute inset-0"
          ></iframe>
        </div>

      </div>
    </section>
  );
};
