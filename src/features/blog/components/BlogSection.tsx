import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { Icon } from '@iconify/react';
import { useBlogPosts } from '../hooks/useBlogPosts';

export const BlogSection = () => {
  const { posts } = useBlogPosts();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: any) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4 leading-tight">
            Acontece <br/> <span className="text-brand-blue">CSFA</span>
          </h2>
          <p className="text-slate-500">Últimas notícias, projetos pedagógicos e comunicados</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-brand-navy disabled:hover:border-slate-200 transition-colors"
              aria-label="Anterior"
            >
              <Icon icon="lucide:chevron-left" className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white hover:border-brand-blue disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-brand-navy disabled:hover:border-slate-200 transition-colors"
              aria-label="Próximo"
            >
              <Icon icon="lucide:chevron-right" className="w-5 h-5" />
            </button>
          </div>

          <Link
            to="/noticias"
            className="hidden sm:flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all"
          >
            Ver todas as notícias
            <Icon icon="lucide:arrow-right" className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="overflow-hidden -mx-4 px-4 py-4" ref={emblaRef}>
        {posts.length === 0 ? (
          <div className="py-16 px-6 text-center flex flex-col items-center justify-center space-y-4">
            <Icon icon="lucide:newspaper" className="w-12 h-12 text-slate-300" />
            <h3 className="text-base text-slate-500 max-w-xl">
              Acompanhe nossas redes sociais. Novos eventos e notícias serão publicados em breve.
            </h3>
          </div>
        ) : (
          <div className="flex gap-6">
            {posts.map((item) => (
              <div 
                key={item.id} 
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <article className="h-full bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-xl hover:border-slate-200 transition-all duration-300 group">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1.5 rounded-full">
                        {item.tag}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {item.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">
                      {item.author || "Redação CSFA"}
                    </span>
                    <Link
                      to={`/noticias/${item.slug || item.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors"
                    >
                      Ler mais
                      <Icon icon="lucide:arrow-right" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-8 text-center sm:hidden">
        <Link
          to="/noticias"
          className="inline-flex items-center gap-2 text-brand-blue font-bold"
        >
          Ver todas as notícias
          <Icon icon="lucide:arrow-right" className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
