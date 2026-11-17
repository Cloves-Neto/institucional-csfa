const facilities = [
  {
    title: 'Fachada & Pátio Central',
    subtitle: 'Ambiente seguro, acolhedor e planejado para todas as faixas etárias',
    image: '/interno-colegio.jpg',
    spanClass: 'md:col-span-2 md:row-span-2 min-h-[260px] md:min-h-0',
    isLarge: true,
  },
  {
    title: 'Laboratórios',
    subtitle: 'Ciências e práticas experimentais',
    image: '/ensino-medio/laboratorio.jpg',
    spanClass: 'min-h-[180px] md:min-h-0',
  },
  {
    title: 'Refeitório & Culinária',
    subtitle: 'Nutrição balanceada e oficinas',
    image: '/educacao-infantil/culinaria.jpg',
    spanClass: 'min-h-[180px] md:min-h-0',
  },
  {
    title: 'Biblioteca',
    subtitle: 'Leitura, pesquisa e cultura',
    image: '/sobre.svg',
    spanClass: 'min-h-[180px] md:min-h-0',
  },
  {
    title: 'Informática & Tecnologia',
    subtitle: 'Cultura digital e robótica',
    image: '/tecnologia-educacional.svg',
    spanClass: 'min-h-[180px] md:min-h-0',
  },
  {
    title: 'Quadras Poliesportivas',
    subtitle: 'Esportes, integração e saúde',
    image: '/aluno.svg',
    spanClass: 'min-h-[180px] md:min-h-0',
  },
];

export const FacilitiesBento = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 leading-tight">
          Nossa <br /> <span className="text-brand-blue">Estrutura</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:h-[600px]">
        {facilities.map((item) => (
          <div
            key={item.title}
            className={`${item.spanClass} bg-brand-navy rounded-3xl overflow-hidden relative group shadow-md border border-slate-100`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent group-hover:from-brand-navy/75 transition-colors z-10" />
            <div className={`absolute ${item.isLarge ? 'bottom-6 left-6 right-6' : 'bottom-4 left-4 right-4'} z-20`}>
              <span className="inline-block w-6 h-1 rounded-full bg-brand-yellow mb-2" />
              <h3
                className={`${
                  item.isLarge ? 'text-2xl' : 'text-lg'
                } font-bold text-white drop-shadow-xs leading-snug`}
              >
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-xs text-slate-200/90 mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
