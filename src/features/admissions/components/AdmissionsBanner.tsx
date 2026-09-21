export const AdmissionsBanner = () => {
  return (
    <div className="bg-brand-navy text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl shadow-brand-navy/10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none -mr-10 -mt-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-[60px] pointer-events-none -ml-10 -mb-10" />
      
      <h2 className="text-3xl font-black mb-4 relative z-10">Matrículas Abertas para 2027</h2>
      <p className="text-slate-300 md:text-lg max-w-2xl mx-auto relative z-10 leading-relaxed">
        As vagas para novos alunos já estão disponíveis! Antecipe-se e garanta o lugar do seu filho em uma escola que é referência de ensino e acolhimento humano na região.
      </p>
    </div>
  );
};
