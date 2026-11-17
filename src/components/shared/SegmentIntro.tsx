import React from 'react';
import { Icon } from '@iconify/react';
import type { SegmentPillar } from '@/features/academic/data/segments.data';

export interface SegmentIntroProps {
  badge?: string;
  title?: React.ReactNode;
  paragraphs: string[];
  pillarsTitle?: string;
  pillars?: SegmentPillar[];
  highlights?: Array<SegmentPillar | string>;
  image?: string;
  imageAlt?: string;
}

export const SegmentIntro: React.FC<SegmentIntroProps> = ({
  badge,
  title,
  paragraphs,
  pillarsTitle = 'Pilares do Segmento',
  pillars,
  highlights,
  image,
  imageAlt = 'Colégio São Francisco de Assis',
}) => {
  const resolvedPillars: SegmentPillar[] =
    pillars ||
    (highlights
      ? highlights.map((h) =>
          typeof h === 'string' ? { title: h, description: '' } : h
        )
      : []);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Texto Introdutório */}
        <div className={image ? 'lg:col-span-7 space-y-6' : 'lg:col-span-12 max-w-4xl mx-auto space-y-6'}>
          {badge && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue">
              {badge}
            </span>
          )}

          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy leading-tight">
              {title}
            </h2>
          )}

          <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        {image && (
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* Pilares / Destaques */}
      {resolvedPillars.length > 0 && (
        <div className="mt-16">
          {pillarsTitle && (
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-8 rounded-full bg-brand-yellow" />
              <h3 className="text-xl sm:text-2xl font-black text-brand-navy tracking-tight">
                {pillarsTitle}
              </h3>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resolvedPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-brand-blue/20 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col gap-3"
              >
                <div className="w-11 h-11 rounded-2xl bg-brand-navy text-brand-yellow flex items-center justify-center font-black text-sm shadow-sm">
                  <Icon icon="lucide:check-circle-2" className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-brand-navy">
                  {pillar.title}
                </h4>
                {pillar.description && (
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SegmentIntro;
