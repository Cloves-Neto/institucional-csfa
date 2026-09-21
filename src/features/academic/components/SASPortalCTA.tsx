import { Icon } from '@iconify/react';

export const SASPortalCTA = () => {
  return (
    <div className="bg-brand-navy text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden mb-12">
      <div className="absolute inset-0 bg-brand-blue/10 blur-[60px] pointer-events-none"></div>
      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-4">Acesse o Portal SAS</h3>
        <p className="text-slate-300 mb-8 max-w-lg mx-auto">
          Alunos têm acesso ao Portal SAS com login e senha fornecidos pela escola. Videoaulas, exercícios, simulados e muito mais.
        </p>
        <a
          href="https://portalsas.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg shadow-lg cursor-pointer"
        >
          Acessar Portal SAS
          <Icon icon="lucide:external-link" className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
