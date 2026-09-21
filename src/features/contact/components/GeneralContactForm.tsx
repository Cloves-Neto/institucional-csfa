import { useState } from 'react';
import type { FormEvent } from 'react';
import { Icon } from '@iconify/react';
import { contactService } from '../services/contact.service';

export const GeneralContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const result = await contactService.sendGeneralContact({
      name,
      email,
      phone,
      subject,
      message,
    });

    setIsSubmitting(false);
    if (result.success) {
      setFeedback({ type: 'success', message: result.message });
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } else {
      setFeedback({ type: 'error', message: 'Não foi possível enviar a mensagem. Tente novamente.' });
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
      <h2 className="text-2xl font-bold text-brand-navy mb-6">Envie sua Mensagem</h2>

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

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600">Nome Completo *</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-brand-navy text-sm" 
              placeholder="Seu nome" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600">E-mail *</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-brand-navy text-sm" 
              placeholder="seu@email.com" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600">Telefone / WhatsApp *</label>
            <input 
              type="text" 
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-brand-navy text-sm" 
              placeholder="(11) 90000-0000" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600">Assunto *</label>
            <select 
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-slate-600 text-sm"
            >
              <option value="">Selecione um assunto...</option>
              <option value="Dúvidas Gerais">Dúvidas Gerais</option>
              <option value="Informações sobre Matrícula">Informações sobre Matrícula</option>
              <option value="Elogios">Elogios</option>
              <option value="Sugestões">Sugestões</option>
              <option value="Reclamações">Reclamações</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-600">Mensagem *</label>
          <textarea 
            rows={5} 
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all resize-none text-brand-navy text-sm" 
            placeholder="Escreva sua mensagem aqui..."
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2 w-full md:w-auto mt-4 cursor-pointer disabled:opacity-60"
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
    </div>
  );
};
