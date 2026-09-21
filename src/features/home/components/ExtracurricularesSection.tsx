import { Link } from 'react-router-dom';

export const ExtracurricularesSection = () => {
  return (
    <section className="py-12 md:py-16 px-6 max-w-6xl mx-auto relative bg-slate-50/50">
      {/* Background Shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl z-0"></div>
      
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-8 lg:gap-10 relative z-10">
        
        {/* Right Side (flex-row-reverse makes it on the right): Text Box */}
        <div className="w-full lg:w-1/2">
          <div className="relative z-10 py-4">
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy leading-tight">
              Desenvolvimento além <br /> <span className="text-brand-blue">da sala de aula</span>
            </h2>
            <br />
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Acreditamos que o esporte e a cultura são fundamentais para o desenvolvimento integral. Nossas atividades extracurriculares incluem esportes como futebol, vôlei e basquete, além de atividades artísticas como teatro e dança. Uma estrutura completa para despertar novos talentos!
            </p>
            <Link 
              to="/extracurriculares" 
              className="inline-block bg-brand-navy text-white px-8 py-3 rounded-full font-bold hover:bg-brand-blue transition-transform hover:-translate-y-1 shadow-lg shadow-brand-navy/30"
            >
              Conheça as modalidades
            </Link>
          </div>
        </div>

        {/* Left Side (flex-row-reverse makes it on the left): Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start items-center mt-12 lg:mt-0 px-4 md:px-8">
          
          {/* Fundo decorativo (Blur) */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-brand-blue/20 rounded-full top-0 left-0 blur-[80px] z-0" />
          
          {/* Imagem Circular */}
          <div className="relative z-10 p-3 bg-white rounded-full shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:scale-105 transition-transform duration-500 max-w-sm w-full aspect-square">
            <img 
              src="/extracurriculars.jpg" 
              alt="Atividades Extracurriculares" 
              className="w-full h-full object-cover rounded-full"
            />
            
            {/* Elemento Decorativo */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-brand-blue rounded-full shadow-lg flex items-center justify-center text-white font-bold text-2xl -rotate-12">
              ⚽
            </div>
            <div className="absolute bottom-10 -left-4 w-14 h-14 bg-brand-navy rounded-full shadow-lg flex items-center justify-center text-white font-bold text-xl rotate-12">
              🎭
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
