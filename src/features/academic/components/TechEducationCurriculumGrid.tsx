import { Icon } from '@iconify/react';

export const TechEducationCurriculumGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-4">
        <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
          <Icon icon="lucide:monitor-play" className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy">Informática Básica</h3>
        <p className="text-slate-600 leading-relaxed">
          Os alunos aprendem os fundamentos da computação, desenvolvendo letramento digital. 
          Desde o uso correto de ferramentas digitais, pacotes de escritório, segurança na internet até noções iniciais de lógica de programação.
        </p>
      </div>

      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col gap-4">
        <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
          <Icon icon="lucide:cpu" className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-brand-navy">Robótica com VIA Maker</h3>
        <p className="text-slate-600 leading-relaxed">
          Utilizamos as avançadas soluções da <strong>VIA Maker e LEGO® Education</strong>. 
          A metodologia hands-on (mão na massa) engaja os estudantes em desafios de engenharia e programação, montando e programando robôs reais.
        </p>
      </div>
    </div>
  );
};
