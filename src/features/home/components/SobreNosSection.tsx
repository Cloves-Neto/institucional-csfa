import { Link } from 'react-router-dom';

export const SobreNosSection = () => {
  return (
    <section className="py-12 md:py-16 px-6 max-w-6xl mx-auto relative">
      {/* Background Shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl z-0"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 lg:gap-10 relative z-10">
        
        {/* Left Side: Text Box */}
        <div className="w-full lg:w-1/2">
          <div className="relative z-10 py-4">
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy leading-tight">
              Sobre o colégio <br /> <span className="text-brand-blue">São Francisco de Assis</span>
            </h2>
            <br />
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              No Colégio São Francisco de Assis, acreditamos que educar vai além da transmissão de conteúdos: é formar pessoas capazes, críticas, solidárias e prontas para os desafios da vida. Promovemos um ambiente seguro, inspirador e colaborativo, onde cada aluno é visto em sua singularidade.
            </p>
            <Link 
              to="/sobre" 
              className="inline-block bg-brand-navy text-white px-8 py-3 rounded-full font-bold hover:bg-brand-blue transition-transform hover:-translate-y-1 shadow-lg shadow-brand-navy/30"
            >
              Saiba mais
            </Link>
          </div>
        </div>

        {/* Right Side: Composition */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0 px-4 md:px-8">
          
          {/* Fundo decorativo (Blur) */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-brand-blue/20 rounded-full top-0 right-0 blur-[80px] z-0" />
          
          {/* Cartão Postal */}
          <div className="relative z-10 p-3 bg-white rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] md:-rotate-3 hover:rotate-0 transition-transform duration-500 max-w-md w-full">
            <img 
              src="/interno-colegio.jpg" 
              alt="Fachada do Colégio São Francisco de Assis" 
              className="w-full h-auto aspect-[4/3] object-cover rounded-xl"
            />
            
            {/* Selo (Logo Navy) */}
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-brand-navy rounded-full shadow-2xl flex items-center justify-center border-4 border-white z-20 hover:scale-110 transition-transform duration-300">
              <img 
                src="/logo-white.svg" 
                alt="Selo CSFA" 
                className="w-16 h-16 object-contain" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
