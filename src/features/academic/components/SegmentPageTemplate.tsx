import React from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { SegmentIntro } from '@/components/shared/SegmentIntro';
import { ContactCTA } from '@/components/shared/ContactCTA';
import { ActivityZigZag } from './ActivityZigZag';
import type { SegmentConfig } from '../data/segments.data';

export interface SegmentPageTemplateProps {
  segment: SegmentConfig;
}

export const SegmentPageTemplate: React.FC<SegmentPageTemplateProps> = ({ segment }) => {
  return (
    <div className="bg-white font-sans text-slate-800">
      <PageHero
        eyebrow={segment.eyebrow}
        title={segment.title}
        subtitle={segment.subtitle}
      />

      <main className="pb-32">
        <SegmentIntro
          paragraphs={segment.paragraphs}
          pillarsTitle={segment.pillarsTitle}
          pillars={segment.pillars}
        />
        <ActivityZigZag activities={segment.activities} />
        <div className="max-w-6xl mx-auto px-6">
          <ContactCTA />
        </div>
      </main>
    </div>
  );
};
