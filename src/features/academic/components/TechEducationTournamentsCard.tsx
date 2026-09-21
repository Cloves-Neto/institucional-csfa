import { Icon } from '@iconify/react';

export const TechEducationTournamentsCard = () => {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-brand-navy/5">
      <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">Torneios e Competências Desenvolvidas</h2>
      
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-14 h-14 shrink-0 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mt-1">
            <Icon icon="lucide:users" className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-800 mb-2">Torneios Internos e Colaboração</h4>
            <p className="text-slate-600 leading-relaxed">
              Incentivamos o trabalho em equipe através de torneios internos de robótica promovidos pelo próprio colégio. 
              Os alunos vivenciam o espírito de equipe, aprendem a gerenciar conflitos, dividem tarefas e celebram conquistas conjuntas.
            </p>
          </div>
        </div>

        <hr className="border-slate-100" />

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-14 h-14 shrink-0 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mt-1">
            <Icon icon="lucide:lightbulb" className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-800 mb-2">Criatividade e Resolução de Problemas</h4>
            <p className="text-slate-600 leading-relaxed">
              Nossas aulas são desenhadas com base na aprendizagem baseada em projetos. 
              Os alunos são desafiados a resolver problemas do mundo real criando soluções criativas, testando hipóteses, errando e corrigindo, o que desenvolve o pensamento crítico e a resiliência.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
