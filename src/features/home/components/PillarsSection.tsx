import { Icon } from '@iconify/react';

const pillars = [
  {
    icon: 'lucide:check',
    title: 'Formação Integral',
    description: 'Desenvolvemos o potencial acadêmico, emocional e social do estudante.'
  },
  {
    icon: 'lucide:heart-handshake',
    title: 'Ensino Cristão e Princípios',
    description: 'Nossa educação é guiada pela fé e por valores sólidos, formando cidadãos éticos, fraternos e preparados para a vida.'
  },
  {
    icon: 'lucide:award',
    title: 'Excelência com valores',
    description: 'Ensino forte que inspira escolhas éticas e cidadania.'
  },
  {
    icon: 'lucide:hand-heart',
    title: 'Ambiente acolhedor',
    description: 'Respeito, solidariedade e fé em uma comunidade que acolhe de verdade.'
  }
];

export const PillarsSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, i) => {
            return (
              <div key={i} className="group relative overflow-hidden rounded-4xl bg-white shadow-xl shadow-brand-navy/5 border border-slate-100 flex flex-col items-center justify-center p-8 text-center aspect-square transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 hover:border-brand-blue/30 w-full">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 bg-brand-blue"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform bg-brand-blue">
                    <Icon icon={pillar.icon} className="w-8 h-8 text-brand-navy" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
