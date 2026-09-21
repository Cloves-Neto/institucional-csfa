export const LibraryHeroBanner = () => {
  return (
    <div className="pt-20 pb-12 w-full relative">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-blue/10 text-brand-blue uppercase tracking-wider mx-auto">
          Biblioteca
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
          Um acervo que cresce junto com os alunos
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mx-auto max-w-2xl mt-4">
          Da Educação Infantil ao Ensino Médio, nossa biblioteca reúne obras de todos os anos letivos — histórias, didáticos, paradidáticos e muito mais.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 shrink-0 mt-8">
          {[
            { num: '+2.000', label: 'Títulos no acervo' },
            { num: 'Todos', label: 'Os segmentos atendidos' },
            { num: '100%', label: 'Gratuito para alunos' },
            { num: 'Diário', label: 'Acesso livre' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-4 text-center shadow-sm w-32">
              <p className="text-2xl font-black text-brand-navy">{item.num}</p>
              <p className="text-xs text-slate-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
