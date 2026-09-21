export const TechEducationPracticeBanner = () => {
  return (
    <div className="bg-brand-navy rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none -mr-10 -mt-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-[60px] pointer-events-none -ml-10 -mb-10" />
      
      <h2 className="text-2xl font-black mb-4 relative z-10">O Futuro na Prática</h2>
      <p className="text-slate-300 md:text-lg max-w-3xl mx-auto leading-relaxed relative z-10">
        A tecnologia não é apenas uma ferramenta, mas uma linguagem fundamental. No CSFA, as aulas de Informática Básica e Robótica Educacional <strong>fazem parte da grade curricular padrão</strong>, garantindo que todos os alunos desenvolvam desde cedo habilidades essenciais para o século XXI.
      </p>
    </div>
  );
};
