import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const modalities = [
  { name: 'Vôlei', icon: <Icon icon="mdi:volleyball" className="w-8 h-8" /> },
  { name: 'Futsal', icon: <Icon icon="mdi:soccer" className="w-8 h-8" /> },
  { name: 'Judô', icon: <Icon icon="mdi:karate" className="w-8 h-8" /> },
  { name: 'Dança', icon: <Icon icon="mdi:dance-ballroom" className="w-8 h-8" /> },
  { name: 'Balé', icon: <Icon icon="mdi:shoe-ballet" className="w-8 h-8" /> },
  { name: 'Teatro', icon: <Icon icon="mdi:drama-masks" className="w-8 h-8" /> },
];

export const ExtracurricularsPreview = () => {
  return (
    <div className="mb-16">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-black text-brand-navy mb-6">Atividades Extracurriculares</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Incentivamos a prática de esportes e atividades culturais no contraturno escolar para promover a saúde física, a disciplina e o desenvolvimento das habilidades socioemocionais dos nossos alunos.
          </p>
          <Link 
            to="/extracurriculares" 
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors shadow-md"
          >
            Ver todas as modalidades <Icon icon="lucide:arrow-right" className="w-5 h-5" />
          </Link>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
          {modalities.map((mod, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow cursor-default border border-slate-100 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-2">
                {mod.icon}
              </div>
              <span className="font-bold text-brand-navy">{mod.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
