export const ExtracurricularsNotice = () => {
  return (
    <div className="bg-brand-navy rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl mb-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none -mr-10 -mt-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-[60px] pointer-events-none -ml-10 -mb-10" />
      
      <div className="relative z-10">
        <h2 className="text-3xl font-black text-white mb-6">
          Desenvolvimento além da sala de aula
        </h2>
        <p className="text-slate-200 text-lg leading-relaxed max-w-3xl">
          Acreditamos que o esporte e a cultura são fundamentais na formação de crianças e jovens. 
          Por isso, as atividades abaixo <strong className="text-white">não fazem parte da grade curricular obrigatória</strong>, 
          mas estão disponíveis para que os alunos possam se inscrever no contraturno e explorar novos talentos!
        </p>
      </div>
    </div>
  );
};
