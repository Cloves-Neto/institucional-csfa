// Tipos para os Pilares

export interface Pillar {
  title: string;
  description: string;
}

export interface SegmentIntroProps {
  paragraphs: string[];
  pillarsTitle?: string;
  pillars: Pillar[];
}
