export const DifferentialsSection = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* Bloco 1: Foco no Aluno */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 mb-32">
        {/* Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 leading-tight">
            Foco no <br/> <span className="text-brand-blue">Aluno</span>
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-lg">
            Com uma experiência educacional contínua, nossa fórmula de sucesso, no entanto, é simples: entender o indivíduo de maneira integral. Nosso trabalho pedagógico é norteado por: ensino de valores, pensamento crítico e aplicação para a vida. Somos comprometidos com a excelência acadêmica e com a formação integral de nossos alunos.
          </p>
          <p className="text-brand-blue font-semibold mb-6">Oferecemos uma educação prática, ativa e significativa.</p>
          <p className="text-brand-navy font-bold">Nossos alunos fazem a diferença!</p>
        </div>
        
        {/* Composition: SVG Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src="/aluno.svg" alt="Foco no Aluno" className="w-full max-w-lg object-contain" />
        </div>
      </div>

      {/* Bloco 2: Tecnologias Educacionais */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-10">
        
        {/* Composition: SVG Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img src="/tecnologia-educacional.svg" alt="Tecnologias Educacionais" className="w-full max-w-lg object-contain" />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 leading-tight">
            Tecnologias <br/> <span className="text-brand-blue">Educacionais</span>
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
            Nossa <strong>metodologia de ensino</strong> alia excelência à tecnologia educacional de ponta. Através do <strong>Sistema SAS Aluno</strong>, oferecemos uma plataforma digital interativa com jogos, simulados e avaliações preparatórias para os principais processos seletivos do país.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
            Complementando a vivência prática, dispomos de um moderno <strong>Lab de Informática</strong> e oferecemos aulas de <strong>Robótica Educacional</strong> em parceria com a <strong>Viamaker</strong>, desenvolvendo raciocínio lógico, criatividade e inovação desde cedo.
          </p>
          <p className="text-brand-navy font-semibold text-sm md:text-base">
            Para integrar a família, disponibilizamos um aplicativo para que os principais serviços da rotina escolar dos filhos possam ser acompanhados virtualmente.
          </p>
        </div>

      </div>
    </section>
  );
};
