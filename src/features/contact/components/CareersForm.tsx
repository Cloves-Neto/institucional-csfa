import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Icon } from '@iconify/react';
import { contactService } from '../services/contact.service';

export const CareersForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestArea, setInterestArea] = useState('');
  const [linkType, setLinkType] = useState('LINKEDIN');
  const [linkUrl, setLinkUrl] = useState('');
  const [presentation, setPresentation] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    let attachmentUrl = undefined;
    if (file) {
      attachmentUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    }

    const result = await contactService.sendCareersApplication({
      name,
      email,
      phone,
      interestArea,
      linkType,
      linkUrl,
      presentation,
      attachmentUrl,
    });

    setIsSubmitting(false);
    if (result.success) {
      setFeedback({ type: 'success', message: result.message });
      setName('');
      setEmail('');
      setPhone('');
      setInterestArea('');
      setLinkType('LINKEDIN');
      setLinkUrl('');
      setPresentation('');
      setFile(null);
    } else {
      setFeedback({ type: 'error', message: 'Erro ao enviar candidatura. Tente novamente.' });
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
      <h2 className="text-2xl font-bold text-brand-navy mb-2">Trabalhe Conosco</h2>
      <p className="text-slate-500 mb-6 text-sm">Quer fazer parte da equipe do Colégio São Francisco de Assis? Envie seus dados e currículo.</p>

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
            <label className="text-sm font-bold text-slate-600">Área de Interesse *</label>
            <select 
              required
              value={interestArea}
              onChange={(e) => setInterestArea(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-slate-600 text-sm"
            >
              <option value="">Selecione uma área...</option>
              <option value="Professor(a) - Ed. Infantil">Professor(a) - Ed. Infantil</option>
              <option value="Professor(a) - Fundamental I">Professor(a) - Fundamental I</option>
              <option value="Professor(a) - Fundamental II">Professor(a) - Fundamental II</option>
              <option value="Professor(a) - Ensino Médio">Professor(a) - Ensino Médio</option>
              <option value="Coordenação / Direção">Coordenação / Direção</option>
              <option value="Administrativo / Secretaria">Administrativo / Secretaria</option>
              <option value="Apoio / Limpeza / Manutenção">Apoio / Limpeza / Manutenção</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600">Tipo de Link (Opcional)</label>
            <select 
              value={linkType}
              onChange={(e) => setLinkType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-slate-600 text-sm"
            >
              <option value="LINKEDIN">LinkedIn</option>
              <option value="INSTAGRAM">Instagram Profissional</option>
              <option value="WEBSITE">Site / Portfólio Pessoal</option>
              <option value="CURRICULUM_LINK">Link do Currículo na Nuvem</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600">URL do Link</label>
            <input 
              type="url" 
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all text-brand-navy text-sm" 
              placeholder={linkType === 'LINKEDIN' ? 'https://linkedin.com/in/seu-perfil' : 'https://...'} 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-600">Anexar Currículo (PDF, DOC)</label>
          <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
            <input 
              type="file" 
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
              accept=".pdf,.doc,.docx" 
            />
            <Icon icon="lucide:paperclip" className="w-8 h-8 text-slate-400 mx-auto mb-2 group-hover:text-brand-blue transition-colors" />
            <p className="text-sm text-slate-500 font-medium group-hover:text-brand-blue transition-colors">
              {file ? `Arquivo selecionado: ${file.name}` : 'Clique para anexar ou arraste o arquivo aqui'}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-600">Carta de Apresentação (Breve resumo)</label>
          <textarea 
            rows={3} 
            value={presentation}
            onChange={(e) => setPresentation(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 transition-all resize-none text-brand-navy text-sm" 
            placeholder="Conte-nos um pouco sobre sua experiência..."
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
              Enviar Currículo
            </>
          )}
        </button>
      </form>
    </div>
  );
};
