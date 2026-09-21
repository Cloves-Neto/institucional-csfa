import { Icon } from '@iconify/react';
import type { SegmentIntroProps } from './types';

export const SegmentIntro = ({ paragraphs, pillarsTitle = "Pilares Essenciais", pillars }: SegmentIntroProps) => {
  return (
    <section className="px-6 max-w-6xl mx-auto pt-16 pb-12 mb-12">
      <div className="flex flex-col gap-8">
        
        {/* Navy Card Principal */}
        <div className="bg-brand-navy rounded-3xl p-8 md:p-14 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none -mr-10 -mt-10" />
          <div className="relative z-10 space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed text-justify md:text-left max-w-4xl">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Pilares Grid */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm mt-4">
          <h3 className="text-2xl font-black text-brand-navy mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
              <Icon icon="lucide:target" className="w-5 h-5" />
            </span>
            {pillarsTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-start gap-3">
                <strong className="text-brand-navy text-lg leading-tight">{pillar.title}</strong>
                <span className="text-slate-600 text-sm leading-relaxed block">{pillar.description}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
