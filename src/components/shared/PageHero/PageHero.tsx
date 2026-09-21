import type { ReactNode } from 'react';
import { Icon } from '@iconify/react';

interface PageHeroProps {
  /** Pequeno texto em destaque acima do título */
  eyebrow?: string;
  /** Título principal */
  title: ReactNode;
  /** Parágrafo descritivo (subtítulo) */
  subtitle?: string;
  /** Nome do ícone lucide (opcional) */
  icon?: string;
}

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  icon,
}: PageHeroProps) => {
  return (
    <div className="pt-32 pb-16 bg-slate-50 w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {eyebrow && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue uppercase tracking-wider mx-auto">
              {icon && <Icon icon={icon} />}
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mx-auto max-w-2xl mt-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
