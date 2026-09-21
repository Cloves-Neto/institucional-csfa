import { Icon } from '@iconify/react';

const facilities = [
  { text: 'Salas climatizadas com projeção multimídia', icon: 'mdi:projector' },
  { text: 'Carteiras ergonômicas para maior conforto', icon: 'mdi:chair-school' },
  { text: 'Quadra poliesportiva coberta', icon: 'mdi:basketball' },
  { text: 'Laboratório de Química equipado', icon: 'mdi:flask' },
  { text: 'Biblioteca atualizada e silenciosa', icon: 'mdi:bookshelf' },
  { text: 'Cantina e refeitório espaçoso', icon: 'mdi:silverware-fork-knife' },
  { text: 'Laboratório de Informática completo', icon: 'mdi:monitor' },
  { text: 'Depto. de TI e Suporte dedicado ao aluno', icon: 'mdi:headset' },
];

export const SchoolStructureGrid = () => {
  return (
    <div className="mb-16">
      <div className="text-left">
        <h2 className="text-3xl font-black text-brand-navy mb-6">Nossa Estrutura</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-12">
          Oferecemos um ambiente moderno e projetado para o conforto e aprendizado dos nossos alunos, combinando tecnologia e acolhimento em cada espaço.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                <Icon icon={item.icon} className="w-6 h-6" />
              </div>
              <span className="text-slate-700 font-medium leading-snug">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
