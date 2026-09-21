import { PageHero } from '@/components/shared/PageHero';
import { ContactCTA } from '@/components/shared/ContactCTA';
import { CalendarSection } from '@/features/calendar';

export const CalendarioEscolar = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 flex flex-col">
      <PageHero
        title={<>Calendário <span className="text-brand-blue">Escolar</span></>}
        subtitle="Acompanhe eventos, feriados e datas importantes do ano letivo."
      />

      <main className="flex-1 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <CalendarSection />
          <ContactCTA />
        </div>
      </main>
    </div>
  );
};

export default CalendarioEscolar;
