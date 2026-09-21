export const MissionBanner = () => {
  return (
    <div className="bg-brand-navy rounded-3xl overflow-hidden shadow-xl shadow-brand-navy/10 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="p-8 md:p-14 lg:p-20 relative z-10 flex flex-col gap-6">
        <span className="text-brand-blue font-bold text-xs md:text-sm uppercase tracking-widest inline-block border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 rounded-full w-max">
          Nossa Missão
        </span>
        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white max-w-4xl tracking-tight">
          "Formar jovens transformadores da sociedade, oferecendo educação de qualidade, para construir um futuro melhor para nossas crianças e jovens."
        </blockquote>
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mt-4 font-medium">
          Carregamos esse compromisso desde 1984, sempre nos guiando pelos princípios franciscanos de fraternidade, afeto e cuidado. Acreditamos que o olhar acolhedor extrai o melhor potencial de cada um.
        </p>
      </div>
    </div>
  );
};
