import { Icon } from '@iconify/react';

export const PartnersSection = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-white max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 leading-tight">
          Construindo o <br/> <span className="text-brand-blue">Futuro</span>
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Parcerias de valor e que transformam
        </p>
      </div>

      {/* Marquee (Infinite Carousel) */}
      <div className="w-full overflow-hidden flex whitespace-nowrap mb-16 opacity-70">
        <div className="animate-marquee flex gap-8 lg:gap-10 items-center">
          {/* Logos */}
          {[
            '/partners/google.png',
            '/partners/kumon.png',
            '/partners/maker.png',
            '/partners/notas-ouro.png',
            '/partners/raia-livre.png',
            '/partners/sas.png',
            '/partners/yazigi.png'
          ].map((src, i) => (
            <img key={i} src={src} alt="Parceiro" className="h-12 object-contain" />
          ))}
          {/* Duplicated for smooth infinite loop */}
          {[
            '/partners/google.png',
            '/partners/kumon.png',
            '/partners/maker.png',
            '/partners/notas-ouro.png',
            '/partners/raia-livre.png',
            '/partners/sas.png',
            '/partners/yazigi.png'
          ].map((src, i) => (
            <img key={i + 'dup'} src={src} alt="Parceiro" className="h-12 object-contain" />
          ))}
        </div>
      </div>

      {/* Mini Bento Grid - Agora com 4 cards, estilo square (proporção quadrada) ajustável */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <div className="group relative overflow-hidden rounded-4xl bg-white shadow-xl shadow-brand-navy/5 border border-slate-100 flex flex-col items-center justify-center p-8 text-center aspect-square transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 hover:border-brand-blue/30 w-full">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 bg-brand-blue"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform bg-brand-blue">
              <Icon icon="lucide:shield-check" className="w-8 h-8 text-brand-navy" strokeWidth={2} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-3 leading-tight">Qualidade Garantida</h3>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
              Parceiros com comprovada excelência em suas áreas de atuação.
            </p>
          </div>
        </div>
        
        <div className="group relative overflow-hidden rounded-4xl bg-white shadow-xl shadow-brand-navy/5 border border-slate-100 flex flex-col items-center justify-center p-8 text-center aspect-square transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 hover:border-brand-blue/30 w-full">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 bg-brand-blue"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform bg-brand-blue">
              <Icon icon="lucide:heart-handshake" className="w-8 h-8 text-brand-navy" strokeWidth={2} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-3 leading-tight">Confiança Mútua</h3>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
              Relacionamentos duradouros baseados em transparência e resultados.
            </p>
          </div>
        </div>
        
        <div className="group relative overflow-hidden rounded-4xl bg-white shadow-xl shadow-brand-navy/5 border border-slate-100 flex flex-col items-center justify-center p-8 text-center aspect-square transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 hover:border-brand-blue/30 w-full">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 bg-brand-blue"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform bg-brand-blue">
              <Icon icon="lucide:lightbulb" className="w-8 h-8 text-brand-navy" strokeWidth={2} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-3 leading-tight">Inovação Constante</h3>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
              Sempre na vanguarda das melhores práticas educacionais para nossos alunos.
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-4xl bg-white shadow-xl shadow-brand-navy/5 border border-slate-100 flex flex-col items-center justify-center p-8 text-center aspect-square transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 hover:border-brand-blue/30 w-full">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 bg-brand-blue"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform bg-brand-blue">
              <Icon icon="lucide:award" className="w-8 h-8 text-brand-navy" strokeWidth={2} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-3 leading-tight">Alto Desempenho</h3>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
              Foco em resultados expressivos e aprovações nos melhores vestibulares.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
