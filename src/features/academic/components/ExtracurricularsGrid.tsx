import { Icon } from '@iconify/react';

const activities = [
  {
    title: 'Vôlei',
    desc: 'Trabalho em equipe, coordenação motora e agilidade. As aulas de vôlei desenvolvem o condicionamento físico e o senso de cooperação e estratégia.',
    icon: 'mdi:volleyball',
  },
  {
    title: 'Futsal',
    desc: 'Um dos esportes mais amados, o futsal estimula a disciplina, o respeito às regras, a rápida tomada de decisões e o fortalecimento físico dos alunos.',
    icon: 'mdi:soccer',
  },
  {
    title: 'Judô',
    desc: 'Arte marcial milenar que trabalha o corpo e a mente. Foco na concentração, disciplina, respeito mútuo e defesa pessoal, sempre de forma pedagógica.',
    icon: 'mdi:karate',
  },
  {
    title: 'Dança',
    desc: 'Expressão corporal e ritmo! A dança ajuda na desinibição, coordenação motora fina, memória coreográfica e socialização entre as turmas.',
    icon: 'mdi:dance-ballroom',
  },
  {
    title: 'Balé',
    desc: 'Postura, flexibilidade e muita elegância. O balé clássico é essencial para o desenvolvimento da força muscular e da consciência corporal desde cedo.',
    icon: 'mdi:shoe-ballet',
  },
  {
    title: 'Teatro',
    desc: 'Oratória, empatia e criatividade. O teatro é uma ferramenta poderosa para alunos vencerem a timidez, melhorarem a dicção e explorarem a imaginação.',
    icon: 'mdi:drama-masks',
  },
];

export const ExtracurricularsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
      {activities.map((item, index) => (
        <div 
          key={index} 
          className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
        >
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 border border-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-500">
              <Icon 
                icon={item.icon} 
                className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-500" 
              />
            </div>
            <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tight">
              {item.title}
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>

          <div className="mt-auto pt-8 relative z-10 flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            <div className="w-8 h-1 bg-brand-blue rounded-full" />
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Saiba Mais na Secretaria</span>
          </div>
        </div>
      ))}
    </div>
  );
};
