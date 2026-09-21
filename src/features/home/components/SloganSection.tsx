
export const SloganSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-brand-navy/5 border border-slate-100 flex flex-col items-center relative overflow-hidden group">
          {/* Decorative element in the background of the card */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-5 bg-brand-blue group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full opacity-[0.03] bg-brand-navy group-hover:scale-110 transition-transform duration-700 delay-100"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy leading-[1.1] mb-10 tracking-tight text-center">
              Formando Jovens <br /> <span className="text-brand-blue">Transformadores</span> da sociedade
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm font-bold text-slate-500 uppercase tracking-[0.2em] bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
              <span className="text-brand-navy">Educação</span>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/50"></div>
              <span className="text-brand-navy">Espiritualidade</span>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/50"></div>
              <span className="text-brand-navy">Valores Humanos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
