import { Icon } from '@iconify/react';

interface SelectedDayDetailsProps {
  selectedDate: string;
  selectedEvents: { label: string; cor: string }[];
}

export const SelectedDayDetails = ({ selectedDate, selectedEvents }: SelectedDayDetailsProps) => {
  if (!selectedDate || selectedEvents.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-brand-blue/20 p-4 flex items-start gap-3">
      <Icon icon="lucide:calendar-days" className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
          {new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
          })}
        </p>
        <ul className="space-y-1">
          {selectedEvents.map((ev, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: ev.cor }}></span>
              {ev.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
