import { useState, type FormEvent } from 'react';
import { Icon } from '@iconify/react';
import { contactService } from '@/features/contact/services/contact.service';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Dúvidas Gerais');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const result = await contactService.sendGeneralContact({
        name,
        email,
        phone,
        subject: subject || 'Contato via Home',
        message,
      });

      if (result.success) {
        setFeedback({ type: 'success', message: result.message });
        setName('');
        setPhone('');
        setEmail('');
        setSubject('Dúvidas Gerais');
        setMessage('');
      } else {
        setFeedback({
          type: 'error',
          message: result.message || 'Não foi possível enviar sua mensagem. Tente novamente em instantes.',
        });
      }
    } catch (err: any) {
      setFeedback({
        type: 'error',
        message: err?.message || 'Erro ao enviar mensagem. Verifique sua conexão e tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Formulário e Contatos */}
        <div>
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Entre em Contato</h2>
          <p className="text-slate-500 mb-8">Tire suas dúvidas ou agende uma visita ao nosso colégio.</p>

          {feedback && (
            <div
              className={`mb-6 p-4 rounded-2xl text-xs font-semibold flex items-center gap-3 ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              <Icon
                icon={feedback.type === 'success' ? 'lucide:check-circle-2' : 'lucide:alert-circle'}
                className="w-5 h-5 shrink-0"
              />
              <span>{feedback.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome completo"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefone / WhatsApp"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-slate-600"
              >
                <option value="Dúvidas Gerais">Dúvidas Gerais</option>
                <option value="Agendamento de Visita">Agendamento de Visita</option>
                <option value="Informações sobre Matrícula">Informações sobre Matrícula</option>
                <option value="Secretaria">Secretaria</option>
              </select>
            </div>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Sua mensagem"
              rows={4}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"
            ></textarea>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-xl px-6 py-4 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Icon icon="lucide:loader-2" className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Icon icon="lucide:send" className="w-5 h-5" />
                  Enviar Mensagem
                </>
              )}
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
