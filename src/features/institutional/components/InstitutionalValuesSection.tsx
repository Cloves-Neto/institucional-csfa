import { Icon } from '@iconify/react';

const valores = [
  { icon: <Icon icon="lucide:heart" className="w-5 h-5" />, title: 'Fraternidade', desc: 'Inspirados em São Francisco de Assis, cultivamos o cuidado genuíno com o próximo e o espírito de solidariedade.' },
  { icon: <Icon icon="lucide:users" className="w-5 h-5" />, title: 'Corresponsabilidade', desc: 'Escola, família e sociedade são igualmente responsáveis pela formação integral de cada aluno.' },
  { icon: <Icon icon="lucide:globe" className="w-5 h-5" />, title: 'Cidadania', desc: 'Preparar o aluno para exercer seus direitos e deveres, atuando de forma crítica e consciente na sociedade.' },
  { icon: <Icon icon="lucide:target" className="w-5 h-5" />, title: 'Dignidade', desc: 'Respeito incondicional à singularidade de cada pessoa, valorizando suas diferenças e potencialidades.' },
  { icon: <Icon icon="lucide:book-open" className="w-5 h-5" />, title: 'Ética', desc: 'Formação moral sólida, com princípios que guiam as escolhas pessoais e profissionais ao longo da vida.' },
  { icon: <Icon icon="lucide:check-circle2" className="w-5 h-5" />, title: 'Autonomia', desc: 'Estímulo ao desenvolvimento da independência e da responsabilidade desde os primeiros anos escolares.' }
];

export const InstitutionalValuesSection = () => {
  return (
    <div className="py-8">
      <div className="max-w-3xl mb-12 text-left">
        <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4 tracking-tight">Nossos Valores</h2>
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">Inspirados na espiritualidade franciscana, cultivamos princípios que formam não apenas bons alunos, mas boas pessoas.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {valores.map((valor, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col gap-4 items-start hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
              {valor.icon}
            </div>
            <div>
              <h4 className="font-bold text-brand-navy mb-2 text-xl tracking-tight">{valor.title}</h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">{valor.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
