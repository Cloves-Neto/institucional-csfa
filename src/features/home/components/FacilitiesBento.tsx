export const FacilitiesBento = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 leading-tight">
          Nossa <br/> <span className="text-brand-blue">Estrutura</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:h-[600px]">
        {/* Fachada (Large, spans 2 rows, 2 cols) */}
        <div className="md:col-span-2 md:row-span-2 bg-slate-100 rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors z-10" />
          <div className="absolute bottom-6 left-6 z-20">
            <h3 className="text-2xl font-bold text-brand-navy bg-white/90 backdrop-blur px-4 py-2 rounded-xl">Fachada</h3>
          </div>
        </div>

        {/* Laboratórios */}
        <div className="bg-slate-200 rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-brand-blue/0 transition-colors z-10" />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-lg font-bold text-brand-navy bg-white/90 backdrop-blur px-3 py-1 rounded-lg">Laboratórios</h3>
          </div>
        </div>

        {/* Refeitório */}
        <div className="bg-slate-200 rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-brand-blue/0 transition-colors z-10" />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-lg font-bold text-brand-navy bg-white/90 backdrop-blur px-3 py-1 rounded-lg">Refeitório</h3>
          </div>
        </div>

        {/* Biblioteca */}
        <div className="bg-slate-300 rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-brand-blue/0 transition-colors z-10" />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-lg font-bold text-brand-navy bg-white/90 backdrop-blur px-3 py-1 rounded-lg">Biblioteca</h3>
          </div>
        </div>

        {/* Informática */}
        <div className="bg-slate-200 rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-brand-blue/0 transition-colors z-10" />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-lg font-bold text-brand-navy bg-white/90 backdrop-blur px-3 py-1 rounded-lg">Informática</h3>
          </div>
        </div>

        {/* Quadras */}
        <div className="bg-slate-300 rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-brand-blue/0 transition-colors z-10" />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-lg font-bold text-brand-navy bg-white/90 backdrop-blur px-3 py-1 rounded-lg">Quadras</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
