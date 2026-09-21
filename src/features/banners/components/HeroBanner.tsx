import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Icon } from '@iconify/react';
import { useBanners } from '../hooks/useBanners';

export const HeroBanner = () => {
  const { banners } = useBanners();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((api: any) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  const displayBanners = banners;

  if (displayBanners.length === 0) {
    return (
      <section className="w-full h-[400px] md:h-[500px] lg:h-[650px] flex flex-col items-center justify-center bg-brand-navy text-white relative overflow-hidden">
        
        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black drop-shadow-lg tracking-tight uppercase">
            Colégio São Francisco de Assis
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-light">
            Educação de excelência, valores humanos e inovação. Formando cidadãos éticos e preparados para os desafios do futuro.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300" aria-label="Instagram">
              <Icon icon="mdi:instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300" aria-label="Facebook">
              <Icon icon="mdi:facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300" aria-label="YouTube">
              <Icon icon="mdi:youtube" className="w-6 h-6" />
            </a>
            <a href="/contato" className="ml-2 px-8 py-3 bg-brand-blue text-white font-bold rounded-full hover:brightness-110 transition-all uppercase tracking-wide">
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full relative overflow-hidden group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {displayBanners.map((slide) => {
            const content = (
              <div 
                key={slide.id} 
                className="flex-[0_0_100%] min-w-0 h-[400px] md:h-[500px] lg:h-[650px] w-full flex items-center justify-center text-white relative select-none"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" 
                  style={{ backgroundImage: `url(${slide.imageUrl})` }} 
                />
              </div>
            );

            if (slide.targetUrl) {
              const isExternal = slide.targetUrl.startsWith('http');
              return isExternal ? (
                <a key={slide.id} href={slide.targetUrl} target="_blank" rel="noopener noreferrer" className="flex-[0_0_100%] min-w-0 block">
                  {content}
                </a>
              ) : (
                <div key={slide.id} className="flex-[0_0_100%] min-w-0 cursor-pointer" onClick={() => window.location.href = slide.targetUrl!}>
                  {content}
                </div>
              );
            }

            return content;
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors opacity-0 group-hover:opacity-100 drop-shadow-md z-20"
        aria-label="Slide anterior"
      >
        <Icon icon="lucide:chevron-left" className="w-8 h-8" />
      </button>

      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors opacity-0 group-hover:opacity-100 drop-shadow-md z-20"
        aria-label="Próximo slide"
      >
        <Icon icon="lucide:chevron-right" className="w-8 h-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-brand-yellow w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
