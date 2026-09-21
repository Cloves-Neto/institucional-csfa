import { Icon } from '@iconify/react';

export const FounderCard = () => {
  return (
    <div className="bg-brand-navy rounded-3xl overflow-hidden shadow-2xl shadow-brand-navy/30 mb-12">
      <div className="flex flex-col md:flex-row">
        {/* Foto */}
        <div className="relative md:w-72 shrink-0">
          <img
            src="/fundador.jpg"
            alt="Pe. Tony — Fundador do Colégio São Francisco de Assis"
            className="w-full h-72 md:h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-brand-navy/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 md:hidden">
            <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Fundador</span>
            <h3 className="text-white text-xl font-bold mt-2">Pe. Tony</h3>
            <p className="text-slate-300 text-sm">Anthony John Conry</p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 p-8 md:p-10 text-white relative">
          <div className="absolute top-8 right-8 opacity-10">
            <Icon icon="lucide:quote" className="w-20 h-20" />
          </div>

          <div className="hidden md:block mb-6">
            <span className="bg-brand-blue/20 text-brand-blue border border-brand-blue/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Fundador</span>
            <h2 className="text-3xl font-black mt-3">Pe. Tony</h2>
            <p className="text-slate-400 text-sm mt-1">Anthony John Conry · 1938</p>
          </div>

          <div className="space-y-4 text-slate-300 text-base leading-relaxed relative z-10">
            <p>
              Nascido em Roscommon, na Irlanda, em 31 de março de 1938, Anthony John Conry dedicou sua vida ao sacerdócio e à educação. Formado em Letras, Teologia e Pedagogia pela Universidade Nacional da Irlanda e Universidade de Dublin, também cursou Direito Canônico em Roma.
            </p>
            <p>
              Chegou ao Brasil como missionário em 1969 e, no bairro de Americanópolis, iniciou a Paróquia de São Francisco de Assis em 1977. Convivendo com a comunidade, sentiu a necessidade de uma educação local de qualidade para as crianças do bairro.
            </p>
            <p>
              Em 1980 iniciou uma pré-escola na própria Igreja. O trabalho foi tão bem-sucedido que Pe. Tony fundou oficialmente o <strong className="text-white">Colégio São Francisco de Assis</strong> em 1984, realizando o sonho de uma escola completa e de qualidade para a comunidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
