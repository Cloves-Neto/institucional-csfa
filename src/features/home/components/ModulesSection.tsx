import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const modules = [
  { 
    title: "Educação Infantil", 
    desc: "Onde a descoberta do mundo acontece de forma lúdica, segura e cheia de afeto.", 
    icon: <Icon icon="lucide:users" className="w-10 h-10 text-brand-navy" strokeWidth={2} />,
    color: "bg-brand-blue",
    link: "/educacao-infantil"
  },
  { 
    title: "Ensino Fundamental I", 
    desc: "A base sólida para o futuro: estimulando a curiosidade, o raciocínio e a criatividade.", 
    icon: <Icon icon="lucide:book-open" className="w-10 h-10 text-brand-navy" strokeWidth={2} />,
    color: "bg-brand-blue",
    link: "/ensino-fundamental-1"
  },
  { 
    title: "Ensino Fundamental II", 
    desc: "Preparação para novos desafios com autonomia, metodologias ativas e suporte emocional.", 
    icon: <Icon icon="lucide:users" className="w-10 h-10 text-brand-navy" strokeWidth={2} />,
    color: "bg-brand-blue",
    link: "/ensino-fundamental-2"
  },
  { 
    title: "Ensino Médio", 
    desc: "O trampolim para as melhores universidades e para o mercado de trabalho com excelência.", 
    icon: <Icon icon="lucide:graduation-cap" className="w-10 h-10 text-brand-navy" strokeWidth={2} />,
    color: "bg-brand-blue",
    link: "/ensino-medio"
  }
];

export const ModulesSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-6 max-w-6xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="w-full md:w-1/2 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 leading-tight">
            Níveis de <br/> <span className="text-brand-blue">Ensino</span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Formação humana e integral. A educação baseada em princípios é um dos pilares da nossa atuação. O jeito São Francisco de Assis de educar fundamenta-se na fé e nos valores cristãos, promovendo um ambiente de acolhimento e o diálogo com diversas áreas do conhecimento para preparar nossos estudantes para os desafios da vida.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center lg:justify-end relative mt-8 md:mt-0">
          <div className="relative w-full max-w-md">
            <img src="/sobre.svg" alt="Alunos Níveis de Ensino" className="w-full h-auto relative z-10 drop-shadow-xl" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((mod, idx) => (
          <Link
            key={idx}
            to={mod.link}
            className="group relative overflow-hidden rounded-4xl bg-white shadow-xl shadow-brand-navy/5 border border-slate-100 flex flex-col items-center justify-center p-8 text-center aspect-square transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 hover:border-brand-blue/30 w-full"
          >
            <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 ${mod.color}`}></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform ${mod.color}`}>
                {mod.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4 leading-tight">{mod.title}</h3>
              <span className="text-brand-blue font-bold mt-2 flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                Ver mais <Icon icon="lucide:arrow-right" className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
