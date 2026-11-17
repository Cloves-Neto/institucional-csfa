import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export interface PageHeroProps {
  eyebrow?: string;
  badge?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  backgroundImage?: string;
  ctaText?: string;
  ctaHref?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  badge,
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaHref,
  children,
}) => {
  const pillText = eyebrow || badge;

  return (
    <section className="relative bg-brand-navy text-white pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
        {pillText && (
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-brand-yellow border border-white/15 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
            {pillText}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            {subtitle}
          </p>
        )}

        {ctaText && ctaHref && (
          <div className="mt-8">
            {ctaHref.startsWith('http') ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-yellow text-brand-navy font-bold text-sm hover:brightness-105 transition-all shadow-lg"
              >
                {ctaText}
                <Icon icon="lucide:arrow-right" className="w-4 h-4" />
              </a>
            ) : (
              <Link
                to={ctaHref}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-yellow text-brand-navy font-bold text-sm hover:brightness-105 transition-all shadow-lg"
              >
                {ctaText}
                <Icon icon="lucide:arrow-right" className="w-4 h-4" />
              </Link>
            )}
          </div>
        )}

        {children && <div className="mt-8 w-full">{children}</div>}
      </div>
    </section>
  );
};

export default PageHero;
