import { Icon } from '@iconify/react';

export const SASAccessCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
      {/* Quem pode usar */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-center">
        <h4 className="font-bold text-xl text-brand-navy mb-6">Quem pode usar:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          {[
            'Alunos de todos os segmentos',
            'Acesso via login fornecido pela escola',
            'Disponível 24h pelo site e aplicativo',
            'Famílias podem acompanhar desempenho'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-slate-600">
              <Icon icon="lucide:check-circle-2" className="w-5 h-5 text-brand-blue shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Links de Acesso */}
      <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-center gap-4">
        <h4 className="font-bold text-xl text-brand-navy mb-2">Acesse a Plataforma:</h4>
        <div className="flex flex-col gap-3">
          <a
            href="https://app.portalsaseducacao.com.br/entrar/?redirectTo=%2F%3F_gl%3D1*nvyffq*_ga*MTAwNTQ5MzU1Mi4xNzg4ODM3NTM0*_ga_1Z9R8Y6W8R*czE3ODg4Mzc1MzMkbzEkZzAkdDE3ODg4Mzc1MzMkajYwJGwwJGgw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-2xl transition-colors shadow-md w-full cursor-pointer"
          >
            <Icon icon="lucide:monitor" className="w-5 h-5" /> Acesso PC
          </a>
          <div className="flex gap-3">
            <a
              href="https://play.google.com/store/search?q=sas%20aluno%5D&c=apps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-sm cursor-pointer"
            >
              <Icon icon="lucide:play" className="w-4 h-4" /> Android
            </a>
            <a
              href="https://apps.apple.com/br/app/sas-educa%C3%A7%C3%A3o/id6502290612"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-sm cursor-pointer"
            >
              <Icon icon="lucide:apple" className="w-4 h-4" /> iOS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
