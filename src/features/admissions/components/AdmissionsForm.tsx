import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Icon } from '@iconify/react';
import { suggestGradeByBirthDate } from '../utils/grade-suggestion';
import { admissionsService } from '../services/admissions.service';

export const AdmissionsForm = () => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [studentName, setStudentName] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [turma, setTurma] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Calcula limites de data (3 a 19 anos)
  const hoje = new Date();
  const maxDate = new Date(hoje.getFullYear() - 3, hoje.getMonth(), hoje.getDate()).toISOString().split('T')[0];
  const minDate = new Date(hoje.getFullYear() - 19, hoje.getMonth(), hoje.getDate()).toISOString().split('T')[0];

  useEffect(() => {
    const sugestao = suggestGradeByBirthDate(dataNasc);
    if (sugestao) {
      setTurma(sugestao);
    }
  }, [dataNasc]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const result = await admissionsService.sendInterest({
      parentName,
      phone,
      email,
      studentName,
      birthDate: dataNasc,
      grade: turma,
      notes: notes || undefined,
    });

    setIsSubmitting(false);
    if (result.success) {
      setFeedback({ type: 'success', message: result.message });
      setParentName('');
      setPhone('');
      setEmail('');
      setStudentName('');
      setDataNasc('');
      setTurma('');
      setNotes('');
    } else {
      setFeedback({ type: 'error', message: 'Erro ao enviar solicitação de matrícula. Tente novamente.' });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-brand-navy/5 relative text-left">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-brand-navy mb-2">Formulário de Interesse</h2>
        <p className="text-slate-500 text-sm">
          Preencha os dados abaixo e entraremos em contato rapidamente para darmos continuidade ao processo pedagógico.
        </p>
      </div>

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

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Dados do Responsável */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Icon icon="lucide:user" className="w-4 h-4 text-brand-blue" />
            Dados do Responsável
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Nome completo do Responsável *</label>
              <input 
                type="text" 
                required 
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all text-brand-navy text-sm" 
                placeholder="Ex: Maria Silva" 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Telefone / WhatsApp *</label>
              <div className="relative">
                <Icon icon="lucide:phone" className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="tel" 
                  required 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all text-brand-navy text-sm" 
                  placeholder="(11) 90000-0000" 
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">E-mail *</label>
              <div className="relative">
                <Icon icon="lucide:mail" className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all text-brand-navy text-sm" 
                  placeholder="seu@email.com" 
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Dados do Aluno */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Icon icon="lucide:graduation-cap" className="w-4 h-4 text-brand-blue" />
            Dados do Aluno
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Nome completo do Aluno *</label>
              <input 
                type="text" 
                required 
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all text-brand-navy text-sm" 
                placeholder="Nome do futuro aluno" 
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Data de Nascimento *</label>
              <input 
                type="date" 
                required 
                min={minDate}
                max={maxDate}
                value={dataNasc}
                onChange={(e) => setDataNasc(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all text-slate-600 text-sm" 
              />
              <p className="text-xs text-brand-blue mt-1 font-medium">Idade permitida: 3 a 19 anos.</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Turma / Ano de Interesse *</label>
              <select 
                required
                value={turma}
                onChange={(e) => setTurma(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all text-slate-700 text-sm"
              >
                <option value="">Selecione a Turma...</option>
                <optgroup label="Educação Infantil">
                  <option value="Educação Infantil - Berçário / Maternal">Berçário / Maternal</option>
                  <option value="Educação Infantil - Pré I">Pré I (4 anos)</option>
                  <option value="Educação Infantil - Pré II">Pré II (5 anos)</option>
                </optgroup>
                <optgroup label="Ensino Fundamental I">
                  <option value="Ensino Fundamental I - 1º Ano">1º Ano</option>
                  <option value="Ensino Fundamental I - 2º Ano">2º Ano</option>
                  <option value="Ensino Fundamental I - 3º Ano">3º Ano</option>
                  <option value="Ensino Fundamental I - 4º Ano">4º Ano</option>
                  <option value="Ensino Fundamental I - 5º Ano">5º Ano</option>
                </optgroup>
                <optgroup label="Ensino Fundamental II">
                  <option value="Ensino Fundamental II - 6º Ano">6º Ano</option>
                  <option value="Ensino Fundamental II - 7º Ano">7º Ano</option>
                  <option value="Ensino Fundamental II - 8º Ano">8º Ano</option>
                  <option value="Ensino Fundamental II - 9º Ano">9º Ano</option>
                </optgroup>
                <optgroup label="Ensino Médio">
                  <option value="Ensino Médio - 1ª Série">1ª Série</option>
                  <option value="Ensino Médio - 2ª Série">2ª Série</option>
                  <option value="Ensino Médio - 3ª Série">3ª Série</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>

        {/* Observações */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">Observações ou Mensagem</label>
          <textarea 
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all resize-none text-brand-navy text-sm" 
            placeholder="Alguma dúvida, necessidade especial do aluno ou detalhe que gostaria de nos informar?" 
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Icon icon="lucide:loader-2" className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Icon icon="lucide:send" className="w-5 h-5" />
              Enviar Solicitação
            </>
          )}
        </button>
        <p className="text-xs text-slate-400 text-center mt-4">
          Seus dados estão seguros. Responderemos o mais breve possível.
        </p>
      </form>
    </div>
  );
};
