import type { ActivityItem } from '../data/segments.data';

interface ActivityZigZagProps {
  activities: ActivityItem[];
  title?: string;
  subtitle?: string;
  badgeText?: string;
}

export const ActivityZigZag = ({
  activities,
  title = 'Atividades Destaque',
  subtitle = 'Projetos estruturados que complementam a matriz curricular e estimulam o desenvolvimento múltiplo.',
  badgeText = 'Metodologia',
}: ActivityZigZagProps) => {
  return (
    <section className="px-6 max-w-6xl mx-auto relative">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4 tracking-tight">
          {title.split(' ')[0]} <span className="text-brand-blue">{title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <p className="text-slate-500 text-lg">{subtitle}</p>
      </div>

      <div className="space-y-24 lg:space-y-32">
        {activities.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
              item.reversed ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Imagem */}
            <div className="w-full md:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 md:h-96 lg:h-112 object-cover"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-brand-blue/10 text-brand-blue font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider mb-6">
                {badgeText}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-brand-navy mb-6 leading-tight">
                {item.title}
              </h3>
              <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                {item.desc.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
