import { Icon } from '@iconify/react';

export const SASIntroBanner = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-navy/5 mb-12 flex flex-col lg:flex-row border border-slate-100">
      <div className="w-full lg:w-5/12 h-72 lg:h-auto">
        <img 
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop" 
          alt="Alunos utilizando tecnologia" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="w-full lg:w-7/12 p-8 md:p-12 text-white bg-brand-navy relative flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">O que é o SAS Educação?</h2>
          <div className="space-y-4 text-slate-300 text-lg leading-relaxed mb-8">
            <p>
              O SAS Educação é uma plataforma educacional completa com mais de 21 anos de experiência, desenvolvida por especialistas em educação básica para atuar como nosso parceiro no aprendizado.
            </p>
            <p>
              Ele potencializa nossa proposta pedagógica, oferecendo material didático totalmente alinhado à <strong>Base Nacional Comum Curricular (BNCC)</strong> e tecnologia de ponta para alunos e professores.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="lucide:graduation-cap" className="w-6 h-6 text-brand-blue" />
              <h4 className="text-lg font-bold">O SAS está presente em:</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Educação Infantil', 'Ensino Fundamental I', 'Ensino Fundamental II', 'Ensino Médio e ENEM'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Icon icon="lucide:check-circle-2" className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
