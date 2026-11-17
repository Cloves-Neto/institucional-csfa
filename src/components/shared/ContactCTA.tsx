import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export interface ContactCTAProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  title = (
    <>
      Faça parte da família <span className="text-brand-yellow">CSFA</span>
    </>
  ),
  subtitle = 'Agende uma visita presencial, conheça nossa proposta pedagógica de perto e descubra como preparamos seu filho para o futuro.',
  buttonText = 'Iniciar Processo de Matrícula',
  buttonHref = '/matriculas',
  secondaryButtonText = 'Falar com a Secretaria',
  secondaryButtonHref = '/contato',
}) => {
  return (
    <section className="mt-16">
      <div className="relative rounded-3xl bg-brand-navy text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl shadow-brand-navy/10 border border-white/10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-brand-yellow">
              <Icon icon="lucide:sparkles" className="w-3.5 h-3.5" />
              Matrículas e Atendimento
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            {buttonHref.startsWith('http') ? (
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-brand-yellow text-brand-navy font-bold text-sm hover:brightness-105 transition-all shadow-lg"
              >
                {buttonText}
                <Icon icon="lucide:arrow-right" className="w-4 h-4" />
              </a>
            ) : (
              <Link
                to={buttonHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-brand-yellow text-brand-navy font-bold text-sm hover:brightness-105 transition-all shadow-lg"
              >
                {buttonText}
                <Icon icon="lucide:arrow-right" className="w-4 h-4" />
              </Link>
            )}

            {secondaryButtonText && secondaryButtonHref && (
              secondaryButtonHref.startsWith('http') ? (
                <a
                  href={secondaryButtonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 transition-all"
                >
                  <Icon icon="lucide:message-circle" className="w-4 h-4 text-brand-blue" />
                  {secondaryButtonText}
                </a>
              ) : (
                <Link
                  to={secondaryButtonHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 transition-all"
                >
                  <Icon icon="lucide:phone" className="w-4 h-4 text-brand-blue" />
                  {secondaryButtonText}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
